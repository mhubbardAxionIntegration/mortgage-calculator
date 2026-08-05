/**
 * Loan-type data powering programmatic "/calculators/[type]" pages.
 * Each type tweaks calculator defaults and supplies substantial unique SEO copy
 * (AdSense quality: avoid thin duplicated paragraphs).
 */
import type { MortgageInputs } from "./mortgage";
import type { Faq } from "./faqs";

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
  /** Long-form explanatory sections. */
  sections: LoanTypeContent[];
  /** Extra checklist unique to this loan type. */
  checklist: string[];
  /** Comparison rows for an on-page table. */
  comparison: { label: string; value: string }[];
  /** Real editorial FAQs (not pasted section headings). */
  faqs: Faq[];
  /** Optional FAQ section intro overriding the generic PITI blurb. */
  faqIntro: string;
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
      "Calculate your FHA loan monthly payment including upfront and annual mortgage insurance (MIP). See how a 3.5% down payment affects your costs, who qualifies, and when refinancing out of FHA makes sense in 2026.",
    keywords: [
      "fha mortgage calculator",
      "fha loan calculator with mip",
      "fha payment calculator 3.5 down",
    ],
    defaults: { downPayment: 0.035 * 350000, pmiRate: 0.55 },
    highlights: [
      "Models upfront MIP and monthly annual MIP separately",
      "Option to finance UFMIP into the loan (like most FHA borrowers)",
      "Shows when MIP is likely to last for the life of the loan",
    ],
    comparison: [
      { label: "Typical minimum down payment", value: "3.5% (580+ FICO)" },
      { label: "Monthly mortgage insurance", value: "Annual MIP (often ~0.55%)" },
      { label: "Upfront insurance", value: "UFMIP ~1.75% (often financed)" },
      { label: "Best fit", value: "Lower savings or credit flexibility" },
      { label: "MIP removal", value: "Usually refinance or 10%+ down rules" },
    ],
    checklist: [
      "Confirm the property meets FHA appraisal and safety standards.",
      "Budget for both upfront MIP and the monthly annual MIP.",
      "Compare a conventional 3–5% down quote with PMI vs. FHA total cost over 5–7 years.",
      "Ask when you could refinance to conventional once you have ~20% equity.",
      "Use gift funds documentation rules if family is helping with the down payment.",
    ],
    sections: [
      {
        heading: "How FHA mortgage insurance works",
        text: "FHA loans require two kinds of mortgage insurance: an upfront premium (typically 1.75% of the base loan amount, often financed into the loan) and an annual premium (commonly around 0.55% for many purchase scenarios) paid monthly through escrow. Unlike conventional PMI, FHA annual MIP usually stays for the life of the loan when you put down less than 10%. That longevity is why many borrowers treat FHA as a bridge into homeownership and plan a later refinance into a conventional loan once equity and credit support better pricing.",
      },
      {
        heading: "Who FHA loans are best for",
        text: "FHA loans are popular with first-time buyers and borrowers with limited savings or credit scores that would price poorly on conventional guidelines, because they allow a 3.5% down payment and more flexible qualification in many cases. They are not automatically cheaper every month — MIP can make the payment higher than a strong-credit conventional loan with modest PMI. Use this calculator to compare the lower cash-to-close of FHA against the long-term cost of mortgage insurance versus a conventional alternative at the same purchase price.",
      },
      {
        heading: "How this FHA calculator models MIP",
        text: "Enter the purchase price, down payment, rate, and term, then set upfront and annual MIP percentages. Toggle whether upfront MIP is financed: when it is, the loan balance grows by UFMIP and principal & interest rises accordingly, while monthly annual MIP is still calculated on the base loan (price minus down payment). That matches how most FHA borrowers close. Rates shown are illustrative defaults — your Loan Estimate may differ with credit, LTV, and current HUD MIP tables.",
      },
      {
        heading: "FHA vs conventional: decide with a timeline",
        text: "If you will likely stay five or more years and can reach 20% equity, model both an FHA payment today and a future conventional refinance. If you need the lowest possible cash to close and your conventional pricing is expensive, FHA may win short-term even with MIP. Always compare Loan Estimates with the same purchase price, prepaid items, and discount-point assumptions so you are not mixing apples and oranges.",
      },
    ],
    faqIntro:
      "Answers about FHA mortgage insurance, down payments, and how this calculator models MIP — not generic PITI tips.",
    faqs: [
      {
        question: "Does FHA mortgage insurance ever go away?",
        answer:
          "Often not on low-down purchases. When you put down less than 10%, annual MIP usually lasts for the life of the FHA loan unless you refinance into another product. With 10% or more down, MIP may drop off after a set number of years under current rules — confirm the duration on your Loan Estimate.",
      },
      {
        question: "Is upfront MIP the same as monthly MIP?",
        answer:
          "No. Upfront MIP (often about 1.75% of the base loan) is charged once and is frequently financed into the loan. Annual MIP is a separate premium collected monthly through escrow. This calculator shows both lines so you can see cash-to-close vs payment impact.",
      },
      {
        question: "When is FHA cheaper than conventional?",
        answer:
          "FHA can win on credit flexibility and cash to close. Conventional can win long-term if PMI cancels near 20% equity and your rate is competitive. Compare a 5–7 year hold: month-1 payment, whether insurance can fall off, and refinance plans — not headline rates alone.",
      },
      {
        question: "What should I check before choosing an FHA loan?",
        answer:
          "Confirm the property meets FHA appraisal standards, budget for both UFMIP and annual MIP, compare a conventional quote with PMI over the same timeline, and ask when a refinance to conventional might make sense once equity and credit improve.",
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
      "Calculate your VA home loan monthly payment with no down payment and no PMI. Estimate how the VA funding fee, entitlement, and residual income rules affect total cost for veterans and service members in 2026.",
    keywords: [
      "va mortgage calculator",
      "va loan calculator no down payment",
      "va home loan payment calculator",
    ],
    defaults: { downPayment: 0, pmiRate: 0 },
    highlights: [
      "Models the one-time VA funding fee with first-use vs subsequent tiers",
      "Toggle disability exemption and finance-fee into the loan",
      "No monthly PMI — escrow still includes taxes and insurance",
    ],
    comparison: [
      { label: "Typical down payment", value: "$0 for eligible borrowers" },
      { label: "Monthly mortgage insurance", value: "None (no PMI/MIP)" },
      { label: "Main extra cost", value: "One-time VA funding fee" },
      { label: "Best fit", value: "Eligible veterans & service members" },
      { label: "Underwriting focus", value: "Residual income + COE" },
    ],
    checklist: [
      "Obtain your Certificate of Eligibility (COE) early.",
      "Ask whether you are exempt from the funding fee (e.g., certain disability ratings).",
      "Confirm remaining entitlement if you already used a VA loan.",
      "Budget closing costs separately — $0 down does not mean $0 cash to close.",
      "Compare a VA quote to a conventional 5–20% down scenario if you have cash available.",
    ],
    sections: [
      {
        heading: "Why VA loans have no PMI",
        text: "VA loans are guaranteed by the U.S. Department of Veterans Affairs, so lenders do not require private mortgage insurance even with no down payment. Instead, most borrowers pay a one-time VA funding fee, which can often be rolled into the loan. That structure typically makes the monthly payment lower than a comparable conventional loan with PMI or an FHA loan with monthly MIP — especially valuable when preserving cash after move-in.",
      },
      {
        heading: "Who qualifies for a VA loan",
        text: "Eligible active-duty service members, veterans, and certain surviving spouses can use VA loan benefits, often more than once if entitlement remains. Lenders still underwrite residual income, credit, and the property’s VA appraisal requirements. Because there is no down payment requirement and no monthly mortgage insurance, remember to budget for the funding fee (unless exempt) and normal closing costs.",
      },
      {
        heading: "How this calculator models the funding fee",
        text: "Choose first-use vs subsequent use and enter any voluntary down payment. The tool applies common purchase funding-fee percentage tiers (and a 0% rate when you mark a disability exemption), then optionally finances the fee into the loan balance before calculating principal and interest. Percentages are illustrative — confirm the current VA schedule and your COE status with a VA-experienced lender.",
      },
      {
        heading: "When a down payment still helps",
        text: "Even though VA allows $0 down, a voluntary down payment can reduce the loan amount, move you into a lower funding-fee tier in some cases, and improve offer strength in competitive markets. Run the calculator at $0 down and again with 5–10% down before you decide how much cash to bring to closing.",
      },
    ],
    faqIntro:
      "Questions about the VA funding fee, entitlement, and $0-down payments for eligible borrowers.",
    faqs: [
      {
        question: "Do VA loans have monthly mortgage insurance?",
        answer:
          "No. VA loans do not charge PMI or FHA-style monthly MIP. The main program cost for most borrowers is a one-time funding fee (unless you are exempt), which can often be financed into the loan.",
      },
      {
        question: "How is the VA funding fee calculated?",
        answer:
          "The fee is a percentage of the base loan amount. The percentage depends on first-use vs subsequent use and how much you put down. Disability-related exemptions can set the fee to zero. This calculator uses common purchase tiers as editable educational defaults — your Loan Estimate reflects the official schedule.",
      },
      {
        question: "Does $0 down mean $0 cash to close?",
        answer:
          "No. You still need earnest money in many markets, prepaid taxes/insurance, and other closing costs unless covered by seller credits or lender credits. Model the monthly payment here, then review cash-to-close on the Loan Estimate separately.",
      },
      {
        question: "What is a Certificate of Eligibility (COE)?",
        answer:
          "A COE documents your VA loan entitlement for lenders. Get it early, especially if you have used a VA loan before and need to confirm remaining entitlement for the price range you want.",
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
      "Use our refinance mortgage calculator to estimate your new monthly payment, interest savings, and break-even point when refinancing your home loan — including closing-cost math for 2026.",
    keywords: [
      "refinance mortgage calculator",
      "mortgage refinance savings calculator",
      "refinance break even calculator",
    ],
    defaults: { downPayment: 80000, termYears: 30 },
    highlights: [
      "Compare current vs new principal & interest side by side",
      "Break-even months from closing costs ÷ monthly savings",
      "Shows lifetime interest on both paths — not payment alone",
    ],
    comparison: [
      { label: "Rate-and-term refi goal", value: "Lower payment or shorter term" },
      { label: "Cash-out refi goal", value: "Access equity (higher balance)" },
      { label: "Typical closing costs", value: "About 2–5% of loan amount" },
      { label: "Break-even focus", value: "Months until costs are recovered" },
      { label: "Watch-out", value: "Resetting a 30-year clock" },
    ],
    checklist: [
      "Gather your current balance, rate, remaining term, and monthly P&I.",
      "Get a Loan Estimate and list all lender and third-party fees.",
      "Divide total closing costs by monthly savings for break-even months.",
      "Decide whether you want a lower payment, shorter term, or cash-out.",
      "Avoid extending the loan so far that lifetime interest rises despite a lower rate.",
    ],
    sections: [
      {
        heading: "When refinancing makes sense",
        text: "Refinancing replaces your current mortgage with a new one — usually to secure a lower interest rate, shorten your term, switch from an adjustable to a fixed rate, or tap home equity. A common rule of thumb is that refinancing is worth considering when you can lower your rate by roughly 0.5–1% and plan to stay past the break-even point on closing costs. The better test is personalized math: new payment, costs, and how long you will keep the loan.",
      },
      {
        heading: "Understanding your break-even point",
        text: "Refinancing isn't free: expect closing costs of roughly 2–5% of the loan amount unless you take a lender credit in exchange for a higher rate. Divide those costs by your monthly savings to find the break-even point in months. If you will stay longer than that, the refinance typically pays off on payment alone — then check total interest, because restarting a 30-year term can erase savings if you already had few years left.",
      },
      {
        heading: "How to use this refinance calculator",
        text: "Enter your remaining balance, current rate, and months left, then the new rate, term, and estimated closing costs. The tool computes current vs new P&I, monthly savings, break-even months, and lifetime interest on both paths. Optional cash-out increases the new loan amount. Taxes and insurance are intentionally omitted so break-even stays focused on the refinance trade-off — add escrow separately if your new Loan Estimate changes those items.",
      },
      {
        heading: "Rate-and-term vs cash-out",
        text: "Rate-and-term refinances focus on payment, rate type, or term length. Cash-out refinances add debt and often price slightly worse. If you need cash for a finite project, compare a cash-out refinance against a HELOC or home equity loan so you do not put your primary mortgage rate at risk for a short-term need.",
      },
    ],
    faqIntro:
      "Break-even math, closing costs, and when a lower payment still fails the lifetime-interest test.",
    faqs: [
      {
        question: "How do I calculate refinance break-even?",
        answer:
          "Divide total closing costs by your monthly principal-and-interest savings. If costs are $6,000 and you save $200/month, break-even is 30 months. Stay longer than that for payment savings to cover fees — then still check whether a longer term increased lifetime interest.",
      },
      {
        question: "Why can my payment drop but interest go up?",
        answer:
          "Restarting a 30-year term stretches amortization. A lower rate can cut the monthly bill while you pay interest for more years. This calculator shows lifetime interest on the current path vs the new loan so you do not refinance on payment alone.",
      },
      {
        question: "Should I do a cash-out refinance?",
        answer:
          "Cash-out increases the balance and often prices worse than rate-and-term. For a short-term cash need, compare a HELOC or home equity loan so you do not put your entire first-mortgage rate at risk.",
      },
      {
        question: "What inputs do I need before using this tool?",
        answer:
          "Current remaining balance, current rate, months left, a realistic new rate and term, and a full closing-cost estimate from a Loan Estimate — not just an advertised rate.",
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
      "Find out how much house you can afford with our home affordability calculator. Enter your income, debts, and down payment to estimate your maximum home price using DTI guidelines — plus real-world costs beyond the mortgage in 2026.",
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
    comparison: [
      { label: "Housing DTI guideline", value: "~28% of gross income" },
      { label: "Total DTI guideline", value: "~36% of gross income" },
      { label: "Includes in payment", value: "PITI + PMI + HOA (as entered)" },
      { label: "Still budget separately", value: "Maintenance, utilities, moving" },
      { label: "Best use", value: "Set a ceiling before house hunting" },
    ],
    checklist: [
      "Use gross monthly income from stable sources you can document.",
      "Include car loans, student loans, and minimum credit-card payments.",
      "Add a realistic tax and insurance estimate for your target ZIP.",
      "Leave room under the maximum for maintenance and emergencies.",
      "Get pre-approved so your shopping range matches lender reality.",
    ],
    sections: [
      {
        heading: "The 28/36 rule explained",
        text: "Lenders commonly use the 28/36 rule: your total housing payment should stay under about 28% of your gross monthly income, and your total debt payments (housing plus car loans, student loans, and credit cards) should stay under 36%. Some loan programs allow higher DTI with compensating factors, but stretching to the underwriting maximum is how buyers become house-poor. Our affordability calculator works backward from a target debt-to-income ratio to estimate the highest home price that keeps you within a comfortable range.",
      },
      {
        heading: "Beyond the monthly payment",
        text: "Affordability is about more than qualifying for a loan. Remember to budget for closing costs, moving expenses, maintenance (often about 1% of the home's value per year), utilities, and an emergency fund. Buying near the top of your approval leaves little room for rate changes, repairs, or life events, so many households target a payment below the lender’s maximum.",
      },
      {
        heading: "How to use this calculator effectively",
        text: "Start with take-home realities, not just gross income rules. Enter debts accurately, then stress-test a higher interest rate and higher insurance quote. If the affordable price collapses under a 1% rate bump, narrow your search now rather than after you are emotionally attached to a listing. Pair this tool with a state calculator when taxes and insurance differ sharply from national defaults.",
      },
      {
        heading: "Income, debts, and pre-approval",
        text: "Self-employed borrowers, recent job changes, and variable overtime need extra documentation — the calculator cannot see underwriting nuances. Use it to set a personal ceiling, then let a licensed loan officer translate that into a pre-approval that sellers will trust.",
      },
    ],
    faqIntro:
      "How much house you can afford under DTI guidelines — and why lender maximums are not comfort ceilings.",
    faqs: [
      {
        question: "What is the 28/36 rule?",
        answer:
          "A common guideline: housing costs stay under about 28% of gross monthly income, and total debt payments under about 36%. Some programs allow higher ratios with compensating factors, but stretching to the underwriting max is how buyers become house-poor.",
      },
      {
        question: "Why is my pre-approval higher than this calculator?",
        answer:
          "Lenders may use different DTI caps, residual-income tests, or compensating factors. This tool targets a comfortable ceiling. Prefer the lower number when planning — leave room for maintenance, utilities, and rate or insurance surprises.",
      },
      {
        question: "Should I include taxes and insurance?",
        answer:
          "Yes. Affordability without escrow is misleading. Enter realistic tax and insurance for the ZIP you will shop, or use the main calculator’s state selector for indicative defaults before you fine-tune.",
      },
      {
        question: "What debts count toward DTI?",
        answer:
          "Typically car loans, student loans, personal loans, and minimum credit-card payments, plus the projected housing payment. Child support and other recurring obligations may also count — ask your loan officer what underwriting includes.",
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
      "Estimate your adjustable-rate mortgage (ARM) payment during the introductory period, learn how 5/1 and 7/1 ARMs adjust, and stress-test higher rates before you choose an ARM in 2026.",
    keywords: [
      "arm mortgage calculator",
      "adjustable rate mortgage calculator",
      "5/1 arm calculator",
    ],
    defaults: { annualRate: 6.0 },
    highlights: [
      "Side-by-side intro payment vs a higher post-reset stress rate",
      "Set intro years for common 5/1, 7/1, and 10/1 structures",
      "Budget for the payment jump — not just the teaser rate",
    ],
    comparison: [
      { label: "Common structures", value: "5/1, 7/1, 10/1 ARMs" },
      { label: "Intro period", value: "Fixed rate for first 5–10 years" },
      { label: "Then", value: "Adjusts with index + margin (with caps)" },
      { label: "Best fit", value: "Shorter expected ownership horizon" },
      { label: "Main risk", value: "Payment rise after reset" },
    ],
    checklist: [
      "Know the index, margin, initial cap, periodic cap, and lifetime cap.",
      "Stress-test the payment at the lifetime cap, not just today’s teaser rate.",
      "Align the fixed period with how long you expect to keep the home or loan.",
      "Compare the intro ARM payment to a 30-year fixed on the same day.",
      "Ask what happens at the first adjustment if you do not refinance.",
    ],
    sections: [
      {
        heading: "How adjustable-rate mortgages work",
        text: "An ARM such as a 5/1 or 7/1 carries a fixed introductory rate for the first 5 or 7 years, then adjusts periodically based on a market index plus a margin. The introductory rate is usually lower than a comparable 30-year fixed rate, which can make early payments more affordable. This calculator shows the intro payment next to a stress payment at a higher rate you choose (often your lifetime cap or a +2–5% bump) so you can budget for the reset, not just the teaser.",
      },
      {
        heading: "Weighing the risk of an ARM",
        text: "After the introductory period, your rate — and payment — can rise (subject to periodic and lifetime caps). ARMs tend to make sense if you expect to sell or refinance before the first adjustment, or if you can comfortably afford a higher payment later. If you plan to stay long term with limited refinance flexibility, set the stress rate near your lifetime cap and confirm you can still afford that payment before choosing the lower intro payment.",
      },
      {
        heading: "Caps, margins, and indexes (why the fine print matters)",
        text: "Two ARMs with the same start rate can behave very differently after reset. The margin is added to the index; caps limit how far the rate can jump at the first adjustment, at later adjustments, and over the loan’s life. Ask for these numbers in writing and set this calculator’s stress rate to each cap so you understand the worst case you are contractually allowing.",
      },
      {
        heading: "ARM vs fixed in today’s decision frame",
        text: "Choose an ARM for a planned short horizon and a fixed loan when payment certainty matters more than the lowest payment today. Run both quotes with identical loan amounts and closing-cost assumptions. If the ARM savings over the fixed period do not exceed the risk you are taking after reset, the fixed loan may be the better lifestyle fit even when the ARM looks cheaper on month one.",
      },
    ],
    faqIntro:
      "Introductory ARM payments, lifetime caps, and how to stress-test the payment after reset.",
    faqs: [
      {
        question: "What does 5/1 or 7/1 ARM mean?",
        answer:
          "The first number is years the start rate stays fixed; the second is how often the rate can adjust afterward (often annually). A 5/1 is fixed for five years, then typically adjusts once per year subject to caps.",
      },
      {
        question: "What rate should I use for the stress test?",
        answer:
          "Start with your lifetime cap from the Loan Estimate, or add 2–5 percentage points to the intro rate if caps are unclear. Budget for that payment — not only the teaser — before you choose an ARM.",
      },
      {
        question: "When does an ARM make sense?",
        answer:
          "When you expect to sell or refinance before the first adjustment, or you can comfortably afford the stress payment afterward. Long-horizon owners who need payment certainty often prefer a fixed rate even if the ARM starts lower.",
      },
      {
        question: "Does this tool simulate every future adjustment?",
        answer:
          "No. It compares today’s intro payment with a single higher stress rate on the current balance — a conservative budgeting check. Actual resets follow your index, margin, caps, and remaining schedule.",
      },
    ],
  },
];

export function getLoanType(slug: string): LoanType | undefined {
  return LOAN_TYPES.find((t) => t.slug === slug);
}
