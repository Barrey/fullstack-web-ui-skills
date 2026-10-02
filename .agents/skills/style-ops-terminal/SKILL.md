---
name: style-ops-terminal
description: Visual design skill for crafting high-density, real-time telemetry, cockpit, and observability dashboards inspired by Grafana, Datadog, Railway, and Bloomberg Terminal.
---

# Style: Ops Terminal (High-Density Telemetry & Cockpit)

This skill governs the aesthetic and tokens for high-density, real-time technical dashboards, server observability consoles, and telemetry cockpits. It prioritizes screen real-estate efficiency, zero wasted whitespace, monospace telemetry, and live status pulses.

---

## 1. Visual Personality & Vibe
- **Character:** Ultra-compact, technical, live, mission-critical, authoritative.
- **Atmosphere:** Server control room, flight telemetry deck, Bloomberg financial desk.
- **Reference Models:** Grafana, Datadog, Railway.app, Cloudflare Dashboard, TradingView, Bloomberg Terminal web clients.

---

## 2. Color Palette & Matte Surfaces

Ops Terminal uses a matte charcoal / dark zinc foundation (avoiding shiny plastic black or high-contrast glare), paired with industrial signal colors:

| Token / Layer | Hex / Tailwind | Purpose |
|---|---|---|
| **Console Base Canvas** | `#0D0E11` (`bg-[#0d0e11]`) | Industrial dark canvas |
| **Panel / Module Surface** | `#16181D` (`bg-[#16181d]`) | High-density telemetry cards |
| **Panel Border (Crisp Grid)**| `#242831` (`border-[#242831]`) | 1px technical wireframe separators |
| **Grid Guideline / Accent** | `#2C313D` (`border-[#2c313d]`) | Chart axes, table dividers |
| **Primary Telemetry Text** | `#F1F3F7` (`text-[#f1f3f7]`) | Monospace figures, key values |
| **Secondary Technical Text** | `#8B949E` (`text-[#8b949e]`) | Labels, units, timestamps, keys |
| **Signal Green (Online/Pass)**| `#00E599` (`text-[#00e599]` / `#00e5991a`) | Server nominal, 200 OK, healthy |
| **Signal Amber (Warn/Degraded)**| `#FFB020` (`text-[#ffb020]` / `#ffb0201a`) | Latency spike, 4xx errors, memory threshold |
| **Signal Red (Crit/Down)** | `#FF453A` (`text-[#ff453a]` / `#ff453a1a`) | 5xx errors, packet drop, node killed |
| **Signal Cyan (Telemetry)** | `#00D8F6` (`text-[#00d8f6]`) | Throughput, bandwidth, query rate |

---

## 3. Density & Layout Architecture

- **The "No Wasted Space" Rule:**
  - Card padding is compact: `p-2.5 sm:p-3` (never excessive `p-6` or `p-8`).
  - Gaps between modular panels are tight: `gap-2 sm:gap-2.5`.
  - Line heights are tight and precise: `leading-none` or `leading-tight`.
- **Status Beacons & Pulse Rings:**
  - Online nodes utilize a dual-ring pulsing dot:
    ```html
    <span class="relative flex h-2 w-2">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e599] opacity-75"></span>
      <span class="relative inline-flex rounded-full h-2 w-2 bg-[#00e599]"></span>
    </span>
    ```
- **Monospace Dominance:**
  - All numbers, IP addresses, hashes, dates, and metrics MUST use `font-mono tabular-nums`.
  - Preferred fonts: `JetBrains Mono`, `Geist Mono`, `Fira Code`.

---

## 4. Responsive Architecture & Viewport Adaptability

High-density dashboards naturally pack 6 to 12 modules per screen on dual 4K monitors. On mobile and tablet viewports, horizontal crowding causes text overlap if not reflowed deliberately.

### Viewport Breakpoint Hierarchy

