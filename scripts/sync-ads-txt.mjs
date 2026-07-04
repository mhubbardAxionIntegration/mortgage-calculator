import { readFileSync, writeFileSync } from "node:fs";

const site = readFileSync("src/lib/site.ts", "utf8");
const match = site.match(/adsenseClientId:\s*"([^"]+)"/);
if (!match) {
  throw new Error("adsenseClientId not found in src/lib/site.ts");
}

const pubId = match[1].replace(/^ca-pub-/, "pub-");
writeFileSync(
  "public/ads.txt",
  `google.com, ${pubId}, DIRECT, f08c47fec0942fa0\n`,
  "utf8",
);
