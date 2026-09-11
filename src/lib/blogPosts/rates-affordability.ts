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
    updated: "2026-09-11",
    readingMinutes: 8,
    tags: ["Rates", "Market", "Loan Estimates"],
    relatedCalculators: [
      { href: "/", label: "Mortgage Calculator" },
      { href: "/calculators/refinance-mortgage-calculator", label: "Refinance Calculator" },
      { href: "/calculators/arm-mortgage-calculator", label: "ARM Calculator" },
    ],
    body: [
      {
        type: "p",
        html: `Mortgage rates are the biggest lever on what a house costs over time. In 2026 I have kept our national 30-year default around ${SITE.defaultRate}% (indicative as of ${SITE.ratesAsOf}) because that is the number I am willing to put on the site with a date stamp. Your personal rate can land well above or below it. This guide is what I actually use when I explain what moves rates, why a headline is not a quote, and the levers — Loan Estimates, locks, float-downs, seller concessions — that improve outcomes. I update the as-of date myself. I do not forecast the Fed for a living.`,
      },
      { type: "h2", text: "What moves mortgage rates" },
      {
        type: "p",
        html: "Mortgage rates are not set by any single institution. I keep this list taped next to the default-rate field because people still email me as if I pick the number:",
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
      { type: "h2", text: "Mid-2026 snapshot (June context)" },
      {
        type: "p",
        html: "Headline averages are a starting point. In June 2026, well-qualified borrowers with strong credit and 20% down often saw rates near or slightly below the national average, while smaller down payments or lower scores landed higher. Fifteen-year fixed loans typically priced below comparable 30-year terms. 5/1 and 7/1 ARMs often started lower than fixed, then adjust. That month I was watching inflation prints and jobs data the same way everyone else was — and reminding myself that Treasury yields can move mortgages before a Fed meeting does. When the 10-year rises, mortgage rates tend to follow within days. I stopped telling people to wait for the next FOMC as if it were a coupon.",
      },
      {
        type: "ul",
        items: [
          `30-year fixed: roughly ${SITE.defaultRate}% national average (indicative site default, originally aligned to mid-2026).`,
          "15-year fixed: typically priced below the 30-year average for similar profiles.",
          '5/1 and 7/1 ARMs: stress-test the reset with the <a href="/calculators/arm-mortgage-calculator">ARM calculator</a>.',
          "FHA and VA note rates can look competitive, but MIP or funding fees change total cost; county limits still apply for FHA and for some VA partial-entitlement cases.",
        ],
      },
      { type: "h2", text: "Worked payment sensitivity" },
      {
        type: "p",
        html: `On a $350,000 loan with a 30-year term near ${SITE.defaultRate}%, a one-percentage-point rate change typically moves principal and interest by roughly $200–$230 per month before taxes and insurance. I built the chart below from three runs of the same formula we ship. Use the <a href="/">mortgage calculator</a> and nudge the rate slider — including PMI if down payment is under 20% — so you see PITI, not a vanity P&amp;I.`,
      },
      {
        type: "aside",
        html: "In my testing on that same $350,000 30-year loan — the amortization formula our calculator actually uses — 5.75% produced $2,043/month of principal and interest, 6.75% produced $2,270, and 7.75% produced $2,507. That is a $227 jump for one percentage point above our site default, and $464 between the low and high sliders, before a dollar of taxes or insurance. I built the chart below from those three runs, not from a stock photo.",
      },
      {
        type: "figure",
        src: "/images/blog/rate-sensitivity-350k.svg",
        alt: "Bar chart of monthly principal and interest on a $350,000 30-year loan at 5.75 percent, 6.75 percent, and 7.75 percent.",
        caption:
          "Same $350,000 loan, three rates. Source: Smart Mortgage Calculator amortization formula, September 2026. Educational estimate — not a lender quote.",
        width: 880,
        height: 460,
      },
      {
        type: "table",
        caption:
          "Same $350,000 30-year loan; only the rate slider moves. Source: Smart Mortgage Calculator amortization formula, September 2026.",
        headers: ["Note rate", "Monthly P&amp;I", "Vs 6.75%"],
        rows: [
          ["5.75%", "$2,043", "−$227 / month"],
          ["6.75% (site default)", "$2,270", "—"],
          ["7.75%", "$2,507", "+$237 / month"],
        ],
      },
      { type: "h2", text: "Why your rate differs from the headline" },
      {
        type: "p",
        html: "Advertised rates are often best-case for highly qualified borrowers. I price risk the way lenders do in the story, even if I cannot issue a lock: 760+ credit, 20% down, conforming primary residence usually beats a 640 with 5% down on the same day. Condo versus single-family, cash-out versus purchase, investment occupancy, and discount points also change the note. Pure amortization is location-agnostic. Realistic payments still need county tax and insurance. That last sentence is why I live in Georgia and still keep Texas in the examples.",
      },
      { type: "h2", text: "Shop 3–5 Loan Estimates the same day" },
      {
        type: "p",
        html: "The fastest way I know to improve a personal rate is structured shopping, not waiting for a perfect headline:",
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
        html: `For the full playbook — including discount-point break-even, overlays, and why a single quote is expensive — see <a href="/blog/how-to-get-the-best-mortgage-rate">how to get the best mortgage rate</a>.`,
      },
      { type: "h2", text: "Rate locks vs float-downs" },
      {
        type: "p",
        html: `A rate lock commits the lender to a rate (and often points) for a set period — commonly 30–60 days. Floating means I have not locked yet and could win or lose if markets move. Some lenders offer a float-down if rates drop enough after I lock. I ask in writing before I would lock: fee, market-move threshold, and whether float-down changes the lock expiration. I learned to ask about extension fees the way I learned to ask about points — after imagining a closing that slips a week.`,
      },
      { type: "h2", text: "Seller concessions and temporary buydowns" },
      {
        type: "p",
        html: `In many markets you can ask the seller to fund closing costs or a temporary rate buydown instead of (or in addition to) a price cut. Program caps differ — conventional seller concessions often allow about 3–9% depending on down payment, FHA/USDA commonly up to 6%, VA around 4% for certain closing costs. Structure concessions as a credit toward allowable costs, not an informal price cut that confuses appraisal. A 2-1 temporary buydown lowers the payment in years one and two; know who funds it and what the fully indexed payment will be. Details: <a href="/blog/down-payment-how-much-do-you-need">down payment, closing costs, and concessions</a>.`,
      },
      { type: "h2", text: "Fixed vs ARM in a 2026 context" },
      {
        type: "p",
        html: `A 30-year fixed loan buys payment certainty. A 5/1 or 7/1 ARM may start lower, then adjust with an index plus margin after the intro period, subject to periodic and lifetime caps. ARM usage tends to be higher in high-cost states where payment stretch is severe. I stress-test both in the <a href="/calculators/arm-mortgage-calculator">ARM calculator</a> and I wrote the recast numbers in <a href="/blog/arm-vs-fixed-rate-mortgage">ARM vs fixed</a> — local taxes and insurance still apply either way.`,
      },
      { type: "h2", text: "Refinancing when rates move" },
      {
        type: "p",
        html: `If you already have a mortgage, compare current principal and interest to a new quote with the <a href="/calculators/refinance-mortgage-calculator">refinance calculator</a>. Divide closing costs by monthly savings for break-even months, and watch whether a new 30-year term erases interest savings. Some states require a tangible net benefit analysis — see <a href="/blog/should-you-refinance-2026">should you refinance in 2026</a>.`,
      },
      { type: "h2", text: "Location still belongs in a rates conversation" },
      {
        type: "p",
        html: `A national average does not include Texas property taxes, Florida wind premiums, or California Mello-Roos. Open a state-preloaded calculator such as <a href="/?state=texas">Texas</a>, <a href="/?state=florida">Florida</a>, or <a href="/?state=california">California</a> before you decide a payment is affordable. Pair this page with the <a href="/blog/how-much-house-can-i-afford">affordability guide</a> for PITI, not just the note rate.`,
      },
      { type: "h2", text: "FAQs" },
      {
        type: "faq",
        items: [
          {
            q: "Should I wait for the Fed?",
            a: "Mortgage rates often move on Treasury markets before or after Fed meetings. Shopping same-day Loan Estimates beats forecasting. A locked quote you can live with beats a hoped-for cut that never shows up on your file.",
          },
          {
            q: "Is the lowest rate always best?",
            a: "Not if you pay more points than your holding period recovers, or starve cash reserves. In my $300,000 one-point test, 6.75%→6.50% took about 60 months to earn back the $3,000. Sell in year three and those points are still underwater.",
          },
          {
            q: "Do location and county matter for the rate itself?",
            a: "Mostly for loan limits, taxes, insurance, and some state programs. Amortization is national; escrow items are local. Open a <a href=\"/\">state-aware calculator</a> before you decide a payment is affordable.",
          },
          {
            q: "Why is my quote higher than the national average?",
            a: "Advertised averages are often best-case: strong credit, 20% down, conforming primary residence, zero points. Condo, cash-out, investment occupancy, and low-down PMI pricing all move you off that headline.",
          },
        ],
      },
      {
        type: "p",
        html: `Rates change daily. I treat any figure here as educational and I still want a licensed loan officer on the lock. Verify program rules with HUD, VA, or FHFA when limits or insurance are involved. Methodology: <a href="/how-we-calculate">how we calculate</a>.`,
      },
    ],
  },
  {
    slug: "how-much-house-can-i-afford",
    title: "How Much House Can I Afford? The 28/36 Rule, PITI & State Costs",
    description:
      "How lenders use the 28/36 rule, why taxes and insurance change realism, and how Georgia, Texas, Florida, and California budgets differ in 2026.",
    excerpt:
      "I size a house on PITIA from Franklin, Georgia — the 28/36 rule is a lender starting point, not a permission slip to skip escrow.",
    category: "affordability",
    published: "2026-02-03",
    updated: "2026-09-11",
    readingMinutes: 9,
    tags: [
      "Affordability",
      "Budgeting",
      "DTI",
      "Georgia",
      "Texas",
      "Florida",
      "California",
      "Property taxes",
    ],
    relatedCalculators: [
      { href: "/calculators/home-affordability-calculator", label: "Home Affordability Calculator" },
      { href: "/", label: "Mortgage Calculator" },
    ],
    body: [
      {
        type: "p",
        html: "\"How much house can I afford?\" is the question I built a whole calculator around, and it is still the question people answer with a lender's max. I want a payment that still fits after taxes, insurance, HOA, maintenance, and the cash I need for a bad month. Pure loan amortization is location-agnostic. Realistic affordability is not. I obsess over PITIA (principal, interest, taxes, insurance, association dues) because I have watched a “fine” note rate turn ugly once escrow showed up. Buyers who ignore that column are the ones who feel payment shock after closing. I live in Heard County. I still model Texas and Florida so I do not get provincial.",
      },
      { type: "h2", text: "The 28/36 rule" },
      {
        type: "p",
        html: "Most lenders use the 28/36 rule as a starting point for debt-to-income. I treat it as a ceiling I try to stay under, not a target to hug:",
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
        html: "Some programs allow higher ratios (FHA sometimes toward the low-to-mid 40s with compensating factors; conventional automated underwriting can stretch for strong files). I still budget near 28/36 so insurance renewals and a dead car do not sink the month. Lenders use gross income for DTI. I live on net. I budget on take-home even when the file “qualifies.”",
      },
      { type: "h2", text: "Worked example" },
      {
        type: "table",
        caption:
          "$9,000 gross monthly income. Front-end uses housing; back-end uses housing plus other debts. You live on net — this is the lender’s gross test.",
        headers: ["Rule", "Cap on $9,000 gross", "If other debts are $600"],
        rows: [
          ["28% housing (front-end)", "$2,520", "$2,520 still binds if PITIA is the constraint"],
          ["36% all debts (back-end)", "$3,240", "$2,640 left for housing"],
          ["Effective ceiling", "Lower of the two", "$2,520 housing in this example"],
        ],
      },
      {
        type: "p",
        html: "Say you earn $9,000 per month before taxes. The 28% guideline caps housing near $2,520, and the 36% guideline caps total debt at $3,240. If you already pay $600 toward a car and student loans, that leaves roughly $2,640 for housing under the back-end — your effective ceiling is the lower of the two limits ($2,520 here). Now compare two locations with the same housing budget: in a low-tax inland county, most of that budget funds the loan; in a high-tax Texas market or high-insurance Florida coastal ZIP, a larger share goes to escrow, so the affordable purchase price drops even at the same interest rate.",
      },
      {
        type: "aside",
        html: "When I ran into this while building the state defaults from Franklin, Georgia: I loaded our Georgia median-style inputs — $340,000, 20% down, 6.75%, 0.81% tax, $1,600 insurance — and the calculator showed about $2,129 PITI on a $272,000 loan. Holding a $400,000 price still, the tax line alone was about $270/month in Georgia versus $533 in Texas at our 1.60% planning rate. That is the gap national payment apps miss. The screenshot and tax chart below are from our own tools, not a stock listing photo.",
      },
      {
        type: "figure",
        src: "/images/blog/calc-georgia-piti.png",
        alt: "Screenshot of the Smart Mortgage Calculator set to Georgia with a $340,000 price, 20 percent down, and a $2,129 estimated monthly payment.",
        caption:
          "Our Georgia calculator in September 2026: statewide median-style $340,000 price, 20% down, 6.76% in the rate field, $2,129 PITI. Educational estimate — confirm taxes and insurance for the actual address.",
        width: 739,
        height: 572,
      },
      {
        type: "figure",
        src: "/images/blog/escrow-tax-by-state.svg",
        alt: "Bar chart of monthly property tax escrow on the same $400,000 home in Georgia, California, Florida, and Texas.",
        caption:
          "Monthly tax at each state’s average effective rate in our planning data — insurance and HOA not included. Source: Smart Mortgage Calculator, September 2026.",
        width: 880,
        height: 460,
      },
      { type: "h2", text: "How property taxes enter the payment" },
      {
        type: "p",
        html: "Most counties tax a percentage of assessed value each year. If a home is assessed at $350,000 and the effective rate is 1.2%, that is $4,200 a year — $350 a month when escrowed. I learned to stop using “the state tax rate” as if counties agreed with each other. Homestead exemptions can lower the bill after you occupy as a primary. Effective rates run from well under 0.5% in some states to above 2% in parts of New Jersey, Illinois, and Texas. A $300,000 home might cost under $100/month in taxes in one state and $500+/month in another — same loan, very different budget. That is the gap that made me put state defaults in the calculator instead of a single national escrow guess.",
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
      {
        type: "p",
        html: "Worked comparison: a $400,000 purchase with 20% down at the same interest rate. At a 0.6% effective tax rate, taxes are about $200/month. At 2.0%, taxes are about $667/month — a $467 gap equivalent to a very large rate increase on the same loan balance.",
      },
      { type: "h2", text: "What gets under-counted (and why escrow shocks happen)" },
      {
        type: "p",
        html: "The payment I approved in a hypothetical underwriting is not the payment two years later if taxes and insurance reprice. Lenders collect those into escrow; when premiums or assessments jump, the monthly payment can rise even if the note rate never changed. I budget a cushion. I do not treat the first escrow estimate as a personality.",
      },
      {
        type: "ul",
        items: [
          "Property taxes after reassessment or homestead changes.",
          "Homeowners insurance shopping — listings often show last year’s premium.",
          "HOA or condo fees and special assessments (lenders often count these in housing DTI).",
          "Maintenance reserves (a common planning range is near 1% of home value per year — big roof/HVAC years hide inside that average).",
          "Closing costs (typically about 2–5% of the loan) and prepaid escrow at closing — separate from the down payment.",
          "Higher utilities than rent, commuting costs, and child care changes.",
          "An emergency fund so a surprise expense does not jeopardize the mortgage.",
        ],
      },
      { type: "h2", text: "Georgia: approachable prices, still stress-test PITI" },
      {
        type: "p",
        html: `Georgia remains more approachable than coastal high-cost markets, with a statewide median near $340,000 and an effective property tax rate around 0.81% in our planning data. On that median with 20% down at a ${SITE.defaultRate}% 30-year rate, principal and interest are only part of the story: taxes add roughly $230/month and insurance about $130/month before PMI or HOA. Atlanta metro prices run well above the statewide median — I say that as someone who does not pretend Franklin is Buckhead. File for homestead exemption after you close as a primary resident when eligible, compare insurance quotes (roofs, claims history, and county matter), and explore Georgia Dream / DCA assistance if you are a first-time buyer — verify current caps on official sites. First-time cash-to-close steps live in our <a href="/blog/down-payment-how-much-do-you-need">down payment and closing-cost guide</a>. Run the <a href="/?state=georgia">Georgia mortgage calculator</a>. The screenshot above is my own tool on a median-style run, not a listing photo I licensed.`,
      },
      { type: "h2", text: "Texas: no state income tax, high escrow" },
      {
        type: "p",
        html: `Texas attracts buyers with job growth and no state income tax, but I will not let anyone treat that as a cheap housing payment. Property taxes and homeowners insurance are a bigger slice than in Heard County. On a $350,000 median at about 1.60% effective tax, taxes alone add roughly $467/month; wind and hail risk push insurance — I budget on the order of $200/month statewide, knowing coastal and hail-prone counties run higher. Homestead exemptions can lower the bill after you close. I look at total monthly cost, not price per square foot. ARM usage can be higher when payments stretch — I stress-test with the <a href="/calculators/arm-mortgage-calculator">ARM calculator</a>. If you refinance later, Texas homestead and cash-out rules are specialized. Open the <a href="/?state=texas">Texas calculator</a>.`,
      },
      { type: "h2", text: "Florida: insurance is the wild card" },
      {
        type: "p",
        html: `Florida insurance — not just the mortgage rate — often determines whether a home fits. I learned that while wiring state defaults, not by buying a condo in Miami. Statewide planning data puts typical homeowners insurance near $2,400/year, but coastal counties can cost significantly more. Wind mitigation, roof age, and flood-zone placement change quotes by thousands. I would get an insurance estimate before I offered. Taxes near 0.86% still matter, but insurance is where budgets break. Budget flood coverage if you are in or near a FEMA flood zone, higher windstorm deductibles on coastal policies, and condo HOA fees that may include master insurance. FHA and VA remain common, but condo project approvals trigger overlays. Use the <a href="/?state=florida">Florida calculator</a>.`,
      },
      { type: "h2", text: "California: high prices, Prop 13, Mello-Roos" },
      {
        type: "p",
        html: `California's median sits among the highest in the nation (near $770,000 in our data), so affordability is as much about income, down payment, and loan product as interest rates. I do not pretend a Heard County payment intuition works in the Bay Area. Effective property tax averages about 0.71% thanks in part to Proposition 13 — a moderate rate on a high base still runs hundreds per month. Mello-Roos, HOA dues, and earthquake coverage can add more. Wildfire-exposed areas may see insurance availability and price pressure. I would expand search radius inland and through the Central Valley, look at CalHFA first-time programs if you qualify, and confirm FHA and conforming county limits before assuming a low-down product works on a high list price. Run the <a href="/?state=california">California calculator</a> and the <a href="/calculators/arm-mortgage-calculator">ARM stress test</a>.`,
      },
      { type: "h2", text: "Shopping levers that protect affordability" },
      {
        type: "p",
        html: "Affordability is not only about picking a cheaper house. Better loan terms raise the price I can buy without raising the payment. That is why shopping belongs in an affordability article:",
      },
      {
        type: "ol",
        items: [
          'Shop 3–5 Loan Estimates the same day so you are not stuck with one lender\'s overlay or pricing — <a href="/blog/how-to-get-the-best-mortgage-rate">best-rate guide</a>.',
          'Ask about seller concessions or a temporary 2-1 buydown when markets are soft — <a href="/blog/down-payment-how-much-do-you-need">concessions and cash to close</a>.',
          'Improve credit before applying; even one pricing tier can free hundreds of monthly capacity — <a href="/blog/improve-credit-score-before-buying">credit prep guide</a>.',
          'If VA-eligible, model residual income and funding-fee scenarios in the <a href="/calculators/va-mortgage-calculator">VA calculator</a>; disability-related funding-fee exemptions are sometimes under-claimed.',
          'Verify county FHA limits before assuming FHA works on a high-priced listing — <a href="/blog/fha-vs-conventional-loans">FHA vs conventional</a>.',
        ],
      },
      { type: "h2", text: "Run your numbers" },
      {
        type: "p",
        html: `I use the <a href="/calculators/home-affordability-calculator">home affordability calculator</a> to work backward from income, then I open the <a href="/">mortgage calculator</a> with the state's tax and insurance defaults — <a href="/?state=georgia">Georgia</a>, <a href="/?state=texas">Texas</a>, <a href="/?state=florida">Florida</a>, <a href="/?state=california">California</a>, or another state from the home page. I replace defaults with quotes and tax bills from the actual property. I target a payment below the maximum so there is breathing room. Estimates on this site are educational, not loan offers — confirm with a licensed lender and the county assessor. I will keep the Georgia screenshot honest. I will not sign your note.`,
      },
      { type: "h2", text: "FAQs" },
      {
        type: "faq",
        items: [
          {
            q: "Should I buy at the 36% back-end maximum?",
            a: "I would not. Lenders use gross income; you live on net. Insurance and taxes reprice after closing. On $9,000 gross, 28% is $2,520 of housing — treat that as a ceiling to stay under, not a target.",
          },
          {
            q: "Why does the same income buy less house in Texas than in Georgia?",
            a: "Escrow. When I held a $400,000 price still, the tax line was about $270/month in Georgia versus $533 in Texas at our planning rates. Same rate, same price, different house you can actually carry.",
          },
          {
            q: "Do HOA dues count toward the 28%?",
            a: "Usually yes — lenders often include HOA/condo fees in housing DTI (PITIA). A $400 HOA on a Florida condo can crowd out as much purchase price as a large rate increase. Put it in the calculator.",
          },
          {
            q: "Is the 28/36 rule an FHA rule?",
            a: "It is a common starting point, not a law. FHA and conventional automated underwriting can stretch with compensating factors. Stretching is how payment shock happens when escrow adjusts. Stay near 28/36 unless you have a written reason not to.",
          },
        ],
      },
    ],
  },
];
