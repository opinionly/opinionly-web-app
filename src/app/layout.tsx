import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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

export const metadata: Metadata = {
  description:
    "Honest feedback from the people who know you. Coming soon on iOS and Android.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    description:
      "From the people who know you. Coming soon on iOS and Android.",
    images: [
      {
        url: "https://opinionly.io/og-consumer.png",
        width: 1200,
        height: 630,
      },
    ],
    title: "Opinionly — The honest feedback you've been missing",
    type: "website",
    url: "https://opinionly.io",
  },
  title: "Opinionly — The honest feedback you've been missing",
  twitter: {
    card: "summary_large_image",
    description:
      "From the people who know you. Coming soon on iOS and Android.",
    images: ["https://opinionly.io/og-consumer.png"],
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
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
