import Link from "next/link";
import {
  calculatePayment,
  formatCurrency,
  formatPercent,
  type MortgageInputs,
} from "@/lib/mortgage";
import { DEFAULT_INPUTS } from "@/lib/defaults";

interface Props {
  annualRate: number;
}

/** Server-rendered example payment so crawlers see real numbers without JavaScript. */
export function CalculatorSeoPreview({ annualRate }: Props) {
  const inputs: MortgageInputs = {
    ...DEFAULT_INPUTS,
    annualRate,
  };
  const p = calculatePayment(inputs);
  const downPct = formatPercent(p.downPaymentPercent, 0);

  return (
    <section
      aria-label="Example mortgage payment breakdown"
      className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6"
    >
      <h2 className="text-lg font-bold text-slate-900">
        Example: mortgage calculator with taxes and insurance
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        On a {formatCurrency(inputs.homePrice)} home with {downPct} down (
        {formatCurrency(inputs.downPayment)}), a {formatPercent(inputs.annualRate)}{" "}
        30-year fixed rate, {formatPercent(inputs.propertyTaxRate)} property taxes,
        and {formatCurrency(inputs.annualHomeInsurance)}/yr insurance, your
        estimated full monthly payment (PITI) is about{" "}
        <strong className="text-slate-900">{formatCurrency(p.totalMonthly)}</strong>{" "}
        on a {formatCurrency(p.loanAmount)} loan.
      </p>
      <ul className="mt-4 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
        <li>
          <strong className="text-slate-900">Principal &amp; interest:</strong>{" "}
          {formatCurrency(p.principalAndInterest)}/mo
        </li>
        <li>
          <strong className="text-slate-900">Property tax:</strong>{" "}
          {formatCurrency(p.monthlyTax)}/mo
        </li>
        <li>
          <strong className="text-slate-900">Home insurance:</strong>{" "}
          {formatCurrency(p.monthlyInsurance)}/mo
        </li>
        <li>
          <strong className="text-slate-900">PMI:</strong>{" "}
          {p.monthlyPmi > 0 ? `${formatCurrency(p.monthlyPmi)}/mo` : "None at 20%+ down"}
        </li>
      </ul>
      <p className="mt-4 text-sm text-slate-600">
        Use the interactive calculator below to change the home price, down payment,
        rate, and term. Browse{" "}
        <Link href="/mortgage-calculator#states" className="font-medium text-emerald-700 underline">
          calculators by state
        </Link>{" "}
        or read our{" "}
        <Link href="/blog/how-much-house-can-i-afford" className="font-medium text-emerald-700 underline">
          affordability guide
        </Link>
        .
      </p>
    </section>
  );
}
