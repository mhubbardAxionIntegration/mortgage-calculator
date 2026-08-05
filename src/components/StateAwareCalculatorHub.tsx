"use client";

import { useCallback, useEffect, useId, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MortgageCalculator } from "@/components/MortgageCalculator";
import { FaqSection } from "@/components/FaqSection";
import { RateCta } from "@/components/RateCta";
import {
  STATES,
  getState,
  inputsFromState,
  stateCalculatorHref,
  type StateData,
} from "@/lib/states";
import { getStateGuide } from "@/lib/stateGuides";
import { getPostsForState, type BlogPost } from "@/lib/blog";
import { DEFAULT_INPUTS } from "@/lib/defaults";
import { formatCurrency, formatPercent } from "@/lib/mortgage";

type Props = {
  /** Initial state slug from the server (?state=). */
  initialStateSlug?: string;
  /** Live 30-yr rate when available. */
  annualRate?: number;
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function StateAwareCalculatorHub({
  initialStateSlug = "",
  annualRate,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectId = useId();

  const urlSlug = searchParams.get("state") || initialStateSlug || "";
  const [selectedSlug, setSelectedSlug] = useState(urlSlug);

  // Stay in sync when the user navigates via browser back/forward or links.
  useEffect(() => {
    const next = searchParams.get("state") || "";
    setSelectedSlug((prev) => (prev === next ? prev : next));
  }, [searchParams]);

  const state: StateData | undefined = selectedSlug
    ? getState(selectedSlug)
    : undefined;

  const syncUrl = useCallback(
    (slug: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (slug) params.set("state", slug);
      else params.delete("state");
      // Drop share-link overrides when switching market so state defaults apply cleanly.
      params.delete("price");
      params.delete("down");
      const q = params.toString();
      router.replace(q ? `${pathname}?${q}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const onSelectState = useCallback(
    (slug: string) => {
      setSelectedSlug(slug);
      syncUrl(slug);
    },
    [syncUrl],
  );

  const calculatorInputs = useMemo(() => {
    const rate = annualRate ?? DEFAULT_INPUTS.annualRate;
    if (!state) return { annualRate: rate };
    return { ...inputsFromState(state), annualRate: rate };
  }, [state, annualRate]);

  const guide = state ? getStateGuide(state) : null;
  const relatedPosts: BlogPost[] = state
    ? getPostsForState(state.slug, 4)
    : [];

  return (
    <div>
      <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
        <label
          htmlFor={selectId}
          className="block text-sm font-semibold text-slate-900"
        >
          Property location
        </label>
        <p className="mt-1 text-sm text-slate-600">
          Choose a state to load local tax and insurance defaults and show that
          market&apos;s guide, programs, and related articles.
        </p>
        <select
          id={selectId}
          value={selectedSlug}
          onChange={(e) => onSelectState(e.target.value)}
          className="mt-3 w-full max-w-md rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/30"
        >
          <option value="">United States — national defaults</option>
          {STATES.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      {state && (
        <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm">
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <div className="text-xs text-slate-500">Median home price</div>
            <div className="font-bold text-slate-900">
              {formatCurrency(state.medianHomePrice)}
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <div className="text-xs text-slate-500">Avg property tax</div>
            <div className="font-bold text-slate-900">
              {formatPercent(state.propertyTaxRate)}
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <div className="text-xs text-slate-500">Avg insurance</div>
            <div className="font-bold text-slate-900">
              {formatCurrency(state.avgInsurance)}/yr
            </div>
          </div>
        </div>
      )}

      <div className="mt-8">
        <MortgageCalculator
          key={state?.slug ?? "national"}
          initialInputs={calculatorInputs}
        />
      </div>

      <div className="mt-10">
        <RateCta
          prefill={
            state
              ? { state: state.abbr, homePrice: state.medianHomePrice }
              : undefined
          }
          heading={
            state
              ? `Compare ${state.name} mortgage rates`
              : "Compare personalized rate quotes"
          }
          subtext={
            state
              ? `Get personalized quotes from lenders serving ${state.name}. Compare offers side by side before you lock.`
              : undefined
          }
        />
      </div>

      {state && guide && (
        <>
          <article className="mt-14 max-w-3xl space-y-10">
            <header>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                {state.name} market guide
              </h2>
              <p className="mt-2 text-slate-600">
                Local tax, insurance, program, and payment context for the state
                you selected — not a separate thin URL.
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
                  href="/calculators/home-affordability-calculator"
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
                  All blog posts &rarr;
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
      )}

      {!state && (
        <section id="states" className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Jump to a state
          </h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Selecting a state loads local defaults in the calculator above and
            reveals that market&apos;s guide on this same page.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm sm:grid-cols-3 lg:grid-cols-4">
            {STATES.map((s) => (
              <li key={s.slug}>
                <button
                  type="button"
                  onClick={() => onSelectState(s.slug)}
                  className="text-left text-slate-600 hover:text-sky-800"
                >
                  {s.name}
                </button>
                <span className="sr-only">
                  <Link href={stateCalculatorHref(s.slug)}>{s.name}</Link>
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
