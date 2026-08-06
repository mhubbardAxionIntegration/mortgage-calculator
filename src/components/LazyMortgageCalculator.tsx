"use client";

import dynamic from "next/dynamic";
import { CalculatorSkeleton } from "@/components/CalculatorSkeleton";
import type { MortgageInputs } from "@/lib/mortgage";

/**
 * Client-boundary dynamic import so the home page (RSC) can defer the
 * calculator without using `ssr: false` on a Server Component.
 */
export const LazyMortgageCalculator = dynamic(
  () =>
    import("@/components/LocatedMortgageCalculator").then(
      (m) => m.LocatedMortgageCalculator,
    ),
  { loading: () => <CalculatorSkeleton />, ssr: false },
);

export type LazyMortgageProps = {
  loanDefaults?: Partial<MortgageInputs>;
};
