---
name: landing-page-anatomy
description: Structural layout skill defining high-conversion marketing landing page anatomy (Hero, Social Proof, Bento Grids, Alternating Features, Pricing Matrices, Testimonials, FAQs, and Closing CTAs). Pairable with any visual design style.
---

# Skill: Landing Page Anatomy Patterns

This skill governs the **structural hierarchy, component anatomy, and high-conversion flow** for modern marketing landing pages. It focuses strictly on information architecture, persuasive layout flow, and responsive grid choreography.

> [!TIP]
> **Orthogonal Pairing:** This skill is deliberately style-agnostic. Combine it with any visual theme skill (e.g., `/style-linear-dark`, `/style-spatial-glass`, `/style-clean-enterprise`, or `/style-warm-editorial`) to inject specific colors, typography, borders, and ambient lighting into this structure.

---

## 1. High-Conversion Page Sequence

A high-converting landing page follows a proven cognitive hierarchy that takes visitors from curiosity to conviction:

```text
[1. Sticky Header + Announcement Chip]
                   ↓
         [2. High-Impact Hero]
 (Badge + H1 + Subhead + Dual CTAs + Micro Social Proof)
                   ↓
      [3. Social Proof / Logo Cloud]
                   ↓
      [4. Asymmetric Bento Grid]
 (Visual anchor feature + supporting capability cards)
                   ↓
   [5. Alternating Feature Deep-Dives]
 (Sticky description + interactive/visual canvas)
                   ↓
      [6. Proof Metrics & Impact Stats]
                   ↓
    [7. Testimonials & Wall of Love]
                   ↓
  [8. Interactive Pricing Tier Matrix]
 (Monthly/Annual billing toggle + feature checklists)
                   ↓
        [9. Objection-Handling FAQ]
 (Clean accordion / disclosure items)
                   ↓
       [10. Closing Anchor CTA Banner]
                   ↓
        [11. Multi-Column Footer]
```

---

## 2. Section Anatomies & Implementation Rules

### A. Announcement Strip & Sticky Header
- **Announcement Strip:** Single dismissible or subtle banner at the top (`text-xs font-medium py-1.5 px-4`). Used for product launches, changelogs, or discounts.
- **Sticky Header:** Compact height (`h-14` or `h-16`), pinned to top (`sticky top-0 z-40`), with translucent backdrop blur (`backdrop-blur-md`).
  - Left: Brand icon + logotype.
  - Center (desktop): 3–5 navigation anchor links (`#features`, `#pricing`, `#testimonials`, `#faq`).
  - Right: Secondary action ("Sign In") + Primary CTA pill ("Get Started" / "Start Free Trial").

### B. High-Impact Hero Section
The hero section must communicate the value proposition in under 3 seconds:

1. **Category Badge / Release Chip:**
   - Small pill badge above the headline (`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4`).
2. **Primary Headline (H1):**
   - High visual impact, bold, with line-height tight (`leading-[1.1] sm:leading-tight`).
   - Length: 6 to 12 words max. Use a subtle gradient or highlight color on the key benefit.
3. **Sub-headline Prose:**
   - Constrained reading width (`max-w-2xl mx-auto`).
   - Font size: `text-base sm:text-lg`. Explains *what* the product does and *who* it is for.
4. **Dual Conversion Buttons:**
   - **Primary CTA:** High-contrast pill/rounded button with forward arrow (`"Start Building Free →"`).
   - **Secondary CTA:** Low-contrast ghost or outline button with play icon (`"▶ Watch 2-Min Demo"` or `"View GitHub"`).
5. **Micro-Social Proof:**
   - Positioned immediately beneath the CTA buttons: Avatar cluster (3–5 stacked circular user avatars) + star rating ("★★★★★ 4.9/5 from 1,200+ teams") + reassuring guarantee ("No credit card required • Free 14-day trial").
6. **Hero Visual Preview:**
   - High-fidelity product mockup, interactive preview window, or browser chrome mockup tilted slightly or centered with ambient glow beneath.

### C. Trust Logos & Social Proof Marquee
- Avoid oversized, colorful logos that distract from your product.
- Use a **single-row monochrome logo cloud** (`grayscale opacity-60 hover:opacity-100 transition-opacity`) or a continuous CSS scroll ticker.
- Include 5 to 7 recognizable customer brands or technologies.

### D. Asymmetric Bento Grid (Core Features)
A 3-column asymmetric grid that showcases features with varying visual weights:
- **Card 1 (Span 2 Cols / Double Width):** The "Anchor Feature". Includes a large visual component (e.g. interactive chart, code editor snippet, or live kanban preview).
- **Card 2 (Span 1 Col):** The "Speed / Performance" metric card (e.g. "0.4ms query latency").
- **Card 3 (Span 1 Col):** The "Security / Compliance" badge card (e.g. "SOC2 Type II + End-to-End Encryption").
- **Card 4 (Span 2 Cols / Double Width):** The "Workflow Automation" or integration card.

