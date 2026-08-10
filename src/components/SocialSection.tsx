"use client";

import Image from "next/image";
import { trackEvent } from "@/lib/analytics";
import { socialProfiles } from "@/lib/socials";

// Post graphics live in public/social/; the grid stays hidden until this has entries.
const posts: { src: string; alt: string; href: string }[] = [];

export default function SocialSection() {
  return (
    <section className="bg-cream px-5 py-[72px] sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1140px]">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-[680px] text-center">
          <div className="mb-3.5 text-xs font-bold tracking-[0.12em] text-[#b7461c] uppercase">
            Follow along
          </div>
          <h2 className="mb-4 text-[34px] leading-[1.05] font-bold tracking-[-0.03em] text-ink md:text-[48px]">
            We&rsquo;re building this in the open.
          </h2>
          <p className="text-lg text-ink-soft">
            Progress, behind-the-scenes, and the occasional honest opinion.
          </p>
        </div>

        {/* Follow buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {socialProfiles.map((s) => (
            <a
              key={s.name}
              className="inline-flex items-center gap-2.5 rounded-full bg-card px-6 py-3 text-[15px] font-semibold text-ink no-underline shadow-(--shadow-sm) transition-[box-shadow,transform] duration-150 hover:-translate-y-0.5 hover:shadow-(--shadow-md)"
              href={s.href}
              rel="noopener noreferrer"
              target="_blank"
              onClick={() =>
                trackEvent("social_follow_click", {
                  platform: s.name.toLowerCase(),
                  location: "social_section",
                })
              }
            >
              <s.Icon size={20} />
              {s.name}
            </a>
          ))}
        </div>

        {/* Recent posts */}
        {posts.length > 0 && (
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {posts.map((p) => (
              <a
                key={p.src}
                className="group overflow-hidden rounded-2xl shadow-(--shadow-sm)"
                href={p.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  alt={p.alt}
                  className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.03]"
                  height={1080}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  src={p.src}
                  width={1080}
                />
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
