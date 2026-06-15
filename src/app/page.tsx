import Link from "next/link";
import type { Metadata } from "next";
import { MortgageCalculator } from "@/components/MortgageCalculator";
import { LOAN_TYPES } from "@/lib/loanTypes";
import { STATES } from "@/lib/states";
import { BLOG_POSTS_SORTED } from "@/lib/blog";
import { JsonLd } from "@/components/JsonLd";
import { RateCta } from "@/components/RateCta";
import { webApplicationSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd
        data={webApplicationSchema({
          name: `${SITE.name}`,
          description: SITE.description,
          url: SITE.url,
        })}
      />

      <section className="bg-gradient-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-12 sm:pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              Updated for {SITE.year} &middot; Rates as of {SITE.ratesAsOf}
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Free Mortgage Calculator
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Estimate your monthly mortgage payment with taxes, insurance, and
              PMI — then find out exactly how much house you can afford. No
              sign-up required.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-5xl">
            <MortgageCalculator />
          </div>

          <div className="mx-auto mt-8 max-w-5xl">
            <RateCta />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900">
          Specialized calculators
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-slate-600">
          Pick the calculator that matches your loan. Each one is pre-configured
          with the right defaults and a plain-English guide.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LOAN_TYPES.map((t) => (
            <Link
              key={t.slug}
              href={`/calculators/${t.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-emerald-300 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-700">
                {t.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{t.tagline}</p>
              <span className="mt-3 inline-block text-sm font-medium text-emerald-700">
                Open calculator &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="states" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Mortgage calculator by state
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Property taxes and insurance costs vary widely by state. Choose
            yours for localized defaults and estimates.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm sm:grid-cols-3 lg:grid-cols-4">
            {STATES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/mortgage-calculator/${s.slug}`}
                  className="text-slate-600 hover:text-emerald-700"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            From the blog
          </h2>
          <Link href="/blog" className="text-sm font-medium text-emerald-700 hover:text-emerald-800">
            View all guides &rarr;
          </Link>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {BLOG_POSTS_SORTED.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-emerald-300 hover:shadow-md"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                {post.tags[0]}
              </span>
              <h3 className="mt-2 font-semibold text-slate-900">{post.title}</h3>
              <p className="mt-2 flex-1 text-sm text-slate-600">{post.excerpt}</p>
              <span className="mt-3 text-sm font-medium text-emerald-700">
                Read more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Want the full breakdown?
        </h2>
        <p className="mt-2 text-slate-600">
          Read our complete guide to how mortgage payments are calculated,
          including amortization, PMI, and the 28/36 affordability rule.
        </p>
        <Link
          href="/mortgage-calculator"
          className="mt-5 inline-block rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
        >
          Open the full mortgage calculator guide
        </Link>
      </section>
    </>
  );
}
