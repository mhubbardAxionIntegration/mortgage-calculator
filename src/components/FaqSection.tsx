import type { Faq } from "@/lib/faqs";

export function FaqSection({
  faqs,
  heading = "Frequently asked questions",
  intro = "Common questions about estimating your monthly mortgage payment, PITI, PMI, and affordability.",
}: {
  faqs: Faq[];
  heading?: string;
  /** Override the generic PITI blurb on specialized loan pages. */
  intro?: string;
}) {
  return (
    <section aria-labelledby="faq-heading" className="mx-auto max-w-3xl">
      <h2 id="faq-heading" className="text-2xl font-bold tracking-tight text-slate-900">
        {heading}
      </h2>
      {intro ? <p className="mt-3 text-slate-600">{intro}</p> : null}
      <div className="mt-6 space-y-6">
        {faqs.map((faq) => (
          <article key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-base font-semibold text-slate-900">{faq.question}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
