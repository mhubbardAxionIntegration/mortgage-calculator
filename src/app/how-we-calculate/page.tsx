import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { LOAN_LIMIT_YEAR } from "@/lib/loanLimits";
import { absoluteUrl, SITE } from "@/lib/site";
import { webPageSchema } from "@/lib/schema";
import { PAGE_HEROES } from "@/lib/pageHeroes";

const PAGE_URL = absoluteUrl("/how-we-calculate");

export const metadata: Metadata = {
  title: "How We Calculate Mortgage Payments",
  description:
    "Transparent methodology for Smart Mortgage Calculator: amortization formula, PITI components, PMI/MIP/VA fees, affordability DTI, state/county defaults, FRED rates, and 2026 loan limits.",
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

      <PageHero
        hero={PAGE_HEROES.howWeCalculate}
        title="How We Calculate Mortgage Payments"
        subtitle="Transparent formulas, assumptions, and data sources behind every estimate."
      />

      <div className="mx-auto max-w-3xl px-4 py-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "How We Calculate", href: "/how-we-calculate" },
          ]}
        />

        <header className="mt-6">
          <p className="text-lg text-slate-600">
            Every estimate on {SITE.name} is educational, not a lender quote.
            This page documents the math, defaults, and limits so you can trust
            — and challenge — the numbers. Reviewed for {SITE.year} against the
            living calculator code.
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
            <p className="mt-3 rounded-lg bg-slate-900 px-4 py-3 text-center font-mono text-sm text-sky-300">
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
              On the main (conventional) payment calculator, the full monthly
              payment adds escrow-style items on top of principal and interest:
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
                is under 20%, annual PMI rate × loan amount ÷ 12; otherwise $0.
                We do not auto-drop PMI mid-schedule when equity later reaches
                20% — that is a servicing/underwriting rule, not modeled here.
              </li>
              <li>
                <strong className="text-slate-900">HOA:</strong> monthly dues as
                entered
              </li>
            </ul>
            <p className="mt-4 leading-relaxed">
              Dedicated FHA and VA calculators model mortgage insurance and
              funding fees separately (see below). The conventional PMI field is
              not a substitute for those product-specific rules.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Specialized loan calculators
            </h2>
            <p className="mt-4 leading-relaxed">
              Loan-type pages use scenario-specific math — not the same form with
              swapped labels.
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-5">
              <li>
                <strong className="text-slate-900">FHA:</strong> upfront MIP
                (default ~1.75% of base loan, optionally financed into the
                balance) plus monthly annual MIP (default ~0.55% of base loan ÷
                12). Annual MIP is calculated on the base loan even when UFMIP is
                financed. We flag when MIP is likely lifetime (under 10% down).
                Confirm current HUD MIP tables with a lender.
              </li>
              <li>
                <strong className="text-slate-900">VA:</strong> no PMI. A one-time
                funding fee is estimated from illustrative first-use / subsequent
                / down-payment brackets (or an override), with optional financing
                into the loan and a disability exemption path at 0%. Fee schedule
                can change — verify with VA / your lender.
              </li>
              <li>
                <strong className="text-slate-900">Refinance:</strong> compares
                current remaining P&amp;I to a new loan (balance + optional cash
                out), monthly savings, lifetime interest delta, and months to
                recover closing costs.
              </li>
              <li>
                <strong className="text-slate-900">ARM stress:</strong> compares
                intro-rate P&amp;I to a higher stress-rate P&amp;I on the{" "}
                <em>same</em> starting balance and full term (plus taxes,
                insurance, HOA). It is a payment shock illustration, not a full
                indexed reset after amortizing through the fixed period.
              </li>
              <li>
                <strong className="text-slate-900">USDA:</strong> we discuss USDA
                in guides where relevant, but there is no dedicated USDA
                guarantee-fee calculator on this site today.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Affordability mode
            </h2>
            <p className="mt-4 leading-relaxed">
              Affordability mode works backward from income and other monthly
              debts using a single target debt-to-income (DTI) ratio — not two
              simultaneous front-end and back-end caps. The UI defaults to a
              balanced <strong className="text-slate-900">36%</strong> total DTI
              and offers a conservative <strong className="text-slate-900">28%</strong>{" "}
              option (the familiar 28/36 rule of thumb as selectable ceilings).
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                Max total monthly debt budget = gross monthly income × selected
                DTI
              </li>
              <li>
                Max housing payment = that budget minus your other monthly debts
              </li>
              <li>
                We subtract monthly insurance and HOA from the housing budget,
                then solve for the highest home price whose P&amp;I plus property
                tax fits what remains (loan = price − down payment)
              </li>
            </ul>
            <p className="mt-4 leading-relaxed">
              PMI/MIP is not auto-included in the affordability solver. The
              result is a planning ceiling, not an underwriting decision.
              Lenders may allow higher or require lower ratios based on credit,
              reserves, and loan program.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              State and county defaults
            </h2>
            <p className="mt-4 leading-relaxed">
              Choosing a state pre-fills indicative median home price, average
              effective property tax rate, and average homeowners insurance.
              Choosing a county can further refine median price, tax rate, and
              insurance from our county estimate table. These are educational
              starting points — not assessed values, appraisal opinions, or
              binder quotes. County mill rates, homestead exemptions,
              wind/flood endorsements, and HOA dues can move your real escrow
              far from the average.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              FHA and conforming loan limits ({LOAN_LIMIT_YEAR})
            </h2>
            <p className="mt-4 leading-relaxed">
              County 1-unit FHA forward limits and FHFA conforming (Fannie /
              Freddie) limits are loaded from HUD CHUMS {LOAN_LIMIT_YEAR} files
              shipped with the site. When you select a county, FHA and VA tools
              can show the local limit and warn when a modeled loan amount
              exceeds it. National floors and high-cost ceilings come from the
              same files; Alaska, Hawaii, Guam, and the Virgin Islands (and
              other special areas) can exceed the usual high-cost cap — always
              confirm on HUD / FHFA sources before relying on a limit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Rate data
            </h2>
            <p className="mt-4 leading-relaxed">
              When the live feed is available, we surface national 30-year and
              15-year averages from the Freddie Mac Primary Mortgage Market
              Survey via FRED (series MORTGAGE30US / MORTGAGE15US), cached about
              daily and labeled with the survey as-of date. If the feed is
              unreachable, we fall back to {SITE.defaultRate}% (30-year) and a
              derived 15-year estimate, labeled as of {SITE.ratesAsOf}. Your
              locked rate will differ based on credit, loan type, points, and
              lender pricing.
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
                Editorial guides are educational. Confirm taxes, insurance,
                MIP/funding-fee schedules, loan limits, and assistance programs
                with primary sources (HUD, VA, FHFA, county assessors, licensed
                professionals).
              </li>
              <li>
                See our{" "}
                <Link
                  href="/disclaimer"
                  className="font-medium text-sky-800 hover:text-sky-900"
                >
                  Disclaimer
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy-policy"
                  className="font-medium text-sky-800 hover:text-sky-900"
                >
                  Privacy Policy
                </Link>{" "}
                for the full legal and data stance.
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
                  href="/"
                  className="font-medium text-sky-800 hover:text-sky-900"
                >
                  Mortgage payment calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/calculators/home-affordability-calculator"
                  className="font-medium text-sky-800 hover:text-sky-900"
                >
                  Home affordability calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/calculators/fha-mortgage-calculator"
                  className="font-medium text-sky-800 hover:text-sky-900"
                >
                  FHA mortgage calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/calculators/va-mortgage-calculator"
                  className="font-medium text-sky-800 hover:text-sky-900"
                >
                  VA mortgage calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/calculators/refinance-mortgage-calculator"
                  className="font-medium text-sky-800 hover:text-sky-900"
                >
                  Refinance break-even calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/calculators/arm-mortgage-calculator"
                  className="font-medium text-sky-800 hover:text-sky-900"
                >
                  ARM stress calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-medium text-sky-800 hover:text-sky-900"
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
