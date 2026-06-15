import Link from "next/link";
import { SITE, COMPANY } from "@/lib/site";
import { LOAN_TYPES } from "@/lib/loanTypes";
import { STATES } from "@/lib/states";
import { CookiePreferencesButton } from "@/components/consent/CookiePreferencesButton";

export function Footer() {
  const featuredStates = STATES.filter((s) =>
    ["california", "texas", "florida", "georgia", "new-york", "north-carolina"].includes(
      s.slug,
    ),
  );

  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-lg font-bold text-slate-900">
            <span
              aria-hidden
              className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-600 text-white"
            >
              $
            </span>
            {SITE.shortName}
          </div>
          <p className="mt-3 text-sm text-slate-600">
            Free mortgage and home-affordability calculators with taxes,
            insurance, PMI, and full amortization schedules.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-900">Calculators</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link href="/mortgage-calculator" className="hover:text-emerald-700">
                Mortgage Calculator
              </Link>
            </li>
            {LOAN_TYPES.map((t) => (
              <li key={t.slug}>
                <Link href={`/calculators/${t.slug}`} className="hover:text-emerald-700">
                  {t.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-900">By state</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {featuredStates.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/mortgage-calculator/${s.slug}`}
                  className="hover:text-emerald-700"
                >
                  {s.name} Mortgage Calculator
                </Link>
              </li>
            ))}
            <li>
              <Link href="/mortgage-calculator#states" className="font-medium hover:text-emerald-700">
                All 50 states &rarr;
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-900">Company</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link href="/blog" className="hover:text-emerald-700">Blog</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-emerald-700">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-emerald-700">Contact</Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-emerald-700">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-emerald-700">Terms of Use</Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:text-emerald-700">Disclaimer</Link>
            </li>
            <li>
              <CookiePreferencesButton className="text-left hover:text-emerald-700" />
            </li>
            <li className="pt-1 text-xs text-slate-400">Rates as of {SITE.ratesAsOf}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 px-4 py-6">
        <p className="mx-auto max-w-6xl text-xs leading-relaxed text-slate-500">
          <strong>Disclaimer:</strong> {SITE.name} provides estimates for
          educational purposes only and is not a lender. Calculations are
          approximate and do not constitute financial advice or a loan offer.
          Your actual rate, payment, taxes, and insurance will vary. Consult a
          licensed mortgage professional before making decisions. &copy;{" "}
          {SITE.year} {COMPANY.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
