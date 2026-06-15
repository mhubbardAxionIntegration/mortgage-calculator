import { MONETIZATION } from "@/lib/site";
import { buildRateQuoteUrl, isAffiliateEnabled, type QuotePrefill } from "@/lib/monetization";

/**
 * Affiliate / lead-gen call-to-action. Renders a prominent "Get personalized
 * rates" block that deep-links to your partner with pre-filled context.
 * Hidden in production until an affiliate URL is configured; shows a labeled
 * placeholder in development so you can see placement.
 */
export function RateCta({
  prefill = {},
  heading = "See your personalized rate options",
  subtext = MONETIZATION.affiliate.subtext,
  cta = "Get personalized rates",
}: {
  prefill?: QuotePrefill;
  heading?: string;
  subtext?: string;
  cta?: string;
}) {
  const href = buildRateQuoteUrl(prefill);

  if (!href) {
    if (process.env.NODE_ENV !== "production") {
      return (
        <div className="mx-auto max-w-3xl rounded-2xl border border-dashed border-emerald-300 bg-emerald-50/60 p-5 text-center text-xs font-medium uppercase tracking-wide text-emerald-500">
          Lead-gen CTA (set MONETIZATION.affiliate.rateQuoteUrl)
        </div>
      );
    }
    return null;
  }

  return (
    <section
      aria-label="Get personalized mortgage rates"
      className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-600 to-emerald-700 p-6 text-center text-white shadow-sm"
    >
      <h2 className="text-xl font-bold tracking-tight sm:text-2xl">{heading}</h2>
      <p className="mx-auto mt-2 max-w-xl text-sm text-emerald-50">{subtext}</p>
      <a
        href={href}
        target="_blank"
        rel="sponsored nofollow noopener"
        className="mt-5 inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50"
      >
        {cta}
      </a>
      <p className="mt-3 text-xs text-emerald-100/80">
        {MONETIZATION.affiliate.disclosure}
      </p>
    </section>
  );
}

export { isAffiliateEnabled };
