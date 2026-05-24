// One-off white-background remover for the logo.
// Usage: node scripts/remove-bg.mjs <input> <output>
// Defaults to public/brand/logo.jpeg -> public/brand/logo.png
//
// Algorithm: convert to RGBA raw, then for every pixel:
//   - fully white-ish (all channels >= 250)  → alpha 0
//   - near-white (all channels >= 220)       → alpha scaled by "non-whiteness"
//   - otherwise                              → keep alpha 255
// This produces clean transparent edges for logos on solid white backgrounds.

import sharp from "sharp";
import { resolve } from "node:path";

const input = process.argv[2] ?? "public/brand/logo.jpeg";
const output = process.argv[3] ?? "public/brand/logo.png";

const SOFT_THRESHOLD = 200; // start fading alpha here
const HARD_THRESHOLD = 235; // fully transparent above this

async function run() {
  const inPath = resolve(input);
  const outPath = resolve(output);

  const image = sharp(inPath).ensureAlpha();
  const { data, info } = await image
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  if (channels !== 4) {
    throw new Error(`Expected RGBA (4 channels) — got ${channels}`);
  }

  // Manipulate alpha in-place
  let cleared = 0;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const minRGB = Math.min(r, g, b);

    if (minRGB >= HARD_THRESHOLD) {
      data[i + 3] = 0;
      cleared++;
    } else if (minRGB >= SOFT_THRESHOLD) {
      // Linear fade between SOFT_THRESHOLD and HARD_THRESHOLD
      const range = HARD_THRESHOLD - SOFT_THRESHOLD;
      const t = (minRGB - SOFT_THRESHOLD) / range; // 0..1
      data[i + 3] = Math.round(255 * (1 - t));
    }
  }

  // Trim transparent padding so the bounding box hugs the visible logo
  const trimmed = await sharp(data, { raw: { width, height, channels: 4 } })
    .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 5 })
    .png({ compressionLevel: 9 })
    .toBuffer({ resolveWithObject: true });

  await sharp(trimmed.data).toFile(outPath);

  const totalPixels = width * height;
  const pctCleared = ((cleared / totalPixels) * 100).toFixed(1);
  const newW = trimmed.info.width;
  const newH = trimmed.info.height;
  console.log(
    `Wrote ${outPath}\n  • input  : ${width}×${height}\n  • trimmed: ${newW}×${newH} (aspect ${(newW / newH).toFixed(2)}:1)\n  • ${pctCleared}% of pixels made fully transparent (before trim)`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
