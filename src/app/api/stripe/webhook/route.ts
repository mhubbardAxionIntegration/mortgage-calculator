import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { issueLicense } from "@/lib/license";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Stripe webhook — the reliable fulfillment hook (redirects can be missed).
 * Verifies the Stripe signature against the raw body, then issues a license
 * for paid checkouts. This is where you'd email the license to the buyer or
 * record the sale; the license itself is stateless and needs no database.
 */
export async function POST(req: Request) {
  const stripe = getStripe();
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!stripe || !webhookSecret) {
    return NextResponse.json({ error: "webhook_not_configured" }, { status: 503 });
  }

  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "missing_signature" }, { status: 400 });
  }

  const rawBody = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch {
    return NextResponse.json({ error: "invalid_signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    if (session.payment_status === "paid") {
      const email =
        session.customer_details?.email ?? session.customer_email ?? "";
      const license = email ? issueLicense(email) : null;

      // TODO: deliver `license` to the buyer (e.g. email via Resend/SendGrid)
      // and/or record the sale in your store. The license is self-contained,
      // so no database is required for entitlement.
      if (process.env.NODE_ENV !== "production") {
        console.log(
          `[stripe] paid checkout for ${email || "(no email)"} — license ${license ? "issued" : "skipped (LICENSE_SECRET unset)"}`,
        );
      }
    }
  }

  return NextResponse.json({ received: true });
}
