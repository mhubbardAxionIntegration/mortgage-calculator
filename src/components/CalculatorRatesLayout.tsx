import type { ReactNode } from "react";

type LayoutProps = {
  ratesPanel: ReactNode;
  children: ReactNode;
  className?: string;
};

/**
 * Two-column layout: rates (left) stretch to the same height as the calculator (right).
 * Safe to import from Client Components when `ratesPanel` is passed from a Server parent.
 */
export function CalculatorRatesLayout({
  ratesPanel,
  children,
  className = "",
}: LayoutProps) {
  return (
    <div
      className={`grid gap-6 lg:grid-cols-12 lg:items-stretch ${className}`.trim()}
    >
      <aside className="flex lg:col-span-4">
        <div className="flex w-full flex-1 flex-col [&>*]:h-full [&>*]:min-h-0 [&>*]:flex-1">
          {ratesPanel}
        </div>
      </aside>
      <div className="min-w-0 lg:col-span-8">{children}</div>
    </div>
  );
}

/** Conditionally wraps children in CalculatorRatesLayout when a rates panel is provided. */
export function RatesBeside({
  ratesPanel,
  children,
}: {
  ratesPanel?: ReactNode;
  children: ReactNode;
}) {
  if (!ratesPanel) return <>{children}</>;
  return (
    <CalculatorRatesLayout ratesPanel={ratesPanel}>
      {children}
    </CalculatorRatesLayout>
  );
}
