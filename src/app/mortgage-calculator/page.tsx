import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { CalculatorSeoPreview } from "@/components/CalculatorSeoPreview";
import { CalculatorSkeleton } from "@/components/CalculatorSkeleton";
import { StateAwareCalculatorHub } from "@/components/StateAwareCalculatorHub";
import { CurrentMortgageRates } from "@/components/CurrentMortgageRates";
import { FaqSection } from "@/components/FaqSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { AdSlot } from "@/components/AdSlot";
import { MORTGAGE_FAQS } from "@/lib/faqs";
import { LOAN_TYPES } from "@/lib/loanTypes";
import { getState } from "@/lib/states";
import {
  faqPageSchema,
  howToSchema,
  webApplicationSchema,
} from "@/lib/schema";
import { absoluteUrl, SITE } from "@/lib/site";
import { getMortgageRatesWithFallback } from "@/lib/mortgageRates";
import { getStateGuide } from "@/lib/stateGuides";

const PAGE_URL = absoluteUrl("/mortgage-calculator");

export const metadata: Metadata = {
  title: { absolute: SITE.seo.calculatorTitle },
  description: SITE.seo.calculatorDescription,
  alternates: { canonical: "/mortgage-calculator" },
  openGraph: {
    title: SITE.seo.calculatorTitle,
    description: SITE.seo.calculatorDescription,
    url: PAGE_URL,
  },
};

const HOW_TO_STEPS = [
  {
    name: "Choose your state and county (optional)",
    text: "Select a state and county to load local property-tax and insurance defaults and see that market's guide and related articles on this page.",
  },
  {
    name: "Enter the home price",
    text: "Type or slide to the purchase price of the home you're considering.",
  },
  {
    name: "Set your down payment",
    text: "Enter your down payment in dollars. A down payment of 20% or more avoids PMI.",
  },
  {
    name: "Add your interest rate and term",
    text: "Use your quoted interest rate, or our indicative average, and choose a 15-, 20-, or 30-year term.",
  },
  {
    name: "Review your results",
    text: "See your full monthly payment, total interest, and amortization schedule update instantly.",
  },
];

