export const SKILLS_REGISTRY = [
  {
    name: 'style-spatial-glass',
    category: 'style',
    title: 'Spatial Glass',
    description: 'Frosted glassmorphism, luminous depth, specular highlights, and ambient light cones inspired by VisionOS & macOS.'
  },
  {
    name: 'style-linear-dark',
    category: 'style',
    title: 'Linear Dark',
    description: 'Developer-centric, ultra-sleek dark mode with inset borders and high-precision hierarchy inspired by Linear, Raycast, and Vercel.'
  },
  {
    name: 'style-warm-editorial',
    category: 'style',
    title: 'Warm Editorial',
    description: 'Warm parchment paper canvas (#FBF9F5), Newsreader serif typography, drop-caps, and hairline rules ala Substack & ReadCV.'
  },
  {
    name: 'style-ops-terminal',
    category: 'style',
    title: 'Ops Terminal',
    description: 'High-density telemetry dashboard, server observability, and tabular monospace data inspired by Datadog, Grafana, and Bloomberg.'
  },
  {
    name: 'style-clean-enterprise',
    category: 'style',
    title: 'Clean Enterprise',
    description: 'Crisp, reliable, high-trust corporate SaaS and B2B back-office admin UI inspired by Stripe, GitHub, and TailwindUI.'
  },
  {
    name: 'style-neo-brutalism',
    category: 'style',
    title: 'Neo-Brutalism',
    description: 'High-energy retro indie app, solid 2-3px black borders, and hard offset drop shadows inspired by Gumroad.'
  },
  {
    name: 'style-cyberpunk-hud',
    category: 'style',
    title: 'Cyberpunk HUD',
    description: 'Sci-fi telemetry HUD, chamfered corner cuts, and neon terminal glows inspired by Web3 dApps and gaming cockpits.'
  },
  {
    name: 'style-quiet-minimal',
    category: 'style',
    title: 'Quiet Minimal',
    description: 'Japanese Kanso philosophy: low distraction, whisper borders, and serene deep content focus inspired by Notion and Claude.'
  },
  {
    name: 'style-playful-creative',
    category: 'style',
    title: 'Playful Creative',
    description: 'Approachable, warm, energetic rounded pills and soft micro-interactions inspired by Duolingo and Canva.'
  },
  {
    name: 'landing-page-anatomy',
    category: 'structure',
    title: 'Landing Page Anatomy',
    description: 'High-conversion marketing landing page structural blueprint (Hero, Social Proof, Bento Grids, Pricing, FAQ, Closing CTA).'
  },
  {
    name: 'motion-choreography',
    category: 'motion',
    title: 'Motion Choreography',
    description: 'Fluid micro-interactions, spring physics, staggered entry reveals using Vanilla JS Motion by Framer (WAAPI engine ~15KB).'
  }
];

export function getAllSkills() {
  return SKILLS_REGISTRY;
}

export function getSkill(name) {
  const normalized = name.toLowerCase().trim();
  return SKILLS_REGISTRY.find(s => s.name.toLowerCase() === normalized || s.title.toLowerCase() === normalized);
}

export function getSkillNames() {
  return SKILLS_REGISTRY.map(s => s.name);
}
