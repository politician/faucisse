export function Intro() {
  return (
    <section className="py-20 container mx-auto px-4 relative">
      {/* Background decorative elements */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[120%] h-40 bg-gradient-to-b from-transparent to-secondary/10 rounded-[100%] z-0"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
        <ValueProp
          emoji="🥦"
          title="100% végétale"
          description="Pas de viande, pas de blabla. Juste du goût."
          delay={0}
        />
        <ValueProp
          emoji="😎"
          title="Fun & engagé"
          description="On peut sauver le monde en rigolant, non ?"
          delay={0.2}
        />
        <ValueProp emoji="🔥" title="À tester d'urgence" description="Votre barbecue n'est pas prêt." delay={0.4} />
      </div>
    </section>
  )
}

function ValueProp({
  emoji,
  title,
  description,
  delay = 0,
}: {
  emoji: string
  title: string
  description: string
  delay?: number
}) {
  return (
    <article
      className="relative flex flex-col items-center text-center group p-6 rounded-3xl bg-white/20 backdrop-blur-sm"
      style={{ animationDelay: `${delay}s` }}
    >
      <div
        className="text-7xl mb-6 transform transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12"
        aria-hidden="true"
      >
        {emoji}
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-3 relative">
        {title}
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary rounded-full transition-all duration-300 group-hover:w-full"></span>
      </h3>
      <p className="text-xl text-foreground/70">{description}</p>
    </article>
  )
}
