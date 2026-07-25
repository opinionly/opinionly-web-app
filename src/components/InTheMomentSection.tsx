import Image from "next/image";
import screen02Compose from "../../public/screens/screen_02_compose.png";

export default function InTheMomentSection() {
  return (
    <section className="bg-cream px-5 py-[72px] sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-center gap-12 lg:grid-cols-[420px_1fr] lg:gap-20">
        {/* Phone (left) */}
        <div className="mx-auto w-full max-w-[340px]">
          <Image
            src={screen02Compose}
            alt="Composing a post in Opinionly"
            className="block h-auto w-full rounded-[36px] shadow-(--shadow-md)"
          />
        </div>

        {/* Copy (right) */}
        <div className="min-w-0">
          <div className="mb-[18px] text-xs font-bold tracking-[0.12em] text-[#c14a1f] uppercase">
            When it&apos;s fresh, not weeks later
          </div>
          <h2 className="mb-[22px] text-[34px] leading-[1.05] font-bold tracking-[-0.03em] text-ink md:text-[48px]">
            Ask in the moment. Hear back while it still matters.
          </h2>
          <p className="max-w-[460px] text-lg leading-[1.55] text-ink-soft">
            Most feedback arrives too late, from the wrong people, in the wrong
            tone. Opinionly is built for the small moments — the conversation
            that felt off, the message you weren&apos;t sure about, the thing you
            can&apos;t stop thinking about on the walk home.
          </p>
          <p className="mt-3.5 max-w-[460px] text-lg leading-[1.55] text-ink-soft">
            Ask the question. Get real answers. Move on.
          </p>
        </div>
      </div>
    </section>
  );
}
