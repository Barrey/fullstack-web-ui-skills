---
name: style-playful-creative
description: Visual design skill for crafting friendly, energetic, approachable, and vibrant interfaces inspired by Canva, Duolingo, and Lemon Squeezy.
---

# Style: Playful Creative (Friendly & Vibrant)

This skill governs the aesthetic and visual tokens for warm, welcoming, delightfully tactile, and approachable interfaces. It turns complex tools into friendly experiences using vibrant gradients, high-radius curves, and joyful micro-interactions.

---

## 1. Visual Personality & Vibe
- **Character:** Welcoming, energetic, cheerful, forgiving, encouraging.
- **Atmosphere:** Creative playground, sunny workshop, vibrant studio.
- **Reference Models:** Canva, Lemon Squeezy, Duolingo, Whimsical, Miro.

---

## 2. Color Palette & Gradients

Rich, saturated accents paired with soft, warm neutral backgrounds (never cold harsh grays):

| Token / Layer | Hex / Tailwind | Purpose |
|---|---|---|
| **Canvas Background** | `#f8fafc` (`bg-slate-50`) or `#fafaf9` (`bg-stone-50`) | Soft, warm, low-glare canvas |
| **Surface Card** | `#ffffff` (`bg-white`) | Clean white cards with soft shadows |
| **Primary Gradient** | `from-cyan-400 to-violet-600` or `from-purple-500 to-indigo-600` | Hero banners, CTAs, highlight badges |
| **Brand Purple** | `#7c3aed` (`violet-600`) | Main brand accent & action color |
| **Brand Teal / Cyan** | `#06b6d4` (`cyan-500`) | Secondary energetic highlight |
| **Delight Yellow / Gold** | `#f59e0b` (`amber-500`) | Gamification badges, stars, celebrations |
| **Text Primary** | `#0f172a` (`slate-900`) | Dark, readable, high-contrast headings |
| **Text Secondary** | `#475569` (`slate-600`) | Descriptive, friendly copy |

---

## 3. Shapes, Radius & Tactile Shadows

- **Generous Border Radius:**
  - Cards: `rounded-2xl` (16px) or `rounded-3xl` (24px).
  - Buttons & Inputs: `rounded-xl` (12px) or `rounded-full` (pills).
  - Floating Toolbars: `rounded-full` or `rounded-2xl`.
- **Tactile "Lifted" Drop Shadows:**
  - Soft, colored, or diffused multi-layer shadows that make cards look like physical tiles:
    `shadow-[0_10px_25px_-5px_rgba(124,58,237,0.1),_0_8px_10px_-6px_rgba(0,0,0,0.04)]`
  - Hover state: Card subtly lifts up (`-translate-y-1`) with a richer shadow.

---

## 4. Typography & Voice

- **Headings:** Rounded, punchy sans-serif (Plus Jakarta Sans, Outfit, Poppins, or Nunito).
- **Style:**
  - Generous font weight for headings (`font-bold` / `font-extrabold`).
  - Warm, conversational microcopy: e.g., *"What will you create today?"*, *"Looking good!"*, *"Almost there!"*.

---

## 5. Components & UI Patterns

- **Catalog / Card Tiles:**
  - Image/thumbnail heavy cards with aspect-ratios (16:9, 1:1, 4:5).
  - Floating action buttons on card hover (e.g., bookmark, preview).
- **Buttons & CTAs:**
  - Gradient buttons with smooth hover brightness:
    `bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all`
- **Chips & Filters:**
  - Pill-shaped buttons (`rounded-full px-4 py-2 text-sm font-medium`) with warm pastel backgrounds when inactive, and gradient/solid when active.

---

## 6. Responsive Architecture & Viewport Adaptability

Playful interfaces must feel just as tactile, bouncy, and delightful on a 360px smartphone as they do on a 4K display. Never allow content to clip, overflow horizontally, or produce awkward line breaks.

### Viewport Breakpoint Hierarchy (Mobile-First)

