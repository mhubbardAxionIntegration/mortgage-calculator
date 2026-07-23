import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { BlogContent } from "@/components/BlogContent";
import { RateCta } from "@/components/RateCta";
import { AdSlot } from "@/components/AdSlot";
import { BLOG_POSTS, BLOG_POSTS_SORTED, getPost, getCategory } from "@/lib/blog";
import { blogPostingSchema } from "@/lib/schema";
import { absoluteUrl, SITE } from "@/lib/site";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: absoluteUrl(`/blog/${post.slug}`),
      publishedTime: post.published,
      modifiedTime: post.updated,
    },
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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = absoluteUrl(`/blog/${post.slug}`);
  const category = getCategory(post.category);
  const related = BLOG_POSTS_SORTED.filter(
    (p) => p.slug !== post.slug && p.category === post.category,
  )
    .concat(BLOG_POSTS_SORTED.filter((p) => p.slug !== post.slug))
    .filter((p, i, arr) => arr.findIndex((x) => x.slug === p.slug) === i)
    .slice(0, 2);

  return (
    <>
      <JsonLd
        data={blogPostingSchema({
          title: post.title,
          description: post.description,
          url,
          published: post.published,
          updated: post.updated,
        })}
      />

      <article className="mx-auto max-w-3xl px-4 py-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: post.title, href: `/blog/${post.slug}` },
          ]}
        />

        <header className="mt-6">
          <div className="flex flex-wrap items-center gap-2">
            {category && (
              <Link
                href={`/blog/category/${category.slug}`}
                className="rounded-full bg-emerald-600 px-2.5 py-0.5 text-xs font-semibold text-white hover:bg-emerald-700"
              >
                {category.name}
              </Link>
            )}
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            By {SITE.author.name} &middot; Published {formatDate(post.published)}
            {post.updated !== post.published && <> &middot; Updated {formatDate(post.updated)}</>}{" "}
            &middot; {post.readingMinutes} min read
          </p>
          <p className="mt-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-relaxed text-slate-600">
            <strong className="text-slate-900">{SITE.author.name}</strong>
            {" — "}
            {SITE.author.bio}{" "}
            <Link
              href="/how-we-calculate"
              className="font-medium text-emerald-700 hover:text-emerald-800"
            >
              See our methodology
            </Link>
            .
          </p>
        </header>

        <div className="mt-8">
          <BlogContent blocks={post.body} />
        </div>

        {post.relatedCalculators.length > 0 && (
          <aside className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-sm font-semibold text-slate-900">Try the calculators</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {post.relatedCalculators.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="inline-block rounded-lg border border-emerald-200 bg-white px-3 py-1.5 text-sm font-medium text-emerald-700 hover:border-emerald-400"
                  >
                    {c.label} &rarr;
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}

        <div className="mt-10">
          <RateCta />
        </div>

        <div className="mt-10">
          <AdSlot slot="inContent" />
        </div>

        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="text-lg font-bold text-slate-900">Keep reading</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-emerald-300 hover:shadow-sm"
                >
                  <h3 className="font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <p className="mt-10 rounded-lg bg-slate-50 p-4 text-xs leading-relaxed text-slate-500">
          This article is for general educational purposes only and is not
          financial advice. Rates and figures are indicative and may change.
          Consult a licensed mortgage professional about your situation. See our{" "}
          <Link href="/disclaimer" className="text-emerald-700 underline">disclaimer</Link>.
        </p>
      </article>
    </>
  );
}
