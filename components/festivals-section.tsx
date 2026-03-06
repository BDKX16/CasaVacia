import Image from "next/image"

export function FestivalsSection() {
  const festivals = [
    { name: "Fantastic", subtitle: "Nekyia", logo: "/festivales/NEKYIA - Fantastic .png" },
    { name: "BioBio", subtitle: "Nekyia", logo: "/festivales/NEKYIA - BioBio.png" },
    { name: "Marpla", subtitle: "Nekyia", logo: "/festivales/Marpla PNG negro.png" },
    { name: "Fantastika", subtitle: "Nekyia", logo: "/festivales/Nekyia - Fantastika.png" },
    { name: "Mar del Plata", subtitle: "Lujuria", logo: "/festivales/LUJURIA - Festival Internacional de cine de Mar del Plata - 2022.png" },
    { name: "Rojo Sangre", subtitle: "Lujuria", logo: "/festivales/LUJURIA - Festival Buenos Aires Rojo Sangre.png" },
    { name: "Cinema Diva", subtitle: "Lujuria", logo: "/festivales/LUJURIA - Festival Cinema Diva.png" },
    { name: "Servest", subtitle: "Lujuria", logo: "/festivales/LUJURIA - Festival Servest Film Festival - 2022.png" },
    { name: "FiciProx", subtitle: "Fresno", logo: "/festivales/FRESNO - Festival FiciProx.png" },
  ]

  return (
    <section className="relative border-y border-border bg-secondary py-16">
      <div className="mx-auto max-w-[1600px] px-6">
        <p className="mb-6 text-center text-[10px] font-medium tracking-[0.4em] text-muted-foreground">
          SELECCIONES Y RECONOCIMIENTOS EN
        </p>

        {/* Festival logos as text */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9">
          {festivals.map((festival) => (
            <div
              key={festival.name}
              className="flex flex-col items-center gap-1 opacity-50 transition-opacity duration-300 hover:opacity-100"
            >
              {festival.logo ? (
                <div className="relative w-full h-48 flex items-center justify-center">
                  <div className="relative w-full h-full" style={{
                    filter: 'brightness(0) saturate(100%) invert(82%) sepia(4%) saturate(414%) hue-rotate(354deg) brightness(92%) contrast(84%)'
                  }}>
                    <Image
                      src={festival.logo}
                      alt={festival.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ) : (
                <span className="font-serif text-xl font-semibold tracking-[0.1em] text-foreground sm:text-2xl">
                  {festival.name}
                </span>
              )}
              <span className="text-[9px] tracking-[0.3em] text-muted-foreground">
                {festival.subtitle.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
