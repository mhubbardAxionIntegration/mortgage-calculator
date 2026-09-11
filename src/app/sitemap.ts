import type { MetadataRoute } from "next";
import { LOAN_TYPES } from "@/lib/loanTypes";
import { BLOG_POSTS, BLOG_CATEGORIES, isCategoryIndexable } from "@/lib/blog";
import { absoluteUrl } from "@/lib/site";

function safeDate(value: string | Date | undefined): Date {
  if (!value) return new Date();
  const d = value instanceof Date ? value : new Date(value);
  return Number.isNaN(d.getTime()) ? new Date() : d;
}

/**
 * Defensive sitemap — never throw. A 500 here blocks Google/AdSense crawlers
 * from discovering content and has contributed to "minimum content" review risk.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  try {
    const now = new Date();

    const staticPages: MetadataRoute.Sitemap = [
      {
        url: absoluteUrl("/"),
        lastModified: now,
        changeFrequency: "weekly",
        priority: 1,
      },
      {
        url: absoluteUrl("/how-we-calculate"),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      },
      {
        url: absoluteUrl("/blog"),
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.6,
      },
      {
        url: absoluteUrl("/questions-nobody-thinks-to-ask"),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      },
      {
        url: absoluteUrl("/faq"),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      },
    ];

    const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
      url: absoluteUrl(`/blog/${p.slug}`),
      lastModified: safeDate(p.updated),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

    const blogCategoryPages: MetadataRoute.Sitemap = BLOG_CATEGORIES.filter(
      (c) => isCategoryIndexable(c.slug),
    ).map((c) => ({
      url: absoluteUrl(`/blog/category/${c.slug}`),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.5,
    }));

    const infoPages: MetadataRoute.Sitemap = [
      "/about",
      "/contact",
      "/privacy-policy",
      "/terms",
      "/disclaimer",
    ].map((path) => ({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    }));

    const loanTypePages: MetadataRoute.Sitemap = LOAN_TYPES.map((t) => ({
      url: absoluteUrl(`/calculators/${t.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

    return [
      ...staticPages,
      ...loanTypePages,
      ...blogPages,
      ...blogCategoryPages,
      ...infoPages,
    ];
  } catch (err) {
    console.error("[sitemap] generation failed; returning core URLs only", err);
    const now = new Date();
    return [
      { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
      { url: absoluteUrl("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.6 },
      { url: absoluteUrl("/faq"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
      { url: absoluteUrl("/how-we-calculate"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
      { url: absoluteUrl("/about"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
      { url: absoluteUrl("/privacy-policy"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    ];
  }
}
