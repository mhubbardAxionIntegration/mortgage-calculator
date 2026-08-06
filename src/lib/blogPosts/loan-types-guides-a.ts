import type { BlogPost } from "../blogTypes";

export const postsLoanTypesGuides: BlogPost[] = [
  {
    slug: "15-vs-30-year-mortgage",
    title: "15-Year vs. 30-Year Mortgage: Which Is Right for You?",
    description:
      "Compare 15-year and 30-year mortgages on payment, total interest, rate shopping, and flexibility — with a 2026 worked example.",
    excerpt:
      "A shorter term saves a fortune in interest; a longer term frees cash flow. Here is how to choose — and shop — the right term.",
    category: "loan-types",
    published: "2026-03-10",
    updated: "2026-08-06",
    readingMinutes: 12,
    tags: ["Loan terms", "Strategy"],
    relatedCalculators: [
      { href: "/", label: "Mortgage Calculator" },
      { href: "/calculators/refinance-mortgage-calculator", label: "Refinance Calculator" },
    ],
    body: [
      {
        type: "p",
        html: "The loan term you choose shapes both your monthly budget and long-term wealth. Fifteen- and thirty-year fixed-rate mortgages are a classic trade-off between cash flow and total cost. This guide walks through the math, then covers how term choice interacts with rate shopping, points, and local PITI.",
      },
      { type: "h2", text: "The case for a 30-year mortgage" },
      {
        type: "ul",
        items: [
          "Lower required monthly payments — more qualifying power and cash-flow cushion.",
          "Flexibility to pay extra principal when you choose without being locked into a higher minimum.",
          "Useful when income is variable or large expenses compete for cash.",
          "Easier to keep reserves for insurance spikes or repairs — especially in high-insurance states.",
        ],
      },
      { type: "h2", text: "The case for a 15-year mortgage" },
      {
        type: "ul",
        items: [
          "Usually a lower note rate than a comparable 30-year loan on the same day.",
          "Dramatically less total interest and faster equity build.",
          "Forces a savings habit if you can afford the payment through a rough month.",
          "Pairs well with strong dual income and modest other debts.",
        ],
      },
      { type: "h2", text: "Worked example: $300,000 loan" },
      {
        type: "p",
        html: "Assume a $300,000 loan near today's market fixed rates. A 15-year quote often prices somewhat lower than the 30-year. The 30-year path keeps the required payment lower but accrues interest for decades; the 15-year raises the monthly bill while cutting lifetime interest — often by well over half depending on the rate gap. Treat this as a pattern, not a quote.",
      },
      {
        type: "ul",
        items: [
          "30-year: lower required payment, slower equity, higher lifetime interest.",
          "15-year: higher required payment, faster equity, much lower lifetime interest.",
          "Hybrid: take 30-year flexibility, then schedule extra principal when cash flow allows.",
        ],
      },
      { type: "h2", text: "Shopping and pricing by term" },
      {
        type: "p",
        html: "Ask every lender for Loan Estimates on both terms the same day with the same points assumption. Some lenders price 15-year products aggressively; others barely improve the rate.",
      },
      {
        type: "ol",
        items: [
          "Compare note rate and APR on each term.",
          "Check whether you need points to reach a marketed 15-year rate.",
          "Model total interest if you keep each loan to maturity vs. sell in year seven.",
          "Ask whether a 20- or 25-year option splits the difference.",
          'See <a href="/blog/how-to-get-the-best-mortgage-rate">how to get the best mortgage rate</a> for LE negotiation tactics.',
        ],
      },
      { type: "h2", text: "Taxes, insurance, and the full PITI picture" },
      {
        type: "p",
        html: `Term choice only changes principal and interest. Property taxes, insurance, PMI/MIP, and HOA stay either way. Always compare inside a full PITI estimate on a <a href="/">state-aware mortgage calculator</a> — for example <a href="/?state=texas">Texas</a> or <a href="/?state=california">California</a>.`,
      },
      { type: "h2", text: "When people refinance between terms" },
      {
        type: "p",
        html: `Common pattern: start 30-year for payment comfort, later refinance to 15- or 20-year once income rises — but only if break-even math works. Use the <a href="/calculators/refinance-mortgage-calculator">refinance calculator</a>. Alternatively, a <a href="/blog/mortgage-recasting-vs-refinancing">recast</a> can lower the payment after a lump-sum principal payment without a full refinance.`,
      },
      { type: "h2", text: "How to decide in practice" },
      {
        type: "p",
        html: `Start with the payment you could still make after a temporary income shock. If the 15-year only works in a perfect month, the 30-year with optional extras is usually safer. Open the <a href="/">mortgage calculator</a>, switch terms, and compare payment and total interest. Methodology: <a href="/how-we-calculate">how we calculate</a>. Verify final pricing with a licensed lender.`,
      },
    ],
  },
  {
    slug: "what-is-pmi-and-how-to-remove-it",
    title: "What Is PMI and How Do You Get Rid of It?",
    description:
      "Understand private mortgage insurance, how much it costs, how to request cancellation, and how PMI differs from FHA MIP in 2026.",
    excerpt:
      "PMI protects your lender, not you — and it can add hundreds to your payment. Here is how it works, how to cancel it, and how FHA MIP differs.",
    category: "guides",
    published: "2026-04-02",
    updated: "2026-08-06",
    readingMinutes: 13,
    tags: ["PMI", "Down payment", "FHA MIP"],
    relatedCalculators: [
      { href: "/", label: "Mortgage Calculator" },
      { href: "/calculators/fha-mortgage-calculator", label: "FHA Calculator" },
      { href: "/calculators/refinance-mortgage-calculator", label: "Refinance Calculator" },
    ],
    body: [
      {
        type: "p",
        html: "Private mortgage insurance (PMI) is one of the most misunderstood line items on a mortgage. It protects the lender — not you — if you stop making payments, and it is typically required when your down payment is under 20% on a conventional loan. Understanding cancellation rules (and how FHA MIP differs) can save years of premiums.",
      },
      { type: "h2", text: "How much PMI costs" },
      {
        type: "p",
        html: "PMI usually runs between roughly 0.3% and 1.5% of your loan amount per year, billed monthly. On a $280,000 loan, that can mean anywhere from about $70 to $350 a month. The exact rate depends on credit score and loan-to-value — the smaller your down payment and the lower your score, the higher the premium. Lenders also offer single-premium or lender-paid PMI structures that flip cost into cash at closing or into the rate.",
      },
      { type: "h2", text: "How to remove conventional PMI" },
      {
        type: "ul",
        items: [
          "Reach about 20% equity based on original value (or current value under servicer rules) and request cancellation in writing.",
          "Automatic termination: under federal rules for many conventional loans, PMI must terminate once the scheduled balance reaches 78% of the original value, if you are current.",
          "Appraisal-based removal earlier if home values rise — the servicer's appraisal and seasoning rules apply; you usually pay for the appraisal.",
          "Extra principal payments to hit the equity target faster — then request cancellation; do not assume the servicer notices automatically before the 78% date.",
          "Refinance into a new loan once equity supports dropping mortgage insurance, if rate/fee math works.",
        ],
      },
      {
        type: "p",
        html: "Put the cancellation request in writing and keep proof of delivery. Servicers sometimes need recent payment history and may deny requests if the loan is delinquent or if LTV math fails their waterfall. If you are close to the threshold, ask what documentation they need before you pay for an appraisal.",
      },
      { type: "h2", text: "FHA MIP is different — including the 10% / 11-year rule" },
      {
        type: "p",
        html: `FHA loans use mortgage insurance premiums (MIP) instead of PMI. Most purchase borrowers pay upfront MIP (often financed) plus annual MIP. Critical nuance for 2026 planning: when you put down less than 10%, annual MIP typically lasts for the life of the loan unless you refinance out. With at least 10% down, annual MIP can usually be canceled after 11 years if other conditions are met. That is why many FHA borrowers refinance to conventional once equity and credit allow. Model both paths in the <a href="/calculators/fha-mortgage-calculator">FHA mortgage calculator</a> and read <a href="/blog/fha-loan-limits-2026-by-county">FHA loan limits 2026</a> for county maxes. Confirm current HUD handbook language before you rely on any duration rule.`,
      },
      { type: "h2", text: "Mortgage recasting as a partial alternative" },
      {
        type: "p",
        html: `If you receive a lump sum (bonus, inheritance, sale of another asset), some servicers allow a <a href="/blog/mortgage-recasting-vs-refinancing">mortgage recast</a>: apply a large principal payment and re-amortize the remaining balance over the existing term at the same rate, lowering the payment without a full refinance. Recasting does not by itself cancel PMI — you still need to meet the servicer's LTV cancellation rules — but it can improve cash flow after you have already paid down principal.`,
      },
      { type: "h2", text: "Is avoiding PMI always the right move?" },
      {
        type: "p",
        html: "Not always. Waiting years to save a full 20% down can cost more in rent than paying PMI for a period — especially if prices are rising. Model three scenarios: buy sooner with PMI, wait for 20% down, or buy a less expensive home. Also compare FHA's MIP duration to conventional PMI cancellation. The best choice fits timeline and cash reserves, not a blanket rule.",
      },
      { type: "h2", text: "Shopping notes" },
      {
        type: "ul",
        items: [
          "Compare Loan Estimates with the same LTV so PMI quotes are apples-to-apples.",
          "Lender overlays can require higher scores for low-down conventional even when Fannie/Freddie guidelines allow the file — see <a href=\"/blog/lender-overlays-vs-loan-guidelines\">overlays vs guidelines</a>.",
          "Seller concessions cannot usually eliminate PMI directly but can fund closing costs so more of your cash goes to down payment.",
        ],
      },
      {
        type: "p",
        html: `Our main <a href="/">mortgage calculator</a> automatically adds PMI when your down payment is under 20% and removes it at 20% or above. For the exact rule in our math, see <a href="/how-we-calculate">how we calculate</a>. Confirm cancellation policy with your servicer; this is educational, not servicing advice.`,
      },
    ],
  },
  {
    slug: "improve-credit-score-before-buying",
    title: "How to Improve Your Credit Score Before Buying a Home",
    description:
      "Practical steps to raise your credit score before a mortgage application, plus how rate shopping and pricing tiers affect 2026 quotes.",
    excerpt:
      "Your credit score is one of the biggest levers on your rate. Here is how to raise it — and shop lenders — in the months before you apply.",
    category: "guides",
    published: "2026-05-12",
    updated: "2026-08-06",
    readingMinutes: 12,
    tags: ["Credit", "Preparation", "Rates"],
    relatedCalculators: [
      { href: "/", label: "Mortgage Calculator" },
      { href: "/calculators/home-affordability-calculator", label: "Affordability Calculator" },
    ],
    body: [
      {
        type: "p",
        html: "Of all the factors that determine your mortgage rate, your credit score is one of the few you can actively improve in a few months. The difference between a \"good\" and \"excellent\" score can be a quarter to half a percentage point or more on pricing — real money over 30 years — and it also affects PMI premiums and lender overlays.",
      },
      { type: "h2", text: "Why your score matters so much" },
      {
        type: "p",
        html: `Lenders price risk with loan-level pricing adjustments tied to score bands and LTV. A higher score signals you are likely to repay on time. On a $350,000 loan, even a 0.5% rate difference can mean tens of thousands of dollars over the life of the loan — see for yourself in the <a href="/">mortgage calculator</a>. FHA may still approve mid-500s files with larger down payments, but conventional pricing improves sharply as you climb through the 680, 720, and 760 bands.`,
      },
      { type: "h2", text: "Steps that move the needle" },
      {
        type: "ul",
        items: [
          "Pay every bill on time — payment history is the single biggest factor.",
          "Lower credit utilization to under 30% (ideally under 10%) of revolving limits; asking for limit increases without new hard pulls can help if you keep balances flat.",
          "Avoid opening or closing accounts in the months before you apply.",
          "Dispute errors on your credit reports — they are more common than you think; pull all three bureaus.",
          "Keep older accounts open to preserve average account age.",
          "If you are a thin-file borrower, ask lenders which bureau and scoring model they use (often a classic FICO mortgage score, not a free VantageScore app).",
        ],
      },
      { type: "h2", text: "Timing your application and the ~45-day shopping window" },
      {
        type: "p",
        html: `Give yourself three to six months of clean, intentional credit behavior before applying. When you do shop for a mortgage, request Loan Estimates within a focused window — often about 14–45 days depending on the scoring model — so multiple lender inquiries count as a single rate-shopping event. That lets you collect 3–5 competing LEs without a stack of unrelated hard pulls. Details: <a href="/blog/how-to-get-the-best-mortgage-rate">best mortgage rate guide</a>.`,
      },
      { type: "h2", text: "Overlays: why a \"guideline-eligible\" file still gets declined" },
      {
        type: "p",
        html: `Agency guidelines are not the same as a particular lender's risk appetite. One bank may require 680+ for low-down conventional while another will run 640. Credit unions, mortgage bankers, and brokers can differ widely. If you are declined, ask whether the reason was guideline or overlay — then shop a specialist. See <a href="/blog/lender-overlays-vs-loan-guidelines">lender overlays vs loan guidelines</a>.`,
      },
      { type: "h2", text: "Worked pricing intuition" },
      {
        type: "p",
        html: "Suppose two borrowers buy the same $400,000 home with 5% down. Borrower A scores 760; Borrower B scores 680. Borrower A may see both a lower note rate and cheaper PMI. Over five years, the gap can dwarf the cost of a credit-repair delay of a few months. Run your payment both ways in the calculator, then decide whether waiting to raise the score is cheaper than buying now.",
      },
      { type: "h2", text: "Common questions" },
      {
        type: "ul",
        items: [
          "Should I pay collections before applying? Often yes for mortgage underwriting, even if the FICO effect is partial — ask your loan officer which debts must be cleared.",
          "Do authorized-user accounts help? Sometimes for FICO; mortgage underwriters may still scrutinize them.",
          "Does checking your own credit hurt? Soft pulls usually do not; lender hard pulls do.",
        ],
      },
      {
        type: "p",
        html: `Pair credit work with a realistic budget in the <a href="/calculators/home-affordability-calculator">affordability calculator</a>. This site provides educational guidance — not credit repair services or loan offers. Confirm underwriting with a licensed lender.`,
      },
    ],
  },
  {
    slug: "fha-vs-conventional-loans",
    title: "FHA vs. Conventional Loans: Which Is Right for You?",
    description:
      "Compare FHA and conventional mortgages on down payment, credit, MIP vs PMI, county loan limits, and total cost in 2026.",
    excerpt:
      "FHA loans are often easier to qualify for; conventional loans can be cheaper once PMI cancels. Here is how to choose — including MIP duration rules.",
    category: "loan-types",
    published: "2026-05-22",
    updated: "2026-08-06",
    readingMinutes: 14,
    tags: ["FHA", "Conventional", "Comparison", "MIP"],
    relatedCalculators: [
      { href: "/calculators/fha-mortgage-calculator", label: "FHA Calculator" },
      { href: "/", label: "Mortgage Calculator" },
      { href: "/calculators/refinance-mortgage-calculator", label: "Refinance Calculator" },
    ],
    body: [
      {
        type: "p",
        html: "FHA and conventional loans are the two most common paths to homeownership. The right choice depends on credit, cash to close, how long you expect to keep the loan, county loan limits, and whether mortgage insurance will stick for years or drop off once you build equity. Eligibility and MIP rules are national; the maximum loan and your tax/insurance escrow are local.",
      },
      { type: "h2", text: "Side-by-side snapshot" },
      {
        type: "ul",
        items: [
          "Down payment: FHA often 3.5% with 580+ FICO (10% typical if score is 500–579); conventional can start near 3% for strong profiles, with 20% removing PMI.",
          "Credit flexibility: FHA is typically more forgiving; conventional pricing improves sharply with higher scores.",
          "Insurance: FHA charges upfront MIP plus monthly annual MIP; conventional uses PMI that can cancel near 20% equity.",
          "Loan limits: FHA uses county limits (2026 national floor roughly $541,287; high-cost ceiling roughly $1,249,125; special areas AK/HI/GU/VI can be higher) — verify on HUD sources.",
          "Property rules: FHA appraisals emphasize minimum property requirements (safety/soundness); conventional follows agency/investor overlays.",
        ],
      },
      { type: "h2", text: "FHA loans — MIP duration matters as much as the premium" },
      {
        type: "p",
        html: `Most purchase borrowers finance about 1.75% upfront MIP into the loan and pay monthly annual MIP (often near 0.55% of the base loan for common scenarios — confirm current HUD figures). When you put down less than 10%, annual MIP usually lasts for the life of the loan unless you refinance out. With 10% or more down, annual MIP can often cancel after 11 years. That structure is why FHA can win on cash-to-close while losing on a long hold. Deep dive: <a href="/blog/fha-loan-limits-2026-by-county">FHA loan limits 2026 by county</a>.`,
      },
      { type: "h2", text: "Conventional loans — PMI can exit" },
      {
        type: "p",
        html: `Conventional loans follow Fannie Mae / Freddie Mac guidelines (or jumbo investor overlays). PMI rates depend on LTV and credit; the key advantage is that PMI is usually cancellable once you reach about 20% equity — unlike many FHA low-down scenarios. Read <a href="/blog/what-is-pmi-and-how-to-remove-it">how to remove PMI</a>.`,
      },
      { type: "h2", text: "Why lender overlays decide close calls" },
      {
        type: "p",
        html: `Two lenders can cite the same FHA or Fannie guidelines and still disagree on your condo, gift funds, or credit events. Shop flexible or specialist lenders when a big box declines a file that looks guideline-eligible — <a href="/blog/lender-overlays-vs-loan-guidelines">overlays vs guidelines</a>.`,
      },
      { type: "h2", text: "Worked mindset (not a quote)" },
      {
        type: "p",
        html: "On a $350,000 purchase with 3.5% down, an FHA loan finances most of the price and adds monthly MIP on top of P&amp;I, taxes, and insurance. A conventional 5% down loan may price worse on day one if credit is thin, but PMI can later cancel. Run both for a 5–7 year hold: if you expect to refinance to conventional once equity and credit improve, FHA can still be the bridge. Always check that the loan amount fits the county FHA limit.",
      },
      { type: "h2", text: "Seller concessions by program" },
      {
        type: "p",
        html: `FHA commonly allows seller concessions up to about 6% of the lesser of price or value toward allowable closing costs; conventional caps often land between about 3% and 9% based on down payment. Structure as credits, not informal price cuts. More: <a href="/blog/seller-concessions-and-rate-buydowns">seller concessions and buydowns</a>.`,
      },
      { type: "h2", text: "How to decide" },
      {
        type: "ol",
        items: [
          'Model FHA with financed upfront MIP in the <a href="/calculators/fha-mortgage-calculator">FHA calculator</a>.',
          'Model conventional at the same price in the <a href="/">mortgage calculator</a> with realistic PMI.',
          "Compare cash to close, month-1 payment, and whether insurance can fall off.",
          "Ask for Loan Estimates with the same purchase price, points, and lock period from multiple lenders.",
        ],
      },
      {
        type: "p",
        html: `Many FHA borrowers later refinance into a conventional loan. Use the <a href="/calculators/refinance-mortgage-calculator">refinance break-even calculator</a> when that day comes. Verify current HUD and agency rules — this content is educational, not an underwriting decision.`,
      },
    ],
  },
];
