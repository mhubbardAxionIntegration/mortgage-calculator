import { SITE } from "./site";

export interface Faq {
  question: string;
  answer: string;
}

/** Core FAQs used on the main calculator page and in FAQPage schema. */
export const MORTGAGE_FAQS: Faq[] = [
  {
    question: "How is a monthly mortgage payment calculated?",
    answer:
      "Your monthly mortgage payment is built from principal and interest plus escrow items. Principal and interest use the loan amount, interest rate, and term in the standard amortization formula M = P · r(1+r)ⁿ / ((1+r)ⁿ − 1), where r is the monthly rate and n is the number of payments. We then add monthly property taxes, homeowners insurance, any private mortgage insurance (PMI), and HOA dues to get your full PITI payment.",
  },
  {
    question: "What is included in PITI?",
    answer:
      "PITI stands for Principal, Interest, Taxes, and Insurance — the four main parts of a typical mortgage payment. Our calculator also separates PMI and HOA dues so you can see the complete monthly cost of owning the home, not just the loan payment.",
  },
  {
    question: "When do I have to pay PMI?",
    answer:
      "Private mortgage insurance is generally required on conventional loans when your down payment is less than 20% of the home's value. PMI typically costs about 0.3%–1.5% of the loan amount per year and can be removed once you reach roughly 20% equity. Our calculator automatically adds PMI when your down payment is under 20% and removes it at 20% or more.",
  },
  {
    question: "How much house can I afford?",
    answer:
      "A common guideline is the 28/36 rule: keep your total housing payment under about 28% of your gross monthly income and all debt payments under 36%. Use our home affordability calculator to enter your income, monthly debts, and down payment and get an estimated maximum home price and payment.",
  },
  {
    question: "Should I choose a 15-year or 30-year mortgage?",
    answer:
      "A 15-year mortgage has higher monthly payments but a lower interest rate and far less total interest, building equity faster. A 30-year mortgage has lower monthly payments and more flexibility, but costs more interest over time. Try both terms in the calculator to compare the monthly payment and total interest side by side.",
  },
  {
    question: "How does my down payment affect my mortgage?",
    answer:
      "A larger down payment lowers your loan amount, monthly payment, and total interest, and a down payment of 20% or more lets you avoid PMI entirely. A smaller down payment makes buying possible sooner but usually means a higher payment plus mortgage insurance until you build equity.",
  },
  {
    question: "Are the interest rates in this calculator current?",
    answer:
      `The calculator uses an indicative national average rate (around ${SITE.defaultRate}% as of ${SITE.ratesAsOf}) as a starting point, but your actual rate depends on your credit score, loan type, down payment, and the lender. Enter a quote from your own lender for the most accurate estimate.`,
  },
];
