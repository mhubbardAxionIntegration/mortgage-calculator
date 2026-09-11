import type { BlogPost } from "../blogTypes";

/** Common pitfalls — one comprehensive overview (satellite posts merged elsewhere). */
export const postsPitfalls: BlogPost[] = [
  {
    slug: "mortgage-pitfalls-homebuyers-should-avoid",
    title:
      "Mortgage Pitfalls Homebuyers Should Avoid (2026): The Mistakes That Quietly Cost Thousands",
    description:
      "Avoid rate, denial, and cash-to-close traps: credit changes after pre-approval, one-lender shopping, MIP duration, overlays, and under-estimated PITIA costs.",
    excerpt:
      "I keep a list of the mistakes that show up after pre-approval — one quote, skipped escrow, new furniture debt — because they are boring and expensive.",
    category: "pitfalls",
    published: "2026-08-06",
    updated: "2026-09-11",
    readingMinutes: 8,
    tags: ["Pitfalls", "Homebuying", "Loan Estimates"],
    relatedCalculators: [
      { href: "/", label: "Mortgage Calculator" },
      { href: "/calculators/home-affordability-calculator", label: "Affordability Calculator" },
      { href: "/questions-nobody-thinks-to-ask", label: "Questions Nobody Thinks to Ask" },
    ],
    body: [
      {
        type: "p",
        html: "I did not write this list from a closing table. I wrote it from the questions that land in the contact form and from the ways our own calculators punish optimistic inputs. The expensive mistakes cluster: credit changes after pre-approval, one-lender shopping, MIP duration nobody modeled, overlays treated as “the program said no,” and PITIA that was really just P&amp;I. Avoiding them can mean a better rate or not wiring a surprise check. The deep dives live in the related guides. This is the field manual I wish I could staple to a pre-approval letter.",
      },
      {
        type: "p",
        html: 'I pair this with our <a href="/questions-nobody-thinks-to-ask">questions nobody thinks to ask</a> page when I would interview an agent or walk a house. I use the <a href="/blog/how-to-get-the-best-mortgage-rate">best-rate shopping guide</a> when the job is comparing Loan Estimates, not collecting vibes.',
      },
      { type: "h2", text: "Financial and credit pitfalls" },
      {
        type: "ul",
        items: [
          '<strong>New credit after pre-approval.</strong> Car loans, furniture financing, or new cards raise DTI or ding scores. Lenders re-pull credit and verify employment near closing — an “approved” file can still change. Full checklist: <a href="/blog/improve-credit-score-before-buying">credit before (and after) you apply</a>.',
          '<strong>DTI-only thinking (especially VA).</strong> Residual income by region and family size often outweighs a “fine” DTI. Marginal residual income can mean denial. See our <a href="/blog/va-loan-entitlement-residual-income">VA residual income guide</a>.',
          '<strong>Under-estimating PITIA.</strong> Principal and interest are only part of the housing payment. Taxes, insurance, HOA, and maintenance rise — sometimes sharply — after purchase. Location-aware budgeting: <a href="/blog/how-much-house-can-i-afford">how much house can I afford</a>.',
          "<strong>Late credit cleanup.</strong> Collections, high utilization, and report errors are far easier to fix months ahead than days before underwriting.",
          "<strong>Hard inquiry clustering outside a shopping window.</strong> Multiple mortgage applications within about 45 days usually count as one inquiry; spreading them over months can hurt the score.",
        ],
      },
      {
        type: "aside",
        html: "When I loaded our Texas defaults on a $350,000 home with 20% down at 6.75%, P&amp;I was $1,816 — then taxes added $467 and insurance $200. The escrow stack was $667, about 27% of the $2,483 PITI. Buyers who shop only the note rate miss that entire column. I work from Franklin, Georgia, where the same price is a much smaller tax line; Texas is where I send people when they say the payment “looks fine.”",
      },
      {
        type: "figure",
        src: "/images/blog/texas-piti-stack.svg",
        alt: "Bar chart of a Texas-style monthly payment stack: principal and interest, property taxes, and homeowners insurance on a $350,000 home.",
        caption:
          "Texas median-style PITI: $350,000, 20% down, 6.75% 30-year, 1.60% tax, ~$2,400 insurance. Source: Smart Mortgage Calculator, September 2026.",
        width: 880,
        height: 460,
      },
      { type: "h2", text: "What “looks cheap” vs what you actually pay" },
      {
        type: "p",
        html: "I keep a side-by-side like this when a file feels fine in conversation and expensive in the calculator:",
      },
      {
        type: "table",
        caption:
          "Pattern table from scenarios I run in our tools. Not a quote — the point is which column you forgot.",
        headers: ["What you were shown", "What got skipped", "What it cost in a test"],
        rows: [
          [
            "P&amp;I on a $350,000 Texas home",
            "Taxes + insurance escrow",
            "$1,816 P&amp;I vs $2,483 PITI — escrow was 27% of the payment",
          ],
          [
            "One lender’s 6.75% on $400,000",
            "A same-day LE at 6.50%",
            "About $66/month, or ~$3,960 over five years, before compounding",
          ],
          [
            "FHA 3.5% down “cheap cash”",
            "Life-of-loan annual MIP",
            "Years of MIP vs an 11-year clock at 10% down or cancellable conventional PMI",
          ],
          [
            "Pre-approval letter",
            "New auto loan before closing",
            "DTI and residual both move; VA files fail residual first",
          ],
        ],
      },
      { type: "h2", text: "Lender shopping and comparison pitfalls" },
      {
        type: "ul",
        items: [
          "<strong>One quote only.</strong> Spreads between lenders for the same profile often exceed 0.5 percentage points. Same-day Loan Estimates from 3–5 lenders are high-ROI homework.",
          '<strong>Rate-only comparison.</strong> Compare APR, points, lender fees, and interest over your expected hold period. “No-cost” loans usually recover fees in a higher rate — see <a href="/blog/how-to-get-the-best-mortgage-rate">points break-even and shopping</a>.',
          '<strong>Assuming every lender follows the same rules.</strong> FHA and VA set national minimums; many shops add overlays. Meeting the program does not guarantee approval everywhere — overlays are covered in the same <a href="/blog/how-to-get-the-best-mortgage-rate">shopping guide</a>.',
          "<strong>Never negotiating.</strong> Present a competing Loan Estimate. Originators often match fees or price when the alternative is losing the file.",
          "<strong>Builder or “preferred” lender as the only quote.</strong> Incentives can be real and still lose to an independent LE plus a seller concession.",
        ],
      },
      { type: "h2", text: "Loan structure and cost pitfalls" },
      {
        type: "ul",
        items: [
          '<strong>Ignoring MI duration.</strong> FHA MIP with under 10% down typically lasts for the life of the loan (or until refinance); with 10%+ down it can cancel after about 11 years. Conventional PMI is usually removable at 20% equity — but you often must request it. Details: <a href="/blog/fha-vs-conventional-loans">FHA vs conventional</a> and <a href="/blog/what-is-pmi-and-how-to-remove-it">PMI removal</a>.',
          '<strong>Mishandling seller concessions and buydowns.</strong> Caps differ by loan type (often 3–9% conventional by LTV, 6% FHA/USDA, ~4% VA). A temporary 2-1 buydown can beat a similar price cut for cash flow — <a href="/blog/down-payment-how-much-do-you-need">concessions and cash to close</a>.',
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
          '<strong>Skipping local rules.</strong> Transfer taxes, recording fees, refinance net-benefit laws, first-time programs, and <a href="/blog/fha-vs-conventional-loans">county FHA limits</a> are location-specific.',
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
      { type: "h2", text: "A 10-step check before you lock" },
      {
        type: "ol",
        items: [
          "Pull all three credit reports; freeze new installment debt until funded.",
          "Build a PITIA budget with county tax and a fresh insurance quote — not last year’s listing premium.",
          "Collect 3–5 same-day Loan Estimates with matched points and lock period.",
          "Email the preferred lender a competing LE and ask them to match.",
          "Ask whether a decline would be guideline or overlay — in writing.",
          "If FHA, compare 3.5% vs 10% down for MIP duration, not just month-one payment.",
          "If VA, run residual for your region and family size and confirm funding-fee exemption status on the COE.",
          "Get lock, float-down, and extension fees in writing before you stop shopping.",
          "Put seller concessions in the contract as a dollar amount toward allowable costs, within program caps.",
          "Treat the week before closing as a quiet period: no job changes, no furniture financing, documented gift paths only.",
        ],
      },
      { type: "h2", text: "Bottom line" },
      {
        type: "p",
        html: "The most expensive mistakes are usually preventable: clean credit early, compare full Loan Estimates the same day, ask explicit questions about overlays, float-downs, MIP duration, and concessions, and treat the process as negotiation. I verify current guidelines with lenders (details change), and I size the house on total ownership cost — not P&amp;I alone — using our <a href=\"/calculators/home-affordability-calculator\">affordability calculator</a> with the actual state and county. I live in a modest-tax Georgia county. That is exactly why I keep the Texas stack in this article. Comfort is local. The mistake is assuming it travels.",
      },
      {
        type: "p",
        html: 'Next: <a href="/blog/improve-credit-score-before-buying">protect credit through closing</a>, <a href="/blog/how-to-get-the-best-mortgage-rate">why one quote costs you</a>, and <a href="/questions-nobody-thinks-to-ask">questions nobody thinks to ask</a>.',
      },
      { type: "h2", text: "FAQs" },
      {
        type: "faq",
        items: [
          {
            q: "Is a pre-approval a commitment to fund?",
            a: "No. Full underwriting still weighs appraisal, title, employment, and assets. Lenders typically re-pull credit near closing. Treat the letter as a shopping tool, not a close.",
          },
          {
            q: "How much can one skipped quote cost?",
            a: "On a $400,000 30-year, 6.75% vs 6.50% was about $66/month in our formula — roughly $3,960 over five years if you never refinance. Same-day Loan Estimates are how you find that gap.",
          },
          {
            q: "Should I use the builder’s preferred lender?",
            a: "Get their incentive in writing, then still collect independent LEs. Credits can be real and still lose to a better rate plus a seller concession. Run both sheets before you waive shopping.",
          },
          {
            q: "What’s the fastest way to blow a VA approval after pre-approval?",
            a: "New monthly debt. Residual income is leftover cash after PITI and debts. A furniture account that looks tiny on DTI can put a South family-of-four file under the $1,003 chart — <a href=\"/blog/va-loan-entitlement-residual-income\">VA residual guide</a>.",
          },
        ],
      },
    ],
  },
];
