import { SITE } from "./site";
import { getState, STATES } from "./states";

export type Block =
  | { type: "p"; html: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export interface BlogCategory {
  slug: string;
  name: string;
  description: string;
  /** Longer intro shown on the category landing page. */
  intro: string;
  /** Related calculator CTAs for the category page. */
  relatedTools: { href: string; label: string }[];
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    slug: "rates",
    name: "Rates & Market",
    description: "Where mortgage rates are headed and what moves them.",
    intro:
      "Rate guides here cover what moves national averages, how your personal quote can differ, and when monthly snapshots add context without repeating the same shopping checklist. Pair any rate article with a full PITI estimate — taxes and insurance often move the payment more than a small rate change.",
    relatedTools: [
      { href: "/mortgage-calculator", label: "Mortgage calculator" },
      { href: "/calculators/refinance-mortgage-calculator", label: "Refinance break-even" },
    ],
  },
  {
    slug: "affordability",
    name: "Affordability",
    description: "How much house you can afford and how to budget for it.",
    intro:
      "Affordability is more than a DTI rule of thumb. These guides walk through income, debts, and local tax/insurance friction — then point you to calculators that work backward from a comfortable payment instead of stretching to a lender maximum.",
    relatedTools: [
      { href: "/calculators/home-affordability-calculator", label: "Affordability calculator" },
      { href: "/mortgage-calculator", label: "Payment calculator" },
    ],
  },
  {
    slug: "loan-types",
    name: "Loan Types",
    description: "Comparing FHA, VA, conventional, ARM, and fixed-rate loans.",
    intro:
      "Loan-type articles compare underwriting tradeoffs and insurance structures (PMI vs FHA MIP, VA funding fee, ARM caps). Use them alongside the specialized calculators for FHA MIP and ARM stress testing so the choice is about total cost and risk, not a single headline rate.",
    relatedTools: [
      { href: "/calculators/fha-mortgage-calculator", label: "FHA MIP calculator" },
      { href: "/calculators/va-mortgage-calculator", label: "VA calculator" },
      { href: "/calculators/arm-mortgage-calculator", label: "ARM stress calculator" },
    ],
  },
  {
    slug: "refinancing",
    name: "Refinancing",
    description: "When and how to refinance your mortgage.",
    intro:
      "Refinancing only helps if you recover closing costs and the new term does not erase interest savings. Start with break-even months and lifetime interest — not payment alone — then confirm fees on a Loan Estimate.",
    relatedTools: [
      { href: "/calculators/refinance-mortgage-calculator", label: "Refinance break-even calculator" },
    ],
  },
  {
    slug: "guides",
    name: "Buying Guides",
    description: "Step-by-step guidance for every stage of buying a home.",
    intro:
      "Buying guides cover credit timing, down payments, closing costs, and points with worked break-even examples. They assume you will verify numbers with a licensed loan officer and use our calculators for scenarios, not as personalized advice.",
    relatedTools: [
      { href: "/mortgage-calculator", label: "Mortgage calculator" },
      { href: "/how-we-calculate", label: "How we calculate" },
    ],
  },
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
    readingMinutes: 10,
    tags: ["Rates", "Market"],
    relatedCalculators: [
      { href: "/mortgage-calculator", label: "Mortgage Calculator" },
      { href: "/calculators/refinance-mortgage-calculator", label: "Refinance Calculator" },
    ],
    body: [
      { type: "p", html: `Mortgage rates are the single biggest lever on what your home costs over time. In 2026, the national average for a 30-year fixed loan has hovered around ${SITE.defaultRate}% (indicative as of ${SITE.ratesAsOf}), though your personal rate can land well above or below that depending on credit, down payment, points, and loan type. This guide explains what moves rates, why your quote differs from the headline, and how to shop without guessing.` },
      { type: "h2", text: "What moves mortgage rates" },
      { type: "p", html: "Mortgage rates aren't set by any single institution. They reflect a mix of forces, the most important being:" },
      { type: "ul", items: [
        "The Federal Reserve's policy rate, which influences short-term borrowing costs across the economy.",
        "The 10-year Treasury yield, which mortgage rates tend to track closely.",
        "Inflation expectations — higher expected inflation generally pushes rates up.",
        "The bond market's appetite for mortgage-backed securities.",
        "Your own credit profile, loan type, occupancy, and down payment.",
      ] },
      { type: "h2", text: "Worked payment sensitivity" },
      { type: "p", html: "On a $350,000 loan amount with a 30-year term, a one-percentage-point rate change typically moves principal and interest by roughly $200 per month. That is before taxes and insurance. Over 30 years, the interest difference can reach tens of thousands of dollars. Use our <a href=\"/mortgage-calculator\">mortgage calculator</a> and nudge the rate slider to see your own sensitivity — including PMI if your down payment is under 20%." },
      { type: "h2", text: "Why your rate differs from the headline number" },
      { type: "p", html: "The rates you see advertised are often best-case scenarios for highly qualified borrowers. Lenders price risk, so a 760+ credit score, a 20% down payment, and a conforming primary-residence loan will usually earn a lower rate than a 640 score with 5% down on the same day. Property type (condo vs. single-family), cash-out refinance vs. purchase, and discount points also change the note rate." },
      { type: "h2", text: "How to shop rates the smart way" },
      { type: "ul", items: [
        "Compare Loan Estimates from at least three lenders on the same day with the same loan amount, points, and lock period.",
        "Separate the interest rate from lender credits and discount points so you can calculate break-even.",
        "Raise your credit score before applying — even a 20-point jump can move pricing tiers.",
        "Save for a larger down payment to cut both rate risk and PMI.",
        "Lock once you are under contract if your risk tolerance for floating is low.",
      ] },
      { type: "h2", text: "Fixed vs ARM in a 2026 context" },
      { type: "p", html: "A 30-year fixed loan buys payment certainty. A 5/1 or 7/1 ARM may start lower, then adjust with an index plus margin after the intro period. If you expect to move or refinance before the first adjustment — and you can afford the capped payment later — an ARM can be rational. If certainty matters more than the lowest payment today, stress-test both in the <a href=\"/calculators/arm-mortgage-calculator\">ARM calculator</a> and the main fixed-rate tool." },
      { type: "h2", text: "Refinancing when rates move" },
      { type: "p", html: "If you already have a mortgage, compare your current principal and interest to a new quote using the <a href=\"/calculators/refinance-mortgage-calculator\">refinance calculator</a>. Divide closing costs by monthly savings for break-even months, and watch whether a new 30-year term erases interest savings by restarting the clock." },
      { type: "p", html: "Rates change daily. Treat any figure here as educational and confirm current pricing with a licensed loan officer before making decisions. For the formulas behind our estimates, see <a href=\"/how-we-calculate\">how we calculate</a>." },
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
    readingMinutes: 9,
    tags: ["Loan terms", "Strategy"],
    relatedCalculators: [
      { href: "/mortgage-calculator", label: "Mortgage Calculator" },
    ],
    body: [
      { type: "p", html: "The loan term you choose shapes both your monthly budget and your long-term wealth. The two most common options — 15-year and 30-year fixed-rate mortgages — represent a classic trade-off between cash flow and total cost. This guide walks through the math with a concrete example, then helps you decide without treating either term as universally \"best.\"" },
      { type: "h2", text: "The case for a 30-year mortgage" },
      { type: "ul", items: [
        "Lower monthly payments, which improves cash flow and qualifying power.",
        "More flexibility — you can pay extra toward principal when you choose without being locked into a higher required payment.",
        "Easier to afford more home, or to invest the monthly savings elsewhere.",
        "Useful when you want payment cushion for variable income or upcoming expenses.",
      ] },
      { type: "h2", text: "The case for a 15-year mortgage" },
      { type: "ul", items: [
        "A lower interest rate than a comparable 30-year loan in most rate sheets.",
        "Dramatically less total interest paid over the life of the loan.",
        "You build equity faster and own your home outright in half the time.",
        "Forces a savings habit — if you can comfortably afford it.",
      ] },
      { type: "h2", text: "Worked example: $300,000 loan" },
      { type: "p", html: "Assume a $300,000 loan amount (after down payment) at illustrative fixed rates near today's market. A 30-year term produces a lower principal-and-interest payment but accrues interest for decades. A 15-year term raises the monthly bill substantially while cutting total interest — often by well over half depending on the rate gap between the two products. The exact dollars change with your rate quote, so treat this as a pattern, not a promise." },
      { type: "ul", items: [
        "30-year: lower required payment, slower equity build, higher lifetime interest.",
        "15-year: higher required payment, faster equity build, much lower lifetime interest.",
        "Hybrid approach: take 30-year flexibility, then schedule extra principal payments when cash flow allows.",
      ] },
      { type: "h2", text: "How to decide in practice" },
      { type: "p", html: "Start with the payment you could still make after a temporary income shock. If the 15-year payment only works in a perfect month, the 30-year (with optional extra payments) is usually safer. If the 15-year payment fits with room to spare and you value being debt-free sooner, the shorter term can be an excellent forced-savings plan." },
      { type: "h2", text: "Taxes, insurance, and the full PITI picture" },
      { type: "p", html: "Term choice only changes principal and interest. Property taxes, homeowners insurance, PMI, and HOA dues stay in the payment either way. Always compare terms inside a full PITI estimate — especially on a <a href=\"/mortgage-calculator\">state-aware mortgage calculator</a> — so you are not choosing a term based on an incomplete number." },
      { type: "p", html: "Open the <a href=\"/mortgage-calculator\">mortgage calculator</a>, switch the loan term between 15 and 30 years, and compare monthly payment and total interest directly. For the amortization formula we use, see <a href=\"/how-we-calculate\">how we calculate</a>." },
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
    readingMinutes: 8,
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
        "Let it cancel automatically — by law, conventional PMI terminates once your balance reaches 78% of the original value on many loans.",
        "Get a new appraisal if your home has appreciated enough to push you past 20% equity sooner (lender rules apply).",
        "Refinance into a new loan once you have enough equity, which can also lower your rate.",
        "Make extra principal payments to hit the equity target faster.",
      ] },
      { type: "h2", text: "FHA loans are different" },
      { type: "p", html: "FHA loans use mortgage insurance premiums (MIP) instead of PMI, and on most FHA loans the annual premium lasts the life of the loan when you put down less than 10%. That's why many FHA borrowers refinance into a conventional loan once they reach 20% equity. You can compare the two in our <a href=\"/calculators/fha-mortgage-calculator\">FHA mortgage calculator</a>." },
      { type: "h2", text: "Is avoiding PMI always the right move?" },
      { type: "p", html: "Not always. Waiting years to save a full 20% down can cost more in rent than paying PMI for a period — especially if prices are rising in your market. Model three scenarios: buy sooner with PMI, wait for 20% down, or buy a less expensive home. The best choice is the one that fits your timeline and cash reserves, not a blanket rule." },
      { type: "p", html: "Our main <a href=\"/mortgage-calculator\">mortgage calculator</a> automatically adds PMI when your down payment is under 20% and removes it at 20% or above. For the exact rule in our math, see <a href=\"/how-we-calculate\">how we calculate</a>." },
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
      { href: "/mortgage-calculator?state=georgia", label: "Georgia Mortgage Calculator" },
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
      { type: "p", html: "When you're ready to run numbers, our <a href=\"/mortgage-calculator?state=georgia\">Georgia mortgage calculator</a> is pre-loaded with the state's average property tax and insurance figures so your estimate is closer to reality. Adjust the home price and down payment to match the listings you're considering." },
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
    readingMinutes: 9,
    tags: ["FHA", "Conventional", "Comparison"],
    relatedCalculators: [
      { href: "/calculators/fha-mortgage-calculator", label: "FHA Calculator" },
      { href: "/mortgage-calculator", label: "Mortgage Calculator" },
    ],
    body: [
      { type: "p", html: "FHA and conventional loans are the two most common paths to homeownership. The right choice depends on credit, cash to close, how long you expect to keep the loan, and whether mortgage insurance will stick for years or drop off once you build equity." },
      { type: "h2", text: "Side-by-side snapshot" },
      { type: "ul", items: [
        "Down payment: FHA often 3.5% (580+ FICO); conventional can start near 3% for strong profiles, with 20% removing PMI.",
        "Credit flexibility: FHA is typically more forgiving; conventional pricing improves sharply with higher scores.",
        "Insurance: FHA charges upfront MIP plus monthly annual MIP; conventional uses PMI that can cancel near 20% equity.",
        "Property rules: FHA appraisals emphasize safety/condition; conventional follows agency/investor overlays.",
      ] },
      { type: "h2", text: "FHA loans at a glance" },
      { type: "p", html: "FHA loans are insured by the Federal Housing Administration. Most purchase borrowers finance about 1.75% upfront MIP into the loan and pay monthly annual MIP (often near 0.55% of the base loan for many scenarios). When you put down less than 10%, annual MIP usually lasts for the life of the loan unless you refinance out. That structure is why FHA can win on cash-to-close while losing on long-horizon cost." },
      { type: "ul", items: [
        "Down payments as low as 3.5% with a 580+ credit score.",
        "More forgiving credit requirements for many lenders.",
        "MIP duration rules matter as much as the monthly premium.",
      ] },
      { type: "h2", text: "Conventional loans at a glance" },
      { type: "p", html: "Conventional loans follow Fannie Mae / Freddie Mac guidelines (or jumbo investor overlays). PMI rates depend on LTV and credit; the key advantage is that PMI is usually cancellable once you reach about 20% equity through paydown or appreciation — unlike many FHA low-down scenarios." },
      { type: "ul", items: [
        "Down payments as low as 3% for qualified buyers, but 20% avoids PMI entirely.",
        "Typically require a higher credit score for the best rates.",
        "PMI can usually be cancelled near 20% equity.",
      ] },
      { type: "h2", text: "Worked mindset (not a quote)" },
      { type: "p", html: "On a $350,000 purchase with 3.5% down, an FHA loan finances most of the price and adds monthly MIP on top of P&amp;I, taxes, and insurance. A conventional 5% down loan may show lower mortgage insurance after a few years once PMI can cancel, but may price worse on day one if credit is thin. Run both for a 5–7 year hold: if you expect to refinance to conventional once equity and credit improve, FHA can still be the bridge." },
      { type: "h2", text: "How to decide" },
      { type: "ol", items: [
        "Model FHA with financed upfront MIP in the <a href=\"/calculators/fha-mortgage-calculator\">FHA calculator</a>.",
        "Model a conventional scenario at the same price in the <a href=\"/mortgage-calculator\">mortgage calculator</a> with realistic PMI.",
        "Compare cash to close, month-1 payment, and whether insurance can fall off.",
        "Ask for Loan Estimates with the same purchase price, points, and lock period.",
      ] },
      { type: "p", html: "Many FHA borrowers later refinance into a conventional loan. Use the <a href=\"/calculators/refinance-mortgage-calculator\">refinance break-even calculator</a> when that day comes so closing costs do not erase the gain." },
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
    readingMinutes: 9,
    tags: ["Refinancing", "Strategy"],
    relatedCalculators: [
      { href: "/calculators/refinance-mortgage-calculator", label: "Refinance Calculator" },
    ],
    body: [
      { type: "p", html: "Refinancing replaces your current mortgage with a new one — usually to lower your rate, shorten your term, switch from an ARM to a fixed rate, or tap equity. The key question isn't just \"can I get a lower rate?\" but \"will I stay long enough to come out ahead on closing costs <em>and</em> lifetime interest?\"" },
      { type: "h2", text: "The break-even method" },
      { type: "p", html: "Refinancing has closing costs, typically 2–5% of the loan amount unless you take a lender credit for a higher rate. Divide total costs by monthly P&amp;I savings to find break-even months. If the new loan saves $200 a month and costs $5,000 to close, you break even in 25 months. Stay longer than that and payment savings look profitable — then still check whether restarting a 30-year term added more interest than you saved." },
      { type: "h2", text: "Worked example" },
      { type: "p", html: "Suppose you owe $280,000 at 8% with 300 months left, and you are offered 6.75% for a new 30-year loan with $6,500 in closing costs. Current P&amp;I is higher than the new P&amp;I; monthly savings might look attractive, but lifetime interest on the longer clock can shrink the win. Plug the same inputs into the <a href=\"/calculators/refinance-mortgage-calculator\">refinance break-even calculator</a> to see break-even months and interest on both paths before you pay appraisal or lock fees." },
      { type: "h2", text: "Good reasons to refinance" },
      { type: "ul", items: [
        "You can lower your rate by roughly 0.5–1% or more and will outlast the break-even.",
        "You want to switch from an adjustable to a fixed rate for payment certainty.",
        "You want to shorten the term and can afford the higher payment.",
        "You've built enough equity to drop PMI/MIP via a conventional rate-and-term refi.",
      ] },
      { type: "h2", text: "When not to refinance" },
      { type: "ul", items: [
        "You may sell or move before recovering closing costs.",
        "The payment drop comes only from stretching the term while total interest rises.",
        "Cash-out pricing is worse than a HELOC for a short-term project.",
        "You are chasing a teaser ARM without modeling the post-reset payment.",
      ] },
      { type: "h2", text: "Rate-and-term vs cash-out" },
      { type: "p", html: "Rate-and-term refinances change rate, term, or loan type. Cash-out adds to the balance and often prices slightly worse. If you need cash for a defined project, compare cash-out against a HELOC so you do not put your entire first mortgage rate at risk for a short need." },
      { type: "p", html: "Run your numbers in the <a href=\"/calculators/refinance-mortgage-calculator\">refinance calculator</a> (current balance, rates, remaining months, closing costs) before you commit to an application fee." },
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
    readingMinutes: 8,
    tags: ["Closing", "Costs"],
    relatedCalculators: [
      { href: "/calculators/home-affordability-calculator", label: "Affordability Calculator" },
      { href: "/mortgage-calculator", label: "Mortgage Calculator" },
    ],
    body: [
      { type: "p", html: "Closing costs are the fees you pay to finalize your mortgage, and they're easy to underestimate. Budgeting for them up front keeps your home purchase on track — they sit on top of the down payment, not inside it." },
      { type: "h2", text: "What's typically included" },
      { type: "ul", items: [
        "Loan origination and underwriting fees.",
        "Appraisal and credit-report fees.",
        "Title search, title insurance, and escrow fees.",
        "Prepaid property taxes and homeowners insurance.",
        "Recording fees and, in some areas, transfer taxes.",
      ] },
      { type: "h2", text: "How much to expect" },
      { type: "p", html: "Closing costs generally run 2–5% of the loan amount. On a $280,000 loan, that's roughly $5,600 to $14,000 — separate from your down payment. Your lender must provide a Loan Estimate early in the process and a Closing Disclosure before signing; compare them carefully. Prepaid escrow items can look large in high-tax or high-insurance counties even when lender fees are competitive." },
      { type: "h2", text: "Cash to close vs monthly payment" },
      { type: "p", html: "A lower monthly payment does not mean lower cash to close. Points, larger prepaid taxes, and HOA move-in fees can spike day-of funding. Use the <a href=\"/mortgage-calculator\">mortgage calculator</a> for the recurring payment and keep a separate closing-cost worksheet for cash at the table." },
      { type: "h2", text: "Ways to reduce them" },
      { type: "ul", items: [
        "Shop multiple lenders and compare their Loan Estimates line by line.",
        "Ask the seller to contribute toward closing costs (seller concessions), within program limits.",
        "Look into lender credits, though they usually come with a slightly higher rate — run the same break-even math used for discount points.",
        "Check for first-time buyer and down-payment-assistance programs that may cover fees.",
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
    readingMinutes: 8,
    tags: ["Points", "Rates"],
    relatedCalculators: [
      { href: "/mortgage-calculator", label: "Mortgage Calculator" },
      { href: "/calculators/refinance-mortgage-calculator", label: "Refinance Calculator" },
    ],
    body: [
      { type: "p", html: "\"Discount points\" let you pay extra at closing in exchange for a lower interest rate. One point costs 1% of your loan amount and typically lowers your rate by about 0.25%, though the exact amount varies by lender and market day. Origination points (lender fees expressed as points) are different — clarify which you're being offered." },
      { type: "h2", text: "The break-even on points" },
      { type: "p", html: "Buying points only pays off if you keep the loan long enough to recoup the upfront cost through lower monthly payments. On a $300,000 loan, one point costs $3,000. If it saves you $45 a month, you break even in about 67 months — a little over five and a half years. If you refinance or sell in year three, you likely lost money on those points." },
      { type: "h2", text: "Worked comparison" },
      { type: "p", html: `At an indicative ${SITE.defaultRate}% 30-year rate on $300,000, small rate cuts change P&amp;I by dozens of dollars per month — meaningful over a decade, modest over two years. Use the <a href="/mortgage-calculator">mortgage calculator</a> twice: once at the no-points rate and once at the bought-down rate. Divide the cash paid for points by the monthly difference. That is your personal break-even, independent of marketing slogans.` },
      { type: "h2", text: "When points make sense" },
      { type: "ul", items: [
        "You plan to stay in the home well past the break-even point.",
        "You have cash to spare at closing without draining emergency reserves.",
        "You want the lowest durable payment and are unlikely to refinance soon.",
      ] },
      { type: "h2", text: "When to skip them" },
      { type: "ul", items: [
        "You might move or refinance within a few years.",
        "You'd rather put the cash toward a larger down payment to avoid PMI.",
        "Your closing budget is already tight after earnest money and prepaid escrow.",
      ] },
      { type: "h2", text: "Points vs lender credits" },
      { type: "p", html: "Lender credits work in the other direction: you accept a higher rate so the lender pays part of your closing costs. Use the same break-even logic. Credits help cash-constrained buyers; points help long-horizon owners. Never mix quotes that include different point/credit assumptions without recalculating." },
      { type: "p", html: "Already considering a refinance? Model whether leftover points from a recent purchase would be wasted if you refinance early — then use the <a href=\"/calculators/refinance-mortgage-calculator\">refinance calculator</a> for the new loan's costs." },
    ],
  },
  {
    slug: "current-mortgage-rates-june-2026",
    title: "Current Mortgage Rates in June 2026",
    description:
      "Where 30-year and 15-year mortgage rates stand in June 2026, what's moving the market, and how to estimate your payment with today's rates.",
    excerpt:
      "A June 2026 snapshot of mortgage rates, what changed this month, and how to plug today's numbers into your budget.",
    category: "rates",
    published: "2026-06-15",
    updated: "2026-06-15",
    readingMinutes: 8,
    tags: ["Rates", "June 2026", "Market"],
    relatedCalculators: [
      { href: "/mortgage-calculator", label: "Mortgage Calculator" },
      { href: "/calculators/refinance-mortgage-calculator", label: "Refinance Calculator" },
    ],
    body: [
      { type: "p", html: `This June 2026 snapshot complements our broader <a href="/blog/current-mortgage-rates-2026">2026 mortgage rates guide</a> (which covers what moves rates and how to shop quotes). Here we focus on the month’s indicative levels and a budgeting workflow — not a second copy of the evergreen shopping list.` },
      { type: "h2", text: "Where rates stand this month" },
      { type: "p", html: "Headline averages are a starting point. In June 2026, well-qualified borrowers with strong credit and 20% down often see rates near or slightly below the national average, while buyers with smaller down payments or lower scores may land higher. Fifteen-year fixed loans typically price below comparable 30-year terms, which lowers total interest but raises the monthly payment." },
      { type: "ul", items: [
        `30-year fixed: roughly ${SITE.defaultRate}% national average (indicative).`,
        "15-year fixed: typically priced below the 30-year average for similar profiles.",
        "5/1 and 7/1 ARMs: often start lower than fixed rates, then adjust after the initial period — stress-test the reset with the <a href=\"/calculators/arm-mortgage-calculator\">ARM calculator</a>.",
        "FHA and VA loans: note rates can look competitive, but MIP or funding fees change total cost.",
      ] },
      { type: "h2", text: "What moved rates in June 2026" },
      { type: "p", html: "Mortgage rates track the broader bond market more closely than any single Fed announcement. This month, traders are weighing inflation reports, jobs data, and expectations for future policy easing. When the 10-year Treasury yield rises, mortgage rates tend to follow within days. Geopolitical news and Treasury auction demand can also push rates independently of housing demand." },
      { type: "h2", text: "A practical June budgeting workflow" },
      { type: "ol", items: [
        "Pick a target home price and down payment for the ZIP you will actually shop.",
        "Run a full PITI estimate in the <a href=\"/mortgage-calculator\">mortgage calculator</a> at today's indicative rate and again 1% higher.",
        "If you already own, compare your current P&I to a new quote in the <a href=\"/calculators/refinance-mortgage-calculator\">refinance calculator</a> and compute break-even months.",
        "Only then request Loan Estimates so you can compare apples-to-apples fees and points.",
      ] },
      { type: "h2", text: "How this snapshot differs from the evergreen guide" },
      { type: "p", html: "Use this page for a dated level check and the month’s macro narrative. Use the <a href=\"/blog/current-mortgage-rates-2026\">2026 rates guide</a> for why your quote differs from the headline and how to compare Loan Estimates. Methodology: <a href=\"/how-we-calculate\">how we calculate</a>." },
    ],
  },
  {
    slug: "how-much-house-can-i-afford-georgia",
    title: "How Much House Can I Afford in Georgia? (2026 Guide)",
    description:
      "Estimate how much house you can afford in Georgia using income, debt, property taxes, and insurance — with a worked example for 2026.",
    excerpt:
      "Georgia's property taxes and insurance affect your real payment. Here's how to size a budget that fits — with a worked example.",
    category: "affordability",
    published: "2026-06-14",
    updated: "2026-06-14",
    readingMinutes: 7,
    tags: ["Affordability", "Georgia", "Budgeting"],
    relatedCalculators: [
      { href: "/mortgage-calculator?state=georgia", label: "Georgia Mortgage Calculator" },
      { href: "/calculators/home-affordability-calculator", label: "Home Affordability Calculator" },
    ],
    body: (() => {
      const ga = getState("georgia")!;
      const rate = SITE.defaultRate / 100 / 12;
      const n = 360;
      const loan = ga.medianHomePrice * 0.8;
      const pi =
        (loan * (rate * Math.pow(1 + rate, n))) / (Math.pow(1 + rate, n) - 1);
      const tax = (ga.medianHomePrice * ga.propertyTaxRate) / 100 / 12;
      const ins = ga.avgInsurance / 12;
      const payment = Math.round(pi + tax + ins);
      return [
        { type: "p" as const, html: `Georgia remains one of the more affordable states for homebuyers, with a median home price around $${ga.medianHomePrice.toLocaleString()} and an effective property tax rate near ${ga.propertyTaxRate}%. But \"affordable\" still depends on your income, debts, and how much you put down. This guide walks through the math Georgia buyers use in 2026.` },
        { type: "h2" as const, text: "Start with the 28/36 rule" },
        { type: "p" as const, html: "Lenders typically cap your housing payment at about 28% of gross monthly income and total debt at 36%. On $8,000/month income, that's roughly $2,240 for housing and $2,880 for all debt combined. If you already pay $500 toward a car and student loans, your practical housing ceiling is closer to $2,380 — whichever limit is lower." },
        { type: "h2" as const, text: "Georgia costs beyond principal and interest" },
        { type: "p" as const, html: "Georgia buyers often focus on the loan payment and forget property taxes and insurance. At the state's average tax rate, a $${ga.medianHomePrice.toLocaleString()} home adds about $${Math.round(tax)}/month in taxes, plus roughly $${Math.round(ins)}/month for homeowners insurance — before PMI or HOA dues." },
        { type: "ul" as const, items: [
          `Median home price (indicative): $${ga.medianHomePrice.toLocaleString()}`,
          `Average property tax rate: ${ga.propertyTaxRate}% of home value per year`,
          `Typical insurance premium: about $${ga.avgInsurance.toLocaleString()}/year`,
          "Atlanta metro prices run higher; rural and small-city markets often run lower",
        ] },
        { type: "h2" as const, text: "Worked example: median-priced Georgia home" },
        { type: "p" as const, html: `Assume a $${ga.medianHomePrice.toLocaleString()} home with 20% down, a ${SITE.defaultRate}% rate, and a 30-year term. Principal and interest come to about $${Math.round(pi)}/month. Add taxes and insurance and you're near $${payment}/month total — before maintenance, utilities, or HOA fees.` },
        { type: "h2" as const, text: "Georgia programs that stretch your budget" },
        { type: "p" as const, html: "First-time buyers may qualify for Georgia Dream down-payment assistance through the Department of Community Affairs. FHA loans allow 3.5% down with flexible credit, and VA loans offer $0 down for eligible veterans — though mortgage insurance or funding fees change the monthly math. Compare options in our <a href=\"/calculators/fha-mortgage-calculator\">FHA calculator</a> and <a href=\"/calculators/va-mortgage-calculator\">VA calculator</a>." },
        { type: "h2" as const, text: "Run your own Georgia numbers" },
        { type: "p" as const, html: `Use the <a href=\"/calculators/home-affordability-calculator\">home affordability calculator</a> to work backward from your income, or open the <a href=\"/mortgage-calculator?state=georgia\">Georgia mortgage calculator</a> — it's pre-loaded with state tax and insurance defaults so your estimate matches local costs more closely.` },
      ];
    })(),
  },
  {
    slug: "how-much-house-can-i-afford-texas",
    title: "How Much House Can I Afford in Texas? (2026 Guide)",
    description:
      "Learn how much house you can afford in Texas, including how higher property taxes and insurance affect your monthly payment in 2026.",
    excerpt:
      "Texas has no state income tax, but property taxes run high. Here's how to budget for a Texas home in 2026.",
    category: "affordability",
    published: "2026-06-13",
    updated: "2026-06-13",
    readingMinutes: 7,
    tags: ["Affordability", "Texas", "Budgeting"],
    relatedCalculators: [
      { href: "/mortgage-calculator?state=texas", label: "Texas Mortgage Calculator" },
      { href: "/calculators/home-affordability-calculator", label: "Home Affordability Calculator" },
    ],
    body: (() => {
      const tx = getState("texas")!;
      const rate = SITE.defaultRate / 100 / 12;
      const n = 360;
      const loan = tx.medianHomePrice * 0.8;
      const pi =
        (loan * (rate * Math.pow(1 + rate, n))) / (Math.pow(1 + rate, n) - 1);
      const tax = (tx.medianHomePrice * tx.propertyTaxRate) / 100 / 12;
      const ins = tx.avgInsurance / 12;
      const payment = Math.round(pi + tax + ins);
      return [
        { type: "p" as const, html: `Texas attracts buyers with strong job growth and no state income tax, but property taxes and homeowners insurance are a bigger slice of the monthly payment than in many states. With a median home near $${tx.medianHomePrice.toLocaleString()} and an effective tax rate around ${tx.propertyTaxRate}%, budgeting correctly matters.` },
        { type: "h2" as const, text: "The 28/36 rule for Texas buyers" },
        { type: "p" as const, html: "Lenders size your loan using gross income and existing debt. Keep housing near 28% of income and total debt near 36%. Texas's higher tax load means you may qualify for a larger loan amount than you comfortably afford once taxes and insurance are included — always stress-test the full PITI payment." },
        { type: "h2" as const, text: "Why Texas taxes change the math" },
        { type: "p" as const, html: `Texas property taxes are among the highest in the country as a share of home value. On a $${tx.medianHomePrice.toLocaleString()} home at ${tx.propertyTaxRate}%, taxes alone add about $${Math.round(tax)}/month. Wind and hail risk also push insurance premiums — budget roughly $${Math.round(ins)}/month for insurance on a typical home.` },
        { type: "h2" as const, text: "Sample payment on a median Texas home" },
        { type: "p" as const, html: `With 20% down, a ${SITE.defaultRate}% rate, and a 30-year term on a $${tx.medianHomePrice.toLocaleString()} purchase, principal and interest run about $${Math.round(pi)}/month. Taxes and insurance bring the total near $${payment}/month — a reminder that Texas \"affordability\" is about the full payment, not the loan alone.` },
        { type: "h2" as const, text: "Tips for Texas homebuyers in 2026" },
        { type: "ul" as const, items: [
          "Homestead exemptions can lower your property tax bill — file after you close.",
          "Compare insurance quotes; Texas premiums vary widely by county and roof type.",
          "Look at total monthly cost, not just the price per square foot.",
          "Consider energy costs — older homes in hot climates can add $200+ in summer AC.",
        ] },
        { type: "p" as const, html: `Model your payment with local defaults in the <a href=\"/mortgage-calculator?state=texas\">Texas mortgage calculator</a>, or start from income in the <a href=\"/calculators/home-affordability-calculator\">affordability calculator</a>.` },
      ];
    })(),
  },
  {
    slug: "how-much-house-can-i-afford-florida",
    title: "How Much House Can I Afford in Florida? (2026 Guide)",
    description:
      "Calculate how much house you can afford in Florida, factoring in insurance, property taxes, and hurricane-related costs in 2026.",
    excerpt:
      "Florida insurance and taxes can surprise new buyers. Here's a realistic affordability framework for 2026.",
    category: "affordability",
    published: "2026-06-12",
    updated: "2026-06-12",
    readingMinutes: 7,
    tags: ["Affordability", "Florida", "Budgeting"],
    relatedCalculators: [
      { href: "/mortgage-calculator?state=florida", label: "Florida Mortgage Calculator" },
      { href: "/calculators/home-affordability-calculator", label: "Home Affordability Calculator" },
    ],
    body: (() => {
      const fl = getState("florida")!;
      const rate = SITE.defaultRate / 100 / 12;
      const n = 360;
      const loan = fl.medianHomePrice * 0.8;
      const pi =
        (loan * (rate * Math.pow(1 + rate, n))) / (Math.pow(1 + rate, n) - 1);
      const tax = (fl.medianHomePrice * fl.propertyTaxRate) / 100 / 12;
      const ins = fl.avgInsurance / 12;
      const payment = Math.round(pi + tax + ins);
      return [
        { type: "p" as const, html: `Florida remains a top destination for relocators, with a median home price around $${fl.medianHomePrice.toLocaleString()}. Insurance — not just the mortgage rate — often determines whether a Florida home fits your budget. This guide helps you size a realistic payment for 2026.` },
        { type: "h2" as const, text: "Income limits: the 28/36 rule" },
        { type: "p" as const, html: "Most lenders cap housing at 28% of gross monthly income and total debt at 36%. Florida buyers with variable income (commission, seasonal work, or self-employment) should use a conservative income figure — lenders may average two years of tax returns, but you should budget on what you reliably earn." },
        { type: "h2" as const, text: "Florida insurance is the wild card" },
        { type: "p" as const, html: `Homeowners insurance in Florida averages about $${fl.avgInsurance.toLocaleString()}/year statewide, but coastal counties can cost significantly more. Wind mitigation features, roof age, and flood zone placement change quotes by thousands. Always get an insurance estimate before you offer — not after.` },
        { type: "h2" as const, text: "Example: median Florida home payment" },
        { type: "p" as const, html: `On a $${fl.medianHomePrice.toLocaleString()} home with 20% down at ${SITE.defaultRate}% over 30 years, principal and interest are roughly $${Math.round(pi)}/month. Property taxes add about $${Math.round(tax)}/month and insurance about $${Math.round(ins)}/month, for a total near $${payment}/month before HOA or flood insurance.` },
        { type: "h2" as const, text: "Florida-specific costs to budget for" },
        { type: "ul" as const, items: [
          "Flood insurance if you're in or near a FEMA flood zone.",
          "Higher windstorm deductibles on coastal policies.",
          "Homestead exemption reduces assessed value for primary residences.",
          "Condo HOA fees that may include master insurance — verify what's covered.",
        ] },
        { type: "p" as const, html: `Run localized numbers in the <a href=\"/mortgage-calculator?state=florida\">Florida mortgage calculator</a> and compare scenarios in the <a href=\"/calculators/home-affordability-calculator\">affordability calculator</a> before you tour homes.` },
      ];
    })(),
  },
  {
    slug: "how-much-house-can-i-afford-california",
    title: "How Much House Can I Afford in California? (2026 Guide)",
    description:
      "How much house can you afford in California? A 2026 guide covering high home prices, property taxes, and income-based budgeting.",
    excerpt:
      "California's high prices mean every percentage point of income matters. Here's how to set a realistic budget in 2026.",
    category: "affordability",
    published: "2026-06-11",
    updated: "2026-06-11",
    readingMinutes: 7,
    tags: ["Affordability", "California", "Budgeting"],
    relatedCalculators: [
      { href: "/mortgage-calculator?state=california", label: "California Mortgage Calculator" },
      { href: "/calculators/home-affordability-calculator", label: "Home Affordability Calculator" },
    ],
    body: (() => {
      const ca = getState("california")!;
      const rate = SITE.defaultRate / 100 / 12;
      const n = 360;
      const loan = ca.medianHomePrice * 0.8;
      const pi =
        (loan * (rate * Math.pow(1 + rate, n))) / (Math.pow(1 + rate, n) - 1);
      const tax = (ca.medianHomePrice * ca.propertyTaxRate) / 100 / 12;
      const ins = ca.avgInsurance / 12;
      const payment = Math.round(pi + tax + ins);
      return [
        { type: "p" as const, html: `California's median home price sits around $${ca.medianHomePrice.toLocaleString()} — among the highest in the nation — so affordability is as much about income and down payment as it is about interest rates. This 2026 guide helps you set a target that won't stretch you thin.` },
        { type: "h2" as const, text: "The 28/36 rule at California incomes" },
        { type: "p" as const, html: "At $12,000/month gross income, 28% for housing is $3,360 — but in expensive metros that may only cover a condo or a home far from work. Many California buyers technically qualify above their comfort zone. Aim below your maximum, especially if you're dual-income and one partner's job isn't secure." },
        { type: "h2" as const, text: "Prop 13 and property taxes" },
        { type: "p" as const, html: `California's effective property tax rate averages about ${ca.propertyTaxRate}%, thanks in part to Proposition 13, which limits annual assessment increases. Taxes on a $${ca.medianHomePrice.toLocaleString()} home run roughly $${Math.round(tax)}/month — lower than many states as a percentage, but on a much higher base price.` },
        { type: "h2" as const, text: "Sample payment on a median California home" },
        { type: "p" as const, html: `With 20% down and a ${SITE.defaultRate}% 30-year fixed rate, principal and interest on $${ca.medianHomePrice.toLocaleString()} are about $${Math.round(pi)}/month. Add taxes (~$${Math.round(tax)}/mo) and insurance (~$${Math.round(ins)}/mo) for a total near $${payment}/month — before Mello-Roos, HOA, or earthquake coverage.` },
        { type: "h2" as const, text: "Strategies California buyers use in 2026" },
        { type: "ul" as const, items: [
          "Expand search radius — inland and Central Valley prices differ sharply from coastal metros.",
          "Consider a larger down payment to reduce PMI and monthly payment.",
          "Look at first-time buyer programs through CalHFA if you qualify.",
          "Run 15-year vs. 30-year comparisons — higher prices make term choice critical.",
        ] },
        { type: "p" as const, html: `Use the <a href=\"/mortgage-calculator?state=california\">California mortgage calculator</a> with state defaults, or work from income in the <a href=\"/calculators/home-affordability-calculator\">affordability calculator</a>.` },
      ];
    })(),
  },
  {
    slug: "property-taxes-mortgage-payment",
    title: "How Property Taxes Affect Your Monthly Mortgage Payment",
    description:
      "Property taxes can add hundreds to your monthly payment. Learn how they're calculated, which states cost the most, and how to estimate yours.",
    excerpt:
      "Taxes are part of PITI — and they vary wildly by state. Here's how they change what you can afford.",
    category: "guides",
    published: "2026-06-10",
    updated: "2026-06-10",
    readingMinutes: 6,
    tags: ["Property taxes", "PITI", "Guides"],
    relatedCalculators: [
      { href: "/mortgage-calculator", label: "Mortgage Calculator" },
      { href: "/mortgage-calculator?state=texas", label: "Texas Calculator" },
    ],
    body: [
      { type: "p", html: "When buyers search for a \"mortgage calculator with taxes and insurance,\" they're usually trying to avoid the surprise that sinks budgets: a payment that's hundreds higher than principal and interest alone. Property taxes are often the biggest piece of that gap." },
      { type: "h2", text: "How property taxes are calculated" },
      { type: "p", html: "Most counties tax a percentage of your home's assessed value each year. If your home is assessed at $350,000 and the effective rate is 1.2%, you owe $4,200 per year — or $350 per month when escrowed into your mortgage payment." },
      { type: "h2", text: "States where taxes hit hardest" },
      { type: "p", html: "Effective rates vary from under 0.3% in Hawaii to above 2% in parts of New Jersey, Illinois, and Texas. A $300,000 home might cost $75/month in taxes in one state and $500/month in another — same loan, very different budget." },
      { type: "ul", items: [
        "Texas, Illinois, and New Jersey: among the highest effective rates nationally.",
        "Hawaii, Alabama, and Colorado: among the lowest.",
        "California: moderate rate on very high home values — taxes still add up.",
        "Florida: mid-range rates, but insurance often matters more.",
      ] },
      { type: "h2", text: "Taxes and affordability" },
      { type: "p", html: "Lenders include estimated taxes in your debt-to-income calculation, but online calculators that ignore taxes make homes look cheaper than they are. Always use a calculator that includes property tax, insurance, PMI, and HOA — like our <a href=\"/mortgage-calculator\">mortgage calculator</a> — or pick your state page for localized defaults." },
      { type: "h2", text: "Find your state estimate" },
      { type: "p", html: "We publish localized defaults for all 50 states. Start with high-tax markets like <a href=\"/mortgage-calculator?state=texas\">Texas</a>, <a href=\"/mortgage-calculator?state=new-jersey\">New Jersey</a>, or <a href=\"/mortgage-calculator?state=illinois\">Illinois</a>, or browse the full list from the <a href=\"/mortgage-calculator\">main calculator page</a>." },
    ],
  },
  {
    slug: "down-payment-how-much-do-you-need",
    title: "How Much Down Payment Do You Need to Buy a House? (2026)",
    description:
      "From 0% VA loans to 20% conventional down payments — how much you really need, what PMI costs, and how down payment size affects your mortgage.",
    excerpt:
      "You don't always need 20% down — but the amount you put down changes your rate, PMI, and monthly payment.",
    category: "guides",
    published: "2026-06-09",
    updated: "2026-06-09",
    readingMinutes: 6,
    tags: ["Down payment", "PMI", "First-time buyers"],
    relatedCalculators: [
      { href: "/mortgage-calculator", label: "Mortgage Calculator" },
      { href: "/calculators/fha-mortgage-calculator", label: "FHA Calculator" },
      { href: "/calculators/va-mortgage-calculator", label: "VA Calculator" },
    ],
    body: [
      { type: "p", html: "The old 20% down rule still matters for avoiding PMI, but it's not the minimum most buyers need in 2026. Conventional loans start at 3% down for qualified first-time buyers, FHA at 3.5%, and VA loans at 0% for eligible veterans." },
      { type: "h2", text: "Common down payment options" },
      { type: "ul", items: [
        "Conventional: 3–5% for many first-time buyers; 20% avoids PMI.",
        "FHA: 3.5% with a 580+ credit score; 10% if your score is 500–579.",
        "VA: $0 down for eligible service members and veterans.",
        "USDA: $0 down in eligible rural areas (income limits apply).",
      ] },
      { type: "h2", text: "What changes when you put less down" },
      { type: "p", html: "A smaller down payment means a larger loan, a higher monthly payment, and usually mortgage insurance. On a $350,000 home, 5% down ($17,500) versus 20% down ($70,000) can add $200+ to your monthly payment once PMI is included — even at the same interest rate." },
      { type: "h2", text: "Don't forget closing costs" },
      { type: "p", html: "Down payment and closing costs are separate. Closing costs typically run 2–5% of the loan amount. A 5% down buyer on a $350,000 home might need $17,500 down plus $7,000–$14,000 in closing costs — plan for both." },
      { type: "h2", text: "Compare scenarios" },
      { type: "p", html: "Slide the down payment in our <a href=\"/mortgage-calculator\">mortgage calculator</a> to see PMI kick in below 20%. Compare FHA and VA paths in the <a href=\"/calculators/fha-mortgage-calculator\">FHA</a> and <a href=\"/calculators/va-mortgage-calculator\">VA calculators</a> if you're weighing low-down options." },
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

/**
 * Posts relevant to a state — tag/name/slug match first; if few hits,
 * pad with national rates/affordability guides (no state-specific tags).
 */
export function getPostsForState(stateSlug: string, limit = 4): BlogPost[] {
  const state = getState(stateSlug);
  if (!state) return BLOG_POSTS_SORTED.slice(0, limit);

  const name = state.name.toLowerCase();
  const slug = state.slug.toLowerCase();

  const matched = BLOG_POSTS_SORTED.filter((p) => {
    const hay = `${p.slug} ${p.title} ${p.tags.join(" ")}`.toLowerCase();
    return (
      hay.includes(name) ||
      hay.includes(slug) ||
      p.tags.some((t) => t.toLowerCase() === name || t.toLowerCase() === slug)
    );
  });

  if (matched.length >= limit) return matched.slice(0, limit);

  const national = BLOG_POSTS_SORTED.filter(
    (p) =>
      !matched.includes(p) &&
      (p.category === "rates" ||
        p.category === "affordability" ||
        p.category === "guides") &&
      !STATES.some(
        (s) =>
          p.slug.includes(s.slug) ||
          p.tags.some((t) => t.toLowerCase() === s.name.toLowerCase()),
      ),
  );

  return [...matched, ...national].slice(0, limit);
}
