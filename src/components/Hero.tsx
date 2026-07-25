import Image from "next/image";
import EmailCaptureForm from "./EmailCaptureForm";

const repliers = [
  { alias: "Calm-Reed", delay: "0.5s", nudge: -12 },
  { alias: "Brave-Lark", delay: "1.1s", nudge: 0 },
  { alias: "Wry-Oak", delay: "1.7s", nudge: -12 },
];

const charWrap = "flex h-[110px] w-20 items-end justify-center";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 1200px 600px at 30% 0%, rgba(253, 228, 208, 0.6) 0%, transparent 60%),
          radial-gradient(ellipse 800px 500px at 80% 30%, rgba(249, 164, 138, 0.25) 0%, transparent 60%),
          var(--cream)
        `,
      }}
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 px-5 pt-8 pb-16 sm:px-8 sm:pt-12 sm:pb-24 lg:min-h-[600px] lg:grid-cols-[1.05fr_1fr]">
        {/* ── Left: Copy ── */}
        <div className="min-w-0">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-white/70 px-3.5 py-[7px] text-[13px] font-medium text-ink-soft shadow-(--shadow-sm) backdrop-blur-[8px]">
            <span className="inline-block size-1.5 shrink-0 rounded-full bg-coral" />
            Coming soon &middot; iOS and Android
          </div>

          <h1 className="mb-5 max-w-[540px] text-[clamp(44px,5.5vw,68px)] leading-[1.02] font-bold tracking-[-0.035em] text-ink">
            The honest feedback you&rsquo;ve been missing.
          </h1>

          <p className="mb-9 max-w-[460px] text-xl leading-[1.4] font-normal text-ink-soft lg:text-[22px]">
            From the people who know you.
          </p>

          <EmailCaptureForm id="waitlist" />

          <p className="mt-3.5 text-[13px] text-ink-faint">
            We write infrequently. No spam. Unsubscribe anytime.
          </p>
        </div>

        {/* ── Right: Visual ── */}
        <div className="relative flex h-[540px] items-center justify-center sm:h-[560px] lg:h-[600px]">
          <div className="relative flex h-full w-full max-w-[440px] items-center justify-center lg:max-w-[480px]">
            {/* Asker: avatar + name pill + Alex cartoon body */}
            <div
              className="absolute top-9 left-0 z-[5] flex flex-col items-center gap-2.5"
              style={{
                animation:
                  "fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both",
              }}
            >
              <div className="flex size-14 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-[linear-gradient(135deg,#fde0c8,#f9a48a)] shadow-(--shadow-md)">
                <svg
                  viewBox="0 0 56 56"
                  xmlns="http://www.w3.org/2000/svg"
                  className="block h-full w-full"
                >
                  <rect width="56" height="56" fill="#fde0c8" />
                  <ellipse cx="28" cy="32" rx="18" ry="19" fill="#f0bf9c" />
                  <path
                    d="M10 26 Q 10 12 28 12 Q 46 12 46 26 L 46 32 Q 38 24 28 24 Q 18 24 10 32 Z"
                    fill="#3a2817"
                  />
                  <circle cx="21" cy="32" r="1.8" fill="#1c1b18" />
                  <circle cx="35" cy="32" r="1.8" fill="#1c1b18" />
                  <path
                    d="M23 42 Q 28 45 33 42"
                    stroke="#1c1b18"
                    strokeWidth="1.6"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <circle cx="18" cy="38" r="2" fill="#f59a7a" opacity="0.5" />
                  <circle cx="38" cy="38" r="2" fill="#f59a7a" opacity="0.5" />
                </svg>
              </div>

              <div className="flex items-center gap-1 rounded-full bg-card py-1.5 pr-[9px] pl-1.5 text-xs leading-normal font-semibold whitespace-nowrap text-ink shadow-(--shadow-sm)">
                <span className="rounded-lg bg-[#00C0E8] px-1.5 py-0.5 text-[smaller] font-semibold text-white">
                  You
                </span>
                Alex
              </div>

              <div className="mt-1 hidden h-[130px] w-[100px] items-end justify-center sm:flex">
                <svg
                  viewBox="0 0 80 120"
                  xmlns="http://www.w3.org/2000/svg"
                  className="block h-full w-full overflow-visible"
                >
                  <ellipse
                    cx="40"
                    cy="117"
                    rx="22"
                    ry="2.5"
                    fill="rgba(28,27,24,0.14)"
                  />
                  <rect
                    x="31"
                    y="86"
                    width="7"
                    height="28"
                    rx="2"
                    fill="#2a2a2a"
                  />
                  <rect
                    x="42"
                    y="86"
                    width="7"
                    height="28"
                    rx="2"
                    fill="#2a2a2a"
                  />
                  <ellipse cx="34" cy="114" rx="5" ry="2" fill="#1c1b18" />
                  <ellipse cx="46" cy="114" rx="5" ry="2" fill="#1c1b18" />
                  <path
                    d="M22 60 Q 22 54 28 52 L 52 52 Q 58 54 58 60 L 56 90 Q 50 92 40 92 Q 30 92 24 90 Z"
                    fill="#2b7ef5"
                  />
                  <path
                    d="M24 64 Q 20 72 28 80"
                    stroke="#f0bf9c"
                    strokeWidth="7"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M56 64 Q 60 72 52 80"
                    stroke="#f0bf9c"
                    strokeWidth="7"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <rect
                    x="30"
                    y="70"
                    width="20"
                    height="24"
                    rx="3"
                    fill="#1c1b18"
                  />
                  <rect
                    x="32.5"
                    y="73"
                    width="15"
                    height="17"
                    rx="1.5"
                    fill="#cfe0fb"
                  />
                  <circle cx="29" cy="78" r="4" fill="#f0bf9c" />
                  <circle cx="51" cy="78" r="4" fill="#f0bf9c" />
                  <rect x="36" y="42" width="8" height="10" fill="#f0bf9c" />
                  <ellipse cx="40" cy="32" rx="14" ry="15" fill="#f0bf9c" />
                  <path
                    d="M26 28 Q 26 14 40 14 Q 54 14 54 28 L 54 32 Q 48 25 40 25 Q 32 25 26 32 Z"
                    fill="#3a2817"
                  />
                  <ellipse cx="35" cy="36" rx="1.1" ry="1.4" fill="#1c1b18" />
                  <ellipse cx="45" cy="36" rx="1.1" ry="1.4" fill="#1c1b18" />
                  <path
                    d="M37 42 Q 40 43 43 42"
                    stroke="#1c1b18"
                    strokeWidth="1.2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Phone screen */}
            <Image
              alt="The Opinionly feed — honest questions from people who know you"
              className="absolute top-[30px] left-1/2 h-auto w-[230px] -translate-x-1/2 rounded-[30px] drop-shadow-[2px_4px_6px_var(--ink-faint)] lg:w-[250px]"
              height={609}
              loading="eager"
              priority
              src="/screens/screen_feed.png"
              width={280}
            />

            {/* Replier pills with silhouette avatars */}
            <div className="absolute top-[50px] right-0 z-[5] flex flex-col gap-2.5">
              {repliers.map((r) => (
                <div
                  key={r.alias}
                  className="flex items-center gap-2.5 rounded-2xl bg-card py-2 pr-3.5 pl-2 shadow-(--shadow-md)"
                  style={{
                    animation: `fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${r.delay} both`,
                    transform: r.nudge ? `translateX(${r.nudge}px)` : undefined,
                  }}
                >
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#1c1b18]">
                    <svg viewBox="0 0 28 28" fill="none" width={20} height={20}>
                      <circle cx="14" cy="11" r="4.5" fill="#fff" />
                      <path
                        d="M5 24 Q 5 16 14 16 Q 23 16 23 24 Z"
                        fill="#fff"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[13px] leading-none font-semibold text-ink">
                      {r.alias}
                    </span>
                    <span className="text-[11px] leading-none text-ink-faint">
                      replied honestly
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Cluster of full-body replier characters (bottom-right) */}
            <div
              className="absolute -right-1 bottom-0 z-[5] hidden items-end sm:flex lg:-right-2"
              aria-hidden="true"
            >
              {/* Calm-Reed: glasses, blue sweater */}
              <div className="z-[1] translate-x-2.5">
                <div
                  className={charWrap}
                  style={{
                    animation:
                      "riseInChar 0.7s cubic-bezier(0.22, 1.25, 0.36, 1) 1.0s both",
                  }}
                >
                  <svg
                    viewBox="0 0 80 120"
                    xmlns="http://www.w3.org/2000/svg"
                    className="block h-full w-full overflow-visible"
                  >
                    <ellipse
                      cx="40"
                      cy="117"
                      rx="22"
                      ry="2.5"
                      fill="rgba(28,27,24,0.14)"
                    />
                    <rect
                      x="32"
                      y="86"
                      width="7"
                      height="28"
                      rx="2"
                      fill="#3a4a5a"
                    />
                    <rect
                      x="41"
                      y="86"
                      width="7"
                      height="28"
                      rx="2"
                      fill="#3a4a5a"
                    />
                    <ellipse cx="35" cy="114" rx="5" ry="2" fill="#1c1b18" />
                    <ellipse cx="45" cy="114" rx="5" ry="2" fill="#1c1b18" />
                    <path
                      d="M20 60 Q 20 54 26 52 L 54 52 Q 60 54 60 60 L 58 92 L 22 92 Z"
                      fill="#2b7ef5"
                    />
                    <path
                      d="M24 62 Q 18 70 26 76 Q 34 76 38 50"
                      stroke="#e6b58e"
                      strokeWidth="6"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M58 62 Q 64 76 58 90"
                      stroke="#e6b58e"
                      strokeWidth="6"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <rect x="36" y="42" width="8" height="10" fill="#e6b58e" />
                    <ellipse cx="40" cy="32" rx="14" ry="15" fill="#e6b58e" />
                    <path
                      d="M26 24 Q 30 14 40 14 Q 50 14 54 24 Q 48 20 40 20 Q 32 20 26 24 Z"
                      fill="#1c1b18"
                    />
                    <circle
                      cx="34"
                      cy="33"
                      r="3.6"
                      fill="#fff"
                      stroke="#1c1b18"
                      strokeWidth="1.2"
                    />
                    <circle
                      cx="46"
                      cy="33"
                      r="3.6"
                      fill="#fff"
                      stroke="#1c1b18"
                      strokeWidth="1.2"
                    />
                    <line
                      x1="37.6"
                      y1="33"
                      x2="42.4"
                      y2="33"
                      stroke="#1c1b18"
                      strokeWidth="1.2"
                    />
                    <circle cx="34" cy="33" r="0.9" fill="#1c1b18" />
                    <circle cx="46" cy="33" r="0.9" fill="#1c1b18" />
                    <path
                      d="M37 42 L 43 42"
                      stroke="#1c1b18"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Brave-Lark: amber sweater, waving */}
              <div className="z-[3]">
                <div
                  className={charWrap}
                  style={{
                    animation:
                      "riseInChar 0.7s cubic-bezier(0.22, 1.25, 0.36, 1) 1.3s both",
                  }}
                >
                  <svg
                    viewBox="0 0 80 120"
                    xmlns="http://www.w3.org/2000/svg"
                    className="block h-full w-full overflow-visible"
                  >
                    <ellipse
                      cx="40"
                      cy="117"
                      rx="22"
                      ry="2.5"
                      fill="rgba(28,27,24,0.14)"
                    />
                    <rect
                      x="32"
                      y="86"
                      width="7"
                      height="28"
                      rx="2"
                      fill="#6b4a2a"
                    />
                    <rect
                      x="41"
                      y="86"
                      width="7"
                      height="28"
                      rx="2"
                      fill="#6b4a2a"
                    />
                    <ellipse cx="35" cy="114" rx="5" ry="2" fill="#1c1b18" />
                    <ellipse cx="45" cy="114" rx="5" ry="2" fill="#1c1b18" />
                    <path
                      d="M20 60 Q 20 54 26 52 L 54 52 Q 60 54 60 60 L 58 92 L 22 92 Z"
                      fill="#f4a93a"
                    />
                    <path
                      d="M22 62 Q 16 76 22 90"
                      stroke="#f0c2a0"
                      strokeWidth="6"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M58 60 Q 70 48 74 28"
                      stroke="#f0c2a0"
                      strokeWidth="6"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <circle cx="74" cy="26" r="4.2" fill="#f0c2a0" />
                    <rect x="36" y="42" width="8" height="10" fill="#f0c2a0" />
                    <ellipse cx="40" cy="32" rx="14" ry="15" fill="#f0c2a0" />
                    <path
                      d="M26 28 Q 26 14 40 14 Q 54 14 54 28 L 54 36 Q 48 28 40 28 Q 32 28 26 36 Z"
                      fill="#7c4a1f"
                    />
                    <path
                      d="M52 26 Q 62 30 62 44 Q 58 38 53 36 Z"
                      fill="#7c4a1f"
                    />
                    <path
                      d="M33 33 Q 35 31 37 33"
                      stroke="#1c1b18"
                      strokeWidth="1.3"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M43 33 Q 45 31 47 33"
                      stroke="#1c1b18"
                      strokeWidth="1.3"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M36 40 Q 40 43 44 40"
                      stroke="#1c1b18"
                      strokeWidth="1.3"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="32"
                      cy="38"
                      r="1.8"
                      fill="#f9a48a"
                      opacity="0.55"
                    />
                    <circle
                      cx="48"
                      cy="38"
                      r="1.8"
                      fill="#f9a48a"
                      opacity="0.55"
                    />
                  </svg>
                </div>
              </div>

              {/* Wry-Oak: beanie, teal sweater, arms crossed */}
              <div className="z-[2] -translate-x-2.5">
                <div
                  className={charWrap}
                  style={{
                    animation:
                      "riseInChar 0.7s cubic-bezier(0.22, 1.25, 0.36, 1) 1.6s both",
                  }}
                >
                  <svg
                    viewBox="0 0 80 120"
                    xmlns="http://www.w3.org/2000/svg"
                    className="block h-full w-full overflow-visible"
                  >
                    <ellipse
                      cx="40"
                      cy="117"
                      rx="22"
                      ry="2.5"
                      fill="rgba(28,27,24,0.14)"
                    />
                    <rect
                      x="32"
                      y="86"
                      width="7"
                      height="28"
                      rx="2"
                      fill="#2f3a3a"
                    />
                    <rect
                      x="41"
                      y="86"
                      width="7"
                      height="28"
                      rx="2"
                      fill="#2f3a3a"
                    />
                    <ellipse cx="35" cy="114" rx="5" ry="2" fill="#1c1b18" />
                    <ellipse cx="45" cy="114" rx="5" ry="2" fill="#1c1b18" />
                    <path
                      d="M20 60 Q 20 54 26 52 L 54 52 Q 60 54 60 60 L 58 92 L 22 92 Z"
                      fill="#4a9d96"
                    />
                    <path
                      d="M22 64 Q 24 74 38 74"
                      stroke="#d9a578"
                      strokeWidth="6"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M58 64 Q 56 74 42 74"
                      stroke="#d9a578"
                      strokeWidth="6"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <rect x="36" y="42" width="8" height="10" fill="#d9a578" />
                    <ellipse cx="40" cy="32" rx="14" ry="15" fill="#d9a578" />
                    <path
                      d="M25 24 Q 25 12 40 12 Q 55 12 55 24 L 55 28 L 25 28 Z"
                      fill="#3a5856"
                    />
                    <path
                      d="M25 28 Q 25 31 28 31 L 52 31 Q 55 31 55 28 Z"
                      fill="#2a4844"
                    />
                    <circle cx="35" cy="34" r="1.2" fill="#1c1b18" />
                    <circle cx="45" cy="34" r="1.2" fill="#1c1b18" />
                    <path
                      d="M36 42 Q 40 40 44 42"
                      stroke="#1c1b18"
                      strokeWidth="1.3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
