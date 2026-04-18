# GHOST_OS: Cyberpunk Waitlist Template

Welcome to the **GHOST_OS** template. This is a premium, high-performance stealth landing page designed for architecture, tech, and crypto startups looking for a brutalist, cyberpunk aesthetic.

## Tech Stack
* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **3D Engine:** Spline (`@splinetool/react-spline`)
* **Icons:** Lucide React
* **Language:** TypeScript

---

## 🚀 Quick Start (Installation)

### Prerequisites
* Node.js 18.17 or later.

### Installation
1. Extract the downloaded ZIP file.
2. Open your terminal and navigate to the project directory:
   `cd cyber-stealth-template`
3. Install the dependencies:
   `npm install`
4. Start the development server:
   `npm start`
5. Open http://localhost:3000 in your browser.

---

## 🎨 Customizing the Design System

### Modifying Colors
The entire color palette is managed via CSS Variables in `src/app/globals.css`.

To change the primary neon color (default is Cyan `#96f8ff`):
```css
/* src/app/globals.css */
@theme {
  --color-primary: #YOUR_HEX_CODE;
  --color-primary-container: #YOUR_HEX_CODE;
}
```

### Changing Fonts
The template uses `next/font/google` for optimal performance. To change fonts, edit `src/app/layout.tsx`.
Currently configured:
* **Headlines:** Space Grotesk
* **Body:** Inter
* **Code/Labels:** JetBrains Mono

---

## 📦 Spline 3D Integration

The hero section uses a high-performance, lazy-loaded Spline component to ensure it doesn't block the main thread.

To swap the placeholder 3D scene with your own:
1. Open your scene in Spline.
2. Click **Export** -> **Code** -> **React**.
3. Copy the URL ending in `.splinecode`.
4. Open `src/components/sections/HeroSection.tsx`.
5. Locate the `<Spline />` component near the bottom and replace the `scene` prop:
`<Spline scene="https://prod.spline.design/YOUR-NEW-URL/scene.splinecode" />`

---

## 🔌 API & Waitlist Logic

The template includes a functional mock API route for the waitlist form.
* **Location:** `src/app/api/waitlist/route.ts`
* **Form Component:** `src/components/ui/WaitlistInput.tsx`

To integrate with a real database (like Supabase, Firebase) or an email provider (Resend, Mailchimp), open the API route and replace the `MOCK` section with your actual backend logic.
