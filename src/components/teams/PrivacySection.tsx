const commitments = [
  {
    title: "Aggregate only.",
    body: "Nothing surfaces in your dashboard until enough people have contributed that no one can be identified by what they said. We're starting with a minimum of five per any visible metric, and we'll raise that with our pilot partners.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none">
        <circle cx="6" cy="10" r="2" fill="#7ab3ff" />
        <circle cx="10" cy="10" r="2" fill="#7ab3ff" />
        <circle cx="14" cy="10" r="2" fill="#7ab3ff" />
        <path d="M3 4 L17 4" stroke="#7ab3ff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 16 L17 16" stroke="#7ab3ff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "No individual stories. Ever.",
    body: "The honest replies people give each other inside the app stay inside the app. Your dashboard never quotes anyone, never reveals who answered, never lets you drill from a theme into a person. There is no escape hatch.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none">
        <rect x="3" y="7" width="14" height="10" rx="2" stroke="#7ab3ff" strokeWidth="1.5" />
        <path d="M7 7 V5 a3 3 0 0 1 6 0 V7" stroke="#7ab3ff" strokeWidth="1.5" fill="none" />
        <circle cx="10" cy="12" r="1.5" fill="#7ab3ff" />
      </svg>
    ),
  },
  {
    title: "The team owns their participation.",
    body: "Premium features are default-on when the company pays, but every employee can opt out, change what's shared, or use Opinionly purely as a personal tool. Your dashboard reflects who's in — never who's out.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none">
        <path
          d="M10 3 L4 7 V11 a6 6 0 0 0 6 6 a6 6 0 0 0 6 -6 V7 Z"
          stroke="#7ab3ff"
          strokeWidth="1.5"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          d="M7 10 L9 12 L13 8"
          stroke="#7ab3ff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
];

export default function PrivacySection() {
  return (
    <section id="privacy" className="bg-ink px-5 py-20 text-white md:px-8 md:py-32">
      <div className="mx-auto max-w-[1080px]">
        <div className="mb-16 max-w-[760px]">
          <div className="mb-[22px] text-xs font-bold tracking-[0.12em] text-white/55 uppercase">
            Privacy
          </div>
          <h2 className="mb-6 text-[38px] leading-[1.02] font-bold tracking-[-0.035em] text-white md:text-[56px]">
            You will{" "}
            <em className="font-serif font-normal text-[#f9c8a8] italic">
              never
            </em>{" "}
            see what any one person said.
          </h2>
          <p className="max-w-[620px] text-[19px] leading-[1.55] text-white/72">
            A dashboard like this only works if your team trusts it. If they suspect their manager is reading their replies, they stop being honest. So we don&apos;t let you read them. Not the manager, not the CEO, not the HR lead. No one.
          </p>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {commitments.map((c) => (
            <div
              key={c.title}
              className="rounded-[18px] border border-white/8 bg-white/4 px-[26px] py-7"
            >
              <div className="mb-[18px] flex size-9 items-center justify-center rounded-[10px] bg-white/6">
                <span className="inline-flex size-5">{c.icon}</span>
              </div>
              <h3 className="mb-2 text-[17px] font-semibold tracking-[-0.01em] text-white">
                {c.title}
              </h3>
              <p className="text-sm leading-[1.55] text-white/62">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="max-w-[640px] border-l-2 border-white/15 pl-4 text-[13px] leading-[1.6] text-white/45">
          <strong className="font-semibold text-white/70">
            Where we are honest:
          </strong>{" "}
          these are early commitments. We&apos;re working out the specific policies — minimum-N thresholds, opt-out flows, retention rules — alongside our pilot partners, because the people whose trust matters most are the ones who&apos;ll be living with it. If this matters to you, that&apos;s a feature, not a bug.
        </div>
      </div>
    </section>
  );
}
