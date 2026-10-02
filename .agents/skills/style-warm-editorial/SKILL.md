---
name: style-warm-editorial
description: Visual design skill for crafting content-first, sophisticated, warm paper-textured interfaces with Swiss typographical discipline inspired by Substack, Medium, ReadCV, and modern digital journalism.
---

# Style: Warm Editorial (Swiss Typographical & Paper Canvas)

This skill governs the aesthetic and tokens for intellectual, human-centric, content-focused interfaces. It marries warm paper-like surfaces, elegant modern serif headings, hairline dividers, and generous negative space with Swiss grid precision.

---

## 1. Visual Personality & Vibe
- **Character:** Thoughtful, literary, timeless, artisanal, elegant, deeply legible.
- **Atmosphere:** Independent bookshop, classic Swiss design museum, premium Sunday magazine.
- **Reference Models:** Substack, The New York Times digital, ReadCV, Kinfolk, Medium, Linear's editorial announcements.

---

## 2. Color Palette & Warm Paper Surfaces

Warm Editorial rejects cold, clinical tech grays in favor of warm stone, paper, parchment, and deep ink tones:

| Token / Layer | Hex / Tailwind | Purpose |
|---|---|---|
| **Parchment Base Canvas** | `#FBF9F5` (`bg-[#fbf9f5]`) | Warm off-white paper canvas |
| **Card / Column Surface** | `#FFFFFF` (`bg-white`) | Clean paper sheet |
| **Warm Neutral Inset** | `#F3EFE6` (`bg-[#f3efe6]`) | Quotes, footnotes, code excerpts, active filters |
| **Hairline Ink Divider** | `#E5E0D8` (`border-[#e5e0d8]`) | 1px subtle rule separating sections |
| **Primary Text (Deep Ink)** | `#1C1917` (`text-stone-900`) | Rich charcoal-black typography |
| **Secondary Text (Warm Charcoal)**| `#44403C` (`text-stone-700`) | Body reading prose |
| **Muted Caption (Earth Stone)**| `#78716C` (`text-stone-500`) | Dates, authors, reading time |
| **Editorial Accent (Terracotta/Sage)**| `#C25E3E` or `#4A6B53` | Highlight markers, bookmarked tags |

---

## 3. Typographical Hierarchy & Pairings

The signature of Warm Editorial is the high-contrast pairing between a literary serif and a clean, technical sans:

- **Headings (Literary Serif):**
  - Preferred fonts: `Newsreader`, `Fraunces`, `Playfair Display`, `Charter`, `Lora`.
  - Style: `font-serif font-normal sm:font-medium tracking-tight leading-snug`.
- **Prose & Data (Technical Sans):**
  - Preferred fonts: `Inter`, `Geist Sans`, `Plus Jakarta Sans`.
  - Style: `font-sans leading-relaxed text-stone-700`.
- **Metadata & Pull Quotes:**
  - Subtle uppercase: `text-[11px] font-sans font-semibold uppercase tracking-widest text-stone-500`.

---

## 4. Dividers, Borders & Shadows

- **Hairline Dividers (No Heavy Boxes):**
  - Cards often avoid heavy box shadows completely, relying on delicate hairline borders: `border border-[#e5e0d8]`.
- **Negative Space as Design Element:**
  - Content breathes with generous vertical padding: `py-8 sm:py-12`.
- **Soft Editorial Shadows:**
  - When elevation is needed: `box-shadow: 0 4px 20px -2px rgba(28, 25, 23, 0.04);`.

---

## 5. Responsive Architecture & Viewport Adaptability

Editorial layouts must preserve comfortable reading line-lengths (55 to 75 characters per line) and legible font sizes across narrow phone viewports.

### Viewport Breakpoint Hierarchy

| Viewport | Tailwind Prefix | Warm Editorial Adaptation |
|---|---|---|
| **Mobile Compact** (<640px) | default | Headlines scale down smoothly (`text-2xl sm:text-4xl`) to prevent awkward single-word line breaks. Side-by-side author and date columns stack vertically. Generous horizontal margins (`px-4 sm:px-8`) create a clean book-margin framing on phone screens. |
| **Tablet** (640px – 1023px) | `sm:`, `md:` | 2-column editorial grid. Asymmetric layouts (e.g. 1/3 sidebar index and 2/3 article feed). |
| **Desktop** (1024px+) | `lg:`, `xl:` | 3-column broadsheet layout with sticky Table of Contents or author footnotes. Max measure constrained to `max-w-4xl` for optimal reading flow. |

### Warm Editorial Responsive Rules

1. **Optimal Reading Measure Constraint:**
   - Long-form article text should NEVER stretch across the full width of a 1440px desktop screen. Constrain reading containers to `max-w-2xl` or `max-w-prose mx-auto`.
2. **Serif Font Scaling on Mobile:**
   - High-contrast display serifs can become spindly and illegible at small sizes. Ensure body text remains sans-serif (`text-sm sm:text-base`) while keeping serif for titles `text-xl` and above.
3. **Table & Figure Presentation:**
   - Tables in an editorial context should use clean horizontal hairline rules with zero vertical column borders (`border-b border-[#e5e0d8]`). Enclose in `overflow-x-auto`.

---

## 6. Implementation Example (Editorial Essay & Data Card)

```tsx
<article class="rounded-xl border border-[#e5e0d8] bg-white p-6 sm:p-8 shadow-xs">
  <div class="flex items-center justify-between border-b border-[#e5e0d8] pb-3 text-[11px] font-sans font-semibold uppercase tracking-widest text-stone-500">
    <span>Vol. IV // Economic Review</span>
    <time datetime="2026-10-02">October 2, 2026</time>
  </div>

  <h2 class="mt-4 font-serif text-2xl sm:text-3xl font-medium tracking-tight text-stone-900 leading-snug">
    The Quiet Architecture of Capital Preservation
  </h2>
  
  <p class="mt-3 font-sans text-sm sm:text-base text-stone-700 leading-relaxed">
    In an era defined by high-frequency market velocity, enduring financial security stems from deliberate inaction and structured margin-of-safety buffers.
  </p>

  <div class="mt-6 pt-4 border-t border-[#e5e0d8] flex items-center justify-between text-xs font-sans text-stone-600">
    <div class="flex items-center gap-2">
      <span class="w-6 h-6 rounded-full bg-[#f3efe6] flex items-center justify-center font-serif text-xs font-medium text-stone-800">§</span>
      <span class="font-medium text-stone-800">Written by Marcus Vance</span>
    </div>
    <span class="text-stone-400">6 min read</span>
  </div>
</article>
```
