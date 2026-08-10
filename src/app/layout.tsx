import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ReactQueryProvider } from "@/providers/query-client";
import MetaPixelRouteTracker from "@/components/MetaPixelRouteTracker";
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Opinionly",
  url: "https://www.opinionly.io",
  email: "hello@opinionly.io",
  sameAs: socialProfiles.map((s) => s.href),
};

export const metadata: Metadata = {
  description:
    "Honest feedback from the people who know you. Coming soon on iOS and Android.",
  metadataBase: new URL("https://www.opinionly.io"),
  // Share images come from the opengraph-image routes, not from this object.
  openGraph: {
    description:
      "From the people who know you. Coming soon on iOS and Android.",
    title: "Opinionly — The honest feedback you've been missing",
    type: "website",
    url: "https://www.opinionly.io",
  },
  title: "Opinionly — The honest feedback you've been missing",
  twitter: {
    card: "summary_large_image",
    description:
      "From the people who know you. Coming soon on iOS and Android.",
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