| Viewport | Tailwind Prefix | Ops Terminal Adaptation |
|---|---|---|
| **Mobile Compact** (<640px) | default | Reflow multi-column bento grids into a **single stacked feed** (`grid-cols-1`). Chart sparklines maintain a fixed minimum height (`h-32`) to remain readable. Multi-metric summaries switch to compact key-value lists (`flex items-center justify-between text-xs py-1 border-b`). |
| **Tablet** (640px – 1023px) | `sm:`, `md:` | 2 or 3-column cockpit grid (`sm:grid-cols-2 md:grid-cols-3`). Sparkline charts expand to 50% width. Secondary diagnostics collapsible via toggle tabs. |
| **Desktop & Ultra-wide** (1024px+) | `lg:`, `xl:` | 4 to 6-column bento grid (`lg:grid-cols-4 xl:grid-cols-6`). Real-time live log streams and continuous graph feeds visible simultaneously. |

### Ops Terminal Responsive Rules

1. **Table Column Priority System:**
   - On `<640px` viewports, hide non-essential telemetry columns:
     - Always visible: `Service Name`, `Status Pill`, `Latency/Error%`.
     - Hidden on mobile (`hidden sm:table-cell`): `Node IP`, `Region`, `Uptime%`, `Thread Count`.
2. **Chart Container Safe Min-Width:**
   - Time-series sparklines or bar graphs must be wrapped in `overflow-x-auto scrollbar-none` if containing more than 24 time intervals, preventing crushed SVG graphs on 360px viewports.
3. **Touch Targets in Compact Space:**
   - Even in high-density UI, interactive controls (refresh button, node restart trigger, timeframe pills) must have a touch-safe boundary (`p-2` or minimum `min-h-[36px]`).

---

## 5. Implementation Example (Ops Node Monitor Module)

```tsx
<div class="rounded border border-[#242831] bg-[#16181d] p-3 shadow-xs font-mono text-xs">
  <!-- Module Header -->
  <div class="flex items-center justify-between pb-2 border-b border-[#242831]">
    <div class="flex items-center gap-2">
      <span class="relative flex h-2 w-2">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e599] opacity-75"></span>
        <span class="relative inline-flex rounded-full h-2 w-2 bg-[#00e599]"></span>
      </span>
      <span class="font-bold text-[#f1f3f7] uppercase tracking-wide">CLUSTER-US-EAST-1A</span>
    </div>
    <span class="text-[10px] text-[#8b949e]">SYNC 1.2s AGO</span>
  </div>

  <!-- Telemetry Metrics Grid -->
  <div class="mt-2.5 grid grid-cols-2 sm:grid-cols-3 gap-2">
    <div class="p-2 rounded bg-[#0d0e11] border border-[#242831]">
      <div class="text-[10px] text-[#8b949e] uppercase">CPU LOAD</div>
      <div class="text-base font-bold text-[#00e599] tabular-nums mt-0.5">34.2%</div>
    </div>
    <div class="p-2 rounded bg-[#0d0e11] border border-[#242831]">
      <div class="text-[10px] text-[#8b949e] uppercase">RAM USAGE</div>
      <div class="text-base font-bold text-[#ffb020] tabular-nums mt-0.5">78.4%</div>
    </div>
    <div class="p-2 rounded bg-[#0d0e11] border border-[#242831] col-span-2 sm:col-span-1">
      <div class="text-[10px] text-[#8b949e] uppercase">LATENCY (P99)</div>
      <div class="text-base font-bold text-[#00d8f6] tabular-nums mt-0.5">14.8ms</div>
    </div>
  </div>

  <!-- Mini Sparkline Activity Bar -->
  <div class="mt-2.5 pt-2 border-t border-[#242831] flex items-center justify-between text-[10px] text-[#8b949e]">
    <span>Throughput: <strong class="text-[#f1f3f7]">4.8k req/s</strong></span>
    <span class="text-[#00e599]">0.00% ERR</span>
  </div>
</div>
```
