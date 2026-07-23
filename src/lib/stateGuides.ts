/**
 * Builds unique, high-value editorial content for each state calculator page.
 * Combines per-state facts with calculated payment scenarios so pages are not
 * thin Mad-Libs replicas (AdSense "replicated content" risk).
 */
import type { StateData } from "./states";
import type { Faq } from "./faqs";
import { getStateFacts } from "./stateFacts";
import { calculatePayment } from "./mortgage";
import { DEFAULT_INPUTS } from "./defaults";
import { formatCurrency, formatPercent } from "./mortgage";
import { SITE } from "./site";

export interface StateGuide {
  marketOverview: string;
  taxAndHomestead: string;
  insuranceNotes: string;
  paymentWalkthrough: string;
  affordabilityNote: string;
  buyerPrograms: string[];
  localTips: string[];
  closingNote: string;
  faqs: Faq[];
}

function taxTierCopy(state: StateData): string {
  const rate = state.propertyTaxRate;
  if (rate < 0.7) {
    return `${state.name}'s average effective property tax rate of roughly ${formatPercent(rate)} sits below the national midpoint, so taxes often take a smaller slice of PITI than in high-tax states — though your county can still differ.`;
  }
  if (rate < 1.2) {
    return `${state.name}'s average effective property tax rate of roughly ${formatPercent(rate)} is near the middle of the U.S. range. The dollar amount still scales with purchase price, so escrow on a median-priced home is material.`;
  }
  return `${state.name}'s average effective property tax rate of roughly ${formatPercent(rate)} ranks among the higher statewide averages nationally. On a median-priced home, taxes can rival or exceed the insurance line item in your payment.`;
}

function priceTierCopy(state: StateData): string {
  const price = state.medianHomePrice;
  if (price < 280000) {
    return `At an indicative median near ${formatCurrency(price)}, ${state.name} remains more approachable than coastal high-cost states — but rate, insurance, and taxes still determine whether a payment fits.`;
  }
  if (price < 450000) {
    return `With an indicative median near ${formatCurrency(price)}, ${state.name} sits in the middle of the national price distribution. Small rate changes move the payment more than many first-time buyers expect.`;
  }
  return `An indicative median near ${formatCurrency(price)} places ${state.name} in a higher-cost cohort. Down payment size and PMI (or MIP) choices often matter as much as the note rate.`;
}

function insuranceTierCopy(state: StateData): string {
  const ins = state.avgInsurance;
  if (ins < 1200) {
    return `Indicative average homeowners insurance around ${formatCurrency(ins)}/year is comparatively contained, but shop quotes for your ZIP — carriers price risk locally.`;
  }
  if (ins < 1800) {
    return `Indicative average homeowners insurance around ${formatCurrency(ins)}/year is in a typical U.S. band. Roof age, claims history, and deductibles still swing real quotes.`;
  }
  return `Indicative average homeowners insurance around ${formatCurrency(ins)}/year is elevated versus many states. Treat insurance shopping as part of your offer strategy, not an afterthought.`;
}

function scenario(state: StateData) {
  const homePrice = state.medianHomePrice;
  const down20 = Math.round(homePrice * 0.2);
  const down5 = Math.round(homePrice * 0.05);
  const with20 = calculatePayment({
    ...DEFAULT_INPUTS,
    homePrice,
    downPayment: down20,
    propertyTaxRate: state.propertyTaxRate,
    annualHomeInsurance: state.avgInsurance,
    pmiRate: 0,
  });
  const with5 = calculatePayment({
    ...DEFAULT_INPUTS,
    homePrice,
    downPayment: down5,
    propertyTaxRate: state.propertyTaxRate,
    annualHomeInsurance: state.avgInsurance,
    pmiRate: 0.55,
  });
  return { homePrice, down20, down5, with20, with5 };
}

export function getStateGuide(state: StateData): StateGuide {
  const facts = getStateFacts(state.slug);
  if (!facts) {
    throw new Error(`Missing state facts for ${state.slug}`);
  }

  const sc = scenario(state);

  return {
    marketOverview: `${facts.market} ${priceTierCopy(state)}`,
    taxAndHomestead: `${taxTierCopy(state)} ${facts.tax}`,
    insuranceNotes: `${insuranceTierCopy(state)} ${facts.insurance}`,
    paymentWalkthrough: `Using ${state.name}'s indicative median of ${formatCurrency(sc.homePrice)}, a 20% down payment of ${formatCurrency(sc.down20)}, a ${SITE.defaultRate}% rate, and local tax/insurance defaults, principal and interest is about ${formatCurrency(sc.with20.principalAndInterest)} with a full monthly payment near ${formatCurrency(sc.with20.totalMonthly)} (including roughly ${formatCurrency(sc.with20.monthlyTax)} tax and ${formatCurrency(sc.with20.monthlyInsurance)} insurance). With only 5% down (${formatCurrency(sc.down5)}), the same price point jumps to about ${formatCurrency(sc.with5.totalMonthly)} per month because the loan is larger and PMI is typically required — roughly ${formatCurrency(sc.with5.monthlyPmi)} of that total.`,
    affordabilityNote: `A common comfort check is keeping total housing cost near 28% of gross income. At ${formatCurrency(sc.with20.totalMonthly)}/month, that implies ballpark gross income around ${formatCurrency(Math.round((sc.with20.totalMonthly / 0.28) * 12))} per year before other debts. Run your real income and debts through our home affordability calculator rather than relying on this rule of thumb alone.`,
    buyerPrograms: facts.programs,
    localTips: facts.tips,
    closingNote: `Figures on this page are educational estimates for ${state.name}, not a lender quote. County tax assessors, insurance agents, and licensed mortgage professionals can confirm the numbers for a specific address. See our methodology page for the formulas and assumptions behind every estimate.`,
    faqs: [
      {
        question: `What is the average property tax rate in ${state.name}?`,
        answer: `${state.name}'s indicative average effective property tax rate is about ${formatPercent(state.propertyTaxRate)} of home value per year. On a ${formatCurrency(state.medianHomePrice)} home, that is roughly ${formatCurrency((state.medianHomePrice * state.propertyTaxRate) / 100)} annually, usually collected monthly through escrow. Your county bill can differ — and homestead programs may reduce what you owe.`,
      },
      {
        question: `How much is a typical mortgage payment in ${state.name}?`,
        answer: `On the indicative median of ${formatCurrency(sc.homePrice)} with 20% down, local tax/insurance defaults, and a ${SITE.defaultRate}% rate, a full monthly payment is about ${formatCurrency(sc.with20.totalMonthly)}. Your quote will differ with price, credit, loan type, and exact escrow items.`,
      },
      {
        question: `Does this calculator include ${state.name} homeowners insurance?`,
        answer: `Yes. We default to an indicative ${state.name} average near ${formatCurrency(state.avgInsurance)} per year (${formatCurrency(state.avgInsurance / 12)}/month). Replace it with a real quote for your address — especially if you need wind, hurricane, wildfire, or flood endorsements.`,
      },
      {
        question: `What assistance programs should ${state.name} buyers know about?`,
        answer: `${facts.programs[0]}. Also explore: ${facts.programs.slice(1).join("; ")}. Program rules change — confirm eligibility with the agency or a participating lender.`,
      },
    ],
  };
}
