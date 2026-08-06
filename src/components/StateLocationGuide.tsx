import Link from "next/link";
import { FaqSection } from "@/components/FaqSection";
import { getStateGuide } from "@/lib/stateGuides";
import { getPostsForState } from "@/lib/blog";
import type { StateData } from "@/lib/states";
import type { CountyRecord } from "@/lib/location";

type Props = {
  state?: StateData;
  county?: CountyRecord;
  stateSlug: string;
  countyFips: string;
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

/**
 * State market guide, related posts, and FAQs — same block as the home hub
 * after a state is selected.
 */
export function StateLocationGuide({
  state,
  county,
  stateSlug,
  countyFips,
}: Props) {
  if (!state) return null;

  const guide = getStateGuide(state);
  const relatedPosts = getPostsForState(state.slug, 4);
  const affordabilityHref = `/calculators/home-affordability-calculator${
    stateSlug
      ? `?state=${encodeURIComponent(stateSlug)}${
          countyFips
            ? `&county=${encodeURIComponent(countyFips)}`
            : ""
        }`
      : ""
  }`;

  return (
    <>
      <article className="mt-14 max-w-3xl space-y-10">
        <header>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {state.name} market guide
            {county ? ` · ${county.name} County` : ""}
          </h2>
          <p className="mt-2 text-slate-600">
            Local tax, insurance, program, and payment context for the location
            you selected — county defaults refine the calculator; the guide
            remains state-level.
          </p>
        </header>

        <section>
          <h3 className="text-xl font-bold tracking-tight text-slate-900">
            Housing market snapshot
          </h3>
          <p className="mt-4 leading-relaxed text-slate-600">
            {guide.marketOverview}
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold tracking-tight text-slate-900">
            Property taxes and homestead notes
          </h3>
          <p className="mt-4 leading-relaxed text-slate-600">
            {guide.taxAndHomestead}
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold tracking-tight text-slate-900">
            Homeowners insurance
          </h3>
          <p className="mt-4 leading-relaxed text-slate-600">
            {guide.insuranceNotes}
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold tracking-tight text-slate-900">
            Worked payment example
          </h3>
          <p className="mt-4 leading-relaxed text-slate-600">
            {guide.paymentWalkthrough}
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            {guide.affordabilityNote}
          </p>
          <p className="mt-4 text-sm text-slate-500">
            Adjust the calculator above, or open the{" "}
            <Link
              href={affordabilityHref}
              className="font-medium text-sky-800 hover:text-sky-900"
            >
              home affordability calculator
            </Link>
            . Methodology:{" "}
            <Link
              href="/how-we-calculate"
              className="font-medium text-sky-800 hover:text-sky-900"
            >
              how we calculate
            </Link>
            .
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold tracking-tight text-slate-900">
            Buyer programs to research
          </h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
            {guide.buyerPrograms.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold tracking-tight text-slate-900">
            Practical tips
          </h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
            {guide.localTips.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>

        <p className="leading-relaxed text-slate-500">{guide.closingNote}</p>
      </article>

      {relatedPosts.length > 0 && (
        <section className="mt-14">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Guides for {state.name}
            </h2>
            <Link
              href="/blog"
              className="text-sm font-medium text-sky-800 hover:text-sky-900"
            >
              All Smart Buying guides &rarr;
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-sky-300 hover:shadow-md"
              >
                <h3 className="font-semibold text-slate-900">{post.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">
                  {post.excerpt}
                </p>
                <p className="mt-3 text-xs text-slate-500">
                  {formatDate(post.published)} · {post.readingMinutes} min
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="mt-14">
        <FaqSection
          faqs={guide.faqs}
          heading={`${state.name} mortgage FAQs`}
          intro={`Common questions about estimating a mortgage payment in ${state.name}, including local tax and insurance context.`}
        />
      </div>
    </>
  );
}
