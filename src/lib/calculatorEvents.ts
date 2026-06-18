export const APPLY_RATE_EVENT = "smc:apply-rate";

export function dispatchApplyRate(rate: number) {
  window.dispatchEvent(
    new CustomEvent<{ rate: number }>(APPLY_RATE_EVENT, { detail: { rate } }),
  );
}

export function syncRateInUrl(rate: number) {
  const url = new URL(window.location.href);
  url.searchParams.set("rate", String(rate));
  url.hash = "calculator";
  window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
}

export function scrollToCalculator() {
  document.getElementById("calculator")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function normalizePath(path: string): string {
  const clean = path.split("?")[0]?.split("#")[0] || "/";
  if (clean.length > 1 && clean.endsWith("/")) return clean.slice(0, -1);
  return clean || "/";
}

export function isSameCalculatorPage(pathname: string, calculatorHref: string): boolean {
  return normalizePath(pathname) === normalizePath(calculatorHref);
}
