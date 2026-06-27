"use client";

export default function LegalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      style={{
        alignItems: "center",
        background: "var(--cream)",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <p style={{ color: "var(--ink-soft)", fontSize: 15 }}>
        Something went wrong loading this page.
      </p>
      <pre
        style={{
          background: "var(--line)",
          borderRadius: 6,
          color: "var(--ink-soft)",
          fontSize: 12,
          maxWidth: 560,
          padding: "12px 16px",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
      >
        {error.message}
        {error.digest && `\ndigest: ${error.digest}`}
      </pre>
      <button
        onClick={reset}
        style={{
          background: "var(--ink)",
          borderRadius: 6,
          color: "var(--cream)",
          cursor: "pointer",
          fontSize: 13,
          padding: "8px 16px",
        }}
      >
        Try again
      </button>
    </div>
  );
}
