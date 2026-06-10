import Image from "next/image";
import screen04Garden from "../../public/screens/screen_04_garden.png";

export default function GardenSection() {
  return (
    <div style={{ padding: "0 32px" }}>
      <div
        className="garden-card"
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          background:
            "linear-gradient(135deg, var(--yellow-soft) 0%, var(--yellow-deep) 100%)",
          borderRadius: 36,
          padding: "88px 64px",
          display: "grid",
          gridTemplateColumns: "1fr 340px",
          gap: 64,
          alignItems: "center",
        }}
      >
        {/* Copy */}
        <div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#8a6620",
              marginBottom: 22,
            }}
          >
            A different idea of growth
          </div>
          <blockquote
            className="garden-blockquote"
            style={{
              fontFamily:
                "var(--font-instrument-serif), Georgia, 'Times New Roman', serif",
              fontSize: 44,
              lineHeight: 1.18,
              letterSpacing: "-0.015em",
              color: "#2d2008",
              fontWeight: 400,
            }}
          >
            Each goal is a plant. Receiving feedback is water; reflecting on it
            is sun.{" "}
            <em style={{ fontStyle: "italic", color: "#6b4f10" }}>
              No counts. No streaks.
            </em>
          </blockquote>
          <p
            style={{
              marginTop: 28,
              fontSize: 15,
              color: "#6b4f10",
              lineHeight: 1.5,
              maxWidth: 420,
            }}
          >
            From the app&apos;s Garden — where the people you trust quietly help
            you grow.
          </p>
        </div>

        {/* Phone */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ maxWidth: 260, width: "100%" }}>
            <Image
              src={screen04Garden}
              alt="The Garden in Opinionly"
              priority
              style={{
                width: "100%",
                height: "auto",
                borderRadius: 36,
                boxShadow: "var(--shadow-md)",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
