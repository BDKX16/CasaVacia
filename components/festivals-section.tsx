export function FestivalsSection() {
  const festivals = [
    { name: "Fantastic", subtitle: "Nekyia" },
    { name: "Mar del Plata", subtitle: "Lujuria" },
    { name: "BioBio", subtitle: "Nekyia" },
    { name: "Rojo Sangre", subtitle: "Lujuria" },
    { name: "MarplaLab", subtitle: "Nekyia" },
    { name: "VentanaSur", subtitle: "Festivales" },
  ]

  return (
    <section className="relative border-y border-border bg-secondary py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-10 text-center text-[10px] font-medium tracking-[0.4em] text-muted-foreground">
          SELECCIONES Y RECONOCIMIENTOS EN
        </p>

        {/* Festival logos as text */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {festivals.map((festival) => (
            <div
              key={festival.name}
              className="flex flex-col items-center gap-1 opacity-50 transition-opacity duration-300 hover:opacity-100"
            >
              <span className="font-serif text-xl font-semibold tracking-[0.1em] text-foreground sm:text-2xl">
                {festival.name}
              </span>
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
