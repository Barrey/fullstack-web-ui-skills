---
name: motion-choreography
description: Finishing and polish skill for orchestrating fluid, high-performance UI animations, spring physics, and micro-interactions using vanilla JS Motion (by Framer). Pairs orthogonally as the finishing layer with any visual style and structural layout.
---

# Skill: Motion Choreography (Vanilla JS Motion / Framer Engine)

This skill governs the **motion choreography, spring physics, and micro-interaction polish** for modern web applications and landing pages. It acts as the **Finishing Layer (Polish Phase)** in the design hierarchy.

```text
  [ LAYER 1: STRUCTURE ]        +     [ LAYER 2: AESTHETICS ]       +     [ LAYER 3: MOTION ]
   landing-page-anatomy                 style-spatial-glass               motion-choreography
 (DOM Layout, Bento, FAQ)             (Colors, Glass, Borders)          (Springs, InView, Stagger)
```

> [!TIP]
> **Zero-Build Vanilla Stack:** This skill uses the official non-React vanilla JavaScript version of Framer's motion library: **`motion`** (formerly Motion One) by Matt Perry. It runs natively in the browser on top of the **Web Animations API (WAAPI)** for 120fps hardware-accelerated performance without npm build steps.

---

## 1. Library Installation (Zero-Build CDN)

Place the lightweight `motion` vanilla script tag immediately before the closing `</body>` tag or in `<head>`:

```html
<!-- Motion by Framer (Vanilla JS WAAPI Engine ~15KB) -->
<script src="https://cdn.jsdelivr.net/npm/motion@latest/dist/motion.js"></script>
```

When loaded via CDN, all core animation primitives are available globally under `window.Motion`:
```javascript
const { animate, inView, scroll, stagger } = Motion;
```

> [!IMPORTANT]
> **Framer `motion@latest` Syntax Rule:**
> In `motion@latest`, do NOT pass `easing: spring(...)` or invoke `Motion.spring(...)` directly as a parameter. Instead, pass spring configs via `{ type: "spring", stiffness: 100, damping: 18 }` or use high-performance cubic-bezier curves via `{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }`. Invoking `Motion.spring({...})` directly throws an internal `TypeError: Cannot read properties of undefined (reading '0')` in Framer's engine.

---

## 2. Motion Personality Archetypes & Spring Tokens

Different visual styles require different physical weights. Always match the motion curve with the visual archetype:

| Archetype | Best Paired Visual Style | Timing / Spring Config | Motion Feeling |
|---|---|---|---|
| **Spatial Fluid** | `style-spatial-glass`, Apple VisionOS | `ease: [0.16, 1, 0.3, 1]` / `{ type: "spring", stiffness: 100, damping: 18 }` | Ethereal, buoyant, glass-like float |
| **Linear Snappy** | `style-linear-dark`, Raycast | `{ type: "spring", stiffness: 350, damping: 28, mass: 0.8 }` | Hyper-fast, keyboard-ready, zero overshoot |
| **Tactile Bounce** | `style-neo-brutalism`, `style-playful-creative` | `{ type: "spring", stiffness: 260, damping: 14, mass: 1.2 }` | High energy, tactile physical punch |
| **Editorial Grace** | `style-warm-editorial`, `style-clean-enterprise` | `ease: [0.16, 1, 0.3, 1]` (duration: 0.65s) | Dignified, literary, smooth ease-out |
| **HUD Stepped** | `style-cyberpunk-hud`, `style-ops-terminal` | `ease: "steps(8)"` / `"linear"` with scanline flash | Telemetric, digital terminal typing |

---

## 3. The 6 Core Choreography Recipes

Apply these standardized recipes when polishing a page:

### Recipe A: The Hero Staggered Entrance (Page Load Cascade)
Triggered immediately on page mount to choreograph the reader's attention:
1. Release Chip / Badge (`delay: 0.05s`)
2. Primary H1 Headline (`delay: 0.15s`)
3. Subtitle Prose (`delay: 0.25s`)
4. Conversion CTAs & Micro-Proof (`delay: 0.35s`)
5. Hero Preview Canvas (`delay: 0.45s`, smooth scale from `0.94` to `1`)

```javascript
document.addEventListener("DOMContentLoaded", () => {
  const { animate, stagger } = Motion;

  // Staggered cascade for hero copy
  animate(
    ".hero-fade-up",
    { opacity: [0, 1], y: [35, 0] },
    { delay: stagger(0.1, { start: 0.05 }), duration: 0.75, ease: [0.16, 1, 0.3, 1] }
  );

  // Smooth cinematic scale-in for the preview mockup
  animate(
    ".hero-canvas-mockup",
    { opacity: [0, 1], scale: [0.93, 1], y: [40, 0] },
    { delay: 0.4, duration: 0.85, ease: [0.16, 1, 0.3, 1] }
  );
});
```

---

### Recipe B: In-View Scroll Reveals (Bento Grid Cascade)
Animates cards smoothly into place as the user scrolls down:

```javascript
const { inView, animate, stagger } = Motion;

// Reveal bento feature grid items in staggered waves
inView("#features", () => {
  animate(
    ".bento-card",
    { opacity: [0, 1], y: [40, 0] },
    { 
      delay: stagger(0.08), 
      duration: 0.65, 
      ease: [0.16, 1, 0.3, 1] 
    }
  );
});
```

---

### Recipe C: Scroll-Linked Progress Track & Header Blur
Connects animation directly to the scroll distance of the page without lag:

