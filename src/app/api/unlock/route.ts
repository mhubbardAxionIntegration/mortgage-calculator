import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { MONETIZATION } from "@/lib/site";
import { issueLicense, isLicensingConfigured } from "@/lib/license";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Stripe success redirect target. Verifies the Checkout Session was actually
 * paid before granting access, so the premium PDF can't be unlocked just by
 * guessing the URL. When licensing is configured it issues a signed,
 * email-bound license key (usable on any device); otherwise it falls back to
 * the shared unlock code.
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const sessionId = url.searchParams.get("session_id");
  const ret = url.searchParams.get("return") ?? "/mortgage-calculator";
  const safeReturn = ret.startsWith("/") ? ret : "/mortgage-calculator";

  const stripe = getStripe();
  if (!stripe || !sessionId) {
    return NextResponse.redirect(new URL(safeReturn, url.origin));
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status === "paid") {
      const dest = new URL(safeReturn, url.origin);
      const email =
        session.customer_details?.email ?? session.customer_email ?? "";
      const license = isLicensingConfigured() && email ? issueLicense(email) : null;

      if (license) {
        dest.searchParams.set("license", license);
      } else {
        dest.searchParams.set("unlock", MONETIZATION.premium.unlockCode);
      }
      return NextResponse.redirect(dest);
    }
  } catch {
    /* fall through to the plain redirect below */
  }

  return NextResponse.redirect(new URL(safeReturn, url.origin));
}
