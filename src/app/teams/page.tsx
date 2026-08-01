import type { Metadata } from "next";
import TeamsNavbar from "@/components/teams/TeamsNavbar";
import TeamsHero from "@/components/teams/TeamsHero";
import MechanicFlipSection from "@/components/teams/MechanicFlipSection";
import DashboardPreviewSection from "@/components/teams/DashboardPreviewSection";
import PrivacySection from "@/components/teams/PrivacySection";
import WhyItWorksSection from "@/components/teams/WhyItWorksSection";
import PilotCloseSection from "@/components/teams/PilotCloseSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Opinionly for teams — An honest read on your team",
  description:
    "Surfaced from how your team already works — not from another survey. Pilot program 2026.",
  // Served at both teams.opinionly.io (rewritten in proxy.ts) and /teams — the
  // subdomain is the address we publish, so point every copy at it.
  alternates: { canonical: "https://teams.opinionly.io" },
  openGraph: {
    type: "website",
    url: "https://teams.opinionly.io",
    title: "Opinionly for teams — An honest read on your team",
    description:
      "Surfaced from how they already work — not from another survey. Pilot program 2026.",
    images: [
      {
        url: "https://teams.opinionly.io/og-teams.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Opinionly for teams — An honest read on your team",
    description: "Surfaced from how they already work — not from another survey.",
    images: ["https://teams.opinionly.io/og-teams.png"],
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
