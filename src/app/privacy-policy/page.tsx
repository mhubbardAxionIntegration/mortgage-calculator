import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { SITE, COMPANY } from "@/lib/site";
import { PAGE_HEROES } from "@/lib/pageHeroes";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `${SITE.name} does not use analytics or advertising trackers. Learn how calculator inputs stay in your browser and when contact information is collected.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      href="/privacy-policy"
      updated={SITE.ratesAsOf}
      hero={PAGE_HEROES.privacy}
      subtitle="How we handle information on this site — with no advertising or analytics trackers."
    >
      <p>
        This Privacy Policy explains how {COMPANY.name} (&ldquo;we,&rdquo;
        &ldquo;us,&rdquo; or &ldquo;our&rdquo;) handles information in
        connection with {SITE.name} (the &ldquo;Site&rdquo;). By using the Site,
        you agree to this policy.
      </p>

      <h2>Our commitment: no tracking</h2>
      <p>
        <strong>
          The Site does not collect, sell, or use personal information for
          advertising, analytics profiling, or cross-site tracking.
        </strong>{" "}
        We do not run Google Analytics, advertising pixels, social tracking
        pixels, or similar third-party scripts that follow you around the web.
        We do not use non-essential cookies for marketing or measurement.
      </p>

      <h2>Information we do not collect automatically</h2>
      <p>For ordinary browsing and calculator use, we do not:</p>
      <ul>
        <li>Create marketing or advertising profiles about you</li>
        <li>Track you with analytics tools (such as Google Analytics)</li>
        <li>Serve personalized or retargeted ads on this Site</li>
        <li>Require an account or login to use the calculators</li>
        <li>
          Store calculator numbers (home price, rate, income, and similar inputs)
          on our servers — those calculations run in your browser
        </li>
      </ul>

      <h2>Calculator inputs</h2>
      <p>
        Figures you type into the calculators (such as home price, down payment,
        rate, taxes, or income) are processed locally in your browser to show
        estimates. They are not uploaded to our application servers as part of
        normal calculator use. If you use browser features such as sharing a
        link that includes query parameters you chose, those values stay in the
        URL you control.
      </p>

      <h2>When you choose to contact us</h2>
      <p>
        If you use the contact form, we receive only the information you
        voluntarily submit (for example, your name, email address, and message)
        so we can reply. We use that information solely to respond to your
        inquiry and do not sell it or use it for advertising. Do not submit
        information you do not want us to receive.
      </p>

      <h2>Cookies and similar technologies</h2>
      <p>
        The Site does not set advertising or analytics cookies. We may use
        strictly necessary, first-party browser storage only for functional
        features you initiate (for example, remembering a license unlock for a
        paid PDF feature if that option is enabled). Those items are not used to
        track you across other websites.
      </p>

      <h2>Hosting and security logs</h2>
      <p>
        Like most websites, our hosting and content-delivery providers may
        generate standard technical logs (such as IP address, time, and
        requested URL) for security, abuse prevention, and reliable delivery of
        the Site. We do not use those operational logs to build advertising
        profiles or to measure marketing campaigns. Those providers process data
        under their own terms as infrastructure operators.
      </p>

      <h2>Affiliate and partner links</h2>
      <p>
        The Site may include optional links to third-party lenders or tools. If
        those links are disabled or unused, no partner handoff occurs. If you
        later choose to click an affiliate or partner link, that third party may
        collect information under its own privacy policy once you leave our Site.
        We do not control those external sites.
      </p>

      <h2>How we use information we receive</h2>
      <ul>
        <li>To operate and maintain the Site and its educational calculators</li>
        <li>
          To reply when you voluntarily contact us through the contact form
        </li>
        <li>To protect the Site against abuse and to meet legal obligations</li>
      </ul>
      <p>
        We do not use Site data to run targeted advertising or analytics
        dashboards about individual visitors.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on your location, you may have rights to access, correct, or
        delete personal information you provided to us (for example, a contact
        message). To exercise these rights, use our{" "}
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
        Questions about privacy? Visit our <a href="/contact">contact page</a>.
      </p>
    </LegalShell>
  );
}
