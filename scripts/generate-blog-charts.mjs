/**
 * Original editorial charts from this site's amortization formula.
 * Run: node scripts/generate-blog-charts.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/images/blog");

function monthlyPI(loan, annualPct, years) {
  const n = years * 12;
  const r = annualPct / 100 / 12;
  if (loan <= 0 || n <= 0) return 0;
  if (r === 0) return loan / n;
  const f = (1 + r) ** n;
  return (loan * r * f) / (f - 1);
}

function usd(n) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Math.round(n));
}

function usdK(n) {
  if (Math.abs(n) >= 1000) {
    return `$${Math.round(n / 1000).toLocaleString("en-US")}k`;
  }
  return usd(n);
}

const SKY = "#075985";
const SKY2 = "#0ea5e9";
const SLATE = "#0f172a";
const MUTED = "#64748b";
const AMBER = "#b45309";
const TEAL = "#0f766e";
const ROSE = "#9f1239";
const LINE = "#e2e8f0";
const BG = "#f8fafc";

function escapeXml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function wrapTitle(title, max = 58) {
  if (title.length <= max) return [title];
  const words = title.split(" ");
  const lines = [];
  let cur = "";
  for (const w of words) {
    const next = cur ? `${cur} ${w}` : w;
    if (next.length > max && cur) {
      lines.push(cur);
      cur = w;
    } else cur = next;
  }
  if (cur) lines.push(cur);
  return lines.slice(0, 2);
}

function footer(y) {
  return `<text x="40" y="${y}" font-size="11" fill="${MUTED}">Source: Smart Mortgage Calculator amortization formula · educational estimate · Sept 2026</text>`;
}

function barChart({ file, title, subtitle, bars, valueFormat = usd }) {
  const W = 880;
  const H = 460;
  const plotX = 72;
  const plotY = 118;
  const plotW = 760;
  const plotH = 270;
  const max = Math.max(...bars.map((b) => b.value)) * 1.12;
  const gap = 18;
  const barW = (plotW - gap * (bars.length + 1)) / bars.length;
  const titleLines = wrapTitle(title);

  const barsSvg = bars
    .map((b, i) => {
      const h = (b.value / max) * plotH;
      const x = plotX + gap + i * (barW + gap);
      const y = plotY + plotH - h;
      const labelY = y - 8;
      return `
      <rect x="${x}" y="${y}" width="${barW}" height="${h}" rx="6" fill="${b.color}"/>
      <text x="${x + barW / 2}" y="${labelY}" text-anchor="middle" font-size="14" font-weight="700" fill="${SLATE}">${escapeXml(valueFormat(b.value))}</text>
      <text x="${x + barW / 2}" y="${plotY + plotH + 22}" text-anchor="middle" font-size="13" fill="${SLATE}">${escapeXml(b.label)}</text>
      ${b.sublabel ? `<text x="${x + barW / 2}" y="${plotY + plotH + 40}" text-anchor="middle" font-size="11" fill="${MUTED}">${escapeXml(b.sublabel)}</text>` : ""}`;
    })
    .join("");

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${escapeXml(title)}">
  <rect width="${W}" height="${H}" fill="${BG}"/>
  <rect x="1" y="1" width="${W - 2}" height="${H - 2}" fill="none" stroke="${LINE}"/>
  ${titleLines.map((line, i) => `<text x="40" y="${36 + i * 22}" font-size="18" font-weight="800" fill="${SLATE}">${escapeXml(line)}</text>`).join("")}
  <text x="40" y="${36 + titleLines.length * 22 + 6}" font-size="13" fill="${MUTED}">${escapeXml(subtitle)}</text>
  <line x1="${plotX}" y1="${plotY + plotH}" x2="${plotX + plotW}" y2="${plotY + plotH}" stroke="${LINE}"/>
  ${barsSvg}
  ${footer(H - 18)}
</svg>`;
  fs.writeFileSync(path.join(outDir, file), svg);
}

function groupedBars({ file, title, subtitle, groups, series }) {
  const W = 880;
  const H = 480;
  const plotX = 72;
  const plotY = 118;
  const plotW = 760;
  const plotH = 260;
  const max = Math.max(...groups.flatMap((g) => g.values)) * 1.14;
  const groupGap = 36;
  const groupW = (plotW - groupGap * (groups.length + 1)) / groups.length;
  const barGap = 8;
  const barW = (groupW - barGap * (series.length - 1)) / series.length;
  const titleLines = wrapTitle(title);

  const legend = series
    .map(
      (s, i) =>
        `<g transform="translate(${40 + i * 170}, ${36 + titleLines.length * 22 + 18})">
           <rect width="12" height="12" rx="2" fill="${s.color}"/>
           <text x="18" y="11" font-size="12" fill="${SLATE}">${escapeXml(s.label)}</text>
         </g>`,
    )
    .join("");

  const groupsSvg = groups
    .map((g, gi) => {
      const gx = plotX + groupGap + gi * (groupW + groupGap);
      const bars = g.values
        .map((v, si) => {
          const h = (v / max) * plotH;
          const x = gx + si * (barW + barGap);
          const y = plotY + plotH - h;
          return `<rect x="${x}" y="${y}" width="${barW}" height="${h}" rx="5" fill="${series[si].color}"/>
          <text x="${x + barW / 2}" y="${y - 6}" text-anchor="middle" font-size="11" font-weight="700" fill="${SLATE}">${usdK(v)}</text>`;
        })
        .join("");
      return `${bars}<text x="${gx + groupW / 2}" y="${plotY + plotH + 24}" text-anchor="middle" font-size="13" fill="${SLATE}">${escapeXml(g.label)}</text>`;
    })
    .join("");

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${escapeXml(title)}">
  <rect width="${W}" height="${H}" fill="${BG}"/>
  <rect x="1" y="1" width="${W - 2}" height="${H - 2}" fill="none" stroke="${LINE}"/>
  ${titleLines.map((line, i) => `<text x="40" y="${36 + i * 22}" font-size="18" font-weight="800" fill="${SLATE}">${escapeXml(line)}</text>`).join("")}
  ${legend}
  <line x1="${plotX}" y1="${plotY + plotH}" x2="${plotX + plotW}" y2="${plotY + plotH}" stroke="${LINE}"/>
  ${groupsSvg}
  ${footer(H - 18)}
</svg>`;
  fs.writeFileSync(path.join(outDir, file), svg);
}

function lineChart({ file, title, subtitle, series, xMax, yMax, xLabel, yFormat }) {
  const W = 880;
  const H = 460;
  const plotX = 70;
  const plotY = 110;
  const plotW = 770;
  const plotH = 270;
  const titleLines = wrapTitle(title);

  const toX = (x) => plotX + (x / xMax) * plotW;
  const toY = (y) => plotY + plotH - (y / yMax) * plotH;

  const paths = series
    .map((s) => {
      const d = s.points
        .map((p, i) => `${i === 0 ? "M" : "L"} ${toX(p.x).toFixed(1)} ${toY(p.y).toFixed(1)}`)
        .join(" ");
      return `<path d="${d}" fill="none" stroke="${s.color}" stroke-width="3" stroke-linejoin="round"/>`;
    })
    .join("");

  const legend = series
    .map(
      (s, i) =>
        `<g transform="translate(${40 + i * 220}, ${36 + titleLines.length * 22 + 16})">
           <rect width="18" height="3" y="5" fill="${s.color}"/>
           <text x="24" y="11" font-size="12" fill="${SLATE}">${escapeXml(s.label)}</text>
         </g>`,
    )
    .join("");

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${escapeXml(title)}">
  <rect width="${W}" height="${H}" fill="${BG}"/>
  <rect x="1" y="1" width="${W - 2}" height="${H - 2}" fill="none" stroke="${LINE}"/>
  ${titleLines.map((line, i) => `<text x="40" y="${36 + i * 22}" font-size="18" font-weight="800" fill="${SLATE}">${escapeXml(line)}</text>`).join("")}
  ${legend}
  <rect x="${plotX}" y="${plotY}" width="${plotW}" height="${plotH}" fill="#fff" stroke="${LINE}"/>
  ${paths}
  <text x="${plotX + plotW / 2}" y="${plotY + plotH + 28}" text-anchor="middle" font-size="12" fill="${MUTED}">${escapeXml(xLabel)}</text>
  ${footer(H - 18)}
</svg>`;
  fs.writeFileSync(path.join(outDir, file), svg);
}

fs.mkdirSync(outDir, { recursive: true });

const pi575 = monthlyPI(350000, 5.75, 30);
const pi675 = monthlyPI(350000, 6.75, 30);
const pi775 = monthlyPI(350000, 7.75, 30);

barChart({
  file: "rate-sensitivity-350k.svg",
  title: "Same $350,000 loan, three rates (30-year P&I)",
  subtitle: "Principal and interest only — I ran these three sliders on our calculator in September 2026.",
  bars: [
    { label: "5.75%", sublabel: "stress-test low", value: pi575, color: TEAL },
    { label: "6.75%", sublabel: "site default", value: pi675, color: SKY },
    { label: "7.75%", sublabel: "+1 point", value: pi775, color: ROSE },
  ],
});

const pointCost = 3000;
const monthlySave = monthlyPI(300000, 6.75, 30) - monthlyPI(300000, 6.5, 30);
const beMonths = pointCost / monthlySave;
const months = [0, 12, 24, 36, 48, 60, 72, 84];
lineChart({
  file: "points-breakeven.svg",
  title: "One discount point on $300,000: when it pays back",
  subtitle: `1% of loan = $3,000. Rate 6.75% → 6.50% saves ${usd(monthlySave)}/mo. Crosses cost near month ${Math.round(beMonths)}.`,
  xMax: 84,
  yMax: 4500,
  xLabel: "Months you keep the loan",
  series: [
    {
      label: "Upfront cost of 1 point",
      color: ROSE,
      points: months.map((m) => ({ x: m, y: pointCost })),
    },
    {
      label: "Cumulative P&I savings",
      color: SKY,
      points: months.map((m) => ({ x: m, y: monthlySave * m })),
    },
  ],
});

const home400 = 400000;
barChart({
  file: "escrow-tax-by-state.svg",
  title: "Property tax escrow on the same $400,000 home",
  subtitle: "Monthly tax at each state’s average effective rate in our planning data — insurance and HOA not included.",
  bars: [
    { label: "Georgia", sublabel: "0.81%", value: (home400 * 0.81) / 100 / 12, color: SKY },
    { label: "California", sublabel: "0.71%", value: (home400 * 0.71) / 100 / 12, color: SKY2 },
    { label: "Florida", sublabel: "0.86%", value: (home400 * 0.86) / 100 / 12, color: TEAL },
    { label: "Texas", sublabel: "1.60%", value: (home400 * 1.6) / 100 / 12, color: AMBER },
  ],
});

const refiCost = 6500;
const refiSave = 200;
lineChart({
  file: "refinance-breakeven.svg",
  title: "Refinance payback: $6,500 costs vs $200/month P&I savings",
  subtitle: "Break-even at 32.5 months. If you move in year two, this refinance loses money even if the new rate is lower.",
  xMax: 48,
  yMax: 10000,
  xLabel: "Months after closing",
  series: [
    {
      label: "Closing costs paid",
      color: ROSE,
      points: [0, 12, 24, 36, 48].map((m) => ({ x: m, y: refiCost })),
    },
    {
      label: "Cumulative monthly savings",
      color: SKY,
      points: [0, 12, 24, 36, 48].map((m) => ({ x: m, y: refiSave * m })),
    },
  ],
});

barChart({
  file: "mi-duration.svg",
  title: "How long mortgage insurance sticks (typical purchase)",
  subtitle: "FHA annual MIP duration vs conventional PMI you can request to cancel near 20% equity. Confirm HUD/servicer rules.",
  bars: [
    { label: "FHA <10% down", sublabel: "annual MIP", value: 30, color: ROSE },
    { label: "FHA 10%+ down", sublabel: "annual MIP", value: 11, color: AMBER },
    { label: "Conv. PMI", sublabel: "often cancellable", value: 8, color: SKY },
  ],
  valueFormat: (v) => `${v} yrs`,
});

const price350 = 350000;
const pmiRate = 0.7;
const down5 = price350 * 0.05;
const down20 = price350 * 0.2;
const loan5 = price350 - down5;
const loan20 = price350 - down20;
const pi5 = monthlyPI(loan5, 6.75, 30);
const pi20 = monthlyPI(loan20, 6.75, 30);
const pmi5 = (loan5 * (pmiRate / 100)) / 12;

groupedBars({
  file: "down-5-vs-20.svg",
  title: "$350,000 home: 5% down vs 20% down (6.75% 30-year)",
  subtitle: `PMI modeled at ${pmiRate}% of the loan per year. Cash to close is a different worksheet.`,
  series: [
    { label: "P&I", color: SKY },
    { label: "PMI", color: AMBER },
  ],
  groups: [
    { label: "5% down ($17,500)", values: [pi5, pmi5] },
    { label: "20% down ($70,000)", values: [pi20, 0] },
  ],
});

barChart({
  file: "credit-tier-payment.svg",
  title: "Illustrative pricing tiers on a $380,000 30-year loan",
  subtitle: "Not a credit-score quote — this is what a 0.50% pricing step does to P&I when I move only the rate slider.",
  bars: [
    { label: "6.50%", sublabel: "stronger file", value: monthlyPI(380000, 6.5, 30), color: TEAL },
    { label: "7.00%", sublabel: "+0.50%", value: monthlyPI(380000, 7.0, 30), color: SKY },
    { label: "7.50%", sublabel: "+1.00%", value: monthlyPI(380000, 7.5, 30), color: ROSE },
  ],
});

const pi30 = monthlyPI(300000, 6.75, 30);
const pi15 = monthlyPI(300000, 6.25, 15);
const int30 = pi30 * 360 - 300000;
const int15 = pi15 * 180 - 300000;

groupedBars({
  file: "term-15-vs-30.svg",
  title: "$300,000 loan: 15-year at 6.25% vs 30-year at 6.75%",
  subtitle: "I used a half-point lower 15-year rate, which is how these products often price on the same day.",
  series: [
    { label: "Monthly P&I", color: SKY },
    { label: "Lifetime interest", color: AMBER },
  ],
  groups: [
    { label: "30-year", values: [pi30, int30] },
    { label: "15-year", values: [pi15, int15] },
  ],
});

const price400 = 400000;
function pmiMonthly(downPct) {
  const loan = price400 * (1 - downPct / 100);
  return (loan * 0.6) / 100 / 12;
}
barChart({
  file: "pmi-by-down.svg",
  title: "Monthly PMI on a $400,000 home (0.60%/yr of loan)",
  subtitle: "Same house, same 6.75% rate. PMI is $0 at 20% down — the payment drop is not just a smaller loan.",
  bars: [
    { label: "5% down", value: pmiMonthly(5), color: ROSE },
    { label: "10% down", value: pmiMonthly(10), color: AMBER },
    { label: "15% down", value: pmiMonthly(15), color: SKY2 },
    { label: "20% down", value: 0, color: TEAL },
  ],
});

barChart({
  file: "va-funding-fee.svg",
  title: "VA funding fee on a $400,000 $0-down purchase (illustrative)",
  subtitle: "First-use 2.15% vs subsequent-use 3.30% of loan — confirm current VA tables. Disability exemptions can be $0.",
  bars: [
    { label: "First use", sublabel: "2.15%", value: 400000 * 0.0215, color: SKY },
    { label: "Subsequent use", sublabel: "3.30%", value: 400000 * 0.033, color: AMBER },
    { label: "Exempt", sublabel: "if qualified", value: 0, color: TEAL },
  ],
});

const txPrice = 350000;
const txLoan = txPrice * 0.8;
const txPI = monthlyPI(txLoan, 6.75, 30);
const txTax = (txPrice * 1.6) / 100 / 12;
const txIns = 2400 / 12;
barChart({
  file: "texas-piti-stack.svg",
  title: "Texas median-style PITI: $350,000, 20% down, 6.75% 30-year",
  subtitle: "I loaded our Texas defaults (1.60% tax, ~$2,400 insurance). Escrow is not a rounding error.",
  bars: [
    { label: "P&I", value: txPI, color: SKY },
    { label: "Taxes", value: txTax, color: AMBER },
    { label: "Insurance", value: txIns, color: ROSE },
  ],
});

const gaPrice = 340000;
const gaLoan = gaPrice * 0.8;
const gaPI = monthlyPI(gaLoan, 6.75, 30);
const gaTax = (gaPrice * 0.81) / 100 / 12;
const gaIns = 1600 / 12;

barChart({
  file: "arm-intro-vs-stress.svg",
  title: "$350,000 5/1 ARM vs 30-year fixed (P&I only)",
  subtitle: "Intro 6.00% vs fixed 6.75% vs a 11% lifetime-cap-style reset on remaining term after 60 months.",
  bars: [
    { label: "ARM intro", sublabel: "6.00%", value: monthlyPI(350000, 6.0, 30), color: TEAL },
    { label: "30-yr fixed", sublabel: "6.75%", value: monthlyPI(350000, 6.75, 30), color: SKY },
    { label: "ARM stress", sublabel: "11% after yr 5", value: 3192, color: ROSE },
  ],
});

const amortP = monthlyPI(300000, 6.75, 30);
barChart({
  file: "amortization-year1.svg",
  title: "Year 1 on a $300,000 30-year at 6.75%: mostly interest",
  subtitle: "Same payment every month. Year 1 is about $20,152 interest vs about $3,197 principal.",
  bars: [
    { label: "Interest", sublabel: "year 1", value: 20152, color: ROSE },
    { label: "Principal", sublabel: "year 1", value: 3197, color: SKY },
  ],
});

barChart({
  file: "extra-principal-payoff.svg",
  title: "$300,000 at 6.75% 30-year: extra principal vs scheduled",
  subtitle: "Months to pay off. +$100 and +$200 extra principal, or a biweekly-style extra (one extra P&I per year).",
  bars: [
    { label: "Required only", sublabel: "$1,946/mo", value: 360, color: ROSE },
    { label: "+$100 extra", value: 311, color: AMBER },
    { label: "Biweekly-style", sublabel: "+1 P&I / year", value: 288, color: SKY2 },
    { label: "+$200 extra", value: 276, color: TEAL },
  ],
  valueFormat: (v) => `${v} mo`,
});

barChart({
  file: "cash-out-vs-heloc-interest.svg",
  title: "$50,000 cash need: 5-year interest (keep first vs cash-out)",
  subtitle: "Keep a $240k 6.75% first + second, vs cash-out $290k at 7.125%. Cash-out bar includes $6,500 closing costs.",
  bars: [
    { label: "First + HELOC IO", sublabel: "8.50% IO", value: 98819, color: SKY },
    { label: "First + equity loan", sublabel: "8.25% 10-yr", value: 94432, color: TEAL },
    { label: "Cash-out + costs", sublabel: "7.125% 30-yr", value: 107070, color: ROSE },
  ],
});

const summary = {
  pi575,
  pi675,
  pi775,
  monthlySave,
  beMonths,
  pi5,
  pmi5,
  pi20,
  pi30,
  pi15,
  int30,
  int15,
  txPI,
  txTax,
  txIns,
  txTotal: txPI + txTax + txIns,
  gaPI,
  gaTax,
  gaIns,
  gaTotal: gaPI + gaTax + gaIns,
  fha35Loan: 350000 * 0.965,
};
fs.writeFileSync(path.join(__dirname, "_chart-numbers.json"), JSON.stringify(summary, null, 2));
console.log("Wrote charts to", outDir);
console.log(summary);
