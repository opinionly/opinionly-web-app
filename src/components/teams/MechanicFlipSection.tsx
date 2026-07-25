import Image from "next/image";

const phoneScreens = [
  { src: "/screens/screen_posts@2x.png", alt: "Opinionly feed" },
  { src: "/screens/screen_03_post_detail.png", alt: "A post with replies" },
  { src: "/screens/screen_04_garden.png", alt: "The Garden" },
  { src: "/screens/screen_05a_profile_self.png", alt: "Your profile" },
];

export default function MechanicFlipSection() {
  return (
    <section id="how" className="bg-cream px-5 py-20 md:px-8 md:py-30">
      <div className="mx-auto max-w-[1080px]">
        <div className="mx-auto mb-16 max-w-[680px] text-center">
          <div className="mb-[18px] text-xs font-bold tracking-[0.12em] text-blue uppercase">
            How it works
          </div>
          <h2 className="mb-4 text-[34px] leading-[1.05] font-bold tracking-[-0.03em] text-ink md:text-[48px]">
            The data is real because the app is.
          </h2>
          <p className="text-lg leading-[1.55] text-ink-soft">
            Your team isn&apos;t filling out surveys. They&apos;re using
            Opinionly to ask their own questions and grow. You see the aggregate
            — the patterns underneath, in plain words, without ever seeing who
            said what.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-10">
          {/* Left: inside the company */}
          <div className="flex min-h-[360px] min-w-0 flex-col rounded-3xl bg-card px-6 py-9 shadow-(--shadow-md) sm:px-8">
            <div className="mb-4 text-[11px] font-bold tracking-[0.1em] text-ink-faint uppercase">
              Inside the company
            </div>
            <h3 className="mb-3 text-2xl leading-[1.2] font-bold tracking-[-0.02em] text-ink">
              Your team uses the app to grow.
            </h3>
            <p className="mb-5 text-sm leading-[1.55] text-ink-soft">
              They ask their own questions of the people they actually trust.
              They give honest, anonymous replies to each other. They tend their
              own goals. It&apos;s their tool first.
            </p>
            <div className="mt-auto">
              <div className="flex items-end gap-2">
                {phoneScreens.map((s, i) => (
                  <div
                    key={s.src}
                    className={`relative aspect-[9/16] max-w-[80px] flex-1 overflow-hidden rounded-[14px] border border-line bg-cream ${
                      i === 1 ? "-translate-y-2" : i === 3 ? "-translate-y-1" : ""
                    }`}
                  >
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      style={{ objectFit: "cover", objectPosition: "top" }}
                      sizes="80px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="mx-auto flex w-20 flex-col items-center gap-2 text-ink-faint md:mx-0">
            <div className="text-[11px] font-semibold tracking-[0.08em] uppercase">
              Aggregates
            </div>
            <svg
              viewBox="0 0 64 24"
              fill="none"
              className="my-2 h-6 w-16 rotate-90 md:my-0 md:rotate-0"
            >
              <path
                d="M2 12 L58 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
              <path
                d="M52 6 L60 12 L52 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            <div className="text-[11px] font-semibold tracking-[0.08em] uppercase opacity-60">
              Anonymously
            </div>
          </div>

          {/* Right: inside the dashboard */}
          <div className="flex min-h-[360px] min-w-0 flex-col rounded-3xl bg-card px-6 py-9 shadow-(--shadow-md) sm:px-8">
            <div className="mb-4 text-[11px] font-bold tracking-[0.1em] text-ink-faint uppercase">
              Inside the dashboard
            </div>
            <h3 className="mb-3 text-2xl leading-[1.2] font-bold tracking-[-0.02em] text-ink">
              You see how the company is doing.
            </h3>
            <p className="mb-5 text-sm leading-[1.55] text-ink-soft">
              Sentiment trends. The themes people are circling around. Where
              things are improving and where they&apos;re not. Always in
              aggregate. Never tied to anyone.
            </p>
            <div className="mt-auto">
              <div className="rounded-xl border border-line bg-[linear-gradient(180deg,#fbfaf6_0%,var(--cream)_100%)] p-3.5">
                {[
                  {
                    k: "Overall sentiment",
                    v: "+0.34",
                    pill: "↑",
                    warn: false,
                  },
                  { k: "Engineering", v: "+0.41", pill: "↑", warn: false },
                  { k: "Product", v: "+0.22", pill: null, warn: false },
                  {
                    k: "Rising theme",
                    v: "meeting load",
                    pill: "!",
                    warn: true,
                  },
                  { k: "Coverage", v: "87% active", pill: null, warn: false },
                ].map((row, i, arr) => (
                  <div
                    key={row.k}
                    className={`flex items-center justify-between py-1.5 text-xs ${
                      i === arr.length - 1 ? "" : "border-b border-line"
                    }`}
                  >
                    <span className="text-ink-soft">{row.k}</span>
                    <span className="font-semibold text-ink">
                      {row.v}
                      {row.pill && (
                        <span
                          className={`ml-1 inline-block rounded px-1.5 py-0.5 text-[10px] font-bold ${
                            row.warn
                              ? "bg-[#fde9c8] text-[#8a5a10]"
                              : "bg-green-soft text-green"
                          }`}
                        >
                          {row.pill}
                        </span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
