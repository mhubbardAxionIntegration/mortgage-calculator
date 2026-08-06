"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  findCountyInState,
  getCounty,
  inputsFromLocation,
  resolveState,
} from "@/lib/location";
import { getConformingLimit, getFhaLimit } from "@/lib/loanLimits";
import {
  estimateRefiClosingCosts,
  getRefiRegulationNote,
} from "@/lib/refiLocation";
import {
  getVaRegion,
  getVaResidualGuideline,
  vaRegionLabel,
} from "@/lib/vaResidualIncome";

type Options = {
  initialStateSlug?: string;
  initialCounty?: string;
  /** When location changes, clear share-link price/down overrides. */
  clearShareOverrides?: boolean;
};

export function useCalculatorLocation({
  initialStateSlug = "",
  initialCounty = "",
  clearShareOverrides = true,
}: Options = {}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const urlState = searchParams.get("state") || initialStateSlug || "";
  const urlCounty = searchParams.get("county") || initialCounty || "";

  const [stateSlug, setStateSlug] = useState(urlState);
  const [countyFips, setCountyFips] = useState(() => {
    if (!urlState || !urlCounty) return "";
    return findCountyInState(urlState, urlCounty)?.fips ?? "";
  });

  useEffect(() => {
    const nextState = searchParams.get("state") || "";
    const nextCountyRaw = searchParams.get("county") || "";
    setStateSlug((prev) => (prev === nextState ? prev : nextState));
    const resolved = nextState
      ? findCountyInState(nextState, nextCountyRaw)?.fips ?? ""
      : "";
    setCountyFips((prev) => (prev === resolved ? prev : resolved));
  }, [searchParams]);

  const syncUrl = useCallback(
    (nextState: string, nextCounty: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (nextState) params.set("state", nextState);
      else params.delete("state");
      if (nextState && nextCounty) params.set("county", nextCounty);
      else params.delete("county");
      if (clearShareOverrides) {
        params.delete("price");
        params.delete("down");
      }
      const q = params.toString();
      router.replace(q ? `${pathname}?${q}` : pathname, { scroll: false });
    },
    [clearShareOverrides, pathname, router, searchParams],
  );

  const onStateChange = useCallback(
    (slug: string) => {
      setStateSlug(slug);
      setCountyFips("");
      syncUrl(slug, "");
    },
    [syncUrl],
  );

  const onCountyChange = useCallback(
    (fips: string) => {
      setCountyFips(fips);
      syncUrl(stateSlug, fips);
    },
    [stateSlug, syncUrl],
  );

  /** Apply state + county together (Go button / confirm location). */
  const applyLocation = useCallback(
    (slug: string, fips: string) => {
      setStateSlug(slug);
      setCountyFips(fips);
      syncUrl(slug, fips);
    },
    [syncUrl],
  );

  const state = resolveState(stateSlug);
  const county = countyFips ? getCounty(countyFips) : undefined;

  const locationInputs = useMemo(
    () => inputsFromLocation(stateSlug || null, countyFips || null),
    [stateSlug, countyFips],
  );

  const fhaLimit = useMemo(
    () => getFhaLimit(countyFips || null),
    [countyFips],
  );
  const conformingLimit = useMemo(
    () => getConformingLimit(countyFips || null),
    [countyFips],
  );

  const vaRegion = state ? getVaRegion(state.abbr) : null;
  const locationKey = `${stateSlug || "national"}-${countyFips || "none"}`;

  return {
    stateSlug,
    countyFips,
    state,
    county,
    onStateChange,
    onCountyChange,
    applyLocation,
    locationInputs,
    locationKey,
    fhaLimit,
    conformingLimit,
    vaRegion,
    vaRegionLabel: vaRegion ? vaRegionLabel(vaRegion) : null,
    getVaResidual: (familySize: number) =>
      getVaResidualGuideline(state?.abbr, familySize),
    estimateRefiClosingCosts: (loanAmount: number) =>
      estimateRefiClosingCosts(loanAmount, state?.abbr),
    refiRegulationNote: getRefiRegulationNote(state?.abbr),
  };
}
