import Image from "next/image";
import screen04Garden from "../../public/screens/screen_04_garden.png";

export default function GardenSection() {
  return (
    <div className="px-5 sm:px-8">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-center gap-12 rounded-[36px] bg-[linear-gradient(135deg,var(--yellow-soft)_0%,var(--yellow-deep)_100%)] px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1fr_340px] lg:gap-16 lg:px-16 lg:py-[88px]">
        {/* Copy */}
        <div className="min-w-0">
          <div className="mb-[22px] text-xs font-bold tracking-[0.12em] text-[#8a6620] uppercase">
            A different idea of growth
          </div>
          <blockquote className="font-serif text-[28px] leading-[1.18] font-normal tracking-[-0.015em] text-[#2d2008] lg:text-[44px]">
            Each goal is a plant. Receiving feedback is water; reflecting on it
            is sun.{" "}
            <em className="text-[#6b4f10] italic">No counts. No streaks.</em>
          </blockquote>
          <p className="mt-7 max-w-[420px] text-[15px] leading-[1.5] text-[#6b4f10]">
            From the app&apos;s Garden — where the people you trust quietly help
            you grow.
          </p>
        </div>

        {/* Phone */}
        <div className="flex justify-center">
          <div className="w-full max-w-[260px]">
            <Image
              src={screen04Garden}
              alt="The Garden in Opinionly"
              priority
              className="block h-auto w-full rounded-[36px] shadow-(--shadow-md)"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
