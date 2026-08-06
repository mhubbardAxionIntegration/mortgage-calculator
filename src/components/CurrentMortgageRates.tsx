import {
  RATE_SOURCE_LINKS,
  formatRateDate,
  getMortgageRatesWithFallback,
} from "@/lib/mortgageRates";
import { ApplyRateInCalculatorLink } from "@/components/ApplyRateInCalculatorLink";

interface Props {
  /** Base path for “Use this rate” links (?rate=). Defaults to current page root. */
  calculatorHref?: string;
  /** Hide the section heading when a parent already provides one. */
  showHeading?: boolean;
  className?: string;
}

export async function CurrentMortgageRates({
  calculatorHref = "/",
  showHeading = true,
  className = "",
}: Props) {
  const { rates, isLive } = await getMortgageRatesWithFallback();
  const asOfLabel = formatRateDate(rates.asOf30);

  return (
    <section
      aria-label="Current US mortgage rates"
      className={`flex h-full flex-col rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-5 sm:p-6 ${className}`}
    >
      {showHeading ? (
        <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          Current US Mortgage Rates
        </h2>
      ) : null}

      <div className="mt-4 grid flex-1 grid-cols-1 content-start gap-4 sm:grid-cols-2 lg:grid-cols-1">
        <div className="rounded-xl border border-sky-100 bg-white px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-sky-800">
            30-year fixed
          </p>
          <p className="mt-1 text-3xl font-extrabold tabular-nums text-slate-900">
            {rates.rate30.toFixed(2)}%
          </p>
          <p className="mt-1 text-xs text-slate-500">As of {asOfLabel}</p>
        </div>
        <div className="rounded-xl border border-sky-100 bg-white px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-sky-800">
            15-year fixed
          </p>
          <p className="mt-1 text-3xl font-extrabold tabular-nums text-slate-900">
            {rates.rate15.toFixed(2)}%
          </p>
          <p className="mt-1 text-xs text-slate-500">
            As of {formatRateDate(rates.asOf15)}
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        {isLive
          ? "National averages from the Freddie Mac Primary Mortgage Market Survey, published weekly through the Federal Reserve (FRED). Your quoted rate may differ based on credit, down payment, and loan type."
          : "Showing our last saved estimate — live feed temporarily unavailable. Use the links below for the latest published averages."}
      </p>

      <div className="mt-auto flex flex-wrap items-center gap-3 pt-4">
        <a
          href={RATE_SOURCE_LINKS.fred30}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-lg bg-sky-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800"
        >
          View live rates on FRED
          <span aria-hidden="true">&rarr;</span>
        </a>
        <a
          href={RATE_SOURCE_LINKS.freddieMac}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-800"
        >
          Freddie Mac PMMS
          <span aria-hidden="true">&rarr;</span>
        </a>
        <ApplyRateInCalculatorLink
          calculatorHref={calculatorHref}
          rate={rates.rate30}
        />
      </div>
    </section>
  );
}
