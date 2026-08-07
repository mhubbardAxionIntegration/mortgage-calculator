/**
 * Convert the full-bleed PageHero panorama PNGs to compressed WebP.
 *
 * These are large, detail-rich AI-generated PNGs (2.3-3.8MB each). Next.js's
 * built-in Image Optimization API (sharp) already resizes/re-encodes them
 * per-request, but decoding a multi-megabyte PNG on every cold cache miss is
 * a major source of mobile LCP latency on constrained hosting. Pre-converting
 * the *source* files to WebP keeps the exact same pixels/dimensions but cuts
 * decode time and on-disk size dramatically, so the on-demand optimizer has
 * far less work to do.
 *
 * Usage: node scripts/optimize-heroes.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const heroesDir = path.join(root, "public", "images", "heroes");

const QUALITY = 82;

async function main() {
  const files = fs
    .readdirSync(heroesDir)
    .filter((f) => f.toLowerCase().endsWith(".png"));

  if (files.length === 0) {
    console.log("No PNG hero files found — nothing to do.");
    return;
  }

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const srcPath = path.join(heroesDir, file);
    const destPath = path.join(
      heroesDir,
      file.replace(/\.png$/i, ".webp"),
    );

    const before = fs.statSync(srcPath).size;
    await sharp(srcPath)
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(destPath);
    const after = fs.statSync(destPath).size;

    totalBefore += before;
    totalAfter += after;

    console.log(
      `${file} -> ${path.basename(destPath)}: ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024).toFixed(0)}KB (${(100 - (after / before) * 100).toFixed(0)}% smaller)`,
    );

    fs.unlinkSync(srcPath);
  }

  console.log(
    `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(1)}MB -> ${(totalAfter / 1024 / 1024).toFixed(1)}MB`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
