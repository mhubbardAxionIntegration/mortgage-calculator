import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  BLOG_CATEGORIES,
  getCategory,
  getPostsByCategory,
} from "@/lib/blog";

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
  return {
    title: `${cat.name} — Mortgage Guides`,
    description: cat.description,
    alternates: { canonical: `/blog/category/${cat.slug}` },
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

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: cat.name, href: `/blog/category/${cat.slug}` },
        ]}
      />

      <header className="mt-6 max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          {cat.name}
        </h1>
        <p className="mt-3 text-lg text-slate-600">{cat.description}</p>
      </header>

      <nav aria-label="Blog categories" className="mt-8 flex flex-wrap gap-2">
        <Link
          href="/blog"
          className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 hover:border-emerald-300 hover:text-emerald-700"
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
                ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                : "border-slate-200 bg-white text-slate-600 hover:border-emerald-300 hover:text-emerald-700"
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
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-emerald-300 hover:shadow-md"
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
  );
}
