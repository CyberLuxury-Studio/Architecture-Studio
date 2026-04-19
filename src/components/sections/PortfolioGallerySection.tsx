"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "../animations/ScrollReveal";
import { ArrowRight, Box, Target, Maximize } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Project Zero",
    category: "Commercial",
    description: "A parametric skyscraper designed to optimize natural light and minimize carbon footprint. The exoskeleton structure serves both aesthetic and structural purposes.",
    tags: ["Parametric", "Sustainable", "High-Rise"]
  },
  {
    id: 2,
    title: "Neon Habitat",
    category: "Residential",
    description: "Modular living units stacked in an organic pattern. Integrated smart glass and dynamic lighting adapt to the occupant's circadian rhythm.",
    tags: ["Modular", "Smart Home", "Cyberpunk"]
  },
  {
    id: 3,
    title: "The Void Pavilion",
    category: "Cultural",
    description: "An underground exhibition space featuring brutalist concrete juxtaposed with holographic projection mapping installations.",
    tags: ["Brutalist", "Exhibition", "Holographic"]
  }
];

export function PortfolioGallerySection() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-surface/50">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black headline-font tracking-tighter uppercase mb-2">
              Select Archives
            </h2>
            <div className="h-1 w-24 bg-primary"></div>
          </div>
          <p className="text-on-surface-variant font-body max-w-md text-sm leading-relaxed">
            Review our latest architectural deployments. We don't just design buildings; we engineer spatial experiences for the future.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-auto lg:h-[600px]">
        {/* Project Selector */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {projects.map((project, idx) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(idx)}
              className={`text-left p-6 transition-all duration-500 border-l-2 ${
                activeProject === idx 
                  ? "border-primary bg-surface-container shadow-[0_0_20px_rgba(var(--primary),0.1)]" 
                  : "border-transparent bg-surface hover:bg-surface-container/50 text-on-surface-variant"
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs tracking-[0.2em] uppercase font-bold headline-font opacity-60">
                  0{idx + 1} // {project.category}
                </span>
                {activeProject === idx && <ArrowRight className="w-4 h-4 text-primary" />}
              </div>
              <h3 className={`text-2xl font-black headline-font uppercase ${activeProject === idx ? "text-primary" : ""}`}>
                {project.title}
              </h3>
            </button>
          ))}
        </div>

        {/* Project Display */}
        <div className="lg:col-span-8 relative bg-surface-container rounded-sm border border-surface/50 overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50 z-0"></div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 h-full flex flex-col p-8 md:p-12 justify-end min-h-[400px]"
            >
              {/* Abstract 3D Placeholder Graphic */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-1000">
                <motion.div 
                  animate={{ rotateY: 360, rotateX: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-64 h-64 border border-primary relative"
                >
                  <div className="absolute inset-0 border border-secondary rotate-45"></div>
                  <div className="absolute top-1/2 left-1/2 w-full h-full border border-tertiary -translate-x-1/2 -translate-y-1/2 rotate-[22.5deg]"></div>
                </motion.div>
              </div>

              <div className="relative z-20 max-w-2xl bg-background/80 backdrop-blur-md p-8 border border-surface/50">
                <div className="flex gap-2 mb-6 flex-wrap">
                  {projects[activeProject].tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-surface text-xs tracking-widest uppercase font-mono border border-outline/20">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-4xl font-black headline-font uppercase mb-4 text-white drop-shadow-lg">
                  {projects[activeProject].title}
                </h3>
                
                <p className="text-on-surface-variant font-body leading-relaxed mb-8">
                  {projects[activeProject].description}
                </p>
                
                <button className="flex items-center gap-2 text-sm font-bold headline-font uppercase tracking-widest text-primary hover:text-white transition-colors group/btn">
                  View Blueprints 
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="absolute top-8 right-8 flex gap-4 text-on-surface-variant/50">
                <Box className="w-6 h-6" />
                <Target className="w-6 h-6" />
                <Maximize className="w-6 h-6" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
