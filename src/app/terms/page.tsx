import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { SITE, COMPANY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of use governing your access to and use of ${SITE.name}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Use" href="/terms" updated={SITE.ratesAsOf}>
      <p>
        These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use
        of {SITE.name} (the &ldquo;Site&rdquo;), operated by {COMPANY.name}. By
        using the Site, you agree to these Terms.
      </p>

      <h2>Use of the Site</h2>
      <p>
        You may use the Site for lawful, personal, non-commercial purposes. You
        agree not to misuse the Site, interfere with its operation, or attempt
        to access it using a method other than the interface we provide.
      </p>

      <h2>No financial advice</h2>
      <p>
        The Site provides estimates and educational content only and does not
        constitute financial, mortgage, tax, or legal advice. See our{" "}
        <a href="/disclaimer">Disclaimer</a> for full details.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The Site&rsquo;s content, design, and calculators are owned by{" "}
        {COMPANY.name} or its licensors and are protected by applicable laws.
        You may not copy, reproduce, or create derivative works without our
        permission.
      </p>

      <h2>Third-party links and affiliates</h2>
      <p>
        The Site may link to third-party sites and contain affiliate links. We
        do not control and are not responsible for third-party content,
        products, or services.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, {COMPANY.name} is not liable for
        any indirect, incidental, or consequential damages arising from your use
        of, or inability to use, the Site or any estimates it produces. The Site
        is provided &ldquo;as is&rdquo; without warranties of any kind.
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws of the State of {COMPANY.state},
        without regard to its conflict-of-laws principles.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms? Visit our{" "}
        <a href="/contact">contact page</a>.
      </p>
    </LegalShell>
  );
}
