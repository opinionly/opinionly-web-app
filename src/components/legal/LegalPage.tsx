import { LegalContent } from "@/lib/legal";
import LocalDate from "./LocalDate";

type LegalPageProps = LegalContent;

export default function LegalPage(props: LegalPageProps) {
  const {
    content,
    metadata: { dateRevised, title },
  } = props;

  return (
    <div
      className="legal-page"
      style={{
        background: "var(--cream)",
        color: "var(--ink-soft)",
        fontSize: 15,
        lineHeight: 1.7,
        margin: "0 auto",
        maxWidth: 760,
        minHeight: "100vh",
        padding: "48px 32px 96px",
      }}
    >
      <h1
        style={{
          color: "var(--ink)",
          fontSize: 36,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          margin: "0 0 8px",
        }}
      >
        {title}
      </h1>
      {dateRevised && (
        <p
          style={{
            color: "var(--ink-faint)",
            fontSize: "smaller",
            margin: "0 0 40px",
          }}
        >
          Revised{" "}
          <span style={{ fontWeight: 600 }}>
            <LocalDate iso={dateRevised} />
          </span>
        </p>
      )}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
