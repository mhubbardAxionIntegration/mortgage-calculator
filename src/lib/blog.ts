import { SITE } from "./site";

export type Block =
  | { type: "p"; html: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export interface BlogCategory {
  slug: string;
  name: string;
  description: string;
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  { slug: "rates", name: "Rates & Market", description: "Where mortgage rates are headed and what moves them." },
  { slug: "affordability", name: "Affordability", description: "How much house you can afford and how to budget for it." },
  { slug: "loan-types", name: "Loan Types", description: "Comparing FHA, VA, conventional, ARM, and fixed-rate loans." },
  { slug: "refinancing", name: "Refinancing", description: "When and how to refinance your mortgage." },
  { slug: "guides", name: "Buying Guides", description: "Step-by-step guidance for every stage of buying a home." },
];

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  /** Category slug; must match a BLOG_CATEGORIES entry. */
  category: string;
  /** ISO date strings. */
  published: string;
  updated: string;
  readingMinutes: number;
  tags: string[];
  /** Calculator slugs to surface as related tools / internal links. */
  relatedCalculators: { href: string; label: string }[];
  body: Block[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "current-mortgage-rates-2026",
    title: "Current Mortgage Rates in 2026: What Homebuyers Should Expect",
    description:
      "An overview of where mortgage rates stand in 2026, what moves them, and how to get the best rate on your home loan.",
    excerpt:
      "Where mortgage rates stand in 2026, what drives them up and down, and the practical steps that get you a lower rate.",
    category: "rates",
    published: "2026-01-15",
    updated: "2026-06-01",
    readingMinutes: 6,
    tags: ["Rates", "Market"],
    relatedCalculators: [
      { href: "/mortgage-calculator", label: "Mortgage Calculator" },
      { href: "/calculators/refinance-mortgage-calculator", label: "Refinance Calculator" },
    ],
    body: [
      { type: "p", html: `Mortgage rates are the single biggest lever on what your home costs over time. In 2026, the national average for a 30-year fixed loan has hovered around ${SITE.defaultRate}%, though your personal rate can land well above or below that depending on your profile. This guide explains what's behind today's rates and how to position yourself for the best possible offer.` },
      { type: "h2", text: "What moves mortgage rates" },
      { type: "p", html: "Mortgage rates aren't set by any single institution. They reflect a mix of forces, the most important being:" },
      { type: "ul", items: [
        "The Federal Reserve's policy rate, which influences short-term borrowing costs across the economy.",
        "The 10-year Treasury yield, which mortgage rates tend to track closely.",
        "Inflation expectations — higher expected inflation generally pushes rates up.",
        "The bond market's appetite for mortgage-backed securities.",
        "Your own credit profile, loan type, and down payment.",
      ] },
      { type: "h2", text: "Why your rate differs from the headline number" },
      { type: "p", html: "The rates you see advertised are best-case scenarios. Lenders price your loan based on risk, so a 760+ credit score, a 20% down payment, and a conforming loan amount will earn a noticeably lower rate than a 640 score with 5% down. Even the type of property and whether it's your primary residence matter." },
      { type: "h2", text: "How to get a lower rate in 2026" },
      { type: "ul", items: [
        "Raise your credit score before applying — even a 20-point jump can move your rate.",
        "Save for a larger down payment to cut both your rate and your PMI.",
        "Compare at least three lenders; rate spreads of 0.25–0.5% between lenders are common.",
        "Consider paying discount points if you'll stay in the home long enough to break even.",
        "Lock your rate once you're under contract to protect against increases.",
      ] },
      { type: "p", html: "Small differences add up fast. On a $350,000 loan, dropping your rate by a single percentage point can save you roughly $200 a month and tens of thousands over the life of the loan. Plug your own numbers into our <a href=\"/mortgage-calculator\">mortgage calculator</a> to see exactly how sensitive your payment is, and if you already own a home, our <a href=\"/calculators/refinance-mortgage-calculator\">refinance calculator</a> shows whether today's rates make refinancing worthwhile." },
      { type: "p", html: "Remember that rates change daily. Treat any figure here as indicative and confirm current pricing with a licensed lender before making decisions." },
    ],
  },
  {
    slug: "how-much-house-can-i-afford",
    title: "How Much House Can I Afford? The 28/36 Rule Explained",
    description:
      "Learn how lenders decide what you can borrow using the 28/36 debt-to-income rule, and how to set a home budget you'll be comfortable with.",
    excerpt:
      "The 28/36 rule is how lenders size your budget. Here's how it works and how to set a number you'll actually be comfortable with.",
    category: "affordability",
    published: "2026-02-03",
    updated: "2026-05-20",
    readingMinutes: 7,
    tags: ["Affordability", "Budgeting"],
    relatedCalculators: [
      { href: "/calculators/home-affordability-calculator", label: "Home Affordability Calculator" },
      { href: "/mortgage-calculator", label: "Mortgage Calculator" },
    ],
    body: [
      { type: "p", html: "\"How much house can I afford?\" is the first question most buyers ask — and the answer is about more than what a lender will approve. The goal is a payment that fits your life, not just your application." },
      { type: "h2", text: "The 28/36 rule" },
      { type: "p", html: "Most lenders use the 28/36 rule as a starting point for your debt-to-income (DTI) ratio:" },
      { type: "ul", items: [
        "The 28% front-end ratio: your total monthly housing payment (principal, interest, taxes, and insurance) should stay at or below 28% of your gross monthly income.",
        "The 36% back-end ratio: all of your monthly debt payments combined — housing plus car loans, student loans, and minimum credit-card payments — should stay at or below 36%.",
      ] },
      { type: "p", html: "Some loan programs allow higher ratios (FHA loans sometimes go to 43% or beyond), but staying near 28/36 keeps your budget comfortable and resilient." },
      { type: "h2", text: "A quick example" },
      { type: "p", html: "Say you earn $9,000 per month before taxes. The 28% guideline caps your housing payment at about $2,520, and the 36% guideline caps total debt at $3,240. If you already pay $600 toward a car and student loans, that leaves roughly $2,640 for housing — your effective ceiling is the lower of the two limits." },
      { type: "h2", text: "What the rule leaves out" },
      { type: "p", html: "Qualifying for a payment isn't the same as affording a home. Budget for the costs the DTI ratio ignores:" },
      { type: "ul", items: [
        "Closing costs (typically 2–5% of the loan amount).",
        "Maintenance and repairs (a common rule of thumb is 1% of the home's value per year).",
        "Higher utility and insurance costs than you may be used to.",
        "An emergency fund so a surprise expense doesn't jeopardize your mortgage.",
      ] },
      { type: "p", html: "A good practice is to target a payment below your maximum so you keep breathing room. Our <a href=\"/calculators/home-affordability-calculator\">home affordability calculator</a> works backward from your income, debts, and down payment to estimate a realistic price range, and you can pressure-test the monthly payment in the <a href=\"/mortgage-calculator\">full mortgage calculator</a>." },
    ],
  },
  {
    slug: "15-vs-30-year-mortgage",
    title: "15-Year vs. 30-Year Mortgage: Which Is Right for You?",
    description:
      "Compare 15-year and 30-year mortgages on monthly payment, total interest, and flexibility to decide which term fits your goals.",
    excerpt:
      "A shorter term saves a fortune in interest; a longer term frees up cash flow. Here's how to choose the loan term that fits your goals.",
    category: "loan-types",
    published: "2026-03-10",
    updated: "2026-05-28",
    readingMinutes: 6,
    tags: ["Loan terms", "Strategy"],
    relatedCalculators: [
      { href: "/mortgage-calculator", label: "Mortgage Calculator" },
    ],
    body: [
      { type: "p", html: "The loan term you choose shapes both your monthly budget and your long-term wealth. The two most common options — 15-year and 30-year fixed-rate mortgages — represent a classic trade-off between cash flow and total cost." },
      { type: "h2", text: "The case for a 30-year mortgage" },
      { type: "ul", items: [
        "Lower monthly payments, which improves cash flow and qualifying power.",
        "More flexibility — you can pay extra toward principal when you choose without being locked into a higher required payment.",
        "Easier to afford more home, or to invest the monthly savings elsewhere.",
      ] },
      { type: "h2", text: "The case for a 15-year mortgage" },
      { type: "ul", items: [
        "A lower interest rate than a comparable 30-year loan.",
        "Dramatically less total interest paid over the life of the loan.",
        "You build equity faster and own your home outright in half the time.",
      ] },
      { type: "h2", text: "Seeing the difference" },
      { type: "p", html: "On a $300,000 loan, a 15-year term carries a much higher monthly payment than a 30-year term, but the total interest can be less than half. The 30-year keeps more cash in your pocket each month; the 15-year keeps far more in your pocket over the long run. There's no universally \"correct\" answer — it depends on your income stability, other financial goals, and how you'd use the monthly difference." },
      { type: "p", html: "The fastest way to decide is to see both side by side. Open the <a href=\"/mortgage-calculator\">mortgage calculator</a>, switch the loan term between 15 and 30 years, and compare the monthly payment and total interest directly. Many buyers split the difference by taking a 30-year loan and making occasional extra principal payments." },
    ],
  },
  {
    slug: "what-is-pmi-and-how-to-remove-it",
    title: "What Is PMI and How Do You Get Rid of It?",
    description:
      "Understand private mortgage insurance (PMI), how much it costs, why lenders require it, and the steps to remove it once you build equity.",
    excerpt:
      "PMI protects your lender, not you — and it can add hundreds to your payment. Here's how it works and how to cancel it.",
    category: "guides",
    published: "2026-04-02",
    updated: "2026-06-05",
    readingMinutes: 5,
    tags: ["PMI", "Down payment"],
    relatedCalculators: [
      { href: "/mortgage-calculator", label: "Mortgage Calculator" },
      { href: "/calculators/fha-mortgage-calculator", label: "FHA Calculator" },
    ],
    body: [
      { type: "p", html: "Private mortgage insurance, or PMI, is one of the most misunderstood line items on a mortgage. It protects the lender — not you — if you stop making payments, and it's typically required when your down payment is under 20% on a conventional loan." },
      { type: "h2", text: "How much PMI costs" },
      { type: "p", html: "PMI usually runs between 0.3% and 1.5% of your loan amount per year, billed monthly. On a $280,000 loan, that can mean anywhere from about $70 to $350 a month. The exact rate depends on your credit score and down payment — the smaller your down payment and the lower your score, the higher the premium." },
      { type: "h2", text: "How to remove PMI" },
      { type: "ul", items: [
        "Reach 20% equity and request cancellation in writing from your servicer.",
        "Let it cancel automatically — by law, conventional PMI terminates once your balance reaches 78% of the original value.",
        "Get a new appraisal if your home has appreciated enough to push you past 20% equity sooner.",
        "Refinance into a new loan once you have enough equity, which can also lower your rate.",
      ] },
      { type: "h2", text: "FHA loans are different" },
      { type: "p", html: "FHA loans use mortgage insurance premiums (MIP) instead of PMI, and on most FHA loans the annual premium lasts the life of the loan when you put down less than 10%. That's why many FHA borrowers refinance into a conventional loan once they reach 20% equity. You can compare the two in our <a href=\"/calculators/fha-mortgage-calculator\">FHA mortgage calculator</a>." },
      { type: "p", html: "Our main <a href=\"/mortgage-calculator\">mortgage calculator</a> automatically adds PMI when your down payment is under 20% and removes it at 20% or above, so you can see the real impact on your monthly payment instantly." },
    ],
  },
  {
    slug: "first-time-homebuyer-guide-georgia",
    title: "First-Time Homebuyer Guide for Georgia (2026)",
    description:
      "A step-by-step guide for first-time homebuyers in Georgia, from budgeting and pre-approval to closing, with local cost considerations.",
    excerpt:
      "From budgeting and pre-approval to closing day — a practical, Georgia-specific roadmap for first-time buyers in 2026.",
    category: "guides",
    published: "2026-05-01",
    updated: "2026-06-10",
    readingMinutes: 8,
    tags: ["First-time buyers", "Georgia", "Guides"],
    relatedCalculators: [
      { href: "/mortgage-calculator/georgia", label: "Georgia Mortgage Calculator" },
      { href: "/calculators/home-affordability-calculator", label: "Affordability Calculator" },
    ],
    body: [
      { type: "p", html: "Buying your first home in Georgia is exciting — and a lot less stressful when you know the steps ahead of time. With a median home price around the mid-$300,000s and an average effective property tax rate near 0.8%, Georgia is more affordable than many states, but planning still matters." },
      { type: "h2", text: "1. Set a realistic budget" },
      { type: "p", html: "Before you tour homes, figure out what you can comfortably afford using the 28/36 rule. Account for property taxes, homeowners insurance, and any HOA dues — not just principal and interest. Our <a href=\"/calculators/home-affordability-calculator\">affordability calculator</a> turns your income and debts into a target price range." },
      { type: "h2", text: "2. Check and build your credit" },
      { type: "p", html: "Your credit score drives your interest rate. Pull your reports, dispute errors, pay down balances, and avoid opening new credit in the months before you apply." },
      { type: "h2", text: "3. Explore first-time buyer programs" },
      { type: "p", html: "Georgia's Department of Community Affairs runs the Georgia Dream program, which offers down-payment assistance and competitive rates to eligible first-time buyers. FHA and VA loans are also popular for their low or zero down-payment requirements." },
      { type: "h2", text: "4. Get pre-approved" },
      { type: "ul", items: [
        "Gather pay stubs, W-2s or tax returns, and bank statements.",
        "Compare offers from at least three lenders.",
        "Get a pre-approval letter so sellers take your offers seriously.",
      ] },
      { type: "h2", text: "5. Tour, offer, and close" },
      { type: "p", html: "Once you're under contract, you'll complete an inspection and appraisal, finalize your loan, and review your closing disclosure. Budget for closing costs of roughly 2–5% of the loan amount. On closing day you'll sign, fund, and get the keys." },
      { type: "h2", text: "Estimate your Georgia payment" },
      { type: "p", html: "When you're ready to run numbers, our <a href=\"/mortgage-calculator/georgia\">Georgia mortgage calculator</a> is pre-loaded with the state's average property tax and insurance figures so your estimate is closer to reality. Adjust the home price and down payment to match the listings you're considering." },
    ],
  },
  {
    slug: "improve-credit-score-before-buying",
    title: "How to Improve Your Credit Score Before Buying a Home",
    description:
      "Practical steps to raise your credit score before applying for a mortgage, so you qualify for a lower interest rate.",
    excerpt:
      "Your credit score is one of the biggest levers on your rate. Here's how to raise it in the months before you apply.",
    category: "guides",
    published: "2026-05-12",
    updated: "2026-06-08",
    readingMinutes: 6,
    tags: ["Credit", "Preparation"],
    relatedCalculators: [
      { href: "/mortgage-calculator", label: "Mortgage Calculator" },
      { href: "/calculators/home-affordability-calculator", label: "Affordability Calculator" },
    ],
    body: [
      { type: "p", html: "Of all the factors that determine your mortgage rate, your credit score is one of the few you can actively improve in a few months. The difference between a \"good\" and \"excellent\" score can be a quarter to half a percentage point on your rate — real money over 30 years." },
      { type: "h2", text: "Why your score matters so much" },
      { type: "p", html: "Lenders price risk. A higher score signals you're likely to repay on time, so they reward you with a lower rate and better terms. On a $350,000 loan, even a 0.5% rate difference can mean tens of thousands of dollars over the life of the loan — see for yourself in the <a href=\"/mortgage-calculator\">mortgage calculator</a>." },
      { type: "h2", text: "Steps that move the needle" },
      { type: "ul", items: [
        "Pay every bill on time — payment history is the single biggest factor.",
        "Lower your credit utilization to under 30% (ideally under 10%) of your limits.",
        "Avoid opening or closing accounts in the months before you apply.",
        "Dispute errors on your credit reports — they're more common than you'd think.",
        "Keep older accounts open to preserve your average account age.",
      ] },
      { type: "h2", text: "Timing your application" },
      { type: "p", html: "Give yourself three to six months of clean, intentional credit behavior before applying. When you do shop for a mortgage, do it within a focused window (often 14–45 days) so multiple lender inquiries count as a single event for scoring purposes." },
    ],
  },
  {
    slug: "fha-vs-conventional-loans",
    title: "FHA vs. Conventional Loans: Which Is Right for You?",
    description:
      "Compare FHA and conventional mortgages on down payment, credit requirements, mortgage insurance, and total cost.",
    excerpt:
      "FHA loans are easier to qualify for; conventional loans can be cheaper long-term. Here's how to choose.",
    category: "loan-types",
    published: "2026-05-22",
    updated: "2026-06-09",
    readingMinutes: 7,
    tags: ["FHA", "Conventional", "Comparison"],
    relatedCalculators: [
      { href: "/calculators/fha-mortgage-calculator", label: "FHA Calculator" },
      { href: "/mortgage-calculator", label: "Mortgage Calculator" },
    ],
    body: [
      { type: "p", html: "FHA and conventional loans are the two most common paths to homeownership, and the right choice depends on your credit, savings, and long-term plans." },
      { type: "h2", text: "FHA loans at a glance" },
      { type: "ul", items: [
        "Down payments as low as 3.5% with a 580+ credit score.",
        "More forgiving credit requirements.",
        "Mortgage insurance premiums (MIP) that often last the life of the loan with low down payments.",
      ] },
      { type: "h2", text: "Conventional loans at a glance" },
      { type: "ul", items: [
        "Down payments as low as 3% for qualified buyers, but 20% avoids PMI entirely.",
        "Typically require a higher credit score for the best rates.",
        "PMI can be cancelled once you reach about 20% equity — unlike FHA MIP.",
      ] },
      { type: "h2", text: "How to decide" },
      { type: "p", html: "If your credit is still improving or your savings are limited, an FHA loan can get you into a home sooner. If you have strong credit and can put down more, a conventional loan often costs less over time because you can shed mortgage insurance. Many FHA borrowers refinance into a conventional loan once they build equity. Model both with our <a href=\"/calculators/fha-mortgage-calculator\">FHA calculator</a> and the <a href=\"/mortgage-calculator\">standard mortgage calculator</a> to compare the monthly payment and lifetime cost." },
    ],
  },
  {
    slug: "should-you-refinance-2026",
    title: "Should You Refinance in 2026? A Break-Even Guide",
    description:
      "Learn how to decide whether refinancing your mortgage in 2026 makes sense using the break-even method.",
    excerpt:
      "Refinancing isn't free. Here's the simple break-even math that tells you whether it's worth it.",
    category: "refinancing",
    published: "2026-05-30",
    updated: "2026-06-11",
    readingMinutes: 5,
    tags: ["Refinancing", "Strategy"],
    relatedCalculators: [
      { href: "/calculators/refinance-mortgage-calculator", label: "Refinance Calculator" },
    ],
    body: [
      { type: "p", html: "Refinancing replaces your current mortgage with a new one — usually to lower your rate, shorten your term, or tap equity. The key question isn't just \"can I get a lower rate?\" but \"will I stay long enough to come out ahead?\"" },
      { type: "h2", text: "The break-even method" },
      { type: "p", html: "Refinancing has closing costs, typically 2–5% of the loan amount. To find your break-even point, divide those costs by your expected monthly savings. If your new loan saves $200 a month and costs $5,000 to close, you break even in 25 months. Stay in the home longer than that and you profit." },
      { type: "h2", text: "Good reasons to refinance" },
      { type: "ul", items: [
        "You can lower your rate by roughly 0.5–1% or more.",
        "You want to switch from an adjustable to a fixed rate for stability.",
        "You want to shorten your term and pay off the home faster.",
        "You've built enough equity to drop mortgage insurance.",
      ] },
      { type: "p", html: "Run your specific numbers in the <a href=\"/calculators/refinance-mortgage-calculator\">refinance calculator</a> to see your new payment and estimated savings before you commit." },
    ],
  },
  {
    slug: "closing-costs-explained",
    title: "Closing Costs Explained: What Homebuyers Pay at the Table",
    description:
      "A breakdown of typical mortgage closing costs, what they cover, and how to reduce them.",
    excerpt:
      "Closing costs usually run 2–5% of the loan. Here's what they include and how to keep them down.",
    category: "guides",
    published: "2026-06-04",
    updated: "2026-06-12",
    readingMinutes: 6,
    tags: ["Closing", "Costs"],
    relatedCalculators: [
      { href: "/calculators/home-affordability-calculator", label: "Affordability Calculator" },
      { href: "/mortgage-calculator", label: "Mortgage Calculator" },
    ],
    body: [
      { type: "p", html: "Closing costs are the fees you pay to finalize your mortgage, and they're easy to underestimate. Budgeting for them up front keeps your home purchase on track." },
      { type: "h2", text: "What's typically included" },
      { type: "ul", items: [
        "Loan origination and underwriting fees.",
        "Appraisal and credit-report fees.",
        "Title search, title insurance, and escrow fees.",
        "Prepaid property taxes and homeowners insurance.",
        "Recording fees and, in some areas, transfer taxes.",
      ] },
      { type: "h2", text: "How much to expect" },
      { type: "p", html: "Closing costs generally run 2–5% of the loan amount. On a $280,000 loan, that's roughly $5,600 to $14,000 — separate from your down payment. Your lender must provide a Loan Estimate early in the process and a Closing Disclosure before signing; compare them carefully." },
      { type: "h2", text: "Ways to reduce them" },
      { type: "ul", items: [
        "Shop multiple lenders and compare their Loan Estimates line by line.",
        "Ask the seller to contribute toward closing costs (seller concessions).",
        "Look into lender credits, though they usually come with a slightly higher rate.",
        "Check for first-time buyer and down-payment-assistance programs.",
      ] },
      { type: "p", html: "Factor closing costs into your overall budget alongside the monthly payment — our <a href=\"/calculators/home-affordability-calculator\">affordability calculator</a> helps you keep the full picture in view." },
    ],
  },
  {
    slug: "mortgage-points-explained",
    title: "Mortgage Points: Should You Pay to Buy Down Your Rate?",
    description:
      "Understand how discount points work, what they cost, and whether buying down your mortgage rate is worth it.",
    excerpt:
      "Points let you pay upfront for a lower rate. Whether that pays off comes down to how long you'll keep the loan.",
    category: "rates",
    published: "2026-06-10",
    updated: "2026-06-13",
    readingMinutes: 5,
    tags: ["Points", "Rates"],
    relatedCalculators: [
      { href: "/mortgage-calculator", label: "Mortgage Calculator" },
    ],
    body: [
      { type: "p", html: "\"Discount points\" let you pay extra at closing in exchange for a lower interest rate. One point costs 1% of your loan amount and typically lowers your rate by about 0.25%, though the exact amount varies by lender." },
      { type: "h2", text: "The break-even on points" },
      { type: "p", html: "Buying points only pays off if you keep the loan long enough to recoup the upfront cost through lower monthly payments. On a $300,000 loan, one point costs $3,000. If it saves you $45 a month, you break even in about 67 months — a little over five and a half years." },
      { type: "h2", text: "When points make sense" },
      { type: "ul", items: [
        "You plan to stay in the home well past the break-even point.",
        "You have cash to spare at closing without draining your reserves.",
        "You want to lock in the lowest possible long-term payment.",
      ] },
      { type: "h2", text: "When to skip them" },
      { type: "ul", items: [
        "You might move or refinance within a few years.",
        "You'd rather put the cash toward a larger down payment to avoid PMI.",
        "Your closing budget is already tight.",
      ] },
      { type: "p", html: "Try both scenarios — with and without points — in the <a href=\"/mortgage-calculator\">mortgage calculator</a> by adjusting the interest rate to see how the monthly payment and total interest change." },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getCategory(slug: string): BlogCategory | undefined {
  return BLOG_CATEGORIES.find((c) => c.slug === slug);
}

export const BLOG_POSTS_SORTED = [...BLOG_POSTS].sort(
  (a, b) => new Date(b.published).getTime() - new Date(a.published).getTime(),
);

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return BLOG_POSTS_SORTED.filter((p) => p.category === categorySlug);
}
