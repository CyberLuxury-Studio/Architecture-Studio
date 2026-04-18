"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/lib/motion";
import { CyberCpuIcon, CyberNetworkIcon, CyberShieldIcon } from "@/components/ui/Icons";

const features = [
  {
    icon: <CyberCpuIcon className="w-6 h-6 text-primary" />,
    title: "Neural Uplink",
    description: "Direct cognitive integration with the mainframe. Millisecond response times engineered for biological synchronization."
  },
  {
    icon: <CyberNetworkIcon className="w-6 h-6 text-primary" />,
    title: "Zero-Latency Core",
    description: "Distributed edge network ensuring sub-10ms ping globally. The physical distance between thought and execution eliminated."
  },
  {
    icon: <CyberShieldIcon className="w-6 h-6 text-primary" />,
    title: "Encrypted Protocols",
    description: "Multi-layered polymorphic encryption. Data packets shift signatures dynamically to evade algorithmic detection."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-surface-container-lowest relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={fadeUpVariant}
              className="bg-surface p-8 rounded border border-white/5 hover:border-primary/50 transition-colors duration-300 group flex flex-col h-full hover:shadow-[0_0_30px_rgba(0,243,255,0.05)]"
            >
              <div className="w-12 h-12 bg-surface-container-low rounded flex items-center justify-center mb-8 border border-white/5 group-hover:border-primary/30 transition-colors relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                {feature.icon}
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-on-surface mb-4">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6 flex-grow">
                {feature.description}
              </p>
              <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-on-surface-variant tracking-widest uppercase">Sec-Level: Alpha-9</span>
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary shadow-[0_0_5px_rgba(214,116,255,0.8)]"></span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
