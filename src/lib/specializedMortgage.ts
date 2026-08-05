/**
 * Specialized mortgage scenarios used by dedicated calculator pages.
 * These go beyond standard PITI so refinance / FHA / ARM pages match their titles.
 */
import { monthlyPrincipalAndInterest } from "./mortgage";

export interface RefinanceInputs {
  /** Remaining principal on the current loan. */
  currentBalance: number;
  /** Current note rate, percent. */
  currentRate: number;
  /** Months remaining on the current loan. */
  remainingMonths: number;
  /** New note rate, percent. */
  newRate: number;
  /** New term in years. */
  newTermYears: number;
  /** Estimated closing costs in dollars (fees, points, titles, etc.). */
  closingCosts: number;
  /** Cash taken out (adds to new loan). Default 0 for rate-and-term. */
  cashOut: number;
}

export interface RefinanceResult {
  currentMonthlyPI: number;
  newLoanAmount: number;
  newMonthlyPI: number;
  monthlySavings: number;
  breakEvenMonths: number | null;
  lifetimeInterestCurrent: number;
  lifetimeInterestNew: number;
  lifetimeInterestDelta: number;
  closingCostRecoveryYears: number | null;
}

/** Compare current vs new P&I and estimate months to recover closing costs. */
export function calculateRefinance(inputs: RefinanceInputs): RefinanceResult {
  const {
    currentBalance,
    currentRate,
    remainingMonths,
    newRate,
    newTermYears,
    closingCosts,
    cashOut,
  } = inputs;

  const balance = Math.max(0, currentBalance);
  const monthsLeft = Math.max(0, Math.round(remainingMonths));
  const currentMonthlyPI =
    monthsLeft > 0
      ? monthlyPrincipalAndInterest(balance, currentRate, monthsLeft / 12)
      : 0;

  const newLoanAmount = Math.max(0, balance + Math.max(0, cashOut));
  const newMonthlyPI = monthlyPrincipalAndInterest(
    newLoanAmount,
    newRate,
    newTermYears,
  );

  const monthlySavings = currentMonthlyPI - newMonthlyPI;
  const breakEvenMonths =
    monthlySavings > 0 && closingCosts > 0
      ? Math.ceil(closingCosts / monthlySavings)
      : monthlySavings > 0 && closingCosts <= 0
        ? 0
        : null;

  const lifetimeInterestCurrent = Math.max(
    0,
    currentMonthlyPI * monthsLeft - balance,
  );
  const newPayoffMonths = newTermYears * 12;
  const lifetimeInterestNew = Math.max(
    0,
    newMonthlyPI * newPayoffMonths - newLoanAmount,
  );

  return {
    currentMonthlyPI,
    newLoanAmount,
    newMonthlyPI,
    monthlySavings,
    breakEvenMonths,
    lifetimeInterestCurrent,
    lifetimeInterestNew,
    lifetimeInterestDelta: lifetimeInterestCurrent - lifetimeInterestNew,
    closingCostRecoveryYears:
      breakEvenMonths === null ? null : breakEvenMonths / 12,
  };
}

export interface FhaInputs {
  homePrice: number;
  downPayment: number;
  annualRate: number;
  termYears: number;
  /** Upfront MIP as percent of base loan, typically 1.75. */
  upfrontMipRate: number;
  /** Annual MIP as percent of base loan, often ~0.55. */
  annualMipRate: number;
  /** When true, upfront MIP is rolled into the loan. */
  financeUpfrontMip: boolean;
  propertyTaxRate: number;
  annualHomeInsurance: number;
  monthlyHoa: number;
}

export interface FhaResult {
  baseLoanAmount: number;
  upfrontMip: number;
  financedLoanAmount: number;
  monthlyPI: number;
  monthlyAnnualMip: number;
  monthlyTax: number;
  monthlyInsurance: number;
  monthlyHoa: number;
  totalMonthly: number;
  downPaymentPercent: number;
  /** Rough note: annual MIP often lasts life of loan when LTV starts >90%. */
  mipLikelyLifetime: boolean;
}

/** FHA payment with upfront MIP and monthly annual MIP (distinct from conventional PMI). */
export function calculateFhaPayment(inputs: FhaInputs): FhaResult {
  const {
    homePrice,
    downPayment,
    annualRate,
    termYears,
    upfrontMipRate,
    annualMipRate,
    financeUpfrontMip,
    propertyTaxRate,
    annualHomeInsurance,
    monthlyHoa,
  } = inputs;

  const price = Math.max(0, homePrice);
  const down = Math.max(0, Math.min(downPayment, price));
  const baseLoanAmount = Math.max(0, price - down);
  const downPaymentPercent = price > 0 ? (down / price) * 100 : 0;
  const upfrontMip = baseLoanAmount * (upfrontMipRate / 100);
  const financedLoanAmount = financeUpfrontMip
    ? baseLoanAmount + upfrontMip
    : baseLoanAmount;

  const monthlyPI = monthlyPrincipalAndInterest(
    financedLoanAmount,
    annualRate,
    termYears,
  );
  const monthlyAnnualMip = (baseLoanAmount * (annualMipRate / 100)) / 12;
  const monthlyTax = (price * (propertyTaxRate / 100)) / 12;
  const monthlyInsurance = annualHomeInsurance / 12;

  return {
    baseLoanAmount,
    upfrontMip,
    financedLoanAmount,
    monthlyPI,
    monthlyAnnualMip,
    monthlyTax,
    monthlyInsurance,
    monthlyHoa,
    totalMonthly:
      monthlyPI + monthlyAnnualMip + monthlyTax + monthlyInsurance + monthlyHoa,
    downPaymentPercent,
    mipLikelyLifetime: downPaymentPercent < 10,
  };
}

