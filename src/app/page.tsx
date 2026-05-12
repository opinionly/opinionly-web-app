import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HonestRepliesSection from "@/components/HonestRepliesSection";
import InTheMomentSection from "@/components/InTheMomentSection";
import GardenSection from "@/components/GardenSection";
import PrinciplesSection from "@/components/PrinciplesSection";
import PilotSection from "@/components/PilotSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HonestRepliesSection />
        <InTheMomentSection />
        <GardenSection />
        <PrinciplesSection />
        <PilotSection />
      </main>
      <Footer />
    </>
  );
}
