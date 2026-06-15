import type { Metadata } from "next";
import { MortgageCalculator } from "@/components/MortgageCalculator";
import { FaqSection } from "@/components/FaqSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { AdSlot } from "@/components/AdSlot";
import { RateCta } from "@/components/RateCta";
import { CompanyPromo } from "@/components/CompanyPromo";
import { MORTGAGE_FAQS } from "@/lib/faqs";
import {
  faqPageSchema,
  howToSchema,
  webApplicationSchema,
} from "@/lib/schema";
import { absoluteUrl, SITE } from "@/lib/site";

const PAGE_URL = absoluteUrl("/mortgage-calculator");

export const metadata: Metadata = {
  title: `Mortgage Calculator: Estimate Monthly Payments & Affordability (${SITE.year} Rates)`,
  description:
    "Free mortgage calculator with taxes, insurance, and PMI. Estimate your monthly payment, view a full amortization schedule, and see how much house you can afford.",
  alternates: { canonical: "/mortgage-calculator" },
  openGraph: {
    title: `Mortgage Calculator (${SITE.year})`,
    description:
      "Estimate your monthly mortgage payment with taxes, insurance, PMI and a full amortization schedule.",
    url: PAGE_URL,
  },
};

const HOW_TO_STEPS = [
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
    name: "Include taxes, insurance, and fees",
    text: "Expand the advanced options to add property tax, homeowners insurance, PMI, and HOA dues for a complete payment.",
  },
  {
    name: "Review your results",
    text: "See your full monthly payment, total interest, and amortization schedule update instantly.",
  },
];

export default function MortgageCalculatorPage() {
  return (
    <>
      <JsonLd
        data={[
          webApplicationSchema({
            name: "Mortgage Calculator",
            description: metadata.description as string,
            url: PAGE_URL,
          }),
          howToSchema({
            name: "How to use the mortgage calculator",
            description:
              "Estimate your monthly mortgage payment in five quick steps.",
            steps: HOW_TO_STEPS,
          }),
          faqPageSchema(MORTGAGE_FAQS),
        ]}
      />

      <div className="mx-auto max-w-5xl px-4 py-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Mortgage Calculator", href: "/mortgage-calculator" },
          ]}
        />

        <header className="mt-6 max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Mortgage Calculator
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            Estimate your monthly mortgage payment — including principal,
            interest, taxes, insurance, and PMI — and see a complete
            amortization schedule. Updated for {SITE.year}.
          </p>
        </header>

        <div className="mt-8">
          <MortgageCalculator />
        </div>

        <div className="mt-10">
          <RateCta />
        </div>

        <div className="mt-10">
          <AdSlot slot="inContent" />
        </div>

        <article className="prose-slate mt-14 max-w-3xl space-y-10">
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              How to use our mortgage calculator
            </h2>
            <ol className="mt-4 space-y-3">
              {HOW_TO_STEPS.map((step, i) => (
                <li key={step.name} className="flex gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-600 text-xs font-bold text-white">
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
            <p className="mt-3 rounded-lg bg-slate-900 px-4 py-3 text-center font-mono text-sm text-emerald-300">
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
              amount per year. The good news: once you reach roughly 20% equity
              — through payments or appreciation — you can usually request that
              PMI be removed, lowering your monthly payment. Our calculator adds
              PMI automatically when your down payment is under 20% and removes
              it at 20% or above.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              The impact of interest rates
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Even small rate changes have a large effect over a 30-year loan.
              On a $350,000 loan, a single percentage point can change your
              monthly payment by roughly $200 and your lifetime interest by tens
              of thousands of dollars. That&apos;s why shopping multiple lenders
              and improving your credit score before applying can be so
              valuable. Try nudging the interest-rate slider above to see how
              sensitive your payment is.
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
              your income and debts to an estimated maximum home price. Remember
              to leave room in your budget for maintenance, closing costs, and
              an emergency fund rather than stretching to your absolute maximum.
            </p>
          </section>
        </article>

        <div className="mt-14">
          <CompanyPromo />
        </div>

        <div className="mt-14">
          <FaqSection faqs={MORTGAGE_FAQS} />
        </div>
      </div>
    </>
  );
}
