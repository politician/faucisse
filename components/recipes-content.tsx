import Link from "next/link"
import Image from "next/image"
import { recipes } from "@/lib/recipes"

export function RecipesContent() {
  return (
    <section className="py-16 md:py-24 container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16 text-shadow">
        Nos recettes à base de faucisse
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  )
}

function RecipeCard({ recipe }: { recipe: (typeof recipes)[0] }) {
  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white/30 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
      itemScope
      itemType="https://schema.org/Recipe"
    >
      <div className="relative h-48 overflow-hidden rounded-t-3xl">
        <Image
          src={recipe.image || "/placeholder.svg"}
          alt={`Photo de la recette: ${recipe.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          itemProp="image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <div className="absolute bottom-3 left-4 rounded-full bg-primary px-3 py-1 text-sm font-medium text-white">
          <meta itemProp="prepTime" content={recipe.prepTime} />
          {recipe.prepTime}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h2 className="mb-3 text-xl font-bold text-foreground" itemProp="name">
          {recipe.title}
        </h2>
        <p className="mb-6 flex-1 text-foreground/80" itemProp="description">
          {recipe.description}
        </p>
        <Link
          href={`/recettes/${recipe.id}`}
          className="self-start rounded-full bg-secondary px-6 py-2 font-medium text-secondary-foreground transition-all hover:bg-secondary/90 hover:shadow-md"
          aria-label={`Voir la recette de ${recipe.title}`}
        >
          Voir la recette
        </Link>
      </div>
    </article>
  )
}
