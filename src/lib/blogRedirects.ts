/**
 * Retired thin/overlapping Smart Buying URLs → surviving comprehensive guides.
 * Used by next.config.ts as HTTP 301s so crawlers and old links keep equity.
 */
export const BLOG_PERMANENT_REDIRECTS: {
  source: string;
  destination: string;
}[] = [
  // Dated rate snapshot → evergreen 2026 rates guide
  {
    source: "/blog/current-mortgage-rates-june-2026",
    destination: "/blog/current-mortgage-rates-2026",
  },
  // Rate shopping cluster
  {
    source: "/blog/mortgage-points-explained",
    destination: "/blog/how-to-get-the-best-mortgage-rate",
  },
  {
    source: "/blog/one-lender-quote-mistakes",
    destination: "/blog/how-to-get-the-best-mortgage-rate",
  },
  {
    source: "/blog/lender-overlays-vs-loan-guidelines",
    destination: "/blog/how-to-get-the-best-mortgage-rate",
  },
  // Affordability cluster (templated state pages + tax/PITI satellites)
  {
    source: "/blog/how-much-house-can-i-afford-georgia",
    destination: "/blog/how-much-house-can-i-afford",
  },
  {
    source: "/blog/how-much-house-can-i-afford-texas",
    destination: "/blog/how-much-house-can-i-afford",
  },
  {
    source: "/blog/how-much-house-can-i-afford-florida",
    destination: "/blog/how-much-house-can-i-afford",
  },
  {
    source: "/blog/how-much-house-can-i-afford-california",
    destination: "/blog/how-much-house-can-i-afford",
  },
  {
    source: "/blog/property-taxes-mortgage-payment",
    destination: "/blog/how-much-house-can-i-afford",
  },
  {
    source: "/blog/underestimating-piti-housing-costs",
    destination: "/blog/how-much-house-can-i-afford",
  },
  // Refinance cluster
  {
    source: "/blog/refinance-closing-costs-by-state",
    destination: "/blog/should-you-refinance-2026",
  },
  {
    source: "/blog/mortgage-recasting-vs-refinancing",
    destination: "/blog/should-you-refinance-2026",
  },
  // FHA cluster
  {
    source: "/blog/fha-loan-limits-2026-by-county",
    destination: "/blog/fha-vs-conventional-loans",
  },
  {
    source: "/blog/fha-mip-duration-mistakes",
    destination: "/blog/fha-vs-conventional-loans",
  },
  // Cash-to-close / first-time cluster
  {
    source: "/blog/closing-costs-explained",
    destination: "/blog/down-payment-how-much-do-you-need",
  },
  {
    source: "/blog/seller-concessions-and-rate-buydowns",
    destination: "/blog/down-payment-how-much-do-you-need",
  },
  {
    source: "/blog/first-time-homebuyer-guide-georgia",
    destination: "/blog/down-payment-how-much-do-you-need",
  },
  // Credit cluster
  {
    source: "/blog/credit-mistakes-after-mortgage-preapproval",
    destination: "/blog/improve-credit-score-before-buying",
  },
];
