import type { Block } from "../blogTypes";
import { SITE } from "../site";
import { getState } from "../states";

export function stateAffordabilityBlocks(
  stateSlug: string,
  extras: {
    introLead: string;
    localCostsH2: string;
    localCostsHtml: (ctx: Ctx) => string;
    tipsH2: string;
    tips: string[];
    programsHtml: string;
  },
): Block[] {
  const st = getState(stateSlug)!;
  const rate = SITE.defaultRate / 100 / 12;
  const n = 360;
  const loan = st.medianHomePrice * 0.8;
  const pi =
    (loan * (rate * Math.pow(1 + rate, n))) / (Math.pow(1 + rate, n) - 1);
  const tax = (st.medianHomePrice * st.propertyTaxRate) / 100 / 12;
  const ins = st.avgInsurance / 12;
  const payment = Math.round(pi + tax + ins);
  const ctx: Ctx = { st, pi, tax, ins, payment, loan };

  return [
    {
      type: "p",
      html: `${extras.introLead} With a median home near $${st.medianHomePrice.toLocaleString()} and an effective property tax rate around ${st.propertyTaxRate}%, the realistic budget is principal, interest, taxes, insurance, and often HOA — not the loan payment alone.`,
    },
    { type: "h2", text: "Start with 28/36 — then stress-test PITI" },
    {
      type: "p",
      html: `Lenders typically glance at housing near 28% of gross income and total debt near 36%. Some programs stretch higher with compensating factors. You should still model the payment you could survive after an insurance renewal or temporary income dip. Pure amortization is national; escrow items in ${st.name} are what move the ceiling.`,
    },
    { type: "h2", text: extras.localCostsH2 },
    { type: "p", html: extras.localCostsHtml(ctx) },
    {
      type: "ul",
      items: [
        `Median home price (indicative): $${st.medianHomePrice.toLocaleString()}`,
        `Average effective property tax rate: ${st.propertyTaxRate}% of home value per year (~$${Math.round(tax)}/month on the median)`,
        `Typical homeowners insurance: about $${st.avgInsurance.toLocaleString()}/year (~$${Math.round(ins)}/month)`,
        "Your county, flood/wind risk, and HOA can push these figures higher than the state average",
      ],
    },
    { type: "h2", text: "Worked example: median-priced home, 20% down" },
    {
      type: "p",
      html: `Assume $${st.medianHomePrice.toLocaleString()} with 20% down (loan ~$${Math.round(loan).toLocaleString()}), a ${SITE.defaultRate}% rate, and a 30-year term. Principal and interest come to about $${Math.round(pi)}/month. Add taxes (~$${Math.round(tax)}) and insurance (~$${Math.round(ins)}) and you are near $${payment}/month total — before maintenance, utilities, HOA, or PMI if you put less than 20% down.`,
    },
    { type: "h2", text: "Shopping levers that raise (or protect) affordability" },
    {
      type: "ol",
      items: [
        `Shop 3–5 <a href="/blog/how-to-get-the-best-mortgage-rate">Loan Estimates the same day</a> so one lender's overlay does not fake a lower budget.`,
        `Ask about <a href="/blog/seller-concessions-and-rate-buydowns">seller concessions or a 2-1 buydown</a> when inventory sits.`,
        `Compare FHA vs conventional once you know the county limit — <a href="/calculators/fha-mortgage-calculator">FHA calculator</a> and <a href="/blog/fha-loan-limits-2026-by-county">2026 FHA limits</a>.`,
        `If VA-eligible, check residual income and funding-fee exemptions in the <a href="/calculators/va-mortgage-calculator">VA calculator</a>.`,
        `Improve credit before applying; one pricing tier can free hundreds of monthly capacity — <a href="/blog/improve-credit-score-before-buying">credit guide</a>.`,
      ],
    },
    { type: "h2", text: extras.tipsH2 },
    { type: "ul", items: extras.tips },
    { type: "h2", text: "Programs and loan types that stretch cash to close" },
    { type: "p", html: extras.programsHtml },
    { type: "h2", text: "Run your own numbers" },
    {
      type: "p",
      html: `Use the <a href="/calculators/home-affordability-calculator">home affordability calculator</a> to work backward from income, then open the <a href="/mortgage-calculator?state=${stateSlug}">${st.name} mortgage calculator</a> — it is pre-loaded with state tax and insurance defaults. Cross-check with our national <a href="/blog/how-much-house-can-i-afford">28/36 affordability guide</a>. Verify current tax assessments and insurance quotes locally; confirm loan pricing with a licensed lender. Educational estimates only — not a loan offer.`,
    },
  ];
}

export type Ctx = {
  st: NonNullable<ReturnType<typeof getState>>;
  pi: number;
  tax: number;
  ins: number;
  payment: number;
  loan: number;
};
