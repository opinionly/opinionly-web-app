"use client";

export default function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ position: "relative", zIndex: 10 }}>
      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "24px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "var(--font-instrument-serif), Georgia, serif",
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: 26,
            letterSpacing: "-0.01em",
            color: "var(--ink)",
            cursor: "default",
            userSelect: "none",
          }}
        >
          Opinionly
        </div>

        {/* Nav links */}
        <div
          style={{ display: "flex", gap: 28, alignItems: "center" }}
          className="nav-links-container"
        >
          <NavLink label="How it works" onClick={() => scrollTo("how")} />
          <button
            onClick={() => scrollTo("waitlist")}
            style={{
              background: "var(--ink)",
              color: "white",
              padding: "9px 18px",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 500,
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "background 0.15s",
              lineHeight: 1,
            }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "#3a3833";
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "var(--ink)";
            }}
          >
            Join waitlist
          </button>
        </div>
      </nav>
    </div>
  );
}

function NavLink({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="nav-links-text"
      style={{
        fontSize: 14,
        fontWeight: 500,
        color: "var(--ink-soft)",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
        fontFamily: "inherit",
        transition: "color 0.15s",
      }}
      onMouseOver={(e) => {
        (e.currentTarget as HTMLButtonElement).style.color = "var(--ink)";
      }}
      onMouseOut={(e) => {
        (e.currentTarget as HTMLButtonElement).style.color = "var(--ink-soft)";
      }}
    >
      {label}
    </button>
  );
}
