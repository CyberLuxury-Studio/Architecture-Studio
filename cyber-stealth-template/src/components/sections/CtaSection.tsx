"use client";

import { WaitlistInput } from "@/components/ui/WaitlistInput";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/motion";

export function CtaSection() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-surface-container-lowest relative z-10 border-t border-white/5 flex flex-col items-center justify-center text-center">
      <motion.div
        className="max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.h2
          variants={fadeUpVariant}
          className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-6xl font-bold tracking-tighter text-on-background mb-6 drop-shadow-lg"
        >
          READY TO UPLOAD <br /> YOUR CONSCIOUSNESS?
        </motion.h2>
        <motion.p
          variants={fadeUpVariant}
          className="font-body text-on-surface-variant text-lg mb-12 max-w-xl mx-auto font-light"
        >
          The grid is waiting. Enter your coordinates below to begin the synchronization process.
        </motion.p>
        <motion.div variants={fadeUpVariant} className="w-full max-w-lg mx-auto">
          <WaitlistInput />
        </motion.div>
      </motion.div>
    </section>
  );
}
