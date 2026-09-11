import type { BlogPost } from "../blogTypes";

export const postsGuidesRefi: BlogPost[] = [
  {
    slug: "should-you-refinance-2026",
    title: "Should You Refinance in 2026? Break-Even, Recast & State Costs",
    description:
      "Decide whether to refinance or recast in 2026 using break-even math, lifetime interest, tangible net benefit rules, and state closing-cost friction.",
    excerpt:
      "I built the break-even widget because “the rate dropped” is not a decision — 32.5 months and a recast comparison are.",
    category: "refinancing",
    published: "2026-05-30",
    updated: "2026-09-11",
    readingMinutes: 9,
    tags: ["Refinancing", "Strategy", "Break-even", "Recasting", "Closing costs"],
    relatedCalculators: [
      { href: "/calculators/refinance-mortgage-calculator", label: "Refinance Calculator" },
      { href: "/", label: "Mortgage Calculator" },
    ],
    body: [
      {
        type: "p",
        html: "I built a refinance calculator because “rates dropped a little” is not a decision. Refinancing replaces the current mortgage with a new one — usually to lower the rate, shorten the term, switch an ARM to fixed, drop PMI/MIP, or tap equity. Recasting is a different tool: apply a large principal payment and re-amortize the remaining balance over the remaining term at the same rate. The question I actually ask is not “can I get a lower rate?” It is “will I stay long enough to come out ahead on closing costs and lifetime interest — or would a recast do the job cheaper?” Break-even math is nationwide. Title, transfer taxes, and some tangible net benefit laws are local. I keep both in the same article so I stop answering half the question.",
      },
      { type: "h2", text: "The break-even method" },
      {
        type: "p",
        html: "Refinancing has closing costs, typically about 2–5% of the loan unless I take a lender credit for a higher rate. I divide total costs by monthly P&amp;I savings for break-even months. If the new loan saves $200 a month and costs $5,000 to close, I break even in 25 months. Stay longer than that and payment savings look profitable — then I still check whether restarting a 30-year term added more interest than I saved. That second check is why I put lifetime interest next to the pretty payback chart.",
      },
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
        html: `Worked pattern I keep: $6,000 costs / $150 monthly savings ≈ 40 months. If I will move in 24 months, I walk away — or I look at a shorter-cost refinance with lender credits (higher rate) if cash-flow relief is urgent. Suppose I owe $280,000 at a higher legacy rate with 300 months left, and I am offered a new lower rate on a fresh 30-year with $6,500 in closing costs. Monthly P&amp;I savings might look attractive, but lifetime interest on the longer clock can shrink the win. I plug the same inputs into the <a href="/calculators/refinance-mortgage-calculator">refinance break-even calculator</a> because I do not trust myself to do that arithmetic on a napkin while I am excited.`,
      },
      {
        type: "aside",
        html: "In my testing of that refinance calculator, a clean $6,500 cost / $200 monthly P&amp;I savings scenario breaks even at 32.5 months. I keep that chart next to the way I think about “the rate dropped a little”: if you might move in year two, you never recoup title and origination, even when the new note rate looks better. The screenshot below is our own break-even widget — not a stock photo.",
      },
      {
        type: "figure",
        src: "/images/blog/refinance-breakeven.svg",
        alt: "Line chart of $6,500 refinance closing costs versus $200 per month cumulative savings, crossing at 32.5 months.",
        caption:
          "Refinance payback: $6,500 costs vs $200/month P&I savings. Break-even at 32.5 months. Source: Smart Mortgage Calculator, September 2026.",
        width: 880,
        height: 460,
      },
      {
        type: "figure",
        src: "/images/blog/calc-refinance.png",
        alt: "Screenshot of the Smart Mortgage Calculator refinance tool showing current versus new loan inputs and a break-even result.",
        caption:
          "Our refinance calculator in September 2026 — a live default run ($280,000 remaining at 8.00% vs a 6.75% 30-year). Break-even looks short; lifetime interest can still rise because the term restarts. Educational estimate, not a lender quote.",
        width: 739,
        height: 811,
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
      { type: "h2", text: "Why the same refinance costs more in some states" },
      {
        type: "p",
        html: "The amortization math is the same in every state; what changes is the fee stack. Title insurance pricing models differ: filed rates, promulgated rates, or competitive markets. Transfer and mortgage taxes can be material in parts of New York, Florida, and other jurisdictions. Recording fees are minor alone but add up. High-tax, high-insurance states also raise cash to close when escrow is recalculated — even if lender fees look identical on a Loan Estimate. I compare a refinance on a <a href=\"/?state=texas\">Texas</a>, <a href=\"/?state=florida\">Florida</a>, <a href=\"/?state=california\">California</a>, or <a href=\"/?state=new-york\">New York</a> payment context, then I plug costs into the break-even calculator. Georgia is not magically cheap on title. It is just the county I can see out the window.",
      },
      { type: "h2", text: "Tangible net benefit and anti-churning" },
      {
        type: "p",
        html: "Several states require lenders to document that a refinance provides a tangible net benefit to the borrower, or they restrict repeated refinances within short windows (anti-churning). Examples commonly discussed by compliance teams include Alaska, Arkansas, California, Florida, Massachusetts, and others — lists and tests change, so treat this as a prompt to ask your loan officer, not as a complete legal catalog. The practical effect: a tiny rate improvement with high fees may be unapprovable even if you would personally accept it. Streamlined FHA and VA refinances follow federal program rules, but local title practice and fees still shape cash to close.",
      },
      { type: "h2", text: "Recast vs refinance" },
      {
        type: "p",
        html: "When I receive a lump-sum thought experiment — bonus, inheritance, sale of another property — two moves show up: refinance to a lower rate, or recast the existing loan. Recasting applies a large principal payment and re-amortizes the remaining balance over the remaining term at the same interest rate, usually for a modest administrative fee. I had to learn that recast is not a mini-refinance. Same rate. Remaining term. Different payment.",
      },
      {
        type: "ul",
        items: [
          "Recast: you make a substantial principal payment (servicers often set minimums such as $5,000+); the servicer re-calculates monthly P&amp;I using the same rate and remaining term; your payment drops; your rate does not. Fees are typically a few hundred dollars. Not every loan or investor permits recasts — ask your servicer in writing.",
          "Refinance: new interest rate and (usually) new Loan Estimate fees; chance to shorten or lengthen term, switch ARM to fixed, or change loan type (for example FHA to conventional to drop MIP); possible to cash out or remove PMI when equity supports it. Costs commonly run about 2–5% of the loan unless offset by lender credits.",
        ],
      },
      {
        type: "table",
        caption:
          "Same 6.75% rate and 300 months remaining. Recast fee is typically a few hundred dollars when the servicer allows it; refinance costs are a different stack. Source: amortization formula, September 2026.",
        headers: ["Move after a $40,000 lump sum", "New P&amp;I", "Rate", "Typical friction"],
        rows: [
          [
            "Do nothing (keep $320,000 balance)",
            "$2,211",
            "6.75% unchanged",
            "No fee; payment stays high",
          ],
          [
            "Recast to $280,000 remaining",
            "$1,935",
            "6.75% unchanged",
            "Admin fee; must be allowed by investor/servicer",
          ],
          [
            "Refinance $280,000 to a new 30-year",
            "Depends on new rate",
            "New note; term often restarts",
            "Often ~2–5% of loan unless lender credits",
          ],
        ],
      },
      {
        type: "p",
        html: `Recasting wins when you already have a strong rate, you just want a lower payment after a lump sum, and your servicer offers recast. In that $320,000 example, the recast dropped P&amp;I by $276/month without paying thousands in title and points. Refinancing wins when your current rate is meaningfully higher than market quotes, you need to change loan type (MIP escape), or you want cash-out. A recast alone may not cancel PMI; you still must meet the servicer's LTV cancellation process — <a href="/blog/what-is-pmi-and-how-to-remove-it">PMI guide</a>. FHA annual MIP duration follows HUD rules, not recast mythology. If the goal is exiting FHA MIP, a conventional refinance after sufficient equity usually matters more than a recast.`,
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
          "A simple recast would lower the payment after a lump sum without new rate risk.",
        ],
      },
      { type: "h2", text: "Rate-and-term vs cash-out" },
      {
        type: "p",
        html: "Rate-and-term refinances change rate, term, or loan type. Cash-out adds to the balance and often prices slightly worse with stricter LTV caps. If you need cash for a defined project, compare cash-out against a HELOC so you do not put your entire first mortgage rate at risk for a short need — I ran a $50,000 kitchen example in <a href=\"/blog/cash-out-refinance-vs-heloc\">cash-out vs HELOC</a>. Cash-out typically allows less LTV and may face stricter net-benefit scrutiny. Texas homestead cash-out has specialized constitutional constraints — use a Texas specialist.",
      },
      { type: "h2", text: "Streamlined FHA and VA refinances" },
      {
        type: "p",
        html: "FHA streamline and VA IRRRL products follow federal frameworks that can reduce documentation or appraisal needs when rules are met. Outcomes still feel local: title practices, state taxes, funding-fee treatment on some VA cash-out (IRRRL is usually rate/term), and residual/MIP carryover math. Always confirm current HUD/VA eligibility — streamline does not mean “zero diligence.”",
      },
      { type: "h2", text: "Shop the refinance like a purchase" },
      {
        type: "ol",
        items: [
          "Collect 3–5 Loan Estimates the same day with the same loan amount, points, and lock period — <a href=\"/blog/how-to-get-the-best-mortgage-rate\">shopping playbook</a>.",
          "Negotiate fees using competing LEs; refinance origination fees are often movable.",
          "Ask about float-downs if you lock before the closing package is final.",
          "Confirm appraisal waiver eligibility — waivers save money when offered, but you cannot assume one.",
          "Get your servicer's written recast policy, minimum principal amount, fee, and timeline before you pay for a refinance appraisal.",
        ],
      },
      {
        type: "p",
        html: `Run the numbers in the <a href="/calculators/refinance-mortgage-calculator">refinance calculator</a> before I would pay an application fee. Confirm state net-benefit rules, recast eligibility, and current VA/HUD streamline criteria with a licensed lender and the servicer. Educational estimates only. The screenshot in this article is our widget, not a closing package.`,
      },
      { type: "h2", text: "FAQs" },
      {
        type: "faq",
        items: [
          {
            q: "Is a lower payment always a win?",
            a: "No. Restarting a 30-year term can raise lifetime interest even when the note rate drops. In the refinance calculator, a short break-even can sit next to a worse interest total. Check both.",
          },
          {
            q: "When does a recast beat a refinance?",
            a: "When you already like your rate and you have a lump sum. My $40,000 principal / 300 months remaining example cut P&amp;I from $2,211 to $1,935 at the same 6.75%. That is a $276/month drop without a new Loan Estimate — if the servicer allows recast.",
          },
          {
            q: "Will a refinance drop FHA MIP?",
            a: "A conventional refinance can, once equity and credit support PMI (or 20% down equivalent). An FHA streamline usually keeps you in FHA MIP rules. Recasting an FHA loan does not rewrite HUD’s duration clock.",
          },
          {
            q: "Do I need a tangible net benefit letter?",
            a: "In some states, yes — lenders must document that the refinance helps you, or they restrict rapid repeat refinances. Ask your loan officer before you pay for an appraisal on a tiny rate improvement with fat fees.",
          },
        ],
      },
    ],
  },
  {
    slug: "down-payment-how-much-do-you-need",
    title: "How Much Down Payment Do You Need? Closing Costs, Concessions & First-Time Paths",
    description:
      "From 0% VA to 20% conventional — down payment, PMI/MIP, closing costs, seller concessions, 2-1 buydowns, and a Georgia first-time path for 2026.",
    excerpt:
      "I do not treat 20% as a personality test. I treat it as the PMI cliff, then I stack closing costs and Georgia first-time paths on top.",
    category: "guides",
    published: "2026-06-09",
    updated: "2026-09-11",
    readingMinutes: 9,
    tags: [
      "Down payment",
      "PMI",
      "First-time buyers",
      "Closing",
      "Seller concessions",
      "Georgia",
    ],
    relatedCalculators: [
      { href: "/", label: "Mortgage Calculator" },
      { href: "/calculators/fha-mortgage-calculator", label: "FHA Calculator" },
      { href: "/calculators/va-mortgage-calculator", label: "VA Calculator" },
      { href: "/?state=georgia", label: "Georgia Mortgage Calculator" },
    ],
    body: [
      {
        type: "p",
        html: "The old 20% down rule still matters for avoiding PMI, but it is not the minimum I would tell a 2026 buyer they “need.” Conventional loans start at 3% down for many qualified first-time buyers, FHA at 3.5% (or 10% with thinner credit), and VA or USDA at 0% when eligible. Closing costs sit on top of the down payment, not inside it — typically another 2–5% of the loan. Seller concessions and temporary buydowns can move cash to close as much as a small rate change moves the payment. I balance cash reserves, mortgage insurance duration, and rate pricing. I do not pick a down-payment percent because a relative said real buyers put 20% down.",
      },
      { type: "h2", text: "Common down payment options" },
      {
        type: "ul",
        items: [
          "Conventional: about 3–5% for many first-time buyers; 20% avoids PMI.",
          "FHA: 3.5% with a 580+ credit score; typically 10% if your score is 500–579 — and MIP duration improves at 10%+ down (see the 11-year rule in our <a href=\"/blog/fha-vs-conventional-loans\">FHA vs conventional guide</a>).",
          "VA: $0 down for eligible service members and veterans (funding fee may be financed; some disabled veterans are exempt) — <a href=\"/blog/va-loan-entitlement-residual-income\">VA entitlement guide</a>.",
          "USDA: $0 down in eligible rural areas (income and property limits apply).",
        ],
      },
      {
        type: "table",
        caption:
          "$350,000 purchase at 6.75% 30-year. PMI on the 5% path modeled at 0.70%/year of the loan. VA funding fee not included in the $0 row — add it if you are not exempt.",
        headers: ["Down payment", "Cash down", "Loan", "P&amp;I", "MI (modeled)"],
        rows: [
          ["0% VA (eligible)", "$0", "$350,000", "See VA calculator", "None (funding fee may apply)"],
          ["3.5% FHA", "$12,250", "$337,750 base", "Plus MIP", "Upfront + annual MIP"],
          ["5% conventional", "$17,500", "$332,500", "$2,157", "About $194/month"],
          ["20% conventional", "$70,000", "$280,000", "$1,816", "$0"],
        ],
      },
      { type: "h2", text: "What changes when you put less down" },
      {
        type: "p",
        html: `A smaller down payment means a larger loan, a higher monthly payment, and usually mortgage insurance. On a $350,000 home, 5% down ($17,500) versus 20% down ($70,000) can add $200+ to the monthly payment once PMI is included — even at the same interest rate. I ran that comparison myself: P&amp;I went from $2,157 to $1,816, and PMI at 0.70% annual added another $194 on the 5% path. The monthly gap was about $535, not the $341 I would have guessed from loan size alone. With FHA, putting less than 10% down often means annual MIP for the life of the loan. Details: <a href="/blog/what-is-pmi-and-how-to-remove-it">PMI removal</a>.`,
      },
      {
        type: "aside",
        html: "When I compared that $350,000 home at 5% down versus 20% down, both at 6.75% 30-year, P&amp;I went from $2,157 to $1,816 — and PMI at a 0.70% annual rate added another $194 on the 5% path. The monthly gap was about $535, not the $341 you would guess from loan size alone. Cash to close is a different worksheet: $17,500 vs $70,000 before closing costs.",
      },
      {
        type: "figure",
        src: "/images/blog/down-5-vs-20.svg",
        alt: "Grouped bar chart comparing principal and interest plus PMI on a $350,000 home with 5 percent down versus 20 percent down.",
        caption:
          "$350,000 home at 6.75% 30-year: 5% down includes modeled PMI; 20% down does not. Source: Smart Mortgage Calculator, September 2026.",
        width: 880,
        height: 480,
      },
      { type: "h2", text: "Closing costs: what you pay at the table" },
      {
        type: "p",
        html: "Closing costs are the fees to finalize the mortgage, separate from down payment. On a $280,000 loan, 2–5% is roughly $5,600 to $14,000. The lender must provide a Loan Estimate early and a Closing Disclosure before signing; I compare them line by line because that is where “we already quoted you” quietly changes. Prepaid escrow items can look large in high-tax or high-insurance counties even when lender fees are competitive. I keep a payment calculator and a cash-to-close worksheet as two different documents. Mixing them is how people think they cannot afford a house they can, or the reverse.",
      },
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
      {
        type: "p",
        html: `A lower monthly payment does not mean lower cash to close. Points, larger prepaid taxes, and HOA move-in fees can spike day-of funding. Use the <a href="/">mortgage calculator</a> for the recurring payment and keep a separate closing-cost worksheet for cash at the table. Shop multiple lenders and compare Loan Estimates line by line the same day; ask the preferred lender to match competing origination fees. Consider lender credits against a higher rate — run break-even like you would for points (<a href="/blog/how-to-get-the-best-mortgage-rate">rate shopping guide</a>). Prepaid taxes are still cash due at closing even though they are not lender profit. Rolling costs into the loan is only allowed within LTV and program rules; it raises the balance and payment.`,
      },
      { type: "h2", text: "Seller concessions and rate buydowns" },
      {
        type: "p",
        html: "When inventory sits or a seller needs certainty, concessions can fund your closing costs, prepaid items, or a temporary rate buydown. Done well, a credit improves cash to close without confusing the appraisal. Done poorly, it looks like an undisclosed price cut, blows past program caps, or leaves you unprepared for the payment after a buydown expires.",
      },
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
        html: "Prefer contract language that the seller contributes a stated dollar amount toward buyer's allowable closing costs, prepaids, and/or rate buydown rather than quietly inflating price to rebate cash outside the settlement statement. Inflated price strategies can fail appraisal or create LTV problems.",
      },
      {
        type: "ul",
        items: [
          "Closing-cost credit: reduces cash to close; payment unchanged except where prepaid escrow shrinks.",
          "Permanent discount points: buy a lower note rate for the life of the loan — run holding-period break-even.",
          "Temporary buydown (for example 2-1): subsidy account lowers the payment in year one by about 2 percentage points and year two by about 1 point (structures vary), then the payment rises to the note rate.",
        ],
      },
      {
        type: "p",
        html: "Suppose the note rate is 6.75% on a $350,000 loan. A classic 2-1 buydown makes year-one payments as if the rate were about 4.75% and year-two as if about 5.75%, with years three onward at 6.75%. Someone — buyer, seller, builder, or lender — must fund the subsidy equal to the payment differences. Many lenders underwrite at the note rate, not the bought-down payment. I model the post-buydown PITI so year three does not shock the budget. An $8,000 price cut saves a little principal and interest but may not help a cash-strapped buyer close; the same $8,000 as a closing-cost credit can unlock the purchase. I would rather have the credit when cash to close is the constraint.",
      },
      { type: "h2", text: "Gift funds, DPA, and state programs" },
      {
        type: "p",
        html: "Many first-time buyers use gift funds from family or down-payment assistance (DPA) layered with FHA or conventional. Rules differ on who can gift, how funds are documented, and whether assistance is a silent second. State Housing Finance Agency products and Mortgage Credit Certificates can further improve post-close cash flow — ask local lenders which programs they actually close, not just which ones exist on paper.",
      },
      { type: "h2", text: "Georgia first-time path (2026)" },
      {
        type: "p",
        html: "Buying a first home in Georgia is less stressful when I know the steps, which is why I wrote them down. With median prices often in the mid-$300,000s statewide and effective property taxes often near roughly 0.8%, Georgia remains more approachable than many coastal markets. Atlanta metro prices run higher than Franklin, rural west Georgia, and a lot of small cities. I am not going to pretend my county is the whole state.",
      },
      {
        type: "ol",
        items: [
          "Set a realistic budget with the 28/36 rule, then stress-test taxes and insurance in the <a href=\"/calculators/home-affordability-calculator\">affordability calculator</a> and <a href=\"/blog/how-much-house-can-i-afford\">affordability guide</a>.",
          "Pull credit, dispute errors, pay down revolving balances, and avoid new credit before you apply — <a href=\"/blog/improve-credit-score-before-buying\">credit prep</a>.",
          "Explore Georgia Dream and related DCA assistance for eligible first-time buyers — verify current income limits and home price caps on official DCA materials. Ask whether a Mortgage Credit Certificate stacks with your loan type.",
          "Gather pay stubs, W-2s or tax returns, and bank statements. Compare written Loan Estimates from at least three lenders the same day. Get a pre-approval letter so sellers take offers seriously. Ask about overlays on condos, gift funds, or recent credit events.",
          "In balanced or buyer-friendly pockets, ask for seller concessions toward closing costs or a temporary buydown within program caps rather than only chasing a lower price. Budget for a thorough inspection — red clay moisture, roofs, and HVAC age matter in Georgia summers.",
          "Close with eyes on prepaid escrow. File for homestead exemption after you occupy as a primary resident when eligible.",
        ],
      },
      {
        type: "p",
        html: `Our <a href="/?state=georgia">Georgia mortgage calculator</a> is pre-loaded with state average tax and insurance figures I maintain. I compare FHA in the <a href="/calculators/fha-mortgage-calculator">FHA calculator</a> if cash to close is the constraint. Verify Georgia Dream details with DCA and final pricing with a licensed lender. I researched the program. I did not invent an approval.`,
      },
      { type: "h2", text: "Loan limits still cap low-down strategies" },
      {
        type: "p",
        html: `FHA county limits (2026 floor near $541,287; high-cost near $1,249,125) can block FHA on expensive listings. Conventional conforming limits (2026 baseline near $832,750 in many areas) matter for pricing; above that you may need jumbo overlays. VA full entitlement often has no VA-set maximum, but partial entitlement can interact with FHFA conforming limits. County-limit and MIP details: <a href="/blog/fha-vs-conventional-loans">FHA vs conventional</a>.`,
      },
      { type: "h2", text: "Compare scenarios" },
      {
        type: "ol",
        items: [
          'Slide the down payment in our <a href="/">mortgage calculator</a> to see PMI kick in below 20%.',
          'Compare FHA and VA paths in the <a href="/calculators/fha-mortgage-calculator">FHA</a> and <a href="/calculators/va-mortgage-calculator">VA</a> calculators.',
          "Ask for Loan Estimates at two down-payment levels so you see rate and MI together.",
          "Ask your loan officer the exact remaining concession room under your program and LTV, and put the dollar amount in the purchase contract.",
          "Keep cash reserves after closing — under-estimating taxes, insurance, and HOA is a common regret.",
        ],
      },
      {
        type: "p",
        html: "Verify current HUD, VA, and FHFA figures before I would lock a product choice. Educational content only — not a loan offer. Confirm final figures on the Closing Disclosure with a licensed lender and settlement agent. I will keep the 5% versus 20% chart honest. I will not wire your earnest money.",
      },
      { type: "h2", text: "FAQs" },
      {
        type: "faq",
        items: [
          {
            q: "Do I have to put 20% down?",
            a: "No. Conventional can start near 3% for many first-time files, FHA at 3.5%, VA/USDA at 0% when eligible. 20% is how you skip conventional PMI — not a universal minimum.",
          },
          {
            q: "Is stretching to 20% always cheaper than PMI?",
            a: "Not if it drains reserves or delays a purchase while prices rise. On the $350,000 test, 5% vs 20% was about $535/month including modeled PMI — real money, but so is sitting out for years to save $70,000.",
          },
          {
            q: "Can seller concessions cover my down payment?",
            a: "Generally no. Concessions typically cover allowable closing costs, prepaids, and sometimes a buydown — not the down payment itself. Structure them as a dollar credit in the contract within program caps (often 3–9% conventional by LTV, ~6% FHA, ~4% VA).",
          },
          {
            q: "Should I use gift funds or wait?",
            a: "Gift funds are common and documentable with a gift letter and a clean wire path. Waiting only helps if you can raise the down-payment tier enough to change MI or pricing. Co-mingled cash without a trail is how underwriting stalls.",
          },
        ],
      },
    ],
  },
];
