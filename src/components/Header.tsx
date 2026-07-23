import Link from "next/link";
import { SITE } from "@/lib/site";
import { LOAN_TYPES } from "@/lib/loanTypes";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-slate-900"
        >
          <span
            aria-hidden
            className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-600 text-white"
          >
            $
          </span>
          <span>{SITE.shortName}</span>
        </Link>

        <ul className="hidden items-center gap-1 text-sm font-medium text-slate-600 md:flex">
          <li>
            <Link
              href="/mortgage-calculator"
              className="rounded-md px-3 py-2 hover:bg-slate-100 hover:text-slate-900"
            >
              Mortgage Calculator
            </Link>
          </li>
          {LOAN_TYPES.map((t) => (
            <li key={t.slug}>
              <Link
                href={`/calculators/${t.slug}`}
                className="rounded-md px-3 py-2 hover:bg-slate-100 hover:text-slate-900"
              >
                {t.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/blog"
              className="rounded-md px-3 py-2 hover:bg-slate-100 hover:text-slate-900"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/how-we-calculate"
              className="rounded-md px-3 py-2 hover:bg-slate-100 hover:text-slate-900"
            >
              Methodology
            </Link>
          </li>
        </ul>

        <Link
          href="/calculators/home-affordability-calculator"
          className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
        >
          What can I afford?
        </Link>
      </nav>
    </header>
  );
}
