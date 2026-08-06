import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { SITE, COMPANY } from "@/lib/site";
import { PAGE_HEROES } from "@/lib/pageHeroes";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Learn how ${SITE.name} handles calculator inputs, contact information, cookies, and Google AdSense advertising on this site.`,
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
        you acknowledge the practices described here. {COMPANY.name} operates
        the Site from the United States. To contact us about privacy, use our{" "}
        <a href="/contact">contact page</a> or email{" "}
        <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
      </p>

      <h2>Information we collect and how we use it</h2>
      <p>
        For ordinary browsing and calculator use, we do not require an account
        or login. We handle information in the following ways:
      </p>
      <ul>
        <li>
          Do not store calculator numbers (home price, rate, income, and similar
          inputs) on our application servers — those calculations run in your
          browser
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
        <li>
          Use Google AdSense to serve third-party advertisements; Google and its
          partners may collect and process data as described below
        </li>
      </ul>

      <h2>Calculator inputs</h2>
      <p>
        Figures you type into the calculators (such as home price, down payment,
        rate, taxes, or income) are processed locally in your browser to show
        estimates. They are not uploaded to our application servers as part of
        normal calculator use. We do not sell calculator inputs and do not use
        them to create advertising profiles. If you use browser features such as
        sharing a link that includes query parameters you chose, those values
        stay in the URL you control.
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
        We use Google AdSense to display ads that help support the Site. Google
        and third-party vendors, ad networks, and other ad partners that
        participate in AdSense may serve or measure ads on the Site. Those
        parties may place or read cookies, use web beacons, IP addresses,
        device identifiers, local storage, and similar technologies as a result
        of ad serving.
      </p>
      <p>
        Google&rsquo;s advertising cookies enable Google and its partners to
        serve ads based on visits to this Site and/or other sites on the
        internet. They may use those technologies and information to deliver
        and render ads, cap frequency, measure ad performance, detect and
        prevent fraud and abuse, and, where permitted and selected, personalize
        ads. Google&rsquo;s explanation of its advertising technologies is
        available in its{" "}
        <a
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          rel="noopener noreferrer"
        >
          Advertising policy
        </a>
        , and its explanation of data it receives from partner sites is{" "}
        <a
          href="https://policies.google.com/technologies/partner-sites"
          target="_blank"
          rel="noopener noreferrer"
        >
          How Google uses information from sites or apps that use its services
        </a>
        .
      </p>
      <p>
        Google AdSense is the Site&rsquo;s advertising partner. The specific
        non-Google ad partners that may receive data can change based on our
        AdSense configuration, the ad request, and your location. For European
        traffic, the consent message must identify the selected partners and
        link to their data-use information. Google publishes information about{" "}
        <a
          href="https://support.google.com/adsense/answer/9012903"
          target="_blank"
          rel="noopener noreferrer"
        >
          its ad technology partners
        </a>
        . We do not use the Site&rsquo;s contact-form information or calculator
        inputs to select or target ads.
      </p>
      <p>
        What we collect ourselves (contact-form submissions and ordinary
        hosting logs) is separate from advertising information Google and its
        partners may collect when ads are served. As Google explains, that
        information can include the page URL, IP address, browser or device
        information, unique identifiers, and ad interactions. Google and its
        partners process it under their own notices and policies.
      </p>

      <h2>Cookies, consent, and your choices</h2>
      <p>
        We and our advertising partners use cookies and similar technologies in
        connection with ad delivery, measurement, and, if you allow it,
        personalization. We may also use limited first-party browser storage to
        remember your cookie choice and features you choose to use, such as an
        enabled paid-PDF license unlock. That first-party storage is not used
        for cross-site advertising.
      </p>
      <p>
        The Site&rsquo;s cookie banner offers a single choice to accept or
        decline non-essential analytics and advertising scripts, and the
        &ldquo;Cookie preferences&rdquo; footer control lets you withdraw or
        change that choice. It is not a vendor-level consent-management
        platform. You can also manage Google ad personalization in{" "}
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
        </a>{" "}
        and the{" "}
        <a
          href="https://optout.networkadvertising.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Network Advertising Initiative
        </a>
        . Browser settings can also block or delete cookies. These choices do
        not necessarily stop all ads; they generally affect personalization and
        cookie-based advertising.
      </p>
      <p>
        For visitors in the European Economic Area, the United Kingdom, and
        Switzerland, personalized Google ads must not be served unless and until
        we implement a Google-certified consent management platform (CMP)
        integrated with the IAB Europe Transparency and Consent Framework
        (TCF), obtain the required consent, and identify the relevant ad
        partners. Until that is in place, the Site&rsquo;s basic cookie banner
        is not a substitute for a certified CMP and cannot support personalized
        AdSense ads for visitors in those regions. Where permitted by Google
        and applicable law, non-personalized or limited ads may be available
        instead.
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
        you click an affiliate or partner link, that third party may collect
        information under its own privacy policy once you leave our Site. We do
        not control those external sites.
      </p>

      <h2>How we use information we receive</h2>
      <ul>
        <li>To operate and maintain the Site and its educational calculators</li>
        <li>
          To reply when you voluntarily contact us through the contact form
        </li>
        <li>To protect the Site against abuse and to meet legal obligations</li>
        <li>
          To support ad delivery and measurement through Google AdSense as
          described above; Google and its providers process advertising data
          under their own policies
        </li>
      </ul>
      <p>
        We do not sell the contact information you submit to us. We do not use
        calculator inputs to create advertising profiles. Google may process
        online identifiers and activity through its own advertising technologies
        as described above.
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
        effective when posted on this page. The &ldquo;Last updated&rdquo; date
        at the top of this page reflects the latest revision.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about privacy? Visit our <a href="/contact">contact page</a>{" "}
        or email{" "}
        <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
      </p>
    </LegalShell>
  );
}
