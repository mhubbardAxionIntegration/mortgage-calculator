/**
 * Parse HUD CHUMS fixed-width CY loan-limit files into compact JSON for the app.
 *
 * Sources (official):
 *   https://apps.hud.gov/pub/chums/cy2026-forward-limits.txt  (FHA)
 *   https://apps.hud.gov/pub/chums/cy2026-gse-limits.txt      (FHFA / Fannie-Freddie)
 *
 * Usage: node scripts/sync-loan-limits.mjs
 * Optional: YEAR=2026 node scripts/sync-loan-limits.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const dataDir = path.join(root, "public", "data");
const year = Number(process.env.YEAR || 2026);

const STATE_FIPS = {
  AL: "01", AK: "02", AZ: "04", AR: "05", CA: "06", CO: "08", CT: "09", DE: "10",
  DC: "11", FL: "12", GA: "13", HI: "15", ID: "16", IL: "17", IN: "18", IA: "19",
  KS: "20", KY: "21", LA: "22", ME: "23", MD: "24", MA: "25", MI: "26", MN: "27",
  MS: "28", MO: "29", MT: "30", NE: "31", NV: "32", NH: "33", NJ: "34", NM: "35",
  NY: "36", NC: "37", ND: "38", OH: "39", OK: "40", OR: "41", PA: "42", RI: "44",
  SC: "45", SD: "46", TN: "47", TX: "48", UT: "49", VT: "50", VA: "51", WA: "53",
  WV: "54", WI: "55", WY: "56", AS: "60", GU: "66", MP: "69", PR: "72", VI: "78",
};

/** Map state abbr → site slug (mirrors src/lib/states.ts). */
const STATE_SLUG = {
  AL: "alabama", AK: "alaska", AZ: "arizona", AR: "arkansas", CA: "california",
  CO: "colorado", CT: "connecticut", DE: "delaware", DC: "district-of-columbia",
  FL: "florida", GA: "georgia", HI: "hawaii", ID: "idaho", IL: "illinois",
  IN: "indiana", IA: "iowa", KS: "kansas", KY: "kentucky", LA: "louisiana",
  ME: "maine", MD: "maryland", MA: "massachusetts", MI: "michigan", MN: "minnesota",
  MS: "mississippi", MO: "missouri", MT: "montana", NE: "nebraska", NV: "nevada",
  NH: "new-hampshire", NJ: "new-jersey", NM: "new-mexico", NY: "new-york",
  NC: "north-carolina", ND: "north-dakota", OH: "ohio", OK: "oklahoma", OR: "oregon",
  PA: "pennsylvania", RI: "rhode-island", SC: "south-carolina", SD: "south-dakota",
  TN: "tennessee", TX: "texas", UT: "utah", VT: "vermont", VA: "virginia",
  WA: "washington", WV: "west-virginia", WI: "wisconsin", WY: "wyoming",
};

/** Indicative statewide averages from src/lib/states.ts (tax %, median $, insurance $). */
const STATE_DEFAULTS = {
  AL: [0.39, 220000, 1900], AK: [1.04, 340000, 1100], AZ: [0.62, 430000, 1400],
  AR: [0.61, 210000, 2000], CA: [0.71, 770000, 1300], CO: [0.51, 545000, 1700],
  CT: [1.79, 380000, 1400], DE: [0.58, 360000, 900], FL: [0.86, 410000, 2400],
  GA: [0.81, 340000, 1600], HI: [0.28, 840000, 500], ID: [0.56, 460000, 1100],
  IL: [2.05, 270000, 1300], IN: [0.81, 240000, 1200], IA: [1.5, 220000, 1400],
  KS: [1.34, 230000, 2200], KY: [0.8, 220000, 1700], LA: [0.55, 210000, 2300],
  ME: [1.24, 390000, 1000], MD: [1.05, 430000, 1300], MA: [1.14, 600000, 1500],
  MI: [1.38, 250000, 1300], MN: [1.05, 340000, 1700], MS: [0.79, 190000, 2100],
  MO: [0.97, 250000, 1900], MT: [0.74, 450000, 1600], NE: [1.54, 270000, 2300],
  NV: [0.55, 450000, 1100], NH: [1.86, 460000, 900], NJ: [2.23, 490000, 1200],
  NM: [0.67, 300000, 1500], NY: [1.4, 470000, 1400], NC: [0.7, 340000, 1700],
  ND: [0.98, 280000, 1700], OH: [1.41, 230000, 1100], OK: [0.85, 210000, 2700],
  OR: [0.86, 490000, 900], PA: [1.41, 270000, 1100], RI: [1.3, 440000, 1500],
  SC: [0.53, 300000, 1700], SD: [1.08, 290000, 2000], TN: [0.56, 360000, 1700],
  TX: [1.6, 350000, 2400], UT: [0.52, 530000, 1100], VT: [1.78, 380000, 900],
  VA: [0.8, 400000, 1200], WA: [0.87, 600000, 1100], WV: [0.55, 170000, 1200],
  WI: [1.51, 290000, 1100], WY: [0.55, 350000, 1400], DC: [0.55, 630000, 1300],
};

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function slice(line, start, end) {
  // HUD docs are 1-indexed inclusive.
  return line.slice(start - 1, end).trim();
}

function parseIntField(line, start, end) {
  const raw = slice(line, start, end).replace(/\D/g, "");
  if (!raw) return 0;
  return Number(raw);
}

/**
 * @param {string} filePath
 * @returns {{ limits: Record<string, number>, counties: Map<string, object>, floor: number, ceiling: number }}
 */
