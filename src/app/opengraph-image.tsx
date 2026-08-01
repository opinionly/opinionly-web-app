import { ImageResponse } from "next/og";
import { loadOgFonts, OgCard, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const alt = "Opinionly — The honest feedback you've been missing";
export const contentType = OG_CONTENT_TYPE;
export const size = OG_SIZE;

// Mirrors the Hero's cream-and-peach wash. Each stop fades to a zero-alpha copy
// of its own colour — fading to `transparent` interpolates through black and
// greys the cream out.
const BACKGROUND = `radial-gradient(1100px 620px at 26% -6%, rgba(253, 228, 208, 0.95), rgba(253, 228, 208, 0) 66%),
   radial-gradient(760px 520px at 88% 26%, rgba(249, 164, 138, 0.38), rgba(249, 164, 138, 0) 68%),
   #f6f2ea`;

export default async function Image() {
  return new ImageResponse(
    (
      <OgCard
        accent="#f9a48a"
        background={BACKGROUND}
        eyebrow="Coming soon · iOS and Android"
        headline="The honest feedback you’ve been missing."
        sub="From the people who know you."
        url="opinionly.io"
      />
    ),
    { ...size, fonts: await loadOgFonts() },
  );
}
