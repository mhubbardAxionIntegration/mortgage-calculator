/**
 * Unique full-bleed hero panorama for each major route.
 * Do not reuse the same `src` on two routes.
 */
export type PageHeroConfig = {
  src: string;
  alt: string;
};

export const PAGE_HEROES = {
  home: {
    src: "/images/heroes/home.webp",
    alt: "Picturesque craftsman home on a tree-lined street at golden hour",
  },
  affordability: {
    src: "/images/heroes/affordability.webp",
    alt: "Charming starter home with a front garden in soft morning light",
  },
  fha: {
    src: "/images/heroes/fha.webp",
    alt: "Modest single-family home with tidy landscaping and a welcoming porch",
  },
  va: {
    src: "/images/heroes/va.webp",
    alt: "Brick colonial home with an American flag on a quiet suburban street",
  },
  refinance: {
    src: "/images/heroes/refinance.webp",
    alt: "Updated two-story home with new siding and landscaped yard",
  },
  arm: {
    src: "/images/heroes/arm.webp",
    alt: "Contemporary modern home with large windows at dusk",
  },
  blog: {
    src: "/images/heroes/blog.webp",
    alt: "Cottage-style home with a bookish porch and flower boxes",
  },
  about: {
    src: "/images/heroes/about.webp",
    alt: "Elegant home office view looking out to a landscaped backyard",
  },
  contact: {
    src: "/images/heroes/contact.webp",
    alt: "Welcoming front door and pathway of a picturesque suburban home",
  },
  howWeCalculate: {
    src: "/images/heroes/how-we-calculate.webp",
    alt: "Clean modern white home with clear architectural lines",
  },
  questions: {
    src: "/images/heroes/questions.webp",
    alt: "Classic home with a for-sale sense of discovery under open sky",
  },
  faq: {
    src: "/images/heroes/faq.webp",
    alt: "Victorian row house with a limestone stoop and bright red door at golden hour",
  },
  privacy: {
    src: "/images/heroes/privacy.webp",
    alt: "Secluded private residence screened by mature trees",
  },
  terms: {
    src: "/images/heroes/terms.webp",
    alt: "Formal white colonial home with symmetrical facade",
  },
  disclaimer: {
    src: "/images/heroes/disclaimer.webp",
    alt: "Stone cottage home on a quiet country lane",
  },
  categoryRates: {
    src: "/images/heroes/category-rates.webp",
    alt: "Hillside home overlooking a dusk city skyline in the distance",
  },
  categoryAffordability: {
    src: "/images/heroes/category-affordability.webp",
    alt: "Compact cute bungalow with vegetable garden beds",
  },
  categoryLoanTypes: {
    src: "/images/heroes/category-loan-types.webp",
    alt: "Street of varied roof lines showing different home styles",
  },
  categoryRefinancing: {
    src: "/images/heroes/category-refinancing.webp",
    alt: "Remodeled ranch home with fresh paint and new landscaping",
  },
  categoryGuides: {
    src: "/images/heroes/category-guides.webp",
    alt: "Winding garden path leading to a porch with rocking chairs",
  },
  categoryPitfalls: {
    src: "/images/heroes/category-pitfalls.webp",
    alt: "Home under soft overcast light suggesting careful inspection",
  },
} as const satisfies Record<string, PageHeroConfig>;

export type PageHeroKey = keyof typeof PAGE_HEROES;