### E. Interactive Pricing Matrix
Pricing transparency removes conversion hesitation:
- **Billing Cycle Toggle:** Interactive switch for `Monthly` vs `Annual (Save 20%)` with a vibrant savings badge.
- **3-Tier Structure:**
  1. *Starter / Free Tier:* For individuals and tinkerers ($0).
  2. *Pro / Growth Tier:* The **Anchor / Most Popular Tier**. Visual elevation (subtle ring border, elevated shadow, "Most Popular" banner).
  3. *Enterprise / Custom Tier:* For organizations with dedicated compliance & SLA.
- **Feature Checklist Anatomy:**
  - Each item starts with a crisp checkmark icon (`✓`).
  - Strikethrough or dim unavailable features on lower tiers.
  - Zero-surprise guarantee note below the table ("Cancel anytime with 1-click. 30-day money-back guarantee").

### F. Objection-Handling FAQ Accordion
- Max measure constrained (`max-w-3xl mx-auto`).
- Clean accordion using native `<details>` and `<summary>` elements or lightweight Vanilla JS toggle.
- Addresses the top 4–6 actual sales objections:
  - *"How does the migration process work?"*
  - *"Can I cancel my subscription at any time?"*
  - *"What happens when my trial period ends?"*
  - *"Is my customer data secure and compliant?"*

### G. Closing Anchor CTA Banner
- Full-width high-contrast container near the footer (`p-8 sm:p-14 rounded-2xl`).
- Re-states the ultimate outcome with urgency.
- Single, unambiguous CTA button ("Get Started in 30 Seconds →").

---

## 3. Responsive Breakpoint Matrix

| Viewport | Layout Choreography |
|---|---|
| **Mobile Compact** (<640px) | • Hero CTAs stack full-width (`w-full flex-col`).<br>• Bento grid collapses into a single column (`grid-cols-1`).<br>• Pricing cards stack with the "Most Popular" card displayed first or prominently framed.<br>• Logo cloud displays 3 logos per row or auto-scrolls horizontally.<br>• Minimum touch target: 44px for all links and buttons. |
| **Tablet** (640px – 1023px) | • 2-column grid for features and bento cards (`sm:grid-cols-2`).<br>• Pricing displays as 2 columns with Enterprise tier spanning full-width underneath.<br>• Hero headline scales smoothly (`text-4xl sm:text-5xl`). |
| **Desktop** (1024px+) | • Full 3-column asymmetric bento grid.<br>• 3-tier side-by-side pricing matrix.<br>• Max reading container constrained to `max-w-6xl` or `max-w-7xl` to prevent layout stretching. |

---

## 4. Complete Component Implementation Snippets

### A. The Hero Section Pattern

```html
<section class="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden text-center">
  <div class="max-w-5xl mx-auto px-4 sm:px-6">
    
    <!-- Announcement Chip -->
    <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium border mb-6 transition-transform hover:scale-105 cursor-pointer">
      <span class="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
      <span>v2.4 Released: Real-time Multi-Region Sync</span>
      <span class="text-stone-400">→</span>
    </div>

    <!-- Main H1 Headline -->
    <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] max-w-4xl mx-auto">
      The Next-Generation Architecture for <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400">Modern Software Teams</span>
    </h1>

    <!-- Subtitle -->
    <p class="mt-6 text-base sm:text-xl text-stone-600 dark:text-stone-300 max-w-2xl mx-auto leading-relaxed">
      Ship customer-facing workflows 10x faster with our unified data engine, instant telemetry, and automated security guardrails.
    </p>

    <!-- Dual Conversion CTAs -->
    <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
      <a href="#pricing" class="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 group">
        <span>Start Free 14-Day Trial</span>
        <span class="group-hover:translate-x-1 transition-transform">→</span>
      </a>
      <a href="#demo" class="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm border transition-all flex items-center justify-center gap-2">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/></svg>
        <span>Watch Live Walkthrough</span>
      </a>
    </div>

    <!-- Micro Social Proof -->
    <div class="mt-8 pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-500">
      <div class="flex -space-x-2">
        <img class="w-6 h-6 rounded-full border-2 border-white dark:border-stone-900" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces" alt="Avatar">
        <img class="w-6 h-6 rounded-full border-2 border-white dark:border-stone-900" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces" alt="Avatar">
        <img class="w-6 h-6 rounded-full border-2 border-white dark:border-stone-900" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=64&h=64&fit=crop&crop=faces" alt="Avatar">
      </div>
      <span>Trusted by 14,000+ engineers at Stripe, Vercel & Supabase</span>
      <span class="hidden sm:inline">•</span>
      <span class="hidden sm:inline">★★★★★ 4.9/5 Rating</span>
    </div>

    <!-- Visual Mockup Canvas -->
    <div class="mt-12 rounded-2xl border shadow-2xl overflow-hidden p-2 bg-stone-100/50 dark:bg-stone-900/50">
      <div class="rounded-xl border overflow-hidden aspect-video bg-stone-950 flex items-center justify-center text-stone-500 font-mono text-sm">
        [Interactive Application Canvas Preview]
      </div>
    </div>

  </div>
</section>
```

