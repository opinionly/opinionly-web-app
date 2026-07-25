import Image from "next/image";
import screenThread from "../../public/screens/screen_post_thread.png";

export default function HonestRepliesSection() {
  return (
    <section id="how" className="bg-blue-soft px-5 py-[72px] sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_420px] lg:gap-20">
        {/* Copy */}
        <div className="min-w-0">
          <div className="mb-[18px] text-xs font-bold tracking-[0.12em] text-blue uppercase">
            Honest replies, every time
          </div>
          <h2 className="mb-[22px] text-[34px] leading-[1.05] font-bold tracking-[-0.03em] text-ink md:text-[48px]">
            You ask. They reply, anonymously.
          </h2>
          <p className="max-w-[460px] text-lg leading-[1.55] text-ink-soft">
            Post a question to the people who actually know you. They see your
            name. You don&apos;t see theirs. That asymmetry is the whole trick —
            it&apos;s what makes the feedback honest enough to actually use.
          </p>
          <p className="mt-3.5 max-w-[460px] text-lg leading-[1.55] text-ink-soft">
            You hear what they really think. Not the polite version they&apos;d
            tell you to your face.
          </p>
        </div>

        {/* Phone */}
        <div className="mx-auto w-full max-w-[340px]">
          <Image
            src={screenThread}
            alt="A named post with an anonymous reply in Opinionly"
            className="block h-auto w-full rounded-[36px] shadow-(--shadow-md)"
          />
        </div>
      </div>
    </section>
  );
}
