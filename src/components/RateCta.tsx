import { MONETIZATION } from "@/lib/site";
import { buildRateQuoteUrl, isAffiliateEnabled, type QuotePrefill } from "@/lib/monetization";

/**
 * Affiliate / lead-gen call-to-action. Renders a prominent "Get personalized
 * rates" block that deep-links to your partner with pre-filled context.
 * Hidden until an affiliate URL is configured so empty partner boxes never
 * look like unfinished monetization.
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
    return null;
  }

  return (
    <section
      aria-label="Get personalized mortgage rates"
      className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-sky-900/20 bg-gradient-to-br from-sky-950 to-sky-800 p-6 text-center text-white shadow-sm"
    >
      <h2 className="text-xl font-bold tracking-tight sm:text-2xl">{heading}</h2>
      <p className="mx-auto mt-2 max-w-xl text-sm text-sky-50">{subtext}</p>
      <a
        href={href}
        target="_blank"
        rel="sponsored nofollow noopener"
        className="mt-5 inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-sky-800 shadow-sm transition hover:bg-sky-50"
      >
        {cta}
      </a>
      <p className="mt-3 text-xs text-sky-100/80">
        {MONETIZATION.affiliate.disclosure}
      </p>
    </section>
  );
}

export { isAffiliateEnabled };
