export const SITE = {
  name: "PayMortgage Calculator",
  shortName: "PayMortgage",
  // Update this to your production domain before deploying.
  url: "https://www.smartmortgagecalc.com",
  description:
    "Free mortgage calculator with taxes, insurance, PMI and a full amortization schedule. Estimate your monthly payment and find out how much house you can afford.",
  locale: "en_US",
  twitter: "@paymortgagecalc",
  // Indicative national average used as a sensible default. Replace with a live
  // rate feed in production and keep the "as of" date current for E-E-A-T.
  defaultRate: 6.75,
  ratesAsOf: "June 2026",
  year: 2026,
  author: {
    name: "PayMortgage Editorial Team",
    role: "Mortgage & home-finance writers",
  },
} as const;

export function absoluteUrl(path = ""): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${clean === "/" ? "" : clean}`;
}

/**
 * Operating company behind the site. Used on legal pages and the cross-promo
 * CTA. Update these placeholders with your real LLC details before launch.
 */
export const COMPANY = {
  name: "Axion Integration Services, LLC",
  shortName: "Axion Integration Services",
  state: "Georgia",
  // TODO: replace with your real business contact details.
  email: "hello@axionintegration.com",
  phone: "",
  addressLines: ["Franklin, Georgia", "United States"],
  // External site to promote (home/business automation services).
  website: "https://www.axionintegration.com",
  promoHeadline: "Automating a new home in Georgia?",
  promoText:
    "Axion Integration Services designs smart-home and business automation systems across Georgia. Ask us about wiring your new home for the future.",
} as const;

/**
 * Monetization configuration. Everything is OFF until you fill in real IDs and
 * URLs, so no ads or affiliate links render with placeholder values.
 */
export const MONETIZATION = {
  // Google AdSense publisher ID, e.g. "ca-pub-1234567890123456".
  // Leave empty to disable ads (placeholders show only in development).
  adsenseClientId: "",
  ads: {
    // AdSense ad-unit slot IDs (numeric strings). Leave empty to disable a slot.
    inContent: "",
    sidebar: "",
    footer: "",
  },
  // Google Analytics 4 measurement ID, e.g. "G-XXXXXXXXXX". Leave empty to
  // disable analytics. When set, the GA script loads only after the visitor
  // accepts cookies in the consent banner.
  analyticsId: "",
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
  // Show the Axion Integration Services cross-promo CTA.
  showCompanyPromo: true,
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
