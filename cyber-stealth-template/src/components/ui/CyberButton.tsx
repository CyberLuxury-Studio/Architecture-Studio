"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CyberButtonProps {
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function CyberButton({ children, variant = "primary", className, onClick, disabled }: CyberButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "relative group overflow-hidden font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest font-bold py-3 px-8 rounded-sm transition-all duration-300 disabled:opacity-50 flex items-center justify-center",
        isPrimary
          ? "bg-primary text-on-primary-fixed hover:bg-primary-container shadow-[0_0_15px_rgba(0,243,255,0.1)] hover:shadow-[0_0_25px_rgba(0,243,255,0.3)]"
          : "bg-transparent border border-white/20 text-on-surface hover:border-primary hover:text-primary",
        className
      )}
    >
      {/* Glitch Overlay Effect */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>

      {/* Scanline Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none transition-opacity duration-300" style={{
        backgroundImage: 'linear-gradient(transparent 50%, rgba(0, 0, 0, 0.25) 50%)',
        backgroundSize: '100% 4px'
      }}></div>

      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
