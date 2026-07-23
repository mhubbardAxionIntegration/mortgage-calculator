import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { SITE, COMPANY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE.name}, explaining how we collect, use, and protect information, including cookies and advertising.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" href="/privacy-policy" updated={SITE.ratesAsOf}>
      <p>
        This Privacy Policy explains how {COMPANY.name} (&ldquo;we,&rdquo;
        &ldquo;us,&rdquo; or &ldquo;our&rdquo;) handles information in
        connection with {SITE.name} (the &ldquo;Site&rdquo;). By using the Site,
        you agree to this policy.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Calculator inputs:</strong> Figures you enter (such as home
          price or income) are processed in your browser to produce estimates.
          We do not require an account, and we do not store these values on our
          servers.
        </li>
        <li>
          <strong>Usage data:</strong> Like most websites, we and our analytics
          providers may automatically collect technical data such as your IP
          address, browser type, pages visited, and referring URLs.
        </li>
        <li>
          <strong>Voluntary information:</strong> If you contact us or submit a
          form, we collect the information you provide (such as your name and
          email).
        </li>
      </ul>

      <h2>Cookies and advertising</h2>
      <p>
        We use cookies and similar technologies for analytics and advertising.
        Non-essential cookies (analytics and advertising) load only after you
        accept them in our cookie banner; if you decline, those scripts are not
        loaded. You can change or withdraw your choice at any time using the
        &ldquo;Cookie preferences&rdquo; link in the site footer.
      </p>
      <p>
        Third-party vendors, including Google, may use cookies to serve ads
        based on your prior visits to this and other websites. Google&rsquo;s
        use of advertising cookies enables it and its partners to serve ads to
        you based on your visits. You can opt out of personalized advertising by
        visiting{" "}
        <a href="https://www.google.com/settings/ads" rel="noopener" target="_blank">
          Google Ads Settings
        </a>{" "}
        and{" "}
        <a href="https://www.aboutads.info/choices/" rel="noopener" target="_blank">
          aboutads.info/choices
        </a>
        .
      </p>

      <h2>Affiliate and partner links</h2>
      <p>
        The Site contains affiliate links to mortgage lenders and related
        partners. If you click these links and complete an action, we may earn a
        commission at no additional cost to you. When you proceed to a partner
        site, their own privacy policies govern your information.
      </p>

      <h2>How we use information</h2>
      <ul>
        <li>To operate, maintain, and improve the Site and its calculators.</li>
        <li>To respond to your inquiries and provide support.</li>
        <li>To measure traffic and the performance of content and ads.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2>Your rights</h2>
      <p>
        Depending on your location, you may have rights to access, correct, or
        delete your personal information, or to opt out of certain processing.
        To exercise these rights, contact us through our{" "}
        <a href="/contact">contact page</a>.
      </p>

      <h2>Children&rsquo;s privacy</h2>
      <p>
        The Site is not directed to children under 13, and we do not knowingly
        collect personal information from children.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes are
        effective when posted on this page.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Visit our <a href="/contact">contact page</a>.
      </p>
    </LegalShell>
  );
}
