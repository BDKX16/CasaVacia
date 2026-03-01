import Image from "next/image"

const films = [
  {
    title: "Proyecto 1",
    status: "FINALIZADO",
    image: "/images/film-1.jpg",
    description:
      "Una historia oscura sobre una. Un viaje al nucleo del miedo.",
    year: "2024",
  },
  {
    title: "Proyecto 2",
    status: "EN DESARROLLO",
    image: "/images/film-2.jpg",
    description:
      "Aquella puerta olvidada. La infancia que persiste en los rincones.",
    year: "2025",
  },
  {
    title: "Proyecto 3",
    status: "FINALIZADO",
    image: "/images/film-3.jpg",
    description:
      "Cuando el silencio oculta mas que la verdad.",
    year: "2023",
  },
]

export function FilmsSection() {
  return (
    <section id="proyectos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section title */}
        <div className="mb-16 flex flex-col items-center">
          <div className="ornament-divider mb-6 w-full max-w-xs">
            <span className="sr-only">Divider</span>
          </div>
          <h2 className="font-serif text-2xl font-light tracking-[0.3em] text-primary sm:text-3xl">
            PROYECTOS
          </h2>
          <div className="ornament-divider mt-6 w-full max-w-xs">
            <span className="sr-only">Divider</span>
          </div>
        </div>

        {/* Film grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {films.map((film) => (
            <article
              key={film.title}
              className="film-card group cursor-pointer"
            >
              {/* Image container */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-border">
                <Image
                  src={film.image}
                  alt={`Poster de ${film.title}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-background/30 transition-opacity duration-500 group-hover:bg-background/10" />
                {/* Year badge */}
                <div className="absolute right-3 top-3 border border-border/50 bg-background/70 px-2 py-1 text-[10px] tracking-[0.2em] text-muted-foreground backdrop-blur-sm">
                  {film.year}
                </div>
              </div>

              {/* Film info */}
              <div className="mt-5">
                <h3 className="font-serif text-xl font-semibold tracking-wide text-foreground">
                  {film.title}
                </h3>
                <p className="mt-1 text-[10px] font-medium tracking-[0.3em] text-primary/70">
                  {film.status}
                </p>
                <p className="mt-3 font-serif text-sm font-light leading-relaxed text-muted-foreground">
                  {film.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