### B. The Bento Grid Feature Pattern

```html
<section id="features" class="py-20">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
    
    <div class="text-center max-w-2xl mx-auto space-y-3">
      <span class="text-xs font-semibold uppercase tracking-wider text-indigo-500 font-mono">Engineered for Velocity</span>
      <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight">Everything you need to scale without friction</h2>
      <p class="text-sm sm:text-base text-stone-500">Modular building blocks designed to handle your first 100 users and your next 100 million.</p>
    </div>

    <!-- Asymmetric Bento Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <!-- Card 1: 2-Column Hero Feature -->
      <div class="md:col-span-2 rounded-2xl border p-6 sm:p-8 flex flex-col justify-between space-y-6">
        <div class="space-y-2">
          <span class="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">Core Engine</span>
          <h3 class="text-xl sm:text-2xl font-bold">Sub-millisecond State Replication</h3>
          <p class="text-sm text-stone-600 dark:text-stone-400 max-w-lg">
            Multi-region distributed cluster synchronization with zero locking contention. Built from scratch on memory-mapped append logs.
          </p>
        </div>
        <div class="h-44 rounded-xl border bg-stone-50 dark:bg-stone-900 p-4 font-mono text-xs text-stone-400 flex items-center justify-center">
          [Interactive Latency Waveform Graph]
        </div>
      </div>

      <!-- Card 2: 1-Column Stat Card -->
      <div class="rounded-2xl border p-6 sm:p-8 flex flex-col justify-between space-y-6">
        <div class="space-y-2">
          <span class="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">Availability</span>
          <h3 class="text-xl font-bold">99.999% SLA</h3>
          <p class="text-sm text-stone-600 dark:text-stone-400">
            Automated multi-cloud failover protocol across 3 continents simultaneously.
          </p>
        </div>
        <div class="pt-4 border-t text-3xl font-extrabold font-mono text-emerald-500">
          0.001% <span class="text-xs font-normal text-stone-400 block font-sans">Annual Unplanned Downtime</span>
        </div>
      </div>

    </div>
  </div>
</section>
```

### C. The Interactive Pricing Matrix Pattern

