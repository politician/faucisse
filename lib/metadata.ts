import type { Metadata } from "next"

export const siteConfig = {
  name: "Faucisse",
  description:
    "Découvrez la faucisse, une saucisse 100% végétale, fun et engagée. Des recettes savoureuses et éthiques pour tous les amateurs de bonne cuisine.",
  url: "https://faucisse.com",
}

export const baseMetadata: Metadata = {
  title: {
    default: `${siteConfig.name} - La révolution végétale des saucisses`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["faucisse", "saucisse végétale", "vegan", "végétarien", "recettes végétales", "alimentation durable"],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
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
    url: siteConfig.url,
    title: `${siteConfig.name} - La révolution végétale des saucisses`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - La révolution végétale`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - La révolution végétale des saucisses`,
    description: siteConfig.description,
    images: ["/images/og-image.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: [
      { url: "/icons/favicon.ico", sizes: "any" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png" }],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
      {
        rel: "android-chrome",
        url: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome",
        url: "/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  generator: "v0.dev",
}
