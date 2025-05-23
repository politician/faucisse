import { RecipeDetail } from "@/components/recipe-detail"
import { PageLayout } from "@/components/page-layout"
import type { Metadata } from "next"
import Script from "next/script"
import { recipes } from "@/lib/recipes"
import { siteConfig } from "@/lib/metadata"

type Props = {
  params: { recipeId: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const recipe = recipes.find((r) => r.id === params.recipeId)

  if (!recipe) {
    return {
      title: "Recette non trouvée",
      description: "La recette que vous recherchez n'existe pas ou a été déplacée.",
    }
  }

  return {
    title: recipe.title,
    description: recipe.description,
    openGraph: {
      title: recipe.title,
      description: recipe.description,
      images: [
        {
          url: recipe.image,
          width: 1200,
          height: 630,
          alt: recipe.title,
        },
      ],
      type: "article",
    },
  }
}

export default function RecipeDetailPage({ params }: Props) {
  const recipe = recipes.find((r) => r.id === params.recipeId)

  return (
    <PageLayout>
      <RecipeDetail recipeId={params.recipeId} />
      {recipe && (
        <Script
          id="schema-recipe"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Recipe",
              name: recipe.title,
              image: `${siteConfig.url}${recipe.image}`,
              description: recipe.description,
              keywords: "vegan, végétarien, saucisse végétale, faucisse",
              author: {
                "@type": "Organization",
                name: siteConfig.name,
              },
              prepTime: `PT${recipe.prepTime.replace(" min", "M")}`,
              cookTime: `PT${recipe.cookTime.replace(" min", "M")}`,
              recipeCategory: "Plat principal",
              recipeCuisine: "Végétarien",
              recipeYield: recipe.servings,
              nutrition: {
                "@type": "NutritionInformation",
                suitableForDiet: "https://schema.org/VegetarianDiet",
              },
            }),
          }}
        />
      )}
    </PageLayout>
  )
}
