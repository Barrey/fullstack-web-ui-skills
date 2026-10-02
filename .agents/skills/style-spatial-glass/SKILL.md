---
name: style-spatial-glass
description: Visual design skill for crafting luminous, depth-focused, premium frosted glassmorphism interfaces inspired by macOS, Apple Web, Raycast, and VisionOS.
---

# Style: Spatial Glass (Frosted Glassmorphism & Modern Depth)

This skill governs the aesthetic and tokens for multi-layered, luminous, frosted glass interfaces. It emphasizes translucent depth, hairline specular highlights, ambient diffuse background lighting, and tactile physical layering.

---

## 1. Visual Personality & Vibe
- **Character:** Luminous, spatial, ethereal, high-craft, futuristic luxury.
- **Atmosphere:** macOS desktop, VisionOS spatial cards, high-end Apple hardware product showcase.
- **Reference Models:** Apple macOS Sonoma/Sequoia UI, Raycast Web, VisionOS UI guidelines, Arc Browser translucency.

---

## 2. Color Palette & Glass Surface Layers

Spatial Glass relies on ambient color light diffusing behind semi-transparent, frosted panels.

| Token / Layer | Tailwind Construct | Purpose |
|---|---|---|
| **Ambient Base Canvas** | `bg-slate-950` with radial light cones | Background depth layer |
| **Frosted Glass Panel** | `bg-white/10 dark:bg-slate-900/40 backdrop-blur-xl` | Primary card surface |
| **Elevated Glass Popover** | `bg-white/20 dark:bg-slate-800/60 backdrop-blur-2xl` | Modals, floating action docks |
| **Hairline Specular Border** | `border border-white/20 dark:border-white/10` | 1px translucent physical edge |
| **Specular Top Highlight** | `shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)]` | Subtle top edge light reflection |
| **Primary Text** | `text-slate-900 dark:text-white` | High-contrast readable typography |
| **Secondary Glass Text** | `text-slate-600 dark:text-white/70` | Subtitles, descriptions |
| **Vibrant Luminous Accent** | `bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500` | Highlights, active indicators |

---

## 3. The 3 Pillars of Glassmorphism

1. **Backdrop Blur with Semi-Transparency:**
   - Always pair `backdrop-blur-md` or `backdrop-blur-xl` with an opacity fill: `bg-white/70` (light mode) or `bg-slate-900/60` (dark mode). Never use 100% opacity, or the glass depth is lost.
2. **Hairline Specular Borders:**
   - Standard solid borders look flat. Use semi-transparent borders: `border border-white/20` or `border-black/5`.
3. **Ambient Background Glow Orbs:**
   - Place diffuse color circles behind the glass panels:
     ```html
     <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
       <div class="absolute -top-40 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
       <div class="absolute top-1/2 -right-20 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl"></div>
     </div>
     ```

---

## 4. Typography & Corner Sculpting

- **Corner Radii:**
  - Generous and sculpted: `rounded-2xl` (16px) or `rounded-3xl` (24px) for cards, `rounded-full` for floating capsules.
- **Typography:**
  - Neo-grotesque sans-serif with smooth letter-spacing: `Inter`, `SF Pro Display`, `Outfit`, `Plus Jakarta Sans`.

---

## 5. Responsive Architecture & Viewport Adaptability

Glassmorphism requires careful mobile adaptation because excessive `backdrop-blur` and complex shadows can tax mobile GPUs and degrade battery life if not optimized.

### Viewport Breakpoint Hierarchy

| Viewport | Tailwind Prefix | Spatial Glass Adaptation |
|---|---|---|
| **Mobile Compact** (<640px) | default | Reduce blur intensity (`backdrop-blur-md` instead of `backdrop-blur-2xl` for smooth 60fps scrolling). Cards stack vertically (`grid-cols-1`). Floating bottom dock pinned safely above mobile browser navigation bars with fluid width (`w-[calc(100%-2rem)] mx-auto`). Contrast boosted to maintain legibility in outdoor glare. |
| **Tablet** (640px – 1023px) | `sm:`, `md:` | 2-column glass grid (`sm:grid-cols-2`). Multi-layer modal dialogs center with `max-w-lg`. |
| **Desktop** (1024px+) | `lg:`, `xl:` | 3 or 4-column spatial grid. Full depth layer stacking with hover parallax lift (`hover:-translate-y-1 hover:shadow-2xl`). |

### Spatial Glass Responsive Rules

1. **Text Contrast Protection:**
   - Translucent backgrounds can cause low contrast if dynamic content scrolls underneath. Always maintain a minimum `bg-white/80` or `bg-slate-900/75` behind critical text blocks.
2. **Safe Padding for Floating Glass Docks:**
   - Floating action bars must include safe bottom padding: `pb-safe` or `bottom-5`, ensuring they never overlap home indicator bars on iOS/Android.
3. **Mobile Modal Bottom-Sheet Glass:**
   - On screens `<640px`, render modals sliding up from the bottom with `rounded-t-3xl border-t border-white/25 bg-slate-900/85 backdrop-blur-2xl`.

---

## 6. Implementation Example (Spatial Glass Card)

```tsx
<div class="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 dark:bg-slate-900/40 p-5 sm:p-6 backdrop-blur-xl shadow-xl shadow-black/5 dark:shadow-black/20">
  <!-- Specular top highlight reflection -->
  <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

  <div class="flex items-center justify-between">
    <div class="flex items-center gap-2.5">
      <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-400 to-indigo-500 p-0.5 shadow-md shadow-cyan-500/20">
        <div class="w-full h-full rounded-[10px] bg-slate-950/40 flex items-center justify-center text-white text-xs">
          ✦
        </div>
      </div>
      <div>
        <h4 class="font-semibold text-sm text-slate-900 dark:text-white">Spatial Vault</h4>
        <p class="text-[11px] text-slate-500 dark:text-white/60">Multi-Chain Custody</p>
      </div>
    </div>
    <span class="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-white/90">
      Synced
    </span>
  </div>

  <div class="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
    <span class="font-mono text-2xl font-bold tracking-tight text-slate-900 dark:text-white">$42,980.50</span>
    <button class="rounded-xl border border-white/20 bg-white/20 dark:bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-slate-900 dark:text-white backdrop-blur-md hover:bg-white/30 transition-all active:scale-95">
      Transfer
    </button>
  </div>
</div>
```
