import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Intro } from "@/components/intro"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { Footer } from "@/components/footer"
import Script from "next/script"

export default function Home() {
  return (
    <LayoutWrapper>
      <main className="min-h-screen overflow-hidden">
        <Navbar />
        <Hero />
        <Intro />
        <Footer />
      </main>
      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Faucisse",
            url: "https://faucisse.com",
            logo: "https://faucisse.com/logo.png",
            description:
              "Faucisse est une marque de saucisses 100% végétales, fun et engagées. Des recettes savoureuses et éthiques pour tous les amateurs de bonne cuisine.",
            sameAs: ["https://instagram.com/faucisse", "https://facebook.com/faucisse"],
          }),
        }}
      />
    </LayoutWrapper>
  )
}
