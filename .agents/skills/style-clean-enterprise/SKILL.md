---
name: style-clean-enterprise
description: Visual design skill for crafting crisp, reliable, high-trust corporate SaaS and B2B web applications inspired by Stripe, GitHub, Retool, and TailwindUI.
---

# Style: Clean Enterprise (High-Trust B2B & Modern SaaS)

This skill governs the aesthetic and tokens for corporate-grade, reliable, and data-dense interfaces. It emphasizes structural clarity, neutral surfaces, subtle slate borders, accessible contrast ratios, and clear state indicators that convey financial security and institutional trust.

---

## 1. Visual Personality & Vibe
- **Character:** Reliable, crisp, structured, polished, authoritative, frictionless.
- **Atmosphere:** Modern corporate headquarters, institutional fintech portal, executive suite dashboard.
- **Reference Models:** Stripe Dashboard, GitHub Enterprise, Retool, Shopify Admin, TailwindUI Application UI.

---

## 2. Color Palette & Surface Tokens

Clean Enterprise relies on crisp white canvases, slate grays, and an authoritative primary brand color (typically Royal Blue, Deep Indigo, or Emerald Green).

| Token / Layer | Hex / Tailwind | Purpose |
|---|---|---|
| **Page Canvas / Base BG** | `#F8FAFC` (`bg-slate-50`) or `#F9FAFB` (`bg-gray-50`) | Neutral background separating page from cards |
| **Card / Surface Default** | `#FFFFFF` (`bg-white`) | Main data cards, tables, modal containers |
| **Surface Subdued / Input** | `#F1F5F9` (`bg-slate-100`) | Input fields, table header background, inactive tabs |
| **Border Neutral** | `#E2E8F0` (`border-slate-200`) | Standard 1px crisp separation |
| **Border Focused / Active** | `#94A3B8` (`border-slate-400`) | Input focus, active tab underline |
| **Primary Text (Heading)** | `#0F172A` (`text-slate-900`) | High-contrast readable typography |
| **Secondary Text (Body)** | `#334155` (`text-slate-700`) | Main descriptive text and table cells |
| **Muted Text (Metadata)** | `#64748B` (`text-slate-500`) | Timestamps, column headers, footnotes |
| **Primary Brand (Trust Blue)** | `#2563EB` (`bg-blue-600` / `hover:bg-blue-700`) | Primary actions, brand badge, focus rings |
| **Success State** | `#16A34A` (`text-emerald-600` / `bg-emerald-50`) | Paid, active, settled, healthy |
| **Warning State** | `#D97706` (`text-amber-600` / `bg-amber-50`) | Pending, reviewing, caution |
| **Danger State** | `#DC2626` (`text-rose-600` / `bg-rose-50`) | Failed, overdue, refunded, revoked |

---

## 3. Borders, Elevation & Shadows

- **The Crisp 1px Hairline Border:**
  - Standard card border: `border border-slate-200`
  - Subtle separator between table rows: `divide-y divide-slate-100`
- **Soft Diffusion Shadows (Never heavy or colored):**
  - Card base: `shadow-xs` or `shadow-sm` (`box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);`)
  - Elevated Popover / Modal: `shadow-lg` (`box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.03);`)
- **Corner Radii:**
  - Precise and disciplined: `rounded-lg` (8px) for cards, `rounded-md` (6px) for inputs and buttons, `rounded-full` for status badges.

---

## 4. Typography & Data Presentation

- **Primary Font:** Crisp neo-grotesque sans-serif (`Inter`, `Plus Jakarta Sans`, `Geist Sans`, `system-ui`).
- **Data Tables:**
  - Always give table headers subtle uppercase styling: `font-semibold text-xs text-slate-500 uppercase tracking-wider bg-slate-50/80`.
  - Tabular figures for monetary values: `font-mono tabular-nums text-slate-900 font-semibold`.
- **Status Pills:**
  - Enclosed pill format: `inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium`.
  - Prefix with a 6px solid dot: `<span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>`.

---

## 5. Responsive Architecture & Viewport Adaptability

Enterprise dashboards often suffer from dense data tables and complex filter bars collapsing poorly on mobile devices. Follow this mobile-first adaptation hierarchy:

### Viewport Breakpoint Hierarchy

| Viewport | Tailwind Prefix | Enterprise Adaptation |
|---|---|---|
| **Mobile Compact** (<640px) | default | Metric cards stack into 1 column (`grid-cols-1`). Data tables transform into **vertical stacked cards** or scroll horizontally within a clipped container with soft gradient fade edges. Multi-button toolbars collapse into a primary CTA and a `...` secondary menu dropdown. Modals render as full-width bottom sheets. |
| **Tablet** (640px – 1023px) | `sm:`, `md:` | 2-column KPI grid (`sm:grid-cols-2`). Sidebar navigation collapses into an icon rail or accessible drawer menu. Non-critical table columns (e.g. Creation Date, IP Address) hidden via `hidden md:table-cell`. |
| **Desktop** (1024px+) | `lg:`, `xl:` | 4-column metric grid (`lg:grid-cols-4`). Permanent left sidebar with nested navigation. Full table row visibility with multi-column sorting and bulk selection checkboxes. |

### Enterprise Responsive Rules

1. **Table Horizontal Overflow Strategy:**
   - Always wrap `<table>` inside an `overflow-x-auto border border-slate-200 rounded-lg`.
   - On mobile, provide a visual scroll indicator or switch to responsive list cards (`sm:hidden block`).
2. **Touch Targets for Form Controls:**
   - Buttons, selects, and inputs must maintain a minimum height of `h-10` (`40px`) or `h-11` (`44px`) on mobile devices to prevent accidental miss-clicks on financial actions.
3. **Filter Bar Wrapping:**
   - Filter inputs, date pickers, and export buttons should wrap cleanly (`flex flex-wrap items-center gap-2 sm:gap-3`) without clipping or horizontal page blowout.
4. **Accessible Contrast:**
   - Ensure all text has at least 4.5:1 contrast against `#FFFFFF` and `#F8FAFC`. Avoid ultra-light gray text.

---

## 6. Implementation Example (Enterprise KPI & Transaction Card)

```tsx
<div class="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
  <div class="flex items-center justify-between">
    <span class="text-xs font-semibold uppercase tracking-wider text-slate-500">Monthly Recurring Revenue</span>
    <span class="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700 border border-emerald-200/60">
      <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>
      +8.4%
    </span>
  </div>
  
  <div class="mt-3 flex items-baseline gap-2">
    <span class="font-mono text-3xl font-bold tracking-tight text-slate-900 tabular-nums">$128,450.00</span>
    <span class="text-xs font-medium text-slate-500">vs. $118,500.00 last month</span>
  </div>

  <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
    <span>Active Accounts: <strong class="text-slate-900 font-semibold">1,429</strong></span>
    <a href="#" class="font-semibold text-blue-600 hover:text-blue-700 hover:underline">View Ledger →</a>
  </div>
</div>
```
