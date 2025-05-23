import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Fredoka } from "next/font/google"

// Properly configure the Fredoka font with sorted weight values
const fredoka = Fredoka({
  subsets: ["latin"],
  // Sort the weights in ascending order as required by Google Fonts
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Faucisse - La révolution végétale des saucisses",
  description:
    "Découvrez la faucisse, une saucisse 100% végétale, fun et engagée. Des recettes savoureuses et éthiques pour tous les amateurs de bonne cuisine.",
  keywords: ["faucisse", "saucisse végétale", "vegan", "végétarien", "recettes végétales", "alimentation durable"],
  authors: [{ name: "Faucisse" }],
  creator: "Faucisse",
  publisher: "Faucisse",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://faucisse.com",
    title: "Faucisse - La révolution végétale des saucisses",
    description:
      "Découvrez la faucisse, une saucisse 100% végétale, fun et engagée. Des recettes savoureuses et éthiques pour tous les amateurs de bonne cuisine.",
    siteName: "Faucisse",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Faucisse - La révolution végétale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faucisse - La révolution végétale des saucisses",
    description:
      "Découvrez la faucisse, une saucisse 100% végétale, fun et engagée. Des recettes savoureuses et éthiques pour tous les amateurs de bonne cuisine.",
    images: ["/og-image.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-48x48.png" sizes="48x48" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${fredoka.variable}`}>{children}</body>
    </html>
  )
}
