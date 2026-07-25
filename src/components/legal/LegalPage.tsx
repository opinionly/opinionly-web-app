import { LegalContent } from "@/lib/legal";
import LocalDate from "./LocalDate";

type LegalPageProps = LegalContent;

export default function LegalPage(props: LegalPageProps) {
  const {
    content,
    metadata: { dateRevised, title },
  } = props;

  return (
    <div className="legal-page mx-auto min-h-screen max-w-[760px] bg-cream px-5 pt-8 pb-16 text-[15px] leading-[1.7] text-ink-soft sm:px-8 sm:pt-12 sm:pb-24">
      <h1 className="mb-2 text-[28px] font-bold tracking-[-0.02em] text-ink sm:text-4xl">
        {title}
      </h1>
      {dateRevised && (
        <p className="mb-10 text-[smaller] text-ink-faint">
          Revised{" "}
          <span className="font-semibold">
            <LocalDate iso={dateRevised} />
          </span>
        </p>
      )}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
