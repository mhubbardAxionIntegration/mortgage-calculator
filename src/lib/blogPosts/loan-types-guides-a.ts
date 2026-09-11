import type { BlogPost } from "../blogTypes";

export const postsLoanTypesGuides: BlogPost[] = [
  {
    slug: "15-vs-30-year-mortgage",
    title: "15-Year vs. 30-Year Mortgage: Which Is Right for You?",
    description:
      "Compare 15-year and 30-year mortgages on payment, total interest, qualification, extra principal, and rate shopping — with a 2026 worked example.",
    excerpt:
      "A shorter term saves a fortune in interest; a longer term frees cash flow. Here is how to choose — and shop — the right term.",
    category: "loan-types",
    published: "2026-03-10",
    updated: "2026-09-11",
    readingMinutes: 9,
    tags: ["Loan terms", "Strategy"],
    relatedCalculators: [
      { href: "/", label: "Mortgage Calculator" },
      { href: "/calculators/arm-mortgage-calculator", label: "ARM Calculator" },
      { href: "/calculators/refinance-mortgage-calculator", label: "Refinance Calculator" },
    ],
    body: [
      {
        type: "p",
        html: "I did not pick a favorite term in a seminar. I picked one in the code. The first version of our calculator used the same interest rate on 15-year and 30-year loans because that is how lazy spreadsheets work. The 15-year payment looked brutal and the interest savings looked magical, and both numbers were slightly wrong. Real 15-year quotes usually price a little cheaper on the same day. When I put 6.25% on the 15-year and 6.75% on the 30-year for a $300,000 balance, the picture got honest: $2,572 versus $1,946 a month, and roughly $163,000 versus $400,000 of lifetime interest. I am Michael Hubbard. I build these tools from Heard County, Georgia. I am not locking your loan. I am telling you what I actually ran, and the rule I use when someone asks me which term to take.",
      },
      {
        type: "p",
        html: "The question I hear is rarely “which term is mathematically cheapest to maturity.” It is “which payment still works if a truck dies in the same month the insurance reprices.” That is a different problem. A 15-year note solves the first. A 30-year note with optional extras solves the second. Mixing them up is how people either overpay for interest or sign a payment they cannot miss.",
      },
      { type: "h2", text: "Why I still respect the 30-year" },
      {
        type: "ul",
        items: [
          "Lower required monthly payments — more qualifying power and cash-flow cushion.",
          "Flexibility to pay extra principal when you choose without being locked into a higher minimum.",
          "Useful when income is variable or large expenses compete for cash.",
          "Easier to keep reserves for insurance spikes or repairs — especially in high-insurance states.",
        ],
      },
      { type: "h2", text: "When I would lock the 15-year" },
      {
        type: "ul",
        items: [
          "Usually a lower note rate than a comparable 30-year loan on the same day.",
          "Dramatically less total interest and faster equity build.",
          "Forces a savings habit if you can afford the payment through a rough month.",
          "Pairs well with strong dual income and modest other debts.",
        ],
      },
      { type: "h2", text: "The $300,000 run that settled the argument" },
      {
        type: "p",
        html: "I keep a sticky note on the term toggle: same balance, same day, different product. On $300,000 near today’s market, the 30-year at 6.75% lands near $1,946 of principal and interest. The 15-year at 6.25% lands near $2,572. That $626 gap is the whole personality of the choice. I do not treat those figures as a quote — lenders will shade them — but I will not argue term strategy without running the same two sliders. Open the <a href=\"/\">mortgage calculator</a> on your balance and steal my method, not my numbers.",
      },
      {
        type: "aside",
        html: "I ran that $300,000 balance two ways in our calculator: 30-year at 6.75% ($1,946/month P&amp;I, about $400,000 of lifetime interest) versus 15-year at 6.25% ($2,572/month, about $163,000 of interest). The 15-year costs $626 more per month and still cuts more than half the interest — even after I gave it a half-point lower rate, which is how these products often price on the same day.",
      },
      {
        type: "figure",
        src: "/images/blog/term-15-vs-30.svg",
        alt: "Grouped bar chart comparing monthly principal and interest and lifetime interest on a $300,000 loan for 15-year versus 30-year terms.",
        caption:
          "$300,000 loan: 15-year at 6.25% vs 30-year at 6.75%. Lifetime interest drops from about $400k to $163k. Source: Smart Mortgage Calculator, September 2026.",
        width: 880,
        height: 480,
      },
      {
        type: "table",
        caption:
          "Same $300,000 balance. 15-year priced a half-point lower, which is how these products often quote on the same day. Source: Smart Mortgage Calculator amortization formula, September 2026.",
        headers: ["Path", "Required P&amp;I", "If paid as planned", "Lifetime interest"],
        rows: [
          [
            "30-year at 6.75%",
            "$1,946",
            "360 months",
            "About $400,000",
          ],
          [
            "15-year at 6.25%",
            "$2,572",
            "180 months",
            "About $163,000",
          ],
          [
            "Hybrid: 30-year note, send the 15-year payment",
            "$1,946 required; $2,572 sent",
            "Paid off in 191 months",
            "About $189,000",
          ],
        ],
      },
      { type: "h2", text: "The hybrid I actually ran" },
      {
        type: "p",
        html: "A lot of advice says “take the 30-year and just pay extra.” I wanted the number, not the slogan. I took the 15-year payment ($2,572) and applied it every month to the 30-year note at 6.75%. The loan is gone in 191 months — about 15.9 years — with roughly $189,000 of interest. That is $211,000 less interest than making only the required 30-year payment. It is also about $26,000 more interest than locking the true 15-year at 6.25%, because you never received the shorter-term rate. Smaller extras ($100–$200, or a biweekly-style extra) are in <a href=\"/blog/extra-principal-payments-and-biweekly-mortgages\">extra principal vs biweekly</a>.",
      },
      {
        type: "p",
        html: "The option you keep is the whole point. On a rough month you can drop back to $1,946 without asking the servicer for a modification. A 15-year note does not allow that. You are paying for that option: a slightly longer payoff and the higher 30-year rate. If your income is stable enough that you would never skip the extra, the locked 15-year is cheaper. If you want a safety valve, the hybrid is the honest middle — not a free 15-year.",
      },
      {
        type: "table",
        caption:
          "Seven-year sale on the same $300,000 start. Remaining balance is what you still owe (or bring to a refinance) if you sell then. Source: month-by-month amortization, September 2026.",
        headers: ["Path after 84 payments", "Balance still owed", "Interest already paid"],
        rows: [
          ["Required 30-year only", "About $272,000", "About $136,000"],
          ["True 15-year", "About $194,000", "About $110,000"],
          ["Hybrid (sent $2,572 on the 30-year)", "About $205,000", "About $121,000"],
        ],
      },
      {
        type: "p",
        html: "I ran the sale-in-year-seven case because that is how a lot of Georgia moves actually work — a job change, a bigger house, a downsize after the kids leave. If I stop at month 84, the required 30-year still owes about $272,000. The true 15-year owes about $194,000. The hybrid owes about $205,000. The hybrid captured most of the equity speed without locking $2,572 as a required payment. I would still take the true 15-year if I knew I would never miss a month. I would not take it on hope.",
      },
      { type: "h2", text: "The underwriting rule I wish someone had tattooed on me" },
      {
        type: "p",
        html: "Lenders size the file on the required payment, not on the extra principal I intend to send. I learned that the annoying way: I kept wanting the calculator to have an “I promise to pay extra” switch that would change qualification. It cannot. A 15-year that looks fine in a perfect month can fail automated underwriting when the same price on a 30-year would clear. If you are stretching, I tell you to take the 30-year that gets you to closing and behave like a 15-year borrower on the months you can. If the 15-year still leaves room under 28/36 after taxes and insurance, I tell you to lock it and stop negotiating with yourself.",
      },
      { type: "h2", text: "How I shop the term, not just the rate" },
      {
        type: "p",
        html: "I ask for Loan Estimates on both terms the same day, same points assumption. Some lenders price 15-year products like they want the business. Others barely improve the rate and then hide a point in the fine print. A marketed 15-year that requires a point can lose to a zero-point 30-year plus extras if I might sell before the point earns back. I do not pick a term off a banner ad.",
      },
      {
        type: "ol",
        items: [
          "Compare note rate and APR on each term.",
          "Check whether you need points to reach a marketed 15-year rate.",
          "Model total interest if you keep each loan to maturity vs. sell in year seven.",
          "Ask whether a 20- or 25-year option splits the difference.",
          'See <a href="/blog/how-to-get-the-best-mortgage-rate">how to get the best mortgage rate</a> for LE negotiation and points break-even.',
        ],
      },
      { type: "h2", text: "Why I built an ARM calculator instead of calling a teaser a 15-year" },
      {
        type: "p",
        html: `A 5/1 or 7/1 ARM can start lower than a 30-year fixed and still have a lower required payment than a 15-year. The first time I modeled that, it looked like I had invented a cheat code. Then I stressed the fully indexed payment in the <a href="/calculators/arm-mortgage-calculator">ARM calculator</a> and the cheat code vanished. The full recast is in <a href="/blog/arm-vs-fixed-rate-mortgage">ARM vs fixed</a>. If the only way a house fits is an ARM teaser, I treat that as a price problem or a cash-to-close problem — not a term branding problem.`,
      },
      { type: "h2", text: "The part of PITI the term switch never touches" },
      {
        type: "p",
        html: `Switching 15 versus 30 only moves principal and interest. Property taxes, insurance, PMI, and HOA stay. I learned that while wiring state defaults: a “cheap” 15-year P&amp;I in a high-escrow county can still be a worse household payment than a 30-year in Heard County. I always rerun the comparison inside a full PITI estimate on the <a href="/">state-aware mortgage calculator</a> — try <a href="/?state=texas">Texas</a> or <a href="/?state=california">California</a> if you want to see escrow pick a fight with your term choice — and I read <a href="/blog/how-much-house-can-i-afford">how much house I can actually carry</a> before I pretend a term works forever.`,
      },
      { type: "h2", text: "When I would refinance or recast later" },
      {
        type: "p",
        html: `The pattern I see most: start 30-year for payment comfort, later refinance to 15- or 20-year once income rises — but only if break-even math works. I run that in the <a href="/calculators/refinance-mortgage-calculator">refinance calculator</a> before I get romantic about it. A recast is the quieter cousin: lump-sum principal, same rate, remaining term, lower payment. Recast versus refinance: <a href="/blog/should-you-refinance-2026">should you refinance in 2026</a>.`,
      },
      { type: "h2", text: "How to decide in practice" },
      {
        type: "ol",
        items: [
          "Write down the payment you could still make after a temporary income shock — not the payment that works in a perfect month.",
          "Get Loan Estimates on 15-, 20-, and 30-year terms the same day, same points assumption.",
          "If the 15-year only fits on paper, take the 30-year and calendar a hybrid extra (the 15-year P&amp;I minus the 30-year P&amp;I) you can skip.",
          "If dual income is stable and the 15-year still leaves room under 28/36 after taxes and insurance, lock the shorter term and take the better rate.",
          "Re-run the comparison inside a full PITI estimate — term choice does not change escrow.",
        ],
      },
      {
        type: "p",
        html: `I publish the formula on <a href="/how-we-calculate">how we calculate</a>. A licensed lender still has to price the file. My job is to keep you from picking a term because a blog told you 15-year people are more serious.`,
      },
      { type: "h2", text: "FAQs" },
      {
        type: "faq",
        items: [
          {
            q: "Is paying extra on a 30-year the same as a 15-year?",
            a: "No. In my $300,000 test the hybrid paid off in 191 months at about $189,000 of interest. The true 15-year finished in 180 months at about $163,000 because it also received a lower note rate. Extra principal copies the payoff speed, not the rate.",
          },
          {
            q: "Should I take a 20-year instead?",
            a: "Ask for it on the same-day Loan Estimates. A 20-year often splits the payment jump and still cuts a large share of lifetime interest. It is a required payment, though — there is no skip-a-month option the way extras on a 30-year work.",
          },
          {
            q: "Does extra principal change my tax deduction?",
            a: "Extra principal reduces the balance faster, so you pay less interest in later years. That can shrink mortgage-interest deductions over time. Tax treatment depends on your filing situation — confirm with a tax professional.",
          },
          {
            q: "What if I might refinance in a few years?",
            a: "Then the 7-year snapshot matters more than lifetime interest. A 15-year still builds equity faster; a 30-year keeps cash flow if you are unsure. Do not buy discount points on a term you expect to replace before break-even — see the <a href=\"/blog/should-you-refinance-2026\">refinance guide</a>.",
          },
        ],
      },
    ],
  },
  {
    slug: "what-is-pmi-and-how-to-remove-it",
    title: "What Is PMI and How Do You Get Rid of It?",
    description:
      "Understand private mortgage insurance, how much it costs, how to request cancellation, and how PMI differs from FHA MIP in 2026.",
    excerpt:
      "I treat PMI as a lender protection line I can schedule an exit from — not a moral failing for putting less than 20% down.",
    category: "guides",
    published: "2026-04-02",
    updated: "2026-09-11",
    readingMinutes: 9,
    tags: ["PMI", "Down payment", "FHA MIP"],
    relatedCalculators: [
      { href: "/", label: "Mortgage Calculator" },
      { href: "/calculators/fha-mortgage-calculator", label: "FHA Calculator" },
      { href: "/calculators/refinance-mortgage-calculator", label: "Refinance Calculator" },
    ],
    body: [
      {
        type: "p",
        html: "The PMI line is the feature I argue with myself about most. Conventional loans typically add it under 20% down and drop it at 20%. That is a cliff, and I watched it happen: I dragged the down-payment slider on a $400,000 house from 19% to 20% and the insurance vanished. At 5% down in that same run, modeled PMI at 0.60% of the loan was $190 a month. People treat the cliff as a character test. I treat it as a cancellation calendar plus a cash-reserve problem. I am not your servicer. I am the person who had to code the rule, then explain why the payment did not fall off by magic at month 60.",
      },
      { type: "h2", text: "What I see when I only move the down-payment slider" },
      {
        type: "p",
        html: "In the runs I keep, PMI usually prices between roughly 0.3% and 1.5% of the loan per year, billed monthly. On a $280,000 loan that can mean about $70 to $350 a month. Credit and loan-to-value drive the quote more than any slogan about “just putting 20% down.” Lenders also sell single-premium and lender-paid PMI that bury the cost in cash at closing or in the note rate. I dislike lender-paid PMI for long holds because the rate bump does not fall off when equity does.",
      },
      {
        type: "aside",
        html: "When I held a $400,000 price and 6.75% rate still, and only moved the down-payment slider, modeled PMI at 0.60% of the loan per year was about $190/month at 5% down, $180 at 10%, $170 at 15%, and $0 at 20%. The payment drop at 20% is not just a smaller loan — the insurance line disappears.",
      },
      {
        type: "figure",
        src: "/images/blog/pmi-by-down.svg",
        alt: "Bar chart of monthly PMI on a $400,000 home at 5, 10, 15, and 20 percent down.",
        caption:
          "Monthly PMI on a $400,000 home at 0.60%/year of the loan. Same house, same 6.75% rate. Source: Smart Mortgage Calculator, September 2026.",
        width: 880,
        height: 460,
      },
      {
        type: "table",
        caption:
          "$400,000 purchase, 6.75% 30-year, PMI modeled at 0.60%/year of the loan until 20% down. Your premium depends on credit and LTV. Source: Smart Mortgage Calculator, September 2026.",
        headers: ["Down payment", "Loan", "P&amp;I", "Modeled PMI", "P&amp;I + PMI"],
        rows: [
          ["5% ($20,000)", "$380,000", "$2,465", "$190", "$2,655"],
          ["10% ($40,000)", "$360,000", "$2,335", "$180", "$2,515"],
          ["15% ($60,000)", "$340,000", "$2,205", "$170", "$2,375"],
          ["20% ($80,000)", "$320,000", "$2,076", "$0", "$2,076"],
        ],
      },
      { type: "h2", text: "How I would actually get conventional PMI off the loan" },
      {
        type: "ol",
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
        html: "I would put the cancellation request in writing and keep proof of delivery. Servicers sometimes want recent payment history and will deny the request if the loan is delinquent or if their LTV waterfall fails. If I were close to the line, I would ask what they need before I paid for an appraisal. I would not assume a nice equity number in my head is the number they use.",
      },
      { type: "h2", text: "Test: extra $200/month vs waiting for scheduled 80%" },
      {
        type: "p",
        html: "On that $400,000 home with 5% down, the loan is $380,000. Conventional PMI often becomes cancellable when the scheduled balance hits 80% of the original purchase price — $320,000 here — though you still have to ask. I amortized the 6.75% 30-year two ways:",
      },
      {
        type: "table",
        caption:
          "Months until the remaining balance first drops to about $320,000 (80% of original $400,000 value). PMI held at $190/month. Source: month-by-month amortization, September 2026.",
        headers: ["Payment habit", "Months to ~80% original value", "PMI paid along the way"],
        rows: [
          ["Required P&amp;I only ($2,465)", "127 months (~10.6 years)", "About $24,130"],
          ["Required P&amp;I plus $200 extra principal", "89 months (~7.4 years)", "About $16,910"],
        ],
      },
      {
        type: "p",
        html: "The extra $200 cut about 38 months of PMI and roughly $7,220 of premiums — before counting the interest you also avoided on the faster principal drop. The broader extra-principal calendars live in <a href=\"/blog/extra-principal-payments-and-biweekly-mortgages\">extra principal vs biweekly</a>. Two caveats I keep next to that result: (1) 80% of original value is not the same as 80% of a new appraisal if prices rose; (2) automatic termination at 78% of original value arrives later than a borrower-requested 80% cancellation. If values jumped, an appraisal-based request can beat both calendars. If values fell, extras are how you still get there.",
      },
      { type: "h2", text: "FHA MIP is different — including the 10% / 11-year rule" },
      {
        type: "p",
        html: `FHA uses MIP, not PMI, and this is where I burned an evening in the HUD handbook while building the <a href="/calculators/fha-mortgage-calculator">FHA calculator</a>. Most purchase borrowers pay upfront MIP (often financed) plus annual MIP. The duration rule is the part I wish I had learned first: under 10% down, annual MIP typically lasts for the life of the loan unless you refinance out. At 10% or more down, it can usually cancel after 11 years if other conditions are met. Extra principal does not rewrite that clock. I send people to <a href="/blog/fha-vs-conventional-loans">FHA vs conventional</a> when they want the county-limit version of the same surprise. Confirm current HUD language before you rely on any duration rule I typed in 2026.`,
      },
      { type: "h2", text: "Mortgage recasting as a partial alternative" },
      {
        type: "p",
        html: `If I received a lump sum — bonus, inheritance, sale of another asset — I would ask the servicer in writing whether they recast. Recasting applies a large principal payment and re-amortizes the rest at the same rate over the remaining term. It does not, by itself, cancel PMI. I still have to meet their LTV cancellation rules. It can still be the cheaper way to drop the payment after I have already paid down principal. Recast versus refinance: <a href="/blog/should-you-refinance-2026">2026 refinance guide</a>.`,
      },
      { type: "h2", text: "Is avoiding PMI always the right move?" },
      {
        type: "p",
        html: "I used to treat 20% down as the grown-up answer. Then I modeled rent versus a few years of PMI while prices moved. Waiting can cost more than the premiums, especially if the house you wanted is gone. I now run three scenarios before I lecture anyone: buy sooner with PMI, wait for 20%, or buy a less expensive home. I also compare FHA MIP duration to conventional cancellation. The “right” move is the one that leaves reserves. Cash-to-close tradeoffs: <a href=\"/blog/down-payment-how-much-do-you-need\">how much down payment you need</a>.",
      },
      { type: "h2", text: "Shopping notes" },
      {
        type: "ul",
        items: [
          "Compare Loan Estimates with the same LTV so PMI quotes are apples-to-apples.",
          "Lender overlays can require higher scores for low-down conventional even when Fannie/Freddie guidelines allow the file — see <a href=\"/blog/how-to-get-the-best-mortgage-rate\">overlays vs guidelines</a>.",
          "Seller concessions cannot usually eliminate PMI directly but can fund closing costs so more of your cash goes to down payment.",
        ],
      },
      {
        type: "p",
        html: `I built the main <a href="/">mortgage calculator</a> to add PMI under 20% down and remove it at 20% or above so the cliff is visible. The exact rule in our math is on <a href="/how-we-calculate">how we calculate</a>. Confirm cancellation with your servicer. This is educational, not a promise that your investor uses my waterfall.`,
      },
      { type: "h2", text: "FAQs" },
      {
        type: "faq",
        items: [
          {
            q: "Does the servicer cancel PMI automatically at 80%?",
            a: "Usually no. Borrower-requested cancellation around 80% of original value typically needs a written request and a current payment history. Automatic termination for many conventional loans is later — often when the scheduled balance hits 78% of original value, if you are current. Put the 80% request in writing anyway.",
          },
          {
            q: "If my home’s value rose, can I cancel sooner?",
            a: "Often yes, via an appraisal-based request, subject to seasoning and the servicer’s LTV waterfall. You usually pay for that appraisal. If the new value does not support 80% (or the servicer’s threshold), you lost the appraisal fee and still have PMI.",
          },
          {
            q: "Is lender-paid PMI a free way out?",
            a: "No. Lender-paid PMI usually means a higher note rate for the life of the loan. Borrower-paid monthly PMI can fall off; a rate bump generally does not. Compare a zero-point quote with borrower-paid PMI against the lender-paid structure on the same Loan Estimate day.",
          },
          {
            q: "Will extra principal cancel FHA MIP?",
            a: "Not the way conventional PMI works. FHA annual MIP duration follows HUD rules (life of loan under 10% down; often 11 years at 10%+ down). A recast or extra principal does not rewrite that clock. Exiting usually means a conventional refinance once equity and credit support it.",
          },
        ],
      },
    ],
  },
  {
    slug: "improve-credit-score-before-buying",
    title: "How to Improve Your Credit Score Before Buying a Home",
    description:
      "Raise your credit before a mortgage, then protect the file after pre-approval — shopping windows, overlays, new debt, and large deposits.",
    excerpt:
      "I pull my own three-bureau file before I lecture anyone about FICO bands — then I show what a half-point of pricing does on a $380,000 loan.",
    category: "guides",
    published: "2026-05-12",
    updated: "2026-09-11",
    readingMinutes: 9,
    tags: ["Credit", "Preparation", "Rates", "Underwriting"],
    relatedCalculators: [
      { href: "/", label: "Mortgage Calculator" },
      { href: "/calculators/home-affordability-calculator", label: "Affordability Calculator" },
    ],
    body: [
      {
        type: "p",
        html: "I pull my own credit the same way I tell readers to: all three bureaus, on a calendar, not the week I need a letter. I am not a credit-repair shop. I will not sell you a tradeline or promise that a 20-point bump maps to a specific quote. What I can show is why score bands matter in mortgage pricing, and why the month after pre-approval is when otherwise careful people blow the file. Lenders typically re-check credit and employment shortly before closing. New loans, maxed cards, and unexplained deposits are how “almost closed” deals die. I have watched that pattern in enough reader questions to write this as a warning, not a vibe.",
      },
      { type: "h2", text: "Why I bother with score bands at all" },
      {
        type: "p",
        html: `Lenders price risk with loan-level pricing adjustments tied to score bands and LTV. A higher score is a cheaper risk. On a $350,000 loan, even a 0.5% rate difference is tens of thousands over the life of the loan — I check it in the <a href="/">mortgage calculator</a> whenever someone tells me “it’s only a quarter point.” FHA may still work mid-500s files with more down. Conventional pricing, in my experience looking at public LLPA logic, improves sharply as you climb through 680, 720, and 760. I do not pretend I can quote your band. I do pretend the slider is worth staring at.`,
      },
      {
        type: "aside",
        html: "I am not a credit-repair shop, and I will not pretend a FICO band maps one-to-one to a quote. What I can show is the slider: on a $380,000 30-year, 6.50% is $2,402/month of P&amp;I, 7.00% is $2,528, and 7.50% is $2,657. That half-point step is the kind of gap loan-level pricing adjustments create. Run your own balance; the shape of the chart is the lesson.",
      },
      {
        type: "figure",
        src: "/images/blog/credit-tier-payment.svg",
        alt: "Bar chart of monthly principal and interest on a $380,000 30-year loan at 6.50, 7.00, and 7.50 percent.",
        caption:
          "Illustrative pricing tiers on a $380,000 30-year loan — what a 0.50% rate step does to P&I when only the rate slider moves. Source: Smart Mortgage Calculator, September 2026.",
        width: 880,
        height: 460,
      },
      { type: "h2", text: "What I actually do in the months before applying" },
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
        html: `I give a file three to six months of boring, on-time behavior before I would apply. When I shop a mortgage for this kind of research, I request Loan Estimates inside a focused window — often about 14–45 days depending on the scoring model — so multiple lender inquiries count as one shopping event. That is how I collect 3–5 competing LEs without a stack of unrelated hard pulls. Details: <a href="/blog/how-to-get-the-best-mortgage-rate">best mortgage rate guide</a>. Opening an auto application outside that window, or stretching mortgage shopping over six months, is how I would accidentally stack inquiries. I have done the “I’ll just check one more lender next quarter” mistake in other consumer shopping. I do not repeat it here.`,
      },
      { type: "h2", text: "After pre-approval: mistakes that ruin closings" },
      {
        type: "p",
        html: "Anything that changes DTI, score, or the asset story between pre-approval and funding can reprice the loan — or stop it. These feel harmless because they are how adults live. They are not how a mortgage file lives.",
      },
      {
        type: "ul",
        items: [
          "Do not open new credit or finance purchases. Furniture financing, a new auto loan, or another credit card adds monthly obligations and can lower your score via new inquiries and average age of accounts. Even a $40/month store card can matter on a thin approval. Wait until after closing.",
          "Watch utilization and unpaid collections. High revolving balances hurt scores quickly. Pay down utilization early — ideally months ahead — and dispute or resolve collections that a lender overlay will force to be paid anyway.",
          "Job changes and large unexplained deposits. Switching employers, switching from W-2 to 1099, or receiving a large gift/cash deposit without a paper trail triggers VOE letters and source-of-funds conditions. Keep the same employment story when possible, and document gifts with proper gift letters and wire paths — never co-mingle cash that cannot be traced.",
          "VA buyers: even with acceptable DTI, thin residual income for your region and family size can block a VA approval. New debts after pre-approval eat residual income first — <a href=\"/blog/va-loan-entitlement-residual-income\">VA residual income</a>.",
        ],
      },
      { type: "h2", text: "Checklist before and after pre-approval" },
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
      { type: "h2", text: "Overlays: why a \"guideline-eligible\" file still gets declined" },
      {
        type: "p",
        html: `Agency guidelines are not the same as a particular lender’s appetite. One bank may want 680+ for low-down conventional while another will run 640. Credit unions, mortgage bankers, and brokers disagree for boring operational reasons. If I were declined, I would ask whether the reason was guideline or overlay — then I would shop a specialist instead of rewriting my personality. See <a href="/blog/how-to-get-the-best-mortgage-rate">lender overlays vs loan guidelines</a>.`,
      },
      { type: "h2", text: "Worked utilization example (the lever that moves fastest)" },
      {
        type: "p",
        html: "Payment history takes months to rebuild after a miss. Utilization can move as soon as the issuer reports the new balance — often one billing cycle. I use a simple worksheet before anyone applies:",
      },
      {
        type: "table",
        caption:
          "Same $20,000 combined revolving limit. Mortgage pricing does not use this table directly; score models do. Keep at least one older account open rather than closing the card that supplies the limit.",
        headers: ["Revolving balances", "Utilization", "What I would do before applying"],
        rows: [
          ["$8,000", "40%", "Too high for a mortgage shop window — pay this down first."],
          ["$6,000", "30%", "Common “okay” cutoff; still leave room if a lender re-pulls."],
          ["$2,000", "10%", "The band I aim for on a file I care about."],
          ["$0 on every card", "0%", "Not always ideal — some scoring lore prefers a small reported balance on one card. Do not open new cards to game this."],
        ],
      },
      {
        type: "p",
        html: "On a $20,000 limit, moving from $8,000 down to $2,000 is a $6,000 cash decision. Compare that cash to a half-point of rate on a $380,000 loan: in the chart above, 6.50% vs 7.00% is $126/month of P&amp;I. Six months of that gap is already $756 — and the loan lasts longer than six months. I would rather park the $6,000 on revolving debt for a cycle than “save it for closing” while shopping at a worse pricing tier.",
      },
      { type: "h2", text: "Worked pricing intuition" },
      {
        type: "p",
        html: "I keep a two-borrower thought experiment on the same $400,000 house with 5% down. Borrower A scores 760; Borrower B scores 680. A may see both a lower note rate and cheaper PMI. Over five years that gap can dwarf the cost of waiting a few months to raise the score. I run the payment both ways, then I decide whether waiting is cheaper than buying now. I do not decide it with a motivational quote.",
      },
      { type: "h2", text: "FAQs" },
      {
        type: "faq",
        items: [
          {
            q: "Should I pay collections before applying?",
            a: "Often yes for mortgage underwriting, even if the FICO effect is partial. Ask your loan officer which debts must be cleared for their overlay — some shops require paid collections that a guideline file would allow.",
          },
          {
            q: "Do authorized-user accounts help?",
            a: "Sometimes for FICO; mortgage underwriters may still scrutinize whether you actually pay the account. Do not add AU tradelines in the shopping window as a gimmick — it can look like credit repair and still not move the mortgage score the lender uses.",
          },
          {
            q: "Does checking your own credit hurt?",
            a: "Soft pulls usually do not. Lender hard pulls do. Cluster mortgage shopping inside one focused window (often about 14–45 days depending on the model) so those inquiries count as a single event.",
          },
          {
            q: "Is a free VantageScore the number my lender uses?",
            a: "Usually not. Mortgage pricing typically uses a classic FICO mortgage score from one or more bureaus. Treat app scores as a trend, then ask the loan officer which model and bureau they pull.",
          },
        ],
      },
      {
        type: "p",
        html: `I pair credit work with a budget in the <a href="/calculators/home-affordability-calculator">affordability calculator</a> so a prettier score does not buy a house the escrow will punish. Related: <a href="/blog/mortgage-pitfalls-homebuyers-should-avoid">mortgage pitfalls overview</a>. Educational guidance only — not credit repair, not a loan offer. Confirm underwriting with a licensed lender.`,
      },
    ],
  },
  {
    slug: "fha-vs-conventional-loans",
    title: "FHA vs. Conventional Loans: Limits, MIP Duration & Which Fits",
    description:
      "Compare FHA and conventional mortgages on down payment, credit, MIP vs PMI, 2026 county loan limits, and the 10% / 11-year MIP rule.",
    excerpt:
      "I built the FHA calculator to stop treating MIP as a monthly footnote — duration, county limits, and overlays decide the real cost.",
    category: "loan-types",
    published: "2026-05-22",
    updated: "2026-09-11",
    readingMinutes: 9,
    tags: ["FHA", "Conventional", "Comparison", "MIP", "Loan limits"],
    relatedCalculators: [
      { href: "/calculators/fha-mortgage-calculator", label: "FHA Calculator" },
      { href: "/", label: "Mortgage Calculator" },
      { href: "/calculators/refinance-mortgage-calculator", label: "Refinance Calculator" },
    ],
    body: [
      {
        type: "p",
        html: "I did not become an FHA expert by closing FHA loans. I became one by having to make the calculator refuse to pretend MIP is just “PMI with a different acronym.” Eligibility and MIP rules are national. The maximum loan and your tax/insurance escrow are local. Heard County, Georgia sits comfortably under the 2026 FHA floor; a coastal California listing can slam into the high-cost ceiling. I verify the current map on HUD sources before I trust any number in this piece. The figures below are educational 2026 planning references, not an approval.",
      },
      { type: "h2", text: "Side-by-side snapshot" },
      {
        type: "table",
        caption:
          "Educational 2026 planning snapshot — not a quote. County limits, MIP factors, and overlays change; verify HUD, FHFA, and lender guidelines.",
        headers: ["", "FHA", "Conventional"],
        rows: [
          [
            "Typical down payment",
            "3.5% at 580+ FICO; often 10% at 500–579",
            "About 3% for strong first-time files; 20% removes PMI",
          ],
          [
            "Credit flexibility",
            "More forgiving minimums; overlays still bite",
            "Pricing improves sharply through 680 / 720 / 760 bands",
          ],
          [
            "Mortgage insurance",
            "Upfront MIP (often financed) plus annual MIP",
            "PMI that you can usually request to cancel near 20% equity",
          ],
          [
            "Insurance duration",
            "Life of loan if under 10% down; often 11 years at 10%+",
            "Borrower request ~80% original value; auto ~78% if current",
          ],
          [
            "2026 1-unit limits (verify)",
            "Floor ~$541,287; high-cost ceiling ~$1,249,125",
            "Conforming baseline often near ~$832,750; jumbo above that",
          ],
          [
            "Property review",
            "FHA minimum property requirements (safety/soundness)",
            "Agency/investor overlays; condos can still fail project review",
          ],
        ],
      },
      { type: "h2", text: "2026 FHA county loan limits" },
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
        html: `I look up the county before I would let anyone offer on a high list price. A coastal California or New York metro listing may clear high-cost FHA caps while a Midwest county sticks near the floor. Conventional conforming limits (FHFA) are a parallel track — often near about $832,750 baseline in 2026 for many counties. I pick the county in the <a href="/calculators/fha-mortgage-calculator">FHA calculator</a> because I got tired of national blogs that never mention the map.`,
      },
      { type: "h2", text: "FHA MIP duration: the 10% / 11-year rule most buyers miss" },
      {
        type: "p",
        html: "Most purchase borrowers finance about 1.75% upfront MIP into the loan and pay monthly annual MIP (often near 0.55% of the base loan for common scenarios — confirm current HUD figures). I used to stare at the monthly MIP line like that was the whole story. Duration is the story. Upfront MIP is a separate hit that often gets financed, so the balance is bigger even when monthly MIP later stops.",
      },
      {
        type: "ul",
        items: [
          "With less than 10% down, annual MIP typically lasts for the life of the loan (or until you refinance or sell).",
          "With 10% or more down, annual MIP can usually be canceled after 11 years if other program conditions are met.",
          "Upfront MIP is separate and often financed into the loan — it raises the balance even when monthly MIP eventually stops.",
        ],
      },
      {
        type: "p",
        html: "Stretching to 10% down hurts cash at closing. In my $350,000 example it is also the difference between annual MIP that typically never falls off and an 11-year clock. That is why I refuse to call “FHA with 3.5% down” and “FHA with 10% down” the same product. Confirm current HUD duration rules — handbooks get updated. Then compare conventional PMI you can request to cancel around 20% equity — <a href=\"/blog/what-is-pmi-and-how-to-remove-it\">PMI removal</a>.",
      },
      {
        type: "aside",
        html: "When I ran into this while building the FHA calculator, the surprise was duration, not the monthly MIP line. On a $350,000 purchase at 3.5% down, the base loan is about $337,750 before financed upfront MIP. Stretching to 10% down is painful cash — but it is the difference between annual MIP that typically never falls off and an 11-year clock. I charted the typical duration rules; the screenshot is our own FHA tool.",
      },
      {
        type: "figure",
        src: "/images/blog/mi-duration.svg",
        alt: "Bar chart comparing typical mortgage insurance duration: FHA under 10 percent down for 30 years, FHA 10 percent plus down for 11 years, and conventional PMI often cancellable sooner.",
        caption:
          "How long mortgage insurance typically sticks on a purchase. Confirm HUD handbook and servicer cancellation rules. Source: Smart Mortgage Calculator, September 2026.",
        width: 880,
        height: 460,
      },
      {
        type: "figure",
        src: "/images/blog/calc-fha.png",
        alt: "Screenshot of the Smart Mortgage Calculator FHA tool showing price, down payment, MIP, and estimated monthly payment.",
        caption:
          "Our FHA calculator in September 2026 — $350,000 price, 3.5% down, financed upfront MIP, $2,838 PITI. Base loan $337,750 matches the duration example above. Educational estimate, not an FHA approval.",
        width: 739,
        height: 1048,
      },
      { type: "h2", text: "National FHA eligibility basics" },
      {
        type: "ul",
        items: [
          "Credit: many lenders work FHA from about 580+ with 3.5% down; scores from about 500–579 often need about 10% down — individual lenders may set higher overlays.",
          "Down payment: typically 3.5% or 10% as above; gift funds often allowed with documentation.",
          "DTI: underwriting can flex with compensating factors; still budget near sustainable housing ratios.",
          "Property: FHA appraisals emphasize minimum property requirements (safety and soundness), not cosmetic perfection.",
        ],
      },
      { type: "h2", text: "Conventional loans — PMI can exit" },
      {
        type: "p",
        html: "Conventional loans follow Fannie Mae / Freddie Mac guidelines (or jumbo investor overlays). PMI rates depend on LTV and credit. The advantage I care about is exit: PMI is usually cancellable once you reach about 20% equity — unlike many FHA low-down scenarios. That is why I model a 5–7 year hold instead of month-one only.",
      },
      { type: "h2", text: "Why lender overlays decide close calls" },
      {
        type: "p",
        html: `Two lenders can cite the same FHA or Fannie guidelines and still disagree on a condo, gift funds, or a credit event. HUD minimums are not every shop’s minimums. I tell people to shop a specialist when a big box declines a file that looks guideline-eligible — <a href="/blog/how-to-get-the-best-mortgage-rate">overlays vs guidelines</a>. I cannot override an overlay from Franklin. I can tell you to ask which rule they used.`,
      },
      { type: "h2", text: "Worked mindset (not a quote)" },
      {
        type: "p",
        html: "On a $350,000 purchase with 3.5% down, FHA finances most of the price and adds monthly MIP on top of P&amp;I, taxes, and insurance. I ran that screenshot in our own tool: base loan about $337,750 before financed upfront MIP, $2,838 PITI in that September 2026 capture. A conventional 5% down loan may price worse on day one if credit is thin, but PMI can later cancel. If I expected to refinance to conventional once equity and credit improved, I would still use FHA as a bridge — after checking the county limit. Taxes and insurance still decide the payment. I model full PITI in a <a href=\"/\">state-aware mortgage calculator</a>.",
      },
      { type: "h2", text: "Seller concessions by program" },
      {
        type: "p",
        html: `FHA commonly allows seller concessions up to about 6% of the lesser of price or value toward allowable closing costs; conventional caps often land between about 3% and 9% based on down payment. I want those as credits on the settlement statement, not informal price cuts that confuse the appraisal. More: <a href="/blog/down-payment-how-much-do-you-need">down payment, closing costs, and concessions</a>.`,
      },
      { type: "h2", text: "How to decide" },
      {
        type: "ol",
        items: [
          'Model FHA with financed upfront MIP in the <a href="/calculators/fha-mortgage-calculator">FHA calculator</a>.',
          'Model conventional at the same price in the <a href="/">mortgage calculator</a> with realistic PMI.',
          "Compare cash to close, month-1 payment, and whether insurance can fall off — including 3.5% vs 10% down FHA.",
          "Collect Loan Estimates from lenders who actually close FHA regularly — overlays differ.",
          "Compare financed vs paid-in-cash upfront MIP on cash-to-close.",
          "Plan the exit: many borrowers refinance to conventional once equity supports dropping PMI — <a href=\"/blog/should-you-refinance-2026\">refinance guide</a>.",
        ],
      },
      {
        type: "p",
        html: `I verify limits on HUD’s official lookup and I still tell you to confirm MIP factors with a licensed FHA lender. I design the calculator. I do not underwrite the file.`,
      },
      { type: "h2", text: "FAQs" },
      {
        type: "faq",
        items: [
          {
            q: "Is FHA always cheaper with 3.5% down?",
            a: "Month one can look cheaper if conventional PMI and pricing are harsh. Over a 7–10 year hold, life-of-loan FHA MIP at 3.5% down often loses to conventional PMI that you cancel — or to FHA at 10% down with the 11-year clock. Run both in the <a href=\"/calculators/fha-mortgage-calculator\">FHA calculator</a> and the <a href=\"/\">conventional calculator</a>.",
          },
          {
            q: "Can I drop FHA MIP without refinancing?",
            a: "Usually not when you put less than 10% down. Extra principal and recasts do not rewrite HUD’s duration rules. The common exit is a conventional rate-and-term refinance once equity and credit support dropping PMI.",
          },
          {
            q: "Do FHA county limits apply to the price or the loan?",
            a: "The base loan (and financed upfront MIP, depending on how you structure it) has to fit the county maximum. A high list price with a large down payment can still work; a high list price with 3.5% down often will not in a floor-limit county.",
          },
          {
            q: "Why did one lender decline an FHA file another would take?",
            a: "Overlays. HUD sets a floor; shops add score, condo, gift, and reserve rules. Ask whether the denial is a guideline or an overlay, then take the package to a lender that closes FHA weekly — <a href=\"/blog/how-to-get-the-best-mortgage-rate\">shopping and overlays</a>.",
          },
        ],
      },
    ],
  },
];
