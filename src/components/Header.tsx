import Image from "next/image";
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
          className="flex min-w-0 items-center gap-2.5 text-base font-bold text-slate-900 sm:text-lg"
        >
          <Image
            src="/images/heroes/home.png"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 shrink-0 rounded-lg object-cover shadow-sm ring-1 ring-slate-200"
            priority
          />
          <span className="truncate">{SITE.shortName}</span>
        </Link>

        <ul className="hidden items-center gap-1 text-sm font-medium text-slate-600 md:flex">
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
              Smart Buying
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
          <li>
            <Link
              href="/faq"
              className="rounded-md px-3 py-2 hover:bg-slate-100 hover:text-slate-900"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="rounded-md px-3 py-2 hover:bg-slate-100 hover:text-slate-900"
            >
              About
            </Link>
          </li>
        </ul>

        <Link
          href="/calculators/home-affordability-calculator"
          className="shrink-0 rounded-lg bg-sky-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800"
        >
          What can I afford?
        </Link>
      </nav>
    </header>
  );
}
