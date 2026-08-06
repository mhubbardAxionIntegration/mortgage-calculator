import { NextResponse } from "next/server";
import { getContactEmail } from "@/lib/contactEmail";
import { SITE } from "@/lib/site";

/** nodemailer requires Node APIs — never run this route on the Edge runtime. */
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

/** Trim and strip a single layer of wrapping quotes from panel/env UIs. */
function envValue(name: string): string | undefined {
  const raw = process.env[name];
  if (raw == null) return undefined;
  let value = raw.trim();
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    value = value.slice(1, -1).trim();
  }
  return value.length > 0 ? value : undefined;
}

function parsePort(raw: string | undefined, fallback: number): number {
  if (!raw) return fallback;
  const n = Number(raw);
  return Number.isFinite(n) && n > 0 ? n : fallback;
}

function resolveSecure(port: number, secureEnv: string | undefined): boolean {
  if (secureEnv === "true" || secureEnv === "1") return true;
  if (secureEnv === "false" || secureEnv === "0") return false;
  return port === 465;
}

function smtpConfig() {
  // Hostinger default; override with SMTP_HOST if you use another provider.
  const host = envValue("SMTP_HOST") || "smtp.hostinger.com";
  const user = envValue("SMTP_USER");
  const pass = envValue("SMTP_PASS");
  const port = parsePort(envValue("SMTP_PORT"), 465);
  const from =
    envValue("SMTP_FROM") ||
    (user ? `"${SITE.name}" <${user}>` : `"${SITE.name}" <${SITE.contactEmail}>`);
  const secure = resolveSecure(port, envValue("SMTP_SECURE")?.toLowerCase());

  return { host, user, pass, port, from, secure };
}

/** Safe diagnostics only — booleans, never secrets. */
function logSmtpEnvPresence() {
  console.error("[contact] SMTP env presence:", {
    SMTP_HOST: Boolean(envValue("SMTP_HOST")),
    SMTP_PORT: Boolean(envValue("SMTP_PORT")),
    SMTP_USER: Boolean(envValue("SMTP_USER")),
    SMTP_PASS: Boolean(envValue("SMTP_PASS")),
    SMTP_FROM: Boolean(envValue("SMTP_FROM")),
    SMTP_SECURE: Boolean(envValue("SMTP_SECURE")),
    CONTACT_EMAIL: Boolean(envValue("CONTACT_EMAIL")),
  });
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

/**
 * Accepts contact-form submissions without exposing the inbox address to the
 * browser. Delivers via SMTP when SMTP_USER / SMTP_PASS are set
 * (SMTP_HOST defaults to smtp.hostinger.com); otherwise acknowledges receipt
 * in development only.
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

  const { host, user, pass, port, from, secure } = smtpConfig();

  if (user && pass) {
    const mail = { from, to: inbox, replyTo: email, subject, text };
    const primary: SmtpTransportOptions = {
      host,
      port,
      secure,
      auth: { user, pass },
    };

    try {
      await sendViaSmtp(primary, mail);
      return NextResponse.json({ ok: true });
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
          return NextResponse.json({ ok: true });
        } catch (fallbackErr) {
          console.error("Contact form SMTP fallback (587) also failed:", fallbackErr);
          logSmtpEnvPresence();
          const kind = smtpErrorKind(fallbackErr);
          if (kind === "auth") {
            return NextResponse.json(
              {
                error:
                  "Email login failed. Check SMTP_USER and SMTP_PASS on the host, then restart the app.",
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
              "Email login failed. Check SMTP_USER and SMTP_PASS on the host, then restart the app.",
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

  // No SMTP configured: keep the inbox private and avoid mailto fallbacks.
  if (process.env.NODE_ENV !== "production") {
    console.info("[contact] (dev, SMTP not configured)", { to: inbox, subject, text });
    return NextResponse.json({ ok: true, dev: true });
  }

  const missing = [!user && "SMTP_USER", !pass && "SMTP_PASS"].filter(Boolean);
  console.error(
    `Contact form received but SMTP is not configured (missing: ${missing.join(", ") || "unknown"}).`,
  );
  logSmtpEnvPresence();
  return NextResponse.json(
    {
      error:
        "Messaging is temporarily unavailable. Please try again later. (Server email is not configured.)",
    },
    { status: 503 },
  );
}
