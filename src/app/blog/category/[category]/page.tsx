import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import {
  BLOG_CATEGORIES,
  getCategory,
  getPostsByCategory,
} from "@/lib/blog";
import { PAGE_HEROES, type PageHeroConfig } from "@/lib/pageHeroes";

const CATEGORY_HEROES: Record<string, PageHeroConfig> = {
  rates: PAGE_HEROES.categoryRates,
  affordability: PAGE_HEROES.categoryAffordability,
  "loan-types": PAGE_HEROES.categoryLoanTypes,
  refinancing: PAGE_HEROES.categoryRefinancing,
  guides: PAGE_HEROES.categoryGuides,
  pitfalls: PAGE_HEROES.categoryPitfalls,
};

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return {};
  const posts = getPostsByCategory(cat.slug);
  /** Sparse category hubs get noindex until they have enough unique posts. */
  const thin = posts.length < 2;
  return {
    title: `${cat.name} — Mortgage Guides`,
    description: cat.description,
    alternates: { canonical: `/blog/category/${cat.slug}` },
    ...(thin ? { robots: { index: false, follow: true } } : {}),
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();
  const posts = getPostsByCategory(cat.slug);
  const hero = CATEGORY_HEROES[cat.slug] ?? PAGE_HEROES.blog;

  return (
    <>
      <PageHero hero={hero} title={cat.name} subtitle={cat.description} />

      <div className="mx-auto max-w-5xl px-4 py-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: cat.name, href: `/blog/category/${cat.slug}` },
          ]}
        />

        <p className="mt-6 max-w-3xl leading-relaxed text-slate-600">{cat.intro}</p>

      {cat.relatedTools.length > 0 && (
        <aside className="mt-6 flex flex-wrap gap-2">
          {cat.relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-lg border border-sky-200 bg-sky-50 px-3 py-1.5 text-sm font-medium text-sky-900 hover:border-sky-300"
            >
              {tool.label} &rarr;
            </Link>
          ))}
        </aside>
      )}

      <nav aria-label="Blog categories" className="mt-8 flex flex-wrap gap-2">
        <Link
          href="/blog"
          className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 hover:border-sky-300 hover:text-sky-800"
        >
          All
        </Link>
        {BLOG_CATEGORIES.map((c) => (
          <Link
            key={c.slug}
            href={`/blog/category/${c.slug}`}
            aria-current={c.slug === cat.slug ? "page" : undefined}
            className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
              c.slug === cat.slug
                ? "border-sky-800 bg-sky-50 text-sky-800"
                : "border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:text-sky-800"
            }`}
          >
            {c.name}
          </Link>
        ))}
      </nav>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-sky-300 hover:shadow-md"
          >
            <h2 className="text-lg font-semibold text-slate-900">{post.title}</h2>
            <p className="mt-2 flex-1 text-sm text-slate-600">{post.excerpt}</p>
            <p className="mt-4 text-xs text-slate-500">
              {formatDate(post.published)} &middot; {post.readingMinutes} min read
            </p>
          </Link>
        ))}
      </div>
      </div>
    </>
  );
}