```html
<section id="pricing" class="py-20">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
    
    <div class="text-center max-w-2xl mx-auto space-y-4">
      <span class="text-xs font-semibold uppercase tracking-wider text-indigo-500 font-mono">Simple & Predictable</span>
      <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight">Invest in compounding infrastructure</h2>
      <p class="text-sm sm:text-base text-stone-500">Transparent pricing that scales with your business. No hidden seat overages.</p>
      
      <!-- Billing Period Switch -->
      <div class="inline-flex items-center gap-3 p-1 rounded-full border bg-stone-100 dark:bg-stone-900 text-xs font-medium">
        <button id="btnMonthly" class="px-3.5 py-1.5 rounded-full bg-white dark:bg-stone-800 font-bold shadow-xs">Monthly</button>
        <button id="btnAnnual" class="px-3.5 py-1.5 rounded-full text-stone-500 hover:text-stone-900 flex items-center gap-1.5">
          <span>Annual</span>
          <span class="text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 font-bold">Save 20%</span>
        </button>
      </div>
    </div>

    <!-- 3 Tier Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
      
      <!-- Tier 1: Starter -->
      <div class="rounded-2xl border p-6 sm:p-8 flex flex-col justify-between space-y-6">
        <div>
          <h3 class="text-lg font-bold">Starter</h3>
          <p class="text-xs text-stone-500 mt-1">Perfect for solo developers and side projects.</p>
          <div class="mt-4 flex items-baseline gap-1">
            <span class="text-4xl font-extrabold">$0</span>
            <span class="text-xs text-stone-400 font-mono">/ month</span>
          </div>
          <ul class="mt-6 space-y-3 text-xs text-stone-600 dark:text-stone-400">
            <li class="flex items-center gap-2"><span>✓</span> Up to 3 active cluster nodes</li>
            <li class="flex items-center gap-2"><span>✓</span> 10,000 monthly transactions</li>
            <li class="flex items-center gap-2"><span>✓</span> Community Discord support</li>
          </ul>
        </div>
        <button class="w-full py-2.5 rounded-xl border font-semibold text-xs transition-colors">Start Free</button>
      </div>

      <!-- Tier 2: Pro (Anchor / Highlighted Tier) -->
      <div class="rounded-2xl border-2 border-indigo-500 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl relative bg-stone-50/50 dark:bg-stone-900/50">
        <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider">
          Most Popular
        </div>
        <div>
          <h3 class="text-lg font-bold text-indigo-500">Professional</h3>
          <p class="text-xs text-stone-500 mt-1">For fast-growing products needing high throughput.</p>
          <div class="mt-4 flex items-baseline gap-1">
            <span class="text-4xl font-extrabold">$49</span>
            <span class="text-xs text-stone-400 font-mono">/ month</span>
          </div>
          <ul class="mt-6 space-y-3 text-xs text-stone-700 dark:text-stone-300">
            <li class="flex items-center gap-2 font-medium"><span>✓</span> Unlimited cluster nodes</li>
            <li class="flex items-center gap-2 font-medium"><span>✓</span> 1,000,000 monthly transactions</li>
            <li class="flex items-center gap-2 font-medium"><span>✓</span> Real-time multi-region sync</li>
            <li class="flex items-center gap-2 font-medium"><span>✓</span> 24/7 Priority engineer chat</li>
          </ul>
        </div>
        <button class="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-all">
          Get Started with Pro →
        </button>
      </div>

      <!-- Tier 3: Enterprise -->
      <div class="rounded-2xl border p-6 sm:p-8 flex flex-col justify-between space-y-6">
        <div>
          <h3 class="text-lg font-bold">Enterprise</h3>
          <p class="text-xs text-stone-500 mt-1">Custom governance, audit logs, and dedicated SLA.</p>
          <div class="mt-4 flex items-baseline gap-1">
            <span class="text-4xl font-extrabold">$249</span>
            <span class="text-xs text-stone-400 font-mono">/ month</span>
          </div>
          <ul class="mt-6 space-y-3 text-xs text-stone-600 dark:text-stone-400">
            <li class="flex items-center gap-2"><span>✓</span> Dedicated private VPC tenancy</li>
            <li class="flex items-center gap-2"><span>✓</span> Custom SAML SSO & SCIM</li>
            <li class="flex items-center gap-2"><span>✓</span> 99.999% uptime guarantee SLA</li>
            <li class="flex items-center gap-2"><span>✓</span> Dedicated Solutions Architect</li>
          </ul>
        </div>
        <button class="w-full py-2.5 rounded-xl border font-semibold text-xs transition-colors">Contact Enterprise</button>
      </div>

    </div>
  </div>
</section>
```

---

## 5. Pairing Guide: Combining Anatomy with Visual Styles

When generating landing pages, explicitly instruct the AI agent to combine this anatomy skill with a visual theme:

| Style Pairing | Visual Aura Transformed |
|---|---|
| **`/style-linear-dark` + `/landing-page-anatomy`** | Sleek midnight dark canvas, subtle radial spotlight under H1, micro-borders, and indigo CTA glow. Ideal for developer tools, APIs, and SaaS. |
| **`/style-spatial-glass` + `/landing-page-anatomy`** | Ambient floating color light cones, frosted translucent bento cards (`backdrop-blur-xl`), and specular bevel edges. Ideal for AI hardware, VisionOS, and Web3. |
| **`/style-warm-editorial` + `/landing-page-anatomy`** | Warm paper canvas (`#FBF9F5`), Newsreader serif headlines, drop-cap opening prose, and delicate hairline rules. Ideal for publications, newsletters, and agencies. |
| **`/style-neo-brutalism` + `/landing-page-anatomy`** | 2–3px stark black borders, high-contrast yellow/coral fills, hard offset box-shadows (`shadow-[4px_4px_0px_#000]`), and tactile sticker badges. Ideal for indie products and creator tools. |
| **`/style-clean-enterprise` + `/landing-page-anatomy`** | Crisp royal blue branding, high WCAG AA contrast, modular 4-tier comparison tables, and enterprise trust seals. Ideal for B2B FinTech and corporate SaaS. |

---

## 6. Anti-Patterns to Strictly Avoid

1. **The "Wall of Text" Headline:** Do not write headlines exceeding 14 words. Constrain H1 measure to `max-w-4xl`.
2. **Generic CTAs:** Never use vague text like `"Submit"`, `"Click Here"`, or `"Learn More"`. Always specify the outcome: `"Start 14-Day Free Trial"`, `"Deploy to Vercel"`, `"Download for macOS"`.
3. **Missing Friction Reducers:** Every primary CTA should have reassurance text nearby (`"No credit card required"`, `"Cancel anytime"`, or `"Instant setup"`).
4. **Unbalanced Bento Grids:** Never make all cards identical in size. The power of a bento grid is contrast—one dominant card supported by 2–3 compact metric or capability chips.
5. **Single-Column Pricing on Desktop:** On desktop (`lg:`), pricing tiers must be side-by-side so visitors can scan and compare trade-offs without scrolling.
