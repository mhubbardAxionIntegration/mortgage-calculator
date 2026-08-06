"use client";

import { useEffect, useMemo, useState, useCallback, type ReactNode } from "react";
import { calculateArmStress } from "@/lib/specializedMortgage";
import {
  formatCurrency,
  formatPercent,
  buildArmAmortizationSchedule,
} from "@/lib/mortgage";
import { DEFAULT_INPUTS } from "@/lib/defaults";
import { RangeSlider } from "./RangeSlider";
import { LocationControls } from "./LocationControls";
import { LocationSnapshot } from "@/components/LocationSnapshot";
import { StateLocationGuide } from "@/components/StateLocationGuide";
import { AmortizationSchedulePanel } from "@/components/AmortizationSchedulePanel";
import { RatesBeside } from "@/components/CalculatorRatesLayout";
import { useCalculatorLocation } from "@/hooks/useCalculatorLocation";

type Props = {
  initialStateSlug?: string;
  initialCounty?: string;
  ratesPanel?: ReactNode;
};

const BASE_DEFAULTS = {
  homePrice: DEFAULT_INPUTS.homePrice,
  downPayment: DEFAULT_INPUTS.downPayment,
  introRate: Math.max(DEFAULT_INPUTS.annualRate - 0.75, 3),
  introYears: 5,
  stressRate: Math.min(DEFAULT_INPUTS.annualRate + 2.25, 12),
  termYears: 30,
  propertyTaxRate: DEFAULT_INPUTS.propertyTaxRate,
  annualHomeInsurance: DEFAULT_INPUTS.annualHomeInsurance,
  monthlyHoa: DEFAULT_INPUTS.monthlyHoa,
};

