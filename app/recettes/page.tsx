import { Navbar } from "@/components/navbar"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { RecipesContent } from "@/components/recipes-content"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Recettes à base de Faucisse | Saucisses végétales savoureuses",
  description:
    "Découvrez nos délicieuses recettes à base de Faucisse, la saucisse 100% végétale. Des plats simples, savoureux et éthiques pour tous les jours.",
  openGraph: {
    title: "Recettes à base de Faucisse | Saucisses végétales savoureuses",
    description:
      "Découvrez nos délicieuses recettes à base de Faucisse, la saucisse 100% végétale. Des plats simples, savoureux et éthiques pour tous les jours.",
  },
}

export default function RecipesPage() {
  return (
    <LayoutWrapper>
      <main className="min-h-screen overflow-hidden">
        <Navbar />
        <RecipesContent />
        <Footer />
      </main>
      <Script
        id="schema-recipe-list"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Faucisses au curry et pommes rôties",
                url: "https://faucisse.com/recettes/faucisses-curry-pommes",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Faucisses et légumes rôtis à la moutarde",
                url: "https://faucisse.com/recettes/faucisses-legumes-moutarde",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Faucisses à l'italienne sur plaque",
                url: "https://faucisse.com/recettes/faucisses-italienne",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Faucisses aux lentilles",
                url: "https://faucisse.com/recettes/faucisses-lentilles",
              },
              {
                "@type": "ListItem",
                position: 5,
                name: "Faucisses façon merguez maison",
                url: "https://faucisse.com/recettes/faucisses-merguez",
              },
            ],
          }),
        }}
      />
    </LayoutWrapper>
  )
}
