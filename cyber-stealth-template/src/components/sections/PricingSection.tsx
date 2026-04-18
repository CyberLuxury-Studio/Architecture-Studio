"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/lib/motion";

export function PricingSection() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-background relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold tracking-tighter text-on-background mb-4">
            ACCESS <span className="text-white/20">TIERS</span>
          </h2>
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-primary text-sm tracking-widest uppercase">Select Authorization Level</p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Tier 1 */}
          <motion.div variants={fadeUpVariant} className="bg-surface-container-low p-8 rounded border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col">
            <div className="mb-8 border-b border-white/10 pb-6">
              <h3 className="font-[family-name:var(--font-jetbrains-mono)] text-lg font-bold text-on-surface mb-2">Hacker</h3>
              <div className="flex items-baseline gap-2">
                <span className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-on-surface">0.0</span>
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-on-surface-variant">/mo</span>
              </div>
            </div>
            <ul className="font-body text-sm text-on-surface-variant space-y-4 mb-10 flex-grow">
              {["Basic Node Access", "Standard Encryption (256-bit)", "Community Terminal"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="text-primary w-4 h-4 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full bg-transparent border border-white/20 text-on-surface font-[family-name:var(--font-jetbrains-mono)] text-sm uppercase py-3 rounded-sm hover:bg-white/5 transition-colors">
              INIT_BASIC
            </button>
          </motion.div>

          {/* Tier 2 (Highlighted) */}
          <motion.div variants={fadeUpVariant} className="relative bg-surface p-8 rounded border border-transparent flex flex-col transform md:-translate-y-4 shadow-[0_0_40px_rgba(150,248,255,0.05)] hover:shadow-[0_0_60px_rgba(150,248,255,0.15)] transition-shadow duration-500 z-10">
            {/* Gradient Border Pseudo-element */}
            <div className="absolute inset-0 rounded p-[1px] bg-gradient-to-b from-tertiary to-primary opacity-50">
              <div className="absolute inset-0 bg-surface rounded h-full w-full"></div>
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="absolute top-0 right-0 bg-primary/10 text-primary font-[family-name:var(--font-jetbrains-mono)] text-[10px] px-2 py-1 rounded-sm border border-primary/20 tracking-widest uppercase">
                Recommended
              </div>
              <div className="mb-8 border-b border-white/10 pb-6">
                <h3 className="font-[family-name:var(--font-jetbrains-mono)] text-lg font-bold text-primary mb-2 shadow-primary/50 drop-shadow-md">Cyber</h3>
                <div className="flex items-baseline gap-2">
                  <span className="font-[family-name:var(--font-space-grotesk)] text-5xl font-bold text-on-surface">49.0</span>
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-on-surface-variant">/mo</span>
                </div>
              </div>
              <ul className="font-body text-sm text-on-surface-variant space-y-4 mb-10 flex-grow">
                {["Priority Node Routing", "Polymorphic Encryption", "Dedicated Terminal Instance", "Ghost Protocol Access"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-on-surface">
                    <Check className="text-primary w-4 h-4 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-primary-container text-on-primary font-[family-name:var(--font-jetbrains-mono)] font-bold text-sm uppercase py-3 rounded-sm shadow-[0_0_20px_rgba(0,243,255,0.2)] hover:bg-primary-fixed transition-colors">
                UPGRADE_LINK
              </button>
            </div>
          </motion.div>

          {/* Tier 3 */}
          <motion.div variants={fadeUpVariant} className="bg-surface-container-low p-8 rounded border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col">
            <div className="mb-8 border-b border-white/10 pb-6">
              <h3 className="font-[family-name:var(--font-jetbrains-mono)] text-lg font-bold text-on-surface mb-2">God-Mode</h3>
              <div className="flex items-baseline gap-2">
                <span className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-on-surface">299.0</span>
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-on-surface-variant">/mo</span>
              </div>
            </div>
            <ul className="font-body text-sm text-on-surface-variant space-y-4 mb-10 flex-grow">
              {["Unrestricted Protocol Access", "Quantum Encryption Keys", "Root Admin Rights", "24/7 Neural Support"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="text-primary w-4 h-4 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full bg-transparent border border-white/20 text-on-surface font-[family-name:var(--font-jetbrains-mono)] text-sm uppercase py-3 rounded-sm hover:bg-white/5 transition-colors">
              REQ_ACCESS
            </button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
