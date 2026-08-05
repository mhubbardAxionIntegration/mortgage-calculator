"use client";

import { useMemo, useState, useCallback } from "react";
import { calculateFhaPayment } from "@/lib/specializedMortgage";
import { formatCurrency, formatPercent } from "@/lib/mortgage";
import { DEFAULT_INPUTS } from "@/lib/defaults";
import { RangeSlider } from "./RangeSlider";

const DEFAULTS = {
  homePrice: DEFAULT_INPUTS.homePrice,
  downPayment: Math.round(DEFAULT_INPUTS.homePrice * 0.035),
  annualRate: DEFAULT_INPUTS.annualRate,
  termYears: 30,
  upfrontMipRate: 1.75,
  annualMipRate: 0.55,
  financeUpfrontMip: true,
  propertyTaxRate: DEFAULT_INPUTS.propertyTaxRate,
  annualHomeInsurance: DEFAULT_INPUTS.annualHomeInsurance,
  monthlyHoa: DEFAULT_INPUTS.monthlyHoa,
};

export function FhaCalculator() {
  const [inputs, setInputs] = useState(DEFAULTS);
  const set = useCallback(
    <K extends keyof typeof DEFAULTS>(key: K, value: (typeof DEFAULTS)[K]) =>
      setInputs((prev) => ({ ...prev, [key]: value })),
    [],
  );

  const result = useMemo(() => calculateFhaPayment(inputs), [inputs]);
  const maxDown = Math.min(inputs.homePrice * 0.2, inputs.homePrice);

  return (
    <section
      id="calculator"
      aria-label="FHA mortgage calculator with MIP"
      className="scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="border-b border-slate-200 bg-slate-50 px-5 py-3 sm:px-6">
        <p className="text-sm font-medium text-slate-700">
          FHA payment with upfront MIP + monthly annual MIP
        </p>
      </div>

      <div className="grid gap-0 lg:grid-cols-5">
        <div className="space-y-5 p-5 sm:p-6 lg:col-span-3 lg:border-r lg:border-slate-200">
          <RangeSlider
            label="Home price"
            value={inputs.homePrice}
            onChange={(v) => {
              const nextPrice = v;
              const pct =
                inputs.homePrice > 0 ? inputs.downPayment / inputs.homePrice : 0.035;
              setInputs((prev) => ({
                ...prev,
                homePrice: nextPrice,
                downPayment: Math.round(nextPrice * pct),
              }));
            }}
            min={50000}
            max={1500000}
            step={5000}
            format={(v) => formatCurrency(v)}
          />
          <RangeSlider
            label="Down payment"
            value={inputs.downPayment}
            onChange={(v) => set("downPayment", v)}
            min={0}
            max={maxDown}
            step={500}
            format={(v) =>
              `${formatCurrency(v)} (${formatPercent(result.downPaymentPercent, 1)})`
            }
            hint={
              result.downPaymentPercent < 3.5
                ? "FHA typically requires at least 3.5% with qualifying credit"
                : result.mipLikelyLifetime
                  ? "Under 10% down — annual MIP often lasts the life of the loan"
                  : "10%+ down — annual MIP may drop off after ~11 years (rules vary)"
            }
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
            FHA mortgage insurance
          </h3>
          <RangeSlider
            label="Upfront MIP rate"
            value={inputs.upfrontMipRate}
            onChange={(v) => set("upfrontMipRate", v)}
            min={0}
            max={3}
            step={0.05}
            format={(v) => formatPercent(v, 2)}
            hint={`≈ ${formatCurrency(result.upfrontMip)} on this loan`}
          />
          <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm">
            <input
              type="checkbox"
              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
              checked={inputs.financeUpfrontMip}
              onChange={(e) => set("financeUpfrontMip", e.target.checked)}
            />
            <span>
              <span className="font-medium text-slate-800">Finance upfront MIP into the loan</span>
              <span className="mt-0.5 block text-xs text-slate-500">
                Most FHA borrowers roll UFMIP into the balance instead of paying cash at closing
              </span>
            </span>
          </label>
          <RangeSlider
            label="Annual MIP rate"
            value={inputs.annualMipRate}
            onChange={(v) => set("annualMipRate", v)}
            min={0}
            max={1.5}
            step={0.05}
            format={(v) => formatPercent(v, 2)}
            hint={`${formatCurrency(result.monthlyAnnualMip)}/mo from base loan`}
          />

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
              Includes P&amp;I, annual MIP, taxes, insurance
              {result.monthlyHoa > 0 ? ", HOA" : ""}
            </p>
          </div>

          <dl className="space-y-3 text-sm">
            <ResultRow label="Base loan (price − down)" value={formatCurrency(result.baseLoanAmount)} />
            <ResultRow label="Upfront MIP" value={formatCurrency(result.upfrontMip)} />
            <ResultRow
              label={inputs.financeUpfrontMip ? "Financed loan amount" : "Loan amount (UFMIP paid cash)"}
              value={formatCurrency(result.financedLoanAmount)}
            />
            <ResultRow label="Principal & interest" value={formatCurrency(result.monthlyPI)} />
            <ResultRow
              label="Monthly annual MIP"
              value={formatCurrency(result.monthlyAnnualMip)}
              emphasize
            />
            <ResultRow label="Property tax" value={formatCurrency(result.monthlyTax)} />
            <ResultRow label="Insurance" value={formatCurrency(result.monthlyInsurance)} />
            {result.monthlyHoa > 0 && (
              <ResultRow label="HOA" value={formatCurrency(result.monthlyHoa)} />
            )}
          </dl>

          <p className="mt-auto text-xs leading-relaxed text-slate-500">
            MIP rates are illustrative defaults — HUD tables and your FICO/LTV can change
            annual MIP. Unlike conventional PMI, FHA annual MIP often cannot be canceled
            early when you start under 10% down.
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
            ? "font-semibold text-emerald-700"
            : "font-semibold tabular-nums text-slate-900"
        }
      >
        {value}
      </dd>
    </div>
  );
}
