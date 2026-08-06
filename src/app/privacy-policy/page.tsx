import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { SITE, COMPANY } from "@/lib/site";
import { PAGE_HEROES } from "@/lib/pageHeroes";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Learn how ${SITE.name} handles calculator inputs, contact information, cookies, and Google advertising when ads are enabled.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      href="/privacy-policy"
      updated="August 6, 2026"
      hero={PAGE_HEROES.privacy}
      subtitle="How we handle information, cookies, and advertising on this site."
    >
      <p>
        This Privacy Policy explains how {COMPANY.name} (&ldquo;we,&rdquo;
        &ldquo;us,&rdquo; or &ldquo;our&rdquo;) handles information in
        connection with {SITE.name} (the &ldquo;Site&rdquo;). By using the Site,
        you agree to this policy.
      </p>

      <h2>Current advertising status</h2>
      <p>
        <strong>
          As of the date above, the Site does not have Google AdSense, Google
          Analytics, affiliate tracking, or other advertising scripts enabled.
        </strong>{" "}
        The Site therefore does not currently load Google ad code or set
        advertising or analytics cookies. We may use Google AdSense in the
        future to display ads that help support the Site. The sections below
        explain what that means if and when advertising is enabled.
      </p>

      <h2>Information we collect and how we use it</h2>
      <p>
        For ordinary browsing and calculator use, we do not require an account
        or login. We handle information in the following ways:
      </p>
      <ul>
        <li>
          Store calculator numbers (home price, rate, income, and similar inputs)
          on our servers — those calculations run in your browser
        </li>
        <li>
          Receive the name, email address, and message you submit through our
          contact form so we can respond
        </li>
        <li>
          Rely on our hosting and content-delivery providers&rsquo; standard
          technical logs, such as IP address, requested URL, time, browser
          information, and security events, to deliver and protect the Site
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
        so we can reply. Our email-delivery provider may process that
        information to deliver the message. We use the information solely to
        respond to your inquiry and do not sell it or use it for advertising.
        Do not submit information you do not want us to receive.
      </p>

      <h2>Google AdSense and third-party advertising</h2>
      <p>
        If we enable Google AdSense, Google and its advertising partners may
        serve ads on the Site. They may use cookies, device identifiers, local
        storage, and similar technologies, including Google advertising cookies
        such as the DoubleClick cookie, to deliver and measure ads, limit how
        often you see an ad, prevent fraud, report performance, and, where
        permitted, personalize ads based on your visits to this and other sites.
        Google&rsquo;s use of advertising data is governed by its own policies,
        including its{" "}
        <a
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          rel="noopener noreferrer"
        >
          information about ads
        </a>
        .
      </p>
      <p>
        Google AdSense is the only advertising partner planned by the Site.
        When enabled, Google may use a group of approved advertising technology
        providers to serve or measure ads. The providers and purposes that
        apply can vary by location and ad request; the applicable list will be
        presented through the consent tool used when advertising is live.
      </p>

      <h2>Cookies, consent, and your choices</h2>
      <p>
        The Site currently does not set advertising or analytics cookies. We
        may use limited first-party browser storage for features you choose to
        use, such as remembering a license unlock for an enabled paid PDF
        feature. This storage is not used for cross-site advertising.
      </p>
      <p>
        If advertising or analytics is enabled, a cookie preferences control
        will be available in the Site footer. You can use it to change or
        withdraw your choice. You can also manage Google ad personalization in{" "}
        <a
          href="https://myadcenter.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google My Ad Center (formerly Ads Settings)
        </a>{" "}
        and use the industry opt-out tools at{" "}
        <a
          href="https://optout.aboutads.info/"
          target="_blank"
          rel="noopener noreferrer"
        >
          aboutads.info
        </a>
        . Browser settings can also block or delete cookies. These choices do
        not necessarily stop all ads; they generally affect personalization and
        cookie-based advertising.
      </p>
      <p>
        For visitors in the European Economic Area, the United Kingdom, and
        Switzerland, we will use a Google-certified consent management platform
        integrated with the IAB Transparency and Consent Framework before
        serving personalized Google ads. We will not rely on the Site&rsquo;s
        basic cookie-preferences control as a substitute for that requirement.
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
        <li>
          If advertising is enabled, to support ad delivery and measurement as
          described above; Google and its providers process advertising data
          under their own policies
        </li>
      </ul>
      <p>
        We do not sell the contact information you submit to us. We do not use
        calculator inputs to create advertising profiles. When advertising is
        enabled, Google may process online identifiers and activity through its
        own advertising technologies as described above.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on your location, you may have rights to access, correct, or
        delete personal information you provided to us (for example, a contact
        message). To exercise these rights, use our{" "}
        <a href="/contact">contact page</a>.
      </p>
      <p>
        If you have a question or request about data processed by Google for
        advertising, use Google&rsquo;s privacy controls or contact Google
        directly. We may not be able to identify or access information held in
        Google&rsquo;s advertising systems.
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
