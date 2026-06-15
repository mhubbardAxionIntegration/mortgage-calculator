import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { MONETIZATION } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Creates a Stripe Checkout Session for the premium PDF report. */
export async function POST(req: Request) {
  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json(
      { error: "stripe_not_configured" },
      { status: 503 },
    );
  }

  const origin = new URL(req.url).origin;

  let returnPath = "/mortgage-calculator";
  try {
    const body = await req.json();
    if (typeof body?.returnPath === "string" && body.returnPath.startsWith("/")) {
      returnPath = body.returnPath;
    }
  } catch {
    /* no body provided; use default */
  }

  const priceId = process.env.STRIPE_PRICE_ID;
  const lineItem: Stripe.Checkout.SessionCreateParams.LineItem = priceId
    ? { price: priceId, quantity: 1 }
    : {
        quantity: 1,
        price_data: {
          currency: "usd",
          unit_amount: MONETIZATION.premium.priceCents,
          product_data: { name: MONETIZATION.premium.productName },
        },
      };

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [lineItem],
      success_url: `${origin}/api/unlock?session_id={CHECKOUT_SESSION_ID}&return=${encodeURIComponent(returnPath)}`,
      cancel_url: `${origin}${returnPath}`,
    });
    return NextResponse.json({ url: session.url });
  } catch {
    return NextResponse.json({ error: "checkout_failed" }, { status: 500 });
  }
}
