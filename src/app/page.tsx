import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";

// Lazy load heavy components for better performance
const FuelCalculator = dynamic(() => import("@/components/FuelCalculator").then(mod => ({ default: mod.FuelCalculator })), {
  loading: () => <div className="min-h-[600px] animate-pulse bg-gray-50" />,
});
const Stats = dynamic(() => import("@/components/Stats").then(mod => ({ default: mod.Stats })), {
  loading: () => <div className="min-h-[200px] animate-pulse bg-gray-50" />,
});
const HowItWorks = dynamic(() => import("@/components/HowItWorks").then(mod => ({ default: mod.HowItWorks })), {
  loading: () => <div className="min-h-[800px] animate-pulse bg-gray-50" />,
});
const Testimonials = dynamic(() => import("@/components/Testimonials").then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="min-h-[500px] animate-pulse bg-gray-50" />,
});
const Partners = dynamic(() => import("@/components/Partners").then(mod => ({ default: mod.Partners })), {
  loading: () => <div className="min-h-[200px] animate-pulse bg-gray-50" />,
});
const CTA = dynamic(() => import("@/components/CTA").then(mod => ({ default: mod.CTA })), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-50" />,
});

export default function Home() {
  return (
    <main className="flex flex-col gap-0">
      <Hero />
      <Features />
      <FuelCalculator />
      <Stats />
      <HowItWorks />
      <Testimonials />
      <Partners />
      <CTA />
    </main>
  );
}
