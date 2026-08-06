import { Suspense, type ReactNode } from "react";
import { CurrentMortgageRates } from "@/components/CurrentMortgageRates";

type Props = {
  children: ReactNode;
  calculatorHref?: string;
};

/**
 * Places Current US Mortgage Rates on the left of the calculator on large screens.
 */
export function CalculatorWithRates({
  children,
  calculatorHref = "/",
}: Props) {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
      <aside className="lg:col-span-4">
        <div className="lg:sticky lg:top-24">
          <Suspense
            fallback={
              <div className="min-h-[12rem] animate-pulse rounded-2xl border border-slate-200 bg-slate-50" />
            }
          >
            <CurrentMortgageRates
              calculatorHref={calculatorHref}
              className="w-full"
            />
          </Suspense>
        </div>
      </aside>
      <div className="min-w-0 lg:col-span-8">{children}</div>
    </div>
  );
}
