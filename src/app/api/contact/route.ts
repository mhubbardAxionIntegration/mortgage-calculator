import { NextResponse } from "next/server";
import { getContactEmail } from "@/lib/contactEmail";
import { SITE } from "@/lib/site";
import {
  emailDeliveryReady,
  envValue,
  getSmtpConfig,
  logSmtpEnvPresence,
  missingEmailEnvKeys,
  resolveResendApiKey,
  resolveResendFrom,
  smtpConfiguredFlags,
} from "@/lib/smtpEnv";

/** nodemailer / Resend require Node APIs — never run this route on the Edge runtime. */
export const runtime = "nodejs";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
};

type SmtpTransportOptions = {
  host: string;
  port: number;
  secure: boolean;
  auth: { user: string; pass: string };
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isLikelyConnectionError(err: unknown): boolean {
  const code =
    err && typeof err === "object" && "code" in err
      ? String((err as { code?: unknown }).code)
      : "";
  const message = err instanceof Error ? err.message : String(err);
  return (
    code === "ESOCKET" ||
    code === "ECONNECTION" ||
    code === "ETIMEDOUT" ||
    code === "ECONNREFUSED" ||
    /wrong version number|EPROTO|ssl|tls|connect/i.test(message)
  );
}

function smtpErrorKind(err: unknown): "auth" | "connection" | "other" {
  const code =
    err && typeof err === "object" && "code" in err
      ? String((err as { code?: unknown }).code)
      : "";
  const responseCode =
    err && typeof err === "object" && "responseCode" in err
      ? Number((err as { responseCode?: unknown }).responseCode)
      : NaN;
  const message = err instanceof Error ? err.message : String(err);

  if (
    code === "EAUTH" ||
    responseCode === 535 ||
    responseCode === 534 ||
    /invalid login|authentication failed|auth/i.test(message)
  ) {
    return "auth";
  }
  if (isLikelyConnectionError(err)) return "connection";
  return "other";
}

async function sendViaSmtp(
  options: SmtpTransportOptions,
  mail: {
    from: string;
    to: string;
    replyTo: string;
    subject: string;
    text: string;
  },
) {
  const nodemailer = await import("nodemailer");
  const transporter = nodemailer.createTransport(options);
  try {
    await transporter.sendMail(mail);
  } finally {
    transporter.close();
  }
}

async function sendViaResend(mail: {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
}): Promise<{ ok: true } | { ok: false; error: string }> {
  const apiKey = resolveResendApiKey();
  if (!apiKey) return { ok: false, error: "RESEND_API_KEY missing" };

  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: mail.from,
    to: mail.to,
    replyTo: mail.replyTo,
    subject: mail.subject,
    text: mail.text,
  });

  if (error) {
    return { ok: false, error: error.message || "Resend send failed" };
  }
  return { ok: true };
}

/**
 * Accepts contact-form submissions without exposing the inbox address to the
 * browser beyond the public SITE.contactEmail already shown on /contact.
 *
 * Delivery order: Resend (RESEND_API_KEY) → Hostinger SMTP (SMTP_USER/PASS)
 * → 503 in production when neither is configured.
 */
export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  const inbox = getContactEmail();
  const subject = `[${SITE.shortName}] Contact form — ${name}`;
  const text = [`Name: ${name}`, `Reply-to: ${email}`, "", message].join("\n");
  const mailBase = { to: inbox, replyTo: email, subject, text };

  const smtp = getSmtpConfig({
    siteName: SITE.name,
    fallbackEmail: SITE.contactEmail,
  });

  // Preferred path: Resend API (often more reliable env injection than SMTP).
  if (resolveResendApiKey()) {
    const from = resolveResendFrom(SITE.name, SITE.contactEmail);
    try {
      const result = await sendViaResend({ ...mailBase, from });
      if (result.ok) {
        return NextResponse.json({ ok: true, via: "resend" });
      }
      console.error("Contact form Resend send failed:", result.error);
      if (!smtp.ready) {
        logSmtpEnvPresence();
        return NextResponse.json(
          {
            error:
              "Unable to send your message right now. Please try again later.",
          },
          { status: 502 },
        );
      }
      console.error("Contact form falling back to SMTP after Resend failure.");
    } catch (err) {
      console.error("Contact form Resend threw:", err);
      if (!smtp.ready) {
        logSmtpEnvPresence();
        return NextResponse.json(
          {
            error:
              "Unable to send your message right now. Please try again later.",
          },
          { status: 502 },
        );
      }
      console.error("Contact form falling back to SMTP after Resend error.");
    }
  }

  const { host, user, pass, port, from, secure, ready } = smtp;

  if (ready && user && pass) {
    const mail = { from, to: inbox, replyTo: email, subject, text };
    const primary: SmtpTransportOptions = {
      host,
      port,
      secure,
      auth: { user, pass },
    };

    try {
      await sendViaSmtp(primary, mail);
      return NextResponse.json({ ok: true, via: "smtp" });
    } catch (primaryErr) {
      // Hostinger: 465+SSL is preferred; if the host blocks it, retry 587 STARTTLS.
      const canFallback =
        isLikelyConnectionError(primaryErr) &&
        port === 465 &&
        secure === true &&
        !envValue("SMTP_PORT") &&
        !envValue("SMTP_SECURE");

      if (canFallback) {
        console.error(
          "Contact form SMTP primary (465/SSL) failed; retrying 587/STARTTLS:",
          primaryErr instanceof Error ? primaryErr.message : primaryErr,
        );
        try {
          await sendViaSmtp(
            { host, port: 587, secure: false, auth: { user, pass } },
            mail,
          );
          return NextResponse.json({ ok: true, via: "smtp" });
        } catch (fallbackErr) {
          console.error("Contact form SMTP fallback (587) also failed:", fallbackErr);
          logSmtpEnvPresence();
          const kind = smtpErrorKind(fallbackErr);
          if (kind === "auth") {
            return NextResponse.json(
              {
                error:
                  "Email login failed. Check SMTP_USER and SMTP_PASS on the host, then Save / redeploy the app.",
              },
              { status: 502 },
            );
          }
          return NextResponse.json(
            { error: "Unable to send your message right now. Please try again later." },
            { status: 502 },
          );
        }
      }

      console.error("Contact form SMTP send failed:", primaryErr);
      logSmtpEnvPresence();
      const kind = smtpErrorKind(primaryErr);
      if (kind === "auth") {
        return NextResponse.json(
          {
            error:
              "Email login failed. Check SMTP_USER and SMTP_PASS on the host, then Save / redeploy the app.",
          },
          { status: 502 },
        );
      }
      return NextResponse.json(
        { error: "Unable to send your message right now. Please try again later." },
        { status: 502 },
      );
    }
  }

  // No delivery path configured: keep secrets out of the client.
  if (process.env.NODE_ENV !== "production") {
    console.info("[contact] (dev, email not configured)", { to: inbox, subject, text });
    return NextResponse.json({ ok: true, dev: true });
  }

  const configured = smtpConfiguredFlags();
  const missing = missingEmailEnvKeys();
  const delivery = emailDeliveryReady();
  console.error(
    `Contact form received but email is not configured (missing: ${missing.join(", ") || "unknown"}).`,
  );
  logSmtpEnvPresence();
  return NextResponse.json(
    {
      error:
        "Email is not configured on the server. Site operator: set SMTP_USER and SMTP_PASS (or RESEND_API_KEY), then Save / redeploy.",
      configured,
      missing,
      smtpConfigured: delivery.smtp,
      resendConfigured: delivery.resend,
    },
    { status: 503 },
  );
}
