import { RecipesContent } from "@/components/recipes-content"
import { PageLayout } from "@/components/page-layout"
import type { Metadata } from "next"
import Script from "next/script"
import { recipes } from "@/lib/recipes"
import { siteConfig } from "@/lib/metadata"

export const metadata: Metadata = {
  title: "Recettes à base de Faucisse | Saucisses végétales savoureuses",
  description:
    "Découvrez nos délicieuses recettes à base de Faucisse, la saucisse 100% végétale. Des plats simples, savoureux et éthiques pour tous les jours.",
}

export default function RecipesPage() {
  return (
    <PageLayout>
      <RecipesContent />
      <Script
        id="schema-recipe-list"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: recipes.map((recipe, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: recipe.title,
              url: `${siteConfig.url}/recettes/${recipe.id}`,
            })),
          }),
        }}
      />
    </PageLayout>
  )
}
