export default function TeamsNavbar() {
  return (
    <div className="relative z-10">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-[18px] md:px-8 md:py-6">
        <div className="inline-flex items-baseline gap-2.5 font-serif text-[26px] font-normal tracking-[-0.01em] text-ink italic">
          Opinionly
          <span className="relative -top-[3px] rounded-md bg-blue-soft px-2 py-[3px] font-sans text-[11px] font-semibold tracking-[0.08em] text-blue uppercase not-italic">
            For teams
          </span>
        </div>

        <div className="flex items-center gap-7">
          <a
            href="#how"
            className="hidden text-sm font-medium text-ink-soft transition-colors duration-150 hover:text-ink md:inline"
          >
            How it works
          </a>
          <a
            href="#privacy"
            className="hidden text-sm font-medium text-ink-soft transition-colors duration-150 hover:text-ink md:inline"
          >
            Privacy
          </a>
          <a
            href="#pilot"
            className="rounded-full bg-ink px-[18px] py-[9px] text-[13px] font-medium text-white transition-colors duration-150 hover:bg-[#3a3833]"
          >
            Request access
          </a>
        </div>
      </nav>
    </div>
  );
}
