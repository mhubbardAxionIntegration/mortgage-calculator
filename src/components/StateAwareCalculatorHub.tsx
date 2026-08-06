"use client";

import { useMemo, useState, type ReactNode } from "react";
import {
  MortgageCalculator,
  type CalculatorScheduleSummary,
} from "@/components/MortgageCalculator";
import { LocationControls } from "@/components/LocationControls";
import { LocationSnapshot } from "@/components/LocationSnapshot";
import { StateLocationGuide } from "@/components/StateLocationGuide";
import { AmortizationSchedulePanel } from "@/components/AmortizationSchedulePanel";
import { RatesBeside } from "@/components/CalculatorRatesLayout";
import { RateCta } from "@/components/RateCta";
import { DEFAULT_INPUTS } from "@/lib/defaults";
import { useCalculatorLocation } from "@/hooks/useCalculatorLocation";

type Props = {
  /** Initial state slug from the server (?state=). */
  initialStateSlug?: string;
  /** Initial county FIPS or slug from the server (?county=). */
  initialCounty?: string;
  /** Live 30-yr rate when available. */
  annualRate?: number;
  /**
   * Server-rendered rates panel placed left of the calculator card
   * (top-aligned, matching calculator height).
   */
  ratesPanel?: ReactNode;
};

export function StateAwareCalculatorHub({
  initialStateSlug = "",
  initialCounty = "",
  annualRate,
  ratesPanel,
}: Props) {
  const {
    stateSlug,
    countyFips,
    state,
    county,
    applyLocation,
    locationInputs,
    locationKey,
    fhaLimit,
    conformingLimit,
  } = useCalculatorLocation({
    initialStateSlug,
    initialCounty,
  });

  const [scheduleSummary, setScheduleSummary] =
    useState<CalculatorScheduleSummary | null>(null);

  const calculatorInputs = useMemo(() => {
    const rate = annualRate ?? DEFAULT_INPUTS.annualRate;
    return { ...locationInputs, annualRate: rate };
  }, [locationInputs, annualRate]);

  const displayPrice =
    locationInputs.homePrice ?? state?.medianHomePrice ?? DEFAULT_INPUTS.homePrice;

  return (
    <div>
      <LocationControls
        stateSlug={stateSlug}
        countyFips={countyFips}
        onApply={applyLocation}
        hint="Choose a state and county to load local tax and insurance defaults. County also drives FHA and conforming loan-limit context used on specialized calculators."
      />

      <LocationSnapshot
        state={state}
        county={county}
        locationInputs={locationInputs}
        fhaLimit={fhaLimit}
        conformingLimit={conformingLimit}
      />

      <div className="mt-8">
        <RatesBeside ratesPanel={ratesPanel}>
          <MortgageCalculator
            key={locationKey}
            initialInputs={calculatorInputs}
            onSummaryChange={setScheduleSummary}
          />
        </RatesBeside>
      </div>

      {state && county && scheduleSummary && (
        <div className="mt-8">
          <AmortizationSchedulePanel
            loanTypeLabel={scheduleSummary.loanTypeLabel}
            state={state}
            county={county}
            homePrice={scheduleSummary.homePrice}
            downPayment={scheduleSummary.downPayment}
            loanAmount={scheduleSummary.loanAmount}
            annualRate={scheduleSummary.annualRate}
            termYears={scheduleSummary.termYears}
            monthlyPayment={scheduleSummary.monthlyPayment}
            principalAndInterest={scheduleSummary.principalAndInterest}
            details={scheduleSummary.details}
          />
        </div>
      )}

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

      <StateLocationGuide
        state={state}
        county={county}
        stateSlug={stateSlug}
        countyFips={countyFips}
      />
    </div>
  );
}
