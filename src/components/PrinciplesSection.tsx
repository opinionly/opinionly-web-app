const principles = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width={26} height={26}>
        <circle cx="8" cy="9" r="3" fill="#2b7ef5" />
        <path
          d="M3 19c0-2.8 2.2-5 5-5s5 2.2 5 5"
          stroke="#2b7ef5"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle
          cx="17"
          cy="9"
          r="3"
          stroke="#8e8b83"
          strokeWidth="2"
          strokeDasharray="2 2"
          fill="none"
        />
        <path
          d="M12 19c0-2.8 2.2-5 5-5s5 2.2 5 5"
          stroke="#8e8b83"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="2 2"
          fill="none"
        />
      </svg>
    ),
    title: "Honest by design",
    body: "You're named. They're anonymous. That asymmetry is what gives you answers you can actually act on.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width={26} height={26}>
        <circle cx="11" cy="13" r="8" stroke="#1c1b18" strokeWidth="2" fill="none" />
        <path
          d="M11 9v4l2.5 2.5"
          stroke="#1c1b18"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="19" cy="5" r="2" fill="#f4a93a" />
      </svg>
    ),
    title: "In the moment",
    body: "Ask while the context is fresh. Reply while it matters.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width={26} height={26}>
        <path d="M12 21V11" stroke="#4c9a4a" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M12 11C12 8 9 6 6 6c0 3 2 5 6 5z"
          fill="#4c9a4a"
        />
        <path
          d="M12 13C12 10 15 8 18 8c0 3-2 5-6 5z"
          fill="#7bbf6b"
        />
        <path
          d="M5 21h14"
          stroke="#1c1b18"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.2"
        />
      </svg>
    ),
    title: "Growth, not scorekeeping",
    body: "Goals are plants. Feedback is water. No scores, no streaks, nothing to keep count of.",
  },
];

export default function PrinciplesSection() {
  return (
    <section className="bg-green-soft px-5 py-[72px] sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1140px]">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-[680px] text-center">
          <div className="mb-3.5 text-xs font-bold tracking-[0.12em] text-green uppercase">
            What makes it different
          </div>
          <h2 className="mb-4 text-[34px] leading-[1.05] font-bold tracking-[-0.03em] text-ink md:text-[48px]">
            Built on three ideas.
          </h2>
          <p className="text-lg text-ink-soft">
            The simple commitments that shape how Opinionly works.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {principles.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl bg-card px-8 py-9 shadow-(--shadow-sm)"
            >
              <div className="mb-6 flex size-[52px] items-center justify-center rounded-[14px] bg-green-soft">
                {p.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-[-0.01em] text-ink">
                {p.title}
              </h3>
              <p className="text-[15px] leading-[1.55] text-ink-soft">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
