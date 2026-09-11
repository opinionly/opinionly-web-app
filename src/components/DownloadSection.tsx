import Image from "next/image";
import { APP_LIVE } from "@/lib/app-links";
import DownloadCta from "./DownloadCta";

/**
 * The closing ask. The page used to end on "follow along", which left every
 * visitor who scrolled the whole way with nothing to do — this is the surface
 * the navbar's "Get the app" points at, so it has to work for an Android
 * visitor as well as an iPhone one.
 */
export default function DownloadSection() {
  return (
    <section
      id="get-the-app"
      className="px-5 py-[72px] sm:px-8 sm:py-28"
      style={{
        background: `
          radial-gradient(ellipse 900px 500px at 50% 0%, rgba(253, 228, 208, 0.55) 0%, transparent 62%),
          var(--paper)
        `,
      }}
    >
      {/* Links to `#waitlist` are already out in the world — social posts, the
          Buffer queue, old email footers. Post-launch the hero no longer owns
          that id, so it lands here instead of scrolling nowhere. */}
      {APP_LIVE && <span aria-hidden id="waitlist" />}

      <div className="mx-auto max-w-[1140px]">
        <div className="mx-auto max-w-[680px] text-center">
          <div className="mb-3.5 text-xs font-bold tracking-[0.12em] text-[#b7461c] uppercase">
            {APP_LIVE ? "Get the app" : "Get early access"}
          </div>

          <h2 className="mb-4 text-[34px] leading-[1.05] font-bold tracking-[-0.03em] text-ink md:text-[48px]">
            {APP_LIVE
              ? "Start with one honest question."
              : "Be there when it opens."}
          </h2>

          <p className="mb-9 text-lg text-ink-soft">
            {APP_LIVE
              ? "Ask the people who know you best. Their replies are anonymous, which is what lets them be straight with you."
              : "We're letting people in a handful at a time. Leave your email and we'll come find you."}
          </p>

          <div className="flex justify-center">
            <DownloadCta campaign="closing" align="center" androidNotify />
          </div>
        </div>

        {APP_LIVE && (
          <div className="mx-auto mt-16 flex max-w-[760px] items-end justify-center gap-4 sm:gap-7">
            {[
              { alt: "The Opinionly feed", src: "/screens/screen_feed.png" },
              {
                alt: "Insights from your replies",
                src: "/screens/screen_insights.png",
              },
              {
                alt: "An Opinionly post and its replies",
                src: "/screens/screen_03_post_detail.png",
              },
            ].map((s, i) => (
              <Image
                key={s.src}
                alt={s.alt}
                className={`h-auto w-[30%] max-w-[210px] rounded-[22px] drop-shadow-[2px_4px_10px_var(--ink-faint)] ${
                  i === 1 ? "" : "hidden sm:block"
                }`}
                height={609}
                sizes="(max-width: 640px) 60vw, 210px"
                src={s.src}
                width={280}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
