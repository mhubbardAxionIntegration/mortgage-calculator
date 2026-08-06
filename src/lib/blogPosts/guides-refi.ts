import type { BlogPost } from "../blogTypes";

export const postsGuidesRefi: BlogPost[] = [
  {
    slug: "should-you-refinance-2026",
    title: "Should You Refinance in 2026? A Break-Even Guide",
    description:
      "Decide whether refinancing in 2026 makes sense using break-even math, lifetime interest, tangible net benefit rules, and Loan Estimate shopping.",
    excerpt:
      "Refinancing is not free. Here is the break-even math, state net-benefit friction, and shopping steps that tell you whether it is worth it.",
    category: "refinancing",
    published: "2026-05-30",
    updated: "2026-08-06",
    readingMinutes: 14,
    tags: ["Refinancing", "Strategy", "Break-even"],
    relatedCalculators: [
      { href: "/calculators/refinance-mortgage-calculator", label: "Refinance Calculator" },
      { href: "/", label: "Mortgage Calculator" },
    ],
    body: [
      {
        type: "p",
        html: "Refinancing replaces your current mortgage with a new one — usually to lower your rate, shorten your term, switch from an ARM to a fixed rate, drop PMI/MIP, or tap equity. The key question is not just \"can I get a lower rate?\" but \"will I stay long enough to come out ahead on closing costs and lifetime interest?\" Break-even math is nationwide; title, transfer taxes, and some tangible net benefit laws are local.",
      },
      { type: "h2", text: "The break-even method" },
      {
        type: "p",
        html: "Refinancing has closing costs, typically about 2–5% of the loan amount unless you take a lender credit for a higher rate. Divide total costs by monthly P&amp;I savings for break-even months. If the new loan saves $200 a month and costs $5,000 to close, you break even in 25 months. Stay longer than that and payment savings look profitable — then still check whether restarting a 30-year term added more interest than you saved.",
      },
      { type: "h2", text: "Worked example" },
      {
        type: "p",
        html: `Suppose you owe $280,000 at a higher legacy rate with 300 months left, and you are offered a new lower rate on a fresh 30-year term with $6,500 in closing costs. Monthly P&amp;I savings might look attractive, but lifetime interest on the longer clock can shrink the win. Plug the same inputs into the <a href="/calculators/refinance-mortgage-calculator">refinance break-even calculator</a> to see break-even months and interest on both paths before you pay appraisal or lock fees.`,
      },
      { type: "h2", text: "State costs and tangible net benefit / anti-churning" },
      {
        type: "p",
        html: `Title premiums, recording fees, and transfer taxes vary widely by state. Several states — including Alaska, Arkansas, California, Florida, Massachusetts, and others — impose tangible net benefit or anti-churning standards that constrain serial refinances. Streamlined FHA and VA refinances follow federal program rules, but local title practice and fees still shape cash to close. Deep dive: <a href="/blog/refinance-closing-costs-by-state">refinance closing costs by state</a>.`,
      },
      { type: "h2", text: "Good reasons to refinance" },
      {
        type: "ul",
        items: [
          "You can lower your rate enough to outlast the break-even after all costs.",
          "You want to switch from an adjustable to a fixed rate for payment certainty.",
          "You want to shorten the term and can afford the higher payment.",
          "You have built enough equity to drop PMI/MIP via a conventional rate-and-term refinance.",
          "You qualify for a VA IRRRL or FHA streamline where fee structure and residual rules fit (verify current VA/HUD guidance).",
        ],
      },
      { type: "h2", text: "When not to refinance" },
      {
        type: "ul",
        items: [
          "You may sell or move before recovering closing costs.",
          "The payment drop comes only from stretching the term while total interest rises.",
          "Cash-out pricing is worse than a HELOC for a short-term project.",
          "You are chasing a teaser ARM without modeling the post-reset payment — use the <a href=\"/calculators/arm-mortgage-calculator\">ARM calculator</a>.",
          "A simple <a href=\"/blog/mortgage-recasting-vs-refinancing\">recast</a> would lower the payment after a lump sum without new rate risk.",
        ],
      },
      { type: "h2", text: "Rate-and-term vs cash-out" },
      {
        type: "p",
        html: "Rate-and-term refinances change rate, term, or loan type. Cash-out adds to the balance and often prices slightly worse with stricter LTV caps. If you need cash for a defined project, compare cash-out against a HELOC so you do not put your entire first mortgage rate at risk for a short need.",
      },
      { type: "h2", text: "Shop the refinance like a purchase" },
      {
        type: "ol",
        items: [
          "Collect 3–5 Loan Estimates the same day with the same loan amount, points, and lock period.",
          "Negotiate fees using competing LEs; refinance origination fees are often movable.",
          "Ask about float-downs if you lock before the closing package is final.",
          "Confirm appraisal waiver eligibility — waivers save money when offered, but you cannot assume one.",
          'Use the shopping checklist in <a href="/blog/how-to-get-the-best-mortgage-rate">how to get the best mortgage rate</a>.',
        ],
      },
      {
        type: "p",
        html: `Run your numbers in the <a href="/calculators/refinance-mortgage-calculator">refinance calculator</a> before you commit to an application fee. Confirm state net-benefit rules and current VA/HUD streamline criteria with a licensed lender. Educational estimates only.`,
      },
    ],
  },
  {
    slug: "closing-costs-explained",
    title: "Closing Costs Explained: What Homebuyers Pay at the Table",
    description:
      "A 2026 breakdown of typical mortgage closing costs, seller concessions, lender credits, and how to compare Loan Estimates.",
    excerpt:
      "Closing costs usually run 2–5% of the loan. Here is what they include, how concessions help, and how to keep them down.",
    category: "guides",
    published: "2026-06-04",
    updated: "2026-08-06",
    readingMinutes: 12,
    tags: ["Closing", "Costs", "Loan Estimates"],
    relatedCalculators: [
      { href: "/calculators/home-affordability-calculator", label: "Affordability Calculator" },
      { href: "/", label: "Mortgage Calculator" },
    ],
    body: [
      {
        type: "p",
        html: "Closing costs are the fees you pay to finalize your mortgage, and they are easy to underestimate. They sit on top of the down payment, not inside it. Shopping Loan Estimates and negotiating seller concessions can move cash-to-close as much as a small rate change moves the monthly payment.",
      },
      { type: "h2", text: "What is typically included" },
      {
        type: "ul",
        items: [
          "Loan origination and underwriting fees.",
          "Appraisal and credit-report fees.",
          "Title search, title insurance, and escrow/settlement fees.",
          "Prepaid property taxes and homeowners insurance.",
          "Recording fees and, in some areas, transfer taxes.",
          "Discount points or, conversely, lender credits that offset fees.",
        ],
      },
      { type: "h2", text: "How much to expect" },
      {
        type: "p",
        html: "Closing costs generally run about 2–5% of the loan amount. On a $280,000 loan, that is roughly $5,600 to $14,000 — separate from your down payment. Your lender must provide a Loan Estimate early and a Closing Disclosure before signing; compare them carefully. Prepaid escrow items can look large in high-tax or high-insurance counties even when lender fees are competitive. Transfer and title practices also differ by state — see <a href=\"/blog/refinance-closing-costs-by-state\">costs by state</a> for refinance parallels that often apply to purchases too.",
      },
      { type: "h2", text: "Cash to close vs monthly payment" },
      {
        type: "p",
        html: `A lower monthly payment does not mean lower cash to close. Points, larger prepaid taxes, and HOA move-in fees can spike day-of funding. Use the <a href="/">mortgage calculator</a> for the recurring payment and keep a separate closing-cost worksheet for cash at the table.`,
      },
      { type: "h2", text: "Seller concessions and temporary buydowns" },
      {
        type: "p",
        html: `Program caps matter: conventional seller concessions often allow roughly 3–9% depending on down payment, FHA/USDA commonly up to 6%, VA about 4% toward certain allowable costs. Prefer structuring as a closing-cost credit rather than a casual price cut. A 2-1 buydown can lower early years' payments if someone funds the subsidy account. Full guide: <a href="/blog/seller-concessions-and-rate-buydowns">seller concessions and rate buydowns</a>.`,
      },
      { type: "h2", text: "Ways to reduce cash to close" },
      {
        type: "ul",
        items: [
          "Shop multiple lenders and compare Loan Estimates line by line the same day.",
          "Ask the preferred lender to match competing origination or underwriting fees.",
          "Consider lender credits against a higher rate — run break-even like you would for points.",
          "Check first-time buyer, down-payment-assistance, and Mortgage Credit Certificate (MCC) programs in your state.",
          "Ask whether an appraisal waiver is possible (more common on some refinances than purchases).",
        ],
      },
      { type: "h2", text: "Common questions" },
      {
        type: "ul",
        items: [
          "Are prepaid taxes \"fees\"? They are still cash due at closing even though they are not lender profit.",
          "Can I roll all closing costs into the loan? Only within LTV and program rules; rolling costs raises the balance and payment.",
          "Who picks the title company? It depends on state custom and the purchase contract — shop when you control the choice.",
        ],
      },
      {
        type: "p",
        html: `Factor closing costs into your overall budget alongside the monthly payment — our <a href="/calculators/home-affordability-calculator">affordability calculator</a> helps keep the full picture in view. Confirm final figures on your Closing Disclosure with a licensed lender and settlement agent.`,
      },
    ],
  },
  {
    slug: "first-time-homebuyer-guide-georgia",
    title: "First-Time Homebuyer Guide for Georgia (2026)",
    description:
      "A step-by-step 2026 guide for first-time homebuyers in Georgia — budgeting, credit, Georgia Dream, Loan Estimates, and closing.",
    excerpt:
      "From budgeting and pre-approval to closing day — a practical, Georgia-specific roadmap for first-time buyers in 2026.",
    category: "guides",
    published: "2026-05-01",
    updated: "2026-08-06",
    readingMinutes: 13,
    tags: ["First-time buyers", "Georgia", "Guides"],
    relatedCalculators: [
      { href: "/?state=georgia", label: "Georgia Mortgage Calculator" },
      { href: "/calculators/home-affordability-calculator", label: "Affordability Calculator" },
      { href: "/calculators/fha-mortgage-calculator", label: "FHA Calculator" },
    ],
    body: [
      {
        type: "p",
        html: "Buying your first home in Georgia is exciting — and a lot less stressful when you know the steps ahead. With median prices often in the mid-$300,000s statewide and effective property taxes often near roughly 0.8%, Georgia remains more approachable than many coastal markets. Still, loan shopping, insurance, and cash to close decide whether the purchase feels sustainable.",
      },
      { type: "h2", text: "1. Set a realistic Georgia budget" },
      {
        type: "p",
        html: `Before you tour homes, figure out what you can comfortably afford using the 28/36 rule — then stress-test taxes and insurance. Atlanta metro prices run higher than many rural and small-city markets. Our <a href="/calculators/home-affordability-calculator">affordability calculator</a> and <a href="/blog/how-much-house-can-i-afford-georgia">Georgia affordability guide</a> turn income and debts into a target range.`,
      },
      { type: "h2", text: "2. Check and build your credit" },
      {
        type: "p",
        html: `Your credit score drives rate and PMI. Pull reports, dispute errors, pay down revolving balances, and avoid opening new credit in the months before you apply. Time hard inquiries inside a mortgage shopping window — see <a href="/blog/improve-credit-score-before-buying">credit prep</a> and <a href="/blog/how-to-get-the-best-mortgage-rate">rate shopping</a>.`,
      },
      { type: "h2", text: "3. Explore first-time buyer programs and MCCs" },
      {
        type: "p",
        html: "Georgia's Department of Community Affairs administers Georgia Dream and related assistance that can help with down payment or favorable pricing for eligible first-time buyers — verify current income limits and home price caps on official DCA materials. FHA (3.5% down with sufficient credit) and VA ($0 down when eligible) remain popular. Ask lenders whether a Mortgage Credit Certificate or other statewide products stack with your loan type; stacking rules change, so confirm rather than assume.",
      },
      { type: "h2", text: "4. Get pre-approved — and shop Loan Estimates" },
      {
        type: "ul",
        items: [
          "Gather pay stubs, W-2s or tax returns, and bank statements.",
          "Compare written Loan Estimates from at least three lenders the same day.",
          "Get a pre-approval letter so sellers take your offers seriously.",
          "Ask about overlays on condos, gift funds, or recent credit events — <a href=\"/blog/lender-overlays-vs-loan-guidelines\">overlays guide</a>.",
        ],
      },
      { type: "h2", text: "5. Offers, concessions, and inspections" },
      {
        type: "p",
        html: `In balanced or buyer-friendly pockets of Georgia, ask for seller concessions toward closing costs or a temporary buydown within program caps rather than only chasing a lower price. Structure credits cleanly for the appraisal. Guide: <a href="/blog/seller-concessions-and-rate-buydowns">seller concessions</a>. Always budget for a thorough inspection — red clay moisture, roofs, and HVAC age matter in Georgia summers.`,
      },
      { type: "h2", text: "6. Close with eyes on prepaid escrow" },
      {
        type: "p",
        html: "Once under contract, complete appraisal and underwriting, review your Closing Disclosure, and fund. Closing costs often land near 2–5% of the loan. Prepaid taxes and insurance can surprise first-timers even when origination fees look low.",
      },
      { type: "h2", text: "Estimate your Georgia payment" },
      {
        type: "p",
        html: `Our <a href="/?state=georgia">Georgia mortgage calculator</a> is pre-loaded with state average tax and insurance figures. Compare FHA in the <a href="/calculators/fha-mortgage-calculator">FHA calculator</a> if you are low on cash to close. Verify Georgia Dream details with DCA and final pricing with a licensed lender — estimates here are educational.`,
      },
    ],
  },
  {
    slug: "property-taxes-mortgage-payment",
    title: "How Property Taxes Affect Your Monthly Mortgage Payment",
    description:
      "How property taxes flow into PITI, which states cost the most, and how to estimate taxes before you offer in 2026.",
    excerpt:
      "Taxes are part of PITI — and they vary wildly by state. Here is how they change what you can afford and how to estimate them.",
    category: "guides",
    published: "2026-06-10",
    updated: "2026-08-06",
    readingMinutes: 11,
    tags: ["Property taxes", "PITI", "Guides"],
    relatedCalculators: [
      { href: "/", label: "Mortgage Calculator" },
      { href: "/?state=texas", label: "Texas Calculator" },
      { href: "/calculators/home-affordability-calculator", label: "Affordability Calculator" },
    ],
    body: [
      {
        type: "p",
        html: "When buyers search for a \"mortgage calculator with taxes and insurance,\" they are usually trying to avoid the surprise that sinks budgets: a payment hundreds higher than principal and interest alone. Property taxes are often the biggest piece of that gap — and they are entirely local even when your note rate is priced nationally.",
      },
      { type: "h2", text: "How property taxes are calculated" },
      {
        type: "p",
        html: "Most counties tax a percentage of your home's assessed value each year. If your home is assessed at $350,000 and the effective rate is 1.2%, you owe $4,200 per year — or $350 per month when escrowed into your mortgage payment. Assessments, exemptions, and millage rates differ by county; homestead exemptions can lower the bill after you occupy as a primary residence.",
      },
      { type: "h2", text: "States where taxes hit hardest — and lightest" },
      {
        type: "p",
        html: "Effective rates vary from well under 0.5% in some states to above 2% in parts of New Jersey, Illinois, and Texas. A $300,000 home might cost under $100/month in taxes in one state and $500+/month in another — same loan, very different budget.",
      },
      {
        type: "ul",
        items: [
          "Texas, Illinois, and New Jersey: among the highest effective rates nationally.",
          "Hawaii, Alabama, and Colorado: among the lower effective rates (still verify the county).",
          "California: moderate rate on very high home values — Prop 13 limits annual assessment growth, but the dollar tax on a high purchase price still adds up.",
          "Florida: mid-range taxes for many counties, but insurance often matters more than the millage rate.",
        ],
      },
      { type: "h2", text: "Taxes, DTI, and loan shopping" },
      {
        type: "p",
        html: `Lenders include estimated taxes in your debt-to-income calculation. Online tools that ignore taxes make homes look cheaper than they are. Always use a calculator that includes property tax, insurance, PMI, and HOA — like our <a href="/">mortgage calculator</a> — or pick a state page for localized defaults. A better Loan Estimate rate cannot fully offset a high-millage county; shop both the loan and the location.`,
      },
      { type: "h2", text: "Worked comparison" },
      {
        type: "p",
        html: "Imagine a $400,000 purchase with 20% down at the same interest rate in two places. At a 0.6% effective tax rate, taxes are about $200/month. At 2.0%, taxes are about $667/month — a $467 gap that is equivalent to a very large rate increase on the same loan balance. That is why affordability guides for <a href=\"/blog/how-much-house-can-i-afford-texas\">Texas</a> and <a href=\"/blog/how-much-house-can-i-afford-california\">California</a> feel so different even when national rates match.",
      },
      { type: "h2", text: "Insurance and HOA hide in the same escrow conversation" },
      {
        type: "p",
        html: "Buyers who nail the tax estimate sometimes forget wind, flood, wildfire, or HOA dues. Lenders count those toward housing expense when required. Get hazard and flood quotes before you waive contingencies that depend on affordability.",
      },
      { type: "h2", text: "Find your state estimate" },
      {
        type: "p",
        html: `We publish localized defaults for all 50 states. Start with high-tax markets like <a href="/?state=texas">Texas</a>, <a href="/?state=new-jersey">New Jersey</a>, or <a href="/?state=illinois">Illinois</a>, or browse from the <a href="/">main calculator page</a>. Confirm assessed values and exemptions with the county assessor; figures on this site are educational averages, not tax bills.`,
      },
    ],
  },
  {
    slug: "down-payment-how-much-do-you-need",
    title: "How Much Down Payment Do You Need to Buy a House? (2026)",
    description:
      "From 0% VA loans to 20% conventional — how much down payment you need in 2026, PMI/MIP tradeoffs, concessions, and cash to close.",
    excerpt:
      "You do not always need 20% down — but the amount you put down changes your rate, mortgage insurance, and what seller concessions can cover.",
    category: "guides",
    published: "2026-06-09",
    updated: "2026-08-06",
    readingMinutes: 13,
    tags: ["Down payment", "PMI", "First-time buyers"],
    relatedCalculators: [
      { href: "/", label: "Mortgage Calculator" },
      { href: "/calculators/fha-mortgage-calculator", label: "FHA Calculator" },
      { href: "/calculators/va-mortgage-calculator", label: "VA Calculator" },
    ],
    body: [
      {
        type: "p",
        html: "The old 20% down rule still matters for avoiding PMI, but it is not the minimum most buyers need in 2026. Conventional loans start at 3% down for many qualified first-time buyers, FHA at 3.5% (or 10% with thinner credit), and VA or USDA loans at 0% when eligible. The right number balances cash reserves, mortgage insurance duration, and rate pricing.",
      },
      { type: "h2", text: "Common down payment options" },
      {
        type: "ul",
        items: [
          "Conventional: about 3–5% for many first-time buyers; 20% avoids PMI.",
          "FHA: 3.5% with a 580+ credit score; typically 10% if your score is 500–579 — and MIP duration improves at 10%+ down (see 11-year rule).",
          "VA: $0 down for eligible service members and veterans (funding fee may be financed; some disabled veterans are exempt).",
          "USDA: $0 down in eligible rural areas (income and property limits apply).",
        ],
      },
      { type: "h2", text: "What changes when you put less down" },
      {
        type: "p",
        html: `A smaller down payment means a larger loan, a higher monthly payment, and usually mortgage insurance. On a $350,000 home, 5% down ($17,500) versus 20% down ($70,000) can add $200+ to your monthly payment once PMI is included — even at the same interest rate. With FHA, putting less than 10% down often means annual MIP for the life of the loan. Details: <a href="/blog/what-is-pmi-and-how-to-remove-it">PMI removal</a> and <a href="/blog/fha-loan-limits-2026-by-county">FHA limits &amp; MIP</a>.`,
      },
      { type: "h2", text: "Do not forget closing costs — and concessions" },
      {
        type: "p",
        html: `Down payment and closing costs are separate. Closing costs typically run about 2–5% of the loan amount. A 5% down buyer on a $350,000 home might need $17,500 down plus $7,000–$14,000 in closing costs. Seller concessions can cover allowable costs within program caps (conventional often ~3–9%, FHA/USDA ~6%, VA ~4%) so more of your savings stay as down payment or reserves — <a href="/blog/seller-concessions-and-rate-buydowns">concessions guide</a>.`,
      },
      { type: "h2", text: "Gift funds, DPA, and state programs" },
      {
        type: "p",
        html: "Many first-time buyers use gift funds from family or down-payment assistance (DPA) layered with FHA or conventional. Rules differ on who can gift, how funds are documented, and whether assistance is a silent second. State Housing Finance Agency products and Mortgage Credit Certificates can further improve post-close cash flow — ask local lenders which programs they actually close, not just which ones exist on paper. Georgia buyers can start with our <a href=\"/blog/first-time-homebuyer-guide-georgia\">Georgia first-time guide</a>.",
      },
      { type: "h2", text: "Loan limits still cap low-down strategies" },
      {
        type: "p",
        html: `FHA county limits (2026 floor near $541,287; high-cost near $1,249,125) can block FHA on expensive listings. Conventional conforming limits (2026 baseline near $832,750 in many areas) matter for pricing; above that you may need jumbo overlays. VA full entitlement often has no VA-set maximum, but partial entitlement can interact with FHFA conforming limits — <a href="/blog/va-loan-entitlement-residual-income">VA entitlement guide</a>.`,
      },
      { type: "h2", text: "Compare scenarios" },
      {
        type: "ol",
        items: [
          'Slide the down payment in our <a href="/">mortgage calculator</a> to see PMI kick in below 20%.',
          'Compare FHA and VA paths in the <a href="/calculators/fha-mortgage-calculator">FHA</a> and <a href="/calculators/va-mortgage-calculator">VA</a> calculators.',
          "Ask for Loan Estimates at two down-payment levels so you see rate and MI together.",
          "Keep cash reserves after closing — under-estimating taxes, insurance, and HOA is a common regret.",
        ],
      },
      {
        type: "p",
        html: "Verify current HUD, VA, and FHFA figures before you lock a product choice. Educational content only — not a loan offer.",
      },
    ],
  },
];
