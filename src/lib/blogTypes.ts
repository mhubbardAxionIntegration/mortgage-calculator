export type Block =
  | { type: "p"; html: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export interface BlogCategory {
  slug: string;
  name: string;
  description: string;
  /** Longer intro shown on the category landing page. */
  intro: string;
  /** Related calculator CTAs for the category page. */
  relatedTools: { href: string; label: string }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  /** Category slug; must match a BLOG_CATEGORIES entry. */
  category: string;
  /** ISO date strings. */
  published: string;
  updated: string;
  readingMinutes: number;
  tags: string[];
  /** Calculator slugs to surface as related tools / internal links. */
  relatedCalculators: { href: string; label: string }[];
  body: Block[];
}
