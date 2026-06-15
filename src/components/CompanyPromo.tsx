import { COMPANY, MONETIZATION } from "@/lib/site";

/**
 * Cross-promotion for the operating company (Axion Integration Services).
 * Useful for funneling high-intent home-buyer traffic to your own services.
 * Toggle with MONETIZATION.showCompanyPromo.
 */
export function CompanyPromo({ className = "" }: { className?: string }) {
  if (!MONETIZATION.showCompanyPromo) return null;

  return (
    <section
      aria-label={`${COMPANY.shortName} promotion`}
      className={`mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-slate-900 p-6 text-white ${className}`}
    >
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
            From {COMPANY.shortName}
          </p>
          <h2 className="mt-1 text-lg font-bold">{COMPANY.promoHeadline}</h2>
          <p className="mt-1 max-w-md text-sm text-slate-300">
            {COMPANY.promoText}
          </p>
        </div>
        <a
          href={COMPANY.website}
          target="_blank"
          rel="noopener"
          className="shrink-0 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-500"
        >
          Explore our services
        </a>
      </div>
    </section>
  );
}
