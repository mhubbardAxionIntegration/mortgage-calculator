import type { MortgageInputs } from "./mortgage";

/** Apply ?price=&down=&rate=&term= share-link query params to calculator inputs. */
export function inputsFromSearchParams(
  params: URLSearchParams,
  base: MortgageInputs,
): MortgageInputs {
  const next = { ...base };
  const price = Number(params.get("price"));
  const down = Number(params.get("down"));
  const rate = Number(params.get("rate"));
  const term = Number(params.get("term"));

  if (Number.isFinite(price) && price > 0) next.homePrice = price;
  if (Number.isFinite(down) && down >= 0) next.downPayment = down;
  if (Number.isFinite(rate) && rate > 0) next.annualRate = rate;
  if (Number.isFinite(term) && term > 0) next.termYears = term;

  return next;
}
