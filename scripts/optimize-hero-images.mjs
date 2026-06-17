/**
 * Generate optimized hero campus images (AVIF / WebP / fallback) at desktop and
 * mobile widths from the source PNG. Uses Sharp only. Idempotent — safe to
 * re-run; never touches the original PNG.
 *
 *   node scripts/optimize-hero-images.mjs
 */
import sharp from "sharp";
import { statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dir = path.join(root, "public", "images", "campus");
const SOURCE = path.join(dir, "crescent-campus-hero-bg.png");
const BASE = "crescent-campus-hero-bg";

// Desktop keeps the source's useful width; mobile is downscaled (aspect kept,
// so the building/signboard are never cropped awkwardly).
const DESKTOP_MAX_W = 1672;
const MOBILE_W = 860;

const kb = (p) => `${(statSync(p).size / 1024).toFixed(1)} KB`;

async function run() {
  const src = sharp(SOURCE);
  const meta = await src.metadata();
  const desktopW = Math.min(DESKTOP_MAX_W, meta.width ?? DESKTOP_MAX_W);

  const variants = [
    { label: "desktop", width: desktopW, suffix: "" },
    { label: "mobile", width: MOBILE_W, suffix: "-mobile" },
  ];

  const results = [];
  for (const v of variants) {
    const resized = () =>
      sharp(SOURCE).resize({ width: v.width, withoutEnlargement: true });

    const avif = path.join(dir, `${BASE}${v.suffix}.avif`);
    const webp = path.join(dir, `${BASE}${v.suffix}.webp`);
    // Fallback: JPEG (photographic — far smaller than PNG, no transparency needed).
    const jpg = path.join(dir, `${BASE}${v.suffix}.jpg`);

    await resized().avif({ quality: 58, effort: 5 }).toFile(avif);
    await resized().webp({ quality: 76, effort: 5 }).toFile(webp);
    await resized().jpeg({ quality: 80, mozjpeg: true, progressive: true }).toFile(jpg);

    results.push([`${v.label} avif`, avif], [`${v.label} webp`, webp], [`${v.label} jpg`, jpg]);
  }

  console.log(`Source PNG: ${kb(SOURCE)} (${meta.width}x${meta.height})\n`);
  for (const [label, file] of results) {
    console.log(`  ${label.padEnd(13)} ${path.basename(file).padEnd(38)} ${kb(file)}`);
  }
  console.log("\nDone. Original PNG left untouched.");
}

run().catch((err) => {
  console.error("Image optimization failed:", err);
  process.exit(1);
});
