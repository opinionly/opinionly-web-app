"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

// The Meta Pixel and the LinkedIn Insight Tag in the root layout each fire one
// PageView on the initial load. This fires them again on client-side (SPA)
// navigation. We remember the last path we fired for (seeded with the initial
// path) so the first mount — and React's StrictMode double-invoke of effects in
// dev — don't re-count the initial load.
export default function AdPixelRouteTracker() {
  const pathname = usePathname();
  const lastTracked = useRef(pathname);

  useEffect(() => {
    if (lastTracked.current === pathname) return;
    lastTracked.current = pathname;
    const w = window as unknown as {
      fbq?: (...args: unknown[]) => void;
      lintrk?: (...args: unknown[]) => void;
    };
    if (PIXEL_ID && typeof w.fbq === "function") {
      w.fbq("track", "PageView");
    }
    if (typeof w.lintrk === "function") {
      w.lintrk("track");
    }
  }, [pathname]);

  return null;
}
