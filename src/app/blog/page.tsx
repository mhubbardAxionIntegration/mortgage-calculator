import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BLOG_POSTS_SORTED, BLOG_CATEGORIES } from "@/lib/blog";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mortgage & Homebuying Blog",
  description:
    "Guides and explainers on mortgage rates, affordability, PMI, loan terms, and homebuying — from the team behind our free mortgage calculators.",
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
    <div className="mx-auto max-w-5xl px-4 py-8">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }]} />

      <header className="mt-6 max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Mortgage &amp; Homebuying Guides
        </h1>
        <p className="mt-3 text-lg text-slate-600">
          Clear, practical explainers on rates, affordability, and loans —
          written to help you make confident decisions. Updated for {SITE.year}.
        </p>
      </header>

      <nav aria-label="Blog categories" className="mt-8 flex flex-wrap gap-2">
        <span className="rounded-full border border-emerald-600 bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700">
          All
        </span>
        {BLOG_CATEGORIES.map((c) => (
          <Link
            key={c.slug}
            href={`/blog/category/${c.slug}`}
            className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:border-emerald-300 hover:text-emerald-700"
          >
            {c.name}
          </Link>
        ))}
      </nav>

      {featured && (
        <Link
          href={`/blog/${featured.slug}`}
          className="mt-8 block overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-white p-6 transition hover:border-emerald-300 hover:shadow-md sm:p-8"
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
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
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-emerald-300 hover:shadow-md"
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
  );
}
