import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { ContactForm } from "@/components/ContactForm";
import { SITE, COMPANY } from "@/lib/site";
import { PAGE_HEROES } from "@/lib/pageHeroes";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Email ${SITE.contactEmail} or use the contact form to reach ${SITE.author.name} at ${SITE.name} with calculator questions or corrections.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <LegalShell
      title="Contact Us"
      href="/contact"
      hero={PAGE_HEROES.contact}
      subtitle="Calculator questions, corrections, and feedback — the form emails the editor."
    >
      <p>
        Use the form below or email{" "}
        <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>. I read
        every message. This is not a lender help desk: I can explain the
        calculators, fix a bug, or correct a guide. I cannot lock a rate or
        underwrite a file.
      </p>

      <h2>Reach the editor</h2>
      <ul>
        <li>
          Email:{" "}
          <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
        </li>
        <li>
          Editor: {SITE.author.name}, {SITE.author.role}
        </li>
        <li>{COMPANY.name}</li>
        {COMPANY.addressLines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      <p>
        Typical replies are by email. If the form cannot send, the confirmation
        screen includes a mailto fallback with your message already filled in.
      </p>

      <h2>Send a message</h2>
      <ContactForm />
    </LegalShell>
  );
}
