# Cyber-Brutalist Studio: UI8 Project Plan

**Project Name:** `CYBER_STRUCT`
**Concept:** A premium, Next.js (App Router) based landing page template for modern architecture and design studios. The aesthetic is Cyber-Brutalist: dominated by dark, raw UI, oversized stark typography, high-contrast neon accents, and heavy use of asymmetrical image masonry.
**Target Market:** Premium templates marketplace (UI8).

---

## 1. Project Structure (Next.js App Router)

```text
cyber_struct/
├── app/
│   ├── layout.tsx                # Root layout with global fonts, theme providers, & Nav
│   ├── page.tsx                  # Main landing page assembling all sections
│   ├── globals.css               # Tailwind directives & custom CSS variables/glows
│   ├── not-found.tsx             # Cyber-themed 404 page
│   └── (routes)/                 # (Optional) Template internal pages if expanded later
├── components/
│   ├── ui/                       # Reusable micro-components (buttons, inputs)
│   │   ├── button.tsx
│   │   ├── container.tsx
│   │   └── typography.tsx
│   ├── sections/                 # Main page sections
│   │   ├── hero/
│   │   │   ├── hero-section.tsx
│   │   │   └── spline-scene.tsx  # Dynamic imported 3D wrapper
│   │   ├── features/
│   │   │   └── feature-masonry.tsx
│   │   ├── portfolio/
│   │   │   ├── project-grid.tsx
│   │   │   └── project-card.tsx
│   │   ├── pricing/
│   │   │   └── pricing-tier.tsx
│   │   ├── cta/
│   │   │   └── footer-cta.tsx
│   │   └── footer.tsx
│   ├── animations/               # Reusable Framer Motion wrappers
│   │   ├── fade-in.tsx
│   │   ├── stagger-container.tsx
│   │   └── text-reveal.tsx
│   └── shared/                   # Shared UI like Navbars
│       ├── navbar.tsx
│       └── custom-cursor.tsx
├── lib/
│   ├── utils.ts                  # Tailwind merge/clsx utilities
│   └── constants.ts              # Copywriting, mock project data, pricing info
├── public/
│   ├── assets/
│   │   ├── models/               # Spline local fallbacks (if applicable)
│   │   ├── images/               # High-res structural/architectural placeholders
│   │   └── fonts/                # Local font files
│   └── placeholder.jpg
├── tailwind.config.ts            # Cyber-Brutalist theme configuration
├── tsconfig.json
└── package.json
```

---

## 2. Section-by-Section Breakdown

### A. Hero Section (The Construct)
- **Layout:** Full viewport height (`min-h-screen`). 2-column asymmetric grid. Left side: massive typography. Right side: Bleeding-edge Spline 3D canvas.
- **Content:**
  - *Headline:* "ENGINEERED CONSTRUCTS."
  - *Subhead:* "We forge brutalist digital & physical spaces. Raw materials meeting neural networks."
  - *Action:* Primary glowing CTA "INITIATE PROTOCOL".
- **Animations:** Typewriter reveal for the subhead. Massive staggered vertical translation for the headline.
- **Spline Usage:** Interactive 3D scene (detailed below) acting as the visual anchor.
- **Tailwind Strategy:** `grid grid-cols-1 lg:grid-cols-12 gap-4`, `text-[12vw] leading-none uppercase font-black`.

### B. Methodology (Features Masonry)
- **Layout:** Dense, border-heavy grid with zero-gap borders (raw table-like structure).
- **Content:** "SYSTEM ARCHITECTURE." Features like "Structural Integrity", "Neon Illumination", "Concrete Foundations".
- **Animations:** On-scroll `whileInView` border highlighting. As sections enter, the background flashes slightly like a faulty neon tube.
- **Tailwind Strategy:** `border border-neon-cyan/20 divide-x divide-y divide-neon-cyan/20`, monochromatic backgrounds `bg-space-900`.

### C. Projects (Visual Brutalism Grid)
- **Layout:** Asymmetric, jagged image masonry. Large high-contrast B&W structural images that colorize and glitch on hover.
- **Content:** "ARCHIVES." Project 01: "Sector 4 Datacenter", Project 02: "Neon Plaza".
- **Animations:** Framer Motion layout animations for filtering. Image hover reveals a digital scanline overlay effect.
- **Tailwind Strategy:** `columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8`. Custom `group-hover` classes for the scanline filters.

### D. Pricing/Engagement (Protocols)
- **Layout:** 3 towering cards that resemble server racks.
- **Content:** "ACQUISITION PROTOCOLS." Tier 1: Base Frame, Tier 2: Core Overclock, Tier 3: Megastructure.
- **Animations:** Staggered upward entry. Hovering over a card creates an intense inset shadow glow (`box-shadow: inset 0 0 20px #0ff`).
- **Tailwind Strategy:** `bg-black border-2 border-zinc-800 hover:border-neon-pink transition-colors duration-300`.

### E. CTA / Footer (The Terminal)
- **Layout:** Command-line style terminal window interface.
- **Content:** "AWAITING COMMAND." A blinking cursor next to an email input field.
- **Animations:** Blinking cursor `repeat: Infinity`.
- **Tailwind Strategy:** monospace fonts (`font-mono`), `bg-zinc-950 text-neon-green p-12`.

---

## 3. Design System

