import DownloadCta from "@/components/DownloadCta";

/**
 * A deliberately quiet band. Someone evaluating Opinionly for their company
 * wants to hold it before booking a call, and the consumer app is the cheapest
 * way to do that — but a team pilot is a conversation, not a download, so this
 * stays a step on the way to PilotCloseSection rather than a rival to it.
 */
export default function TeamsDownloadSection() {
  return (
    <section className="px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto flex max-w-[1080px] flex-col items-center gap-7 rounded-4xl bg-blue-tint px-7 py-12 text-center md:px-16">
        <div>
          <div className="mb-3.5 text-xs font-bold tracking-[0.12em] text-blue uppercase">
            Try it yourself
          </div>
          <h2 className="mb-4 text-[28px] leading-[1.08] font-bold tracking-[-0.03em] text-ink md:text-[38px]">
            See it from the inside first.
          </h2>
          <p className="mx-auto max-w-[520px] text-[17px] leading-[1.55] text-ink-soft">
            The consumer app is the same honesty mechanic your team would use.
            Take five minutes with it before you decide whether a pilot is worth
            your time.
          </p>
        </div>

        <DownloadCta align="center" campaign="teams" />
      </div>
    </section>
  );
}
