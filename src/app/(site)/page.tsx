import GardenSection from "@/components/GardenSection";
import Hero from "@/components/Hero";
import HonestRepliesSection from "@/components/HonestRepliesSection";
import InTheMomentSection from "@/components/InTheMomentSection";
import PrinciplesSection from "@/components/PrinciplesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <HonestRepliesSection />
      <InTheMomentSection />
      <GardenSection />
      <PrinciplesSection />
    </>
  );
}
