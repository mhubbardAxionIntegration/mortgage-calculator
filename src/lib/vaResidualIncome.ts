/**
 * VA residual income guideline tables (approximate; based on VA Lender's Handbook
 * regional tables). Used as an educational check — not a credit decision.
 */

export type VaRegion = "northeast" | "midwest" | "south" | "west";

const STATE_REGION: Record<string, VaRegion> = {
  CT: "northeast",
  ME: "northeast",
  MA: "northeast",
  NH: "northeast",
  NJ: "northeast",
  NY: "northeast",
  PA: "northeast",
  RI: "northeast",
  VT: "northeast",
  IL: "midwest",
  IN: "midwest",
  IA: "midwest",
  KS: "midwest",
  MI: "midwest",
  MN: "midwest",
  MO: "midwest",
  NE: "midwest",
  ND: "midwest",
  OH: "midwest",
  SD: "midwest",
  WI: "midwest",
  AL: "south",
  AR: "south",
  DE: "south",
  DC: "south",
  FL: "south",
  GA: "south",
  KY: "south",
  LA: "south",
  MD: "south",
  MS: "south",
  NC: "south",
  OK: "south",
  SC: "south",
  TN: "south",
  TX: "south",
  VA: "south",
  WV: "south",
  AK: "west",
  AZ: "west",
  CA: "west",
  CO: "west",
  HI: "west",
  ID: "west",
  MT: "west",
  NV: "west",
  NM: "west",
  OR: "west",
  UT: "west",
  WA: "west",
  WY: "west",
};

/** Monthly residual income guideline ($) by region and family size (loan ≥ $80k). */
const RESIDUAL_BY_REGION: Record<VaRegion, number[]> = {
  // indices: family size 1..5+, then +75 per additional
  northeast: [450, 755, 909, 1025, 1062],
  midwest: [441, 738, 889, 1003, 1039],
  south: [441, 738, 889, 1003, 1039],
  west: [491, 823, 990, 1117, 1158],
};

export function getVaRegion(stateAbbr?: string | null): VaRegion | null {
  if (!stateAbbr) return null;
  return STATE_REGION[stateAbbr.toUpperCase()] ?? null;
}

export function getVaResidualGuideline(
  stateAbbr: string | null | undefined,
  familySize: number,
): number | null {
  const region = getVaRegion(stateAbbr);
  if (!region) return null;
  const size = Math.max(1, Math.round(familySize));
  const table = RESIDUAL_BY_REGION[region];
  if (size <= 5) return table[size - 1];
  return table[4] + (size - 5) * 75;
}

export function vaRegionLabel(region: VaRegion): string {
  switch (region) {
    case "northeast":
      return "Northeast";
    case "midwest":
      return "Midwest";
    case "south":
      return "South";
    case "west":
      return "West";
  }
}
