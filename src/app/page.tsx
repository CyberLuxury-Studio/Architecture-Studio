import { Navbar } from "@/components/shared/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { Footer } from "@/components/sections/Footer";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";



export default function Home() {
  return (
    <main className="min-h-screen bg-background text-on-background selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="tiers">
        <PricingSection />
      </div>
      <div id="terminal">
        <CtaSection />
      </div>
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
