import { Navbar } from "@/components/navbar"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { RecipeDetail } from "@/components/recipe-detail"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import Script from "next/script"

// Recipe data for metadata
const recipes = [
  {
    id: "faucisses-curry-pommes",
    title: "Faucisses au curry et pommes rôties",
    description:
      "Des faucisses dorées au four, accompagnées de quartiers de pommes caramélisées et d'un soupçon de curry. Une recette sucrée-salée végétale et savoureuse.",
    prepTime: "15 min",
    cookTime: "30 min",
    image: "/faucisses-au-curry-et-pommes-roties.png",
  },
  {
    id: "faucisses-lentilles",
    title: "Faucisses aux lentilles",
    description:
      "Un plat réconfortant de lentilles fondantes et faucisses végétales bien dorées. Une recette rustique, vegan et pleine de saveurs.",
    prepTime: "15 min",
    cookTime: "30 min",
    image: "/faucisses-aux-lentilles.png",
  },
  {
    id: "faucisses-italienne",
    title: "Faucisses à l'italienne sur plaque",
    description:
      "Des faucisses végétales grillées avec poivrons et oignons sur une plaque. Une recette italienne simple, colorée et savoureuse.",
    prepTime: "10 min",
    cookTime: "25 min",
    image: "/faucisses-italienne-sur-plaque.png",
  },
  {
    id: "faucisses-merguez",
    title: "Faucisses façon merguez maison",
    description:
      "Préparez vos propres merguez végétales maison pour des barbecues éthiques et savoureux. Une recette simple et bluffante.",
    prepTime: "30 min",
    cookTime: "45 min",
    image: "/faucisses-merguez-maison.png",
  },
  {
    id: "faucisses-legumes-moutarde",
    title: "Faucisses et légumes rôtis à la moutarde",
    description:
      "Un plat complet de faucisses végétales avec légumes rôtis à la moutarde. Une recette facile, savoureuse et sans vaisselle.",
    prepTime: "20 min",
    cookTime: "35 min",
    image: "/faucisses-et-legumes-rotis-moutarde.png",
  },
]

type Props = {
  params: { recipeId: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const recipe = recipes.find((r) => r.id === params.recipeId)

  if (!recipe) {
    return {
      title: "Recette non trouvée | Faucisse",
      description: "La recette que vous recherchez n'existe pas ou a été déplacée.",
    }
  }

  return {
    title: `${recipe.title} | Recettes Faucisse`,
    description: recipe.description,
    openGraph: {
      title: `${recipe.title} | Recettes Faucisse`,
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
    <LayoutWrapper>
      <main className="min-h-screen overflow-hidden">
        <Navbar />
        <RecipeDetail recipeId={params.recipeId} />
        <Footer />
      </main>
      {recipe && (
        <Script
          id="schema-recipe"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Recipe",
              name: recipe.title,
              image: `https://faucisse.com${recipe.image}`,
              description: recipe.description,
              keywords: "vegan, végétarien, saucisse végétale, faucisse",
              author: {
                "@type": "Organization",
                name: "Faucisse",
              },
              prepTime: `PT${recipe.prepTime.replace(" min", "M")}`,
              cookTime: `PT${recipe.cookTime.replace(" min", "M")}`,
              recipeCategory: "Plat principal",
              recipeCuisine: "Végétarien",
              recipeYield: "2-4 personnes",
              nutrition: {
                "@type": "NutritionInformation",
                suitableForDiet: "https://schema.org/VegetarianDiet",
              },
            }),
          }}
        />
      )}
    </LayoutWrapper>
  )
}
