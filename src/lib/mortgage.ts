/**
 * Core mortgage math. Pure functions, no UI, fully unit-testable.
 * All money values are in dollars; rates are annual percentages (e.g. 6.75).
 */

export interface MortgageInputs {
  homePrice: number;
  downPayment: number;
  annualRate: number; // percent, e.g. 6.75
  termYears: number;
  /** Annual property tax as a percent of home value, e.g. 1.1 */
  propertyTaxRate: number;
  /** Annual homeowners insurance in dollars */
  annualHomeInsurance: number;
  /** Monthly HOA dues in dollars */
  monthlyHoa: number;
  /** Annual PMI as a percent of loan amount; charged until 20% equity */
  pmiRate: number;
}

export interface PaymentBreakdown {
  loanAmount: number;
  principalAndInterest: number;
  monthlyTax: number;
  monthlyInsurance: number;
  monthlyPmi: number;
  monthlyHoa: number;
  totalMonthly: number;
  downPaymentPercent: number;
  totalInterest: number;
  totalOfPayments: number;
  payoffMonths: number;
}

export interface AmortizationYear {
  year: number;
  interestPaid: number;
  principalPaid: number;
  endingBalance: number;
}

/** Standard amortizing payment (principal + interest only). */
export function monthlyPrincipalAndInterest(
  loanAmount: number,
  annualRate: number,
  termYears: number,
): number {
  if (loanAmount <= 0 || termYears <= 0) return 0;
  const n = termYears * 12;
  const r = annualRate / 100 / 12;
  if (r === 0) return loanAmount / n;
  const factor = Math.pow(1 + r, n);
  return (loanAmount * r * factor) / (factor - 1);
}

export function calculatePayment(inputs: MortgageInputs): PaymentBreakdown {
  const {
    homePrice,
    downPayment,
    annualRate,
    termYears,
    propertyTaxRate,
    annualHomeInsurance,
    monthlyHoa,
    pmiRate,
  } = inputs;

  const loanAmount = Math.max(0, homePrice - downPayment);
  const downPaymentPercent = homePrice > 0 ? (downPayment / homePrice) * 100 : 0;

  const principalAndInterest = monthlyPrincipalAndInterest(
    loanAmount,
    annualRate,
    termYears,
  );

  const monthlyTax = (homePrice * (propertyTaxRate / 100)) / 12;
  const monthlyInsurance = annualHomeInsurance / 12;
  // PMI applies when the down payment is under 20%.
  const monthlyPmi =
    downPaymentPercent < 20 ? (loanAmount * (pmiRate / 100)) / 12 : 0;

  const totalMonthly =
    principalAndInterest +
    monthlyTax +
    monthlyInsurance +
    monthlyPmi +
    monthlyHoa;

  const payoffMonths = termYears * 12;
  const totalOfPayments = principalAndInterest * payoffMonths;
  const totalInterest = Math.max(0, totalOfPayments - loanAmount);

  return {
    loanAmount,
    principalAndInterest,
    monthlyTax,
    monthlyInsurance,
    monthlyPmi,
    monthlyHoa,
    totalMonthly,
    downPaymentPercent,
    totalInterest,
    totalOfPayments,
    payoffMonths,
  };
}

/** Year-by-year amortization aggregation for display tables and charts. */
export function buildAmortizationSchedule(
  loanAmount: number,
  annualRate: number,
  termYears: number,
): AmortizationYear[] {
  const schedule: AmortizationYear[] = [];
  if (loanAmount <= 0 || termYears <= 0) return schedule;

  const r = annualRate / 100 / 12;
  const payment = monthlyPrincipalAndInterest(loanAmount, annualRate, termYears);
  let balance = loanAmount;

  for (let year = 1; year <= termYears; year++) {
    let interestThisYear = 0;
    let principalThisYear = 0;

    for (let month = 0; month < 12; month++) {
      const interest = balance * r;
      const principal = Math.min(payment - interest, balance);
      interestThisYear += interest;
      principalThisYear += principal;
      balance = Math.max(0, balance - principal);
    }

    schedule.push({
      year,
      interestPaid: interestThisYear,
      principalPaid: principalThisYear,
      endingBalance: balance,
    });

    if (balance <= 0) break;
  }

  return schedule;
}

