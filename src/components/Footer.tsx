import Image from "next/image";
import Link from "next/link";
import { SITE, COMPANY } from "@/lib/site";
import { RATE_SOURCE_LINKS } from "@/lib/mortgageRates";
import { LOAN_TYPES } from "@/lib/loanTypes";
import { CookiePreferencesButton } from "@/components/consent/CookiePreferencesButton";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5 text-lg font-bold text-slate-900">
            <Image
              src="/images/heroes/home.webp"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg object-cover ring-1 ring-slate-200"
            />
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
              <Link href="/#calculator" className="hover:text-sky-800">
                Payment calculator
              </Link>
            </li>
            {LOAN_TYPES.map((t) => (
              <li key={t.slug}>
                <Link href={`/calculators/${t.slug}`} className="hover:text-sky-800">
                  {t.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-900">Company</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link href="/blog" className="hover:text-sky-800">Smart Buying</Link>
            </li>
            <li>
              <Link href="/blog/category/pitfalls" className="hover:text-sky-800">
                Common pitfalls
              </Link>
            </li>
            <li>
              <Link
                href="/questions-nobody-thinks-to-ask"
                className="hover:text-sky-800"
              >
                Questions to ask
              </Link>
            </li>
            <li>
              <Link href="/how-we-calculate" className="hover:text-sky-800">
                How we calculate
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-sky-800">FAQ</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-sky-800">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-sky-800">Contact</Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-sky-800">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-sky-800">Terms of Use</Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:text-sky-800">Disclaimer</Link>
            </li>
            <li>
              <CookiePreferencesButton className="text-left hover:text-sky-800" />
            </li>
            <li>
              <a
                href={RATE_SOURCE_LINKS.fred30}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-800"
              >
                Live US mortgage rates (FRED)
              </a>
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
