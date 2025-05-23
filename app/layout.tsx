import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Fredoka } from "next/font/google"
import { baseMetadata } from "@/lib/metadata"
import Script from "next/script"

// Properly configure the Fredoka font with sorted weight values
const fredoka = Fredoka({
  subsets: ["latin"],
  // Sort the weights in ascending order as required by Google Fonts
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
})

export const metadata: Metadata = baseMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
        <link rel="icon" href="/icons/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/icons/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-45RSBY4E1L" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-45RSBY4E1L');
          `}
        </Script>
      </head>
      <body className={`${fredoka.variable}`}>{children}</body>
    </html>
  )
}
