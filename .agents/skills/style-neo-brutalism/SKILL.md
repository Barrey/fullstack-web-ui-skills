---
name: style-neo-brutalism
description: Visual design skill for crafting high-energy, bold, tactile, retro-modern interfaces with thick borders and hard offset drop shadows inspired by Gumroad and modern indie web design.
---

# Style: Neo-Brutalism (Bold, Tactile & Structurally Formal)

This skill governs the aesthetic and tokens for high-contrast, energetic, punchy, and tactile interfaces that blend modern graphic impact with **clean, formal structural discipline**.

---

## 1. Visual Personality & Vibe
- **Character:** Bold, confident, high-contrast, tactile, yet **strictly structured and formal**.
- **Atmosphere:** High-end indie SaaS, modern engineering tool, retro-modern editorial, Swiss graphic precision.
- **Reference Models:** Gumroad (modern refresh), Linear/Supabase brutalist experiments, Figma blog, Pitch marketing pages.
- **Core Philosophy:** Neo-Brutalism derives its punch from **high-contrast color blocks, thick borders, and zero-blur hard shadows**—NOT from chaotic angles or messy layouts.

---

## 2. The 3 Golden Rules of Neo-Brutalism

1. **Thick Black Borders:** Almost every card, button, tag, and modal has a `2px` or `3px` solid black border (`border-2 border-black` or `border-[3px] border-black`).
2. **Hard Offset Drop Shadows (Zero Blur):** Never use fuzzy gaussian blur shadows. Shadows are solid black offset rectangles:
   - Default: `shadow-[4px_4px_0px_0px_#000]`
   - Heavy/Featured: `shadow-[6px_6px_0px_0px_#000]`
   - Small/Input: `shadow-[2px_2px_0px_0px_#000]`
3. **High-Contrast Pop Colors:** High saturation pastel or neon tones (Yellow `#FFE600`, Pink `#FF69B4`, Mint `#70FFAF`, Lilac `#A388EE`, Cyan `#00F0FF`) paired against pure white and pitch black.

---

## 3. Structural Formality & The "No-Rotation" Rule

> [!IMPORTANT]
> **Strict Rule on Container Rotation:**
> **DO NOT** rotate containers, cards, divs, badges, mascot boxes, or buttons (avoid `rotate-1`, `-rotate-2`, `rotate-3`, or `transform: rotate(...)`) **unless the user explicitly requests rotated/tilted elements**.
> 
> Neo-brutalist interfaces must maintain a **formal, reliable, orthogonal grid foundation**:
> - All containers and cards remain strictly **horizontal and vertical (0deg)**.
> - Alignment, borders, and margins must feel rock-solid, professional, and accessible.
> - Graphic energy comes from punchy color blocking, heavy typography, and tactile press mechanics—not tilted angles.

---

## 4. Shapes & Interaction Physics

- **Sharp or Slight Radius:**
  - Standard: `rounded-none` (0px sharp geometric) or `rounded-lg` / `rounded-xl` (8px to 12px max).
- **Physical "Press Down" Button Effect:**
  - On hover: slightly deeper offset (`hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_#000]`).
  - On active / click: button actually presses into the shadow:
    `active:translate-x-[3px] active:translate-y-[3px] active:shadow-none`
- **Badges & Category Pills:**
  - Flat, crisp rectangular or pill borders (`border-2 border-black px-2.5 py-0.5 font-black uppercase text-[10px] sm:text-xs`).
  - Strictly horizontal with no tilt.

---

## 5. Typography & Graphic Accents

- **Headings:** Heavy, punchy grotesque sans-serif (Space Grotesk, Archivo Black, Syne, Clash Display).
- **Telemetry / Figures:** High-contrast monospaced font (JetBrains Mono, Roboto Mono).
- **Graphic Accents:**
  - Starburst glyphs (`★`, `✦`, `⚡`).
  - Subtle retro diagonal stripes (`repeating-linear-gradient(-45deg, ...)`).
  - High-visibility status dots (`w-2.5 h-2.5 rounded-full bg-black`).

---

## 6. Responsive Architecture & Viewport Adaptability

Neo-Brutalist interfaces use hard offset shadows (`3px` to `6px`) and thick black borders (`2px` to `3px`). When kept strictly orthogonal (unrotated), layouts are much easier to align, calculate, and adapt cleanly.

