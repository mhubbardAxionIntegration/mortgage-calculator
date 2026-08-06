import Link from "next/link";
import type { Metadata } from "next";
import { Suspense } from "react";
import { StateAwareCalculatorHub } from "@/components/StateAwareCalculatorHub";
import { CalculatorSkeleton } from "@/components/CalculatorSkeleton";
import { CalculatorWithRates, RatesPanel } from "@/components/CalculatorWithRates";
import { PageHero } from "@/components/PageHero";
import { LOAN_TYPES } from "@/lib/loanTypes";
import { STATES, stateCalculatorHref, getState } from "@/lib/states";
import { BLOG_POSTS_SORTED } from "@/lib/blog";
import { JsonLd } from "@/components/JsonLd";
import { RateCta } from "@/components/RateCta";
import { webApplicationSchema } from "@/lib/schema";
import { getMortgageRatesWithFallback, formatRateDate } from "@/lib/mortgageRates";
import { SITE } from "@/lib/site";
import { PAGE_HEROES } from "@/lib/pageHeroes";

/** Popular markets for the hub. */
const FEATURED_STATE_SLUGS = [
  "california",
  "texas",
  "florida",
  "georgia",
  "new-york",
  "north-carolina",
  "arizona",
  "washington",
] as const;

const FEATURED_LOAN_SLUGS = [
  "fha-mortgage-calculator",
  "refinance-mortgage-calculator",
  "arm-mortgage-calculator",
] as const;

export const metadata: Metadata = {
  title: { absolute: SITE.seo.homeTitle },
  description: SITE.seo.homeDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE.seo.homeTitle,
    description: SITE.seo.homeDescription,
    url: SITE.url,
  },
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ state?: string; county?: string }>;
}) {
  const { rates, isLive } = await getMortgageRatesWithFallback();
  const { state: stateSlug = "", county: countyParam = "" } =
    await searchParams;
  const selected = stateSlug ? getState(stateSlug) : undefined;

  const featuredStates = FEATURED_STATE_SLUGS.map((slug) =>
    STATES.find((s) => s.slug === slug),
  ).filter(Boolean);
  const featuredLoans = FEATURED_LOAN_SLUGS.map((slug) =>
    LOAN_TYPES.find((t) => t.slug === slug),
  ).filter(Boolean);

  return (
    <>
      <JsonLd
        data={webApplicationSchema({
          name: SITE.name,
          description: SITE.seo.homeDescription,
          url: SITE.url,
        })}
      />

      <PageHero
        hero={PAGE_HEROES.home}
        title={
          selected
            ? `${selected.name} Mortgage Calculator`
            : SITE.seo.homeH1
        }
        subtitle={
          selected
            ? `Estimate your monthly payment in ${selected.name} with local tax and insurance defaults, then explore specialized loan tools.`
            : "Estimate your payment with local tax and insurance context, then open specialized tools for FHA, VA, refinance, ARM, and affordability."
        }
      >
        <p className="text-sm text-sky-100/90">
          Updated for {SITE.year}
          {isLive
            ? ` · 30-yr avg ${rates.rate30.toFixed(2)}% (${formatRateDate(rates.asOf30)})`
            : ` · Rates as of ${SITE.ratesAsOf}`}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/calculators/home-affordability-calculator"
            className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-sky-950 shadow-sm transition hover:bg-sky-50"
          >
            What can I afford?
          </Link>
        </div>
      </PageHero>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            A toolkit, not a single widget
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            {SITE.name} helps buyers and homeowners see principal, interest,
            taxes, insurance, PMI, and HOA together — then dig into the scenario
            that matches their loan. Specialized calculators model refinance
            break-even, FHA upfront and annual MIP, and ARM intro vs. stress
            payments. State and county selectors add local tax and insurance
            context.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            Formulas and assumptions are documented on our{" "}
            <Link
              href="/how-we-calculate"
              className="font-medium text-sky-800 hover:text-sky-900"
            >
              methodology page
            </Link>
            . Estimates are educational — confirm pricing with a licensed lender.
          </p>
        </div>
      </section>

      <section id="calculator" className="scroll-mt-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-10 sm:pt-12">
          <Suspense
            fallback={
              <div className="space-y-4">
                <div className="h-28 animate-pulse rounded-2xl border border-slate-200 bg-white" />
                <CalculatorWithRates calculatorHref="/">
                  <CalculatorSkeleton />
                </CalculatorWithRates>
              </div>
            }
          >
            <StateAwareCalculatorHub
              initialStateSlug={selected?.slug ?? ""}
              initialCounty={countyParam}
              annualRate={rates.rate30}
              ratesPanel={<RatesPanel calculatorHref="/" />}
            />
          </Suspense>

          <div className="mx-auto mt-8 max-w-5xl">
            <RateCta />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Specialized calculators
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Each tool uses scenario-specific math — not just swapped defaults
              on the same payment form.
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredLoans.map((t) =>
            t ? (
              <Link
                key={t.slug}
                href={`/calculators/${t.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-sky-300 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-sky-800">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{t.tagline}</p>
                <span className="mt-3 inline-block text-sm font-medium text-sky-800">
                  Open tool &rarr;
                </span>
              </Link>
            ) : null,
          )}
        </div>
        <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600">
          {LOAN_TYPES.filter(
            (t) =>
              !FEATURED_LOAN_SLUGS.includes(
                t.slug as (typeof FEATURED_LOAN_SLUGS)[number],
              ),
          ).map((t) => (
            <li key={t.slug}>
              <Link
                href={`/calculators/${t.slug}`}
                className="hover:text-sky-800"
              >
                {t.label} calculator
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="states" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Featured state guides
              </h2>
              <p className="mt-2 max-w-2xl text-slate-600">
                Select a state and county above for local defaults, or open a
                popular market guide.
              </p>
            </div>
            <a
              href="#calculator"
              className="text-sm font-medium text-sky-800 hover:text-sky-900"
            >
              Back to calculator &rarr;
            </a>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm sm:grid-cols-4">
            {featuredStates.map((s) =>
              s ? (
                <li key={s.slug}>
                  <Link
                    href={stateCalculatorHref(s.slug)}
                    className="font-medium text-slate-700 hover:text-sky-800"
                  >
                    {s.name}
                  </Link>
                </li>
              ) : null,
            )}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            From Smart Buying
          </h2>
          <Link
            href="/blog"
            className="text-sm font-medium text-sky-800 hover:text-sky-900"
          >
            View all guides &rarr;
          </Link>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {BLOG_POSTS_SORTED.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-sky-300 hover:shadow-md"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-sky-800">
                {post.tags[0]}
              </span>
              <h3 className="mt-2 font-semibold text-slate-900">{post.title}</h3>
              <p className="mt-2 flex-1 text-sm text-slate-600">{post.excerpt}</p>
              <span className="mt-3 text-sm font-medium text-sky-800">
                Read more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
