import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** Shared pieces for the generated Open Graph cards. */

export const OG_SIZE = { height: 630, width: 1200 };
export const OG_CONTENT_TYPE = "image/png";

const INK = "#1c1b18";
const INK_SOFT = "#5a5852";
const INK_FAINT = "#8e8b83";
const LINE = "rgba(28, 27, 24, 0.08)";

export async function loadOgFonts() {
  const [regular, bold, serifItalic] = await Promise.all([
    readFile(join(process.cwd(), "assets/Inter-Regular.ttf")),
    readFile(join(process.cwd(), "assets/Inter-Bold.ttf")),
    readFile(join(process.cwd(), "assets/InstrumentSerif-Italic.ttf")),
  ]);

  return [
    { data: regular, name: "Inter", style: "normal" as const, weight: 400 as const },
    { data: bold, name: "Inter", style: "normal" as const, weight: 700 as const },
    {
      data: serifItalic,
      name: "Instrument Serif",
      style: "italic" as const,
      weight: 400 as const,
    },
  ];
}

interface OgCardProps {
  /** Colour of the dot in the eyebrow pill. */
  accent: string;
  background: string;
  eyebrow: string;
  headline: string;
  /** Renders the "FOR TEAMS" badge beside the wordmark, as the teams navbar does. */
  forTeams?: boolean;
  sub: string;
  url: string;
}

export function OgCard({
  accent,
  background,
  eyebrow,
  forTeams = false,
  headline,
  sub,
  url,
}: OgCardProps) {
  return (
    <div
      style={{
        background,
        display: "flex",
        flexDirection: "column",
        fontFamily: "Inter",
        height: "100%",
        justifyContent: "space-between",
        padding: "68px 72px",
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div style={{ alignItems: "baseline", display: "flex", gap: 14 }}>
          <div
            style={{
              color: INK,
              fontFamily: "Instrument Serif",
              fontSize: 46,
              fontStyle: "italic",
              letterSpacing: "-0.5px",
            }}
          >
            Opinionly
          </div>
          {forTeams && (
            <div
              style={{
                backgroundColor: "#e3edfb",
                borderRadius: 8,
                color: "#2b7ef5",
                display: "flex",
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: "1.4px",
                padding: "6px 12px",
              }}
            >
              FOR TEAMS
            </div>
          )}
        </div>
        <div style={{ color: INK_FAINT, display: "flex", fontSize: 24 }}>{url}</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            alignItems: "center",
            alignSelf: "flex-start",
            backgroundColor: "rgba(255, 255, 255, 0.72)",
            border: `1px solid ${LINE}`,
            borderRadius: 999,
            color: INK_SOFT,
            display: "flex",
            fontSize: 24,
            gap: 12,
            padding: "12px 24px",
          }}
        >
          <div
            style={{
              backgroundColor: accent,
              borderRadius: 999,
              display: "flex",
              height: 12,
              width: 12,
            }}
          />
          {eyebrow}
        </div>

        <div
          style={{
            color: INK,
            display: "flex",
            fontSize: 82,
            fontWeight: 700,
            letterSpacing: "-2.9px",
            lineHeight: 1.04,
            marginTop: 34,
            maxWidth: 940,
          }}
        >
          {headline}
        </div>

        <div
          style={{
            color: INK_SOFT,
            display: "flex",
            fontSize: 30,
            lineHeight: 1.35,
            marginTop: 22,
            maxWidth: 820,
          }}
        >
          {sub}
        </div>
      </div>
    </div>
  );
}