export interface AmortizationMonth {
  /** 1-based payment number. */
  month: number;
  /** Calendar label for the payment, e.g. "Jul 2026". */
  label: string;
  principalPaid: number;
  interestPaid: number;
  endingBalance: number;
}

/** Month-by-month amortization, used for the detailed PDF report. */
export function buildMonthlyAmortizationSchedule(
  loanAmount: number,
  annualRate: number,
  termYears: number,
  startDate: Date = new Date(),
): AmortizationMonth[] {
  const schedule: AmortizationMonth[] = [];
  if (loanAmount <= 0 || termYears <= 0) return schedule;

  const r = annualRate / 100 / 12;
  const n = termYears * 12;
  const payment = monthlyPrincipalAndInterest(loanAmount, annualRate, termYears);
  let balance = loanAmount;

  const fmt = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

  for (let m = 1; m <= n; m++) {
    const interest = balance * r;
    const principal = Math.min(payment - interest, balance);
    balance = Math.max(0, balance - principal);

    const d = new Date(
      Date.UTC(startDate.getUTCFullYear(), startDate.getUTCMonth() + m, 1),
    );

    schedule.push({
      month: m,
      label: fmt.format(d),
      principalPaid: principal,
      interestPaid: interest,
      endingBalance: balance,
    });

    if (balance <= 0) break;
  }

  return schedule;
}

export interface AffordabilityInputs {
  annualIncome: number;
  monthlyDebts: number;
  downPayment: number;
  annualRate: number;
  termYears: number;
  /** Target debt-to-income ratio for the housing payment, e.g. 0.36 */
  maxDtiRatio: number;
  propertyTaxRate: number;
  annualHomeInsurance: number;
  monthlyHoa: number;
}

export interface AffordabilityResult {
  maxHomePrice: number;
  maxLoanAmount: number;
  maxMonthlyPayment: number;
  estimatedMonthlyPI: number;
}

/**
 * Estimate the maximum affordable home price from income and a DTI target.
 * Solves for the home price whose full PITI payment fits the available budget.
 */
export function calculateAffordability(
  inputs: AffordabilityInputs,
): AffordabilityResult {
  const {
    annualIncome,
    monthlyDebts,
    downPayment,
    annualRate,
    termYears,
    maxDtiRatio,
    propertyTaxRate,
    annualHomeInsurance,
    monthlyHoa,
  } = inputs;

  const monthlyIncome = annualIncome / 12;
  const maxTotalDebt = monthlyIncome * maxDtiRatio;
  const maxHousingPayment = Math.max(0, maxTotalDebt - monthlyDebts);

  // Budget left for principal & interest after recurring escrow-style costs.
  const monthlyInsurance = annualHomeInsurance / 12;
  const budgetForPI = Math.max(
    0,
    maxHousingPayment - monthlyInsurance - monthlyHoa,
  );

  const r = annualRate / 100 / 12;
  const n = termYears * 12;
  // Per-dollar-of-loan monthly P&I factor.
  const piFactor =
    r === 0 ? 1 / n : (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  // Per-dollar-of-home monthly property tax.
  const taxFactor = propertyTaxRate / 100 / 12;

  // budgetForPI = loan * piFactor + home * taxFactor, where loan = home - down.
  // Solve for home: home * (piFactor + taxFactor) = budgetForPI + down * piFactor
  const denom = piFactor + taxFactor;
  const maxHomePrice =
    denom > 0 ? (budgetForPI + downPayment * piFactor) / denom : 0;
  const maxLoanAmount = Math.max(0, maxHomePrice - downPayment);
  const estimatedMonthlyPI = maxLoanAmount * piFactor;

  return {
    maxHomePrice: Math.max(0, maxHomePrice),
    maxLoanAmount,
    maxMonthlyPayment: maxHousingPayment,
    estimatedMonthlyPI,
  };
}

const usd0 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const usd2 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatCurrency(value: number, decimals: 0 | 2 = 0): string {
  if (!Number.isFinite(value)) return decimals === 2 ? "$0.00" : "$0";
  return decimals === 2 ? usd2.format(value) : usd0.format(value);
}

export function formatPercent(value: number, decimals = 2): string {
  if (!Number.isFinite(value)) return "0%";
  return `${value.toFixed(decimals)}%`;
}
