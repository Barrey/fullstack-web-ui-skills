---
name: style-linear-dark
description: Visual design skill for crafting modern, developer-centric, ultra-sleek dark mode interfaces inspired by Linear, Raycast, Vercel, and Supabase.
---

# Style: Linear Dark (Modern Sleek Dev-Tool)

This skill governs the aesthetic and visual tokens for high-precision, sleek dark mode interfaces. It emphasizes understated elegance, crisp 1px borders, ambient glows, deep dark surfaces, and monospace accents.

---

## 1. Visual Personality & Vibe
- **Character:** Precision, high-tech, razor-sharp, minimal, professional.
- **Atmosphere:** Deep space, dark room monitor, glowing tactile edges.
- **Reference Models:** Linear.app, Raycast, Vercel Dashboard, Supabase Studio.

---

## 2. Color Palette & Surfaces

Never use pure black (`#000000`) for standard surface cards. Use layered neutral tones (Zinc / Neutral scale):

| Token / Layer | Hex / Tailwind | Purpose |
|---|---|---|
| **App Canvas / Page BG** | `#09090b` (`bg-zinc-950`) | Deep base background |
| **Card / Surface Default** | `#121215` / `#18181b` (`bg-zinc-900/60` or `bg-zinc-900`) | Main containers, panels |
| **Surface Elevated / Hover** | `#202024` (`bg-zinc-800/80`) | Dropdowns, popovers, hover states |
| **Primary Text** | `#f4f4f5` (`text-zinc-100`) | Headings, main text |
| **Secondary Text** | `#a1a1aa` (`text-zinc-400`) | Descriptions, subtitles |
| **Muted Text** | `#71717a` (`text-zinc-500`) | Timestamps, placeholders, shortcuts |
| **Primary Accent** | `#6366f1` / `#8b5cf6` (Indigo / Violet) | Primary buttons, active tabs, focus ring |
| **Success Accent** | `#10b981` (`emerald-500`) | Completed status, live indicators |

---

## 3. Borders, Depth & Glows

- **The "1px Hairline" Border Rule:**
  - Borders should be semi-transparent: `border border-white/10` or `border-zinc-800`.
  - On hover: transition to `border-white/20` or `border-zinc-700`.
- **Subtle Radial / Ambient Glows:**
  - Background radial gradients for hero or featured cards:
    `bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-zinc-900/0 to-transparent`
- **Soft Specular Top Border (Edge Highlight):**
  - Add an inset top border highlight to cards for subtle dimension:
    `box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.08);`

---

## 4. Typography & Monospace Accents

- **Primary Font:** Sans-serif with high legibility (Inter, Geist Sans, Outfit).
- **Monospace Accents:**
  - Use Monospace font (Geist Mono, JetBrains Mono) for:
    - Keyboard shortcuts: `<kbd class="px-1.5 py-0.5 text-xs font-mono bg-zinc-800 border border-zinc-700 rounded text-zinc-400">⌘K</kbd>`
    - IDs, commit hashes, timestamps, numbers, metrics.
    - Badges & status pills.

---

## 5. Shape, Radius & Components

- **Border Radius:**
  - Containers & Cards: `rounded-lg` (8px) or `rounded-xl` (12px).
  - Buttons & Inputs: `rounded-md` (6px) or `rounded-lg` (8px).
  - Status Badges / Tags: `rounded-full` (pill) or `rounded-md`.
- **Buttons:**
  - Primary: `bg-white text-zinc-950 font-medium hover:bg-zinc-200 active:scale-[0.98] transition-all`
  - Secondary/Ghost: `bg-zinc-900 border border-white/10 text-zinc-200 hover:bg-zinc-800/80 hover:border-white/20`
- **Tables & Lists:**
  - Divided by clean 1px lines (`divide-y divide-zinc-800/60`).
  - Row hover: `hover:bg-zinc-900/50 transition-colors`.

---

## 6. Implementation Example (Card)

```tsx
<div class="relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur-md transition-all duration-200 hover:border-white/20 hover:bg-zinc-900/90 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
  <div class="flex items-center justify-between mb-4">
    <span class="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
      <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
      Operational
    </span>
    <kbd class="rounded border border-zinc-700 bg-zinc-800 px-1.5 py-0.5 font-mono text-[10px] text-zinc-400">Ctrl + Shift + O</kbd>
  </div>
  <h3 class="text-lg font-semibold text-zinc-100 tracking-tight">System Performance</h3>
  <p class="mt-1 text-sm text-zinc-400 leading-relaxed">Latency average across 14 global edge nodes.</p>
</div>
```
