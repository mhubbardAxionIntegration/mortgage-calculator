import type { MetadataRoute } from "next";
import { STATES } from "@/lib/states";
import { LOAN_TYPES } from "@/lib/loanTypes";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/blog";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: absoluteUrl("/mortgage-calculator"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
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
  ];

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: absoluteUrl(`/blog/${p.slug}`),
    lastModified: new Date(p.updated),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const blogCategoryPages: MetadataRoute.Sitemap = BLOG_CATEGORIES.map((c) => ({
    url: absoluteUrl(`/blog/category/${c.slug}`),
    lastModified: now,
    changeFrequency: "weekly",
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
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  const loanTypePages: MetadataRoute.Sitemap = LOAN_TYPES.map((t) => ({
    url: absoluteUrl(`/calculators/${t.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const statePages: MetadataRoute.Sitemap = STATES.map((s) => ({
    url: absoluteUrl(`/mortgage-calculator/${s.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...loanTypePages,
    ...statePages,
    ...blogPages,
    ...blogCategoryPages,
    ...infoPages,
  ];
}
