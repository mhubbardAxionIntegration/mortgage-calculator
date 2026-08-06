"use client";

import { useMemo } from "react";
import { MortgageCalculator } from "@/components/MortgageCalculator";
import { LocationControls } from "@/components/LocationControls";
import { useCalculatorLocation } from "@/hooks/useCalculatorLocation";
import type { MortgageInputs } from "@/lib/mortgage";

type Props = {
  initialStateSlug?: string;
  initialCounty?: string;
  loanDefaults?: Partial<MortgageInputs>;
  /** When true, lock to affordability mode (affordability page). */
  affordability?: boolean;
};

/** Location-aware wrapper for conventional / affordability MortgageCalculator pages. */
export function LocatedMortgageCalculator({
  initialStateSlug = "",
  initialCounty = "",
  loanDefaults,
  affordability = false,
}: Props) {
  const loc = useCalculatorLocation({ initialStateSlug, initialCounty });

  const initialInputs = useMemo(
    () => ({
      ...loanDefaults,
      ...loc.locationInputs,
    }),
    [loanDefaults, loc.locationInputs],
  );

  return (
    <div className="space-y-4">
      <LocationControls
        stateSlug={loc.stateSlug}
        countyFips={loc.countyFips}
        onStateChange={loc.onStateChange}
        onCountyChange={loc.onCountyChange}
        hint={
          affordability
            ? "Affordability depends heavily on local taxes and insurance — pick your county for more realistic housing costs."
            : "Choose a state and county for local tax and insurance defaults."
        }
      />
      <MortgageCalculator
        key={loc.locationKey}
        initialInputs={initialInputs}
        initialMode={affordability ? "affordability" : "payment"}
        lockMode={affordability}
      />
    </div>
  );
}
