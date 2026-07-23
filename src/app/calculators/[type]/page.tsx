import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MortgageCalculator } from "@/components/MortgageCalculator";
import { FaqSection } from "@/components/FaqSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { AdSlot } from "@/components/AdSlot";
import { RateCta } from "@/components/RateCta";
import { LOAN_TYPES, getLoanType } from "@/lib/loanTypes";
import {
  faqPageSchema,
  financialProductSchema,
  webApplicationSchema,
} from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";
import type { Faq } from "@/lib/faqs";

export function generateStaticParams() {
  return LOAN_TYPES.map((t) => ({ type: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  const data = getLoanType(type);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    alternates: { canonical: `/calculators/${data.slug}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: absoluteUrl(`/calculators/${data.slug}`),
    },
  };
}

export default async function LoanTypePage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const data = getLoanType(type);
  if (!data) notFound();

  const pageUrl = absoluteUrl(`/calculators/${data.slug}`);
  const isAffordability = data.slug === "home-affordability-calculator";

  const faqs: Faq[] = [
    ...data.sections.slice(0, 2).map((s) => ({
      question: s.heading,
      answer: s.text,
    })),
    {
      question: `What should I check before choosing a ${data.label} loan?`,
      answer: data.checklist.join(" "),
    },
  ];

  const otherTypes = LOAN_TYPES.filter((t) => t.slug !== data.slug);

  return (
    <>
      <JsonLd
        data={[
          webApplicationSchema({
            name: data.title,
            description: data.metaDescription,
            url: pageUrl,
          }),
          financialProductSchema({
            name: data.title,
            description: data.metaDescription,
            url: pageUrl,
          }),
          faqPageSchema(faqs),
        ]}
      />

      <div className="mx-auto max-w-5xl px-4 py-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Calculators", href: "/mortgage-calculator" },
            { name: data.label, href: `/calculators/${data.slug}` },
          ]}
        />

        <header className="mt-6 max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {data.title}
          </h1>
          <p className="mt-3 text-lg text-slate-600">{data.tagline}</p>
          <ul className="mt-5 space-y-2">
            {data.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-slate-600">
                <span aria-hidden className="mt-0.5 text-emerald-600">
                  &#10003;
                </span>
                {h}
              </li>
            ))}
          </ul>
        </header>

        <div className="mt-8">
          <MortgageCalculator
            initialInputs={data.defaults}
            initialMode={isAffordability ? "affordability" : "payment"}
            lockMode={isAffordability}
          />
        </div>

        <div className="mt-10">
          <RateCta
            prefill={{ loanType: data.slug }}
            heading={`Get matched with ${data.label} lenders`}
            subtext="Compare personalized offers from lenders that specialize in this loan type."
          />
        </div>

        <div className="mt-10">
          <AdSlot slot="inContent" />
        </div>

        <article className="mt-14 max-w-3xl space-y-10">
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Quick comparison
            </h2>
            <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
              <table className="min-w-full text-left text-sm">
                <tbody>
                  {data.comparison.map((row) => (
                    <tr key={row.label} className="border-b border-slate-100 last:border-0">
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                        {row.label}
                      </th>
                      <td className="px-4 py-3 text-slate-600">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {data.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                {s.heading}
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">{s.text}</p>
            </section>
          ))}

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Checklist before you apply
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              {data.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-500">
              For the formulas behind every estimate, see{" "}
              <Link
                href="/how-we-calculate"
                className="font-medium text-emerald-700 hover:text-emerald-800"
              >
                how we calculate
              </Link>
              .
            </p>
          </section>
        </article>

        <section className="mt-12">
          <h2 className="text-lg font-bold text-slate-900">
            Other mortgage calculators
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {otherTypes.map((t) => (
              <Link
                key={t.slug}
                href={`/calculators/${t.slug}`}
                className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-emerald-300 hover:shadow-sm"
              >
                <h3 className="font-semibold text-slate-900">{t.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{t.tagline}</p>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-14">
          <FaqSection faqs={faqs} heading={`${data.title} FAQs`} />
        </div>
      </div>
    </>
  );
}
