"use client";

import { useCallback, useId, useMemo, useState } from "react";
import {
  buildMonthlyAmortizationSchedule,
  formatCurrency,
  formatPercent,
  type AmortizationMonth,
} from "@/lib/mortgage";
import type { StateData } from "@/lib/states";
import type { CountyRecord } from "@/lib/location";
import { bindTap } from "@/lib/tap";

export interface AmortizationDetail {
  label: string;
  value: string;
}

type Props = {
  /** e.g. "Conventional fixed-rate", "FHA fixed-rate", "5/1 ARM". */
  loanTypeLabel: string;
  state?: StateData;
  county?: CountyRecord;
  homePrice?: number;
  downPayment?: number;
  loanAmount: number;
  annualRate: number;
  termYears: number;
  /** Total monthly payment (PITI or product equivalent) shown in the header. */
  monthlyPayment: number;
  principalAndInterest: number;
  /** Extra calculator-specific fields: taxes, insurance, PMI/MIP, HOA, funding fee, etc. */
  details?: AmortizationDetail[];
  /**
   * Precomputed schedule (e.g. a two-phase ARM schedule). When omitted, a
   * standard fixed-rate schedule is derived from loanAmount/annualRate/termYears.
   */
  schedule?: AmortizationMonth[];
  className?: string;
};

function todayLabel(): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date());
}

/**
 * Collapsible, scrollable amortization schedule with a full calculator-input
 * summary header and a client-side PDF export. Dynamic — recomputes whenever
 * the caller's inputs (and therefore its props) change.
 */
export function AmortizationSchedulePanel({
  loanTypeLabel,
  state,
  county,
  homePrice,
  downPayment,
  loanAmount,
  annualRate,
  termYears,
  monthlyPayment,
  principalAndInterest,
  details = [],
  schedule: providedSchedule,
  className = "",
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const [pdfBusy, setPdfBusy] = useState(false);
  const [pdfError, setPdfError] = useState(false);
  const panelId = useId();

  const schedule = useMemo(
    () =>
      providedSchedule ??
      buildMonthlyAmortizationSchedule(loanAmount, annualRate, termYears),
    [providedSchedule, loanAmount, annualRate, termYears],
  );

  const locationLabel = county
    ? `${county.name} County, ${state?.name ?? ""}`.trim()
    : (state?.name ?? "National (no location selected)");

  const summaryFields: AmortizationDetail[] = useMemo(
    () => [
      { label: "Report date", value: todayLabel() },
      { label: "Location", value: locationLabel },
      { label: "Loan type", value: loanTypeLabel },
      ...(homePrice != null
        ? [{ label: "Home price", value: formatCurrency(homePrice) }]
        : []),
      ...(downPayment != null
        ? [{ label: "Down payment", value: formatCurrency(downPayment) }]
        : []),
      { label: "Loan amount", value: formatCurrency(loanAmount) },
      { label: "Interest rate", value: formatPercent(annualRate) },
      { label: "Loan term", value: `${termYears} years` },
      {
        label: "Principal & interest",
        value: `${formatCurrency(principalAndInterest, 2)}/mo`,
      },
      {
        label: "Total monthly payment",
        value: `${formatCurrency(monthlyPayment, 2)}/mo`,
      },
      ...details,
    ],
    [
      locationLabel,
      loanTypeLabel,
      homePrice,
      downPayment,
      loanAmount,
      annualRate,
      termYears,
      principalAndInterest,
      monthlyPayment,
      details,
    ],
  );

  const handleDownloadPdf = useCallback(async () => {
    setPdfError(false);
    setPdfBusy(true);
    try {
      const { downloadSchedulePdf } = await import("@/lib/pdf");
      downloadSchedulePdf({
        title: `${loanTypeLabel} amortization schedule`,
        summaryFields,
        schedule,
      });
    } catch {
      setPdfError(true);
      window.setTimeout(() => setPdfError(false), 5000);
    } finally {
      setPdfBusy(false);
    }
  }, [loanTypeLabel, summaryFields, schedule]);

  if (schedule.length === 0) return null;

  return (
    <section
      aria-label="Amortization schedule"
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-white ${className}`.trim()}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5">
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={panelId}
          {...bindTap(() => setExpanded((v) => !v))}
          className="inline-flex items-center gap-2 text-sm font-semibold text-sky-800 hover:text-sky-900"
        >
          <span
            aria-hidden
            className={`inline-block text-xs transition-transform ${expanded ? "rotate-90" : ""}`}
          >
            &#9654;
          </span>
          {expanded ? "Hide amortization schedule" : "View amortization schedule"}
        </button>

        {expanded && (
          <button
            type="button"
            {...bindTap(handleDownloadPdf)}
            disabled={pdfBusy}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span aria-hidden>&#8595;</span>{" "}
            {pdfBusy ? "Preparing…" : "Download PDF"}
          </button>
        )}
      </div>

      {pdfError && (
        <p className="px-4 pb-3 text-xs text-amber-700 sm:px-5">
          Could not generate the PDF in this browser. Try again, or use your
          browser&apos;s print-to-PDF option instead.
        </p>
      )}

      {expanded && (
        <div id={panelId} className="border-t border-slate-200">
          <dl className="grid grid-cols-2 gap-x-4 gap-y-3 p-4 text-sm sm:grid-cols-3 sm:p-5 lg:grid-cols-4">
            {summaryFields.map((f) => (
              <div key={f.label}>
                <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  {f.label}
                </dt>
                <dd className="mt-0.5 font-semibold text-slate-900">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="max-h-[28rem] overflow-y-auto border-t border-slate-200">
            <table className="w-full border-collapse text-sm">
              <caption className="sr-only">
                Month-by-month amortization schedule showing payment number,
                date, payment amount, principal, interest, and remaining
                balance.
              </caption>
              <thead className="sticky top-0 z-10 bg-slate-50">
                <tr className="text-left text-xs uppercase tracking-wide text-slate-500">
                  <th scope="col" className="px-4 py-2.5 font-semibold">
                    #
                  </th>
                  <th scope="col" className="px-4 py-2.5 font-semibold">
                    Date
                  </th>
                  <th scope="col" className="px-4 py-2.5 text-right font-semibold">
                    Payment
                  </th>
                  <th scope="col" className="px-4 py-2.5 text-right font-semibold">
                    Principal
                  </th>
                  <th scope="col" className="px-4 py-2.5 text-right font-semibold">
                    Interest
                  </th>
                  <th scope="col" className="px-4 py-2.5 text-right font-semibold">
                    Balance
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {schedule.map((row) => (
                  <tr
                    key={row.month}
                    className="text-slate-700 odd:bg-white even:bg-slate-50/50"
                  >
                    <th
                      scope="row"
                      className="px-4 py-2 text-left font-medium text-slate-900"
                    >
                      {row.month}
                    </th>
                    <td className="px-4 py-2 text-slate-600">{row.label}</td>
                    <td className="px-4 py-2 text-right tabular-nums">
                      {formatCurrency(row.payment, 2)}
                    </td>
                    <td className="px-4 py-2 text-right tabular-nums">
                      {formatCurrency(row.principalPaid, 2)}
                    </td>
                    <td className="px-4 py-2 text-right tabular-nums">
                      {formatCurrency(row.interestPaid, 2)}
                    </td>
                    <td className="px-4 py-2 text-right tabular-nums font-medium">
                      {formatCurrency(row.endingBalance)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}
