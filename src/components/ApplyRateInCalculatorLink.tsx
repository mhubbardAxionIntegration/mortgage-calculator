"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  dispatchApplyRate,
  isSameCalculatorPage,
  scrollToCalculator,
  syncRateInUrl,
} from "@/lib/calculatorEvents";

export function ApplyRateInCalculatorLink({
  calculatorHref,
  rate,
}: {
  calculatorHref: string;
  rate: number;
}) {
  const pathname = usePathname();
  const base = calculatorHref.split("?")[0].split("#")[0] || "/";
  const href = `${base}?rate=${rate.toFixed(2)}#calculator`;
  const label = `Use ${rate.toFixed(2)}% in calculator`;
  const className =
    "text-sm font-semibold text-emerald-700 underline-offset-2 hover:underline";

  const applyOnSamePage = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatchApplyRate(rate);
    syncRateInUrl(rate);
    scrollToCalculator();
  };

  if (isSameCalculatorPage(pathname, calculatorHref)) {
    return (
      <button type="button" onClick={applyOnSamePage} className={className}>
        {label}
      </button>
    );
  }

  return (
    <Link href={href} className={className} scroll>
      {label}
    </Link>
  );
}
