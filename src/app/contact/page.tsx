import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
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
        lender partnership.
      </p>

      <h2>Reach us directly</h2>
      <ul>
        <li>
          Email:{" "}
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
        </li>
        {COMPANY.phone && <li>Phone: {COMPANY.phone}</li>}
        <li>{COMPANY.name}</li>
        {COMPANY.addressLines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>

      <h2>Send a message</h2>
      {/* This form opens the visitor's email client. To capture submissions
          server-side, point `action` at your form handler (e.g. Formspree,
          a serverless function, or an API route) and set method="post". */}
      <form
        action={`mailto:${COMPANY.email}`}
        method="post"
        encType="text/plain"
        className="not-prose grid gap-4 rounded-2xl border border-slate-200 bg-white p-5"
      >
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
          />
        </div>
        <button
          type="submit"
          className="justify-self-start rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          Send message
        </button>
      </form>
    </LegalShell>
  );
}
