"use client";

import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/motion";

export function Navbar() {
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeUpVariant}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-primary rounded-sm shadow-[0_0_10px_rgba(0,243,255,0.6)] animate-pulse"></div>
          <span className="text-primary font-bold font-[family-name:var(--font-space-grotesk)] text-xl tracking-widest uppercase">
            GHOST_OS
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {["Features", "Tiers", "Terminal"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-[family-name:var(--font-jetbrains-mono)] text-xs tracking-[0.15em] uppercase text-on-surface-variant hover:text-primary transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-widest text-secondary px-3 py-1 border border-secondary/20 bg-secondary/10 rounded-sm">
            STATUS: SECURE
          </div>
          <button className="md:hidden text-on-surface hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
