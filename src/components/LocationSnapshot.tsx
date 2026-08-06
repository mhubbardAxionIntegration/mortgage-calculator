import { formatCurrency, formatPercent } from "@/lib/mortgage";
import { DEFAULT_INPUTS } from "@/lib/defaults";
import { LOAN_LIMIT_YEAR } from "@/lib/loanLimits";
import type { StateData } from "@/lib/states";
import type { CountyRecord, LocationInputs } from "@/lib/location";

type Props = {
  state?: StateData;
  county?: CountyRecord;
  locationInputs: Partial<LocationInputs>;
  fhaLimit: number;
  conformingLimit: number;
};

/** Median / tax / insurance / FHA limit cards shown after location is applied. */
export function LocationSnapshot({
  state,
  county,
  locationInputs,
  fhaLimit,
  conformingLimit,
}: Props) {
  if (!state && !county) return null;

  const displayPrice =
    locationInputs.homePrice ?? state?.medianHomePrice ?? DEFAULT_INPUTS.homePrice;
  const displayTax =
    locationInputs.propertyTaxRate ??
    state?.propertyTaxRate ??
    DEFAULT_INPUTS.propertyTaxRate;
  const displayIns =
    locationInputs.annualHomeInsurance ??
    state?.avgInsurance ??
    DEFAULT_INPUTS.annualHomeInsurance;

  return (
    <>
      <div className="mt-6 grid grid-cols-2 gap-3 text-center text-sm sm:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-3">
          <div className="text-xs text-slate-500">
            {county ? "Local median (HUD)" : "Median home price"}
          </div>
          <div className="font-bold text-slate-900">
            {formatCurrency(displayPrice)}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-3">
          <div className="text-xs text-slate-500">Property tax rate</div>
          <div className="font-bold text-slate-900">
            {formatPercent(displayTax)}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-3">
          <div className="text-xs text-slate-500">Est. insurance</div>
          <div className="font-bold text-slate-900">
            {formatCurrency(displayIns)}/yr
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-3">
          <div className="text-xs text-slate-500">
            {county
              ? `FHA 1-unit (${LOAN_LIMIT_YEAR})`
              : "Select county for FHA limit"}
          </div>
          <div className="font-bold text-slate-900">
            {county ? formatCurrency(fhaLimit) : "—"}
          </div>
        </div>
      </div>

      {county && (
        <p className="mt-3 text-xs text-slate-500">
          {county.name} County conforming (FHFA) 1-unit limit:{" "}
          {formatCurrency(conformingLimit)}. Limits are educational estimates
          from HUD CHUMS {LOAN_LIMIT_YEAR} files.
        </p>
      )}
    </>
  );
}
