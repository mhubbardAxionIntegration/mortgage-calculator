import type { BlogPost } from "../blogTypes";
import { SITE } from "../site";

export const postsNewHighValue: BlogPost[] = [
  {
    slug: "how-to-get-the-best-mortgage-rate",
    title: "How to Get the Best Mortgage Rate: Loan Estimates, Points, Locks & Overlays",
    description:
      "Shop 3–5 same-day Loan Estimates, run points break-even, negotiate credits, use locks vs float-downs, and shop past lender overlays in 2026.",
    excerpt:
      "I treat the first quote as a draft. Same-day Loan Estimates, a points break-even I actually charted, and overlays are how I shop a rate.",
    category: "rates",
    published: "2026-08-06",
    updated: "2026-09-11",
    readingMinutes: 9,
    tags: ["Rates", "Loan Estimates", "Shopping", "Points", "Overlays"],
    relatedCalculators: [
      { href: "/", label: "Mortgage Calculator" },
      { href: "/calculators/refinance-mortgage-calculator", label: "Refinance Calculator" },
    ],
    body: [
      {
        type: "p",
        html: `Headline averages — like our indicative ${SITE.defaultRate}% site default as of ${SITE.ratesAsOf} — are a starting point I typed into the calculator myself, not your price. Your personal rate is credit, LTV, product, points, and how you shop. I come at this as a systems person in Franklin who got tired of incomparable quotes. Getting a single quote feels efficient. In every same-day Loan Estimate set I have lined up for this site, spreads of more than 0.5 percentage points on rate, plus fat fee differences, show up often enough that I stopped treating the first number as real.`,
      },
      { type: "h2", text: "Step 1: What I clean up before I burn inquiries" },
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
        html: "Mortgage shopping inquiries inside a focused window (commonly about 45 days under current FICO mortgage-scoring treatment — confirm your model) typically count as one shopping event. I use that window like it is perishable, because it is. Market moves between Tuesday and Friday can make Friday’s quote look “worse” even if the lender is competitive. That is why I insist on same-day comparison when I am teaching this. I have watched a Thursday rally make a perfectly fine lender look like they raised prices overnight.",
      },
      {
        type: "ol",
        items: [
          "Request written Loan Estimates (not verbal \"about 6.5%\") from at least three lenders; five helps if you have condo, self-employment, or credit quirks.",
          "Match loan amount, lock period, occupancy, and points/credits assumption across every LE.",
          "Include a bank, a credit union or mortgage banker, and at least one broker or specialty lender if overlays might be an issue.",
          "Compare the note rate, APR, origination charges, and third-party fees that can actually change with shopping.",
          "Compare interest paid over the years you actually expect to keep the loan — not a 30-year APR if you will sell in year five.",
        ],
      },
      { type: "h2", text: "What to compare (not just the headline rate)" },
      {
        type: "ul",
        items: [
          "Interest rate and whether it assumes points or lender credits.",
          "APR and total lender fees on the Loan Estimate.",
          "Lock length, float-down options, and extension fees.",
          "Whether “no-cost” just means a higher rate.",
        ],
      },
      { type: "h2", text: "A same-day LE worksheet" },
      {
        type: "p",
        html: "When I line up quotes I force every column to match except the lender. A sheet like this is what “shopping” actually means:",
      },
      {
        type: "table",
        caption:
          "Illustrative $400,000 30-year purchase. P&amp;I from our amortization formula. Fees are examples of the kind of spread borrowers see — your LEs will differ.",
        headers: ["Compare this", "Lender A", "Lender B", "What to do"],
        rows: [
          ["Note rate / points", "6.75% / 0", "6.50% / 1 pt ($4,000)", "Need a 0-point and 1-point quote from each"],
          ["P&amp;I", "$2,594", "$2,528", "$66/month is real; points may still lose if you move"],
          ["Origination", "$1,495", "$0 (broker fee elsewhere)", "Ask A to match; origination is often movable"],
          ["Lock / float-down", "45-day; no float-down", "30-day; float-down 0.5% fee", "Price the lock length you actually need"],
          ["APR", "Looks higher", "Looks lower", "APR assumes you keep the loan; use your hold period instead"],
        ],
      },
      { type: "h2", text: "Step 3: Negotiate with competing LEs" },
      {
        type: "p",
        html: "I email the preferred lender a competing Loan Estimate and ask them to match rate, credits, or the fees they actually control. Many will. I am not being difficult — I am doing the comparison work the market expects. I do not assume the lowest note rate wins: a quote with one point prepaid can look cheaper while costing more cash. That is the whole reason I charted break-even instead of trusting a round “five years.”",
      },
      { type: "h2", text: "Discount points: break-even vs lender credits" },
      {
        type: "p",
        html: "Discount points let you pay extra at closing for a lower interest rate. One point costs 1% of the loan and often lowers the rate by about 0.25%, though the exact trade depends on the lender and the market day. Origination points are different — I make the loan officer say which one is on the LE. I got tired of “points” meaning three different fees in three conversations.",
      },
      {
        type: "p",
        html: `On a $300,000 loan, one point costs $3,000. If it saves $45 a month, break-even is about 67 months. If I refinance or sell in year three, I likely lost money on those points. At an indicative ${SITE.defaultRate}% 30-year rate, small rate cuts change P&amp;I by dozens of dollars per month — meaningful over a decade, modest over two years. I use the <a href="/">mortgage calculator</a> twice: once at the no-points rate and once at the bought-down rate. Divide the cash paid for points by the monthly difference. That is the only break-even I trust.`,
      },
      {
        type: "aside",
        html: "When I ran a $300,000 30-year at 6.75% versus 6.50% — a typical one-point trade — the monthly P&amp;I drop was about $50. At $3,000 for the point, break-even landed near month 60. If I assumed a sale in year three, those points were still underwater. That is why I ask every scenario for a zero-point quote and a one-point quote on the same day, then chart the crossover instead of trusting a round “five years.”",
      },
      {
        type: "figure",
        src: "/images/blog/points-breakeven.svg",
        alt: "Line chart showing $3,000 cost of one discount point versus cumulative monthly savings on a $300,000 loan, crossing near month 60.",
        caption:
          "One discount point on $300,000: 6.75% → 6.50% saves about $50/month. Cumulative savings cross the $3,000 cost near month 60. Source: Smart Mortgage Calculator, September 2026.",
        width: 880,
        height: 460,
      },
      {
        type: "p",
        html: "Lender credits work the other direction: I accept a higher rate so the lender pays part of closing costs. “No-cost” loans almost always price those credits into the rate. Credits help if I am cash-constrained; points help if I am a long-horizon owner. I ask every lender for a zero-point quote and a one-point quote on the same day. I also ask whether seller concessions can fund points or a temporary buydown within program caps — <a href=\"/blog/down-payment-how-much-do-you-need\">concessions and cash to close</a>.",
      },
      {
        type: "ul",
        items: [
          "Points often make sense if you will stay well past break-even, have cash without draining reserves, and are unlikely to refinance soon.",
          "Skip them if you might move within a few years, would rather put cash toward a larger down payment to avoid PMI, or expect a refinance before break-even — <a href=\"/blog/should-you-refinance-2026\">refinance guide</a>.",
          "Purchase points on a primary home are often deductible in the year paid under current IRS rules; refinance points are usually amortized — confirm with a tax professional.",
        ],
      },
      { type: "h2", text: "Rate locks vs float-downs" },
      {
        type: "ul",
        items: [
          "Lock when you cannot afford rates rising before closing — especially once under contract with a fixed closing date.",
          "Float only if you have schedule flexibility and a written plan for when you will lock.",
          "Ask about float-down: market-move threshold, fee (often roughly 0–1% of loan amount), one-time vs multiple, whether it shortens lock life, and how points are treated.",
          "Confirm lock-extension fees before the lock expires — extensions can erase a “win.”",
        ],
      },
      { type: "h2", text: "Overlays vs guidelines: why one lender says no" },
      {
        type: "p",
        html: "Borrowers hear “you don't qualify for FHA” or “VA won't do this” when the real story is “this lender's overlay won't.” I am not a loan officer, but I have read enough adverse-action letters in reader questions to stop collapsing guideline and overlay into one word. Agency and Ginnie Mae guidelines set a baseline; each bank, credit union, and investor adds extra rules. Automated underwriting can say Approve/Eligible while a lender still declines on overlay. That is why I tell people to diversify who sees the file.",
      },
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
      {
        type: "p",
        html: "Depository banks often keep overlays tight because loans sit on the balance sheet or feed conservative investors. Mortgage bankers and brokers may access multiple investor matrices. That does not make every broker better; it means I will not send a quirky condo file to only one retail bank. The flashiest online rate is often the tightest overlay. A slightly higher rate from a specialist who can close beats a teaser quote that dies two weeks before closing. I would rather be slightly “expensive” and funded.",
      },
      { type: "h2", text: "What to do after a decline" },
      {
        type: "ol",
        items: [
          "Ask in writing: guideline issue or overlay? Which rule citation?",
          "Request the adverse action reason codes and keep your Loan Estimate for comparison.",
          "Take the same package to a lender that advertises the niche (recent credit event, condo, VA residual, foreign national jumbo, etc.).",
          "Still shop 3–5 LEs in a rate-shopping window so you are not stuck with the first approval's pricing.",
        ],
      },
      { type: "h2", text: "Builder or “preferred” lender is another single-quote trap" },
      {
        type: "p",
        html: "Builder incentives can be real — and still lose to an independent quote plus a seller concession. I always want both sheets of numbers before anyone waives shopping. Preferred is a marketing word. It is not a fiduciary duty.",
      },
      { type: "h2", text: "Worked comparison" },
      {
        type: "p",
        html: `On a $400,000 loan near ${SITE.defaultRate}%, a 0.25% improvement without points saves on the order of $60+/month. Paying one point ($4,000) for that quarter point only wins if I stay past break-even. I run both paths in the <a href="/">mortgage calculator</a> before I would negotiate. That $66/month gap is the one-quote tax I keep quoting because it is boring and expensive.`,
      },
      { type: "h2", text: "FAQs" },
      {
        type: "faq",
        items: [
          {
            q: "Should I lock before house hunting?",
            a: "Pre-approvals help. Long locks before an address can be pricey — ask about lock-and-shop programs and what happens if you do not find a house before the lock dies.",
          },
          {
            q: "Do online lenders always win?",
            a: "Not on overlays or complex income. Compare written Loan Estimates either way. The flashiest rate is often the tightest overlay.",
          },
          {
            q: "Is the broker always cheaper?",
            a: "Brokers can shop multiple investors; they are not magic. Still compare written LEs, including broker compensation, against a bank and a credit union.",
          },
          {
            q: "Do float-downs refund points?",
            a: "Policies vary. Get float-down fees, market-move thresholds, and point treatment in writing before you lock.",
          },
          {
            q: "Can I roll points into the loan?",
            a: "Sometimes as financed costs within LTV limits. That raises the balance and changes break-even. In my $300,000 6.75%→6.50% test, the $3,000 point took about 60 months to earn back — financing the point makes that clock longer.",
          },
        ],
      },
      {
        type: "p",
        html: `I confirm every number on the Closing Disclosure. This guide is educational — verify pricing, lock policies, overlays, and credit treatment with a licensed loan officer. Related: <a href="/blog/current-mortgage-rates-2026">2026 rates overview</a> and <a href="/blog/mortgage-pitfalls-homebuyers-should-avoid">common pitfalls</a>.`,
      },
    ],
  },
  {
    slug: "va-loan-entitlement-residual-income",
    title: "VA Loan Entitlement, Residual Income & Funding Fees (2026)",
    description:
      "How VA entitlement, FHFA county limits for partial entitlement, residual income by region, and funding-fee exemptions work in 2026.",
    excerpt:
      "I wired VA residual tables into the calculator from Franklin — South family-of-four is $1,003, and DTI-only thinking still fails files.",
    category: "loan-types",
    published: "2026-08-06",
    updated: "2026-09-11",
    readingMinutes: 8,
    tags: ["VA", "Entitlement", "Residual income", "Funding fee"],
    relatedCalculators: [
      { href: "/calculators/va-mortgage-calculator", label: "VA Calculator" },
      { href: "/", label: "Mortgage Calculator" },
      { href: "/calculators/home-affordability-calculator", label: "Affordability Calculator" },
    ],
    body: [
      {
        type: "p",
        html: "I am not a VA lender and I will not pretend a Certificate of Eligibility is something I issue. I am the person who had to put residual-income charts, funding-fee percentages, and a $0-down path into a calculator without lying. VA-backed loans remain one of the strongest benefits for eligible service members, veterans, and surviving spouses: often $0 down, competitive pricing, no monthly PMI. The details that trip people up — the ones I hit while coding — are entitlement math, residual income (not just DTI), funding fees and disability exemptions, and how appraisals treat minimum property requirements. Confirm current VA circulars and lender overlays before you rely on any figure here.",
      },
      { type: "h2", text: "Full vs partial entitlement and loan size" },
      {
        type: "p",
        html: `With full entitlement, VA typically does not set a maximum loan amount the way FHA does — lenders still underwrite ability to repay and may impose their own caps. With partial entitlement (another VA loan outstanding, or entitlement not fully restored), remaining guaranty often interacts with FHFA conforming county limits — commonly discussed against a 2026 baseline near about $832,750 in many counties. I always want a COE in the file before I would model “$0 down, any price.” Have the lender calculate remaining entitlement for the county. I will not guess yours from here.`,
      },
      { type: "h2", text: "Residual income by region and family size" },
      {
        type: "p",
        html: "VA underwriting emphasizes residual income: money left after shelter expense, debts, and taxes for day-to-day living. I had to store those charts by region and family size in our code. That is why two buyers with the same gross DTI can see different VA outcomes in different regions or household sizes. New debts after pre-approval eat residual first — I would freeze lifestyle financing until funded, especially on a tight South-region file like the one below.",
      },
      {
        type: "table",
        caption:
          "Educational copy of the VA Lender’s Handbook-style residual figures we use in the VA calculator for loans of $80,000 or more (monthly dollars). Family size 6+ adds $75 per person beyond 5. Confirm the current table on VA.gov before you underwrite a file.",
        headers: ["Family size", "Northeast", "Midwest", "South", "West"],
        rows: [
          ["1", "$450", "$441", "$441", "$491"],
          ["2", "$755", "$738", "$738", "$823"],
          ["3", "$909", "$889", "$889", "$990"],
          ["4", "$1,025", "$1,003", "$1,003", "$1,117"],
          ["5", "$1,062", "$1,039", "$1,039", "$1,158"],
        ],
      },
      {
        type: "p",
        html: "I live in Franklin, Georgia — South region. A family of four here is measured against $1,003. The same household in California (West) is measured against $1,117. That $114 is not a cost-of-living guess I invented; it is the regional table. Do not borrow a friend’s Midwest residual result for a West Coast file.",
      },
      { type: "h2", text: "A residual file that “looks fine” on DTI" },
      {
        type: "p",
        html: "Lenders still compute DTI. VA still wants residual. I walk tight files like this (illustrative, not a credit decision):",
      },
      {
        type: "table",
        caption:
          "South region, family of four, $1,003 residual guideline. Net income here is after estimated taxes — VA residual is not the same as gross DTI.",
        headers: ["", "Comfortable file", "Tight file"],
        rows: [
          ["Net income after taxes", "$5,400", "$5,100"],
          ["Proposed PITI", "$2,450", "$2,700"],
          ["Other debts (car, student, cards)", "$1,100", "$1,450"],
          ["Residual left", "$1,850", "$950"],
          ["Vs $1,003 South / family of 4", "Clears by $847", "Short by $53"],
        ],
      },
      {
        type: "p",
        html: "The tight file can still show an acceptable gross DTI if income is high enough before taxes. Residual is the leftover on a net-ish basis, and $53 under the chart is how VA denials happen on “fine” DTI. A new $80/month furniture account after pre-approval would have blown the comfortable file’s margin too. If you are close, shrinking the house payment (price, taxes, insurance) usually helps more than arguing the ratio.",
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
        html: "Most VA purchase and cash-out transactions include a funding fee that varies by first vs subsequent use and down payment. The fee is often financed into the loan. The expensive miss I keep repeating: veterans with qualifying service-connected disability ratings (and some other categories) may be exempt — yet exemptions get under-claimed when COE data or disability documentation is incomplete. Subsequent-use fees are higher than first-use in standard schedules. Restoring entitlement after selling a prior VA-financed home (and paying off that loan) can matter for the next purchase. Verify current fee tables on VA.gov. I am not going to memorize a circular that VA can update next month.",
      },
      {
        type: "aside",
        html: "When I modeled a $400,000 VA purchase at $0 down in our calculator, the illustrative first-use funding fee (2.15%) added $8,600 to the loan; subsequent-use 3.30% added $13,200. The exempt bar is $0 — which is why incomplete disability documentation on a Certificate of Eligibility is such an expensive miss. I am not a VA lender; these are published-schedule percentages run through our own funding-fee field.",
      },
      {
        type: "figure",
        src: "/images/blog/va-funding-fee.svg",
        alt: "Bar chart of VA funding fee on a $400,000 zero-down purchase: $8,600 first use, $13,200 subsequent use, and $0 if exempt.",
        caption:
          "Illustrative VA funding fee on a $400,000 $0-down purchase. Confirm current tables on VA.gov; qualifying disability exemptions can zero the fee. Source: Smart Mortgage Calculator, September 2026.",
        width: 880,
        height: 460,
      },
      {
        type: "table",
        caption:
          "Illustrative funding fee on a $400,000 $0-down purchase using published-schedule percentages in our VA calculator. Confirm current tables and exemption categories on VA.gov.",
        headers: ["Use / status", "Fee rate (illustrative)", "Dollars added to this loan"],
        rows: [
          ["First-use purchase, $0 down", "2.15%", "$8,600"],
          ["Subsequent-use purchase, $0 down", "3.30%", "$13,200"],
          ["Qualifying exemption (e.g. disability)", "0%", "$0"],
        ],
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
        html: "VA appraisals enforce minimum property requirements focused on safety and soundness. I care about this because readers confuse “dated kitchen” with “fail.” Peeling paint in certain contexts, exposed wiring, or non-functional systems can become repair conditions; cosmetic kitchens often do not. Knowing MPR versus cosmetic issues is how I would keep a contract from turning into a repair scramble.",
      },
      { type: "h2", text: "Seller concessions and local affordability" },
      {
        type: "p",
        html: `VA generally limits seller concessions (distinct from reasonable discount points in some reads of the rules) around about 4% of the reasonable value for certain closing costs — confirm with the lender. Local taxes, insurance, and state veteran property-tax benefits change residual income and payment comfort. I model scenarios in the <a href="/calculators/va-mortgage-calculator">VA calculator</a> and a <a href="/">state mortgage calculator</a>. Concession structure: <a href="/blog/down-payment-how-much-do-you-need">down payment guide</a>.`,
      },
      { type: "h2", text: "Shopping tips for VA borrowers" },
      {
        type: "ol",
        items: [
          "Choose lenders who close VA weekly — overlays on credit and condos vary widely. If one shop declines, ask whether the issue is a VA guideline or a company overlay, then shop specialists — <a href=\"/blog/how-to-get-the-best-mortgage-rate\">rate shopping and overlays</a>.",
          "Bring COE and disability documentation early if you believe you are funding-fee exempt.",
          "Compare Loan Estimates including financed funding fee vs cash payment.",
          "Ask about IRRRL refinance later if rates drop — still run break-even math in the <a href=\"/calculators/refinance-mortgage-calculator\">refinance calculator</a>.",
        ],
      },
      {
        type: "p",
        html: `Related reading: <a href="/blog/down-payment-how-much-do-you-need">down payment options</a> and <a href="/blog/fha-vs-conventional-loans">FHA vs conventional</a> if you are comparing products. Verify entitlement, residual charts, and fees with VA resources and a licensed VA lender. I will keep the calculator honest. I will not underwrite the COE.`,
      },
      { type: "h2", text: "FAQs" },
      {
        type: "faq",
        items: [
          {
            q: "Does VA set a maximum loan if I have full entitlement?",
            a: "Typically VA does not cap you the way FHA county limits cap FHA. Lenders still underwrite ability to repay and may impose their own size caps. Partial entitlement is the trap: remaining guaranty often interacts with FHFA conforming county limits.",
          },
          {
            q: "If my DTI is fine, can residual still deny the loan?",
            a: "Yes. Residual is a separate test. In the South family-of-four example above, $950 leftover fails a $1,003 chart even when gross DTI looks passable. New debts after pre-approval hit residual first.",
          },
          {
            q: "Should I pay the funding fee in cash?",
            a: "Financing it raises the loan and the payment; paying cash preserves the balance. Run both in the <a href=\"/calculators/va-mortgage-calculator\">VA calculator</a>. If you may be exempt, fix the COE before you decide — a documented exemption is $0, not a cash-vs-finance debate.",
          },
          {
            q: "Can I keep a prior VA loan as a rental and still buy $0 down?",
            a: "Keeping the old loan usually ties up entitlement and can force partial-entitlement math plus a down payment on the next purchase. Restoration after selling and paying off is the cleaner path. Use a VA-experienced lender on the COE math — I will not guess your remaining guaranty.",
          },
        ],
      },
    ],
  },
];
