"use client";

import { useMemo } from "react";
import Link from "next/link";
import { MortgageCalculator } from "@/components/MortgageCalculator";
import { LocationControls } from "@/components/LocationControls";
import { FaqSection } from "@/components/FaqSection";
import { RateCta } from "@/components/RateCta";
import { STATES, stateCalculatorHref } from "@/lib/states";
import { getStateGuide } from "@/lib/stateGuides";
import { getPostsForState, type BlogPost } from "@/lib/blog";
import { DEFAULT_INPUTS } from "@/lib/defaults";
import { formatCurrency, formatPercent } from "@/lib/mortgage";
import { useCalculatorLocation } from "@/hooks/useCalculatorLocation";
import { LOAN_LIMIT_YEAR } from "@/lib/loanLimits";

type Props = {
  /** Initial state slug from the server (?state=). */
  initialStateSlug?: string;
  /** Initial county FIPS or slug from the server (?county=). */
  initialCounty?: string;
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
  initialCounty = "",
  annualRate,
}: Props) {
  const {
    stateSlug,
    countyFips,
    state,
    county,
    onStateChange,
    onCountyChange,
    locationInputs,
    locationKey,
    fhaLimit,
    conformingLimit,
  } = useCalculatorLocation({
    initialStateSlug,
    initialCounty,
  });

  const calculatorInputs = useMemo(() => {
    const rate = annualRate ?? DEFAULT_INPUTS.annualRate;
    return { ...locationInputs, annualRate: rate };
  }, [locationInputs, annualRate]);

  const guide = state ? getStateGuide(state) : null;
  const relatedPosts: BlogPost[] = state
    ? getPostsForState(state.slug, 4)
    : [];

  const displayPrice =
    locationInputs.homePrice ?? state?.medianHomePrice ?? DEFAULT_INPUTS.homePrice;
  const displayTax =
    locationInputs.propertyTaxRate ??
    state?.propertyTaxRate ??
    DEFAULT_INPUTS.propertyTaxRate;
  const displayIns =
    locationInputs.annualHomeInsurance ??
    state?.avgInsurance ??
    DEFAULT_INPUTS.annualHomeInsurance;

  return (
    <div>
      <LocationControls
        stateSlug={stateSlug}
        countyFips={countyFips}
        onStateChange={onStateChange}
        onCountyChange={onCountyChange}
        hint="Choose a state and county to load local tax and insurance defaults. County also drives FHA and conforming loan-limit context used on specialized calculators."
      />

      {(state || county) && (
        <div className="mt-6 grid grid-cols-2 gap-3 text-center text-sm sm:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <div className="text-xs text-slate-500">
              {county ? "Local median (HUD)" : "Median home price"}
            </div>
            <div className="font-bold text-slate-900">
              {formatCurrency(displayPrice)}
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <div className="text-xs text-slate-500">Property tax rate</div>
            <div className="font-bold text-slate-900">
              {formatPercent(displayTax)}
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <div className="text-xs text-slate-500">Est. insurance</div>
            <div className="font-bold text-slate-900">
              {formatCurrency(displayIns)}/yr
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <div className="text-xs text-slate-500">
              {county ? `FHA 1-unit (${LOAN_LIMIT_YEAR})` : "Select county for FHA limit"}
            </div>
            <div className="font-bold text-slate-900">
              {county ? formatCurrency(fhaLimit) : "—"}
            </div>
          </div>
        </div>
      )}

      {county && (
        <p className="mt-3 text-xs text-slate-500">
          {county.name} County conforming (FHFA) 1-unit limit:{" "}
          {formatCurrency(conformingLimit)}. Limits are educational estimates
          from HUD CHUMS {LOAN_LIMIT_YEAR} files.
        </p>
      )}

      <div className="mt-8">
        <MortgageCalculator
          key={locationKey}
          initialInputs={calculatorInputs}
        />
      </div>

      <div className="mt-10">
        <RateCta
          prefill={
            state
              ? { state: state.abbr, homePrice: displayPrice }
              : undefined
          }
          heading={
            state
              ? `Compare ${state.name} mortgage rates`
              : "Compare personalized rate quotes"
          }
          subtext={
            state
              ? `Get personalized quotes from lenders serving ${state.name}${county ? ` (${county.name} County)` : ""}. Compare offers side by side before you lock.`
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
                {county ? ` · ${county.name} County` : ""}
              </h2>
              <p className="mt-2 text-slate-600">
                Local tax, insurance, program, and payment context for the
                location you selected — county defaults refine the calculator;
                the guide remains state-level.
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
                  href={`/calculators/home-affordability-calculator${stateSlug ? `?state=${encodeURIComponent(stateSlug)}${countyFips ? `&county=${encodeURIComponent(countyFips)}` : ""}` : ""}`}
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
            Selecting a state loads local defaults in the calculator above.
            Choose a county next for finer tax, insurance, and loan-limit
            context.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm sm:grid-cols-3 lg:grid-cols-4">
            {STATES.map((s) => (
              <li key={s.slug}>
                <button
                  type="button"
                  onClick={() => onStateChange(s.slug)}
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