```javascript
const { scroll } = Motion;

// 1. Reading progress bar at top of viewport
const bar = document.getElementById("readingProgress");
if (bar && scroll) {
  scroll((progress) => {
    bar.style.transform = `scaleX(${progress})`;
  });
}

// 2. Dynamic header background opacity and blur on scroll
const header = document.querySelector("header");
if (header) {
  window.addEventListener("scroll", () => {
    const progress = Math.min(window.scrollY / 140, 1);
    header.style.backgroundColor = `rgba(3, 7, 18, ${0.4 + progress * 0.45})`;
    header.style.backdropFilter = `blur(${8 + progress * 16}px)`;
  }, { passive: true });
}
```

---

### Recipe D: Micro-Interaction Hover & Magnetic Spring
Buttons and interactive chips must respond with tactile weight:

```javascript
document.querySelectorAll(".interactive-spring-btn").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    Motion.animate(btn, { scale: 1.03, y: -2 }, { duration: 0.2, ease: "easeOut" });
  });
  btn.addEventListener("mouseleave", () => {
    Motion.animate(btn, { scale: 1, y: 0 }, { duration: 0.25, ease: "easeOut" });
  });
  btn.addEventListener("mousedown", () => {
    Motion.animate(btn, { scale: 0.96 }, { duration: 0.1 });
  });
  btn.addEventListener("mouseup", () => {
    Motion.animate(btn, { scale: 1.03 }, { duration: 0.15 });
  });
});
```

---

### Recipe E: 3D Mouse Gyro Parallax (Specular Glare & Tilt)
For glassmorphic cards and hero windows that react to cursor position:

```javascript
const card = document.querySelector(".spatial-parallax-target");
if (card && window.matchMedia("(min-width: 1024px)").matches) {
  let isHovered = false;
  card.addEventListener("mouseenter", () => { isHovered = true; });
  card.addEventListener("mouseleave", () => {
    isHovered = false;
    Motion.animate(card, { transform: "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)" }, { duration: 0.5, ease: [0.16, 1, 0.3, 1] });
  });

  window.addEventListener("mousemove", (e) => {
    if (!isHovered) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / (rect.height / 2)) * 6; // Max 6 deg tilt
    const rotateY = (x / (rect.width / 2)) * 6;
    card.style.transform = `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.008)`;

    // Specular glare follow coordinates
    const glareX = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
    const glareY = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
    card.style.setProperty("--glare-x", `${glareX}%`);
    card.style.setProperty("--glare-y", `${glareY}%`);
  });
}
```

---

### Recipe F: Metric Count-Up / Number Roll
Animates big impact numbers smoothly when scrolled into view:

```javascript
const { inView, animate } = Motion;

inView(".stat-card", () => {
  document.querySelectorAll(".stat-number-roll").forEach((el) => {
    const rawVal = el.dataset.value;
    const finalVal = parseFloat(rawVal);
    const suffix = el.dataset.suffix || "";
    const prefix = el.dataset.prefix || "";
    const decimals = rawVal.includes(".") ? (rawVal.split(".")[1]?.length || 1) : 0;

    animate((progress) => {
      const current = progress * finalVal;
      const formatted = decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toLocaleString();
      el.textContent = `${prefix}${formatted}${suffix}`;
    }, { duration: 1.8, ease: [0.16, 1, 0.3, 1] });
  });
});
```

---

## 4. The 5-Step Finishing Polish Protocol

When tasked to polish an existing page or finish a newly generated UI:

1. **Step 1: Check Baseline CSS Stability**
   - Ensure elements that will fade in have an initial CSS class (e.g. `opacity-0 translate-y-6`) or let Motion handle the starting values with `[from, to]` arrays.
2. **Step 2: Inject Motion CDN**
   - Add `<script src="https://cdn.jsdelivr.net/npm/motion@latest/dist/motion.js"></script>`.
3. **Step 3: Choreograph Entrances**
   - Wire `DOMContentLoaded` with Recipe A (Hero cascade).
   - Wire `inView` for Bento grids, Testimonial cards, and FAQ items.
4. **Step 4: Attach Tactile Feedback**
   - Add spring transitions to Primary CTAs, switches, and interactive modals.
5. **Step 5: Verify Performance & Accessibility**
   - Test on 60Hz and 120Hz displays.
   - Validate `prefers-reduced-motion` compliance.

---

## 5. Strict Guardrails & Anti-Patterns

1. **Never Animate Layout Properties:**
   - **FORBIDDEN:** Animating `width`, `height`, `top`, `left`, `margin`, `padding`. This triggers layout recalculations on every frame.
   - **MANDATORY:** Animate only `transform` (`x`, `y`, `scale`, `rotate`) and `opacity`.
2. **Never Invoke `Motion.spring(...)` Directly:**
   - **FORBIDDEN:** `easing: spring({...})` or `Motion.spring({...})`. In `motion@latest`, this function expects keyframes and will throw an uncaught `TypeError: Cannot read properties of undefined (reading '0')`.
   - **MANDATORY:** Use `{ type: "spring", stiffness: 100, damping: 18 }` or `{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }`.
3. **Use Reverse Loops for Continuous Ambient Buoyancy:**
   - For floating cards or ambient orbs, use `repeat: Infinity, repeatType: "reverse"` (not `direction: "alternate"`).
4. **Respect `prefers-reduced-motion`:**
   - Always wrap entrance animations in a reduced-motion check:
     ```javascript
     const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
     if (prefersReduced) {
       // Render immediately without motion
       document.querySelectorAll(".hero-fade-up, .bento-card").forEach(el => {
         el.style.opacity = "1";
         el.style.transform = "none";
       });
       return;
     }
     ```
5. **Never Use Perpetual Distracting Loops:**
   - Avoid pulsating buttons or constantly spinning icons that distract the user from reading. Motion should guide attention, not hijack it.
6. **Throttle on Mobile Viewports (<640px):**
   - Disable expensive mouse-parallax listeners on touch devices. Stick to lightweight in-view opacity fades.
