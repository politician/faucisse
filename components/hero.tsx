import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="py-16 md:py-24 container mx-auto px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 -right-20 w-60 h-60 bg-accent opacity-20 rounded-full blur-3xl"></div>

      {/* Floating emojis */}
      <div className="absolute top-20 left-[10%] text-4xl animate-float" style={{ animationDelay: "0s" }}>
        🌱
      </div>
      <div className="absolute bottom-20 left-[20%] text-4xl animate-float" style={{ animationDelay: "1.5s" }}>
        🥕
      </div>
      <div className="absolute top-40 right-[15%] text-4xl animate-float" style={{ animationDelay: "1s" }}>
        🌶️
      </div>
      <div className="absolute bottom-40 right-[25%] text-4xl animate-float" style={{ animationDelay: "2s" }}>
        🥦
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="flex-1 text-center md:text-left relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-shadow">
            La Faucisse, <br />
            <span className="text-primary">pas une faute de frappe.</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-foreground/80 mb-10">
            C&apos;est une révolution végétale. <span className="inline-block ml-2 animate-bounce-slow">🌱</span>
          </h2>
          <Link
            href="/manifeste"
            className="inline-block bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-5 text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 hover:-rotate-2 relative overflow-hidden group"
            aria-label="Découvrir notre manifeste Faucisse"
          >
            <span className="relative z-10">Découvrir la faucisse</span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Link>
        </div>

        <div className="flex-1 flex justify-center md:justify-end relative z-10">
          <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] flex items-center justify-center">
            {/* Sausage container with swing animation */}
            <div className="relative w-[220px] h-[280px] md:w-[300px] md:h-[380px] flex items-center justify-center">
              {/* Sausage image with swing animation - removed the string element */}
              <div className="animate-swing" style={{ transformOrigin: "top center" }}>
                <Image
                  src="/images/faucisse-sausage.png"
                  width={240}
                  height={120}
                  alt="Illustration d'une faucisse végétale"
                  className="object-contain"
                  style={{ filter: "drop-shadow(0px 10px 15px rgba(0,0,0,0.15))" }}
                  priority
                />
              </div>
            </div>

            {/* Decorative blob behind the sausage */}
            <div className="absolute inset-0 blob-shape bg-secondary/30 -z-10 animate-wiggle"></div>
            <div
              className="absolute inset-8 blob-shape bg-secondary/50 -z-10 animate-wiggle"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
