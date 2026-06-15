import { formatCurrency } from "@/lib/mortgage";

export interface DonutSegment {
  label: string;
  value: number;
  color: string;
}

/** Accessible SVG donut chart for the monthly payment breakdown. */
export function PaymentDonut({
  segments,
  total,
}: {
  segments: DonutSegment[];
  total: number;
}) {
  const visible = segments.filter((s) => s.value > 0);
  const sum = visible.reduce((acc, s) => acc + s.value, 0) || 1;

  const radius = 60;
  const stroke = 24;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-6">
      <div className="relative shrink-0">
        <svg
          width="160"
          height="160"
          viewBox="0 0 160 160"
          role="img"
          aria-label={`Monthly payment of ${formatCurrency(total)} broken down by category`}
        >
          <circle
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke="#e2e8f0"
            strokeWidth={stroke}
          />
          {visible.map((s) => {
            const fraction = s.value / sum;
            const dash = fraction * circumference;
            const seg = (
              <circle
                key={s.label}
                cx="80"
                cy="80"
                r={radius}
                fill="none"
                stroke={s.color}
                strokeWidth={stroke}
                strokeDasharray={`${dash} ${circumference - dash}`}
                strokeDashoffset={-offset}
                transform="rotate(-90 80 80)"
              />
            );
            offset += dash;
            return seg;
          })}
        </svg>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-xs font-medium text-slate-500">Monthly</span>
          <span className="text-lg font-bold text-slate-900">
            {formatCurrency(total)}
          </span>
        </div>
      </div>

      <ul className="grid w-full grid-cols-1 gap-x-6 gap-y-1.5 text-sm sm:grid-cols-1">
        {visible.map((s) => (
          <li key={s.label} className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-2 text-slate-600">
              <span
                aria-hidden
                className="inline-block h-3 w-3 rounded-sm"
                style={{ backgroundColor: s.color }}
              />
              {s.label}
            </span>
            <span className="font-semibold text-slate-900">
              {formatCurrency(s.value)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
