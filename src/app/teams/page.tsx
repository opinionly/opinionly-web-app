import type { Metadata } from "next";
import TeamsNavbar from "@/components/teams/TeamsNavbar";
import TeamsHero from "@/components/teams/TeamsHero";
import MechanicFlipSection from "@/components/teams/MechanicFlipSection";
import DashboardPreviewSection from "@/components/teams/DashboardPreviewSection";
import PrivacySection from "@/components/teams/PrivacySection";
import WhyItWorksSection from "@/components/teams/WhyItWorksSection";
import PilotCloseSection from "@/components/teams/PilotCloseSection";
import Footer from "@/components/Footer";

// One string across search and every share surface, so the three can't drift
// apart the way they had.
const DESCRIPTION =
  "An honest read on your team, surfaced from how they already work rather than surveys. Free pilots through 2026.";

export const metadata: Metadata = {
  title: "Opinionly for teams — An honest read on your team",
  description: DESCRIPTION,
  // Served at both teams.opinionly.io (rewritten in proxy.ts) and /teams — the
  // subdomain is the address we publish, so point every copy at it.
  alternates: { canonical: "https://teams.opinionly.io" },
  openGraph: {
    type: "website",
    url: "https://teams.opinionly.io",
    title: "Opinionly for teams — An honest read on your team",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Opinionly for teams — An honest read on your team",
    description: DESCRIPTION,
  },
};

export default function TeamsPage() {
  return (
    <>
      <TeamsNavbar />
      <main>
        <TeamsHero />
        <MechanicFlipSection />
        <DashboardPreviewSection />
        <PrivacySection />
        <WhyItWorksSection />
        <PilotCloseSection />
      </main>
      <Footer />
    </>
  );
}
