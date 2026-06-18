import { unstable_cache } from "next/cache";
import { SITE } from "./site";

export interface LiveMortgageRates {
  rate30: number;
  rate15: number;
  asOf30: string;
  asOf15: string;
  fetchedAt: string;
}

/** Official FRED series pages — open in a new tab for the latest published values. */
export const RATE_SOURCE_LINKS = {
  fred30: "https://fred.stlouisfed.org/series/MORTGAGE30US",
  fred15: "https://fred.stlouisfed.org/series/MORTGAGE15US",
  freddieMac: "https://www.freddiemac.com/pmms",
} as const;

const FRED_CSV = {
  rate30: "https://fred.stlouisfed.org/graph/fredgraph.csv?id=MORTGAGE30US",
  rate15: "https://fred.stlouisfed.org/graph/fredgraph.csv?id=MORTGAGE15US",
} as const;

function parseFredCsv(csv: string): { date: string; value: number } | null {
  const lines = csv.trim().split("\n");
  for (let i = lines.length - 1; i >= 1; i--) {
    const line = lines[i]?.trim();
    if (!line) continue;
    const [date, valueStr] = line.split(",");
    const value = Number.parseFloat(valueStr ?? "");
    if (date && Number.isFinite(value)) {
      return { date, value };
    }
  }
  return null;
}

async function fetchLiveMortgageRates(): Promise<LiveMortgageRates | null> {
  try {
    const [res30, res15] = await Promise.all([
      fetch(FRED_CSV.rate30, { next: { revalidate: 86_400 } }),
      fetch(FRED_CSV.rate15, { next: { revalidate: 86_400 } }),
    ]);

    if (!res30.ok || !res15.ok) return null;

    const [csv30, csv15] = await Promise.all([res30.text(), res15.text()]);
    const latest30 = parseFredCsv(csv30);
    const latest15 = parseFredCsv(csv15);

    if (!latest30 || !latest15) return null;

    return {
      rate30: latest30.value,
      rate15: latest15.value,
      asOf30: latest30.date,
      asOf15: latest15.date,
      fetchedAt: new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

const getCachedMortgageRates = unstable_cache(
  fetchLiveMortgageRates,
  ["live-mortgage-rates"],
  { revalidate: 86_400, tags: ["mortgage-rates"] },
);

/** Latest US average mortgage rates from Freddie Mac PMMS via FRED (updated weekly). */
export async function getMortgageRates(): Promise<LiveMortgageRates | null> {
  return getCachedMortgageRates();
}

export function formatRateDate(isoDate: string): string {
  const d = new Date(`${isoDate}T12:00:00Z`);
  if (Number.isNaN(d.getTime())) return isoDate;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

/** Fallback when FRED is unreachable — uses the static default in site config. */
export function getFallbackRates(): LiveMortgageRates {
  return {
    rate30: SITE.defaultRate,
    rate15: Math.max(SITE.defaultRate - 0.65, 0),
    asOf30: SITE.ratesAsOf,
    asOf15: SITE.ratesAsOf,
    fetchedAt: new Date().toISOString(),
  };
}

export async function getMortgageRatesWithFallback(): Promise<{
  rates: LiveMortgageRates;
  isLive: boolean;
}> {
  const live = await getMortgageRates();
  if (live) return { rates: live, isLive: true };
  return { rates: getFallbackRates(), isLive: false };
}
