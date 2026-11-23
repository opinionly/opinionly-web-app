import DownloadCta from "@/components/DownloadCta";

/**
 * A deliberately quiet band. Someone evaluating Opinionly for their company
 * wants to hold it before booking a call, and the consumer app is the cheapest
 * way to do that, and it is also how their people will join. Still a step on
 * the way to setting up the company, not a rival to it.
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
            Take five minutes with it before you set up your company. It&apos;s
            also the app your people will join from.
          </p>
        </div>

        <DownloadCta align="center" campaign="teams" />
      </div>
    </section>
  );
}
