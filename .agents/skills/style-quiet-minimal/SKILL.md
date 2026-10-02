---
name: style-quiet-minimal
description: Visual design skill for crafting content-first, low-distraction, highly readable interfaces inspired by ChatGPT, Claude, and Notion.
---

# Style: Quiet Minimal (Content-First & Invisible)

This skill governs the aesthetic and visual tokens for calm, distraction-free interfaces where the visual chrome recedes into the background so reading and intellectual focus take center stage.

---

## 1. Visual Personality & Vibe
- **Character:** Calm, focused, intellectual, understated, quiet.
- **Atmosphere:** A quiet library desk, an unadorned blank notebook page.
- **Reference Models:** ChatGPT (OpenAI), Claude (Anthropic), Notion, Perplexity.

---

## 2. Color Palette & Neutral Surfaces

Avoid bright, punchy, or playful colors. Stick to serene monochrome surfaces:

| Token / Layer | Light Mode | Dark Mode | Purpose |
|---|---|---|---|
| **App Canvas** | `#ffffff` (`bg-white`) | `#212121` (`bg-[#212121]`) | Main reading canvas |
| **Sidebar / Drawer** | `#f9f9f9` (`bg-[#f9f9f9]`) | `#171717` (`bg-[#171717]`) | Navigational history |
| **Input Box / Floating Bar** | `#ffffff` | `#2f2f2f` (`bg-[#2f2f2f]`) | Interactive floating dock |
| **Borders** | `rgba(0,0,0,0.08)` | `rgba(255,255,255,0.1)` | Subtle structural divider |
| **Text Primary** | `#0d0d0d` (`text-zinc-900`) | `#ececec` (`text-zinc-100`) | High-legibility prose |
| **Text Secondary** | `#676767` (`text-zinc-500`) | `#b4b4b4` (`text-zinc-400`) | Metadata, helper notes |

---

## 3. Shapes & Layout Rules

- **Content Centering & Measure Constraints:**
  - Reading container must be restricted: `max-w-3xl` (approx. 768px) centered with `mx-auto`.
  - Generous vertical whitespace (`py-8` to `py-12`).
- **Floating Input Capsule:**
  - Bottom input bar floats over the content with a soft blur backdrop:
    `rounded-3xl border border-black/10 dark:border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.05)] bg-white/95 dark:bg-[#2f2f2f]/95 backdrop-blur-md`
- **Minimal Borders & Low Shadows:**
  - Avoid multi-layer card shadows. Use flat surfaces separated by whitespace or single hairlines.

---

## 4. Typography & Prose Excellence

- **Font Family:** Clean, neutral sans-serif (Inter, Söhne-style, Helvetica Neue).
- **Prose Hierarchy:**
  - Generous paragraph line height: `leading-relaxed` or `leading-7`.
  - Code blocks: dark/neutral container with rounded corners (`rounded-xl`), copy button top-right, and monospace syntax highlighting.
  - Tables: clean horizontal dividing lines, unbordered vertical columns.

---

## 5. Responsive Architecture & Viewport Adaptability

Quiet, content-first interfaces must feel like reading an exquisite editorial journal regardless of whether the user is on a 360px smartphone, an iPad, or a high-resolution desktop monitor. Visual quietude requires zero unexpected horizontal scrollbars, zero cramped tap targets, and graceful typography degradation.

### Viewport Breakpoint Hierarchy (Mobile-First)

| Viewport | Tailwind Prefix | Layout Behavior & Adaptation |
|---|---|---|
| **Mobile Compact** (<640px) | default | Single column metrics (`grid-cols-1`). Period switchers collapse or scroll horizontally. Floating input capsule docks to bottom with fluid width (`w-[calc(100%-1.5rem)]`). Modals act as gentle bottom sheets (`rounded-t-3xl sm:rounded-2xl`). Tables wrap in horizontal scroll containers with preserved sticky header or metadata. |
| **Tablet / Mid** (640px – 1023px) | `sm:`, `md:` | 2-column metrics (`sm:grid-cols-2`). Sidebars collapse to minimal drawer. Editorial headers show full metadata and date stamps. |
| **Desktop & Wide** (1024px+) | `lg:`, `xl:` | Multi-column telemetry (`lg:grid-cols-4`). Max measure constrained to `max-w-4xl` or `max-w-5xl mx-auto px-6` to avoid over-extended line lengths and preserve quiet focus. |

### Responsive Rules & Guidelines

1. **Floating Capsule Docking:**
   - On compact screens, never fix width in pixels. Use:
     `fixed bottom-4 inset-x-3 sm:inset-x-auto sm:bottom-6 sm:left-1/2 sm:-translate-x-1/2 max-w-2xl w-[calc(100%-1.5rem)]`
   - Quick prompt / suggestion chips must scroll smoothly without scrollbars:
     `flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1 -mx-2 px-2`
2. **Tables & Ledger Architecture:**
   - Financial ledgers, transaction records, and comparison tables must reside inside an `overflow-x-auto` wrapper with `min-w-[480px]` or use responsive column visibility (`hidden sm:table-cell` for optional notes/intent) to prevent page blowout.
3. **Touch-First Accessibility (No Hover Dependency):**
   - Touchscreens lack cursor hover. Critical row actions (edit, delete, expand) must not rely on `opacity-0 group-hover:opacity-100` exclusively. Keep them visible with subtle contrast (`text-zinc-300 dark:text-zinc-600 sm:opacity-0 sm:group-hover:opacity-100`).
   - Tap targets must adhere to at least 40–44px bounds (`min-h-[40px] px-3`).
4. **Bottom Sheet Dialogs on Small Viewports:**
   - Modals should slide from the bottom on mobile devices:
     `flex items-end sm:items-center justify-center p-0 sm:p-4`
     `w-full max-w-md rounded-t-3xl sm:rounded-2xl p-5 sm:p-6 max-h-[90vh] overflow-y-auto`

---

## 6. Implementation Example (Responsive Quiet Container)

```tsx
<div class="mx-auto max-w-4xl px-3 sm:px-6 py-6 sm:py-10 space-y-6 sm:space-y-8">
  {/* Responsive Telemetry Grid */}
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
    <div class="border-l-2 border-black/10 dark:border-white/20 pl-3 sm:pl-4 py-0.5">
      <div class="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Consolidated Reserves</div>
      <div class="text-xl sm:text-2xl font-serif text-zinc-900 dark:text-zinc-100 mt-0.5">$184,320.00</div>
    </div>
  </div>

  {/* Floating Docked Input / Capsule */}
  <div class="fixed bottom-4 inset-x-3 sm:inset-x-auto sm:bottom-6 sm:left-1/2 sm:-translate-x-1/2 max-w-2xl w-[calc(100%-1.5rem)] z-40">
    <div class="flex items-center rounded-3xl border border-black/10 bg-white/95 px-3.5 py-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:border-white/10 dark:bg-[#2f2f2f]/95 backdrop-blur-md">
      <input 
        type="text" 
        placeholder="Record or ask anything..."
        class="w-full bg-transparent text-xs sm:text-sm text-zinc-900 outline-none placeholder:text-zinc-400 dark:text-zinc-100"
      />
      <button class="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-black text-white hover:opacity-85 dark:bg-white dark:text-black">
        <svg class="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  </div>
</div>
```

