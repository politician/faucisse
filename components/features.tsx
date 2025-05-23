import type React from "react"
import { Leaf, Smile, FlameIcon as Fire } from "lucide-react"

export function Features() {
  return (
    <section className="py-16 bg-[#F9F7F0] rounded-t-[40px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <FeatureCard
            icon={<Leaf className="w-10 h-10 text-[#A1E887]" />}
            title="100% végétale"
            description="Pas de viande, pas de blabla. Juste du goût."
          />
          <FeatureCard
            icon={<Smile className="w-10 h-10 text-[#FFD166]" />}
            title="Fun & engagé"
            description="On peut sauver le monde en rigolant, non ?"
          />
          <FeatureCard
            icon={<Fire className="w-10 h-10 text-[#FF6B6B]" />}
            title="À tester d'urgence"
            description="Votre barbecue n'est pas prêt."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:translate-y-[-5px]">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-[#4A4A4A] mb-2">{title}</h3>
      <p className="text-[#6D6D6D]">{description}</p>
    </div>
  )
}
