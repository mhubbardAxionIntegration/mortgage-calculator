import { Suspense, type ReactNode } from "react";
import { CurrentMortgageRates } from "@/components/CurrentMortgageRates";
import { CalculatorRatesLayout } from "@/components/CalculatorRatesLayout";

type RatesPanelProps = {
  calculatorHref?: string;
};

/** Server rates sidebar with loading placeholder; fills the stretched column. */
export function RatesPanel({ calculatorHref = "/" }: RatesPanelProps) {
  return (
    <Suspense
      fallback={
        <div
          className="h-full min-h-[28rem] animate-pulse rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 to-white"
          aria-hidden
        />
      }
    >
      <CurrentMortgageRates
        calculatorHref={calculatorHref}
        className="h-full w-full"
      />
    </Suspense>
  );
}

type Props = {
  children: ReactNode;
  calculatorHref?: string;
};

/**
 * Places Current US Mortgage Rates on the left of the calculator on large screens,
 * top-aligned and matching the calculator column height.
 */
export function CalculatorWithRates({
  children,
  calculatorHref = "/",
}: Props) {
  return (
    <CalculatorRatesLayout ratesPanel={<RatesPanel calculatorHref={calculatorHref} />}>
      {children}
    </CalculatorRatesLayout>
  );
}

export { CalculatorRatesLayout } from "@/components/CalculatorRatesLayout";