export interface ArmInputs {
  loanAmount: number;
  introRate: number;
  introYears: number;
  /** Assumed rate after adjustment for stress (e.g. lifetime cap). */
  stressRate: number;
  termYears: number;
  propertyTaxRate: number;
  homePrice: number;
  annualHomeInsurance: number;
  monthlyHoa: number;
}

export interface ArmResult {
  introMonthlyPI: number;
  stressMonthlyPI: number;
  introTotalMonthly: number;
  stressTotalMonthly: number;
  monthlyIncreaseAtStress: number;
  introYears: number;
}

/** Compare ARM intro P&I vs a higher post-reset stress rate on the same balance. */
export function calculateArmStress(inputs: ArmInputs): ArmResult {
  const {
    loanAmount,
    introRate,
    introYears,
    stressRate,
    termYears,
    propertyTaxRate,
    homePrice,
    annualHomeInsurance,
    monthlyHoa,
  } = inputs;

  const amount = Math.max(0, loanAmount);
  const introMonthlyPI = monthlyPrincipalAndInterest(amount, introRate, termYears);
  const stressMonthlyPI = monthlyPrincipalAndInterest(
    amount,
    stressRate,
    termYears,
  );
  const monthlyTax = (Math.max(0, homePrice) * (propertyTaxRate / 100)) / 12;
  const monthlyInsurance = annualHomeInsurance / 12;
  const escrow = monthlyTax + monthlyInsurance + monthlyHoa;

  return {
    introMonthlyPI,
    stressMonthlyPI,
    introTotalMonthly: introMonthlyPI + escrow,
    stressTotalMonthly: stressMonthlyPI + escrow,
    monthlyIncreaseAtStress: stressMonthlyPI - introMonthlyPI,
    introYears: Math.max(0, introYears),
  };
}

/** Illustrative VA purchase funding-fee rates (percent of base loan). Confirm current VA schedule. */
export function vaFundingFeeRatePercent(
  firstUse: boolean,
  downPaymentPercent: number,
  disabilityExempt: boolean,
): number {
  if (disabilityExempt) return 0;
  const down = Math.max(0, downPaymentPercent);
  if (down >= 10) return 1.25;
  if (down >= 5) return 1.5;
  return firstUse ? 2.15 : 3.3;
}

export interface VaInputs {
  homePrice: number;
  downPayment: number;
  annualRate: number;
  termYears: number;
  firstUse: boolean;
  disabilityExempt: boolean;
  financeFundingFee: boolean;
  /** Optional override; when null, rate comes from vaFundingFeeRatePercent. */
  fundingFeeRateOverride: number | null;
  propertyTaxRate: number;
  annualHomeInsurance: number;
  monthlyHoa: number;
}

export interface VaResult {
  baseLoanAmount: number;
  downPaymentPercent: number;
  fundingFeeRate: number;
  fundingFee: number;
  financedLoanAmount: number;
  monthlyPI: number;
  monthlyTax: number;
  monthlyInsurance: number;
  monthlyHoa: number;
  totalMonthly: number;
}

/** VA payment with one-time funding fee (no PMI) and optional financed fee. */
export function calculateVaPayment(inputs: VaInputs): VaResult {
  const {
    homePrice,
    downPayment,
    annualRate,
    termYears,
    firstUse,
    disabilityExempt,
    financeFundingFee,
    fundingFeeRateOverride,
    propertyTaxRate,
    annualHomeInsurance,
    monthlyHoa,
  } = inputs;

  const price = Math.max(0, homePrice);
  const down = Math.max(0, Math.min(downPayment, price));
  const baseLoanAmount = Math.max(0, price - down);
  const downPaymentPercent = price > 0 ? (down / price) * 100 : 0;
  const fundingFeeRate =
    fundingFeeRateOverride !== null && Number.isFinite(fundingFeeRateOverride)
      ? Math.max(0, fundingFeeRateOverride)
      : vaFundingFeeRatePercent(firstUse, downPaymentPercent, disabilityExempt);
  const fundingFee = baseLoanAmount * (fundingFeeRate / 100);
  const financedLoanAmount =
    financeFundingFee && !disabilityExempt
      ? baseLoanAmount + fundingFee
      : baseLoanAmount;

  const monthlyPI = monthlyPrincipalAndInterest(
    financedLoanAmount,
    annualRate,
    termYears,
  );
  const monthlyTax = (price * (propertyTaxRate / 100)) / 12;
  const monthlyInsurance = annualHomeInsurance / 12;

  return {
    baseLoanAmount,
    downPaymentPercent,
    fundingFeeRate,
    fundingFee,
    financedLoanAmount,
    monthlyPI,
    monthlyTax,
    monthlyInsurance,
    monthlyHoa,
    totalMonthly: monthlyPI + monthlyTax + monthlyInsurance + monthlyHoa,
  };
}

/** Human-readable break-even label. */
export function breakEvenLabel(months: number | null): string {
  if (months === null) return "N/A — no monthly savings at this rate";
  if (months === 0) return "Immediate (no closing costs to recover)";
  if (months < 12) return `${months} month${months === 1 ? "" : "s"}`;
  const years = Math.floor(months / 12);
  const rem = months % 12;
  if (rem === 0) return `${years} year${years === 1 ? "" : "s"} (${months} months)`;
  return `${years}y ${rem}m (${months} months)`;
}
