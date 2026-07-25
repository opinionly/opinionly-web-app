import TeamsCaptureForm from "./TeamsCaptureForm";

export default function TeamsHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 1200px 600px at 25% 0%, rgba(227, 237, 251, 0.85) 0%, transparent 60%),
          radial-gradient(ellipse 800px 500px at 85% 40%, rgba(43, 126, 245, 0.10) 0%, transparent 60%),
          var(--cream)
        `,
      }}
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-5 pt-8 pb-20 lg:min-h-[600px] lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:px-8 lg:pt-12 lg:pb-28">
        {/* Left: copy */}
        <div className="min-w-0">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-white/70 px-3.5 py-[7px] text-[13px] font-medium text-ink-soft shadow-(--shadow-sm) backdrop-blur-[8px]">
            <span className="inline-block size-1.5 shrink-0 rounded-full bg-blue" />
            Pilot program · 2026
          </div>

          <h1 className="mb-5 max-w-[560px] text-[clamp(42px,5.5vw,68px)] leading-[1.02] font-bold tracking-[-0.035em] text-ink">
            An honest read on your team.
          </h1>

          <p className="mb-9 max-w-[480px] text-lg leading-[1.4] font-normal text-ink-soft lg:text-[22px]">
            Surfaced from how they already work — not from another survey no one wants to fill out.
          </p>

          <TeamsCaptureForm
            id="pilot-hero"
            finePrint="Free pilot, no commitment. We respond within two business days."
          />
        </div>

        {/* Right: dashboard mock */}
        <div className="relative w-full max-w-[520px] min-w-0 lg:ml-auto">
          <div className="overflow-hidden rounded-[18px] border border-line bg-card shadow-(--shadow-lg)">
            {/* Chrome */}
            <div className="flex items-center gap-1.5 border-b border-line bg-[#fdfcfa] px-4 py-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="size-2.5 shrink-0 rounded-full bg-line-strong" />
              ))}
              <div className="ml-3.5 min-w-0 truncate rounded-md bg-cream px-3 py-1 text-xs text-ink-faint">
                teams.opinionly.io / your-company
              </div>
            </div>

            {/* Body */}
            <div className="px-5 pt-[22px] pb-5 sm:px-6 sm:pb-6">
              <div className="mb-[18px] flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <div className="text-[15px] font-semibold text-ink">
                  Company pulse
                </div>
                <div className="text-[11px] text-ink-faint">
                  Last 30 days · 142 people · 4,820 signals
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1.4fr_1fr]">
                {/* Sentiment trend (tall, left) */}
                <div className="min-w-0 rounded-xl bg-cream px-4 pt-3.5 pb-[18px] sm:row-span-2">
                  <div className="mb-2 text-[10px] font-semibold tracking-[0.06em] text-ink-faint uppercase">
                    Sentiment, trailing 90d
                  </div>
                  <div className="text-2xl leading-none font-bold tracking-[-0.02em] text-ink">
                    +0.34
                    <span className="ml-1 text-xs font-medium text-ink-faint">
                      / 1.0
                    </span>
                  </div>
                  <div className="mt-1 inline-flex items-center gap-[3px] text-[11px] font-semibold text-green">
                    <svg width="10" height="10" viewBox="0 0 10 10">
                      <path
                        d="M2 7 L5 3 L8 7"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    +0.08 vs. prior 90d
                  </div>
                  <svg
                    viewBox="0 0 200 60"
                    preserveAspectRatio="none"
                    className="mt-2 h-14 w-full"
                  >
                    <defs>
                      <linearGradient id="sentGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2b7ef5" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#2b7ef5" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 40 L20 38 L40 42 L60 36 L80 30 L100 34 L120 26 L140 22 L160 24 L180 18 L200 14 L200 60 L0 60 Z"
                      fill="url(#sentGrad)"
                    />
                    <path
                      d="M0 40 L20 38 L40 42 L60 36 L80 30 L100 34 L120 26 L140 22 L160 24 L180 18 L200 14"
                      stroke="#2b7ef5"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="mt-2.5 rounded-md border-l-[3px] border-amber bg-card px-3 py-2.5 text-xs leading-[1.4] text-ink-soft">
                    Sentiment has improved steadily since the new project rotation policy. Watch the engineering org — they&apos;re driving most of the lift.
                  </div>
                </div>

                {/* Themes (right top) */}
                <div className="min-w-0 rounded-xl bg-cream px-4 py-3.5">
                  <div className="mb-2 text-[10px] font-semibold tracking-[0.06em] text-ink-faint uppercase">
                    Top themes
                  </div>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {[
                      { label: "growth", hot: false },
                      { label: "meeting load", hot: true },
                      { label: "1:1 quality", hot: false },
                      { label: "recognition", hot: false },
                    ].map((t) => (
                      <span
                        key={t.label}
                        className={`rounded-full px-[9px] py-1 text-[11px] font-medium ${
                          t.hot
                            ? "border border-transparent bg-[#fde9c8] text-[#8a5a10]"
                            : "border border-line bg-card text-ink-soft"
                        }`}
                      >
                        {t.label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Engagement (right bottom) */}
                <div className="min-w-0 rounded-xl bg-cream px-4 py-3.5">
                  <div className="mb-2 text-[10px] font-semibold tracking-[0.06em] text-ink-faint uppercase">
                    Active employees
                  </div>
                  <div className="text-2xl leading-none font-bold tracking-[-0.02em] text-ink">
                    87
                    <span className="ml-1 text-xs font-medium text-ink-faint">
                      %
                    </span>
                  </div>
                  <div className="mt-2 flex h-11 items-end gap-[5px]">
                    {[
                      { h: 60, muted: false },
                      { h: 75, muted: false },
                      { h: 68, muted: false },
                      { h: 80, muted: false },
                      { h: 88, muted: false },
                      { h: 92, muted: true },
                    ].map((b, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-t-[3px] ${
                          b.muted ? "bg-line-strong" : "bg-blue opacity-85"
                        }`}
                        style={{ height: `${b.h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-3.5 -bottom-3.5 -rotate-2 rounded-md bg-ink px-2.5 py-1.5 text-[10px] font-semibold tracking-[0.06em] text-white uppercase shadow-(--shadow-md)">
            Concept · Not real data
          </div>
        </div>
      </div>
    </section>
  );
}
