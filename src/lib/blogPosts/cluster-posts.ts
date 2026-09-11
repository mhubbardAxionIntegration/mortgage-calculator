import type { BlogPost } from "../blogTypes";

/**
 * Tight cluster around payment math and product choice — the same niche as
 * the calculators. New URLs only; do not reuse 301'd satellite slugs.
 */
export const postsCluster: BlogPost[] = [
  {
    slug: "arm-vs-fixed-rate-mortgage",
    title: "ARM vs. Fixed-Rate Mortgage: Stress-Test the Reset Before You Take the Teaser",
    description:
      "Compare a 5/1 ARM intro rate to a 30-year fixed, then stress the first reset — with a $350,000 worked example from our ARM calculator.",
    excerpt:
      "I built the ARM calculator because teasers look like a cheat code until you recast the remaining balance at the cap.",
    category: "loan-types",
    published: "2026-09-11",
    updated: "2026-09-11",
    readingMinutes: 9,
    tags: ["ARM", "Fixed rate", "Loan types", "Payment shock"],
    relatedCalculators: [
      { href: "/calculators/arm-mortgage-calculator", label: "ARM Calculator" },
      { href: "/", label: "Mortgage Calculator" },
      { href: "/calculators/refinance-mortgage-calculator", label: "Refinance Calculator" },
    ],
    body: [
      {
        type: "p",
        html: "I did not add an ARM calculator because I wanted another product label. I added it because a 5/1 teaser kept showing up in the same conversations as “I can’t quite make the 30-year fixed.” The first time I modeled that on a $350,000 balance, the intro 6.00% payment was $2,098 of principal and interest. The 30-year fixed at our 6.75% default was $2,270. That $172 gap looks like free money for five years. Then I recast the remaining balance after 60 months at an 11% lifetime-cap-style rate over the leftover 25 years, and the payment jumped to about $3,192. I am Michael Hubbard. I build these tools from Heard County, Georgia. I am not selling you an ARM. I am showing you the reset I actually ran.",
      },
      {
        type: "p",
        html: "A 5/1 or 7/1 ARM is a 30-year loan with a fixed introductory rate, then periodic adjustments based on an index plus a margin, subject to caps. The intro rate is usually lower than a same-day 30-year fixed. That is the whole sales pitch. The whole risk is what happens if you still own the loan when the pitch expires. I treat ARMs as a horizon tool, not a personality type.",
      },
      { type: "h2", text: "The $350,000 run I keep next to the ARM slider" },
      {
        type: "table",
        caption:
          "Same $350,000 start, 30-year amortization. ARM intro at 6.00% for 60 months, then remaining balance recast over 25 years. Fixed stays at 6.75%. Source: Smart Mortgage Calculator, September 2026.",
        headers: ["Path", "Monthly P&amp;I", "After 60 months"],
        rows: [
          ["30-year fixed at 6.75%", "$2,270", "Balance about $328,600; payment unchanged"],
          ["5/1 ARM intro at 6.00%", "$2,098", "Balance about $325,700; $172/month cheaper so far"],
          ["ARM reset at 8% (remaining term)", "$2,514", "Higher than the fixed you skipped"],
          ["ARM reset at 11% (cap-style)", "$3,192", "About $1,094 above the intro payment"],
        ],
      },
      {
        type: "aside",
        html: "Over five years the ARM saved about $10,300 of P&amp;I versus the fixed. That is real. It is also smaller than one bad year after an 11% reset. I would not spend that $10,300 as if it were a raise. I would keep it as the reserve that pays the shock if I am still in the house.",
      },
      {
        type: "figure",
        src: "/images/blog/arm-intro-vs-stress.svg",
        alt: "Bar chart of monthly principal and interest on a $350,000 loan: ARM intro at 6 percent, 30-year fixed at 6.75 percent, and ARM stress near 11 percent after year five.",
        caption:
          "Intro 6.00% vs fixed 6.75% vs an 11% remaining-term recast after 60 months. The middle bar is the payment I could have locked. Source: Smart Mortgage Calculator, September 2026.",
        width: 880,
        height: 460,
      },
      {
        type: "p",
        html: "I also ran the first-adjustment cap as a 2-point jump off 6.00%, which is how a 2/2/5 file behaves if the index has ripped. That is an 8% remaining-term recast: about $2,514 P&amp;I on the leftover $325,690. That is already $244 above the 6.75% fixed I could have locked in month 1. The 11% lifetime-cap-style case ($3,192) is the ugly cousin. I keep both on the table because borrowers argue about which cap will “probably” bind. I do not forecast the index. I budget the contract.",
      },
      { type: "h2", text: "Caps, margin, and why two 5/1s are not the same loan" },
      {
        type: "p",
        html: "A common cap structure is written 5/2/5 or 2/2/5: how far the rate can jump at the first adjustment, at later adjustments, and over the life of the loan. The margin is added to the index (often a Treasury or SOFR flavor). I ask for those five numbers in writing: index, margin, initial cap, periodic cap, lifetime cap. Two ARMs with the same teaser can be different animals after year five. Our <a href=\"/calculators/arm-mortgage-calculator\">ARM calculator</a> uses a simplified stress rate you choose. It is not a forecast of next year’s SOFR. It is a budget test.",
      },
      {
        type: "ul",
        items: [
          "Set the stress rate near the lifetime cap from the Loan Estimate, not a hopeful “rates will be lower.”",
          "Confirm whether the first adjustment cap is 2 points or 5 — that single digit changes year-six payment more than a 0.125% teaser difference.",
          "Ask what happens if you do not refinance: some files only work if a future lock is assumed. I do not underwrite hope.",
        ],
      },
      { type: "h2", text: "When I would actually take the ARM" },
      {
        type: "p",
        html: "I would take a 5/1 if I had a dated plan to sell or refinance before the first reset, and the 5-year P&amp;I savings beat the extra friction of a refinance — or if I could pay the stress payment without rearranging my life. Military PCS, a known job window, a house I already expect to outgrow: those are horizon stories. “The payment only fits if the teaser lasts forever” is not a horizon story. That is a price problem. I said the same thing in the <a href=\"/blog/15-vs-30-year-mortgage\">15- versus 30-year guide</a> when an ARM tried to impersonate a cheaper 15-year.",
      },
      {
        type: "p",
        html: "In high-cost markets I see ARM usage rise because the fixed payment will not qualify. California is where I send people to the ARM slider for that reason, not because I think an ARM is “better” there. In Heard County I rarely need a teaser to make a median-style payment work. Location changes the temptation. It does not change the recast math.",
      },
      { type: "h2", text: "Qualification still uses a payment — whose?" },
      {
        type: "p",
        html: "Lenders do not all qualify ARMs on the intro rate. Some use a fully indexed or qualifying rate that is higher than the teaser. I do not guess which overlay your shop uses. I ask. If the file only clears on the teaser, I treat that as a warning, not a win. DTI on a payment you cannot survive after reset is how people get stuck. Pair this with <a href=\"/blog/how-much-house-can-i-afford\">how much house I can actually carry</a> — escrow still sits on top of either product.",
      },
      { type: "h2", text: "How I compare quotes on the same day" },
      {
        type: "ol",
        items: [
          "Get a 30-year fixed Loan Estimate and a 5/1 or 7/1 ARM LE the same day, same points assumption, same loan amount.",
          "Write down index, margin, and all three caps. If they are missing, the LE is incomplete.",
          "Run intro P&amp;I versus stress P&amp;I in the <a href=\"/calculators/arm-mortgage-calculator\">ARM calculator</a>.",
          "Add five years of intro savings. Ask whether that pile is larger than a refinance cost if you exit before reset — <a href=\"/blog/should-you-refinance-2026\">refinance break-even</a>.",
          "If you cannot pay the stress number, I want the fixed — or a cheaper house.",
        ],
      },
      { type: "h2", text: "Refinancing out is not a plan unless the math is a plan" },
      {
        type: "p",
        html: "Plenty of ARM borrowers intend to refinance before reset. I intend lots of things. Rates can be higher in year five than in year zero. Credit can be worse. The house can appraise light. If the exit plan is “I will refinance,” I still want the stress payment to be livable. Otherwise the ARM is a balloon you have not named.",
      },
      {
        type: "p",
        html: `Confirm caps and qualifying rate with a licensed lender. Formula notes: <a href="/how-we-calculate">how we calculate</a>. Related shopping: <a href="/blog/how-to-get-the-best-mortgage-rate">same-day Loan Estimates</a>.`,
      },
      { type: "h2", text: "FAQs" },
      {
        type: "faq",
        items: [
          {
            q: "Is a 7/1 safer than a 5/1?",
            a: "It buys two more years of intro rate, not immunity. I still stress the first reset. If you might stay eight years, a 7/1 can be the difference between exiting in the intro window and eating a reset. If you might stay twenty, I want the fixed.",
          },
          {
            q: "Does your calculator recast the remaining balance at reset?",
            a: "The on-page ARM stress slider compares intro P&amp;I to a higher rate on the starting balance as a budget test. The $3,192 figure in this article is the stricter month-60 recast I ran on the remaining $325,690 over 25 years at 11%. Both are educational. Your note uses the caps on your LE.",
          },
          {
            q: "Can I pay extra principal on an ARM?",
            a: "Often yes, same as a fixed — confirm prepayment language. Extra principal lowers the balance that will recast at reset, which is one of the few ARM defenses I like. See <a href=\"/blog/extra-principal-payments-and-biweekly-mortgages\">extra principal</a>.",
          },
          {
            q: "Should I take an ARM to afford more house?",
            a: "I would not. If the house only fits on a teaser, the house does not fit. Buy less, put more down, or wait. Stretching on an ARM is how the reset becomes a forced sale.",
          },
        ],
      },
    ],
  },
  {
    slug: "how-mortgage-amortization-works",
    title: "How Mortgage Amortization Works: Why Year 1 Is Almost All Interest",
    description:
      "See how a 30-year payment splits into interest and principal — with a $300,000, 6.75% schedule from our amortization formula.",
    excerpt:
      "I keep the first-month split on the wall: $1,688 interest and $258 principal on a $300,000 loan. That is amortization, not a trick.",
    category: "guides",
    published: "2026-09-11",
    updated: "2026-09-11",
    readingMinutes: 8,
    tags: ["Amortization", "Principal", "Interest", "Methodology"],
    relatedCalculators: [
      { href: "/", label: "Mortgage Calculator" },
      { href: "/how-we-calculate", label: "How We Calculate" },
    ],
    body: [
      {
        type: "p",
        html: "The first month on a $300,000 30-year at 6.75% still startles me, and I wrote the function. Principal and interest is $1,946. Of that, about $1,688 is interest and about $258 is principal. You are not being cheated. You are renting the whole remaining balance for 30 days at the note rate, then applying whatever is left to the balance. Next month the balance is slightly smaller, so interest is slightly smaller, so principal is slightly larger. That snowball is amortization. I published the formula on <a href=\"/how-we-calculate\">how we calculate</a> because I got tired of black-box payment apps.",
      },
      {
        type: "p",
        html: "People email as if the early years are a scam. They are front-loaded because the loan is largest at the start. A 15-year note front-loads less interest for a simpler reason: you send a bigger payment, so more of each month hits principal from day one. I ran that comparison in the <a href=\"/blog/15-vs-30-year-mortgage\">15- versus 30-year guide</a>. This page is the plumbing underneath both.",
      },
      {
        type: "p",
        html: "A 6.75% annual rate on $300,000 is $20,250 if you pretend the balance never falls. My year-1 interest was $20,152 because each month’s balance was slightly smaller. The gap is small in year 1 and larger later. That is the whole reason I refuse napkin annualization when someone asks “so I pay 6.75% of the house every year, right?” No. You pay 6.75% of whatever principal is still outstanding, monthly.",
      },
      { type: "h2", text: "The formula I actually ship" },
      {
        type: "p",
        html: "Monthly interest is remaining balance times the annual rate divided by 12. The principal piece is the required payment minus that interest (or whatever is left if the loan is almost gone). The payment itself comes from the standard amortizing formula — the one that holds P&amp;I constant while the mix changes. If the rate is zero, we just divide the balance by the number of months. I did not invent this. I did implement it, and I test it whenever I change a slider.",
      },
      {
        type: "ol",
        items: [
          "Compute the constant P&amp;I payment from loan, rate, and term.",
          "Each month: interest = balance × monthly rate.",
          "Principal = payment − interest (capped at remaining balance).",
          "New balance = old balance − principal.",
          "Repeat until the balance is gone — 360 times on a 30-year, unless you pay extra.",
        ],
      },
      { type: "h2", text: "Year 1 versus the story in your head" },
      {
        type: "table",
        caption:
          "$300,000, 6.75%, 30-year, required payment only. Interest in a year is the sum of twelve monthly interest pieces, not 6.75% of the original loan. Source: month-by-month amortization, September 2026.",
        headers: ["Checkpoint", "Interest paid so far", "Balance still owed"],
        rows: [
          ["After month 1", "About $1,688", "About $299,742"],
          ["After year 1", "About $20,152", "About $296,803"],
          ["After year 5", "About $98,375", "About $281,627"],
          ["After year 10", "About $189,398", "About $255,903"],
        ],
      },
      {
        type: "aside",
        html: "In year 1 I paid about $20,152 of interest and only about $3,197 of principal. The balance barely moved. That is why I stopped telling people “you’ve been paying a year, you must have a ton of equity.” On a high-rate 30-year, year 1 is mostly the cost of borrowing the whole pile. Equity from amortization is slow at the start. Price appreciation is a different worksheet, and I will not pretend I can forecast it from Franklin.",
      },
      {
        type: "figure",
        src: "/images/blog/amortization-year1.svg",
        alt: "Bar chart of year-one interest versus principal on a $300,000 30-year loan at 6.75 percent.",
        caption:
          "Year 1: about $20,152 interest vs about $3,197 principal. Same $1,946 payment every month. Source: Smart Mortgage Calculator, September 2026.",
        width: 880,
        height: 460,
      },
      {
        type: "p",
        html: "By year 10 in that same $300,000 run I had paid about $189,000 of interest and still owed about $256,000. The payment never changed. The mix did. I walked the schedule looking for the month principal finally exceeds interest: month 238 on this rate and term — late in year 19 — when the remaining balance is about $172,000. If you only look at the monthly total, you miss the entire plot. Open the schedule on the <a href=\"/\">mortgage calculator</a> and scroll until the principal column overtakes interest. That month is why extra principal early is leverage: you delete payments that still live on the interest-heavy side of the book.",
      },
      { type: "h2", text: "Why extra principal in year 1 is not wasted" },
      {
        type: "p",
        html: "I used to half-believe the myth that extra principal early “doesn’t matter” because the loan is all interest anyway. The opposite is true. An extra $200 this month never pays this month’s interest — interest is already determined by the balance. It cuts the balance that next month’s interest is calculated on. Skip a slice of the back of the schedule, where the remaining term would have kept charging rent on that $200. The <a href=\"/blog/extra-principal-payments-and-biweekly-mortgages\">extra-principal guide</a> is the payoff-month version of this idea. Here I only need you to see the mechanism.",
      },
      { type: "h2", text: "What the schedule on our calculator is for" },
      {
        type: "p",
        html: "I put a year-by-year and month-by-month schedule on the main <a href=\"/\">mortgage calculator</a> so you can watch the mix flip. Early years: interest bar is the tall one. Later years: principal wins. If you change the rate or term, the crossover year moves. A 15-year at 6.25% on the same $300,000 sends $2,572 a month, so principal gets a bigger bite immediately. That is not magic. That is a larger payment attacking the same kind of formula.",
      },
      {
        type: "ul",
        items: [
          "Taxes, insurance, PMI, and HOA are not in the amortization of the note. They are escrow (or you pay them outside). PITI can rise when insurance reprices even if the P&amp;I line never changes — <a href=\"/blog/how-much-house-can-i-afford\">affordability and escrow</a>.",
          "PMI in our conventional model is a percent of the original loan until 20% down equivalent, not a third column inside amortization — <a href=\"/blog/what-is-pmi-and-how-to-remove-it\">PMI removal</a>.",
          "ARMs recast the payment at reset on whatever balance is left. That is still amortization, just with a new rate and remaining term — <a href=\"/blog/arm-vs-fixed-rate-mortgage\">ARM vs fixed</a>.",
        ],
      },
      { type: "h2", text: "Simple interest versus this schedule" },
      {
        type: "p",
        html: "Most closed-end home loans in the U.S. use this monthly amortizing structure, not daily simple interest like some HELOCs. If you pay 15 days late, you usually still owe the same monthly interest piece plus fees — you do not get a discount for paying on day 2. I mention that because people bring car-loan intuition to a mortgage and then argue with the PDF. Read your note. I still want you to confirm servicing with the people who own the loan. The last payment is almost never exactly $1,946 either: rounding and a leftover stub make the final month a cleanup. Our schedule caps principal at what is left. If a servicer PDF is off by a few dollars, that is usually rounding. If it is off by a whole payment, look for extra principal sitting in suspense — or a rate that is not the note rate.",
      },
      {
        type: "p",
        html: `Open the calculator, download or scroll the schedule, and stare at month 1. If the split makes you angry, good — now you know why extra principal and shorter terms exist. The PDF export on the main tool is the same formula as the on-page table; I use it when I want to mark the crossover month in the margin. Methodology: <a href="/how-we-calculate">how we calculate</a>.`,
      },
      { type: "h2", text: "FAQs" },
      {
        type: "faq",
        items: [
          {
            q: "Does a larger down payment change the interest-versus-principal mix?",
            a: "It changes the starting balance, so every month’s interest is smaller. The mix in month 1 is still mostly interest on a 30-year at mid-6% rates. You just borrowed less.",
          },
          {
            q: "If I recast, does amortization restart?",
            a: "Recast keeps the rate and remaining term, then computes a new lower payment on the new balance. The mix still starts interest-heavy relative to that new payment. Refinance can restart a 30-year clock entirely — <a href=\"/blog/should-you-refinance-2026\">refinance vs recast</a>.",
          },
          {
            q: "Why doesn’t 6.75% of $300,000 equal my year-1 interest?",
            a: "Because the balance falls each month, and because 6.75% is annual. Year-1 interest in my run was about $20,152, not $20,250. Close, not identical. Use the schedule, not a napkin annualization.",
          },
          {
            q: "Is interest tax-deductible because it’s front-loaded?",
            a: "Deductibility depends on your filing situation and current tax law, not on how ugly month 1 looks. Ask a tax professional. I will not do your Schedule A from a calculator footer.",
          },
        ],
      },
    ],
  },
  {
    slug: "extra-principal-payments-and-biweekly-mortgages",
    title: "Extra Principal Payments vs. Biweekly Mortgages: What Actually Shortens the Loan",
    description:
      "See how +$100, +$200, or a biweekly-style extra payment changes payoff time on a $300,000 6.75% 30-year — and how to label the extra so it hits principal.",
    excerpt:
      "I ran +$100 and +$200 extra principal on the same $300,000 note. The calendar moved. The rate did not. That is the whole trick.",
    category: "guides",
    published: "2026-09-11",
    updated: "2026-09-11",
    readingMinutes: 9,
    tags: ["Extra principal", "Biweekly", "Payoff", "Amortization"],
    relatedCalculators: [
      { href: "/", label: "Mortgage Calculator" },
      { href: "/calculators/refinance-mortgage-calculator", label: "Refinance Calculator" },
    ],
    body: [
      {
        type: "p",
        html: "I get asked whether a “biweekly mortgage” is a product you have to refinance into. Usually it is just a payment habit: send half the P&amp;I every two weeks, which lands 26 half-payments a year — one extra full P&amp;I compared with 12 monthly payments. I modeled that habit as extra principal of one P&amp;I divided by 12, added to the required monthly payment, on a $300,000 30-year at 6.75%. Required payoff is 360 months and about $400,000 of interest. The biweekly-style extra paid off in 288 months with about $306,000 of interest. No new loan. No new rate. I am not a servicer. I am the person who had to make extra principal do something visible in the math.",
      },
      {
        type: "p",
        html: "This is the sibling of the hybrid in my <a href=\"/blog/15-vs-30-year-mortgage\">15- versus 30-year piece</a>, where I sent the full 15-year payment at the 30-year rate. Here I keep the required 30-year payment and add a smaller, sustainable extra. I care about sustainable. A $200 extra you skip every winter is a budget. A $200 extra you treat as required is how people bounce checks.",
      },
      { type: "h2", text: "The four calendars I ran on $300,000" },
      {
        type: "table",
        caption:
          "Same $300,000, 6.75% 30-year note. Extra is applied as additional principal each month. Source: month-by-month amortization, September 2026.",
        headers: ["Habit", "Months to pay off", "Lifetime interest"],
        rows: [
          ["Required P&amp;I only ($1,946)", "360", "About $400,000"],
          ["+$100 extra principal", "311", "About $335,000"],
          ["Biweekly-style (one extra P&amp;I per year)", "288", "About $306,000"],
          ["+$200 extra principal", "276", "About $291,000"],
        ],
      },
      {
        type: "aside",
        html: "An extra $100 a month — less than a lot of streaming-plus-coffee stacks — cut 49 months and about $65,000 of interest in this run. An extra $200 cut 84 months and about $110,000. I would rather see a $100 extra that survives a rough quarter than a $400 extra that lasts until the first insurance spike. Heard County winters are not the point. Cash-flow honesty is.",
      },
      {
        type: "figure",
        src: "/images/blog/extra-principal-payoff.svg",
        alt: "Bar chart of months to pay off a $300,000 6.75 percent 30-year loan with required payment only, $100 extra, a biweekly-style extra, and $200 extra.",
        caption:
          "Months to payoff. The rate never changed. Only the extra principal did. Source: Smart Mortgage Calculator, September 2026.",
        width: 880,
        height: 460,
      },
      { type: "h2", text: "How I would label the extra so it actually hits principal" },
      {
        type: "p",
        html: "Servicers are not mind readers. If I send $2,146 on a $1,946 bill without instructions, some shops park the extra in a suspense account or treat it as next month’s payment early. That does not shorten the loan the way I modeled. I would use the servicer’s extra-principal screen, a separate principal-only payment, or a memo the investor actually honors. I would get the next statement and confirm the balance dropped by more than the scheduled principal. If it did not, I would call before I sent the next one.",
      },
      {
        type: "ol",
        items: [
          "Confirm the note allows prepayment without penalty (most modern owner-occupied loans do; read yours).",
          "Use the servicer’s principal-only option, not a vague overpayment.",
          "Match the extra to a monthly habit or a known bonus month — not to leftover checking-account guilt.",
          "Check the next statement’s unpaid principal balance.",
          "Do not recast if the goal is faster payoff. Recast lowers the required payment and can erase the extra’s speed — <a href=\"/blog/should-you-refinance-2026\">recast vs refinance</a>.",
        ],
      },
      {
        type: "p",
        html: "I checked the statement logic the way a picky bookkeeper would. Scheduled principal in month 1 on that $300,000 loan is about $258. If I send $100 extra and it truly hit principal, unpaid principal should drop by about $358, not $258. If the statement only dropped $258, the extra sat in suspense or prepaid next month. That is the only audit I trust. Apps that round up coffee purchases are fine if they pass this test. I do not care about their branding.",
      },
      { type: "h2", text: "Biweekly programs versus doing it yourself" },
      {
        type: "p",
        html: "Some companies sell a biweekly draft for a setup fee. I am allergic to fees that duplicate a free calendar. If your payroll is biweekly, sending half the P&amp;I each paycheck can match cash flow. You can also add 1/12 of P&amp;I to each monthly payment and get the same extra-principal math without a third-party draft. I modeled the second version because that is what our monthly engine can see. If a vendor charges $300 to “set up biweekly,” I would rather put the $300 on principal this month.",
      },
      { type: "h2", text: "The PMI and ARM versions of the same habit" },
      {
        type: "p",
        html: "On a $400,000 house with 5% down, I already showed that +$200 extra principal pulled conventional PMI to the 80% original-value line in 89 months instead of 127 — <a href=\"/blog/what-is-pmi-and-how-to-remove-it\">PMI cancellation test</a>. On an ARM, extra principal shrinks the balance that will recast at reset — <a href=\"/blog/arm-vs-fixed-rate-mortgage\">ARM vs fixed</a>. Same lever. Different reason to pull it. I would not do both a cash-draining extra and a starved emergency fund. Principal is not a savings account you can get back without a <a href=\"/blog/cash-out-refinance-vs-heloc\">cash-out refinance or a HELOC</a>.",
      },
      { type: "h2", text: "When I would not pay extra" },
      {
        type: "ul",
        items: [
          "High-interest revolving debt is still open. I would crush 22% cards before I extra-principal a 6.75% mortgage. The amortization chart is not a morality play.",
          "Cash reserves are thin. Insurance and tax escrow can jump. I keep a cushion in Georgia for that reason even when taxes are milder than Texas.",
          "I expect to sell in two years. Extra principal is mostly a gift to the next owner’s equity math unless the sale is certain to recoup it.",
          "The extra would be more valuable as a larger down payment on the next house, or as points with a hold period I have actually charted — <a href=\"/blog/how-to-get-the-best-mortgage-rate\">points break-even</a>.",
        ],
      },
      { type: "h2", text: "How I would decide the dollar amount" },
      {
        type: "p",
        html: "I start with the payment I could miss for three months and still sleep. Then I pick an extra below that line. $100 survived my $300,000 test with a meaningful calendar change — 49 months and about $65,000 of interest. $200 was better: 84 months and about $110,000. The 15-year payment as a hybrid extra ($626 more in that other article) is a different personality: faster, less skippable in practice even though the note allows a skip. Pick the personality you will still have in February. If $100 is what survives, I would rather have $100 for ten years than $400 for three months. A lump-sum extra in month 1 is the same lever as a habit, just once. A $2,400 bonus in month 1 is not twelve times as powerful as $200 a month for a year, because the monthly extras also skip later interest — but the lump beats waiting a year to start. I would use a bonus as a lump and a paycheck as a habit, not the other way around.",
      },
      {
        type: "p",
        html: `Run your balance in the <a href="/">mortgage calculator</a> and add the extra in your own spreadsheet the way I did, or just raise the payment and watch total interest. Confirm with your servicer that extras apply to principal. Educational math, not a loan modification.`,
      },
      { type: "h2", text: "FAQs" },
      {
        type: "faq",
        items: [
          {
            q: "Does extra principal change my tax deduction?",
            a: "It reduces future interest, so deductible interest can fall in later years if you itemize. That is a tax-person question. The payoff math does not care.",
          },
          {
            q: "Will my servicer automatically shorten the term?",
            a: "On a standard amortizing note, extra principal shortens the calendar automatically because the required payment stays the same while the balance falls faster. You should still see it on the statement. You do not usually get a new 28-year note in the mail.",
          },
          {
            q: "Is a round-up app worth it?",
            a: "If it actually sends principal-only extras and the fee is tiny, it is just a small version of the $100 test. If it is a branded biweekly product with a fat setup charge, I would skip it and send the extra myself.",
          },
          {
            q: "Should I recast after a bonus instead of paying extra monthly?",
            a: "Recast if you want a lower required payment and you already like the rate. Keep paying the old payment as optional extra if you want speed. Do not recast and then also expect the old payoff date. You chose cash flow.",
          },
        ],
      },
    ],
  },
  {
    slug: "cash-out-refinance-vs-heloc",
    title: "Cash-Out Refinance vs. HELOC: Don’t Reprice the Cheap First Mortgage",
    description:
      "Compare a $50,000 cash-out refinance to keeping the first mortgage and adding a HELOC or home equity loan — with five-year interest and remaining balances from our amortization formula.",
    excerpt:
      "Cash-out made the monthly bill look cheaper in my $50,000 test. After five years it left more debt. That is the comparison I actually ran.",
    category: "refinancing",
    published: "2026-09-11",
    updated: "2026-09-11",
    readingMinutes: 10,
    tags: ["Cash-out", "HELOC", "Refinancing", "Home equity"],
    relatedCalculators: [
      { href: "/calculators/refinance-mortgage-calculator", label: "Refinance Calculator" },
      { href: "/", label: "Mortgage Calculator" },
    ],
    body: [
      {
        type: "p",
        html: "I keep a $50,000 kitchen-and-roof file next to the refinance calculator because cash-out and a HELOC get sold as the same product: “use your equity.” They are not the same product. Cash-out replaces the first mortgage. A HELOC (or a closed-end home equity loan) usually sits behind it. If you already like the rate on the first, cash-out is how you volunteer to reprice the cheap debt in order to borrow the new slice. I am Michael Hubbard. I build the calculators from Heard County, Georgia. I do not originate HELOCs. I do run the payment math until the cheaper-looking monthly stops lying.",
      },
      {
        type: "p",
        html: "The setup: $400,000 house, $240,000 remaining on a 6.75% first with 25 years left, and a defined $50,000 project. I am not forecasting your kitchen. I am asking what happens to the first mortgage if you fold that $50,000 into a new 30-year note versus leaving the first alone. The break-even article — <a href=\"/blog/should-you-refinance-2026\">should you refinance in 2026</a> — is about replacing a rate. This page is about whether the cash need should be allowed to touch that rate at all.",
      },
      { type: "h2", text: "Three ways to fund $50,000 on the same house" },
      {
        type: "table",
        caption:
          "Same $240,000 first remaining and $50,000 cash need. HELOC modeled as interest-only at 8.50%. Home equity loan is a 10-year amortizing second at 8.25%. Cash-out is a new $290,000 30-year at 7.125% plus $6,500 closing costs paid in cash. Source: Smart Mortgage Calculator amortization formula, September 2026.",
        headers: ["Path", "Monthly P&amp;I (year 1)", "Interest in first 5 years", "Debt still owed after 5 years"],
        rows: [
          ["Keep 6.75% first + HELOC IO", "$2,012 ($1,658 + $354)", "About $99,000", "About $268,000 if the HELOC is still drawn"],
          ["Keep first + 10-year equity loan", "$2,271 ($1,658 + $613)", "About $94,000", "About $248,000"],
          ["Cash-out $290k at 7.125% 30-year", "$1,954", "About $101,000 + $6,500 costs", "About $273,000"],
        ],
      },
      {
        type: "aside",
        html: "Cash-out won the monthly beauty contest by about $58 versus the HELOC stack. It lost the five-year ledger: more interest, a $6,500 fee stack, a restarted 30-year clock, and about $273,000 still owed versus about $248,000 if I amortize the second. Cheapest payment is not cheapest debt. I would not let a Loan Estimate’s P&amp;I line end the conversation.",
      },
      {
        type: "figure",
        src: "/images/blog/cash-out-vs-heloc-interest.svg",
        alt: "Bar chart of five-year interest cost on a $50,000 cash need: keep the first plus HELOC, keep the first plus a home equity loan, or cash-out refinance including closing costs.",
        caption:
          "Five-year interest (cash-out bar includes $6,500 closing costs). The cheaper monthly cash-out is the expensive bar. Source: Smart Mortgage Calculator, September 2026.",
        width: 880,
        height: 460,
      },
      { type: "h2", text: "Why the cash-out payment looks cheaper" },
      {
        type: "p",
        html: "Two tricks stack. First, I stretched 25 remaining years into a fresh 30. Stretching always cuts the required payment on the same balance; that is amortization, not a gift — <a href=\"/blog/how-mortgage-amortization-works\">how amortization works</a>. Second, the HELOC payment sits on top of the first. Cash-out hides the new $50,000 inside one bill. The first-month 6.75% payment on $240,000 with 300 months left is about $1,658. The cash-out 7.125% payment on $290,000 for 360 months is about $1,954. You borrowed $50,000 more, restarted the clock, and the bill still fell versus first-plus-HELOC. That is the sales slide. After 60 months the cash-out balance is about $273,300. The kept first is about $218,100. If the interest-only HELOC is still fully drawn, total debt is about $268,100 — close, and you never paid the $6,500 title-and-origination stack. If the second is a 10-year equity loan, the second has also paid down to about $30,100. Total debt about $248,200. That $25,000 gap versus cash-out is the project I actually care about.",
      },
      {
        type: "p",
        html: "Lifetime interest on the cash-out note is about $413,000 because I restarted 30 years on $290,000. Lifetime interest left on the first alone is about $257,000. Those two figures are not a fair headline fight — the first does not include the $50,000. Fair is the five-year window plus remaining balances, which is why the table leads. I still publish the lifetime number so nobody “saves” their way into a 360-month clock they did not mean to reopen.",
      },
      { type: "h2", text: "When cash-out is the tool I would actually use" },
      {
        type: "p",
        html: "If the first is already a high rate you planned to refinance anyway, folding in cash can be one closing instead of two. I reran the same balances with an 8.00% first and a 6.75% cash-out on $290,000. The old first was about $1,852 P&amp;I. The cash-out was about $1,881 — almost the same bill, a rate drop, and $50,000 at the table. That is a different personality than poisoning a 6.75% first. I would still check lifetime interest and stay-horizon in the <a href=\"/calculators/refinance-mortgage-calculator\">refinance calculator</a>, because restarting 30 years on a larger balance can erase the rate win. If you were already doing rate-and-term, cash-out is a pricing and LTV question on a loan you were replacing. It is not an excuse to skip break-even.",
      },
      {
        type: "ul",
        items: [
          "You need one payment, one servicer, and you will keep the house past refinance break-even — <a href=\"/blog/should-you-refinance-2026\">break-even and recast</a>.",
          "The cash is a long-horizon use (permanent addition, not a six-month bridge) and you accept a larger first lien.",
          "Cash-out is how you drop PMI or change loan type while you are already in underwriting. Do not invent a cash-out just to chase a teaser ARM — <a href=\"/blog/arm-vs-fixed-rate-mortgage\">stress the reset</a>.",
        ],
      },
      { type: "h2", text: "When I would keep the first and add a second" },
      {
        type: "p",
        html: "If the first is a rate I would be sad to lose, I want the new money in a second lien I can pay off without refinancing the cheap debt. A closed-end home equity loan is the version I can amortize in our engine: fixed payment, known payoff. A HELOC is usually variable and often interest-only in the draw period. I modeled 8.50% interest-only ($354 a month on $50,000) as a budget test, not a quote. Your index-plus-margin will move. That is the HELOC’s honest risk: the $354 is not a 30-year promise. I would size the draw to a project with an end date, then amortize or repay it so I am not carrying a standing second into year ten “because the rate might drop.”",
      },
      {
        type: "ol",
        items: [
          "Write down the first’s rate, remaining term, and whether you would refinance it tomorrow with zero cash-out. If the answer is no, protect it.",
          "Price a cash-out Loan Estimate and a HELOC or home-equity-loan estimate the same week — same $50,000 net cash, not the same headline rate.",
          "Add five years of interest plus remaining balances, not just month-1 P&amp;I. Use the <a href=\"/\">mortgage calculator</a> for the first and the amortizing second; treat HELOC interest-only as balance × monthly rate.",
          "Ask how the second is secured, whether it is variable, and what payment is due when the draw period ends. A reset on a second is still a reset.",
          "Confirm cash-out seasoning, max LTV, and occupancy rules with a licensed lender. Texas homestead cash-out is its own constitutional conversation — I will not fake a Texas closing from Franklin.",
        ],
      },
      { type: "h2", text: "What this site will and will not pretend to calculate" },
      {
        type: "p",
        html: "Our refinance tool can add optional cash-out to a new first and show break-even versus the current note. It does not originate a HELOC, forecast SOFR, or apply a lender’s cash-out LLPA. The 7.125% in this article is an educational step-up off our 6.75% default to stand in for worse cash-out pricing — not a lock. If a loan officer’s cash-out is only 0.125 better or worse than rate-and-term, swap that rate into the same worksheet. The structure of the comparison does not change: you are either replacing the first or stacking on top of it.",
      },
      {
        type: "p",
        html: `Run the cash-out path in the <a href="/calculators/refinance-mortgage-calculator">refinance calculator</a>. Run the kept first in the <a href="/">payment calculator</a>. Confirm HELOC index, margin, floor, ceiling, and draw-period payment with the bank that would record the second. Educational estimates, not a commitment to lend. Methodology: <a href="/how-we-calculate">how we calculate</a>.`,
      },
      { type: "h2", text: "FAQs" },
      {
        type: "faq",
        items: [
          {
            q: "Is a HELOC always cheaper than cash-out?",
            a: "No. If you were going to refinance the first anyway, one cash-out closing can beat two sets of fees. If you like the first’s rate and the cash need is short, a second usually poisons less of the cheap balance. Run both.",
          },
          {
            q: "Does cash-out hurt my rate even if I only need a little cash?",
            a: "Often yes: cash-out pricing and max LTV are typically worse than rate-and-term on the whole loan, not just the extra dollars. That is why a small kitchen can reprice a large first.",
          },
          {
            q: "What if I pay the HELOC off in two years?",
            a: "Then the five-year table overstates the second’s interest, which makes keeping the first look even better versus cash-out. I would still check variable-rate shock during those two years.",
          },
          {
            q: "Can I recast instead of cash-out if I already have the cash?",
            a: "Recast is for lowering the payment on the current note after you apply a lump sum you already own. It does not fund a kitchen. If the money is still in the house as equity, you need a new draw — cash-out, HELOC, or a home equity loan — <a href=\"/blog/should-you-refinance-2026\">recast vs refinance</a>.",
          },
        ],
      },
    ],
  },
];
