"use client";

import dynamic from "next/dynamic";
import { CalculatorSkeleton } from "@/components/CalculatorSkeleton";

/**
 * Client-boundary dynamic import so the home page (RSC) can defer the
 * calculator without using `ssr: false` on a Server Component.
 */
export const LazyMortgageCalculator = dynamic(
  () =>
    import("@/components/MortgageCalculator").then((m) => m.MortgageCalculator),
  { loading: () => <CalculatorSkeleton />, ssr: false },
);
