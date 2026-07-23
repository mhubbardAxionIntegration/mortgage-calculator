import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { ContactForm } from "@/components/ContactForm";
import { SITE, COMPANY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${COMPANY.name}, the team behind ${SITE.name}. Send us your questions, feedback, or partnership inquiries.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <LegalShell title="Contact Us" href="/contact">
      <p>
        We&rsquo;d love to hear from you — whether you&rsquo;ve found a bug,
        have feedback on a calculator, or want to discuss an advertising or
        lender partnership. Use the form below; we read every message.
      </p>

      <h2>About us</h2>
      <ul>
        {COMPANY.phone && <li>Phone: {COMPANY.phone}</li>}
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
