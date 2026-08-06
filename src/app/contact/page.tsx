import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { ContactForm } from "@/components/ContactForm";
import { SITE, COMPANY } from "@/lib/site";
import { PAGE_HEROES } from "@/lib/pageHeroes";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${COMPANY.name}, the team behind ${SITE.name}. Send us your questions, feedback, or corrections.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <LegalShell
      title="Contact Us"
      href="/contact"
      hero={PAGE_HEROES.contact}
      subtitle="Questions, corrections, and calculator feedback — we read every message."
    >
      <p>
        We&rsquo;d love to hear from you — whether you&rsquo;ve found a bug,
        have feedback on a calculator, or spotted something that needs a
        correction. Use the form below; we read every message.
      </p>

      <h2>About us</h2>
      <ul>
        {COMPANY.phone && <li>Phone: {COMPANY.phone}</li>}
        <li>
          Email:{" "}
          <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
        </li>
        <li>{COMPANY.name}</li>
        {COMPANY.addressLines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>

      <h2>Send a message</h2>
      <ContactForm />
    </LegalShell>
  );
}
