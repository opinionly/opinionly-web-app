const pcardBase =
  "min-w-0 rounded-[20px] border border-line bg-card px-5 pt-[26px] pb-7 shadow-(--shadow-sm) sm:px-[26px]";
const pcardLabel =
  "mb-2.5 text-[11px] font-semibold tracking-[0.08em] text-ink-faint uppercase";
const pcardTitle = "mb-1 text-[17px] font-semibold tracking-[-0.01em] text-ink";
const pcardSub = "text-[13px] text-ink-faint";
const pcardValue =
  "mb-2 text-4xl leading-none font-bold tracking-[-0.025em] text-ink";

export default function DashboardPreviewSection() {
  return (
    <section className="bg-paper px-5 py-20 md:px-8 md:py-30">
      <div className="mx-auto max-w-[1080px]">
        <div className="mx-auto mb-16 max-w-[720px] text-center">
          <div className="mb-[18px] text-xs font-bold tracking-[0.12em] text-blue uppercase">
            What&apos;s in the dashboard
          </div>
          <h2 className="mb-4 text-[34px] leading-[1.05] font-bold tracking-[-0.03em] text-ink md:text-[48px]">
            Built around the questions you&apos;d actually ask.
          </h2>
          <p className="text-lg leading-[1.55] text-ink-soft">
            Not vanity metrics. Not engagement scores no one trusts. The patterns under the surface, in plain words.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {/* Big sentiment card */}
          <div className={`${pcardBase} lg:col-span-3`}>
            <div className={pcardLabel}>Headline</div>
            <div className={pcardTitle}>Team sentiment is trending up.</div>
            <div className={pcardSub}>
              +0.08 over the last 30 days, driven by the engineering org.
            </div>
            <div className="mt-2">
              <svg
                viewBox="0 0 600 140"
                preserveAspectRatio="none"
                className="block h-auto w-full"
              >
                <defs>
                  <linearGradient id="pg1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2b7ef5" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#2b7ef5" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="100" x2="600" y2="100" stroke="#e8e4db" strokeWidth="1" strokeDasharray="3 4" />
                <line x1="0" y1="60" x2="600" y2="60" stroke="#e8e4db" strokeWidth="1" strokeDasharray="3 4" />
                <line x1="0" y1="20" x2="600" y2="20" stroke="#e8e4db" strokeWidth="1" strokeDasharray="3 4" />
                <path
                  d="M0 90 L40 85 L80 92 L120 78 L160 70 L200 76 L240 64 L280 58 L320 62 L360 54 L400 46 L440 50 L480 42 L520 36 L560 30 L600 24 L600 140 L0 140 Z"
                  fill="url(#pg1)"
                />
                <path
                  d="M0 90 L40 85 L80 92 L120 78 L160 70 L200 76 L240 64 L280 58 L320 62 L360 54 L400 46 L440 50 L480 42 L520 36 L560 30 L600 24"
                  stroke="#2b7ef5"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="600" cy="24" r="4" fill="#2b7ef5" />
                <circle cx="600" cy="24" r="8" fill="#2b7ef5" opacity="0.2" />
              </svg>
            </div>
          </div>

          {/* Themes card */}
          <div className={`${pcardBase} lg:col-span-2`}>
            <div className={pcardLabel}>Top themes this month</div>
            <div className={`${pcardTitle} mb-3.5`}>What people are talking about.</div>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "meeting load", count: "+42%", rising: true },
                { label: "growth", count: "128", rising: false },
                { label: "recognition", count: "94", rising: false },
                { label: "1:1 quality", count: "71", rising: false },
                { label: "project clarity", count: "63", rising: false },
                { label: "workload", count: "58", rising: false },
              ].map((t) => (
                <span
                  key={t.label}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-[7px] text-[13px] font-medium ${
                    t.rising ? "bg-[#fde9c8] text-[#6a4310]" : "bg-cream text-ink-soft"
                  }`}
                >
                  {t.label}
                  <span
                    className={`text-[11px] font-semibold ${
                      t.rising ? "text-[#a06a10]" : "text-ink-faint"
                    }`}
                  >
                    {t.count}
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* Coverage */}
          <div className={`${pcardBase} lg:col-span-1`}>
            <div className={pcardLabel}>Coverage</div>
            <div className={pcardValue}>
              87
              <span className="text-lg font-medium text-ink-faint">%</span>
            </div>
            <div className={`${pcardSub} mb-3.5`}>Active employees, last 30d</div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-[3px] bg-cream">
              <div className="h-full w-[87%] rounded-[3px] bg-blue" />
            </div>
          </div>

          {/* Rising concern */}
          <div className={`${pcardBase} lg:col-span-2`}>
            <div className={pcardLabel}>Watch this</div>
            <div className={pcardTitle}>Meeting load is the rising concern.</div>
            <div className={`${pcardSub} mb-[18px]`}>
              Up 42% in the last two weeks. Most of the signal is from product and design.
            </div>
            <div className="flex items-baseline gap-3">
              <div className={`${pcardValue} text-[28px]`}>42%</div>
              <div className="inline-flex items-center gap-1 text-xs font-semibold text-rose">
                <svg width="10" height="10" viewBox="0 0 10 10">
                  <path
                    d="M2 3 L5 7 L8 3"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                vs. last 30 days
              </div>
            </div>
          </div>

          {/* Org breakdown */}
          <div className={`${pcardBase} lg:col-span-1`}>
            <div className={pcardLabel}>By team</div>
            <div className={`${pcardTitle} mb-3`}>Sentiment</div>
            {[
              { name: "Engineering", v: "+0.41", color: "text-green" },
              { name: "Product", v: "+0.22", color: "text-ink" },
              { name: "Sales", v: "+0.12", color: "text-ink-soft" },
              { name: "Operations", v: "−0.08", color: "text-rose" },
            ].map((row, i) => (
              <div
                key={row.name}
                className={`flex items-center justify-between py-2.5 text-sm ${
                  i === 0 ? "" : "border-t border-line"
                }`}
              >
                <span className="font-medium text-ink">{row.name}</span>
                <span className={`text-xs font-semibold ${row.color}`}>{row.v}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-[13px] text-ink-faint italic">
          An early sketch. We&apos;re building the real thing with our pilot partners — what you see here will change.
        </p>
      </div>
    </section>
  );
}
