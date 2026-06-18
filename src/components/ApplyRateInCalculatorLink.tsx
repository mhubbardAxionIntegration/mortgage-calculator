"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function ApplyRateInCalculatorLink({
  calculatorHref,
  rate,
}: {
  calculatorHref: string;
  rate: number;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const base = calculatorHref.split("?")[0].split("#")[0] || "/";
  const href = `${base}?rate=${rate}#calculator`;
  const label = `Use ${rate.toFixed(2)}% in calculator`;
  const className =
    "text-sm font-semibold text-emerald-700 underline-offset-2 hover:underline";

  const applyRate = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(href, { scroll: true });
  };

  if (pathname === base) {
    return (
      <a href={href} onClick={applyRate} className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}
