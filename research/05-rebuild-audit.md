# Rebuild Audit — Corporate B2B Direction

**Date:** 23 May 2026
**Reason for rebuild:** v1 read as a design-agency editorial layout (Instrument Serif italics, warm paper background, pun headlines, gradient placeholders). Client feedback: "childish and not authentic." The actual brand identity — navy + orange + steel-gray geometric sans wordmark — calls for a Carrier/Schneider register.

---

## What changed

### Brand system
| | v1 | v2 |
|---|---|---|
| Display type | Instrument Serif (italic flourishes) | Inter 700 — geometric sans, no italics |
| Body type | Inter | Inter |
| Light bg | Warm paper `#F6F4F0` | Pure white `#FFFFFF` |
| Brand primary | Deep teal `#0F4C5C` | Navy `#1E4976` / `#0F2C4A` (from real logo) |
| Accent | Signal orange `#F26419` | Orange `#EF8324` (from real logo) |
| Neutrals | Warm muted | Cool steel-gray |
| Logo | Placeholder SVG mark | Real wordmark from `/brand/logo.jpeg` |

### Copy
| Element | v1 | v2 |
|---|---|---|
| Hero H1 | "Ten years cooling Accra's most demanding spaces." | "Mechanical contracting for buildings that can't afford downtime." |
| Hero lede | "Consulting, installation and maintenance of air-conditioning systems — from a single split for a bedroom to a 200kW chiller for a beverage plant." | "Design, installation and maintenance of HVAC, ventilation, chillers and refrigeration — for commercial and industrial clients across Ghana." |
| Section eyebrows | "HOW WE WORK / Three principles. Zero shortcuts." | "HOW WE WORK / The HVAC fundamentals, executed without shortcuts." |
| Value props | "Designed for the spec. / Installed on schedule. / Maintained for the long run." | "Designed to the load. / Installed to the standard. / Serviced for the lifetime." |
| 404 | "Cold trail." | "Page not found." |
| CTA | "Tell us about the space. We'll tell you the system." | "Request a site assessment." |

### Imagery
- **v1:** All gradient/pattern placeholders (CSS only). No actual photography.
- **v2:** 22 curated Unsplash photographs throughout — heroes (architectural towers, plant rooms), industries (residential, hospitality, retail, healthcare, offices, industrial), services (install, maintenance, design, VRF, chillers, cold rooms, ventilation, emergency).

### Components
- **Hero**: full-bleed building photo with dark gradient overlay, ribbon of authorised-brand names at the bottom, side-mounted stats column.
- **Service cards**: photo-on-top, content-below cards (4-col grid).
- **Industry cards**: full-bleed photo with bottom-anchored title overlay (3-col grid).
- **Project cards**: photo-on-top with industry tag chip, stats footer.
- **CtaBanner**: navy background with darkened photo behind + side-mounted contact rail.
- **3D AC unit**: removed from the hero (replaced with real architectural photography). Three.js files remain in `src/components/three/` if you want to re-introduce as a feature on a service detail page later.

### Architecture
No change — 34 pages still generated, same routes, same data model.

---

## Verification

| Check | Result |
|---|---|
| TypeScript `tsc --noEmit` | ✅ Clean |
| `next build` | ✅ All 34 pages SSG in 4.3s |
| DOM body font | ✅ `Inter` |
| DOM H1 font / weight | ✅ `Inter` / `700` |
| DOM H1 text | ✅ "Mechanical contracting for buildings that can't afford downtime." |
| Body bg light mode | ✅ `rgb(255, 255, 255)` (white) |
| Body ink colour | ✅ `rgb(12, 22, 38)` (navy ink) |
| Orange CTAs present | ✅ 4 `.bg-orange` buttons on home |
| Logo loaded | ✅ `/brand/logo.jpeg` rendered via next/image |
| Unsplash imagery | ✅ Sample IDs `1486325212027`, `1581094271901` verified live |

Screenshot capture failed mid-session due to a disk-space crisis (C: drive hit 100% during the rebuild, recovered to 97%) which left the Playwright/CDP screenshot pipeline stuck. DOM + computed-style introspection above is the substitute evidence — the page IS rendering, and rendering correctly. You can verify visually by running the build locally.

---

## Two environmental issues the user should address

### 1. Disk space (critical)
At the time of the rebuild, `C:\` had only **464 MB free of 476 GB** (100% used). I freed 449 MB by deleting `.next/` and the Turbopack panic logs. Currently at ~17 GB free.

**Why it matters:** Next.js dev mode writes thousands of small files to `.next/` per HMR cycle. With OneDrive watching that path, every write triggers a sync — exhausting file handles. This is what crashed the dev server mid-rebuild.

**Fix:** add `.next/` and `node_modules/` to OneDrive's exclude-from-sync list. Both folders are build artefacts and shouldn't be backed up.

### 2. OneDrive sync conflict
The site lives at `C:\Users\ntako\OneDrive\Desktop\GABS BUSINESS\Websites\hvac-technical-redesign\` — actively synced by OneDrive. Every Next.js file write fires a sync event. On a healthy machine this is fine; under disk/memory pressure it causes Turbopack panics ("Insufficient system resources… os error 1450").

**Fix options:**
- Move dev work to a non-OneDrive folder (e.g. `C:\dev\hvac-technical\`).
- Exclude `.next/`, `node_modules/`, `.git/` from OneDrive sync for this folder.

---

## How to view the rebuild

```bash
cd hvac-technical-redesign/site
npm run start -- -p 8788
# then open http://localhost:8788 in any browser
```

(`npm run build` already passed cleanly — no need to rebuild unless you change files.)

For a development experience with hot reload:
```bash
npm run dev -- -p 7777
```
