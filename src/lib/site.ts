export const SITE = {
  name: "Smart Mortgage Calculator",
  shortName: "Smart Mortgage Calc",
  // Update this to your production domain before deploying.
  url: "https://www.smartmortgagecalc.com",
  description:
    "Free mortgage tools for payment, affordability, refinance, FHA MIP, and ARM stress testing — plus unique state guides and public methodology. Updated for 2026.",
  seo: {
    /** Home hub — product toolkit, not payment-keyword clone of /mortgage-calculator. */
    homeTitle: "Smart Mortgage Calculator — Free Payment & Affordability Tools (2026)",
    homeH1: "Mortgage tools for the full monthly cost",
    homeDescription:
      "Free mortgage calculators for monthly payment, affordability, refinance break-even, FHA MIP, and ARM stress tests — with unique state guides and transparent methodology for 2026.",
    /** Deep payment calculator / guide page. */
    calculatorTitle: "Free Mortgage Calculator 2026 – Estimate Monthly Payments",
    calculatorH1: "Free Mortgage Calculator 2026",
    calculatorDescription:
      "Estimate your monthly mortgage payment with taxes, insurance, and PMI. Includes amortization schedule, affordability mode, PITI explainers, and FAQs — updated for 2026.",
  },
  locale: "en_US",
  twitter: "@smartmortgagecalc",
  // Indicative national average used as a sensible default. Replace with a live
  // rate feed in production and keep the "as of" date current for E-E-A-T.
  defaultRate: 6.75,
  ratesAsOf: "June 2026",
  year: 2026,
  author: {
    name: "Michael Hubbard",
    role: "Founder & editor",
    /** Short byline used on blog posts. */
    bio: "Founder of Smart Mortgage Calculator and operator of Axion Integration Services, LLC. Builds educational mortgage tools and plain-English guides — estimates are educational, not loan offers.",
    /** Longer About-page credentials without inventing licenses. */
    credentials:
      "Michael designs the calculators, state guides, and editorial standards for this site. Content is reviewed for formula accuracy against the public methodology page; personal rate quotes and underwriting decisions always require a licensed lender.",
  },
} as const;

export function absoluteUrl(path = ""): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${clean === "/" ? "" : clean}`;
}

/**
 * Operating company behind the site. Used on legal pages and optional
 * cross-promo CTAs. Keep website empty while external company sites are offline.
 */
export const COMPANY = {
  name: "Axion Integration Services, LLC",
  shortName: "Axion Integration Services",
  state: "Georgia",
  phone: "",
  addressLines: ["Franklin, Georgia", "United States"],
  /** External company site URL. Leave empty when that site is offline. */
  website: "",
  promoHeadline: "",
  promoText: "",
} as const;

/**
 * Monetization configuration. Everything is OFF until you fill in real IDs and
 * URLs, so no ads or affiliate links render with placeholder values.
 */
export const MONETIZATION = {
  // Google AdSense publisher ID, e.g. "ca-pub-1234567890123456".
  // Leave empty to disable ads (placeholders show only in development).
  adsenseClientId: "ca-pub-1060204849522425",
  ads: {
    // AdSense ad-unit slot IDs (numeric strings). Leave empty to disable a slot.
    inContent: "",
    sidebar: "",
    footer: "",
  },
  // Google Analytics 4 measurement ID, e.g. "G-XXXXXXXXXX". Leave empty to
  // disable analytics. When set, the GA script loads only after the visitor
  // accepts cookies in the consent banner.
  analyticsId: "G-PSELBZR91H",
  affiliate: {
    // Lead-gen / affiliate destination for "Get personalized rates" CTAs.
    // e.g. your LendingTree, Rocket Mortgage, or FlexOffers tracking link.
    // Calculator values are appended as query params for better conversion.
    rateQuoteUrl: "",
    // Optional secondary affiliate offers.
    homeInsuranceUrl: "",
    refinanceUrl: "",
    // Subtext shown under the "Get personalized rates" heading. Keep this
    // neutral — avoid promising specific rates or "no credit impact" unless
    // your partner guarantees a soft credit pull, as such claims can be
    // considered deceptive (FTC / UDAAP).
    subtext:
      "Compare personalized mortgage offers from top lenders in a few minutes.",
    // Network/program disclosure shown near affiliate CTAs (FTC compliance).
    disclosure:
      "We may earn a commission if you get a quote or loan through our partners, at no extra cost to you.",
  },
  // Off-topic cross-promo weakens mortgage topical focus for AdSense review.
  showCompanyPromo: false,
  // Freemium premium features (e.g. branded PDF export of the amortization
  // schedule). When `locked` is false the feature is free for everyone, so it
  // works out of the box. Set `locked: true` and a `checkoutUrl` (Stripe,
  // Gumroad, Lemon Squeezy, etc.) to charge for it. After a successful
  // purchase, send buyers back with `?unlock=<UNLOCK_CODE>` to grant access.
  premium: {
    locked: false,
    price: "$9",
    // Amount charged via Stripe when no STRIPE_PRICE_ID is configured.
    priceCents: 900,
    productName: "Pro mortgage PDF report",
    label: "Pro PDF report",
    // Optional non-Stripe fallback link (e.g. Gumroad). Stripe takes priority
    // when STRIPE_SECRET_KEY is set in the environment.
    checkoutUrl: "",
    // Shared code that grants access after a verified purchase. The Stripe
    // unlock route redirects buyers to ...?unlock=<unlockCode> on success.
    unlockCode: "PMPRO2026",
  },
} as const;

export function isPremiumLocked(): boolean {
  return Boolean(MONETIZATION.premium.locked);
}

export function isAdsEnabled(): boolean {
  return MONETIZATION.adsenseClientId.trim().length > 0;
}

export function isAnalyticsEnabled(): boolean {
  return MONETIZATION.analyticsId.trim().length > 0;
}

/**
 * Whether a cookie-consent banner is needed at all. Only true once a
 * non-essential script (ads or analytics) is actually configured, so the
 * default out-of-the-box site stays banner-free.
 */
export function isConsentRequired(): boolean {
  return isAdsEnabled() || isAnalyticsEnabled();
}

export function isDev(): boolean {
  return process.env.NODE_ENV !== "production";
}
