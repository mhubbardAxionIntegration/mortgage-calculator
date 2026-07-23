import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, SITE } from "@/lib/site";
import { webPageSchema } from "@/lib/schema";

const PAGE_URL = absoluteUrl("/how-we-calculate");

export const metadata: Metadata = {
  title: "How We Calculate Mortgage Payments",
  description:
    "Transparent methodology for Smart Mortgage Calculator: amortization formula, PITI components, PMI rules, state tax/insurance defaults, and data sources.",
  alternates: { canonical: "/how-we-calculate" },
  openGraph: {
    title: "How We Calculate Mortgage Payments",
    description:
      "See the exact formulas, assumptions, and data sources behind every estimate on Smart Mortgage Calculator.",
    url: PAGE_URL,
  },
};

export default function HowWeCalculatePage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          name: "How We Calculate Mortgage Payments",
          description: metadata.description as string,
          url: PAGE_URL,
        })}
      />

      <div className="mx-auto max-w-3xl px-4 py-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "How We Calculate", href: "/how-we-calculate" },
          ]}
        />

        <header className="mt-6">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            How we calculate mortgage payments
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            Every estimate on {SITE.name} is educational, not a lender quote.
            This page documents the math, defaults, and limits so you can trust
            — and challenge — the numbers.
          </p>
        </header>

        <article className="mt-10 space-y-10 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Principal and interest
            </h2>
            <p className="mt-4 leading-relaxed">
              We use the standard fixed-rate amortization formula for monthly
              principal and interest:
            </p>
            <p className="mt-3 rounded-lg bg-slate-900 px-4 py-3 text-center font-mono text-sm text-emerald-300">
              M = P · r(1 + r)<sup>n</sup> / ((1 + r)<sup>n</sup> − 1)
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                <strong className="text-slate-900">M</strong> — monthly principal
                &amp; interest payment
              </li>
              <li>
                <strong className="text-slate-900">P</strong> — loan amount (home
                price minus down payment)
              </li>
              <li>
                <strong className="text-slate-900">r</strong> — monthly interest
                rate (annual rate ÷ 12 ÷ 100)
              </li>
              <li>
                <strong className="text-slate-900">n</strong> — number of monthly
                payments (term years × 12)
              </li>
            </ul>
            <p className="mt-4 leading-relaxed">
              If the rate is zero, we divide the loan amount evenly across the
              term. Amortization schedules allocate each payment between interest
              (rate × remaining balance) and principal (payment minus interest).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Taxes, insurance, PMI, and HOA
            </h2>
            <p className="mt-4 leading-relaxed">
              The full monthly payment adds escrow-style items on top of
              principal and interest:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                <strong className="text-slate-900">Property tax:</strong> home
                price × annual tax rate ÷ 12
              </li>
              <li>
                <strong className="text-slate-900">Homeowners insurance:</strong>{" "}
                annual premium ÷ 12
              </li>
              <li>
                <strong className="text-slate-900">PMI:</strong> when down payment
                is under 20%, annual PMI rate × loan amount ÷ 12; otherwise $0
              </li>
              <li>
                <strong className="text-slate-900">HOA:</strong> monthly dues as
                entered
              </li>
            </ul>
            <p className="mt-4 leading-relaxed">
              FHA annual MIP and conventional PMI are modeled with the PMI rate
              field for estimation. Upfront FHA MIP and VA funding fees are not
              automatically financed into the balance unless you adjust inputs to
              reflect them — we call that out on loan-type pages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Affordability mode
            </h2>
            <p className="mt-4 leading-relaxed">
              Affordability mode works backward from income and debts using
              common debt-to-income guidelines (about 28% of gross income for
              housing and about 36% for total debt). The result is a planning
              ceiling, not an underwriting decision. Lenders may allow higher or
              require lower ratios based on credit, reserves, and loan program.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              State defaults
            </h2>
            <p className="mt-4 leading-relaxed">
              State calculator pages pre-fill indicative median home prices,
              average effective property tax rates, and average homeowners
              insurance premiums. These are starting points for education — not
              assessed values, appraisal opinions, or binder quotes. County mill
              rates, homestead exemptions, wind/flood endorsements, and HOA dues
              can move your real escrow far from the statewide average.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Rate data
            </h2>
            <p className="mt-4 leading-relaxed">
              When live rate feeds are available, we surface national averages
              from public market sources (including Freddie Mac / FRED series)
              and label the as-of date. Fallback defaults use{" "}
              {SITE.defaultRate}% as of {SITE.ratesAsOf}. Your locked rate will
              differ based on credit, loan type, points, and lender pricing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              What we do not claim
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>We are not a lender, broker, or credit decisioning system.</li>
              <li>
                Results are not Loan Estimates, Closing Disclosures, or offers to
                lend.
              </li>
              <li>
                We do not guarantee that a payment will qualify you with any
                particular lender.
              </li>
              <li>
                Editorial guides are educational. Confirm taxes, insurance, and
                assistance programs with primary sources.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Try the tools
            </h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/mortgage-calculator"
                  className="font-medium text-emerald-700 hover:text-emerald-800"
                >
                  Mortgage payment calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/calculators/home-affordability-calculator"
                  className="font-medium text-emerald-700 hover:text-emerald-800"
                >
                  Home affordability calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-medium text-emerald-700 hover:text-emerald-800"
                >
                  About our editorial approach
                </Link>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </>
  );
}
