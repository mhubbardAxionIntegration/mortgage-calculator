import type { Metadata } from "next";
import Link from "next/link";
import { AuthorBio } from "@/components/AuthorBio";
import { JsonLd } from "@/components/JsonLd";
import { LegalShell } from "@/components/LegalShell";
import { SITE, COMPANY, absoluteUrl } from "@/lib/site";
import { PAGE_HEROES } from "@/lib/pageHeroes";
import { personAuthorSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${SITE.name} editor ${SITE.author.name}: who builds the calculators, why the math is public, and how we keep tools free for homebuyers.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          ...personAuthorSchema(),
          url: absoluteUrl("/about"),
        }}
      />
      <LegalShell
        title="About Us"
        href="/about"
        hero={PAGE_HEROES.about}
        subtitle={`Who builds ${SITE.name}, why the formulas are public, and how to reach the editor.`}
      >
        <AuthorBio variant="profile" />

        <h2>Who I am</h2>
        <p>
          I&rsquo;m {SITE.author.name}. I live in {SITE.author.location}, and I
          operate {COMPANY.name}. {SITE.name} is the educational product I
          maintain: payment, affordability, refinance, FHA, VA, and ARM tools,
          plus the Smart Buying guides that walk through the same math.
        </p>
        <p>
          I am qualified to publish these tools because I wrote them, I test
          them when the sliders change, and I document the formulas on{" "}
          <Link href="/how-we-calculate">How we calculate</Link>. I am not a
          licensed mortgage lender, loan officer, or underwriter. I do not
          originate loans, lock rates, or approve files. When a guide says
          &ldquo;in my testing,&rdquo; it means I ran this site&rsquo;s
          amortization engine — not that I closed a loan for a client.
        </p>

        <h2>Why this site exists</h2>
        <p>
          Payment apps often hide assumptions. I wanted a place where principal
          and interest, taxes, insurance, and mortgage insurance sit in the open,
          with state defaults you can challenge, and with worked examples that
          use the same numbers as the widgets. The Smart Buying cluster stays
          on that niche: term choice, PMI, loan types, shopping a Loan Estimate,
          and refinance break-even — not a farm of thin pages.
        </p>

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
            keyword filler. Educational estimates are never presented as
            personalized loan offers or guarantees of approval.
          </li>
          <li>
            Corrections are welcome via the <Link href="/contact">contact form</Link>{" "}
            or {SITE.contactEmail}.
          </li>
        </ul>

        <h2>How the site stays free</h2>
        <p>
          Calculators and guides are free. Limited Google AdSense advertising
          helps host them. Ads and any future partner links sit after the tools
          and articles, not in place of them. How ad-related data is handled is
          in the <Link href="/privacy-policy">Privacy Policy</Link>. Ordinary
          calculator use does not require an account.
        </p>

        <h2>Get in touch</h2>
        <p>
          Questions, a math correction, or a broken link:{" "}
          <Link href="/contact">contact page</Link> or{" "}
          <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
        </p>
      </LegalShell>
    </>
  );
}
