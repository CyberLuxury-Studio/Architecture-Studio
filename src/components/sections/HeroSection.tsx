"use client";

import dynamic from "next/dynamic";
import { WaitlistInput } from "@/components/ui/WaitlistInput";
import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/lib/motion";

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 flex items-center justify-center font-label text-primary/50 text-xs tracking-widest animate-pulse">LOADING_CORE_ASSET...</div>
});

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundSize: '40px 40px',
        backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)'
      }}></div>

      {/* Hero Content Container */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <motion.div
          className="max-w-2xl flex flex-col items-start pt-12 md:pt-0"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUpVariant} className="inline-block border border-primary/20 bg-primary/5 px-3 py-1 rounded-sm mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-widest text-primary uppercase">System Online // Version 0.9.4</span>
          </motion.div>

          <motion.h1 variants={fadeUpVariant} className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-on-background mb-6 drop-shadow-lg">
            ENTER<br /> THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary drop-shadow-[0_0_15px_rgba(150,248,255,0.4)]">NEXT</span><br /> ERA
          </motion.h1>

          <motion.p variants={fadeUpVariant} className="font-body text-on-surface-variant text-lg md:text-xl max-w-md mb-10 font-light border-l-2 border-white/10 pl-4">
            Join the stealth beta. Limited access. Secure your node before the protocol goes public.
          </motion.p>

          <motion.div variants={fadeUpVariant} className="w-full max-w-md">
            <WaitlistInput />
            <div className="mt-4 flex items-center gap-4 text-[10px] font-[family-name:var(--font-jetbrains-mono)] text-on-surface-variant uppercase tracking-widest">
              <span>Encrypted Connection</span>
              <span className="w-1 h-1 bg-white/20 rounded-full"></span>
              <span>Zero Logs</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Spline 3D Scene Wrapper */}
        <div className="absolute inset-0 lg:relative lg:inset-auto h-[60vh] lg:h-[800px] w-full z-0 lg:z-10 opacity-30 lg:opacity-100 mix-blend-screen pointer-events-none lg:pointer-events-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent z-10 lg:hidden"></div>
          <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
        </div>
      </div>
    </section>
  );
}
