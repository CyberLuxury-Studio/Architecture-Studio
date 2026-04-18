export function Footer() {
  return (
    <footer className="w-full py-12 mt-20 bg-background border-t border-white/5 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 max-w-7xl mx-auto gap-8">
        <div className="text-primary font-bold font-[family-name:var(--font-space-grotesk)] text-xl tracking-widest">
          GHOST_OS
        </div>
        <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
          {["Terminal", "Encryption_Docs", "Sitemap", "Legal"].map((item) => (
            <a
              key={item}
              href="#"
              className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.15em] uppercase text-white/30 hover:text-tertiary transition-colors duration-200 hover:translate-x-1"
            >
              {item.toUpperCase()}
            </a>
          ))}
        </nav>
        <div className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.15em] uppercase text-white/30 text-center md:text-right">
          ©2024 NEURAL_STEALTH_SYSTEMS. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
