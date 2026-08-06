import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { FAQ_CATEGORIES, getAllFaqItems } from "@/lib/faq";
import { PAGE_HEROES } from "@/lib/pageHeroes";
import { absoluteUrl, SITE } from "@/lib/site";
import { faqPageSchema } from "@/lib/schema";

const PAGE_PATH = "/faq";
const PAGE_URL = absoluteUrl(PAGE_PATH);

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: `Answers to common homebuying questions — affordability, loan types, working with agents and lenders, offers, inspections, closing, and more. From ${SITE.shortName}.`,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "Frequently Asked Questions",
    description:
      "50 common mortgage and homebuying questions answered — from affordability and loan types to closing day.",
    url: PAGE_URL,
  },
};

export default function FaqPage() {
  const total = getAllFaqItems().length;

  return (
    <>
      <JsonLd data={faqPageSchema(getAllFaqItems())} />

      <PageHero
        hero={PAGE_HEROES.faq}
        title="Frequently Asked Questions"
        subtitle="Clear answers to the questions homebuyers ask most — from first offer through closing day."
      />

      <div className="mx-auto max-w-3xl px-4 py-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "FAQ", href: PAGE_PATH },
          ]}
        />

        <header className="mt-6">
          <p className="text-sm leading-relaxed text-slate-600">
            {total} questions across {FAQ_CATEGORIES.length} topics. Select a
            question to reveal the answer. Educational only — not a loan offer
            or personalized advice. For calculator methodology, see{" "}
            <Link
              href="/how-we-calculate"
              className="font-medium text-sky-800 hover:text-sky-900"
            >
              How we calculate
            </Link>
            .
          </p>
        </header>

        <nav aria-label="FAQ categories" className="mt-8 flex flex-wrap gap-2 text-sm">
          {FAQ_CATEGORIES.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-medium text-slate-700 hover:border-sky-300 hover:text-sky-800"
            >
              {c.title}
            </a>
          ))}
        </nav>

        <div className="mt-12">
          <FaqAccordion categories={FAQ_CATEGORIES} />
        </div>
      </div>
    </>
  );
}
