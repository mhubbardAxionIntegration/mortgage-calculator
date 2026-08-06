"use client";

import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import {
  calculateRefinance,
  breakEvenLabel,
} from "@/lib/specializedMortgage";
import { formatCurrency, formatPercent } from "@/lib/mortgage";
import { SITE } from "@/lib/site";
import { getRefiClosingCostPercent } from "@/lib/refiLocation";
import { RangeSlider } from "./RangeSlider";
import { LocationControls } from "./LocationControls";
import { useCalculatorLocation } from "@/hooks/useCalculatorLocation";

type Props = {
  initialStateSlug?: string;
  initialCounty?: string;
};

const BASE_DEFAULTS = {
  currentBalance: 280000,
  currentRate: Math.min(SITE.defaultRate + 1.25, 12),
  remainingMonths: 300,
  newRate: SITE.defaultRate,
  newTermYears: 30,
  closingCosts: 6500,
  cashOut: 0,
};

export function RefinanceCalculator({
  initialStateSlug = "",
  initialCounty = "",
}: Props) {
  const loc = useCalculatorLocation({
    initialStateSlug,
    initialCounty,
    clearShareOverrides: false,
  });
  const [inputs, setInputs] = useState(BASE_DEFAULTS);
  const autoCloseRef = useRef(true);

  useEffect(() => {
    if (!autoCloseRef.current) return;
    const estimated = loc.estimateRefiClosingCosts(
      inputs.currentBalance + inputs.cashOut,
    );
    setInputs((prev) => ({ ...prev, closingCosts: estimated }));
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only re-estimate when location or loan size changes
  }, [loc.locationKey, loc.stateSlug, inputs.currentBalance, inputs.cashOut]);

  const set = useCallback((key: keyof typeof BASE_DEFAULTS, value: number) => {
    if (key === "closingCosts") autoCloseRef.current = false;
    setInputs((prev) => ({ ...prev, [key]: value }));
  }, []);

  const result = useMemo(() => calculateRefinance(inputs), [inputs]);
  const savingsPositive = result.monthlySavings > 0;
  const costPct = getRefiClosingCostPercent(loc.state?.abbr);

  return (
    <div className="space-y-4">
      <LocationControls
        stateSlug={loc.stateSlug}
        countyFips={loc.countyFips}
        onStateChange={(slug) => {
          autoCloseRef.current = true;
          loc.onStateChange(slug);
        }}
        onCountyChange={loc.onCountyChange}
        hint="State drives estimated closing costs (title, recording, transfer) and any tangible net-benefit disclosure notes. County refines local context."
      />

      <section
        id="calculator"
        aria-label="Refinance break-even calculator"
        className="scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
      >
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-3 sm:px-6">
          <p className="text-sm font-medium text-slate-700">
            Refinance break-even — compare current vs new P&amp;I and recover
            closing costs
            {loc.state
              ? ` · est. closing ~${costPct.toFixed(1)}% in ${loc.state.abbr}`
              : ""}
          </p>
        </div>

        <div className="grid gap-0 lg:grid-cols-5">
          <div className="space-y-5 p-5 sm:p-6 lg:col-span-3 lg:border-r lg:border-slate-200">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Current loan
            </h3>
            <RangeSlider
              label="Remaining balance"
              value={inputs.currentBalance}
              onChange={(v) => set("currentBalance", v)}
              min={10000}
              max={1500000}
              step={1000}
              format={(v) => formatCurrency(v)}
            />
            <RangeSlider
              label="Current interest rate"
              value={inputs.currentRate}
              onChange={(v) => set("currentRate", v)}
              min={0.5}
              max={12}
              step={0.125}
              format={(v) => formatPercent(v)}
            />
            <RangeSlider
              label="Months remaining"
              value={inputs.remainingMonths}
              onChange={(v) => set("remainingMonths", v)}
              min={12}
              max={360}
              step={1}
              format={(v) => `${v} mo (~${(v / 12).toFixed(1)} yr)`}
            />

            <h3 className="pt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              New loan
            </h3>
            <RangeSlider
              label="New interest rate"
              value={inputs.newRate}
              onChange={(v) => set("newRate", v)}
              min={0.5}
              max={12}
              step={0.125}
              format={(v) => formatPercent(v)}
            />
            <RangeSlider
              label="New term"
              value={inputs.newTermYears}
              onChange={(v) => set("newTermYears", v)}
              min={10}
              max={30}
              step={5}
              format={(v) => `${v} years`}
            />
            <RangeSlider
              label="Closing costs"
              value={inputs.closingCosts}
              onChange={(v) => set("closingCosts", v)}
              min={0}
              max={25000}
              step={250}
              format={(v) => formatCurrency(v)}
              hint={
                loc.state
                  ? `Auto-estimated ~${costPct.toFixed(1)}% for ${loc.state.name}; drag to override`
                  : "Fees, points, title, appraisal — pick a state for a local estimate"
              }
            />
            <RangeSlider
              label="Cash-out (optional)"
              value={inputs.cashOut}
              onChange={(v) => set("cashOut", v)}
              min={0}
              max={200000}
              step={1000}
              format={(v) => formatCurrency(v)}
              hint="Adds to the new loan amount"
            />
          </div>

          <div className="flex flex-col gap-4 bg-slate-50 p-5 sm:p-6 lg:col-span-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Break-even
              </p>
              <p className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900">
                {breakEvenLabel(result.breakEvenMonths)}
              </p>
              <p className="mt-1 text-sm text-slate-600">
                {savingsPositive
                  ? `Save ${formatCurrency(result.monthlySavings)}/mo on P&I`
                  : result.monthlySavings < 0
                    ? `New P&I is ${formatCurrency(Math.abs(result.monthlySavings))}/mo higher`
                    : "P&I payments are equal"}
              </p>
            </div>

            {loc.refiRegulationNote && (
              <div
                role="note"
                className="rounded-lg border border-sky-200 bg-sky-50 px-3 py-2 text-sm text-sky-950"
              >
                {loc.refiRegulationNote}
              </div>
            )}

            <dl className="space-y-3 text-sm">
              <ResultRow
                label="Current P&I"
                value={formatCurrency(result.currentMonthlyPI)}
              />
              <ResultRow
                label="New P&I"
                value={formatCurrency(result.newMonthlyPI)}
              />
              <ResultRow
                label="New loan amount"
                value={formatCurrency(result.newLoanAmount)}
              />
              <ResultRow
                label="Closing costs (estimate)"
                value={formatCurrency(inputs.closingCosts)}
              />
              <ResultRow
                label="Lifetime interest (current path)"
                value={formatCurrency(result.lifetimeInterestCurrent)}
              />
              <ResultRow
                label="Lifetime interest (new loan)"
                value={formatCurrency(result.lifetimeInterestNew)}
              />
              <ResultRow
                label="Interest difference"
                value={
                  result.lifetimeInterestDelta >= 0
                    ? `Save ${formatCurrency(result.lifetimeInterestDelta)}`
                    : `Cost ${formatCurrency(Math.abs(result.lifetimeInterestDelta))} more`
                }
                emphasize
              />
            </dl>

            <p className="mt-auto text-xs leading-relaxed text-slate-500">
              Closing-cost percentages are indicative state averages — not a
              quote. Taxes, insurance, and MI may also change when you refinance.
              Net-benefit notes are educational, not legal advice.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function ResultRow({
  label,
  value,
  emphasize,
}: {
  label: string;
  value: string;
  emphasize?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-slate-200/80 pb-2 last:border-0">
      <dt className="text-slate-600">{label}</dt>
      <dd
        className={
          emphasize
            ? "font-semibold text-teal-700"
            : "font-semibold tabular-nums text-slate-900"
        }
      >
        {value}
      </dd>
    </div>
  );
}
