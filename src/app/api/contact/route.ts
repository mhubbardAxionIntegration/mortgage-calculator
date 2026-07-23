import { NextResponse } from "next/server";
import { getContactEmail } from "@/lib/contactEmail";
import { SITE } from "@/lib/site";

export const runtime = "nodejs";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/**
 * Accepts contact-form submissions without exposing the inbox address to the
 * browser. Delivers via SMTP when SMTP_HOST / SMTP_USER / SMTP_PASS are set;
 * otherwise acknowledges receipt in development only.
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
  const text = [
    `Name: ${name}`,
    `Reply-to: ${email}`,
    "",
    message,
  ].join("\n");

  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  const port = Number(process.env.SMTP_PORT || "465");

  if (host && user && pass) {
    try {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
      });
      await transporter.sendMail({
        from: `"${SITE.name}" <${user}>`,
        to: inbox,
        replyTo: email,
        subject,
        text,
      });
      return NextResponse.json({ ok: true });
    } catch (err) {
      console.error("Contact form SMTP send failed:", err);
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

  console.error("Contact form received but SMTP is not configured.");
  return NextResponse.json(
    { error: "Messaging is temporarily unavailable. Please try again later." },
    { status: 503 },
  );
}
