"use client";

import { useEffect, useId, useState } from "react";
import { STATES } from "@/lib/states";
import { getCountiesForState, type CountyRecord } from "@/lib/location";

type Props = {
  stateSlug: string;
  countyFips: string;
  /** Apply state + county (URL sync and calculator defaults). Called by Go, or immediately when clearing to national. */
  onApply: (stateSlug: string, countyFips: string) => void;
  /** Short product-specific hint under the controls. */
  hint?: string;
  className?: string;
};

export function LocationControls({
  stateSlug,
  countyFips,
  onApply,
  hint = "County sets tax/insurance defaults and, where applicable, FHA or conforming loan limits.",
  className = "",
}: Props) {
  const stateId = useId();
  const countyId = useId();
  const [draftState, setDraftState] = useState(stateSlug);
  const [draftCounty, setDraftCounty] = useState(countyFips);

  useEffect(() => {
    setDraftState(stateSlug);
    setDraftCounty(countyFips);
  }, [stateSlug, countyFips]);

  const counties: CountyRecord[] = draftState
    ? getCountiesForState(draftState)
    : [];

  const canGo = Boolean(draftState && draftCounty);

  const handleStateChange = (next: string) => {
    setDraftState(next);
    setDraftCounty("");
    // Clearing to national applies immediately — Go requires a county.
    if (!next) onApply("", "");
  };

  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 ${className}`}
    >
      <p className="text-sm font-semibold text-slate-900">Property location</p>
      <p className="mt-1 text-sm text-slate-600">{hint}</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div>
          <label
            htmlFor={stateId}
            className="block text-xs font-semibold uppercase tracking-wide text-slate-500"
          >
            State
          </label>
          <select
            id={stateId}
            value={draftState}
            onChange={(e) => handleStateChange(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/30"
          >
            <option value="">United States — national defaults</option>
            {STATES.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor={countyId}
            className="block text-xs font-semibold uppercase tracking-wide text-slate-500"
          >
            County
          </label>
          <select
            id={countyId}
            value={draftCounty}
            disabled={!draftState || counties.length === 0}
            onChange={(e) => setDraftCounty(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/30 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          >
            <option value="">
              {draftState ? "Select a county" : "Select a state first"}
            </option>
            {counties.map((c) => (
              <option key={c.fips} value={c.fips}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          disabled={!canGo}
          onClick={() => onApply(draftState, draftCounty)}
          className={
            canGo
              ? "w-full rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 active:bg-emerald-800"
              : "w-full cursor-not-allowed rounded-lg bg-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-400"
          }
        >
          {canGo ? "GO" : "Select a State and County"}
        </button>
      </div>
    </div>
  );
}
