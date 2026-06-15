import { MONETIZATION } from "./site";

export interface QuotePrefill {
  homePrice?: number;
  downPayment?: number;
  rate?: number;
  term?: number;
  state?: string;
  loanType?: string;
}

/**
 * Build the affiliate "get rates" destination, appending calculator values as
 * query params so partners receive pre-filled context (improves conversion).
 * Returns null when no affiliate URL is configured, so callers can hide dead CTAs.
 */
export function buildRateQuoteUrl(prefill: QuotePrefill = {}): string | null {
  const base = MONETIZATION.affiliate.rateQuoteUrl.trim();
  if (!base) return null;

  const params = new URLSearchParams();
  if (prefill.homePrice) params.set("price", String(Math.round(prefill.homePrice)));
  if (prefill.downPayment) params.set("down", String(Math.round(prefill.downPayment)));
  if (prefill.rate) params.set("rate", String(prefill.rate));
  if (prefill.term) params.set("term", String(prefill.term));
  if (prefill.state) params.set("state", prefill.state);
  if (prefill.loanType) params.set("loan_type", prefill.loanType);
  params.set("utm_source", "paymortgage-calculator");

  const sep = base.includes("?") ? "&" : "?";
  const query = params.toString();
  return query ? `${base}${sep}${query}` : base;
}

export function isAffiliateEnabled(): boolean {
  return MONETIZATION.affiliate.rateQuoteUrl.trim().length > 0;
}
