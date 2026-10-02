---
name: style-cyberpunk-hud
description: Visual design skill for crafting high-energy, futuristic, neon HUD and dark sci-fi interfaces with chamfered geometry and terminal glows inspired by Web3 dApps, gaming portals, and esports telemetry.
---

# Style: Cyberpunk HUD (Futuristic Sci-Fi & Neon Interface)

This skill governs the aesthetic and tokens for high-voltage, dark sci-fi, and futuristic HUD (Heads-Up Display) interfaces. It features pitch-black void surfaces, glowing neon edges, chamfered corner geometry, monospace coordinates, and tactical telemetry framing.

---

## 1. Visual Personality & Vibe
- **Character:** High-energy, futuristic, tactical, technical, edgy, kinetic.
- **Atmosphere:** Cyberpunk command bridge, mecha pilot cockpit, Web3 decentralized protocol console.
- **Reference Models:** Cyberpunk 2077 UI, Uniswap visual labs, Star Atlas, futuristic esports analytics, GitHub Universe sci-fi themes.

---

## 2. Color Palette & Neon Signal Tokens

Cyberpunk HUD lives in deep space voids with hyper-saturated neon lasers piercing through:

| Token / Layer | Hex / Tailwind | Purpose |
|---|---|---|
| **Deep Void Canvas** | `#05070E` (`bg-[#05070e]`) | Absorptive space black background |
| **HUD Panel Surface** | `#0C101D` (`bg-[#0c101d]`) | High-tech tactical card surface |
| **Panel Border Wireframe** | `#1E293B` (`border-slate-800`) | Structural frame |
| **Neon Cyan (Primary)** | `#00F0FF` (`text-[#00f0ff]`) | Radar scans, telemetry, key actions |
| **Neon Lime (Nominal/Active)**| `#39FF14` (`text-[#39ff14]`) | Online protocols, liquidity flow, positive yield |
| **Hot Magenta (Alert/Action)** | `#FF007A` (`text-[#ff007a]`) | Critical alerts, high risk, execute trade |
| **Neon Amber (Warning)** | `#FFB800` (`text-[#ffb800]`) | Gas fee surge, chain reorg, thermal warning |
| **Muted HUD Coordinate** | `#475569` (`text-slate-600`) | Lat/long coordinates, hex hashes, grid lines |

---

## 3. Chamfered Corners & Tactical Borders

- **Chamfered 45° Clipped Corners:**
  - Distinct tactical look created via CSS `clip-path`:
    ```css
    .hud-chamfer {
      clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
    }
    ```
- **Neon Outer Glows:**
  - Interactive hover and active focus states with zero-blur core and outer diffuse laser glow:
    `box-shadow: 0 0 16px -2px rgba(0, 240, 255, 0.45);`
- **Corner Brackets / Crosshairs:**
  - Panels accented with tactile corner ticks (`+` or `L` bracket shapes) indicating targeting lock:
    ```html
    <div class="relative border border-slate-800 bg-[#0c101d] p-4">
      <div class="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-[#00f0ff]"></div>
      <div class="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-[#00f0ff]"></div>
      <!-- content -->
    </div>
    ```

---

## 4. Typography & Telemetry Markers

- **Primary Heading:** Bold, geometric sans-serif or sci-fi display font (`Space Grotesk`, `Orbitron`, `Syne`).
- **Telemetry Figures:** Crisp monospace (`JetBrains Mono`, `Share Tech Mono`).
- **Data Callouts:** Always prefix with technical tags (e.g. `// SYS.01`, `TARGET_LOCK`, `NODE_HASH`).

---

## 5. Responsive Architecture & Viewport Adaptability

Neon glows and clipped corner geometry can cause horizontal scrollbar leaks on small viewports if bounding boxes extend beyond screen edges.

### Viewport Breakpoint Hierarchy

| Viewport | Tailwind Prefix | Cyberpunk HUD Adaptation |
|---|---|---|
| **Mobile Compact** (<640px) | default | Glow radius scaled down (`box-shadow: 0 0 8px`) to prevent edge spill. Panels stack in 1 column (`grid-cols-1`). Corner bracket markers tucked inside container borders (`top-0 left-0` rather than negative offsets) to avoid 360px viewport horizontal clipping. |
| **Tablet** (640px – 1023px) | `sm:`, `md:` | 2-column tactical grid (`sm:grid-cols-2`). HUD radar status bars span 100% width above the primary telemetry feed. |
| **Desktop** (1024px+) | `lg:`, `xl:` | 3 or 4-column battle station cockpit. Holographic animated grid overlays and ambient neon flares visible. |

### Cyberpunk HUD Responsive Rules

1. **Negative Margin & Absolute Overflow Protection:**
   - Never allow corner decorative crosshairs or brackets to overflow container width (`overflow-hidden` or clamp positions within borders).
2. **Accessible Contrast in High-Glow Environments:**
   - Avoid placing neon cyan text over neon magenta backgrounds. Always preserve high contrast by keeping cards on deep absorptive black (`#0C101D`).
3. **Mobile Touch Targets for Tactical Buttons:**
   - Clipped/chamfered buttons must have a minimum clickable area of `44px x 44px` even if the visual polygon looks angular and sharp.

---

## 6. Implementation Example (Cyberpunk Protocol HUD Card)

```tsx
<div class="relative rounded-lg border border-cyan-500/30 bg-[#0c101d] p-5 shadow-[0_0_15px_rgba(0,240,255,0.15)] font-mono">
  <!-- Tactical Corner Crosshairs -->
  <div class="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#00f0ff]"></div>
  <div class="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#00f0ff]"></div>

  <div class="flex items-center justify-between text-xs pb-3 border-b border-slate-800">
    <div class="flex items-center gap-2">
      <span class="inline-block w-2 h-2 bg-[#39ff14] shadow-[0_0_8px_#39ff14]"></span>
      <span class="font-bold text-[#00f0ff] uppercase tracking-wider">// PROTOCOL: ZERO_KNOWLEDGE</span>
    </div>
    <span class="text-[10px] text-slate-500">BLOCK #1984201</span>
  </div>

  <div class="mt-4 flex items-baseline justify-between">
    <div>
      <div class="text-[10px] uppercase text-slate-400">Total Value Locked</div>
      <div class="mt-1 text-2xl sm:text-3xl font-bold text-white tracking-tight tabular-nums">
        $1,429,800.00
      </div>
    </div>
    <span class="text-xs font-bold text-[#39ff14] bg-[#39ff14]/10 border border-[#39ff14]/30 px-2 py-0.5 rounded">
      +28.4% APY
    </span>
  </div>

  <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
    <span class="text-[11px] text-slate-500">GAS: <strong class="text-white">12 Gwei</strong></span>
    <button class="relative px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-black bg-[#00f0ff] hover:bg-[#00f0ff]/90 shadow-[0_0_12px_#00f0ff] active:scale-95 transition-all">
      EXECUTE SWAP ⚡
    </button>
  </div>
</div>
```