| Viewport | Tailwind Prefix | Layout Behavior & Adaptation |
|---|---|---|
| **Mobile Compact** (<640px) | default | Single column (`grid-cols-1`). Modals act as **bottom sheets** (`rounded-t-3xl sm:rounded-3xl`). Floating capsules stick to bottom with horizontal scroll or auto-collapse. Header actions collapse to icon-only or dropdown. Minimum 44px touch targets. |
| **Tablet / Phablet** (640px – 1023px) | `sm:`, `md:` | 2-column grids (`sm:grid-cols-2`). Banners switch from stacked to row layouts. Navigation drawers or top bars adapt gracefully. |
| **Desktop & Large** (1024px+) | `lg:`, `xl:` | 3 or 4-column grids (`lg:grid-cols-3 xl:grid-cols-4`). Max measure constrained with `max-w-6xl` or `max-w-7xl mx-auto px-6`. Full multi-axis telemetry and visual sidebars. |

### Responsive Rules & Best Practices

1. **Fluid Fluidity over Fixed Widths:**
   - Never use hardcoded widths (e.g. `w-[500px]`). Use fluid widths: `w-full max-w-md mx-auto`.
   - Floating docks and capsules: Use `fixed bottom-4 inset-x-3 sm:inset-x-auto sm:bottom-6 sm:left-1/2 sm:-translate-x-1/2 max-w-xl w-[calc(100%-1.5rem)]`.
2. **Touch-First Accessibility (No Hover Exclusivity):**
   - On touchscreens (`hover:` states do not exist). Never hide essential actions behind `opacity-0 group-hover:opacity-100` without providing a visible tap alternative.
   - All interactive chips, buttons, and close triggers must meet WCAG 44×44px tap target guidelines (`min-h-[44px]` or `p-2.5`).
3. **Responsive Visualizations (Charts & Graphs):**
   - SVGs must use `viewBox` and `preserveAspectRatio="none"` or `preserveAspectRatio="xMidYMid meet"` inside a container with `w-full overflow-x-auto` or auto-collapsing columns.
   - On compact screens (<640px), show key aggregated values with a simplified sparkline or scrollable graph rather than cramped, overlapping tick labels.
4. **Bottom-Sheet Modals on Mobile:**
   - Dialogs should slide up from the bottom on phones (`items-end sm:items-center`, `rounded-t-3xl sm:rounded-3xl`, `max-h-[90vh] overflow-y-auto`).
5. **Horizontal Scroll Chips with Zero Scrollbars:**
   - Filter chips and quick actions should scroll smoothly horizontally: `flex items-center gap-2 overflow-x-auto scrollbar-none py-1 -mx-4 px-4 sm:mx-0 sm:px-0`.

---

## 7. Implementation Example (Responsive Tactile Feature Card)

```tsx
<div class="group relative rounded-2xl sm:rounded-3xl bg-white p-4 sm:p-6 shadow-sm border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10">
  <div class="flex items-start sm:items-center justify-between gap-4">
    <div class="flex items-center gap-3 sm:gap-4">
      <div class="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-tr from-violet-600 to-cyan-400 text-white shadow-md shadow-violet-500/30">
        <svg class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </div>
      <div>
        <span class="inline-block rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] sm:text-xs font-bold text-amber-700">Popular</span>
        <h3 class="text-base sm:text-lg font-bold text-slate-900 group-hover:text-violet-600 transition-colors">Instant Template Generator</h3>
      </div>
    </div>
    <!-- Responsive Action Button (always accessible on touch) -->
    <button class="shrink-0 p-2 sm:px-4 sm:py-2 rounded-xl bg-slate-100 hover:bg-violet-600 hover:text-white text-slate-700 font-bold text-xs transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
      <span class="hidden sm:inline">Use Template</span>
      <span class="sm:hidden">→</span>
    </button>
  </div>
  <p class="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">Turn rough ideas into polished visual assets in seconds.</p>
</div>
```

