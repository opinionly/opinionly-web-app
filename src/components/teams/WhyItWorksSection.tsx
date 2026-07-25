const rows = [
  {
    bad: "Quarterly surveys ask people to perform.",
    good: "Opinionly doesn’t ask anything extra.",
    body: "Your team is already in the app — asking their own questions, replying to their friends, tending their goals. The signal you see in the dashboard is a byproduct of them using it for themselves. There’s no survey to ignore.",
  },
  {
    bad: "Dashboards measure what’s easy to measure.",
    good: "We surface what people actually care about.",
    body: "Engagement scores are easy. They’re also nearly meaningless. The dashboard surfaces the themes your team is genuinely circling — what they’re asking about, what they keep returning to, what’s shifting — because those are the things they chose to bring up.",
  },
  {
    bad: "Annual reviews arrive too late to act on.",
    good: "The picture updates as it changes.",
    body: "Concerns rise and fade in weeks, not quarters. By the time a yearly survey catches a problem, half the people who flagged it have already left. Opinionly’s signal moves at the speed of the team — which is the only speed that lets you do anything about it.",
  },
];

export default function WhyItWorksSection() {
  return (
    <section className="bg-cream px-5 py-20 md:px-8 md:py-30">
      <div className="mx-auto max-w-[1080px]">
        <div className="mx-auto mb-16 max-w-[720px] text-center">
          <div className="mb-[18px] text-xs font-bold tracking-[0.12em] text-blue uppercase">
            Why this works
          </div>
          <h2 className="mb-4 text-[34px] leading-[1.05] font-bold tracking-[-0.03em] text-ink md:text-[48px]">
            Three things most tools get wrong.
          </h2>
          <p className="text-lg leading-[1.55] text-ink-soft">
            We didn&apos;t build Opinionly to be another engagement platform. We built it because the existing approach quietly stopped working a decade ago.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {rows.map((r, i, arr) => (
            <div
              key={r.bad}
              className={`grid grid-cols-1 items-center gap-4 border-t border-line py-6 md:grid-cols-2 md:gap-12 md:px-2 md:py-8 ${
                i === arr.length - 1 ? "border-b border-b-line" : ""
              }`}
            >
              <div className="text-lg font-medium tracking-[-0.01em] text-ink-faint line-through decoration-rose decoration-2 md:text-[22px]">
                {r.bad}
              </div>
              <div className="text-lg leading-[1.3] font-semibold tracking-[-0.015em] text-ink md:text-[22px]">
                <span className="mr-2 font-bold text-blue">→</span>
                {r.good}
              </div>
              <p className="col-span-full mt-1.5 max-w-[760px] text-[15px] leading-[1.55] text-ink-soft">
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
