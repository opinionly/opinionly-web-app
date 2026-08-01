import { ImageResponse } from "next/og";
import { loadOgFonts, OgCard, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const alt = "Opinionly for teams — An honest read on your team";
export const contentType = OG_CONTENT_TYPE;
export const size = OG_SIZE;

// Mirrors the teams hero's cream-and-blue wash. Each stop fades to a zero-alpha
// copy of its own colour — fading to `transparent` interpolates through black
// and greys the cream out.
const BACKGROUND = `radial-gradient(1100px 620px at 24% -6%, rgba(227, 237, 251, 1), rgba(227, 237, 251, 0) 66%),
   radial-gradient(760px 520px at 88% 30%, rgba(43, 126, 245, 0.2), rgba(43, 126, 245, 0) 68%),
   #f6f2ea`;

export default async function Image() {
  return new ImageResponse(
    (
      <OgCard
        accent="#2b7ef5"
        background={BACKGROUND}
        eyebrow="Pilot program · 2026"
        forTeams
        headline="An honest read on your team."
        sub="Surfaced from how they already work — not from another survey."
        url="teams.opinionly.io"
      />
    ),
    { ...size, fonts: await loadOgFonts() },
  );
}
