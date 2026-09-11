import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ReactQueryProvider } from "@/providers/query-client";
import MetaPixelRouteTracker from "@/components/MetaPixelRouteTracker";
import { APP_LIVE, APP_STORE_ID, appStoreUrl } from "@/lib/app-links";
import { socialProfiles } from "@/lib/socials";
import "./globals.css";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
  display: "swap",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
});

const GA_MEASUREMENT_ID = "G-0LTL8FYB47";
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

const APP_STORE_URL = appStoreUrl();

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Opinionly",
  url: "https://www.opinionly.io",
  email: "hello@opinionly.io",
  // The store listing is a profile of the same entity, so it belongs here —
  // but only once it resolves, since sameAs pointing at a 404 is worse than a
  // shorter list.
  sameAs: [
    ...socialProfiles.map((s) => s.href),
    ...(APP_LIVE ? [APP_STORE_URL] : []),
  ],
};

// What earns the app rich result in search. Deliberately carries no
// aggregateRating: the app has no ratings yet, and inventing one is both a
// structured-data violation and a lie to anyone reading the result.
const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Opinionly",
  applicationCategory: "SocialNetworkingApplication",
  // Mirrors IPHONEOS_DEPLOYMENT_TARGET in the iOS project. Kept exact because
  // this is the line that tells someone on an older iPhone not to bother.
  operatingSystem: "iOS 26.1 or later",
  url: "https://www.opinionly.io",
  installUrl: APP_STORE_URL,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

// One string across search and every share surface, so the three can't drift
// apart and ship a weaker line to social than to Google.
const DESCRIPTION = APP_LIVE
  ? "Honest anonymous responses from the people who know you. Get answers you can act on. Free on iPhone."
  : "Honest anonymous responses from the people who know you. Get answers you can act on. Coming soon on iOS and Android.";

export const metadata: Metadata = {
  description: DESCRIPTION,
  metadataBase: new URL("https://www.opinionly.io"),
  // Share images come from the opengraph-image routes, not from this object.
  openGraph: {
    description: DESCRIPTION,
    title: "Opinionly — The honest feedback you've been missing",
    type: "website",
    url: "https://www.opinionly.io",
  },
  // Safari on iPhone/iPad draws its own banner above the page from this —
  // "GET" for a visitor without the app, "OPEN" for one who already has it.
  // `itunes` is the first-class field and renders exactly
  // `content="app-id=<id>"`; setting `other["apple-itunes-app"]` as well would
  // emit the tag twice, as the two paths don't dedupe. Withheld until launch,
  // because until then it renders a button to a 404.
  ...(APP_LIVE ? { itunes: { appId: APP_STORE_ID } } : {}),
  title: "Opinionly — The honest feedback you've been missing",
  twitter: {
    card: "summary_large_image",
    description: DESCRIPTION,
    title: "Opinionly — The honest feedback you've been missing",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${inter.variable} ${instrumentSerif.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {APP_LIVE && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(appJsonLd).replace(/</g, "\\u003c"),
            }}
          />
        )}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-setup" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        {META_PIXEL_ID && (
          <>
            <Script id="meta-pixel" strategy="afterInteractive">
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${META_PIXEL_ID}');
                fbq('track', 'PageView');
              `}
            </Script>
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}
        <MetaPixelRouteTracker />
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
