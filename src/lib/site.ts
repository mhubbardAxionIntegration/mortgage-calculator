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
  // Google AdSense publisher ID. Leave empty — this site does not run ads or tracking pixels.
  adsenseClientId: "",
  ads: {
    inContent: "",
    sidebar: "",
    footer: "",
  },
  // Google Analytics ID. Leave empty — this site does not use analytics tracking.
  analyticsId: "",
  affiliate: {
    // Leave empty while affiliate lead-gen is disabled (avoids sending users to trackers).
    rateQuoteUrl: "",
    homeInsuranceUrl: "",
    refinanceUrl: "",
    subtext:
      "Compare personalized mortgage offers from top lenders in a few minutes.",
    disclosure:
      "We may earn a commission if you get a quote or loan through our partners, at no extra cost to you.",
  },
  showCompanyPromo: false,
  premium: {
    locked: false,
    price: "$9",
    priceCents: 900,
    productName: "Pro mortgage PDF report",
    label: "Pro PDF report",
    checkoutUrl: "",
    unlockCode: "PMPRO2026",
  },
} as const;

export function isPremiumLocked(): boolean {
  return Boolean(MONETIZATION.premium.locked);
}

export function isAdsEnabled(): boolean {
  return MONETIZATION.adsenseClientId.trim().length > 0;
}

/** True when at least one AdSense unit can paint (avoid loading adsbygoogle.js for empty slots). */
export function isAdServingEnabled(): boolean {
  if (!isAdsEnabled()) return false;
  return Object.values(MONETIZATION.ads).some((id) => id.trim().length > 0);
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
  return isAdServingEnabled() || isAnalyticsEnabled();
}

export function isDev(): boolean {
  return process.env.NODE_ENV !== "production";
}
