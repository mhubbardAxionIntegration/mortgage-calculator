/**
 * County-level FHA and FHFA conforming loan limits (CY data from HUD CHUMS).
 */
import fhaJson from "../../public/data/fha-loan-limits.json";
import fhfaJson from "../../public/data/fhfa-conforming-limits.json";

type LimitFile = {
  year: number;
  floor: number;
  ceiling: number;
  limits: Record<string, number>;
};

const FHA = fhaJson as LimitFile;
const FHFA = fhfaJson as LimitFile;

export const LOAN_LIMIT_YEAR = FHA.year;
export const FHA_FLOOR = FHA.floor;
export const FHA_CEILING = FHA.ceiling;
export const FHFA_FLOOR = FHFA.floor;
export const FHFA_CEILING = FHFA.ceiling;

/** 1-unit FHA forward limit for a county FIPS, or national floor. */
export function getFhaLimit(fips?: string | null): number {
  if (fips && FHA.limits[fips] != null) return FHA.limits[fips];
  return FHA.floor;
}

/** 1-unit FHFA conforming limit (also used for VA remaining entitlement). */
export function getConformingLimit(fips?: string | null): number {
  if (fips && FHFA.limits[fips] != null) return FHFA.limits[fips];
  return FHFA.floor;
}

export function isAboveFhaLimit(
  loanAmount: number,
  fips?: string | null,
): boolean {
  return loanAmount > getFhaLimit(fips);
}
