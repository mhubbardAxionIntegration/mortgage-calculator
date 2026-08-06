import type { BlogPost } from "../blogTypes";

export const postsNewHighValueB: BlogPost[] = [
  {
    slug: "refinance-closing-costs-by-state",
    title: "Refinance Closing Costs by State: Fees, Net Benefit & Break-Even",
    description:
      "How refinance closing costs vary by state, where tangible net benefit rules apply, and how to run break-even math in 2026.",
    excerpt:
      "Refinance break-even is national math — title, transfer taxes, and anti-churning rules are local. Here is how to budget both.",
    category: "refinancing",
    published: "2026-08-06",
    updated: "2026-08-06",
    readingMinutes: 14,
    tags: ["Refinancing", "Closing costs", "Net benefit"],
    relatedCalculators: [
      { href: "/calculators/refinance-mortgage-calculator", label: "Refinance Break-Even Calculator" },
      { href: "/mortgage-calculator", label: "Mortgage Calculator" },
    ],
    body: [
      {
        type: "p",
        html: "A refinance only wins if you recover costs and improve your interest path. The amortization math is the same in every state; what changes is the fee stack (title, recording, transfer taxes), prepaid escrow habits, and — in some states — tangible net benefit or anti-churning rules that constrain serial refinances. Use this guide with our break-even calculator before you pay for an appraisal.",
      },
      { type: "h2", text: "What usually shows up in refinance costs" },
      {
        type: "ul",
        items: [
          "Origination / underwriting / processing fees (shoppable).",
          "Appraisal (unless waived) and credit report.",
          "Title search and lender's title insurance — premiums often follow state filings or promulgated rates.",
          "Recording fees and, in some jurisdictions, mortgage or intangibles taxes.",
          "Prepaid interest and refreshed escrow for taxes and insurance.",
          "Discount points or, conversely, lender credits.",
        ],
      },
      { type: "h2", text: "Why the same loan costs more in some states" },
      {
        type: "p",
        html: "Title insurance pricing models differ: filed rates, promulgated rates, or competitive markets. Transfer and mortgage taxes can be material in parts of New York, Florida, and other jurisdictions depending on the transaction structure. Recording fees are minor alone but add up with courier and settlement charges. High-tax, high-insurance states also raise cash to close when escrow is recalculated — even if lender fees look identical on a Loan Estimate.",
      },
      {
        type: "p",
        html: `Compare a refinance on a <a href="/mortgage-calculator?state=texas">Texas</a>, <a href="/mortgage-calculator?state=florida">Florida</a>, <a href="/mortgage-calculator?state=california">California</a>, or <a href="/mortgage-calculator?state=new-york">New York</a> payment context, then plug costs into the <a href="/calculators/refinance-mortgage-calculator">refinance break-even calculator</a>.`,
      },
      { type: "h2", text: "Tangible net benefit and anti-churning" },
      {
        type: "p",
        html: "Several states require lenders to document that a refinance provides a tangible net benefit to the borrower, or they restrict repeated refinances within short windows (anti-churning). Examples commonly discussed by compliance teams include Alaska, Arkansas, California, Florida, Massachusetts, and others — lists and tests change, so treat this as a prompt to ask your loan officer, not as a complete legal catalog. The practical effect: a tiny rate improvement with high fees may be unapprovable even if you would personally accept it.",
      },
      { type: "h2", text: "Nationwide break-even method" },
      {
        type: "ol",
        items: [
          "Add all refinance costs you will not roll into the loan (or include rolled costs as higher balance).",
          "Divide by monthly P&amp;I savings for crude break-even months.",
          "Compare remaining interest on the old loan vs total interest on the new path — especially if you restart a 30-year term.",
          "Stress-test selling in year two or three; if you move before break-even, skip the refinance.",
        ],
      },
      {
        type: "p",
        html: `Worked pattern: $6,000 costs / $150 monthly savings ≈ 40 months. If you will move in 24 months, walk away — or look at a shorter-cost refinance with lender credits (higher rate) if cash-flow relief is urgent.`,
      },
      { type: "h2", text: "Streamlined FHA and VA refinances" },
      {
        type: "p",
        html: "FHA streamline and VA IRRRL products follow federal frameworks that can reduce documentation or appraisal needs when rules are met. Outcomes still feel local: title practices, state taxes, funding-fee treatment on some VA cash-out (IRRRL is usually rate/term), and residual/MIP carryover math. Always confirm current HUD/VA eligibility — streamline does not mean \"zero diligence.\"",
      },
      { type: "h2", text: "Cash-out nuances" },
      {
        type: "p",
        html: "Cash-out refinances typically price worse, allow less LTV, and may face stricter net-benefit scrutiny. Texas homestead cash-out has specialized constitutional constraints — use a Texas specialist. Compare cash-out against a HELOC when you need a moderate sum for a defined project.",
      },
      { type: "h2", text: "Shop the refinance" },
      {
        type: "ul",
        items: [
          "Gather 3–5 Loan Estimates the same day — <a href=\"/blog/how-to-get-the-best-mortgage-rate\">shopping playbook</a>.",
          "Ask about appraisal waivers; when granted, they cut cost and timeline.",
          "Negotiate origination fees using competing LEs.",
          "Consider whether a <a href=\"/blog/mortgage-recasting-vs-refinancing\">recast</a> beats refinancing after a principal lump sum.",
        ],
      },
      {
        type: "p",
        html: `Start with <a href="/blog/should-you-refinance-2026">Should You Refinance in 2026?</a> for decision framing, then run numbers in the <a href="/calculators/refinance-mortgage-calculator">refinance calculator</a>. Confirm state-specific taxes and net-benefit rules with a licensed lender and settlement professional. Educational only.`,
      },
    ],
  },
  {
    slug: "seller-concessions-and-rate-buydowns",
    title: "Seller Concessions and Rate Buydowns: Caps by Loan Type (2026)",
    description:
      "How seller concessions and temporary rate buydowns work in 2026 — conventional, FHA, USDA, and VA caps, plus 2-1 buydown structure.",
    excerpt:
      "Seller credits can cut cash to close or buy down your rate — if you stay inside program caps and structure them correctly.",
    category: "guides",
    published: "2026-08-06",
    updated: "2026-08-06",
    readingMinutes: 13,
    tags: ["Seller concessions", "Buydowns", "Closing costs"],
    relatedCalculators: [
      { href: "/mortgage-calculator", label: "Mortgage Calculator" },
      { href: "/calculators/fha-mortgage-calculator", label: "FHA Calculator" },
      { href: "/calculators/va-mortgage-calculator", label: "VA Calculator" },
    ],
    body: [
      {
        type: "p",
        html: "When inventory sits or a seller needs certainty, concessions can fund your closing costs, prepaid items, or a temporary rate buydown. Done well, a credit improves cash to close without confusing the appraisal. Done poorly, it looks like an undisclosed price cut, blows past program caps, or leaves you unprepared for the payment after a buydown expires.",
      },
      { type: "h2", text: "Typical seller concession caps by loan type" },
      {
        type: "ul",
        items: [
          "Conventional: often about 3% of the purchase price with less than 10% down, about 6% with 10–24.99% down, and about 9% with 25%+ down on primary residences (investment property caps are tighter) — confirm current agency/investor rules.",
          "FHA: commonly up to about 6% of the lesser of price or appraised value toward allowable closing costs and prepaid items.",
          "USDA: commonly up to about 6% toward allowable costs.",
          "VA: seller concessions (a defined category under VA rules) generally limited to about 4% of the reasonable value for certain items — distinct from normal discount points in many lender readings; verify with a VA lender.",
        ],
      },
      {
        type: "p",
        html: "Caps change with occupancy and updates from Fannie, Freddie, HUD, USDA, and VA. Treat percentages here as educational planning ranges for 2026, not a substitute for the seller on your Loan Estimate.",
      },
      { type: "h2", text: "Structure as a credit — not an informal price cut" },
      {
        type: "p",
        html: "Appraisers and underwriters need a clean contract. Prefer language that the seller contributes a stated dollar amount toward buyer's allowable closing costs, prepaids, and/or rate buydown rather than quietly inflating price to \"rebate\" cash outside the settlement statement. Inflated price strategies can fail appraisal or create LTV problems.",
      },
      { type: "h2", text: "Closing-cost credit vs permanent points vs temporary buydown" },
      {
        type: "ul",
        items: [
          "Closing-cost credit: reduces cash to close; payment unchanged except where prepaid escrow shrinks.",
          "Permanent discount points: buy a lower note rate for the life of the loan — run break-even like <a href=\"/blog/mortgage-points-explained\">points explained</a>.",
          "Temporary buydown (for example 2-1): subsidy account lowers the payment in year one by about 2 percentage points and year two by about 1 point (structures vary), then the payment rises to the note rate.",
        ],
      },
      { type: "h2", text: "How a 2-1 buydown feels in practice" },
      {
        type: "p",
        html: "Suppose the note rate is 6.75% on a $350,000 loan. A classic 2-1 buydown makes year-one payments as if the rate were about 4.75% and year-two as if about 5.75%, with years three onward at 6.75%. Someone — buyer, seller, builder, or lender — must fund the subsidy equal to the payment differences. Qualify carefully: many lenders underwrite at the note rate, not the bought-down payment. Model the post-buydown PITI in the <a href=\"/mortgage-calculator\">mortgage calculator</a> so year three does not shock your budget.",
      },
      { type: "h2", text: "When concessions beat another price reduction" },
      {
        type: "p",
        html: "A $8,000 price cut saves a little principal and interest but may not help a cash-strapped buyer close. The same $8,000 as a closing-cost credit can unlock the purchase. Conversely, if you have plentiful cash and will hold the home 10+ years, pushing the seller toward permanent points or a lower price may beat a temporary buydown.",
      },
      { type: "h2", text: "Negotiation checklist" },
      {
        type: "ol",
        items: [
          "Ask your loan officer the exact remaining concession room under your program and LTV.",
          "Put the dollar amount and allowable uses in the purchase contract or addendum.",
          "Align the appraisal strategy with your agent — do not over-list to manufacture credits.",
          "Compare Loan Estimates with and without financed points if the seller funds a permanent buydown.",
        ],
      },
      {
        type: "p",
        html: `Pair this with <a href="/blog/closing-costs-explained">closing costs explained</a> and <a href="/blog/how-to-get-the-best-mortgage-rate">rate shopping</a>. Verify program caps with a licensed lender before you finalize an offer. Educational content only.`,
      },
    ],
  },
  {
    slug: "lender-overlays-vs-loan-guidelines",
    title: "Lender Overlays vs Loan Guidelines: Why One Lender Says No",
    description:
      "Why FHA, VA, and conventional guidelines are not the same as a lender's overlays — and how to shop specialists when you are declined.",
    excerpt:
      "Declined at one lender does not mean declined everywhere. Overlays — not just HUD or Fannie guidelines — often decide the file.",
    category: "guides",
    published: "2026-08-06",
    updated: "2026-08-06",
    readingMinutes: 12,
    tags: ["Overlays", "Underwriting", "Shopping"],
    relatedCalculators: [
      { href: "/mortgage-calculator", label: "Mortgage Calculator" },
      { href: "/calculators/fha-mortgage-calculator", label: "FHA Calculator" },
      { href: "/calculators/va-mortgage-calculator", label: "VA Calculator" },
    ],
    body: [
      {
        type: "p",
        html: "Borrowers hear \"you don't qualify for FHA\" or \"VA won't do this\" when the real story is \"this lender's overlay won't.\" Agency and Ginnie Mae guidelines set a baseline; each bank, credit union, and investor adds extra rules — overlays — for risk appetite, repurchase history, and operational comfort. Understanding the difference turns a dead end into a shopping problem.",
      },
      { type: "h2", text: "Guidelines vs overlays in plain English" },
      {
        type: "ul",
        items: [
          "Guidelines: published rules from Fannie Mae, Freddie Mac, FHA/HUD, VA, USDA, or a jumbo investor.",
          "Overlays: extra lender or investor requirements — higher credit floors, longer seasoning after bankruptcy, banned condo projects, stricter gift-fund paths, residual cushions above VA minimums, and more.",
          "Automated underwriting findings (DU/LPA) can say Approve/Eligible while a lender still declines on overlay or manual conditions.",
        ],
      },
      { type: "h2", text: "Common overlays that surprise buyers" },
      {
        type: "ul",
        items: [
          "FICO floors above FHA's published minimums (for example, some lenders want 620–640+ even when FHA allows lower with more down).",
          "Condo and manufactured-housing project restrictions beyond the agency list.",
          "Self-employment or 1099 documentation layers that exceed guideline minimums.",
          "Limits on funds to close from certain online bank dumps without seasoned paper trails.",
          "VA lenders requiring residual income well above the VA regional charts.",
        ],
      },
      { type: "h2", text: "Why big banks and brokers feel different" },
      {
        type: "p",
        html: "Depository banks often keep overlays tight because loans sit on the balance sheet or feed conservative investors. Mortgage bankers and brokers may access multiple investor matrices — including specialty FHA, VA, or non-QM shelves — so the same borrower profile can clear elsewhere. That does not make every broker better; it means you should diversify who sees your file.",
      },
      { type: "h2", text: "What to do after a decline" },
      {
        type: "ol",
        items: [
          "Ask in writing: guideline issue or overlay? Which rule citation?",
          "Request the adverse action reason codes and keep your Loan Estimate for comparison.",
          "Take the same package to a lender that advertises the niche (recent credit event, condo, VA residual, foreign national jumbo, etc.).",
          "Still shop 3–5 LEs in a rate-shopping window so you are not stuck with the first approval's pricing — <a href=\"/blog/how-to-get-the-best-mortgage-rate\">shopping guide</a>.",
        ],
      },
      { type: "h2", text: "Product-specific notes" },
      {
        type: "p",
        html: `FHA county limits and MIP are national program features — <a href="/blog/fha-loan-limits-2026-by-county">FHA limits</a> — but condo HOAs and credit floors are classic overlay territory. VA residual income and entitlement are VA concepts — <a href="/blog/va-loan-entitlement-residual-income">VA guide</a> — yet lenders layer extra residual cushions. Conventional PMI cancellation follows federal/agency paths; some servicers still make appraisal-based cancellation painful.`,
      },
      { type: "h2", text: "How overlays interact with rate quotes" },
      {
        type: "p",
        html: "The lender with the flashiest online rate may also have the harshest overlays. Price and approvability trade off. A slightly higher rate from a specialist who can close beats a teaser quote that dies in underwriting two weeks before closing.",
      },
      {
        type: "p",
        html: `Model payments once you know which product you can actually close — <a href="/mortgage-calculator">mortgage calculator</a>, <a href="/calculators/fha-mortgage-calculator">FHA</a>, <a href="/calculators/va-mortgage-calculator">VA</a>. This article is educational; only a licensed lender can apply investor overlays to your file.`,
      },
    ],
  },
  {
    slug: "mortgage-recasting-vs-refinancing",
    title: "Mortgage Recasting vs Refinancing: Which Saves More?",
    description:
      "Compare mortgage recasting and refinancing in 2026 — when a lump-sum re-amortization beats paying closing costs for a new rate.",
    excerpt:
      "A recast lowers your payment after a big principal payment without a new loan. A refinance changes your rate — at a price.",
    category: "refinancing",
    published: "2026-08-06",
    updated: "2026-08-06",
    readingMinutes: 12,
    tags: ["Recasting", "Refinancing", "Strategy"],
    relatedCalculators: [
      { href: "/calculators/refinance-mortgage-calculator", label: "Refinance Calculator" },
      { href: "/mortgage-calculator", label: "Mortgage Calculator" },
    ],
    body: [
      {
        type: "p",
        html: "When you receive a lump sum — bonus, inheritance, sale of another property — two popular moves are refinancing to a lower rate or recasting the existing loan. They solve different problems. Refinancing replaces the note (new rate, new fees, new term options). Recasting applies a large principal payment and re-amortizes the remaining balance over the remaining term at the same interest rate, usually for a modest administrative fee.",
      },
      { type: "h2", text: "What a mortgage recast does" },
      {
        type: "ul",
        items: [
          "You make a substantial principal payment (servicers often set minimums such as $5,000+).",
          "The servicer re-calculates the monthly P&amp;I using the same rate and remaining term.",
          "Your payment drops; your rate does not.",
          "Fees are typically a few hundred dollars — far below full refinance closing costs — when the servicer allows recasts.",
          "Not every loan or investor permits recasting; ask your servicer in writing.",
        ],
      },
      { type: "h2", text: "What a refinance does" },
      {
        type: "ul",
        items: [
          "New interest rate and (usually) new Loan Estimate fees.",
          "Chance to shorten or lengthen term, switch ARM to fixed, or change loan type (for example FHA to conventional to drop MIP).",
          "Possible to cash out or remove PMI when equity supports it.",
          "Costs commonly run about 2–5% of the loan unless offset by lender credits.",
        ],
      },
      { type: "h2", text: "When recasting wins" },
      {
        type: "p",
        html: `You already have a strong rate, you just want a lower payment after a lump sum, and your servicer offers recast. Example: you owe $320,000 at a competitive fixed rate with 300 months left. Paying $40,000 toward principal and recasting drops P&amp;I without paying thousands in title and points. Run leftover-balance payment estimates in the <a href="/mortgage-calculator">mortgage calculator</a>.`,
      },
      { type: "h2", text: "When refinancing wins" },
      {
        type: "p",
        html: `Your current rate is meaningfully higher than market quotes, you need to change loan type (MIP escape), or you want cash-out. Even then, run break-even including state-specific costs — <a href="/blog/refinance-closing-costs-by-state">closing costs by state</a> and <a href="/blog/should-you-refinance-2026">2026 refinance guide</a> — using the <a href="/calculators/refinance-mortgage-calculator">refinance calculator</a>.`,
      },
      { type: "h2", text: "PMI, MIP, and equity quirks" },
      {
        type: "p",
        html: `A recast alone may not cancel PMI; you still must meet the servicer's LTV cancellation process — <a href="/blog/what-is-pmi-and-how-to-remove-it">PMI guide</a>. FHA annual MIP duration follows HUD rules, not recast mythology. If the goal is exiting FHA MIP, a conventional refinance after sufficient equity usually matters more than a recast.`,
      },
      { type: "h2", text: "Decision checklist" },
      {
        type: "ol",
        items: [
          "Get your servicer's written recast policy, minimum principal amount, fee, and timeline.",
          "Get 3 Loan Estimates for a rate-and-term refinance the same day.",
          "Compare payment after recast vs payment after refinance net of costs.",
          "If selling within two years, prefer the cheaper administrative path unless you need a product change.",
        ],
      },
      {
        type: "p",
        html: "Confirm investor rules with your servicer and refinance pricing with a licensed lender. Educational estimates only — not advice to call your note due.",
      },
    ],
  },
];
