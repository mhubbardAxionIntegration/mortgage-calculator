import type { BlogPost } from "../blogTypes";
import { SITE } from "../site";

export const postsNewHighValue: BlogPost[] = [
  {
    slug: "how-to-get-the-best-mortgage-rate",
    title: "How to Get the Best Mortgage Rate: Loan Estimates, Locks & Float-Downs",
    description:
      "A practical 2026 playbook for shopping 3–5 Loan Estimates, negotiating rate and credits, comparing APR, and using locks vs float-downs.",
    excerpt:
      "The best rate is rarely the first quote. Here is how to shop Loan Estimates, negotiate, and lock without leaving money on the table.",
    category: "rates",
    published: "2026-08-06",
    updated: "2026-08-06",
    readingMinutes: 15,
    tags: ["Rates", "Loan Estimates", "Shopping"],
    relatedCalculators: [
      { href: "/mortgage-calculator", label: "Mortgage Calculator" },
      { href: "/calculators/refinance-mortgage-calculator", label: "Refinance Calculator" },
    ],
    body: [
      {
        type: "p",
        html: `Headline mortgage averages — like our indicative ${SITE.defaultRate}% site default as of ${SITE.ratesAsOf} — are a starting point, not your price. Your personal rate is produced by credit, LTV, product, points, and, crucially, how you shop. This playbook covers the levers borrowers under-use: same-day Loan Estimates, negotiation, APR vs holding period, rate locks, float-downs, and when points beat "no-cost" pricing.`,
      },
      { type: "h2", text: "Step 1: Get your file ready before you burn inquiries" },
      {
        type: "ul",
        items: [
          "Pull all three credit reports; dispute errors; lower revolving utilization.",
          "Know your target purchase price or refinance balance, down payment, and property type.",
          "Decide whether you want a zero-point quote, a one-point buydown, or lender credits for cash to close.",
          "If credit needs work, spend weeks or months first — <a href=\"/blog/improve-credit-score-before-buying\">credit guide</a>.",
        ],
      },
      { type: "h2", text: "Step 2: Shop 3–5 Loan Estimates the same day" },
      {
        type: "p",
        html: "Mortgage shopping inquiries within a focused window (commonly about 45 days under current FICO mortgage-scoring treatment — confirm your model) typically count as one shopping event. Use that window aggressively:",
      },
      {
        type: "ol",
        items: [
          "Request written Loan Estimates (not verbal \"about 6.5%\") from at least three lenders; five helps if you have condo, self-employment, or credit quirks.",
          "Match loan amount, lock period, occupancy, and points/credits assumption across every LE.",
          "Include a bank, a credit union or mortgage banker, and at least one broker or specialty lender if overlays might be an issue.",
          "Compare the note rate, APR, origination charges, and third-party fees that can actually change with shopping.",
        ],
      },
      { type: "h2", text: "Step 3: Negotiate with competing LEs" },
      {
        type: "p",
        html: "Send your preferred lender the better competing LE and ask them to match rate or lender credits. Many will meet a legitimate competitor on marginable fees. Do not assume the lowest note rate wins — a quote with one point prepaid can look \"cheaper\" while costing more cash. See <a href=\"/blog/mortgage-points-explained\">points break-even</a>.",
      },
      { type: "h2", text: "APR, holding period, and no-cost loans" },
      {
        type: "p",
        html: "APR annualizes certain upfront costs, which helps compare similar structures — but it assumes you hold the loan a long time. If you might move or refinance in three years, prioritize cash to close and early payment, not APR alone. \"No-cost\" loans price credits into a higher rate; they can be rational when cash is scarce, expensive when you will keep the loan for a decade.",
      },
      { type: "h2", text: "Rate locks vs float-downs" },
      {
        type: "ul",
        items: [
          "Lock when you cannot afford rates rising before closing — especially once under contract with a fixed closing date.",
          "Float only if you have schedule flexibility and a written plan for when you will lock.",
          "Ask about float-down: market-move threshold, fee (often roughly 0–1% of loan amount), one-time vs multiple, and whether it shortens lock life.",
          "Confirm lock-extension fees before the lock expires — extensions can erase a \"win.\"",
        ],
      },
      { type: "h2", text: "Seller concessions and buydowns as rate strategies" },
      {
        type: "p",
        html: `When sellers have motivation, a credit toward discount points or a 2-1 temporary buydown can beat another price cut for payment relief. Stay inside program caps and structure as allowable costs. Guide: <a href="/blog/seller-concessions-and-rate-buydowns">seller concessions and rate buydowns</a>.`,
      },
      { type: "h2", text: "Overlays, waivers, and specialists" },
      {
        type: "p",
        html: `If one lender's pricing looks great until underwriting declines you for condo paperwork or a credit event that another lender accepts, you were shopping rate in the wrong aisle. <a href="/blog/lender-overlays-vs-loan-guidelines">Overlays vs guidelines</a> explains why. Appraisal waivers (when offered) save money; never assume them.`,
      },
      { type: "h2", text: "Worked comparison" },
      {
        type: "p",
        html: `On a $400,000 loan near ${SITE.defaultRate}%, a 0.25% rate improvement without points saves on the order of $60+/month — thousands over several years. Paying one point ($4,000) for that quarter point only wins if you stay past break-even. Run both paths in the <a href="/mortgage-calculator">mortgage calculator</a> before you negotiate.`,
      },
      { type: "h2", text: "Common questions" },
      {
        type: "ul",
        items: [
          "Should I lock before house hunting? Pre-approvals help; long locks before an address can be pricey — ask about lock-and-shop programs.",
          "Do online lenders always win? Not on overlays or complex income; compare LEs either way.",
          "Is the broker always cheaper? Brokers can shop multiple investors; they are not magic — still compare written LEs.",
        ],
      },
      {
        type: "p",
        html: `Confirm every number on your Closing Disclosure. This guide is educational — verify pricing, lock policies, and credit treatment with a licensed loan officer. Related: <a href="/blog/current-mortgage-rates-2026">2026 rates overview</a>.`,
      },
    ],
  },
  {
    slug: "fha-loan-limits-2026-by-county",
    title: "FHA Loan Limits 2026 by County: Floors, High-Cost Caps & MIP Rules",
    description:
      "How 2026 FHA county loan limits work (floor near $541,287; high-cost near $1,249,125), eligibility basics, and the MIP 10% / 11-year nuance.",
    excerpt:
      "FHA eligibility is national; the maximum loan is local. Here is how 2026 county limits and MIP duration affect your payment strategy.",
    category: "loan-types",
    published: "2026-08-06",
    updated: "2026-08-06",
    readingMinutes: 14,
    tags: ["FHA", "Loan limits", "MIP", "2026"],
    relatedCalculators: [
      { href: "/calculators/fha-mortgage-calculator", label: "FHA Calculator" },
      { href: "/mortgage-calculator", label: "Mortgage Calculator" },
    ],
    body: [
      {
        type: "p",
        html: "FHA loans are insured by the Federal Housing Administration and remain a primary path for buyers with modest down payments or credit that prices poorly on conventional. National eligibility rules set the floor for who can apply; county loan limits set how large an FHA loan you can obtain. Always verify the current map and handbook figures on HUD sources — the numbers below are educational 2026 planning references.",
      },
      { type: "h2", text: "2026 FHA county loan limits (educational snapshot)" },
      {
        type: "ul",
        items: [
          "National floor (lowest-cost counties): about $541,287 for a 1-unit home in 2026.",
          "High-cost ceiling for many areas: about $1,249,125 for a 1-unit home.",
          "Special exception areas (Alaska, Hawaii, Guam, U.S. Virgin Islands) can publish higher limits.",
          "Multi-unit properties have separate higher schedules — check the county and unit count.",
        ],
      },
      {
        type: "p",
        html: `Look up your county before you offer on a high list price. A coastal California or New York metro listing may clear high-cost FHA caps while a Midwest county sticks near the floor. Conventional conforming limits (FHFA) are a parallel track — often near about $832,750 baseline in 2026 for many counties — and matter if you are comparing FHA vs conventional.`,
      },
      { type: "h2", text: "National FHA eligibility basics" },
      {
        type: "ul",
        items: [
          "Credit: many lenders work FHA from about 580+ with 3.5% down; scores from about 500–579 often need about 10% down — individual lenders may set higher overlays.",
          "Down payment: typically 3.5% or 10% as above; gift funds often allowed with documentation.",
          "DTI: underwriting can flex with compensating factors; still budget near sustainable housing ratios.",
          "MIP: upfront premium (commonly financed) plus annual MIP paid monthly.",
          "Property: FHA appraisals emphasize minimum property requirements (safety and soundness), not cosmetic perfection.",
        ],
      },
      { type: "h2", text: "MIP cancel nuance: 10% down and the 11-year rule" },
      {
        type: "p",
        html: "If you put down less than 10%, annual MIP typically lasts for the life of the FHA loan unless you refinance out or otherwise terminate per HUD rules. If you put down at least 10%, annual MIP can usually be canceled after 11 years when other conditions are met. That single structural difference is why \"FHA with 3.5% down forever MIP\" vs \"FHA with 10% down and a MIP end date\" are different products in disguise. Confirm current HUD duration rules before you choose — handbooks get updated.",
      },
      { type: "h2", text: "Taxes and insurance still decide the payment" },
      {
        type: "p",
        html: `County matters twice: once for the max loan, and again for escrow. Model full PITI in a <a href="/mortgage-calculator">state-aware mortgage calculator</a> (try <a href="/mortgage-calculator?state=texas">Texas</a>, <a href="/mortgage-calculator?state=florida">Florida</a>, or <a href="/mortgage-calculator?state=california">California</a>) and add FHA MIP in the <a href="/calculators/fha-mortgage-calculator">FHA calculator</a>.`,
      },
      { type: "h2", text: "Shopping FHA without leaving money on the table" },
      {
        type: "ol",
        items: [
          "Collect Loan Estimates from lenders who actually close FHA regularly — overlays differ.",
          "Compare financed vs paid-in-cash upfront MIP on cash-to-close.",
          "Ask about seller concessions (FHA often allows up to about 6% toward allowable costs).",
          "Plan the exit: many borrowers refinance to conventional once equity supports dropping PMI — <a href=\"/blog/should-you-refinance-2026\">refinance guide</a>.",
        ],
      },
      { type: "h2", text: "FHA vs conventional quick reframe" },
      {
        type: "p",
        html: `Use our deeper <a href="/blog/fha-vs-conventional-loans">FHA vs conventional comparison</a> when credit and hold period are close calls. For high list prices above FHA county caps, conventional, jumbo, or VA (if eligible) may be the only paths.`,
      },
      {
        type: "p",
        html: "Verify limits on HUD's official loan limit lookup and confirm MIP factors with a licensed FHA lender. Educational content only — not an underwriting decision.",
      },
    ],
  },
  {
    slug: "va-loan-entitlement-residual-income",
    title: "VA Loan Entitlement, Residual Income & Funding Fees (2026)",
    description:
      "How VA entitlement, FHFA county limits for partial entitlement, residual income by region, and funding-fee exemptions work in 2026.",
    excerpt:
      "VA loans can mean $0 down — but entitlement, residual income, and funding fees decide what you can actually close.",
    category: "loan-types",
    published: "2026-08-06",
    updated: "2026-08-06",
    readingMinutes: 15,
    tags: ["VA", "Entitlement", "Residual income", "Funding fee"],
    relatedCalculators: [
      { href: "/calculators/va-mortgage-calculator", label: "VA Calculator" },
      { href: "/mortgage-calculator", label: "Mortgage Calculator" },
      { href: "/calculators/home-affordability-calculator", label: "Affordability Calculator" },
    ],
    body: [
      {
        type: "p",
        html: "VA-backed home loans remain one of the strongest benefits for eligible service members, veterans, and surviving spouses: often $0 down, competitive pricing, and no monthly PMI. The details that trip people up are entitlement math, residual income (not just DTI), funding fees and disability exemptions, and how appraisals treat minimum property requirements. Confirm current VA circulars and lender overlays before you rely on any figure here.",
      },
      { type: "h2", text: "Full vs partial entitlement and loan size" },
      {
        type: "p",
        html: `With full entitlement, VA typically does not set a maximum loan amount the way FHA does — lenders still underwrite ability to repay and may impose their own caps. With partial entitlement (for example, another VA loan outstanding or entitlement not fully restored after a prior use), remaining guaranty often interacts with FHFA conforming county limits — commonly discussed against a 2026 baseline near about $832,750 in many counties. Always obtain a Certificate of Eligibility (COE) and have the lender calculate remaining entitlement for your county.`,
      },
      { type: "h2", text: "Residual income by region and family size" },
      {
        type: "p",
        html: "VA underwriting emphasizes residual income: money left after shelter expense, debts, and taxes for day-to-day living. Charts vary by region (Northeast, Midwest, South, West) and family size. That is why two buyers with the same gross DTI can see different VA outcomes when they live in different regions or support different household sizes.",
      },
      {
        type: "ul",
        items: [
          "Higher residual requirements generally apply to larger households.",
          "Geographic residual tables differ — do not borrow a friend's Midwest residual result for a West Coast file.",
          "A residual income reduction of about 5% is sometimes available for certain borrowers living near their duty station — ask your loan officer whether you qualify under current VA rules.",
          "Taxes, insurance, and state veteran benefits that lower housing cost improve residual.",
        ],
      },
      { type: "h2", text: "Funding fees, subsequent use, and disability exemptions" },
      {
        type: "p",
        html: "Most VA purchase and cash-out transactions include a funding fee that varies by first vs subsequent use and down payment. The fee is often financed into the loan. Critically, veterans with qualifying service-connected disability ratings (and some other categories) may be exempt — yet exemptions are under-claimed when COE data or disability documentation is incomplete. Subsequent-use fees are higher than first-use in standard schedules; restoring entitlement after selling a prior VA-financed home (and paying off that loan) can matter for the next purchase. Verify current fee tables on VA.gov.",
      },
      { type: "h2", text: "Entitlement restoration nuances" },
      {
        type: "ul",
        items: [
          "Selling the home and repaying the VA loan typically frees entitlement for another use.",
          "Keeping a prior VA loan (for example, as a rental after PCS) usually ties up entitlement and can force partial-entitlement math.",
          "One-time restoration and refinance rules have specific paperwork paths — use a VA-experienced lender.",
        ],
      },
      { type: "h2", text: "Appraisals: MPR vs cosmetics" },
      {
        type: "p",
        html: "VA appraisals enforce minimum property requirements focused on safety and soundness. Peeling paint in certain contexts, exposed wiring, or non-functional systems can become repair conditions; dated kitchens alone often do not. Knowing MPR vs cosmetic issues prevents failed contracts and rushed credits.",
      },
      { type: "h2", text: "Seller concessions and local affordability" },
      {
        type: "p",
        html: `VA generally limits seller concessions (distinct from reasonable discount points in some reads of the rules) around about 4% of the reasonable value for certain closing costs — confirm with your lender. Local taxes, insurance, and state veteran property-tax benefits change residual income and payment comfort. Model scenarios in the <a href="/calculators/va-mortgage-calculator">VA calculator</a> and a <a href="/mortgage-calculator">state mortgage calculator</a>.`,
      },
      { type: "h2", text: "Shopping tips for VA borrowers" },
      {
        type: "ol",
        items: [
          "Choose lenders who close VA weekly — overlays on credit and condos vary widely.",
          "Bring COE and disability documentation early if you believe you are funding-fee exempt.",
          "Compare Loan Estimates including financed funding fee vs cash payment.",
          "Ask about IRRRL refinance later if rates drop — still run break-even math.",
        ],
      },
      {
        type: "p",
        html: `Related reading: <a href="/blog/lender-overlays-vs-loan-guidelines">overlays</a>, <a href="/blog/down-payment-how-much-do-you-need">down payment options</a>. Verify entitlement, residual charts, and fees with VA resources and a licensed VA lender. Educational only.`,
      },
    ],
  },
];
