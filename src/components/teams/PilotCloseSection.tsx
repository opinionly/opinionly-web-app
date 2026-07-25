import TeamsCaptureForm from "./TeamsCaptureForm";

const checklist = [
  { bold: "8–12 weeks.", faint: "Long enough to see signal. Short enough to commit to." },
  { bold: "No cost.", faint: "No license, no per-seat fee, no commitment after." },
  {
    bold: "Your input shapes the product.",
    faint: "The dashboard, the privacy rules, the reports — all open.",
  },
  {
    bold: "Direct line to the founders.",
    faint: "You'll talk to the people building it, not to support.",
  },
];

function Checkmark() {
  return (
    <svg viewBox="0 0 18 18" fill="none" width={18} height={18} className="mt-0.5 shrink-0">
      <circle cx="9" cy="9" r="8" fill="#4c9a4a" opacity="0.15" />
      <path
        d="M5.5 9.5 L8 12 L13 7"
        stroke="#4c9a4a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function PilotCloseSection() {
  return (
    <section id="pilot" className="px-5 pt-12 pb-20 md:px-8 md:pb-24">
      <div
        className="relative mx-auto grid max-w-[1080px] grid-cols-1 items-center gap-8 overflow-hidden rounded-4xl px-7 py-12 md:grid-cols-[1.1fr_1fr] md:gap-14 md:px-16 md:py-20"
        style={{
          background: `
            radial-gradient(ellipse 800px 400px at 80% 100%, rgba(249, 164, 138, 0.35) 0%, transparent 60%),
            linear-gradient(135deg, #fde4d0 0%, #fbd0b0 100%)
          `,
        }}
      >
        <div className="min-w-0">
          <div className="mb-4 text-xs font-bold tracking-[0.12em] text-[#a04515] uppercase">
            Pilot program
          </div>
          <h2 className="mb-[18px] text-[30px] leading-[1.05] font-bold tracking-[-0.03em] text-ink md:text-[44px]">
            Be one of our first companies.
          </h2>
          <p className="mb-7 max-w-[480px] text-[17px] leading-[1.55] text-ink-soft">
            We&apos;re running pilots with a small number of teams through 2026. Free. No commitment. We work alongside you for eight to twelve weeks and shape the dashboard around what your company actually needs.
          </p>
          <TeamsCaptureForm
            id="pilot-close"
            finePrint="We respond within two business days. If we’re not a fit, we’ll tell you fast."
          />
        </div>

        <div className="min-w-0 rounded-[20px] bg-card p-7 shadow-(--shadow-md)">
          <h4 className="mb-[18px] text-[13px] font-semibold tracking-[0.1em] text-ink-faint uppercase">
            What a pilot looks like
          </h4>
          <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
            {checklist.map((item) => (
              <li
                key={item.bold}
                className="flex items-start gap-3 text-[15px] leading-[1.45] text-ink"
              >
                <Checkmark />
                <div>
                  <b className="font-semibold">{item.bold}</b>{" "}
                  <span className="font-normal text-ink-soft">{item.faint}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
