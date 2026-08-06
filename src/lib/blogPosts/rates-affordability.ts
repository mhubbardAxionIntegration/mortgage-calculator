import type { BlogPost } from "../blogTypes";
import { SITE } from "../site";

export const postsRatesAndAffordability: BlogPost[] = [
  {
    slug: "current-mortgage-rates-2026",
    title: "Current Mortgage Rates in 2026: What Homebuyers Should Expect",
    description:
      "Where mortgage rates stand in 2026, what moves them, how Loan Estimates and locks work, and practical steps to secure a better quote.",
    excerpt:
      "Where mortgage rates stand in 2026, what drives them, and how shopping Loan Estimates and locks can improve your personal rate.",
    category: "rates",
    published: "2026-01-15",
    updated: "2026-08-06",
    readingMinutes: 14,
    tags: ["Rates", "Market", "Loan Estimates"],
    relatedCalculators: [
      { href: "/mortgage-calculator", label: "Mortgage Calculator" },
      { href: "/calculators/refinance-mortgage-calculator", label: "Refinance Calculator" },
      { href: "/calculators/arm-mortgage-calculator", label: "ARM Calculator" },
    ],
    body: [
      {
        type: "p",
        html: `Mortgage rates are the single biggest lever on what your home costs over time. In 2026, the national average for a 30-year fixed loan has hovered around ${SITE.defaultRate}% (indicative as of ${SITE.ratesAsOf}), though your personal rate can land well above or below that depending on credit, down payment, points, loan type, and how carefully you shop. This guide explains what moves rates, why your quote differs from the headline, and the practical levers — Loan Estimates, locks, float-downs, and seller concessions — that improve outcomes.`,
      },
      { type: "h2", text: "What moves mortgage rates" },
      {
        type: "p",
        html: "Mortgage rates are not set by any single institution. They reflect a mix of forces:",
      },
      {
        type: "ul",
        items: [
          "The Federal Reserve's policy rate, which influences short-term borrowing costs across the economy.",
          "The 10-year Treasury yield, which mortgage rates tend to track closely.",
          "Inflation expectations — higher expected inflation generally pushes rates up.",
          "Investor demand for mortgage-backed securities.",
          "Your credit profile, loan type, occupancy, property type, and down payment.",
          "Lender overlays and temporary pricing adjustments on a given day.",
        ],
      },
      { type: "h2", text: "Worked payment sensitivity" },
      {
        type: "p",
        html: `On a $350,000 loan amount with a 30-year term near ${SITE.defaultRate}%, a one-percentage-point rate change typically moves principal and interest by roughly $200–$230 per month before taxes and insurance. Over 30 years, the interest difference can reach tens of thousands of dollars. Use our <a href="/mortgage-calculator">mortgage calculator</a> and nudge the rate slider — including PMI if your down payment is under 20% — so you see the full PITI picture, not just P&amp;I.`,
      },
      { type: "h2", text: "Why your rate differs from the headline" },
      {
        type: "p",
        html: "Advertised rates are often best-case scenarios for highly qualified borrowers. Lenders price risk: a 760+ credit score, 20% down, and a conforming primary-residence loan will usually earn a lower rate than a 640 score with 5% down on the same day. Condo vs. single-family, cash-out refinance vs. purchase, investment property, and discount points also change the note rate. Pure amortization math is location-agnostic; realistic payments still need county tax and insurance assumptions.",
      },
      { type: "h2", text: "Shop 3–5 Loan Estimates the same day" },
      {
        type: "p",
        html: "The fastest way to improve your personal rate is structured shopping, not waiting for a perfect headline:",
      },
      {
        type: "ol",
        items: [
          "Request written Loan Estimates from at least three lenders — five is better if your credit or condo is quirky — on the same day with the same loan amount, lock period, and points/credits assumption.",
          "Multiple mortgage inquiries within a focused window (often about 45 days under current scoring models) typically count as a single rate-shopping event; verify the rule your credit file uses.",
          "Compare APR and the fees that survive shopping (origination, underwriting, credit, appraisal) — not just the note rate.",
          "Negotiate: send competing LEs to the lender you prefer and ask them to match rate or credits. Many will.",
          "Decide holding period: buying points makes sense only if you keep the loan past break-even; a &quot;no-cost&quot; loan usually prices the credits into a higher rate.",
        ],
      },
      {
        type: "p",
        html: `For a deeper shopping playbook, see <a href="/blog/how-to-get-the-best-mortgage-rate">how to get the best mortgage rate</a> and <a href="/blog/mortgage-points-explained">mortgage points explained</a>.`,
      },
      { type: "h2", text: "Rate locks vs float-downs" },
      {
        type: "p",
        html: "A rate lock commits the lender to a rate (and often points) for a set period — commonly 30–60 days while you clear underwriting. Floating means you have not locked yet and could win or lose if markets move. Some lenders offer a float-down: if rates drop enough after you lock (threshold varies; often a fraction of a point), you can move to the lower rate, sometimes for a fee of roughly 0–1% of the loan, and policies differ on one-time vs. multiple float-downs. Ask in writing before you lock: fee, market-move threshold, and whether float-down changes the lock expiration.",
      },
      { type: "h2", text: "Seller concessions and temporary buydowns" },
      {
        type: "p",
        html: `In many markets you can ask the seller to fund closing costs or a temporary rate buydown instead of (or in addition to) a price cut. Program caps differ — conventional seller concessions often allow about 3–9% depending on down payment, FHA/USDA commonly up to 6%, VA around 4% for certain closing costs. Structure concessions as a credit toward allowable costs, not an informal price cut that confuses appraisal. A 2-1 temporary buydown lowers the payment in years one and two; know who funds it and what the fully indexed payment will be. Details: <a href="/blog/seller-concessions-and-rate-buydowns">seller concessions and rate buydowns</a>.`,
      },
      { type: "h2", text: "Fixed vs ARM in a 2026 context" },
      {
        type: "p",
        html: `A 30-year fixed loan buys payment certainty. A 5/1 or 7/1 ARM may start lower, then adjust with an index plus margin after the intro period, subject to periodic and lifetime caps. ARM usage tends to be higher in high-cost states where payment stretch is severe. Stress-test both in the <a href="/calculators/arm-mortgage-calculator">ARM calculator</a> and the main fixed-rate tool — and remember local taxes/insurance still apply either way.`,
      },
      { type: "h2", text: "Refinancing when rates move" },
      {
        type: "p",
        html: `If you already have a mortgage, compare current principal and interest to a new quote with the <a href="/calculators/refinance-mortgage-calculator">refinance calculator</a>. Divide closing costs by monthly savings for break-even months, and watch whether a new 30-year term erases interest savings. Some states require a tangible net benefit analysis — see <a href="/blog/refinance-closing-costs-by-state">refinance closing costs by state</a>.`,
      },
      { type: "h2", text: "Common questions" },
      {
        type: "ul",
        items: [
          "Should I wait for the Fed? Mortgage rates often move on Treasury markets before or after Fed meetings — shopping quotes beats forecasting.",
          "Is the lowest rate always best? Not if you pay more points than your holding period recovers, or starve cash reserves.",
          "Do location and county matter for the rate itself? Mostly for loan limits, taxes, insurance, and some state programs — amortization is national, escrow items are local.",
        ],
      },
      {
        type: "p",
        html: `Rates change daily. Treat any figure here as educational and confirm current pricing with a licensed loan officer. Verify program rules with HUD, VA, or FHFA sources when limits or insurance are involved. Methodology: <a href="/how-we-calculate">how we calculate</a>.`,
      },
    ],
  },
  {
    slug: "how-much-house-can-i-afford",
    title: "How Much House Can I Afford? The 28/36 Rule Explained",
    description:
      "How lenders use the 28/36 debt-to-income rule, why local taxes and insurance change realism, and how to set a comfortable 2026 home budget.",
    excerpt:
      "The 28/36 rule is how lenders size your budget — but taxes, insurance, and HOA by location decide what you can actually afford.",
    category: "affordability",
    published: "2026-02-03",
    updated: "2026-08-06",
    readingMinutes: 13,
    tags: ["Affordability", "Budgeting", "DTI"],
    relatedCalculators: [
      { href: "/calculators/home-affordability-calculator", label: "Home Affordability Calculator" },
      { href: "/mortgage-calculator", label: "Mortgage Calculator" },
    ],
    body: [
      {
        type: "p",
        html: "\"How much house can I afford?\" is the first question most buyers ask — and the answer is about more than what a lender will approve. The goal is a payment that fits your life after taxes, insurance, HOA, maintenance, and the cash you still need for emergencies. Pure loan amortization is location-agnostic; realistic affordability is not.",
      },
      { type: "h2", text: "The 28/36 rule" },
      {
        type: "p",
        html: "Most lenders use the 28/36 rule as a starting point for debt-to-income (DTI):",
      },
      {
        type: "ul",
        items: [
          "Front-end (28%): total monthly housing (principal, interest, taxes, insurance — and often HOA/PMI) at or below about 28% of gross monthly income.",
          "Back-end (36%): all monthly debt payments combined — housing plus car loans, student loans, and minimum credit-card payments — at or below about 36%.",
        ],
      },
      {
        type: "p",
        html: "Some programs allow higher ratios (FHA sometimes toward the low-to-mid 40s with compensating factors; conventional automated underwriting can stretch for strong files), but staying near 28/36 keeps your budget resilient when insurance renews or a car fails.",
      },
      { type: "h2", text: "Worked example" },
      {
        type: "p",
        html: "Say you earn $9,000 per month before taxes. The 28% guideline caps housing near $2,520, and the 36% guideline caps total debt at $3,240. If you already pay $600 toward a car and student loans, that leaves roughly $2,640 for housing under the back-end — your effective ceiling is the lower of the two limits. Now compare two locations with the same $2,400 housing budget: in a low-tax inland county, most of that budget funds the loan; in a high-tax Texas market or high-insurance Florida coastal ZIP, a larger share goes to escrow, so the affordable purchase price drops even at the same interest rate.",
      },
      { type: "h2", text: "What location changes (and what it does not)" },
      {
        type: "ul",
        items: [
          "Property tax effective rates can run under about 0.5% in some states and above 2% in others — on the same price, escrow differs by hundreds per month.",
          "Insurance tracks risk: hurricane, wildfire, hail, and flood zones can dominate the payment more than a 0.25% rate change.",
          "HOA and condo fees are part of housing cost in DTI for many lenders but easy to omit in napkin math.",
          "Home prices and county conforming / FHA limits change which loan products you can use.",
          "The amortization formula for a given rate, term, and balance is the same nationwide — escrow and limits are what make state tools matter.",
        ],
      },
      { type: "h2", text: "What the rule leaves out" },
      {
        type: "ul",
        items: [
          "Closing costs (typically about 2–5% of the loan amount) and prepaid escrow at closing.",
          "Maintenance and repairs (a common planning range is near 1% of home value per year).",
          "Higher utilities than rent, commuting costs, and child care changes.",
          "An emergency fund so a surprise expense does not jeopardize the mortgage.",
        ],
      },
      { type: "h2", text: "Shopping leverage that protects affordability" },
      {
        type: "p",
        html: "Affordability is not only about picking a cheaper house. Better loan terms raise the price you can buy without raising the payment:",
      },
      {
        type: "ol",
        items: [
          'Shop 3–5 Loan Estimates the same day so you are not stuck with one lender\'s overlay or pricing — <a href="/blog/how-to-get-the-best-mortgage-rate">best-rate guide</a>.',
          'Ask about seller concessions or a temporary 2-1 buydown when markets are soft — <a href="/blog/seller-concessions-and-rate-buydowns">seller concessions</a>.',
          'Improve credit before applying; even one pricing tier can free hundreds of monthly capacity — <a href="/blog/improve-credit-score-before-buying">credit prep guide</a>.',
          'If VA-eligible, model residual income and funding-fee scenarios in the <a href="/calculators/va-mortgage-calculator">VA calculator</a>; disability-related funding-fee exemptions are sometimes under-claimed.',
          'Verify county FHA limits before assuming FHA works on a high-priced listing — <a href="/blog/fha-loan-limits-2026-by-county">FHA limits 2026</a>.',
        ],
      },
      { type: "h2", text: "State-specific next steps" },
      {
        type: "p",
        html: `Run the national <a href="/calculators/home-affordability-calculator">home affordability calculator</a>, then pressure-test the monthly payment in the <a href="/mortgage-calculator">mortgage calculator</a> with your state's tax and insurance defaults — for example <a href="/mortgage-calculator?state=texas">Texas</a>, <a href="/mortgage-calculator?state=florida">Florida</a>, <a href="/mortgage-calculator?state=georgia">Georgia</a>, or <a href="/mortgage-calculator?state=california">California</a>. Deep dives: <a href="/blog/how-much-house-can-i-afford-georgia">Georgia</a>, <a href="/blog/how-much-house-can-i-afford-texas">Texas</a>, <a href="/blog/how-much-house-can-i-afford-florida">Florida</a>, <a href="/blog/how-much-house-can-i-afford-california">California</a>.`,
      },
      { type: "h2", text: "Common questions" },
      {
        type: "ul",
        items: [
          "Should I borrow the maximum the lender offers? Usually no — leave room for insurance renewals and life events.",
          "Do gross or net income matter? Lenders use gross for DTI; you live on net. Budget on take-home.",
          "Where do official program numbers live? Confirm loan limits and insurance rules with current HUD, VA, and FHFA publications — figures here are educational snapshots for 2026.",
        ],
      },
      {
        type: "p",
        html: "Target a payment below your maximum so you keep breathing room. Estimates on this site are educational, not loan offers — confirm with a licensed lender.",
      },
    ],
  },
  {
    slug: "current-mortgage-rates-june-2026",
    title: "Current Mortgage Rates in June 2026",
    description:
      "Where 30-year and 15-year mortgage rates stood in June 2026, what moved the market, and how to estimate your payment — updated with shopping tips for later 2026.",
    excerpt:
      "A June 2026 snapshot of mortgage rates, plus the Loan Estimate and lock checklist still useful later in the year.",
    category: "rates",
    published: "2026-06-15",
    updated: "2026-08-06",
    readingMinutes: 11,
    tags: ["Rates", "June 2026", "Market"],
    relatedCalculators: [
      { href: "/mortgage-calculator", label: "Mortgage Calculator" },
      { href: "/calculators/refinance-mortgage-calculator", label: "Refinance Calculator" },
      { href: "/calculators/arm-mortgage-calculator", label: "ARM Calculator" },
    ],
    body: [
      {
        type: "p",
        html: `This June 2026 snapshot complements our broader <a href="/blog/current-mortgage-rates-2026">2026 mortgage rates guide</a>. We keep the month's indicative levels for historical context and refresh the budgeting and shopping workflow so it remains useful later in 2026 — without pretending June quotes still bind in August.`,
      },
      { type: "h2", text: "Where rates stood that month" },
      {
        type: "p",
        html: "Headline averages are a starting point. In June 2026, well-qualified borrowers with strong credit and 20% down often saw rates near or slightly below the national average, while buyers with smaller down payments or lower scores landed higher. Fifteen-year fixed loans typically priced below comparable 30-year terms.",
      },
      {
        type: "ul",
        items: [
          `30-year fixed: roughly ${SITE.defaultRate}% national average (indicative site default, originally aligned to mid-2026).`,
          "15-year fixed: typically priced below the 30-year average for similar profiles.",
          '5/1 and 7/1 ARMs: often started lower than fixed rates, then adjust after the initial period — stress-test with the <a href="/calculators/arm-mortgage-calculator">ARM calculator</a>.',
          "FHA and VA: note rates can look competitive, but MIP or funding fees change total cost; county limits still apply for FHA and for some VA partial-entitlement cases.",
        ],
      },
      { type: "h2", text: "What moved rates in June 2026" },
      {
        type: "p",
        html: "Mortgage rates track the broader bond market more closely than any single Fed announcement. That month, traders weighed inflation reports, jobs data, and expectations for future policy easing. When the 10-year Treasury yield rises, mortgage rates tend to follow within days. Geopolitical news and Treasury auction demand can also push rates independently of housing demand.",
      },
      { type: "h2", text: "A practical budgeting workflow (still valid)" },
      {
        type: "ol",
        items: [
          "Pick a target home price and down payment for the ZIP you will actually shop.",
          'Run a full PITI estimate in the <a href="/mortgage-calculator">mortgage calculator</a> at today\'s indicative rate and again 1% higher.',
          'If you already own, compare your current P&amp;I to a new quote in the <a href="/calculators/refinance-mortgage-calculator">refinance calculator</a> and compute break-even months — including state-specific title/transfer friction from <a href="/blog/refinance-closing-costs-by-state">closing costs by state</a>.',
          'Request 3–5 Loan Estimates the same day, then negotiate credits or rate using competing LEs — see <a href="/blog/how-to-get-the-best-mortgage-rate">best mortgage rate</a>.',
          "Ask about lock length, extension fees, and float-down rules before you lock.",
        ],
      },
      { type: "h2", text: "Location still belongs in a \"rates\" snapshot" },
      {
        type: "p",
        html: `A national average does not include Texas property taxes, Florida wind premiums, or California Mello-Roos. Open a state-preloaded calculator such as <a href="/mortgage-calculator?state=texas">Texas</a>, <a href="/mortgage-calculator?state=florida">Florida</a>, or <a href="/mortgage-calculator?state=california">California</a> before you decide a payment is affordable.`,
      },
      { type: "h2", text: "How this page differs from the evergreen guide" },
      {
        type: "p",
        html: `Use this page for a dated level check and the June macro narrative. Use the <a href="/blog/current-mortgage-rates-2026">2026 rates guide</a> for locks, float-downs, and Loan Estimate shopping depth. Methodology: <a href="/how-we-calculate">how we calculate</a>. Confirm live pricing with a licensed lender; verify HUD/VA/FHFA figures when products depend on limits or insurance.`,
      },
    ],
  },
  {
    slug: "mortgage-points-explained",
    title: "Mortgage Points: Should You Pay to Buy Down Your Rate?",
    description:
      "How discount points work in 2026, break-even math vs lender credits, and when buying down your mortgage rate is worth it.",
    excerpt:
      "Points let you pay upfront for a lower rate. Whether that pays off comes down to holding period — and how you shop Loan Estimates.",
    category: "rates",
    published: "2026-06-10",
    updated: "2026-08-06",
    readingMinutes: 12,
    tags: ["Points", "Rates", "Loan Estimates"],
    relatedCalculators: [
      { href: "/mortgage-calculator", label: "Mortgage Calculator" },
      { href: "/calculators/refinance-mortgage-calculator", label: "Refinance Calculator" },
    ],
    body: [
      {
        type: "p",
        html: "Discount points let you pay extra at closing in exchange for a lower interest rate. One point costs 1% of your loan amount and often lowers the rate by about 0.25%, though the exact trade depends on the lender and market day. Origination points (lender fees expressed as points) are different — clarify which you are being offered on the Loan Estimate.",
      },
      { type: "h2", text: "The break-even on points" },
      {
        type: "p",
        html: "Buying points only pays off if you keep the loan long enough to recoup the upfront cost through lower monthly payments. On a $300,000 loan, one point costs $3,000. If it saves you $45 a month, you break even in about 67 months — a little over five and a half years. If you refinance or sell in year three, you likely lost money on those points.",
      },
      { type: "h2", text: "Worked comparison with today's indicative rate" },
      {
        type: "p",
        html: `At an indicative ${SITE.defaultRate}% 30-year rate on $300,000, small rate cuts change P&amp;I by dozens of dollars per month — meaningful over a decade, modest over two years. Use the <a href="/mortgage-calculator">mortgage calculator</a> twice: once at the no-points rate and once at the bought-down rate. Divide the cash paid for points by the monthly difference. That is your personal break-even, independent of marketing slogans.`,
      },
      { type: "h2", text: "Points vs lender credits and \"no-cost\" loans" },
      {
        type: "p",
        html: "Lender credits work in the other direction: you accept a higher rate so the lender pays part of your closing costs. \"No-cost\" or \"no-points, no-fees\" loans almost always price those credits into the rate. Use the same break-even logic. Credits help cash-constrained buyers; points help long-horizon owners. Never mix quotes that include different point/credit assumptions without recalculating — that is why same-day Loan Estimates with a declared points target matter.",
      },
      { type: "h2", text: "Shopping points with competing Loan Estimates" },
      {
        type: "ol",
        items: [
          "Ask every lender for a zero-point quote and a one-point quote on the same day.",
          "Compare APR and the cash-to-close line, not the note rate alone.",
          "Negotiate: if Lender A is cheapest at zero points but Lender B is better at one point, ask A to match the bought-down price.",
          "Confirm whether seller concessions can fund points or a temporary buydown within program caps — <a href=\"/blog/seller-concessions-and-rate-buydowns\">concessions guide</a>.",
        ],
      },
      { type: "h2", text: "When points make sense" },
      {
        type: "ul",
        items: [
          "You plan to stay well past the break-even point.",
          "You have cash to spare at closing without draining emergency reserves.",
          "You want the lowest durable payment and are unlikely to refinance soon.",
          "You are buying a long-term primary home in a market where you expect to hold through a rate cycle.",
        ],
      },
      { type: "h2", text: "When to skip them" },
      {
        type: "ul",
        items: [
          "You might move or refinance within a few years.",
          "You would rather put the cash toward a larger down payment to avoid PMI.",
          "Your closing budget is already tight after earnest money and prepaid escrow.",
          "You expect rates to fall enough that a refinance is likely before break-even — see <a href=\"/blog/should-you-refinance-2026\">refinance break-even guide</a>.",
        ],
      },
      { type: "h2", text: "Common questions" },
      {
        type: "ul",
        items: [
          "Are points tax-deductible? Purchase points on a primary home are often deductible in the year paid under current IRS rules; refinance points are usually amortized — confirm with a tax professional.",
          "Do float-downs refund points? Policies vary; get float-down fees and point treatment in writing before you lock.",
          "Can I roll points into the loan? Sometimes as financed costs within LTV limits; that raises the balance and changes break-even.",
        ],
      },
      {
        type: "p",
        html: `Already considering a refinance? Model whether leftover points from a recent purchase would be wasted if you refinance early — then use the <a href="/calculators/refinance-mortgage-calculator">refinance calculator</a>. Broader shopping tactics: <a href="/blog/how-to-get-the-best-mortgage-rate">how to get the best mortgage rate</a>. Educational content only — verify pricing with a licensed lender.`,
      },
    ],
  },
];
