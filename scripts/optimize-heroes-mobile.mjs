/**
 * Generate dedicated mobile-width hero images so the LCP hero on phones is
 * served as a plain static file — never through `/_next/image`.
 *
 * Why: the on-demand image optimizer (sharp) has to decode + resize +
 * re-encode the full 1536-wide source on every cache-cold request/width/
 * quality combination. On constrained shared hosting that cold pass can take
 * seconds, which shows up as mobile LCP/Speed Index regressions even though
 * the final optimized bytes are small. A pre-built mobile file removes that
 * request from the critical path entirely: Node just streams a static file.
 *
 * Desktop keeps using next/image + the optimizer (already fast/cached there;
 * desktop PageSpeed is ~97) — only the mobile art-direction source changes.
 *
 * Usage: node scripts/optimize-heroes-mobile.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const heroesDir = path.join(root, "public", "images", "heroes");
const mobileDir = path.join(heroesDir, "mobile");

// 828px covers ~2x DPR on common ~414px-wide phones (Lighthouse's Moto G
// Power profile included) while staying tiny; the hero sits under a heavy
// gradient overlay so the extra quality above q60 is still a large-percentage
// byte saving vs. the desktop source, not a visible sharpness loss.
const MOBILE_WIDTH = 828;
const MOBILE_QUALITY = 68;

async function main() {
  fs.mkdirSync(mobileDir, { recursive: true });

  const files = fs
    .readdirSync(heroesDir)
    .filter((f) => f.toLowerCase().endsWith(".webp"));

  if (files.length === 0) {
    console.log("No hero WebP files found — nothing to do.");
    return;
  }

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const srcPath = path.join(heroesDir, file);
    const destPath = path.join(mobileDir, file);

    const before = fs.statSync(srcPath).size;
    await sharp(srcPath)
      .resize({ width: MOBILE_WIDTH })
      .webp({ quality: MOBILE_QUALITY, effort: 6 })
      .toFile(destPath);
    const after = fs.statSync(destPath).size;

    totalBefore += before;
    totalAfter += after;

    console.log(
      `${file}: ${(before / 1024).toFixed(0)}KB -> mobile/${file} ${(after / 1024).toFixed(0)}KB`,
    );
  }

  console.log(
    `\nTotal source: ${(totalBefore / 1024).toFixed(0)}KB, mobile: ${(totalAfter / 1024).toFixed(0)}KB`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
