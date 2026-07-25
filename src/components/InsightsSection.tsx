import Image from "next/image";
import screenInsights from "../../public/screens/screen_insights.png";

export default function InsightsSection() {
  return (
    <section className="bg-blue-tint px-5 py-[72px] sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_420px] lg:gap-20">
        {/* Copy */}
        <div className="min-w-0">
          <div className="mb-[18px] text-xs font-bold tracking-[0.12em] text-blue uppercase">
            Insights, private to you
          </div>
          <h2 className="mb-[22px] text-[34px] leading-[1.05] font-bold tracking-[-0.03em] text-ink md:text-[48px]">
            See how you actually come across.
          </h2>
          <p className="max-w-[460px] text-lg leading-[1.55] text-ink-soft">
            Every honest reply quietly adds up. Opinionly turns them into a
            private picture — sentiment over time, the themes people keep
            noticing, and how you show up when you give feedback back.
          </p>
          <p className="mt-3.5 max-w-[460px] text-lg leading-[1.55] text-ink-soft">
            Only you ever see it. No scores to perform for — just a clearer sense
            of how you land.
          </p>
        </div>

        {/* Phone */}
        <div className="mx-auto w-full max-w-[340px]">
          <Image
            src={screenInsights}
            alt="A private view of how you're perceived over time in Opinionly"
            className="block h-auto w-full rounded-[36px] shadow-(--shadow-md)"
          />
        </div>
      </div>
    </section>
  );
}
