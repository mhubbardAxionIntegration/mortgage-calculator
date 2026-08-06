/**
 * Height-stable calculator placeholder — avoids CLS while Suspense / dynamic import resolve.
 */
export function CalculatorSkeleton({ label = "Loading calculator…" }: { label?: string }) {
  return (
    <section
      id="calculator"
      aria-label="Mortgage calculator"
      aria-busy="true"
      className="scroll-mt-24 min-h-[36rem] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:min-h-[40rem]"
    >
      <div className="grid gap-0 lg:grid-cols-5">
        <div className="space-y-5 p-5 sm:p-6 lg:col-span-3 lg:border-r lg:border-slate-200">
          <div className="h-4 w-32 animate-pulse rounded bg-slate-100" />
          <div className="h-10 w-full animate-pulse rounded-lg bg-slate-100" />
          <div className="h-10 w-full animate-pulse rounded-lg bg-slate-100" />
          <div className="h-10 w-full animate-pulse rounded-lg bg-slate-100" />
          <div className="h-10 w-3/4 animate-pulse rounded-lg bg-slate-100" />
        </div>
        <div className="flex flex-col gap-4 bg-slate-50 p-5 sm:p-6 lg:col-span-2">
          <div className="h-3 w-24 animate-pulse rounded bg-slate-200" />
          <div className="h-10 w-40 animate-pulse rounded bg-slate-200" />
          <p className="mt-auto text-sm text-slate-500">{label}</p>
        </div>
      </div>
    </section>
  );
}