### Color Palette (Cyber-Brutalist)
- **Backgrounds:** `void: #050505`, `concrete: #121212`, `asphalt: #1A1A1A`.
- **Primary Text:** `chalk: #E5E5E5`, `muted: #888888`.
- **Accents (Neons):**
  - `neon-cyan: #00F3FF`
  - `neon-pink: #FF003C`
  - `neon-yellow: #FCEE09`
  - `matrix-green: #00FF41`

### Typography
- **Headings (Display):** *Space Grotesk* or *Clash Display* (monumental, geometric, heavy weights).
- **Body & Terminals:** *JetBrains Mono* or *IBM Plex Mono* (technical, code-like).
- **Styling:** Extreme contrast. Main titles are massive, uppercase, with tight tracking. Body text is small, mono-spaced, and technical.

### Spacing & Borders
- **Scale:** Heavy reliance on 4px, 8px, 16px, 32px multiples.
- **Borders:** Thick (2px-4px) solid borders everywhere to emphasize structure over soft shadows. Sharp corners (`rounded-none`).

### Reusable Components
- `<TerminalButton />`: Square button, hover effect shifts background up and reveals an accent shadow.
- `<ScanlineImage />`: Image wrapper component applying CSS glitch/scanline filters.
- `<GridContainer />`: Wraps sections in a visible border-box grid for that blueprint feel.

---

## 4. Animation Plan (Framer Motion)

- **Initial Load (Hero):**
  - *Title:* `initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }}` (Custom cubic-bezier for a heavy, slamming stop).
- **Scroll Triggers (Sections):**
  - Utilize `useInView` to trigger `<StaggerContainer />`.
  - Items use a harsh, non-spring fade-in. `variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}`.
- **Micro-interactions:**
  - **Custom Cursor:** A geometric crosshair that expands when hovering over interactive elements.
  - **Glitch Effect:** Rapid `x` translation variants triggered `onHoverStart` to simulate screen tearing.

---

## 5. Spline Integration Plan

### The Scene Concept
- **Visuals:** A slow-rotating, wireframe architectural megastructure (resembling a futuristic skyscraper or server farm). The structure is predominantly dark materials with glowing neon-cyan edges and glass elements reflecting a harsh studio light.
- **Interactivity:** Mouse tracking to slightly tilt the structure (parallax) and a subtle constant vertical rotation.

### Integration & Performance
- **Wrapper Component:** Create a `<SplineCanvas />` component.
- **Lazy Loading:** Crucial for UI8 performance metrics. Use Next.js `next/dynamic` to load the Spline component only client-side.
  ```typescript
  const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
    loading: () => <div className="h-full w-full animate-pulse bg-concrete border border-neon-cyan/20 flex items-center justify-center font-mono text-neon-cyan">LOADING_ASSET.OBJ...</div>
  });
  ```
- **Fallback:** If WebGL fails or on mobile, load a high-res pre-rendered WebP image of the scene with a CSS pan animation.

---

## 6. Component Architecture

- **`HeroSection`**: Manages the grid layout, imports `SplineCanvas`, holds primary marketing copy.
- **`SplineCanvas`**: (Client Component) Loads `@splinetool/react-spline`, manages loading state, passes scene URL.
- **`TextReveal`**: (Client Component) Wraps `children` in Framer Motion `motion.div` with hidden overflow to handle the "slamming" text entry.
- **`FeatureMasonry`**: Renders a list of feature data into a CSS grid.
- **`ProjectCard`**: Accepts `{ title, category, imageUrl }`. Handles the hover state, scanline overlay, and routing (if applicable).
- **`CustomCursor`**: (Client Component) Fixed position `motion.div` tracking `clientX/Y`, changing variants via global state (Zustand or Context) when hovering buttons.
- **`TerminalInput`**: A styled HTML input wrapped to look like a CLI prompt.

---

## 7. Performance Strategy

- **Next.js Image Optimization:** All masonry and background images must use the `next/image` component with `sizes` props heavily optimized for WebP/AVIF output.
- **Spline Lazy Loading:** As detailed, Spline will not block the main thread render.
- **Font Loading:** Use `next/font/google` for *Space Grotesk* and *JetBrains Mono* to prevent layout shifts (CLS) and ensure they are self-hosted during the build.
- **Code Splitting:** Rely on App Router's default RSC (React Server Components). Only interactive components (Animations, Spline, Cursor, Forms) will have `"use client"`, keeping the JavaScript bundle minimal.
- **CSS:** Tailwind handles dead-code elimination. Use CSS variables for the neon glows rather than heavy JS calculations.

---

## 8. UI8 Packaging Checklist

To ensure a premium, easily approved submission to UI8, the final zip must include:

- [ ] **`/cyber_struct` (Source Code):** Clean, linted, `node_modules` and `.next` removed.
- [ ] **`README.md` (Documentation):**
  - Installation instructions (`npm install`, `npm run dev`).
  - How to change the Spline Scene URL.
  - How to customize the Tailwind color palette.
- [ ] **`Figma File` (Optional but highly recommended):** The UI8 asset value skyrockets if the original design files (UI kit, typography scale) are included.
- [ ] **`/preview_assets`:**
  - 1x High-Res Cover Image (1920x1080) featuring the Spline 3D hero.
  - 4-5x Preview presentation images (mockups of the site on desktop and mobile frames).
  - 1x Video Preview (MP4/GIF) showing the Spline interaction, load animations, and hover effects.
- [ ] **License file:** Standard template licensing terms.
- [ ] **Package.json check:** Ensure all dependencies are updated to stable versions without vulnerabilities.
