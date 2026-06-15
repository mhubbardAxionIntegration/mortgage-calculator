import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { SITE, COMPANY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Financial disclaimer for the mortgage and affordability calculators on this site. Estimates only — not financial advice or a loan offer.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <LegalShell title="Disclaimer" href="/disclaimer" updated={SITE.ratesAsOf}>
      <p>
        The calculators, tools, and content on {SITE.name} (the &ldquo;Site&rdquo;),
        operated by {COMPANY.name}, are provided for general informational and
        educational purposes only. They do not constitute financial, mortgage,
        tax, legal, or investment advice, and they are not an offer or
        commitment to lend.
      </p>

      <h2>Estimates only</h2>
      <p>
        All results are estimates based on the figures you enter and on
        assumptions, default values, and indicative interest rates that may not
        reflect current market conditions. Your actual loan terms, interest
        rate, monthly payment, property taxes, insurance premiums, and mortgage
        insurance will be determined by a licensed lender and will likely
        differ from these estimates.
      </p>

      <h2>No professional relationship</h2>
      <p>
        Using this Site does not create a lender, broker, advisor, or fiduciary
        relationship. {COMPANY.name} is not a mortgage lender or broker. Before
        making any financial decision, consult a qualified, licensed mortgage
        professional, financial advisor, or attorney about your specific
        situation.
      </p>

      <h2>Third-party links</h2>
      <p>
        The Site may contain links to third-party lenders and partners,
        including affiliate links. We are not responsible for the accuracy,
        content, products, or services of those third parties. See our{" "}
        <a href="/privacy-policy">Privacy Policy</a> and{" "}
        <a href="/terms">Terms of Use</a> for more details.
      </p>

      <h2>No warranty</h2>
      <p>
        While we strive for accuracy, we make no warranties about the
        completeness, reliability, or accuracy of this information. Any action
        you take based on the Site is strictly at your own risk.
      </p>
    </LegalShell>
  );
}
