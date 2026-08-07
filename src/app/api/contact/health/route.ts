import { NextResponse } from "next/server";
import {
  emailDeliveryReady,
  missingEmailEnvKeys,
  smtpConfiguredFlags,
  smtpEnvPresence,
} from "@/lib/smtpEnv";

/** Email diagnostics — Node runtime only. */
export const runtime = "nodejs";

/**
 * Safe email configuration probe for Hostinger debugging.
 * Returns booleans only — never secret values.
 *
 * GET /api/contact/health
 */
export async function GET() {
  const configured = smtpConfiguredFlags();
  const delivery = emailDeliveryReady();
  const missing = missingEmailEnvKeys();

  // Also log so Runtime Logs stay useful even if the response is cached/missed.
  console.info("[contact/health] email env presence:", smtpEnvPresence());

  return NextResponse.json(
    {
      ok: delivery.ready,
      emailConfigured: delivery.ready,
      smtpConfigured: delivery.smtp,
      resendConfigured: delivery.resend,
      configured,
      missing,
      hint: delivery.ready
        ? delivery.resend
          ? "RESEND_API_KEY is present (preferred path for Hostinger auto-reply via inbound MX). If send still fails, check Runtime Logs / Resend dashboard and domain verification."
          : "SMTP_USER and SMTP_PASS are present. Delivery works, but Hostinger vacation/auto-reply often skips SMTP self-send (From=To=contact@). Set RESEND_API_KEY + verify domain for auto-reply. If send fails, check Runtime Logs."
        : "No email delivery path configured. On Hostinger: Website → Environment variables → set RESEND_API_KEY (recommended for auto-reply) and/or SMTP_USER + SMTP_PASS → Save (redeploys). Or Deployments → Settings & Redeploy.",
    },
    {
      status: delivery.ready ? 200 : 503,
      headers: {
        // Avoid CDN caching a stale “not configured” result after redeploy.
        "Cache-Control": "no-store",
      },
    },
  );
}
