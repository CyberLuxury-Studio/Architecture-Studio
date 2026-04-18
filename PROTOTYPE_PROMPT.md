# Cyberpunk Waitlist - Prototype Generation Prompt

**Instructions:** Copy and paste the prompt below into your preferred AI code generator (like Claude 3.5 Sonnet, GPT-4o, or an AI-integrated IDE like Cursor) to generate the initial prototype of the landing page from scratch.

---

### **Prompt:**

Act as an expert Next.js developer and UX/UI designer specializing in dark mode, cyberpunk aesthetics, and high-performance animations. I need you to build a single-page waitlist/stealth landing page from scratch.

**Tech Stack Requirements:**
- Next.js 14+ (App Router)
- React Server Components (where applicable) and Client Components for interactivity
- Tailwind CSS
- Framer Motion
- TypeScript
- `@splinetool/react-spline` (for the 3D hero asset)
- `lucide-react` (for icons)

**Design System & Theme:**
- **Backgrounds:** Primary background is `#0a0a0c` (obsidian). Secondary/Card backgrounds use `#111116` (surface) with a `backdrop-blur-md` effect.
- **Accents (Neons):** `#00f3ff` (cyan) as primary, `#ff003c` (pink) as secondary, `#bd00ff` (purple) for gradients/shadows.
- **Typography:** Use `next/font/google` to import 'Space Grotesk' for all headings (H1-H4) and 'Inter' or 'JetBrains Mono' for body text and input fields.
- **Borders & Shadows:** Use thin `border-white/5` for standard cards. For highlighted elements, use a gradient border transitioning from neon purple to neon cyan, and apply CSS drop shadows like `shadow-[0_0_30px_rgba(0,243,255,0.2)]` on hover.

**Project Structure & Component Requirements:**

Please create a single cohesive page (`app/page.tsx`) that implements the following sections sequentially, along with standard reusable UI components (you can inline them in the page or split them into a `components/` folder if you prefer, but I need the full working code).

**1. Hero Section (The Waitlist Focus)**
- **Layout:** `min-h-screen`, `relative`, `overflow-hidden`, `flex items-center`.
- **Background:** Include a subtle, dark grid pattern using pure CSS or Tailwind.
- **Content Container:** Place the main content constrained to the left or center (`max-w-2xl`, `z-10`).
- **Typography:** An aggressive H1 (e.g., "ENTER THE NEXT ERA") and a muted subtitle ("Join the stealth beta. Limited access.").
- **Interactive Element (`WaitlistInput`):** Create a dark email input field with a glowing bottom border on focus. The placeholder should look like a terminal prompt: `> enter your email_`. Next to it, a `CyberButton` component that glows cyan on hover.
- **Spline 3D Scene:** Use Next.js `dynamic` import with `ssr: false` to load `<Splinetool />`. Position it absolutely (`absolute inset-0 z-0 opacity-50 md:opacity-100`) so it sits behind the text or heavily anchors the right side of the screen. You can use this generic Spline URL for testing: `https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode` (or leave a placeholder URL).
- **Animations:** Use Framer Motion to stagger the fade-up entry of the H1, subtitle, and input field.

**2. Features Section**
- **Layout:** Standard section padding (`py-24`, `container mx-auto`).
- **Grid:** A 3-column CSS grid (`grid-cols-1 md:grid-cols-3 gap-8`).
- **Content:** Generate 3 Cyberpunk-themed feature cards (e.g., "Neural Uplink", "Zero-Latency Core", "Encrypted Protocols").
- **Card Styling (`NeonCard`):** `bg-[#111116]`, subtle border.
- **Animations:** Wrap the grid in a stagger container. Cards should slide up and fade in `whileInView`. On hover, the card should slightly lift and the border should glow cyan.

**3. Pricing Section**
- **Layout:** `py-24`, centered heading "ACCESS TIERS".
- **Grid:** 3-column flex or grid layout.
- **Tiers:** Create 3 tiers (e.g., "Hacker", "Cyber", "God-Mode").
- **Highlight:** The middle tier ("Cyber") must be visually distinct. Give it an absolute positioned pseudo-element that creates a continuous `neon-purple` to `neon-cyan` gradient border. Give it an initial glowing drop shadow.
- **Animations:** On hover, cards lift `translate-y-[-8px]` and increase their box-shadow intensity.

**4. Footer / Final CTA**
- **Layout:** A centered, constrained CTA section (`max-w-3xl py-32`).
- **Content:** "Ready to upload your consciousness?" followed by a reuse of the `WaitlistInput` component.
- **Footer:** A simple bottom border (`border-t border-white/10 pt-8 pb-12 flex justify-between`), copyright text, and 3 dummy social icons using `lucide-react`.

**Important Constraints:**
- Ensure all Framer Motion components (`motion.div`) are only used in files marked with `"use client"`.
- Do not use any external CSS files other than standard Tailwind directives in `globals.css`. Handle glows and gradients via Tailwind arbitrary values (e.g., `shadow-[...]`, `bg-[linear-gradient(...)]`).
- Ensure the email input form prevents default submission, clears the input, and shows a mock "Access Granted" success message upon clicking the button.

Please provide the complete code for `app/layout.tsx`, `app/page.tsx` (or broken down into component files), and the `tailwind.config.ts` configuration required to support the custom colors.