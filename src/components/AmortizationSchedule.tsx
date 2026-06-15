import { formatCurrency, type AmortizationYear } from "@/lib/mortgage";

export function AmortizationSchedule({
  schedule,
}: {
  schedule: AmortizationYear[];
}) {
  if (schedule.length === 0) return null;

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full border-collapse text-sm">
        <caption className="sr-only">
          Yearly amortization schedule showing principal paid, interest paid,
          and remaining balance for each year of the loan.
        </caption>
        <thead>
          <tr className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
            <th scope="col" className="px-4 py-3 font-semibold">Year</th>
            <th scope="col" className="px-4 py-3 text-right font-semibold">Principal</th>
            <th scope="col" className="px-4 py-3 text-right font-semibold">Interest</th>
            <th scope="col" className="px-4 py-3 text-right font-semibold">Balance</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {schedule.map((row) => (
            <tr key={row.year} className="text-slate-700 odd:bg-white even:bg-slate-50/50">
              <th scope="row" className="px-4 py-2.5 text-left font-medium text-slate-900">
                {row.year}
              </th>
              <td className="px-4 py-2.5 text-right tabular-nums">
                {formatCurrency(row.principalPaid)}
              </td>
              <td className="px-4 py-2.5 text-right tabular-nums">
                {formatCurrency(row.interestPaid)}
              </td>
              <td className="px-4 py-2.5 text-right tabular-nums font-medium">
                {formatCurrency(row.endingBalance)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
