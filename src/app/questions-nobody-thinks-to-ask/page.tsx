import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { absoluteUrl, SITE } from "@/lib/site";
import { webApplicationSchema } from "@/lib/schema";
import { PAGE_HEROES } from "@/lib/pageHeroes";

const PAGE_PATH = "/questions-nobody-thinks-to-ask";
const PAGE_URL = absoluteUrl(PAGE_PATH);

export const metadata: Metadata = {
  title: "Questions Nobody Thinks to Ask When Buying a Home",
  description:
    "High-value questions to ask your realtor and about the property — compensation, comps, concessions, systems age, taxes, HOA, flood zones, and FHA/VA appraisal risks.",
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "Questions Nobody Thinks to Ask When Buying a Home",
    description:
      "Interview agents, evaluate houses, and unlock financing tactics most buyers never request.",
    url: PAGE_URL,
  },
};

type QaGroup = {
  heading: string;
  intro?: string;
  questions: string[];
};

const REALTOR_GROUPS: QaGroup[] = [
  {
    heading: "When interviewing or hiring a realtor",
    intro:
      "These separate full-time local buyer agents from generalists and clarify post-NAR compensation reality.",
    questions: [
      "How long have you worked full-time as a buyer’s agent, and how many buyer-side transactions did you close in the last 12 months in my price range and target neighborhoods?",
      "What neighborhoods or property types do you specialize in? Can you walk me through recent comps, inventory, and days-on-market there?",
      "How many clients are you working with now, and what is your typical response time and communication style?",
      "Can you share 2–3 recent buyer-client references who closed in the last 6–12 months?",
      "How does your compensation work under current buyer-broker agreement rules? What if the seller offers less (or more) than we agree? Is your fee negotiable?",
      "What services are included, and how do you help with low appraisals, inspection issues, or financing delays?",
    ],
  },
  {
    heading: "About the local market and a specific home",
    questions: [
      "Is this home well-priced versus recent comparable sales? Can you show the comps and explain adjustments?",
      "How long has it been on the market, and why if longer than average? Are the sellers motivated?",
      "What do you know about the neighborhood — schools, HOA health and fees, flood or zoning issues, upcoming developments, noise, and broadband?",
      "Would you buy this house yourself? Why or why not?",
      "What red flags on condition, title, insurance, or taxes should I know before offering?",
      "How do inventory, absorption, and buyer/seller leverage look in this micro-market right now?",
    ],
  },
  {
    heading: "When preparing or making an offer",
    questions: [
      "Which contingencies do you recommend (inspection, appraisal, financing), and how strong is my position with them?",
      "What is a realistic offer strategy here — price, earnest money, timeline, escalation — and how will you present it?",
      "Can we negotiate seller concessions for closing costs or rate buydowns (temporary 2-1 or permanent points)? What is typically achievable for my loan type, and have you won these recently?",
      "How does a rate buydown compare financially to a pure price reduction for my situation?",
      "Is the seller willing to contribute toward buyer-agent compensation?",
      "What timeline should we expect from acceptance to closing, and which delays are common here?",
    ],
  },
  {
    heading: "Process, closing, and financing-aware support",
    questions: [
      "Who do you recommend for inspectors, title, or lenders — and why? Are any affiliated with you?",
      "How do you handle a low appraisal or required repairs, especially on FHA or VA loans?",
      "What happens if financing slips or we need a closing extension?",
      "Do you regularly work with FHA, VA, or other specialized loan buyers, and how does that affect offer strength or appraisal risk?",
      "Can you coordinate with my lender on seller-paid buydowns versus price cuts so we optimize payment and cash to close?",
      "Are there local first-time buyer programs, grants, or tax credits I should pursue, and how do they interact with the offer?",
    ],
  },
];

const PROPERTY_GROUPS: QaGroup[] = [
  {
    heading: "Condition, systems, and maintenance",
    questions: [
      "How old are the roof, HVAC, water heater, electrical panel, plumbing, and foundation work — and when were they last serviced? Any warranties or receipts?",
      "Have there been leaks, water intrusion, foundation movement, flooding, mold, or pest treatments?",
      "What is the condition of windows, insulation, and exterior? What repairs are known or upcoming?",
      "If applicable, what is the status of septic, well, or private utilities — last inspection or pump date?",
      "Which appliances convey, how old are they, and will anything be removed?",
      "Were renovations or additions permitted, and can we see documentation?",
    ],
  },
  {
    heading: "Costs, utilities, and ongoing expenses",
    questions: [
      "What are average monthly utilities, and can we see recent bills?",
      "What was the most recent year’s property tax bill, and is a post-sale reassessment expected?",
      "Are there HOA, condo, or co-op fees — what do they cover, and are assessments pending?",
      "What does homeowners insurance typically cost here (wind, flood, wildfire, or earthquake exposure)?",
      "If there are solar panels, are they owned, leased, or financed — and are the terms transferable?",
    ],
  },
  {
    heading: "Legal, title, and regulatory issues",
    questions: [
      "Are there easements, encroachments, boundary disputes, or shared access agreements?",
      "Is the property in a flood zone, wetland, or restricted area? Has flood insurance been required or claimed?",
      "Are there open permits, code violations, or unpermitted work?",
      "What is the zoning, and are short-term or long-term rentals or modifications restricted?",
      "Are the sellers aware of any liens, judgments, or title issues?",
    ],
  },
  {
    heading: "Neighborhood factors for this specific home",
    questions: [
      "How do orientation, lot, privacy, and views compare to nearby sales? Any adjacent noise, odor, or traffic issues?",
      "What are typical cell and broadband speeds and service limitations?",
      "Are developments, road projects, or zoning changes nearby that could affect value or livability?",
      "For multi-unit or investment use: rental history and any leases that convey?",
    ],
  },
  {
    heading: "Seller disclosures, history, and financing relevance",
    questions: [
      "Can we review the full seller disclosure, including anything declined or flagged?",
      "Why is the seller moving, and how long have they owned the home?",
      "Have prior offers, price cuts, or failed contracts happened — and why?",
      "Has the home been a rental or used commercially?",
      "Are there known issues that could affect an FHA, VA, or conventional appraisal (safety, structure, MPRs)?",
      "Has a recent inspection, appraisal, or survey been done that we can review?",
      "Are seller credits already offered — or is there flexibility — for repairs, closing costs, or rate buydowns?",
    ],
  },
];

