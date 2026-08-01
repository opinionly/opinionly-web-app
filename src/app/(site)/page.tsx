import type { Metadata } from "next";
import GardenSection from "@/components/GardenSection";
import Hero from "@/components/Hero";
import HonestRepliesSection from "@/components/HonestRepliesSection";
import InsightsSection from "@/components/InsightsSection";
import InTheMomentSection from "@/components/InTheMomentSection";
import PrinciplesSection from "@/components/PrinciplesSection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <HonestRepliesSection />
      <InTheMomentSection />
      <InsightsSection />
      <GardenSection />
      <PrinciplesSection />
    </>
  );
}
