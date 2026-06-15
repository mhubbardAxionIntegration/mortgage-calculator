import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MortgageCalculator } from "@/components/MortgageCalculator";
import { FaqSection } from "@/components/FaqSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { AdSlot } from "@/components/AdSlot";
import { RateCta } from "@/components/RateCta";
import { CompanyPromo } from "@/components/CompanyPromo";
import { STATES, getState } from "@/lib/states";
import { DEFAULT_INPUTS } from "@/lib/defaults";
import { faqPageSchema, webApplicationSchema } from "@/lib/schema";
import { formatCurrency, formatPercent } from "@/lib/mortgage";
import { absoluteUrl, SITE } from "@/lib/site";
import type { Faq } from "@/lib/faqs";

export function generateStaticParams() {
  return STATES.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state } = await params;
  const data = getState(state);
  if (!data) return {};
  const title = `${data.name} Mortgage Calculator (${SITE.year}) — Payments with Taxes & Insurance`;
  return {
    title,
    description: `Estimate your monthly mortgage payment in ${data.name} with our calculator. Includes ${data.name}'s ${formatPercent(data.propertyTaxRate)} average property tax rate, insurance, and PMI.`,
    alternates: { canonical: `/mortgage-calculator/${data.slug}` },
    openGraph: {
      title,
      url: absoluteUrl(`/mortgage-calculator/${data.slug}`),
    },
  };
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const data = getState(state);
  if (!data) notFound();

  const pageUrl = absoluteUrl(`/mortgage-calculator/${data.slug}`);
  const initialInputs = {
    homePrice: data.medianHomePrice,
    downPayment: Math.round(data.medianHomePrice * 0.2),
    propertyTaxRate: data.propertyTaxRate,
    annualHomeInsurance: data.avgInsurance,
    annualRate: DEFAULT_INPUTS.annualRate,
    termYears: DEFAULT_INPUTS.termYears,
  };

  const stateFaqs: Faq[] = [
    {
      question: `What is the average property tax rate in ${data.name}?`,
      answer: `${data.name} has an average effective property tax rate of about ${formatPercent(data.propertyTaxRate)} of a home's value per year. On the state's indicative median home price of ${formatCurrency(data.medianHomePrice)}, that works out to roughly ${formatCurrency((data.medianHomePrice * data.propertyTaxRate) / 100)} per year, usually collected monthly through escrow.`,
    },
    {
      question: `How much is a mortgage payment in ${data.name}?`,
      answer: `Your payment depends on the home price, down payment, interest rate, and term. We've pre-filled this calculator with ${data.name}'s median home price of ${formatCurrency(data.medianHomePrice)} and local tax and insurance estimates — adjust the sliders to match your situation.`,
    },
    {
      question: `Does this calculator include ${data.name} homeowners insurance?`,
      answer: `Yes. We've defaulted to an indicative ${data.name} average of about ${formatCurrency(data.avgInsurance)} per year. Insurance varies by location, home age, and coverage, so enter a real quote for the most accurate estimate.`,
    },
  ];

  const otherStates = STATES.filter((s) => s.slug !== data.slug).slice(0, 12);

  return (
    <>
      <JsonLd
        data={[
          webApplicationSchema({
            name: `${data.name} Mortgage Calculator`,
            description: `Estimate monthly mortgage payments in ${data.name} including local property taxes and insurance.`,
            url: pageUrl,
          }),
          faqPageSchema(stateFaqs),
        ]}
      />

      <div className="mx-auto max-w-5xl px-4 py-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Mortgage Calculator", href: "/mortgage-calculator" },
            { name: data.name, href: `/mortgage-calculator/${data.slug}` },
          ]}
        />

        <header className="mt-6 max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {data.name} Mortgage Calculator
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            Estimate your monthly mortgage payment in {data.name}, pre-loaded
            with the state&apos;s {formatPercent(data.propertyTaxRate)} average
            property tax rate and local insurance costs.
          </p>
        </header>

        <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm">
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <div className="text-xs text-slate-500">Median home price</div>
            <div className="font-bold text-slate-900">{formatCurrency(data.medianHomePrice)}</div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <div className="text-xs text-slate-500">Avg property tax</div>
            <div className="font-bold text-slate-900">{formatPercent(data.propertyTaxRate)}</div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <div className="text-xs text-slate-500">Avg insurance</div>
            <div className="font-bold text-slate-900">{formatCurrency(data.avgInsurance)}/yr</div>
          </div>
        </div>

        <div className="mt-8">
          <MortgageCalculator initialInputs={initialInputs} />
        </div>

        <div className="mt-10">
          <RateCta
            prefill={{ state: data.abbr, homePrice: data.medianHomePrice }}
            heading={`Compare ${data.name} mortgage rates`}
            subtext={`Get personalized quotes from lenders serving ${data.name} — checking won't affect your credit score.`}
          />
        </div>

        <div className="mt-10">
          <AdSlot slot="inContent" />
        </div>

        <article className="mt-14 max-w-3xl space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Buying a home in {data.name}
          </h2>
          <p className="leading-relaxed text-slate-600">
            Housing costs in {data.name} are shaped by local property taxes,
            insurance, and home prices. With an average effective property tax
            rate of {formatPercent(data.propertyTaxRate)} and a median home
            price around {formatCurrency(data.medianHomePrice)}, a typical buyer
            putting 20% down would finance roughly{" "}
            {formatCurrency(data.medianHomePrice * 0.8)}. Use the calculator
            above to model your own price, down payment, and rate — it already
            reflects {data.name}&apos;s tax and insurance averages so your
            estimate is closer to reality.
          </p>
          <p className="leading-relaxed text-slate-600">
            Remember that these figures are statewide averages. Your county and
            city can have meaningfully different tax rates, and insurance
            premiums depend on your specific home. For the most accurate
            estimate, enter a quote from a licensed {data.name} lender and your
            actual insurance and tax figures.
          </p>
        </article>

        <section className="mt-12">
          <h2 className="text-lg font-bold text-slate-900">
            Mortgage calculators for other states
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2 text-sm">
            {otherStates.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/mortgage-calculator/${s.slug}`}
                  className="inline-block rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-600 hover:border-emerald-300 hover:text-emerald-700"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-14">
          <CompanyPromo />
        </div>

        <div className="mt-14">
          <FaqSection faqs={stateFaqs} heading={`${data.name} mortgage FAQs`} />
        </div>
      </div>
    </>
  );
}
