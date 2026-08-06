import type { BlogPost } from "../blogTypes";

/** Common pitfalls category posts — mistakes most homebuyers never see coming. */
export const postsPitfalls: BlogPost[] = [
  {
    slug: "mortgage-pitfalls-homebuyers-should-avoid",
    title:
      "Mortgage Pitfalls Homebuyers Should Avoid (2026): The Mistakes That Quietly Cost Thousands",
    description:
      "Avoid rate, denial, and cash-to-close traps: credit changes after pre-approval, one-lender shopping, MIP duration, overlays, and under-estimated PITIA costs.",
    excerpt:
      "Most expensive homebuying mistakes happen between pre-approval and closing — and most are preventable if you know what lenders and Loan Estimates hide.",
    category: "pitfalls",
    published: "2026-08-06",
    updated: "2026-08-06",
    readingMinutes: 16,
    tags: ["Pitfalls", "Homebuying", "Loan Estimates"],
    relatedCalculators: [
      { href: "/", label: "Mortgage Calculator" },
      { href: "/calculators/home-affordability-calculator", label: "Affordability Calculator" },
      { href: "/questions-nobody-thinks-to-ask", label: "Questions Nobody Thinks to Ask" },
    ],
    body: [
      {
        type: "p",
        html: "Common mortgage pitfalls fall into a few buckets: financial preparation, lender selection, loan structure and insurance, documentation and timing, and post-approval behavior. Avoiding them can mean a better rate, fewer surprise checks at closing, or not overpaying for years. This guide is the overview of mistakes most buyers never hear about until it is expensive — then deep-dive posts cover credit, shopping, and insurance timing in more detail.",
      },
      {
        type: "p",
        html: 'Pair this with our <a href="/questions-nobody-thinks-to-ask">questions nobody thinks to ask</a> page when you interview agents and evaluate a specific house. Use our <a href="/blog/how-to-get-the-best-mortgage-rate">best-rate shopping guide</a> when you compare Loan Estimates.',
      },
      { type: "h2", text: "Financial and credit pitfalls" },
      {
        type: "ul",
        items: [
          '<strong>New credit after pre-approval.</strong> Car loans, furniture financing, or new cards raise DTI or ding scores. Lenders re-pull credit and verify employment near closing — a “approved” file can still change.',
          '<strong>DTI-only thinking (especially VA).</strong> Residual income by region and family size often outweighs a “fine” DTI. Marginal residual income can mean denial. See our <a href="/blog/va-loan-entitlement-residual-income">VA residual income guide</a>.',
          "<strong>Under-estimating PITIA.</strong> Principal and interest are only part of the housing payment. Taxes, insurance, HOA, and maintenance rise — sometimes sharply — after purchase.",
          "<strong>Late credit cleanup.</strong> Collections, high utilization, and report errors are far easier to fix months ahead than days before underwriting.",
          "<strong>Hard inquiry clustering outside a shopping window.</strong> Multiple mortgage applications within about 45 days usually count as one inquiry; spreading them over months can hurt the score.",
        ],
      },
      { type: "h2", text: "Lender shopping and comparison pitfalls" },
      {
        type: "ul",
        items: [
          "<strong>One quote only.</strong> Spreads between lenders for the same profile often exceed 0.5 percentage points. Same-day Loan Estimates from 3–5 lenders are high-ROI homework.",
          '<strong>Rate-only comparison.</strong> Compare APR, points, lender fees, and interest over your expected hold period. “No-cost” loans usually recover fees in a higher rate — see <a href="/blog/mortgage-points-explained">points explained</a>.',
          '<strong>Assuming every lender follows the same rules.</strong> FHA and VA set national minimums; many shops add overlays. Meeting the program does not guarantee approval everywhere — <a href="/blog/lender-overlays-vs-loan-guidelines">overlays vs guidelines</a>.',
          "<strong>Never negotiating.</strong> Present a competing Loan Estimate. Originators often match fees or price when the alternative is losing the file.",
        ],
      },
      { type: "h2", text: "Loan structure and cost pitfalls" },
      {
        type: "ul",
        items: [
          '<strong>Ignoring MI duration.</strong> FHA MIP with under 10% down typically lasts for the life of the loan (or until refinance); with 10%+ down it can cancel after about 11 years. Conventional PMI is usually removable at 20% equity — but you often must request it. Details: <a href="/blog/fha-mip-duration-mistakes">FHA MIP duration mistakes</a>.',
          '<strong>Mishandling seller concessions and buydowns.</strong> Caps differ by loan type (often 3–9% conventional by LTV, 6% FHA/USDA, ~4% VA). A temporary 2-1 buydown can beat a similar price cut for cash flow — <a href="/blog/seller-concessions-and-rate-buydowns">concessions guide</a>.',
          "<strong>Vague rate locks.</strong> Standard locks block rate increases, not decreases. Ask about float-down triggers, fees (sometimes 0–1% of loan), and extension costs if closing slips.",
          "<strong>Wrong product for the horizon.</strong> ARMs can look cheap early and shock later; cash-out and streamlined refinance rules have seasoning and benefit tests that differ by program and state.",
        ],
      },
      { type: "h2", text: "Process, timing, and documentation pitfalls" },
      {
        type: "ul",
        items: [
          "<strong>Treating pre-approval as a commitment.</strong> Full underwriting still weighs appraisal, title, employment, and assets.",
          "<strong>Appraisal and title surprises.</strong> Low values, FHA/VA minimum property repairs, or title defects delay or kill deals. Independent inspections still matter.",
          "<strong>Not shopping insurance and title.</strong> Affiliate recommendations are convenient, not mandatory. Quotes vary and change cash to close.",
          '<strong>Skipping local rules.</strong> Transfer taxes, recording fees, refinance net-benefit laws, first-time programs, and <a href="/blog/fha-loan-limits-2026-by-county">county FHA/VA limits</a> are location-specific.',
          "<strong>Late VA entitlement checks.</strong> Partial entitlement, subsequent-use funding fees, restoration limits, and disability fee exemptions change cash and loan size — verify on the COE early.",
        ],
      },
      { type: "h2", text: "Behavioral and long-term pitfalls" },
      {
        type: "ul",
        items: [
          "<strong>Paying points without a hold-period plan.</strong> Break-even only works if you keep the loan long enough.",
          "<strong>Assuming the first or builder’s package is best.</strong> Local assistance, Mortgage Credit Certificates, or seller-paid buydowns can beat a retail quote — but only if you ask.",
          "<strong>Job changes, undocumented large deposits, or co-mingled gifts near closing.</strong> These trigger underwriting letters and delays.",
          "<strong>Going solo on complex income.</strong> Self-employment, multiple W-2s, or multi-unit purchases repay an originator who knows overlays and special programs.",
        ],
      },
      { type: "h2", text: "Bottom line" },
      {
        type: "p",
        html: "The most expensive mistakes are usually preventable: clean credit early, compare full Loan Estimates the same day, ask explicit questions about overlays, float-downs, MIP duration, and concessions, and treat the process as negotiation — not passive acceptance. Verify current guidelines with lenders (details change), and size the house on total ownership cost — not the P&amp;I payment alone — using our <a href=\"/calculators/home-affordability-calculator\">affordability calculator</a> with your state and county.",
      },
      {
        type: "p",
        html: 'Next: <a href="/blog/credit-mistakes-after-mortgage-preapproval">credit mistakes after pre-approval</a>, <a href="/blog/one-lender-quote-mistakes">why one quote costs you</a>, and <a href="/questions-nobody-thinks-to-ask">questions nobody thinks to ask</a>.',
      },
    ],
  },
  {
    slug: "credit-mistakes-after-mortgage-preapproval",
    title:
      "Credit Mistakes After Mortgage Pre-Approval That Ruin Closings",
    description:
      "Why new credit, job changes, large deposits, and late credit cleanup derail underwriting — and how to protect your file from pre-approval to closing.",
    excerpt:
      "Pre-approval is not a finish line. New loans, maxed cards, and unexplained deposits are how “almost closed” deals fall apart.",
    category: "pitfalls",
    published: "2026-08-06",
    updated: "2026-08-06",
    readingMinutes: 12,
    tags: ["Pitfalls", "Credit", "Underwriting"],
    relatedCalculators: [
      { href: "/calculators/home-affordability-calculator", label: "Affordability Calculator" },
      { href: "/blog/improve-credit-score-before-buying", label: "Improve Credit Before Buying" },
    ],
    body: [
      {
        type: "p",
        html: "Lenders typically re-check credit and employment shortly before closing. Anything that changes your debt-to-income ratio, score, or asset story between pre-approval and funding can revise your rate — or stop the loan. These pitfalls are common because they feel harmless in everyday life.",
      },
      { type: "h2", text: "Do not open new credit or finance purchases" },
      {
        type: "p",
        html: "Furniture financing, a new auto loan, or another credit card adds monthly obligations and can lower your score via new inquiries and average age of accounts. Even a $40/month store card can matter on a thin approval. Wait until after closing to make large financed purchases.",
      },
      { type: "h2", text: "Watch utilization and unpaid collections" },
      {
        type: "p",
        html: "High revolving balances relative to limits hurt scores quickly. Pay down utilization early — ideally months ahead — and dispute or resolve collections that a lender overlay will force to be paid anyway. Last-minute cleanup is harder because score updates and underwriter conditions take time.",
      },
      { type: "h2", text: "Hard inquiries: mortgage shopping vs. random applications" },
      {
        type: "p",
        html: "Mortgage rate shopping within a roughly 45-day window is usually treated as a single inquiry for scoring purposes. Opening auto or student applications outside that window — or stretching mortgage shopping over many months — stacks inquiries. Cluster legitimate Loan Estimate shopping tightly.",
      },
      { type: "h2", text: "Job changes and large unexplained deposits" },
      {
        type: "p",
        html: "Switching employers, switching from W-2 to 1099, or receiving a large gift/cash deposit without a paper trail triggers VOE letters and source-of-funds conditions. Keep the same employment story when possible, and document gifts with proper gift letters and wire paths — never co-mingle cash that cannot be traced.",
      },
      { type: "h2", text: "VA buyers: residual income still matters" },
      {
        type: "p",
        html: 'Even with acceptable DTI, thin residual income for your region and family size can block a VA approval. New debts after pre-approval eat residual income first. Read <a href="/blog/va-loan-entitlement-residual-income">VA residual income</a> before you add obligations.',
      },
      { type: "h2", text: "Practical checklist before and after pre-approval" },
      {
        type: "ol",
        items: [
          "Pull your credit early; fix errors and plan paydowns.",
          "Freeze lifestyle financing until funded.",
          "Tell your loan officer before any job change.",
          "Keep gift and earnest-money paths documented.",
          "Ask what the lender re-checks in the final week.",
        ],
      },
      {
        type: "p",
        html: 'Related: <a href="/blog/mortgage-pitfalls-homebuyers-should-avoid">mortgage pitfalls overview</a> and <a href="/blog/improve-credit-score-before-buying">how to improve credit before buying</a>.',
      },
    ],
  },
  {
    slug: "one-lender-quote-mistakes",
    title:
      "Why Getting Only One Mortgage Quote Is One of the Costliest Mistakes",
    description:
      "How same-day Loan Estimates, APR vs rate, overlays, and negotiation change what you actually pay — and why one lender is never enough.",
    excerpt:
      "Half a percentage point between lenders is common. One quote is how that gap stays invisible until it is too late.",
    category: "pitfalls",
    published: "2026-08-06",
    updated: "2026-08-06",
    readingMinutes: 13,
    tags: ["Pitfalls", "Loan Estimates", "Rates"],
    relatedCalculators: [
      { href: "/blog/how-to-get-the-best-mortgage-rate", label: "Best Mortgage Rate Guide" },
      { href: "/calculators/refinance-mortgage-calculator", label: "Refinance Break-Even" },
      { href: "/", label: "Mortgage Calculator" },
    ],
    body: [
      {
        type: "p",
        html: "Getting a single mortgage quote feels efficient. It is often the most expensive shortcut in the process. Lenders do not price identical files identically — spreads of more than 0.5 percentage points on rate, plus large fee differences, show up constantly when borrowers collect formal Loan Estimates on the same day.",
      },
      { type: "h2", text: "What to compare (not just the headline rate)" },
      {
        type: "ul",
        items: [
          "Interest rate and whether it assumes points or lender credits.",
          "APR and total lender fees on the Loan Estimate.",
          "Interest paid over the years you actually expect to keep the loan.",
          "Lock length, float-down options, and extension fees.",
          "Whether “no-cost” just means a higher rate.",
        ],
      },
      { type: "h2", text: "Same-day Loan Estimates matter" },
      {
        type: "p",
        html: "Market moves between Tuesday and Friday make Friday’s quote look “worse” even if the lender is competitive. Request 3–5 Loan Estimates for the same loan amount, product, and lock period on the same day. Use a tighter mortgage-inquiry shopping window so score damage stays minimal.",
      },
      { type: "h2", text: "Overlays hide inside “we don’t do that loan”" },
      {
        type: "p",
        html: 'Two FHA lenders can treat the same 580 score and collection differently because of overlays. If one lender declines, ask whether the issue is a hard guideline or a company overlay — then shop specialists. Deep dive: <a href="/blog/lender-overlays-vs-loan-guidelines">lender overlays vs loan guidelines</a>.',
      },
      { type: "h2", text: "Negotiate with paper, not vibes" },
      {
        type: "p",
        html: "Email your preferred lender a competing Loan Estimate and ask them to match or beat price and fees. Many will. You are not being difficult — you are doing the work the market expects of an informed borrower. Full playbook: <a href=\"/blog/how-to-get-the-best-mortgage-rate\">how to get the best mortgage rate</a>.",
      },
      { type: "h2", text: "Builder or “preferred” lender is another single-quote trap" },
      {
        type: "p",
        html: "Incentives can be real — and still lose to an independent quote plus a seller concession or rate buydown. Always run both sheets of numbers before you waive shopping.",
      },
      {
        type: "p",
        html: 'Related: <a href="/blog/mortgage-pitfalls-homebuyers-should-avoid">all mortgage pitfalls</a> and <a href="/questions-nobody-thinks-to-ask">questions to ask your realtor and about the property</a>.',
      },
    ],
  },
  {
    slug: "fha-mip-duration-mistakes",
    title:
      "FHA MIP Duration Mistakes: Why Your Down Payment Choice Can Last a Decade",
    description:
      "How FHA annual MIP lasts for the loan life under 10% down vs canceling after about 11 years with 10%+ down — and how that changes total cost.",
    excerpt:
      "Choosing 3.5% vs 10% down is not only about cash today. On FHA loans it can decide whether mortgage insurance ever goes away.",
    category: "pitfalls",
    published: "2026-08-06",
    updated: "2026-08-06",
    readingMinutes: 11,
    tags: ["Pitfalls", "FHA", "MIP"],
    relatedCalculators: [
      { href: "/calculators/fha-mortgage-calculator", label: "FHA Calculator" },
      { href: "/blog/fha-loan-limits-2026-by-county", label: "FHA Loan Limits by County" },
      { href: "/blog/fha-vs-conventional-loans", label: "FHA vs Conventional" },
    ],
    body: [
      {
        type: "p",
        html: "One of the most overlooked FHA costs is how long annual mortgage insurance premium (MIP) sticks. Borrowers often focus on the monthly MIP line and miss the duration rule that can add years of premiums.",
      },
      { type: "h2", text: "The duration rule most buyers miss" },
      {
        type: "ul",
        items: [
          "With less than 10% down, annual MIP typically lasts for the life of the loan (or until you refinance or sell).",
          "With 10% or more down, annual MIP can usually be canceled after 11 years if other program conditions are met.",
          "Upfront MIP is separate and often financed into the loan — it raises the balance even when monthly MIP eventually stops.",
        ],
      },
      { type: "h2", text: "Why this changes the 3.5% vs 10% decision" },
      {
        type: "p",
        html: "Stretching to 10% down can cost more cash at closing but may eliminate a decade-plus of annual MIP versus staying at 3.5%. Run both scenarios in our <a href=\"/calculators/fha-mortgage-calculator\">FHA calculator</a> with your county selected so loan limits and local tax/insurance are realistic. Also compare a conventional loan with PMI that you can request to cancel around 20% equity — see <a href=\"/blog/what-is-pmi-and-how-to-remove-it\">PMI removal</a>.",
      },
      { type: "h2", text: "County limits still cap the story" },
      {
        type: "p",
        html: 'Even a perfect MIP plan fails if the loan exceeds the HUD county limit. 2026 floors are typically around $541,287 for 1-unit homes in most areas, with high-cost counties much higher. Read <a href="/blog/fha-loan-limits-2026-by-county">FHA loan limits by county</a> and pick your county in the calculator.',
      },
      { type: "h2", text: "Lender overlays still apply" },
      {
        type: "p",
        html: "HUD minimums are not every lender’s minimums. A shop may require higher scores or more reserves even when FHA would allow the file. If MIP duration nudged you toward FHA, still shop overlays carefully.",
      },
      {
        type: "p",
        html: 'Related: <a href="/blog/mortgage-pitfalls-homebuyers-should-avoid">mortgage pitfalls overview</a> and <a href="/blog/fha-vs-conventional-loans">FHA vs conventional</a>.',
      },
    ],
  },
  {
    slug: "underestimating-piti-housing-costs",
    title:
      "Underestimating PITI: The Affordability Pitfall That Breaks Budgets After Closing",
    description:
      "Why focusing on principal and interest alone fails — property taxes, insurance, HOA, and rising escrow costs change what you can truly afford by location.",
    excerpt:
      "The payment you approved in underwriting is not the payment you may have two years later if taxes and insurance reprice.",
    category: "pitfalls",
    published: "2026-08-06",
    updated: "2026-08-06",
    readingMinutes: 12,
    tags: ["Pitfalls", "Affordability", "Escrow"],
    relatedCalculators: [
      { href: "/calculators/home-affordability-calculator", label: "Affordability Calculator" },
      { href: "/", label: "Mortgage Calculator" },
      { href: "/blog/property-taxes-mortgage-payment", label: "Property Taxes & Payments" },
    ],
    body: [
      {
        type: "p",
        html: "Buyers obsess over the mortgage rate and ignore the rest of PITIA: principal, interest, taxes, insurance, and association dues. Effective property tax rates can sit under 0.5% in some states and over 2% in others. Insurance in wind, wildfire, or flood-exposed markets can rival the tax bill. Those lines are why two identical loan amounts feel completely different by county.",
      },
      { type: "h2", text: "What gets under-counted" },
      {
        type: "ul",
        items: [
          "Property taxes after reassessment or homestead changes.",
          "Homeowners insurance shopping — listings often show last year’s premium.",
          "HOA or condo fees and special assessments.",
          "Maintenance reserves (rule-of-thumb percentages hide big roof/HVAC years).",
          "Utilities on older or poorly insulated homes.",
        ],
      },
      { type: "h2", text: "Escrow cushions and payment shocks" },
      {
        type: "p",
        html: "Lenders collect taxes and insurance into escrow. When premiums or assessments jump, your monthly payment can rise even if the note rate never changed. Budget a cushion; do not treat the first escrow estimate as permanent.",
      },
      { type: "h2", text: "Use location-aware tools before you fall in love with the house" },
      {
        type: "p",
        html: 'Set state and county in our <a href="/">mortgage calculator</a> and <a href="/calculators/home-affordability-calculator">affordability calculator</a> so tax and insurance defaults are closer to local reality. Then replace defaults with quotes and tax bills from the actual property — questions you should force into writing on our <a href="/questions-nobody-thinks-to-ask">questions page</a>.',
      },
      { type: "h2", text: "28/36 still helps — but it is not location-proof" },
      {
        type: "p",
        html: 'The classic income ratios are national rules of thumb. Realistic housing cost depends on where the house sits. Deep dive: <a href="/blog/how-much-house-can-i-afford">how much house can I afford</a>.',
      },
      {
        type: "p",
        html: 'Related: <a href="/blog/mortgage-pitfalls-homebuyers-should-avoid">mortgage pitfalls overview</a> and <a href="/blog/property-taxes-mortgage-payment">how property taxes hit your payment</a>.',
      },
    ],
  },
];
