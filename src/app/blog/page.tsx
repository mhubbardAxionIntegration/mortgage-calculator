import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { BLOG_POSTS_SORTED, BLOG_CATEGORIES } from "@/lib/blog";
import { SITE } from "@/lib/site";
import { PAGE_HEROES } from "@/lib/pageHeroes";

export const metadata: Metadata = {
  title: "Smart Buying — Mortgage & Homebuying Guides",
  description:
    "Guides on mortgage rates, affordability, PMI, loan terms, and homebuying — from the team behind our free mortgage calculators.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogIndexPage() {
  const [featured, ...rest] = BLOG_POSTS_SORTED;

  return (
    <>
      <PageHero
        hero={PAGE_HEROES.blog}
        title="Mortgage & Homebuying Guides"
        subtitle={`Clear, practical guides on rates, affordability, and loans — updated for ${SITE.year}.`}
      />

      <div className="mx-auto max-w-5xl px-4 py-8">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "Smart Buying", href: "/blog" }]}
        />

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Link
          href="/blog/category/pitfalls"
          className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-5 transition hover:border-amber-300 hover:shadow-md"
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-amber-900">
            New category
          </span>
          <h2 className="mt-2 text-lg font-bold text-slate-900">
            Common Pitfalls
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Mistakes most homebuyers never hear about until they cost rate,
            cash, or the deal — credit after pre-approval, one-lender shopping,
            MIP duration, and under-counted PITI.
          </p>
          <p className="mt-3 text-sm font-medium text-amber-900">
            Browse pitfalls &rarr;
          </p>
        </Link>
        <Link
          href="/questions-nobody-thinks-to-ask"
          className="rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-5 transition hover:border-sky-300 hover:shadow-md"
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-sky-800">
            Buyer toolkit
          </span>
          <h2 className="mt-2 text-lg font-bold text-slate-900">
            Questions nobody thinks to ask
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Realtor interview scripts, offer tactics, and property questions on
            systems, taxes, HOA, flood zones, and FHA/VA appraisal risks — 50+
            prompts you can copy.
          </p>
          <p className="mt-3 text-sm font-medium text-sky-800">
            Open the checklist &rarr;
          </p>
        </Link>
      </div>

      <nav aria-label="Smart Buying categories" className="mt-8 flex flex-wrap gap-2">
        <span className="rounded-full border border-sky-800 bg-sky-50 px-3 py-1.5 text-sm font-medium text-sky-800">
          All
        </span>
        {BLOG_CATEGORIES.map((c) => (
          <Link
            key={c.slug}
            href={`/blog/category/${c.slug}`}
            className={
              c.slug === "pitfalls"
                ? "rounded-full border border-amber-300 bg-amber-50 px-3 py-1.5 text-sm font-medium text-amber-950 transition hover:border-amber-400"
                : "rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:border-sky-300 hover:text-sky-800"
            }
          >
            {c.name}
          </Link>
        ))}
      </nav>

      {featured && (
        <Link
          href={`/blog/${featured.slug}`}
          className="mt-8 block overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-sky-50 to-white p-6 transition hover:border-sky-300 hover:shadow-md sm:p-8"
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-sky-800">
            Latest &middot; {featured.tags[0]}
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
            {featured.title}
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">{featured.excerpt}</p>
          <p className="mt-4 text-sm text-slate-500">
            {formatDate(featured.published)} &middot; {featured.readingMinutes} min read
          </p>
        </Link>
      )}

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {rest.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-sky-300 hover:shadow-md"
          >
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="mt-3 text-lg font-semibold text-slate-900">{post.title}</h2>
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
