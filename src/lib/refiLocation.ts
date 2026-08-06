/**
 * Location-aware refinance helpers: estimated closing-cost % by state and
 * tangible-net-benefit / anti-churning disclosure callouts (educational only).
 */

/** Approximate total refinance closing costs as % of loan (title, recording, lender). */
const CLOSING_COST_PCT: Record<string, number> = {
  // Higher transfer/recording/title cost states
  NY: 2.4,
  CA: 2.1,
  FL: 2.0,
  TX: 1.9,
  NJ: 2.2,
  PA: 2.0,
  IL: 2.0,
  MA: 2.0,
  MD: 2.0,
  WA: 1.9,
  OR: 1.8,
  CO: 1.8,
  GA: 1.8,
  NC: 1.7,
  VA: 1.7,
  OH: 1.7,
  MI: 1.7,
  AZ: 1.7,
  NV: 1.7,
  // Typical mid-range
  DEFAULT: 1.6,
};

/** States with notable refinancing net-benefit / anti-churning disclosure regimes. */
const NET_BENEFIT_NOTES: Record<string, string> = {
  AK: "Alaska has refinancing disclosure and tangible-benefit style expectations — confirm your lender’s state-specific worksheet.",
  AR: "Arkansas imposes net-benefit / anti-churning style restrictions on some refinances; ask your lender how the benefit test applies.",
  CA: "California has refinancing disclosure rules and anti-churning protections — ensure the refinance shows a clear borrower benefit.",
  FL: "Florida requires a tangible net benefit analysis for many residential refinances before closing.",
  MA: "Massachusetts has strict refinancing / anti-flipping style consumer protections — verify waiting periods and benefit tests with your lender.",
  MN: "Minnesota has mortgagor-protection / net-benefit considerations on certain refinances.",
  NY: "New York has strong disclosure and high closing-cost market factors; confirm transfer tax and recording fees for your county.",
  SC: "South Carolina has mortgage refinance disclosure / net-benefit expectations for many loans.",
};

export function estimateRefiClosingCosts(
  loanAmount: number,
  stateAbbr?: string | null,
): number {
  const pct =
    (stateAbbr && CLOSING_COST_PCT[stateAbbr.toUpperCase()]) ||
    CLOSING_COST_PCT.DEFAULT;
  return Math.round(Math.max(0, loanAmount) * (pct / 100));
}

export function getRefiRegulationNote(stateAbbr?: string | null): string | null {
  if (!stateAbbr) return null;
  return NET_BENEFIT_NOTES[stateAbbr.toUpperCase()] ?? null;
}

export function getRefiClosingCostPercent(stateAbbr?: string | null): number {
  return (
    (stateAbbr && CLOSING_COST_PCT[stateAbbr.toUpperCase()]) ||
    CLOSING_COST_PCT.DEFAULT
  );
}
