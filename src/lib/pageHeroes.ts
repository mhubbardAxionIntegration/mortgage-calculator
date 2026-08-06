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
    src: "/images/heroes/home.png",
    alt: "Picturesque craftsman home on a tree-lined street at golden hour",
  },
  affordability: {
    src: "/images/heroes/affordability.png",
    alt: "Charming starter home with a front garden in soft morning light",
  },
  fha: {
    src: "/images/heroes/fha.png",
    alt: "Modest single-family home with tidy landscaping and a welcoming porch",
  },
  va: {
    src: "/images/heroes/va.png",
    alt: "Brick colonial home with an American flag on a quiet suburban street",
  },
  refinance: {
    src: "/images/heroes/refinance.png",
    alt: "Updated two-story home with new siding and landscaped yard",
  },
  arm: {
    src: "/images/heroes/arm.png",
    alt: "Contemporary modern home with large windows at dusk",
  },
  blog: {
    src: "/images/heroes/blog.png",
    alt: "Cottage-style home with a bookish porch and flower boxes",
  },
  about: {
    src: "/images/heroes/about.png",
    alt: "Elegant home office view looking out to a landscaped backyard",
  },
  contact: {
    src: "/images/heroes/contact.png",
    alt: "Welcoming front door and pathway of a picturesque suburban home",
  },
  howWeCalculate: {
    src: "/images/heroes/how-we-calculate.png",
    alt: "Clean modern white home with clear architectural lines",
  },
  questions: {
    src: "/images/heroes/questions.png",
    alt: "Classic home with a for-sale sense of discovery under open sky",
  },
  faq: {
    src: "/images/heroes/faq.png",
    alt: "Victorian row house with a limestone stoop and bright red door at golden hour",
  },
  privacy: {
    src: "/images/heroes/privacy.png",
    alt: "Secluded private residence screened by mature trees",
  },
  terms: {
    src: "/images/heroes/terms.png",
    alt: "Formal white colonial home with symmetrical facade",
  },
  disclaimer: {
    src: "/images/heroes/disclaimer.png",
    alt: "Stone cottage home on a quiet country lane",
  },
  categoryRates: {
    src: "/images/heroes/category-rates.png",
    alt: "Hillside home overlooking a dusk city skyline in the distance",
  },
  categoryAffordability: {
    src: "/images/heroes/category-affordability.png",
    alt: "Compact cute bungalow with vegetable garden beds",
  },
  categoryLoanTypes: {
    src: "/images/heroes/category-loan-types.png",
    alt: "Street of varied roof lines showing different home styles",
  },
  categoryRefinancing: {
    src: "/images/heroes/category-refinancing.png",
    alt: "Remodeled ranch home with fresh paint and new landscaping",
  },
  categoryGuides: {
    src: "/images/heroes/category-guides.png",
    alt: "Winding garden path leading to a porch with rocking chairs",
  },
  categoryPitfalls: {
    src: "/images/heroes/category-pitfalls.png",
    alt: "Home under soft overcast light suggesting careful inspection",
  },
} as const satisfies Record<string, PageHeroConfig>;

export type PageHeroKey = keyof typeof PAGE_HEROES;
