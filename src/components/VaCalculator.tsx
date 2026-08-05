"use client";

import { useMemo, useState, useCallback } from "react";
import {
  calculateVaPayment,
  vaFundingFeeRatePercent,
} from "@/lib/specializedMortgage";
import { formatCurrency, formatPercent } from "@/lib/mortgage";
import { DEFAULT_INPUTS } from "@/lib/defaults";
import { RangeSlider } from "./RangeSlider";

const DEFAULTS = {
  homePrice: DEFAULT_INPUTS.homePrice,
  downPayment: 0,
  annualRate: DEFAULT_INPUTS.annualRate,
  termYears: 30,
  firstUse: true,
  disabilityExempt: false,
  financeFundingFee: true,
  propertyTaxRate: DEFAULT_INPUTS.propertyTaxRate,
  annualHomeInsurance: DEFAULT_INPUTS.annualHomeInsurance,
  monthlyHoa: DEFAULT_INPUTS.monthlyHoa,
};

export function VaCalculator() {
  const [inputs, setInputs] = useState(DEFAULTS);
  const set = useCallback(
    <K extends keyof typeof DEFAULTS>(key: K, value: (typeof DEFAULTS)[K]) =>
      setInputs((prev) => ({ ...prev, [key]: value })),
    [],
  );

  const downPct =
    inputs.homePrice > 0 ? (inputs.downPayment / inputs.homePrice) * 100 : 0;
  const tableRate = vaFundingFeeRatePercent(
    inputs.firstUse,
    downPct,
    inputs.disabilityExempt,
  );

  const result = useMemo(
    () =>
      calculateVaPayment({
        ...inputs,
        fundingFeeRateOverride: null,
      }),
    [inputs],
  );

  return (
    <section
      id="calculator"
      aria-label="VA mortgage calculator with funding fee"
      className="scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="border-b border-slate-200 bg-slate-50 px-5 py-3 sm:px-6">
        <p className="text-sm font-medium text-slate-700">
          VA payment with funding fee — no monthly PMI
        </p>
      </div>

      <div className="grid gap-0 lg:grid-cols-5">
        <div className="space-y-5 p-5 sm:p-6 lg:col-span-3 lg:border-r lg:border-slate-200">
          <RangeSlider
            label="Home price"
            value={inputs.homePrice}
            onChange={(v) => {
              const pct =
                inputs.homePrice > 0 ? inputs.downPayment / inputs.homePrice : 0;
              setInputs((prev) => ({
                ...prev,
                homePrice: v,
                downPayment: Math.round(v * pct),
              }));
            }}
            min={50000}
            max={1500000}
            step={5000}
            format={(v) => formatCurrency(v)}
          />
          <RangeSlider
            label="Down payment (optional)"
            value={inputs.downPayment}
            onChange={(v) => set("downPayment", v)}
            min={0}
            max={inputs.homePrice}
            step={1000}
            format={(v) =>
              `${formatCurrency(v)} (${formatPercent(downPct, 1)})`
            }
            hint="VA allows $0 down; putting money down can lower the funding fee tier"
          />
          <RangeSlider
            label="Interest rate"
            value={inputs.annualRate}
            onChange={(v) => set("annualRate", v)}
            min={0.5}
            max={12}
            step={0.125}
            format={(v) => formatPercent(v)}
          />
          <RangeSlider
            label="Loan term"
            value={inputs.termYears}
            onChange={(v) => set("termYears", v)}
            min={15}
            max={30}
            step={15}
            format={(v) => `${v} years`}
          />

          <h3 className="pt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            VA funding fee
          </h3>
          <fieldset className="space-y-2 rounded-lg border border-slate-200 bg-white p-3 text-sm">
            <legend className="px-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Loan use
            </legend>
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="va-use"
                checked={inputs.firstUse}
                onChange={() => set("firstUse", true)}
                className="text-sky-800 focus:ring-sky-600"
              />
              First use of VA benefit
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="va-use"
                checked={!inputs.firstUse}
                onChange={() => set("firstUse", false)}
                className="text-sky-800 focus:ring-sky-600"
              />
              Subsequent use
            </label>
          </fieldset>
          <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm">
            <input
              type="checkbox"
              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-sky-800 focus:ring-sky-600"
              checked={inputs.disabilityExempt}
              onChange={(e) => set("disabilityExempt", e.target.checked)}
            />
            <span>
              <span className="font-medium text-slate-800">
                Funding-fee exempt (e.g. qualifying disability)
              </span>
              <span className="mt-0.5 block text-xs text-slate-500">
                Confirm exemption with your lender and Certificate of Eligibility
              </span>
            </span>
          </label>
          <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm">
            <input
              type="checkbox"
              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-sky-800 focus:ring-sky-600"
              checked={inputs.financeFundingFee}
              disabled={inputs.disabilityExempt}
              onChange={(e) => set("financeFundingFee", e.target.checked)}
            />
            <span>
              <span className="font-medium text-slate-800">
                Finance funding fee into the loan
              </span>
              <span className="mt-0.5 block text-xs text-slate-500">
                Table rate for this scenario: {formatPercent(tableRate, 2)} of
                the base loan
              </span>
            </span>
          </label>

          <h3 className="pt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Escrow
          </h3>
          <RangeSlider
            label="Property tax rate"
            value={inputs.propertyTaxRate}
            onChange={(v) => set("propertyTaxRate", v)}
            min={0}
            max={4}
            step={0.05}
            format={(v) => formatPercent(v, 2)}
          />
          <RangeSlider
            label="Homeowners insurance (annual)"
            value={inputs.annualHomeInsurance}
            onChange={(v) => set("annualHomeInsurance", v)}
            min={0}
            max={8000}
            step={100}
            format={(v) => formatCurrency(v)}
          />
          <RangeSlider
            label="HOA (monthly)"
            value={inputs.monthlyHoa}
            onChange={(v) => set("monthlyHoa", v)}
            min={0}
            max={1000}
            step={25}
            format={(v) => formatCurrency(v)}
          />
        </div>

        <div className="flex flex-col gap-4 bg-slate-50 p-5 sm:p-6 lg:col-span-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Estimated monthly payment
            </p>
            <p className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900">
              {formatCurrency(result.totalMonthly)}
            </p>
            <p className="mt-1 text-sm text-slate-600">
              P&amp;I + taxes + insurance
              {result.monthlyHoa > 0 ? " + HOA" : ""} — no PMI
            </p>
          </div>

          <dl className="space-y-3 text-sm">
            <ResultRow
              label="Base loan (price − down)"
              value={formatCurrency(result.baseLoanAmount)}
            />
            <ResultRow
              label={`Funding fee (${formatPercent(result.fundingFeeRate, 2)})`}
              value={formatCurrency(result.fundingFee)}
              emphasize
            />
            <ResultRow
              label={
                inputs.financeFundingFee && !inputs.disabilityExempt
                  ? "Financed loan amount"
                  : "Loan amount (fee paid cash / exempt)"
              }
              value={formatCurrency(result.financedLoanAmount)}
            />
            <ResultRow
              label="Principal & interest"
              value={formatCurrency(result.monthlyPI)}
            />
            <ResultRow
              label="Property tax"
              value={formatCurrency(result.monthlyTax)}
            />
            <ResultRow
              label="Insurance"
              value={formatCurrency(result.monthlyInsurance)}
            />
            {result.monthlyHoa > 0 && (
              <ResultRow
                label="HOA"
                value={formatCurrency(result.monthlyHoa)}
              />
            )}
          </dl>

          <p className="mt-auto text-xs leading-relaxed text-slate-500">
            Funding-fee percentages are illustrative defaults from common VA
            purchase tiers. Your COE, disability status, and the current VA
            schedule control the real fee — always confirm on the Loan Estimate.
          </p>
        </div>
      </div>
    </section>
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
