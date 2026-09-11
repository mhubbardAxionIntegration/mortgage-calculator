import Link from "next/link";
import { SITE } from "@/lib/site";

/**
 * Substantial homepage editorial for AdSense / search quality.
 * Visible on the default `/` URL without requiring a state selection.
 */
export function HomeEditorialContent() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            How a mortgage payment is built (PITI)
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Most people shop a mortgage by the interest rate alone. Lenders and
            escrow accounts care about the full housing payment — often called
            PITI: principal, interest, taxes, and insurance. Private mortgage
            insurance (PMI) or FHA mortgage insurance premiums (MIP), plus HOA
            dues when they apply, sit on top of that stack. A slightly higher
            rate in a low-tax county can still beat a lower rate in a high-millage
            area once escrow is included.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            Worked example (illustrative only): on a $400,000 purchase with 20%
            down, the loan amount is $320,000. At a 6.75% 30-year fixed rate,
            principal and interest alone are about $2,075 per month. Add a 1.1%
            effective property-tax rate (~$367/mo), $1,800/year homeowners
            insurance (~$150/mo), and $0 PMI because the down payment is 20%, and
            the full housing payment is closer to $2,590 before HOA. Drop the
            down payment to 5% and PMI appears; switch to FHA and MIP rules
            replace PMI. Our calculator lets you change those inputs and see the
            payment update immediately.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            Principal and interest are calculated with the standard amortization
            formula documented on our{" "}
            <Link
              href="/how-we-calculate"
              className="font-medium text-sky-800 hover:text-sky-900"
            >
              methodology page
            </Link>
            . Taxes and insurance defaults can be refined by state and county
            after you press Go — they are planning estimates, not your exact
            mill rate or insurer quote.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Which calculator should you use?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            {SITE.name} is a toolkit. Start here for a conventional-style payment
            with taxes, insurance, PMI, and HOA. Open a specialized tool when the
            product rules change the math:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
            <li>
              <Link
                href="/calculators/home-affordability-calculator"
                className="font-medium text-sky-800 hover:text-sky-900"
              >
                Affordability
              </Link>{" "}
              — works backward from income and debts to a payment you can carry,
              then to a price range.
            </li>
            <li>
              <Link
                href="/calculators/fha-mortgage-calculator"
                className="font-medium text-sky-800 hover:text-sky-900"
              >
                FHA
              </Link>{" "}
              — models upfront and annual MIP and low-down-payment scenarios
              against county loan limits.
            </li>
            <li>
              <Link
                href="/calculators/va-mortgage-calculator"
                className="font-medium text-sky-800 hover:text-sky-900"
              >
                VA
              </Link>{" "}
              — focuses on funding-fee and $0-down payment structure for eligible
              borrowers.
            </li>
            <li>
              <Link
                href="/calculators/refinance-mortgage-calculator"
                className="font-medium text-sky-800 hover:text-sky-900"
              >
                Refinance
              </Link>{" "}
              — compares current vs new principal and interest, break-even months,
              and lifetime interest — not payment alone.
            </li>
            <li>
              <Link
                href="/calculators/arm-mortgage-calculator"
                className="font-medium text-sky-800 hover:text-sky-900"
              >
                ARM
              </Link>{" "}
              — stress-tests an introductory payment against a higher reset-rate
              payment on the same balance.
            </li>
          </ul>
          <p className="mt-4 leading-relaxed text-slate-600">
            For plain-English answers on affordability, closing costs, and loan
            shopping, browse{" "}
            <Link href="/blog" className="font-medium text-sky-800 hover:text-sky-900">
              Smart Buying guides
            </Link>
            , the{" "}
            <Link href="/faq" className="font-medium text-sky-800 hover:text-sky-900">
              FAQ
            </Link>
            , and{" "}
            <Link
              href="/questions-nobody-thinks-to-ask"
              className="font-medium text-sky-800 hover:text-sky-900"
            >
              questions nobody thinks to ask
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Why state and county matter
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            The same loan amount produces different total payments across the
            United States because property taxes, homeowners insurance, and
            sometimes HOA norms vary widely. Selecting a state and county and
            pressing Go loads planning defaults for tax and insurance and, where
            data is available, FHA and conforming loan-limit context for
            specialized tools. That does not replace your county assessor,
            insurance agent, or Loan Estimate — it stops a national average from
            hiding a local escrow surprise.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            After you apply a location, you can expand an amortization schedule
            and download a PDF of the payment path you just modeled. Change rate,
            term, or price and the schedule updates with the calculator.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            What these tools are — and are not
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            {SITE.name} is an educational product from{" "}
            <Link
              href="/about"
              className="font-medium text-sky-800 hover:text-sky-900"
            >
              {SITE.author.name}
            </Link>{" "}
            / Axion Integration Services, LLC. We are not a mortgage lender,
            broker, or creditor, and nothing on this site is a loan offer,
            pre-approval, or personalized financial advice. Rate averages shown
            with the calculator come from public Freddie Mac / FRED series when
            available, with a documented fallback. Loan limits reference
            published HUD and FHFA figures for {SITE.year} where we cite them.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            Always compare official Loan Estimates from licensed lenders on the
            same day, verify taxes with local authorities, and confirm insurance
            with carriers that write in your ZIP code. Use our{" "}
            <Link
              href="/disclaimer"
              className="font-medium text-sky-800 hover:text-sky-900"
            >
              disclaimer
            </Link>{" "}
            and{" "}
            <Link
              href="/how-we-calculate"
              className="font-medium text-sky-800 hover:text-sky-900"
            >
              methodology
            </Link>{" "}
            pages if you need the full list of assumptions and limitations.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            A practical workflow for first-time and repeat buyers
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            A useful session on this site usually looks like: (1) pick a
            comfortable monthly housing budget using the affordability tool or
            your own pay stubs; (2) model a purchase price and down payment here
            with taxes and insurance turned on; (3) compare FHA, VA, or
            conventional paths if your credit or cash-to-close situation
            suggests it; (4) if you already have a loan, run refinance
            break-even before you pay for an appraisal; and (5) read one Smart
            Buying guide on rates, PMI, or closing costs so the Loan Estimate
            does not surprise you. Save or print the amortization PDF only after
            the inputs match the scenario you intend to discuss with a lender.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            If national headlines about rates worry you, remember that your
            quoted rate depends on credit, loan type, points, and lock period —
            and that escrow often moves the payment more than a small rate
            change. Use the live Freddie Mac averages on this page as context,
            then shop multiple Loan Estimates the same day. That combination of
            transparent math and local defaults is what {SITE.name} is built for.
          </p>
        </div>
      </section>
    </>
  );
}
