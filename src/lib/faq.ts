export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  id: string;
  title: string;
  items: FaqItem[];
};

/** Full FAQ page content — categories with questions numbered from 1 in the UI. */
export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "getting-started",
    title: "Getting Started & Affordability",
    items: [
      {
        question: "How much house can I realistically afford?",
        answer:
          "Lenders typically use the 28/36 rule: housing costs (PITI) ≤ 28% of gross monthly income, and total debts ≤ 36–43% (or higher with strong compensating factors). Your true affordability also depends on lifestyle, savings, and local taxes/insurance. Get pre-approved for a precise number.",
      },
      {
        question:
          "How much money do I need upfront (down payment + closing costs)?",
        answer:
          "Down payment can range from 0% (VA/USDA) to 3–20%+. Closing costs usually run 2–5% of the purchase price. On a $400,000 home, expect $8,000–$20,000 in closing costs plus your down payment.",
      },
      {
        question: "Can I buy a home with little or no money down?",
        answer:
          "Yes. VA and USDA loans allow 0% down for eligible buyers. FHA requires as little as 3.5%. Conventional loans start at 3% for first-time buyers. Down-payment assistance programs can further reduce cash needed.",
      },
      {
        question: "What credit score do I need to qualify for a mortgage?",
        answer:
          "Conventional loans typically want 620+, with best rates at 740+. FHA allows as low as 500–580 (with higher down payment). VA has no official minimum, though many lenders prefer 620+. Higher scores mean better rates.",
      },
      {
        question: "Should I get pre-approved or pre-qualified first?",
        answer:
          "Yes—get pre-approved before serious house hunting. Pre-approval is a deeper review of your finances and carries more weight with sellers than a simple pre-qualification.",
      },
      {
        question:
          "What is the difference between pre-qualification and pre-approval?",
        answer:
          "Pre-qualification is a rough estimate based on self-reported info. Pre-approval involves credit checks, income/asset verification, and results in a formal letter that strengthens your offers.",
      },
      {
        question: "How does my debt-to-income (DTI) ratio affect approval?",
        answer:
          "Most lenders prefer DTI under 36–43%. Higher ratios are possible with strong credit, reserves, or government loans, but they can limit the loan amount or raise rates.",
      },
      {
        question:
          "Are there special loan programs or assistance for first-time buyers?",
        answer:
          "Yes—many states, cities, and lenders offer down-payment grants, deferred loans, low-interest programs, and Mortgage Credit Certificates. FHA, HomeReady, and Home Possible loans also favor first-time buyers.",
      },
      {
        question:
          "Can I still qualify as a “first-time buyer” if I’ve owned before?",
        answer:
          "Yes, in many cases. HUD and many programs define a first-time buyer as someone who hasn’t owned a primary residence in the past three years.",
      },
      {
        question: "Is now a good time to buy a home?",
        answer:
          "It depends on your personal finances, local market, and long-term plans—not national headlines. If you can comfortably afford the payments and plan to stay several years, it can make sense regardless of rate or price cycles.",
      },
    ],
  },
  {
    id: "loan-types",
    title: "Loan Types, Rates & Costs",
    items: [
      {
        question:
          "Which type of mortgage is best for me (conventional, FHA, VA, USDA, ARM)?",
        answer:
          "It depends on credit, down payment, military status, location, and how long you’ll keep the loan. Conventional often has the best rates with strong credit; FHA/VA/USDA help with lower credit or down payments.",
      },
      {
        question: "What is the difference between interest rate and APR?",
        answer:
          "The interest rate is the cost of borrowing the principal. APR includes the rate plus most fees and points, giving a better picture of the true yearly cost.",
      },
      {
        question: "Should I choose a 15-year or 30-year mortgage?",
        answer:
          "15-year loans have higher payments but much less total interest and build equity faster. 30-year loans offer lower payments and more flexibility. Most buyers choose 30-year.",
      },
      {
        question: "Fixed-rate vs. adjustable-rate (ARM)—which is better?",
        answer:
          "Fixed rates stay the same for the life of the loan (predictable). ARMs start lower but can rise after the fixed period. ARMs suit buyers who plan to move or refinance within a few years.",
      },
      {
        question: "How do discount points work, and should I pay them?",
        answer:
          "One point costs 1% of the loan amount and typically lowers the rate by about 0.25%. Pay them only if you’ll keep the loan long enough to break even on the upfront cost.",
      },
      {
        question:
          "What is private mortgage insurance (PMI) or FHA MIP, and when can I cancel it?",
        answer:
          "PMI (conventional) or MIP (FHA) protects the lender when you put less than 20% down. Conventional PMI can usually be canceled at 20% equity. FHA MIP often lasts the life of the loan (or 11 years with ≥10% down).",
      },
      {
        question: "What are typical closing costs, and who pays them?",
        answer:
          "Usually 2–5% of the purchase price (lender fees, title, appraisal, prepaids, taxes). Buyers typically pay most, though sellers often contribute via concessions.",
      },
      {
        question:
          "Are there hidden or ongoing costs of homeownership I should budget for?",
        answer:
          "Yes—property taxes, homeowners insurance, HOA fees, maintenance (often 1–2% of home value yearly), utilities, and potential special assessments.",
      },
      {
        question:
          "Can I use gift funds or retirement money for the down payment?",
        answer:
          "Gift funds from family are widely accepted with proper documentation. Retirement withdrawals are possible but may trigger taxes/penalties—consult a tax advisor.",
      },
      {
        question: "How long is a mortgage rate lock good for?",
        answer:
          "Typically 30–60 days (sometimes longer for a fee). Extensions are possible but usually cost extra.",
      },
    ],
  },
  {
    id: "professionals",
    title: "Working with Professionals",
    items: [
      {
        question: "Do I need a real estate agent / buyer’s agent?",
        answer:
          "Not legally required, but highly recommended. A good buyer’s agent provides market knowledge, negotiation skill, and process guidance.",
      },
      {
        question: "How are buyer’s agents compensated now?",
        answer:
          "Since the 2024 NAR changes, compensation is negotiated directly between buyer and agent via a written agreement. Sellers may still offer to cover it, but it’s no longer automatically advertised on the MLS.",
      },
      {
        question: "How do I choose the right realtor?",
        answer:
          "Interview several. Ask about recent local transactions, communication style, negotiation experience, and how they handle challenges. Check references.",
      },
      {
        question: "How do I choose the right mortgage lender or broker?",
        answer:
          "Compare Loan Estimates from at least 3–4 lenders on the same day. Look at rate, APR, fees, and service reputation—not just the advertised rate.",
      },
      {
        question: "Should I use the same lender the realtor recommends?",
        answer:
          "You can, but always shop around. You’re not obligated to use any recommended lender.",
      },
      {
        question: "What questions should I ask my lender?",
        answer:
          "Ask about loan options for your situation, total closing costs, rate-lock terms, float-down options, overlays, and timeline.",
      },
      {
        question:
          "What questions should I ask my realtor about a specific property?",
        answer:
          "Ask about days on market, price reductions, known issues, seller motivation, included items, taxes, HOA, and recent comps.",
      },
    ],
  },
  {
    id: "house-hunting",
    title: "House Hunting & Evaluating Properties",
    items: [
      {
        question: "How many homes should I look at before making an offer?",
        answer:
          "There’s no fixed number—enough to understand the local market and your preferences (often 5–15). Quality of matches matters more than quantity.",
      },
      {
        question: "What should I look for during a showing or open house?",
        answer:
          "Layout, natural light, condition of major systems, signs of water damage, neighborhood noise/traffic, and whether it fits your daily life.",
      },
      {
        question:
          "How important are school districts, HOA fees, and neighborhood trends?",
        answer:
          "Very important for resale value and quality of life. Even if you don’t have children, strong schools help future value. High HOA fees affect affordability.",
      },
      {
        question: "What is included in the sale (appliances, fixtures, etc.)?",
        answer:
          "Whatever is written in the contract. Clarify appliances, window treatments, light fixtures, and any personal property in writing.",
      },
      {
        question:
          "How old are the major systems (roof, HVAC, plumbing, electrical)?",
        answer:
          "Ask for ages and recent service records. These are among the most expensive items to replace.",
      },
      {
        question:
          "Are there any known issues, repairs, or past problems with the property?",
        answer:
          "Review the seller’s disclosure carefully and follow up on anything flagged. Always get a professional inspection.",
      },
      {
        question:
          "What are the property taxes and insurance costs for this home?",
        answer:
          "Request the most recent tax bill and get insurance quotes early. Taxes can be reassessed after sale in some areas.",
      },
      {
        question: "Is the home in a flood zone or high-risk area?",
        answer:
          "Check FEMA flood maps and ask about past claims. Flood insurance is required in high-risk zones and can be costly.",
      },
    ],
  },
  {
    id: "offers",
    title: "Making an Offer & Negotiating",
    items: [
      {
        question: "How much should I offer relative to the asking price?",
        answer:
          "It depends on local market conditions, comps, property condition, and competition. Your agent should guide you with recent data.",
      },
      {
        question: "What contingencies should I include in my offer?",
        answer:
          "Common ones: inspection, appraisal, financing, and sometimes sale of current home. Stronger markets may require fewer contingencies.",
      },
      {
        question: "Can I negotiate seller concessions or a rate buydown?",
        answer:
          "Yes—especially in balanced or buyer-friendly markets. Sellers can contribute to closing costs or pay for temporary/permanent rate buydowns (subject to loan-program limits).",
      },
      {
        question: "How much earnest money is typical, and is it refundable?",
        answer:
          "Usually 1–3% of the purchase price. It is refundable if you properly terminate under a contingency; otherwise you may forfeit it.",
      },
      {
        question: "What happens if there are multiple offers?",
        answer:
          "Sellers choose the strongest overall package (price, terms, contingencies, financing strength, closing timeline). Escalation clauses and larger earnest money can help.",
      },
    ],
  },
  {
    id: "inspections",
    title: "Inspections, Appraisal & Underwriting",
    items: [
      {
        question: "Do I need a home inspection, and what does it cover?",
        answer:
          "Strongly recommended. A general inspection covers structure, systems, and safety. Specialized inspections (septic, radon, pest, etc.) may be added.",
      },
      {
        question: "What if the inspection finds problems?",
        answer:
          "You can request repairs, credits, a price reduction, or walk away (if you have an inspection contingency).",
      },
      {
        question: "What happens if the appraisal comes in low?",
        answer:
          "Options include renegotiating the price, making up the difference in cash, challenging the appraisal, or walking away (with an appraisal contingency).",
      },
      {
        question: "How long does the underwriting / loan approval process take?",
        answer:
          "Typically 30–45 days from contract to closing, with the core underwriting review often taking 1–3 weeks once the full file is submitted. Clean files move faster.",
      },
      {
        question: "What documents will the lender need from me?",
        answer:
          "Pay stubs, W-2s/tax returns, bank statements, ID, employment verification, and explanations for large deposits or credit issues. Self-employed buyers need more.",
      },
    ],
  },
  {
    id: "closing",
    title: "Closing & Moving",
    items: [
      {
        question: "What happens at closing, and what do I need to bring?",
        answer:
          "You’ll sign the final loan and title documents, pay remaining funds, and receive the keys. Bring government ID and any required certified funds.",
      },
      {
        question: "When do I get the keys?",
        answer:
          "Usually at or right after closing, once the deed is recorded and funds have cleared (same day or next business day in many areas).",
      },
      {
        question: "What is title insurance, and do I need it?",
        answer:
          "It protects against ownership defects. Lender’s title insurance is required; owner’s title insurance is optional but strongly recommended.",
      },
      {
        question: "How soon can I move in after closing?",
        answer:
          "Typically right away unless the contract specifies a later occupancy date or rent-back for the seller.",
      },
    ],
  },
  {
    id: "repeat-buyers",
    title: "Repeat / Move-Up Buyer Focus",
    items: [
      {
        question:
          "Should I sell my current home before buying the next one (or buy first)?",
        answer:
          "Selling first gives certainty of proceeds and avoids carrying two mortgages, but can leave you temporarily houseless. Buying first (or using a contingent offer) provides housing continuity but adds risk and potential bridge financing needs. Keeping the current home as a rental is another option if numbers work.",
      },
    ],
  },
];

/** Flat list of all FAQ items (e.g. for FAQPage JSON-LD). */
export function getAllFaqItems(): FaqItem[] {
  return FAQ_CATEGORIES.flatMap((c) => c.items);
}