export function ArmCalculator({
  initialStateSlug = "",
  initialCounty = "",
  ratesPanel,
}: Props) {
  const loc = useCalculatorLocation({ initialStateSlug, initialCounty });
  const [inputs, setInputs] = useState(() => ({
    ...BASE_DEFAULTS,
    ...loc.locationInputs,
    downPayment: Math.round(
      (loc.locationInputs.homePrice ?? BASE_DEFAULTS.homePrice) * 0.2,
    ),
  }));

  useEffect(() => {
    const price = loc.locationInputs.homePrice ?? BASE_DEFAULTS.homePrice;
    setInputs((prev) => ({
      ...prev,
      homePrice: price,
      downPayment: Math.round(price * 0.2),
      propertyTaxRate:
        loc.locationInputs.propertyTaxRate ?? prev.propertyTaxRate,
      annualHomeInsurance:
        loc.locationInputs.annualHomeInsurance ?? prev.annualHomeInsurance,
    }));
  }, [loc.locationKey, loc.locationInputs]);

  const set = useCallback(
    <K extends keyof typeof BASE_DEFAULTS>(key: K, value: number) =>
      setInputs((prev) => ({ ...prev, [key]: value })),
    [],
  );

  const loanAmount = Math.max(0, inputs.homePrice - inputs.downPayment);
  const result = useMemo(
    () =>
      calculateArmStress({
        loanAmount,
        introRate: inputs.introRate,
        introYears: inputs.introYears,
        stressRate: inputs.stressRate,
        termYears: inputs.termYears,
        propertyTaxRate: inputs.propertyTaxRate,
        homePrice: inputs.homePrice,
        annualHomeInsurance: inputs.annualHomeInsurance,
        monthlyHoa: inputs.monthlyHoa,
      }),
    [inputs, loanAmount],
  );

  const armSchedule = useMemo(
    () =>
      buildArmAmortizationSchedule(
        loanAmount,
        inputs.introRate,
        inputs.introYears,
        inputs.stressRate,
        inputs.termYears,
      ),
    [loanAmount, inputs.introRate, inputs.introYears, inputs.stressRate, inputs.termYears],
  );

  const downPct =
    inputs.homePrice > 0 ? (inputs.downPayment / inputs.homePrice) * 100 : 0;

  return (
    <div>
      <LocationControls
        stateSlug={loc.stateSlug}
        countyFips={loc.countyFips}
        onApply={loc.applyLocation}
        hint="ARM product rules are national; location still drives local tax and insurance in your intro vs stress payment."
      />

      <LocationSnapshot
        state={loc.state}
        county={loc.county}
        locationInputs={loc.locationInputs}
        fhaLimit={loc.fhaLimit}
        conformingLimit={loc.conformingLimit}
      />

      <div className="mt-8">
      <RatesBeside ratesPanel={ratesPanel}>
      <section
        id="calculator"
        aria-label="ARM payment stress calculator"
        className="scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
      >
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-3 sm:px-6">
          <p className="text-sm font-medium text-slate-700">
            ARM stress test — intro payment vs a higher post-reset rate
            {loc.county
              ? ` · ${loc.county.name} County escrow defaults`
              : loc.state
                ? ` · ${loc.state.name} escrow defaults`
                : ""}
          </p>
        </div>

        <div className="grid gap-0 lg:grid-cols-5">
          <div className="space-y-5 p-5 sm:p-6 lg:col-span-3 lg:border-r lg:border-slate-200">
            <RangeSlider
              label="Home price"
              value={inputs.homePrice}
              onChange={(v) => {
                const pct =
                  inputs.homePrice > 0
                    ? inputs.downPayment / inputs.homePrice
                    : 0.2;
                setInputs((prev) => ({
                  ...prev,
                  homePrice: v,
                  downPayment: Math.round(v * pct),
                }));
              }}
              min={50000}
              max={2000000}
              step={5000}
              format={(v) => formatCurrency(v)}
            />
            <RangeSlider
              label="Down payment"
              value={inputs.downPayment}
              onChange={(v) => set("downPayment", v)}
              min={0}
              max={inputs.homePrice}
              step={1000}
              format={(v) =>
                `${formatCurrency(v)} (${formatPercent(downPct, 0)})`
              }
            />
            <RangeSlider
              label="Loan term"
              value={inputs.termYears}
              onChange={(v) => set("termYears", v)}
              min={15}
              max={30}
              step={5}
              format={(v) => `${v} years`}
            />

            <h3 className="pt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Introductory period
            </h3>
            <RangeSlider
              label="Intro (start) rate"
              value={inputs.introRate}
              onChange={(v) => set("introRate", v)}
              min={0.5}
              max={12}
              step={0.125}
              format={(v) => formatPercent(v)}
            />
            <RangeSlider
              label="Fixed intro years"
              value={inputs.introYears}
              onChange={(v) => set("introYears", v)}
              min={1}
              max={10}
              step={1}
              format={(v) => `${v} year${v === 1 ? "" : "s"}`}
              hint="Common structures: 5/1, 7/1, 10/1"
            />

            <h3 className="pt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Stress / lifetime-cap scenario
            </h3>
            <RangeSlider
              label="Stress rate after reset"
              value={inputs.stressRate}
              onChange={(v) => set("stressRate", v)}
              min={0.5}
              max={15}
              step={0.125}
              format={(v) => formatPercent(v)}
              hint="Try your lifetime cap or a +2–5% bump from intro"
            />

            <h3 className="pt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Escrow (same under both rates)
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
                Payment increase at stress rate
              </p>
              <p className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900">
                {formatCurrency(Math.max(0, result.monthlyIncreaseAtStress))}
                <span className="text-lg font-semibold text-slate-500">/mo</span>
              </p>
              <p className="mt-1 text-sm text-slate-600">
                After ~{result.introYears} years, if rate moves to{" "}
                {formatPercent(inputs.stressRate)}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-slate-200 bg-white p-3">
                <p className="text-xs font-medium text-slate-500">
                  Intro payment
                </p>
                <p className="mt-1 text-xl font-bold tabular-nums text-slate-900">
                  {formatCurrency(result.introTotalMonthly)}
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  P&amp;I {formatCurrency(result.introMonthlyPI)}
                </p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-3">
                <p className="text-xs font-medium text-amber-800">
                  Stress payment
                </p>
                <p className="mt-1 text-xl font-bold tabular-nums text-amber-950">
                  {formatCurrency(result.stressTotalMonthly)}
                </p>
                <p className="mt-0.5 text-xs text-amber-800/80">
                  P&amp;I {formatCurrency(result.stressMonthlyPI)}
                </p>
              </div>
            </div>

            <dl className="space-y-3 text-sm">
              <div className="flex items-baseline justify-between gap-3 border-b border-slate-200/80 pb-2">
                <dt className="text-slate-600">Loan amount</dt>
                <dd className="font-semibold tabular-nums text-slate-900">
                  {formatCurrency(loanAmount)}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-3 border-b border-slate-200/80 pb-2">
                <dt className="text-slate-600">Rate gap (stress − intro)</dt>
                <dd className="font-semibold tabular-nums text-slate-900">
                  {formatPercent(
                    Math.max(0, inputs.stressRate - inputs.introRate),
                    2,
                  )}
                </dd>
              </div>
            </dl>

            <p className="mt-auto text-xs leading-relaxed text-slate-500">
              Stress assumes the higher rate on today&apos;s balance with the
              full remaining term — a conservative budgeting check. Caps,
              index, and margin are national product terms; escrow follows your
              location defaults.
            </p>
          </div>
        </div>
      </section>
      </RatesBeside>
      </div>

      {loc.state && loc.county && (
        <div className="mt-8">
          <AmortizationSchedulePanel
            loanTypeLabel={`ARM (${inputs.introYears}-yr intro → stress rate)`}
            state={loc.state}
            county={loc.county}
            homePrice={inputs.homePrice}
            downPayment={inputs.downPayment}
            loanAmount={loanAmount}
            annualRate={inputs.introRate}
            termYears={inputs.termYears}
            monthlyPayment={result.introTotalMonthly}
            principalAndInterest={result.introMonthlyPI}
            schedule={armSchedule}
            details={[
              { label: "Intro rate", value: `${formatPercent(inputs.introRate)} for ${inputs.introYears} yr` },
              { label: "Stress rate after reset", value: formatPercent(inputs.stressRate) },
              { label: "Stress payment (P&I)", value: `${formatCurrency(result.stressMonthlyPI)}/mo` },
              { label: "Property tax", value: `${formatCurrency((inputs.homePrice * inputs.propertyTaxRate) / 100 / 12)}/mo` },
              { label: "Home insurance", value: `${formatCurrency(inputs.annualHomeInsurance / 12)}/mo` },
              { label: "HOA dues", value: `${formatCurrency(inputs.monthlyHoa)}/mo` },
            ]}
          />
        </div>
      )}

      <StateLocationGuide
        state={loc.state}
        county={loc.county}
        stateSlug={loc.stateSlug}
        countyFips={loc.countyFips}
      />
    </div>
  );
}