### Viewport Breakpoint Hierarchy (Mobile-First)

| Viewport | Tailwind Prefix | Neo-Brutalism Adaptation |
|---|---|---|
| **Mobile Compact** (<640px) | default | Single column (`grid-cols-1`). Offset shadows scaled down (`shadow-[3px_3px_0px_0px_#000]`) to conserve screen real estate. Modals act as brutalist **bottom sheets** (`border-t-3 border-x-3 sm:border-3 border-black rounded-t-2xl sm:rounded-xl`). Floating capsules have fluid width (`w-[calc(100%-1.5rem)]`). **Zero rotation** guarantees no collision or edge clipping on narrow 360px screens. |
| **Tablet / Phablet** (640px – 1023px) | `sm:`, `md:` | 2-column grids (`sm:grid-cols-2`). Standard shadows (`shadow-[4px_4px_0px_0px_#000]`). Header actions collapse gracefully. |
| **Desktop & Wide** (1024px+) | `lg:`, `xl:` | 3 or 4-column grids (`lg:grid-cols-3 xl:grid-cols-4`). Deep physical drop shadows (`shadow-[6px_6px_0px_0px_#000]`). Maximum measure constrained to `max-w-6xl mx-auto px-6` or `max-w-7xl mx-auto px-8`. |

### Neo-Brutalist Responsive Rules

1. **Compensate for Hard Shadows in Container Padding:**
   - Because hard shadows project outside bounding boxes by 3px–6px, containers must always have safe margins: `px-3 sm:px-6` and avoid elements touching the right viewport boundary.
2. **Tactile Press Physics on Touch Devices:**
   - Touch devices trigger `:active` states. Ensure buttons retain tactile feedback:
     `active:translate-x-[2px] active:translate-y-[2px] active:shadow-none min-h-[44px] min-w-[44px]`
3. **Responsive Tables & Horizontal Overflow:**
   - Brutalist tables with thick cell borders must be enclosed in an `overflow-x-auto scrollbar-none` wrapper with `min-w-[480px]` or responsive cell visibility (`hidden sm:table-cell`).
4. **Bottom Sheet Modals with Hard Borders:**
   - On small screens, slide dialogs up from the bottom with thick top/side borders:
     `flex items-end sm:items-center justify-center p-0 sm:p-4`
     `w-full max-w-md border-t-3 border-x-3 sm:border-3 border-black rounded-t-2xl sm:rounded-xl shadow-[0_-4px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000]`

---

## 7. Implementation Example (Formal Neo-Brutalist Card)

```tsx
<div class="relative rounded-xl border-2 sm:border-3 border-black bg-white p-4 sm:p-6 shadow-[3px_3px_0px_0px_#000] sm:shadow-[5px_5px_0px_0px_#000] transition-all">
  <!-- Strictly horizontal badge with zero rotation -->
  <div class="inline-block rounded-md border-2 border-black bg-[#FFE600] px-2.5 sm:px-3 py-0.5 sm:py-1 font-black text-[10px] sm:text-xs uppercase tracking-wider text-black shadow-[1px_1px_0px_#000]">
    ENTERPRISE TIER ★
  </div>
  
  <h3 class="mt-3 sm:mt-4 text-xl sm:text-2xl font-black tracking-tight text-black">Workflow Automator Pro</h3>
  <p class="mt-2 text-xs sm:text-sm font-bold text-black/80 leading-relaxed">Turn manual data pipeline tasks into structured, bulletproof jobs.</p>
  
  <div class="mt-5 sm:mt-6 flex items-center justify-between gap-3 pt-4 border-t-2 border-black/15">
    <span class="text-xl sm:text-2xl font-black font-mono text-black">$49.00</span>
    <button class="rounded-lg border-2 border-black bg-[#70FFAF] px-4 sm:px-5 py-2 sm:py-2.5 font-black text-xs sm:text-sm text-black shadow-[2px_2px_0px_0px_#000] sm:shadow-[3px_3px_0px_0px_#000] transition-all hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none min-h-[44px] flex items-center justify-center">
      Get Access ⚡
    </button>
  </div>
</div>
```
