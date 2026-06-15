/**
 * Loan-type data powering programmatic "/calculators/[type]" pages.
 * Each type tweaks the calculator defaults and supplies tailored SEO content.
 */
import type { MortgageInputs } from "./mortgage";

export interface LoanTypeContent {
  heading: string;
  text: string;
}

export interface LoanType {
  slug: string;
  /** Short label for nav and chips. */
  label: string;
  /** Full H1 / page title fragment, e.g. "FHA Mortgage Calculator". */
  title: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** Partial overrides applied to the calculator's default inputs. */
  defaults: Partial<MortgageInputs>;
  /** Highlight bullets shown near the top of the page. */
  highlights: string[];
  /** Long-form explanatory sections (each ~1 paragraph). */
  sections: LoanTypeContent[];
}

export const LOAN_TYPES: LoanType[] = [
  {
    slug: "fha-mortgage-calculator",
    label: "FHA",
    title: "FHA Mortgage Calculator",
    tagline:
      "Estimate your FHA loan payment with mortgage insurance premiums (MIP) and a low 3.5% down payment.",
    metaTitle: "FHA Mortgage Calculator: Estimate Payments with MIP (2026)",
    metaDescription:
      "Calculate your FHA loan monthly payment including upfront and annual mortgage insurance (MIP). See how a 3.5% down payment affects your costs in 2026.",
    keywords: [
      "fha mortgage calculator",
      "fha loan calculator with mip",
      "fha payment calculator 3.5 down",
    ],
    defaults: { downPayment: 0.035 * 350000, pmiRate: 0.55 },
    highlights: [
      "Down payments as low as 3.5% with a 580+ credit score",
      "Includes annual MIP, which often lasts the life of the loan",
      "Backed by the Federal Housing Administration (FHA)",
    ],
    sections: [
      {
        heading: "How FHA mortgage insurance works",
        text: "FHA loans require two kinds of mortgage insurance: an upfront premium (typically 1.75% of the loan amount, often financed into the loan) and an annual premium (commonly around 0.55%) paid monthly. Unlike conventional PMI, FHA annual MIP usually stays for the life of the loan when you put down less than 10%, so many borrowers refinance into a conventional loan once they build enough equity.",
      },
      {
        heading: "Who FHA loans are best for",
        text: "FHA loans are popular with first-time buyers and borrowers with lower credit scores or limited savings, because they allow a 3.5% down payment and more flexible qualification. Use the calculator to compare the lower upfront cost of an FHA loan against the long-term cost of mortgage insurance versus a conventional loan.",
      },
    ],
  },
  {
    slug: "va-mortgage-calculator",
    label: "VA",
    title: "VA Mortgage Calculator",
    tagline:
      "Estimate your VA loan payment with $0 down and no monthly mortgage insurance for eligible veterans.",
    metaTitle: "VA Mortgage Calculator: $0 Down Payment Estimator (2026)",
    metaDescription:
      "Calculate your VA home loan monthly payment with no down payment and no PMI. Estimate the VA funding fee and total costs for veterans and service members in 2026.",
    keywords: [
      "va mortgage calculator",
      "va loan calculator no down payment",
      "va home loan payment calculator",
    ],
    defaults: { downPayment: 0, pmiRate: 0 },
    highlights: [
      "$0 down payment for eligible veterans and service members",
      "No private mortgage insurance (PMI) required",
      "One-time VA funding fee may apply (can be financed)",
    ],
    sections: [
      {
        heading: "Why VA loans have no PMI",
        text: "VA loans are guaranteed by the U.S. Department of Veterans Affairs, so lenders do not require private mortgage insurance even with no down payment. Instead, most borrowers pay a one-time VA funding fee, which can be rolled into the loan. This typically makes the monthly payment lower than a comparable conventional or FHA loan.",
      },
      {
        heading: "Who qualifies for a VA loan",
        text: "Eligible active-duty service members, veterans, and certain surviving spouses can use VA loan benefits, often more than once. Because there is no down payment requirement and no monthly mortgage insurance, the calculator sets PMI to zero — just remember to budget for the funding fee and normal closing costs.",
      },
    ],
  },
  {
    slug: "refinance-mortgage-calculator",
    label: "Refinance",
    title: "Refinance Mortgage Calculator",
    tagline:
      "See your new monthly payment and how much you could save by refinancing your existing mortgage.",
    metaTitle: "Refinance Mortgage Calculator: Estimate Your Savings (2026)",
    metaDescription:
      "Use our refinance mortgage calculator to estimate your new monthly payment, interest savings, and break-even point when refinancing your home loan in 2026.",
    keywords: [
      "refinance mortgage calculator",
      "mortgage refinance savings calculator",
      "refinance break even calculator",
    ],
    defaults: { downPayment: 80000, termYears: 30 },
    highlights: [
      "Compare your current payment to a new lower-rate loan",
      "Estimate lifetime interest savings",
      "Factor in your remaining balance and new term",
    ],
    sections: [
      {
        heading: "When refinancing makes sense",
        text: "Refinancing replaces your current mortgage with a new one — usually to secure a lower interest rate, shorten your term, switch from an adjustable to a fixed rate, or tap home equity. A common rule of thumb is that refinancing is worth considering when you can lower your rate by roughly 0.5–1% and plan to stay in the home past the break-even point on closing costs.",
      },
      {
        heading: "Understanding your break-even point",
        text: "Refinancing isn't free: expect closing costs of roughly 2–5% of the loan amount. Divide those costs by your monthly savings to find the break-even point in months. If you'll stay in the home longer than that, refinancing typically pays off. Enter your remaining balance as the 'home price' with $0 down to model the new loan.",
      },
    ],
  },
  {
    slug: "home-affordability-calculator",
    label: "Affordability",
    title: "Home Affordability Calculator",
    tagline:
      "Find out how much house you can afford based on your income, debts, and down payment.",
    metaTitle: "How Much House Can I Afford? Home Affordability Calculator 2026",
    metaDescription:
      "Find out how much house you can afford with our home affordability calculator. Enter your income, debts, and down payment to estimate your maximum home price in 2026.",
    keywords: [
      "how much house can i afford calculator",
      "home affordability calculator",
      "mortgage affordability calculator by income",
    ],
    defaults: {},
    highlights: [
      "Based on the 28/36 debt-to-income guideline",
      "Accounts for your existing monthly debts",
      "Shows your maximum home price and monthly payment",
    ],
    sections: [
      {
        heading: "The 28/36 rule explained",
        text: "Lenders commonly use the 28/36 rule: your total housing payment should stay under about 28% of your gross monthly income, and your total debt payments (housing plus car loans, student loans, and credit cards) should stay under 36%. Our affordability calculator works backward from a target debt-to-income ratio to estimate the highest home price that keeps you within that comfortable range.",
      },
      {
        heading: "Beyond the monthly payment",
        text: "Affordability is about more than qualifying for a loan. Remember to budget for closing costs, moving expenses, maintenance (often 1% of the home's value per year), and an emergency fund. Buying near the top of your budget leaves little room for rate changes or life events, so many advisors suggest targeting a payment below your maximum.",
      },
    ],
  },
  {
    slug: "arm-mortgage-calculator",
    label: "ARM",
    title: "Adjustable-Rate Mortgage (ARM) Calculator",
    tagline:
      "Estimate the initial payment on an adjustable-rate mortgage and understand how it can change.",
    metaTitle: "ARM Mortgage Calculator: Adjustable-Rate Payment Estimator (2026)",
    metaDescription:
      "Estimate your adjustable-rate mortgage (ARM) payment, including the low introductory rate period, and learn how 5/1 and 7/1 ARMs work in 2026.",
    keywords: [
      "arm mortgage calculator",
      "adjustable rate mortgage calculator",
      "5/1 arm calculator",
    ],
    defaults: { annualRate: 6.0 },
    highlights: [
      "Lower introductory rate than most fixed-rate loans",
      "Rate adjusts after the fixed period (e.g. 5, 7, or 10 years)",
      "Best when you plan to move or refinance before it adjusts",
    ],
    sections: [
      {
        heading: "How adjustable-rate mortgages work",
        text: "An ARM such as a 5/1 or 7/1 carries a fixed introductory rate for the first 5 or 7 years, then adjusts periodically based on a market index plus a margin. The introductory rate is usually lower than a comparable 30-year fixed rate, which can make the early payments more affordable. This calculator estimates the payment during the initial fixed period.",
      },
      {
        heading: "Weighing the risk of an ARM",
        text: "After the introductory period, your rate — and payment — can rise (subject to periodic and lifetime caps). ARMs tend to make sense if you expect to sell or refinance before the first adjustment, or if you anticipate rates falling. If you plan to stay long term, model a higher rate here to stress-test what your payment could become.",
      },
    ],
  },
];

export function getLoanType(slug: string): LoanType | undefined {
  return LOAN_TYPES.find((t) => t.slug === slug);
}
