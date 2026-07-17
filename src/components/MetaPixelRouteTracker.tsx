"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

// The base Pixel in the root layout fires PageView on the initial load. This
// fires it again on client-side (SPA) navigation. We remember the last path we
// fired for (seeded with the initial path) so the first mount — and React's
// StrictMode double-invoke of effects in dev — don't re-count the initial load.
export default function MetaPixelRouteTracker() {
  const pathname = usePathname();
  const lastTracked = useRef(pathname);

  useEffect(() => {
    if (!PIXEL_ID) return;
    if (lastTracked.current === pathname) return;
    lastTracked.current = pathname;
    const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;
    if (typeof fbq === "function") {
      fbq("track", "PageView");
    }
  }, [pathname]);

  return null;
}