export default async function MortgageCalculatorPage({
  searchParams,
}: {
  searchParams: Promise<{ state?: string; county?: string }>;
}) {
  const { rates } = await getMortgageRatesWithFallback();
  const { state: stateSlug, county: countyParam } = await searchParams;
  const selected = stateSlug ? getState(stateSlug) : undefined;
  const guide = selected ? getStateGuide(selected) : null;

  const jsonLd = [
    webApplicationSchema({
      name: SITE.seo.calculatorH1,
      description: SITE.seo.calculatorDescription,
      url: PAGE_URL,
    }),
    howToSchema({
      name: "How to Use This Mortgage Calculator",
      description:
        "Estimate your monthly mortgage payment in five quick steps.",
      steps: HOW_TO_STEPS,
    }),
    faqPageSchema(guide?.faqs ?? MORTGAGE_FAQS),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      <div className="mx-auto max-w-5xl px-4 py-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Mortgage Calculator", href: "/mortgage-calculator" },
            ...(selected
              ? [
                  {
                    name: selected.name,
                    href: `/mortgage-calculator?state=${selected.slug}`,
                  },
                ]
              : []),
          ]}
        />

        <header className="mt-6 max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {selected
              ? `${selected.name} Mortgage Calculator`
              : SITE.seo.calculatorH1}
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            {selected
              ? `Estimate your monthly payment in ${selected.name} with local tax and insurance defaults, a worked example, buyer-program notes, and related guides — all on one page.`
              : `Calculate your monthly mortgage payment with taxes, insurance, and PMI. Pick a state and county for localized defaults and that market’s guide. Updated for ${SITE.year}.`}
          </p>
        </header>

        <div className="mt-6">
          <CalculatorSeoPreview annualRate={rates.rate30} />
        </div>

        <div className="mt-8">
          <Suspense fallback={<CalculatorSkeleton />}>
            <StateAwareCalculatorHub
              initialStateSlug={selected?.slug ?? ""}
              initialCounty={countyParam ?? ""}
              annualRate={rates.rate30}
            />
          </Suspense>
        </div>

        <div className="mt-10">
          <AdSlot slot="inContent" />
        </div>

        <Suspense
          fallback={
            <div className="mt-10 min-h-[10rem] animate-pulse rounded-2xl border border-slate-200 bg-slate-50" />
          }
        >
          <CurrentMortgageRates
            calculatorHref="/mortgage-calculator"
            className="mt-10"
          />
        </Suspense>

        {!selected && (
          <article className="prose-slate mt-14 max-w-3xl space-y-10">
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                What is a free mortgage payment calculator?
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                A mortgage payment calculator estimates your monthly cost to buy a
                home. The best calculators include <strong>taxes, insurance, PMI,
                and HOA</strong> — not just principal and interest — so you see the
                same payment lenders use for approval. Ours also shows total interest,
                a full amortization schedule, and an affordability mode based on your
                income. Use the state selector above when local escrow costs matter.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                How to Use This Mortgage Calculator
              </h2>
              <ol className="mt-4 space-y-3">
                {HOW_TO_STEPS.map((step, i) => (
                  <li key={step.name} className="flex gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sky-800 text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="text-slate-600">
                      <strong className="text-slate-900">{step.name}.</strong>{" "}
                      {step.text}
                    </span>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                What factors affect your monthly payment?
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                A mortgage payment is more than just principal and interest. The
                five components below — often abbreviated as PITI plus PMI and HOA
                — determine your true monthly cost of homeownership:
              </p>
              <ul className="mt-4 space-y-3 text-slate-600">
                <li>
                  <strong className="text-slate-900">Principal &amp; interest:</strong>{" "}
                  The core loan repayment. Larger loans, higher rates, and longer
                  terms increase the interest you pay.
                </li>
                <li>
                  <strong className="text-slate-900">Property taxes:</strong>{" "}
                  Set by your local government as a percentage of your home&apos;s
                  assessed value, typically collected monthly through escrow.
                </li>
                <li>
                  <strong className="text-slate-900">Homeowners insurance:</strong>{" "}
                  Protects your home and is usually required by lenders; premiums
                  vary by location and coverage.
                </li>
                <li>
                  <strong className="text-slate-900">PMI:</strong>{" "}
                  Private mortgage insurance applies when your down payment is
                  under 20% and is removed once you build enough equity.
                </li>
                <li>
                  <strong className="text-slate-900">HOA dues:</strong>{" "}
                  Monthly fees for condos and planned communities that cover
                  shared amenities and maintenance.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                How mortgage payments are calculated
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Your principal and interest payment follows the standard
                amortization formula:
              </p>
              <p className="mt-3 rounded-lg bg-slate-900 px-4 py-3 text-center font-mono text-sm text-sky-300">
                M = P · r(1 + r)<sup>n</sup> / ((1 + r)<sup>n</sup> − 1)
              </p>
              <p className="mt-3 leading-relaxed text-slate-600">
                where <strong>M</strong> is the monthly payment, <strong>P</strong>{" "}
                is the loan principal, <strong>r</strong> is the monthly interest
                rate (annual rate ÷ 12), and <strong>n</strong> is the total
                number of payments (years × 12). Early in the loan, most of each
                payment goes toward interest; over time the balance shifts toward
                principal. The amortization schedule above shows this shift
                year by year.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Understanding PMI
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Private mortgage insurance protects the lender, not you, if you
                stop making payments. On conventional loans it is generally
                required when your down payment is below 20% of the home&apos;s
                value, and it typically costs between 0.3% and 1.5% of the loan
                amount per year. Once you reach roughly 20% equity you can usually
                request that PMI be removed. Our calculator adds PMI automatically
                when your down payment is under 20% and removes it at 20% or above.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                How much house can you afford?
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Lenders commonly apply the <strong>28/36 rule</strong>: your
                housing payment should stay under about 28% of your gross monthly
                income, and total debt payments under 36%. Switch the calculator
                to the <strong>Affordability</strong> tab to work backward from
                your income and debts to an estimated maximum home price.
              </p>
            </section>
          </article>
        )}

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            FHA, VA, and Refinance Calculators
          </h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Specialized tools with scenario-specific math — FHA MIP, VA funding
            fee, refinance break-even, affordability, and ARM stress tests.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {LOAN_TYPES.map((t) => (
              <Link
                key={t.slug}
                href={`/calculators/${t.slug}`}
                className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-sky-300 hover:shadow-md"
              >
                <h3 className="font-semibold text-slate-900">{t.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{t.tagline}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-14 max-w-3xl rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            Transparent math
          </h2>
          <p className="mt-2 text-slate-600">
            Want the formulas, PMI rules, and data sources behind every estimate?
            Read our public methodology.
          </p>
          <Link
            href="/how-we-calculate"
            className="mt-4 inline-block text-sm font-semibold text-sky-800 hover:text-sky-900"
          >
            How we calculate &rarr;
          </Link>
        </section>

        {!selected && (
          <div className="mt-14">
            <FaqSection faqs={MORTGAGE_FAQS} />
          </div>
        )}
      </div>
    </>
  );
}
