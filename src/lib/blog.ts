import { getState, STATES } from "./states";
import type { Block, BlogCategory, BlogPost } from "./blogTypes";
import { ALL_BLOG_POSTS } from "./blogPosts";

export type { Block, BlogCategory, BlogPost };

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    slug: "rates",
    name: "Rates & Market",
    description: "Where mortgage rates are headed and what moves them.",
    intro:
      "Rate guides cover what moves national averages, how your personal quote differs, Loan Estimate shopping, locks vs float-downs, and discount points. Pair any rate article with a full PITI estimate — taxes and insurance often move the payment more than a small rate change.",
    relatedTools: [
      { href: "/", label: "Mortgage calculator" },
      { href: "/calculators/refinance-mortgage-calculator", label: "Refinance break-even" },
      { href: "/blog/how-to-get-the-best-mortgage-rate", label: "Best-rate shopping guide" },
    ],
  },
  {
    slug: "affordability",
    name: "Affordability",
    description: "How much house you can afford and how to budget for it.",
    intro:
      "Affordability is more than a DTI rule of thumb. These guides walk through income, debts, and local tax/insurance friction — then point you to calculators that work backward from a comfortable payment instead of stretching to a lender maximum. State pages matter because the same loan payment feels different in Texas, Florida, Georgia, or California.",
    relatedTools: [
      { href: "/calculators/home-affordability-calculator", label: "Affordability calculator" },
      { href: "/", label: "Payment calculator" },
      { href: "/blog/how-much-house-can-i-afford", label: "28/36 rule guide" },
    ],
  },
  {
    slug: "loan-types",
    name: "Loan Types",
    description: "Comparing FHA, VA, conventional, ARM, and fixed-rate loans.",
    intro:
      "Loan-type articles compare underwriting tradeoffs and insurance structures (PMI vs FHA MIP, VA funding fee, ARM caps), plus county loan limits and lender overlays. Use them alongside specialized calculators so the choice is about total cost and risk, not a single headline rate. Verify current HUD, VA, and FHFA figures before you rely on any nationwide number.",
    relatedTools: [
      { href: "/calculators/fha-mortgage-calculator", label: "FHA MIP calculator" },
      { href: "/calculators/va-mortgage-calculator", label: "VA calculator" },
      { href: "/calculators/arm-mortgage-calculator", label: "ARM stress calculator" },
    ],
  },
  {
    slug: "refinancing",
    name: "Refinancing",
    description: "When and how to refinance your mortgage.",
    intro:
      "Refinancing only helps if you recover closing costs and the new term does not erase interest savings. Start with break-even months and lifetime interest — not payment alone — then confirm fees on a Loan Estimate. Some states also require a tangible net benefit review before a refinance can close.",
    relatedTools: [
      { href: "/calculators/refinance-mortgage-calculator", label: "Refinance break-even calculator" },
      { href: "/blog/refinance-closing-costs-by-state", label: "Closing costs by state" },
      { href: "/blog/mortgage-recasting-vs-refinancing", label: "Recast vs refinance" },
    ],
  },
  {
    slug: "guides",
    name: "Buying Guides",
    description: "Step-by-step guidance for every stage of buying a home.",
    intro:
      "Buying guides cover credit timing, down payments, closing costs, seller concessions, lender overlays, and points with worked break-even examples. They assume you will verify numbers with a licensed loan officer and use our calculators for scenarios, not as personalized advice.",
    relatedTools: [
      { href: "/", label: "Mortgage calculator" },
      { href: "/how-we-calculate", label: "How we calculate" },
      { href: "/blog/seller-concessions-and-rate-buydowns", label: "Seller concessions guide" },
    ],
  },
  {
    slug: "pitfalls",
    name: "Common Pitfalls",
    description:
      "Mistakes most homebuyers never see coming — credit after pre-approval, one-lender shopping, MIP duration, and under-counted housing costs.",
    intro:
      "These guides focus on expensive, easy-to-miss traps: changing credit during underwriting, comparing only a headline rate, misunderstanding FHA MIP length, under-estimating taxes and insurance, and treating pre-approval as a guarantee. Read them with our checklist of questions nobody thinks to ask before you interview agents or write an offer.",
    relatedTools: [
      {
        href: "/questions-nobody-thinks-to-ask",
        label: "Questions nobody thinks to ask",
      },
      {
        href: "/blog/mortgage-pitfalls-homebuyers-should-avoid",
        label: "Pitfalls overview",
      },
      { href: "/calculators/home-affordability-calculator", label: "Affordability calculator" },
    ],
  },
];

export const BLOG_POSTS: BlogPost[] = ALL_BLOG_POSTS;

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getCategory(slug: string): BlogCategory | undefined {
  return BLOG_CATEGORIES.find((c) => c.slug === slug);
}

export const BLOG_POSTS_SORTED = [...BLOG_POSTS].sort(
  (a, b) => new Date(b.published).getTime() - new Date(a.published).getTime(),
);

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return BLOG_POSTS_SORTED.filter((p) => p.category === categorySlug);
}

/**
 * Posts relevant to a state — tag/name/slug match first; if few hits,
 * pad with national rates/affordability guides (no state-specific tags).
 */
export function getPostsForState(stateSlug: string, limit = 4): BlogPost[] {
  const state = getState(stateSlug);
  if (!state) return BLOG_POSTS_SORTED.slice(0, limit);

  const name = state.name.toLowerCase();
  const slug = state.slug.toLowerCase();

  const matched = BLOG_POSTS_SORTED.filter((p) => {
    const hay = `${p.slug} ${p.title} ${p.tags.join(" ")}`.toLowerCase();
    return (
      hay.includes(name) ||
      hay.includes(slug) ||
      p.tags.some((t) => t.toLowerCase() === name || t.toLowerCase() === slug)
    );
  });

  if (matched.length >= limit) return matched.slice(0, limit);

  const national = BLOG_POSTS_SORTED.filter(
    (p) =>
      !matched.includes(p) &&
      (p.category === "rates" ||
        p.category === "affordability" ||
        p.category === "guides") &&
      !STATES.some(
        (s) =>
          p.slug.includes(s.slug) ||
          p.tags.some((t) => t.toLowerCase() === s.name.toLowerCase()),
      ),
  );

  return [...matched, ...national].slice(0, limit);
}
