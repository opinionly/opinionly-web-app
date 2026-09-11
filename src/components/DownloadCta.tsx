"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";
import { trackEvent, trackPixel } from "@/lib/analytics";
import { ANDROID_URL, appStoreUrl, CAMPAIGNS } from "@/lib/app-links";
import EmailCaptureForm from "./EmailCaptureForm";

/**
 * Apple ships the badge at 119.66×40 and forbids redrawing or restretching it,
 * so the only freedom here is scale — this holds the ratio at a size that
 * clears Apple's minimum comfortably on a phone.
 */
const BADGE_WIDTH = 162;
const BADGE_HEIGHT = 54;

type Platform = "ios" | "android" | "desktop";

interface Props {
  /**
   * Placement key. Resolves to the App Store `ct` token via CAMPAIGNS, so
   * installs trace back to the surface that earned them rather than to "the
   * website" — while DOM ids and analytics labels stay on the short name.
   */
  campaign: keyof typeof CAMPAIGNS;
  /** Full-width sections centre their stack; the hero stays left-aligned. */
  align?: "left" | "center";
  /**
   * Offer the Android notify-me form to visitors who aren't on Android — a
   * desktop visitor shopping for their Android phone otherwise has no way to
   * register interest. Android visitors already get the form as their primary
   * CTA, so this never doubles up.
   */
  androidNotify?: boolean;
  /**
   * Desktop-only QR. On by default, but the hero opts out: it already carries
   * the headline, the sub, the badge and the fine print, and a second scannable
   * card there only repeats what the closing section does with more room.
   */
  showQr?: boolean;
}

function detectPlatform(): Platform {
  const ua = navigator.userAgent;

  if (/iPhone|iPad|iPod/.test(ua)) return "ios";

  // An iPad on iPadOS 13+ claims to be a Mac. Touch points are what still
  // separate the two, and a desktop Safari reports 0.
  if (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1) return "ios";

  if (/Android/.test(ua)) return "android";

  return "desktop";
}

/**
 * The user agent is an external, read-only store that never changes for the
 * life of the page — so it subscribes to nothing. Reading it through
 * useSyncExternalStore rather than an effect gives React a real server
 * snapshot (null) to hydrate against, instead of a first paint it has to
 * correct.
 */
const subscribeToNothing = () => () => {};

function usePlatform(): Platform | null {
  return useSyncExternalStore(subscribeToNothing, detectPlatform, () => null);
}

export default function DownloadCta({
  campaign,
  align = "left",
  androidNotify = false,
  showQr = true,
}: Props) {
  // Null on the server and during hydration, where there is no user agent to
  // read. That renders the App Store badge — correct everywhere, just not yet
  // tailored — rather than guessing a platform and flashing the wrong CTA.
  const platform = usePlatform();

  const stack = align === "center" ? "items-center text-center" : "items-start";

  // Android visitors have nothing to download yet — offering them a badge for a
  // phone they aren't holding is the one genuinely useless outcome here.
  if (platform === "android" && !ANDROID_URL) {
    return (
      <div className={`flex flex-col gap-3 ${stack}`}>
        <EmailCaptureForm
          id={`${campaign}-android`}
          source="android_notify"
          submitLabel="Notify me"
          successLabel="We'll email you ✓"
        />
        <p className="max-w-[440px] text-[13px] text-ink-faint">
          Opinionly is on iPhone today. Android is on the way. We&rsquo;ll email
          you the day it lands, and nothing else.
        </p>
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-4 ${stack}`}>
      <a
        href={appStoreUrl(CAMPAIGNS[campaign])}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition-transform duration-150 hover:-translate-y-0.5"
        onClick={() => {
          trackEvent("download_click", {
            platform: "ios",
            campaign,
            location: campaign,
          });
          trackPixel("Lead", { content_name: "ios_download" });
        }}
      >
        <Image
          alt="Download on the App Store"
          height={BADGE_HEIGHT}
          src="/badges/download-on-the-app-store.svg"
          width={BADGE_WIDTH}
        />
      </a>

      {/* A desktop visitor can't act on a store link from the machine they're
          on, so the QR moves them to the device that can install it. */}
      {showQr && platform === "desktop" && (
        <div className="flex items-center gap-3 rounded-2xl bg-card p-3 shadow-(--shadow-sm)">
          {/* 41 modules wide, encoding /download rather than the store URL so
              a printed or screenshotted code still works once Android ships.
              Sized so each module clears ~3 CSS px; below that phone cameras
              stop resolving it. A scan-threshold floor, not a taste call. */}
          <Image
            alt="QR code to download Opinionly"
            className="rounded-lg"
            height={148}
            src="/badges/app-store-qr.svg"
            width={148}
          />
          <span className="max-w-[150px] text-left text-[13px] leading-snug text-ink-soft">
            Point your phone&rsquo;s camera here to install.
          </span>
        </div>
      )}

      {/* "In review" would be a fresh availability claim, and Android has not
          been submitted yet — the whole point of this rewrite is to stop the
          site saying things about platforms that aren't true. */}
      <p className="max-w-[440px] text-[13px] text-ink-faint">
        Free on iPhone. Android coming soon.
      </p>

      {androidNotify && !ANDROID_URL && (
        <div className={`flex flex-col gap-2.5 ${stack}`}>
          <div className="text-[13px] font-semibold text-ink-soft">
            On Android? We&rsquo;ll tell you when it lands.
          </div>
          <EmailCaptureForm
            id={`${campaign}-android`}
            source="android_notify"
            submitLabel="Notify me"
            successLabel="We'll email you ✓"
          />
        </div>
      )}
    </div>
  );
}