function QuestionList({ groups }: { groups: QaGroup[] }) {
  return (
    <div className="space-y-10">
      {groups.map((g) => (
        <section key={g.heading}>
          <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            {g.heading}
          </h2>
          {g.intro && (
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{g.intro}</p>
          )}
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-slate-700">
            {g.questions.map((q) => (
              <li key={q} className="leading-relaxed pl-1">
                {q}
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}

export default function QuestionsNobodyThinksToAskPage() {
  const realtorCount = REALTOR_GROUPS.reduce((n, g) => n + g.questions.length, 0);
  const propertyCount = PROPERTY_GROUPS.reduce(
    (n, g) => n + g.questions.length,
    0,
  );

  return (
    <>
      <JsonLd
        data={webApplicationSchema({
          name: "Questions Nobody Thinks to Ask When Buying a Home",
          description:
            "Structured questions for hiring a realtor and evaluating a property before you offer.",
          url: PAGE_URL,
        })}
      />

      <PageHero
        hero={PAGE_HEROES.questions}
        title="Questions Nobody Thinks to Ask"
        subtitle="Realtor interview scripts and property questions most buyers never run before offering."
      />

      <div className="mx-auto max-w-3xl px-4 py-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Questions to ask", href: PAGE_PATH },
          ]}
        />

        <header className="mt-6">
          <p className="text-sm text-slate-600">
            Most buyers ask about square footage and school ratings. Fewer ask
            about buyer-broker compensation, seller-paid rate buydowns, roof age
            with receipts, or what will break an FHA appraisal. Below are{" "}
            {realtorCount} realtor interview and offer questions plus{" "}
            {propertyCount} property-specific questions — use them before you
            tour heavily or sign a buyer-broker agreement.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Educational checklist only — not legal, tax, or brokerage advice.
            Prefer written answers and still hire inspectors. Mortgage pitfalls:{" "}
            <Link
              href="/blog/category/pitfalls"
              className="font-medium text-sky-800 hover:text-sky-900"
            >
              Common Pitfalls
            </Link>
            .
          </p>
        </header>

        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <a
            href="#realtor"
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-medium text-slate-700 hover:border-sky-300 hover:text-sky-800"
          >
            Questions for your realtor
          </a>
          <a
            href="#property"
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-medium text-slate-700 hover:border-sky-300 hover:text-sky-800"
          >
            Questions about the property
          </a>
          <Link
            href="/blog/mortgage-pitfalls-homebuyers-should-avoid"
            className="rounded-lg border border-sky-200 bg-sky-50 px-3 py-2 font-medium text-sky-900 hover:border-sky-400"
          >
            Mortgage pitfalls guide
          </Link>
        </div>

        <section id="realtor" className="mt-14 scroll-mt-24">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Best questions to ask your realtor
          </h2>
          <p className="mt-3 text-slate-600">
            Interview 2–3 agents. Take notes on compensation and strategy.
            Strong agents welcome detailed questions and show recent data instead
            of vague reassurance.
          </p>
          <div className="mt-8">
            <QuestionList groups={REALTOR_GROUPS} />
          </div>
        </section>

        <section id="property" className="mt-16 scroll-mt-24">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Specific questions to ask about the property
          </h2>
          <p className="mt-3 text-slate-600">
            Ask your agent to obtain written answers or documents (disclosures,
            utility bills, HOA packets, permits). Prioritize items that affect
            your loan type — FHA and VA focus on safe, sound, and sanitary
            condition more than cosmetics.
          </p>
          <div className="mt-8">
            <QuestionList groups={PROPERTY_GROUPS} />
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-lg font-bold text-slate-900">How to use this list</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
            <li>Request key answers by email so you have a record before offering.</li>
            <li>
              Follow every answer with professional inspections — these
              questions guide scrutiny; they do not replace due diligence.
            </li>
            <li>
              Tie financing questions to real caps for your loan (concessions,
              buydowns, appraisal risks) using our{" "}
              <Link
                href="/blog/seller-concessions-and-rate-buydowns"
                className="font-medium text-sky-800 hover:text-sky-900"
              >
                concessions guide
              </Link>{" "}
              and{" "}
              <Link
                href="/blog/category/pitfalls"
                className="font-medium text-sky-800 hover:text-sky-900"
              >
                pitfalls articles
              </Link>
              .
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
