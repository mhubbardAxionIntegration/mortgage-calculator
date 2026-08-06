import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/LegalShell";
import { SITE, COMPANY } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${SITE.name}, editor ${SITE.author.name}, and ${COMPANY.name}: calculator methodology, editorial standards, and how we keep tools free for homebuyers.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <LegalShell title="About Us" href="/about">
      <p>
        {SITE.name} is a free suite of mortgage and home-affordability
        calculators built to help homebuyers and homeowners make clearer,
        more confident decisions. We believe estimating a mortgage payment
        shouldn&rsquo;t require a spreadsheet or a sales call — and it
        shouldn&rsquo;t hide the assumptions behind the number.
      </p>

      <h2>Who we are</h2>
      <p>
        The Site is operated by {COMPANY.name}, a {COMPANY.state}-based company.
        Content and tools are edited by{" "}
        <strong>{SITE.author.name}</strong>, {SITE.author.role.toLowerCase()}.
      </p>
      <p>{SITE.author.credentials}</p>

      <h2>Editorial standards</h2>
      <ul>
        <li>
          Payment math follows the standard amortization formula published on{" "}
          <Link href="/how-we-calculate">How we calculate</Link>. When defaults
          change (rates, tax/insurance starting points), we update the labeled{" "}
          &ldquo;as of&rdquo; date ({SITE.ratesAsOf}).
        </li>
        <li>
          Specialized pages use scenario-specific models: refinance break-even,
          FHA upfront and annual MIP, and ARM intro vs. stress payments — not
          copy-paste of a single form with swapped labels.
        </li>
        <li>
          Guides prioritize worked examples and decision frameworks over
          keyword filler. We do not present educational estimates as personalized
          loan offers or guarantees of approval.
        </li>
        <li>
          Corrections and methodology questions are welcome via the{" "}
          <Link href="/contact">contact form</Link>.
        </li>
      </ul>

      <h2>What makes our content different</h2>
      <ul>
        <li>
          State pages include local market notes, tax/homestead context,
          insurance risk drivers, buyer-program lists, and worked payment
          examples — not just a calculator with the state name swapped in.
        </li>
        <li>
          Loan-type pages (FHA, VA, refinance, affordability, ARM) include
          comparison tables, checklists, and multi-section explainers.
        </li>
        <li>
          We maintain a public methodology page documenting formulas, PMI rules,
          and data limits so reviewers and readers can verify the math.
        </li>
      </ul>

      <h2>Our approach to accuracy</h2>
      <ul>
        <li>
          Calculations use the standard amortization formula and clearly
          separate principal, interest, taxes, insurance, PMI/MIP, and HOA dues.
        </li>
        <li>
          Default interest rates are indicative and labeled with an
          &ldquo;as of&rdquo; date ({SITE.ratesAsOf}); always confirm current
          rates with a lender.
        </li>
        <li>
          State-level tax and insurance figures are approximate averages
          intended as starting points, not guarantees or assessed bills.
        </li>
        <li>
          Editorial guides cite common industry rules of thumb (such as 28/36
          DTI) and remind readers that underwriting is case-specific.
        </li>
      </ul>

      <h2>How we stay free</h2>
      <p>
        The calculators and guides on this Site are free to use. We do not run
        advertising trackers or analytics profiling on the Site. Optional
        features (such as a paid PDF report, if enabled) or future partner
        links—if any—are separate from ordinary calculator use. See our{" "}
        <a href="/privacy-policy">Privacy Policy</a> and{" "}
        <a href="/disclaimer">Disclaimer</a> for details.
      </p>

      <h2>Get in touch</h2>
      <p>
        Have feedback, a correction, or a partnership idea? Visit our{" "}
        <Link href="/contact">contact page</Link> — we&rsquo;d love to hear from
        you.
      </p>
    </LegalShell>
  );
}
