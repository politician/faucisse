import Link from "next/link"
import Image from "next/image"

// Recipe data
const recipes = [
  {
    id: "faucisses-curry-pommes",
    title: "Faucisses au curry et pommes rôties",
    prepTime: "15 min",
    description:
      "Des faucisses dorées au four, accompagnées de quartiers de pommes caramélisées et d'un soupçon de curry. Oui, c'est sucré-salé, et oui, c'est incroyable.",
    image: "/faucisses-au-curry-et-pommes-roties.png",
  },
  {
    id: "faucisses-legumes-moutarde",
    title: "Faucisses et légumes rôtis à la moutarde",
    prepTime: "20 min",
    description: "Un plat tout-en-un, savoureux et sans vaisselle. Le four fait tout, toi tu te la coules douce.",
    image: "/faucisses-et-legumes-rotis-moutarde.png",
  },
  {
    id: "faucisses-italienne",
    title: "Faucisses à l'italienne sur plaque",
    prepTime: "10 min",
    description: "Des faucisses grillées avec poivrons et oignons. Goût d'Italie garanti, accent non inclus.",
    image: "/faucisses-italienne-sur-plaque.png",
  },
  {
    id: "faucisses-lentilles",
    title: "Faucisses aux lentilles",
    prepTime: "15 min",
    description: "Des lentilles fondantes et des faucisses bien dorées. C'est rustique, c'est vegan, c'est validé.",
    image: "/faucisses-aux-lentilles.png",
  },
  {
    id: "faucisses-merguez",
    title: "Faucisses façon merguez maison",
    prepTime: "30 min",
    description: "Des merguez végétales maison pour les barbecues qui font dire 'attends, c'est pas de la vraie ?'",
    image: "/faucisses-merguez-maison.png",
  },
]

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