function parseHudLimits(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const lines = text.split(/\r?\n/);
  /** @type {Record<string, number>} */
  const limits = {};
  /** @type {Map<string, object>} */
  const counties = new Map();
  let floor = Infinity;
  let ceiling = 0;

  for (const line of lines) {
    if (!line || line.length < 147) continue;
    const stateAbbr = slice(line, 102, 103);
    const countyCode = slice(line, 104, 106).padStart(3, "0");
    const stateFips = STATE_FIPS[stateAbbr];
    if (!stateFips || !/^\d{3}$/.test(countyCode)) continue;

    const fips = `${stateFips}${countyCode}`;
    const limit1 = parseIntField(line, 74, 80);
    if (!limit1) continue;

    limits[fips] = limit1;
    floor = Math.min(floor, limit1);
    ceiling = Math.max(ceiling, limit1);

    const countyName = slice(line, 133, 147);
    const median = parseIntField(line, 67, 73);
    const highCost = slice(line, 66, 66) === "H";
    if (!counties.has(fips)) {
      counties.set(fips, {
        fips,
        name: titleCase(countyName),
        stateAbbr,
        stateSlug: STATE_SLUG[stateAbbr] || slugify(slice(line, 107, 132)),
        slug: slugify(countyName),
        median,
        highCost,
      });
    } else if (median > 0) {
      counties.get(fips).median = median;
      counties.get(fips).highCost = highCost;
    }
  }

  if (!Number.isFinite(floor)) floor = 541287;
  return { limits, counties, floor, ceiling };
}

function titleCase(s) {
  return s
    .toLowerCase()
    .replace(/\b([a-z])/g, (m) => m.toUpperCase())
    .replace(/\bOf\b/g, "of")
    .replace(/\bAnd\b/g, "and");
}

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  return dest;
}

async function main() {
  fs.mkdirSync(dataDir, { recursive: true });
  const fhaRaw = path.join(dataDir, `raw-fha-${year}.txt`);
  const gseRaw = path.join(dataDir, `raw-gse-${year}.txt`);

  if (!fs.existsSync(fhaRaw) || fs.statSync(fhaRaw).size < 1000) {
    console.log("Downloading FHA forward limits…");
    await download(
      `https://apps.hud.gov/pub/chums/cy${year}-forward-limits.txt`,
      fhaRaw,
    );
  }
  if (!fs.existsSync(gseRaw) || fs.statSync(gseRaw).size < 1000) {
    console.log("Downloading GSE (FHFA) limits…");
    await download(
      `https://apps.hud.gov/pub/chums/cy${year}-gse-limits.txt`,
      gseRaw,
    );
  }

  const fha = parseHudLimits(fhaRaw);
  const gse = parseHudLimits(gseRaw);

  const fhaOut = {
    year,
    source: "HUD CHUMS FHA Forward Limits",
    floor: fha.floor,
    ceiling: fha.ceiling,
    limits: fha.limits,
  };
  const gseOut = {
    year,
    source: "HUD CHUMS Fannie/Freddie (FHFA conforming) Limits",
    floor: gse.floor,
    ceiling: gse.ceiling,
    limits: gse.limits,
  };

  /** Prefer FHA file county names; merge any GSE-only FIPS. */
  const countyList = [...fha.counties.values()];
  for (const [fips, c] of gse.counties) {
    if (!fha.counties.has(fips)) countyList.push(c);
  }
  countyList.sort((a, b) =>
    a.stateAbbr === b.stateAbbr
      ? a.name.localeCompare(b.name)
      : a.stateAbbr.localeCompare(b.stateAbbr),
  );

  /** @type {Record<string, { tax: number, insurance: number, median: number }>} */
  const estimates = {};
  for (const c of countyList) {
    const defaults = STATE_DEFAULTS[c.stateAbbr];
    if (!defaults) continue;
    const [tax, stateMedian, stateIns] = defaults;
    const median = c.median > 0 ? c.median : stateMedian;
    const ratio = stateMedian > 0 ? median / stateMedian : 1;
    // Scale insurance gently with local median; tax stays at state effective rate
    // unless later ACS enrichment overrides (kept editable in the UI).
    const insurance = Math.round(
      Math.min(Math.max(stateIns * (0.75 + 0.25 * ratio), stateIns * 0.7), stateIns * 2.2),
    );
    estimates[c.fips] = {
      tax: Number(tax.toFixed(2)),
      insurance,
      median,
    };
  }

  const countiesOut = countyList.map(({ fips, name, stateAbbr, stateSlug, slug }) => ({
    fips,
    name,
    stateAbbr,
    stateSlug,
    slug,
  }));

  fs.writeFileSync(
    path.join(dataDir, "fha-loan-limits.json"),
    JSON.stringify(fhaOut),
  );
  fs.writeFileSync(
    path.join(dataDir, "fhfa-conforming-limits.json"),
    JSON.stringify(gseOut),
  );
  fs.writeFileSync(
    path.join(dataDir, "counties.json"),
    JSON.stringify(countiesOut),
  );
  fs.writeFileSync(
    path.join(dataDir, "county-estimates.json"),
    JSON.stringify({ year, estimates }),
  );

  console.log(
    `Wrote ${Object.keys(fha.limits).length} FHA limits (floor ${fha.floor}, ceiling ${fha.ceiling})`,
  );
  console.log(
    `Wrote ${Object.keys(gse.limits).length} FHFA limits (floor ${gse.floor}, ceiling ${gse.ceiling})`,
  );
  console.log(`Wrote ${countiesOut.length} counties + estimates`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
