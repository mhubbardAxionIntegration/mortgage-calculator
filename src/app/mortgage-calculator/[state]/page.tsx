import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MortgageCalculator } from "@/components/MortgageCalculator";
import { FaqSection } from "@/components/FaqSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { RateCta } from "@/components/RateCta";
import { STATES, getState } from "@/lib/states";
import { getStateGuide } from "@/lib/stateGuides";
import { DEFAULT_INPUTS } from "@/lib/defaults";
import { faqPageSchema, webApplicationSchema } from "@/lib/schema";
import { formatCurrency, formatPercent } from "@/lib/mortgage";
import { absoluteUrl, SITE } from "@/lib/site";

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
    description: `Estimate your monthly mortgage payment in ${data.name} with our calculator. Includes ${data.name}'s ${formatPercent(data.propertyTaxRate)} average property tax rate, insurance, local buyer programs, and a worked payment example.`,
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

  const guide = getStateGuide(data);
  const pageUrl = absoluteUrl(`/mortgage-calculator/${data.slug}`);
  const initialInputs = {
    homePrice: data.medianHomePrice,
    downPayment: Math.round(data.medianHomePrice * 0.2),
    propertyTaxRate: data.propertyTaxRate,
    annualHomeInsurance: data.avgInsurance,
    annualRate: DEFAULT_INPUTS.annualRate,
    termYears: DEFAULT_INPUTS.termYears,
  };

  const otherStates = STATES.filter((s) => s.slug !== data.slug).slice(0, 12);

  return (
    <>
      <JsonLd
        data={[
          webApplicationSchema({
            name: `${data.name} Mortgage Calculator`,
            description: `Estimate monthly mortgage payments in ${data.name} including local property taxes, insurance, and buyer-program context.`,
            url: pageUrl,
          }),
          faqPageSchema(guide.faqs),
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
            property tax rate and local insurance costs — plus a local market
            guide, worked payment example, and buyer-program notes.
          </p>
        </header>

        <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm">
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <div className="text-xs text-slate-500">Median home price</div>
            <div className="font-bold text-slate-900">
              {formatCurrency(data.medianHomePrice)}
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <div className="text-xs text-slate-500">Avg property tax</div>
            <div className="font-bold text-slate-900">
              {formatPercent(data.propertyTaxRate)}
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <div className="text-xs text-slate-500">Avg insurance</div>
            <div className="font-bold text-slate-900">
              {formatCurrency(data.avgInsurance)}/yr
            </div>
          </div>
        </div>

        <div className="mt-8">
          <MortgageCalculator initialInputs={initialInputs} />
        </div>

        <div className="mt-10">
          <RateCta
            prefill={{ state: data.abbr, homePrice: data.medianHomePrice }}
            heading={`Compare ${data.name} mortgage rates`}
            subtext={`Get personalized quotes from lenders serving ${data.name}. Compare offers side by side before you lock.`}
          />
        </div>

        <article className="mt-14 max-w-3xl space-y-10">
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Housing market snapshot: {data.name}
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              {guide.marketOverview}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Property taxes and homestead notes
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              {guide.taxAndHomestead}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Homeowners insurance in {data.name}
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              {guide.insuranceNotes}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Worked payment example
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              {guide.paymentWalkthrough}
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              {guide.affordabilityNote}
            </p>
            <p className="mt-4 text-sm text-slate-500">
              Adjust the calculator above, or open the{" "}
              <Link
                href="/calculators/home-affordability-calculator"
                className="font-medium text-emerald-700 hover:text-emerald-800"
              >
                home affordability calculator
              </Link>{" "}
              with your income and debts. Methodology details are on{" "}
              <Link
                href="/how-we-calculate"
                className="font-medium text-emerald-700 hover:text-emerald-800"
              >
                how we calculate
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Buyer programs to research in {data.name}
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              {guide.buyerPrograms.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-500">
              Eligibility, funding, and income limits change. Confirm details
              with the program administrator or a participating lender before
              relying on assistance in your offer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Practical tips for {data.name} buyers
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              {guide.localTips.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>

          <p className="leading-relaxed text-slate-500">{guide.closingNote}</p>
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
            <li>
              <Link
                href="/mortgage-calculator#states"
                className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 font-medium text-emerald-800 hover:border-emerald-300"
              >
                All states
              </Link>
            </li>
          </ul>
        </section>

        <div className="mt-14">
          <FaqSection faqs={guide.faqs} heading={`${data.name} mortgage FAQs`} />
        </div>
      </div>
    </>
  );
}
