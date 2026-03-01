import Image from "next/image"

interface Film {
  title: string
  status: string
  image: string
  description: string
  year: string
  recorrido?: string
  link?: string
}

const films: Film[] = [
  {
    title: "NEKYIA",
    status: "EN DESARROLLO",
    image: "/images/film-1.jpg",
    description:
      "Jeremías, un joven de 27 años consumido por la culpa de una infancia violenta, se arroja al vacío desde un noveno piso en busca del descanso eterno. Pero la Muerte, una criatura cubierta de pelaje oscuro y grandes cuernos, le niega el olvido y lo conduce a un territorio donde sus recuerdos toman forma: su padre como hombre zorro, su hermana como niña conejo y un niño gato que encarna lo que fue. Para no quedar atrapado en este infierno, Jeremías deberá enfrentar aquello que aún no pudo perdonar.",
    year: "2025",
    recorrido: "MarplaLab 2023 - BioBio 2023 Mesa de negocio - BioBio 2025 Laboratorio de guion - VentanaSur 2025 FantasticLab!",
    link: "https://youtu.be/2PDljuN3eQk?si=kXzgVZ46r7ZjuNLh",
  },
  {
    title: "ÉXODOS",
    status: "EN DESARROLLO",
    image: "/images/film-2.jpg",
    description:
      "Próximamente.",
    year: "2025",
  },
  {
    title: "SERIE LIMINAL",
    status: "EN DISTRIBUCIÓN",
    image: "/images/film-3.jpg",
    description:
      "Liminal es una serie de 3 cortometrajes (0000, 0045, 1046) donde se explora la soledad de espacios abandonados en primera persona.",
    year: "2024",
    recorrido: "En Distribución",
  },
  {
    title: "LUJURIA",
    status: "FINALIZADO",
    image: "/images/film-1.jpg",
    description:
      "Una mujer recién llegada al infierno se despierta en una mansión para conocer los castigos de los pecadores carnales de la lujuria.",
    year: "2022",
    recorrido: "Festival Internacional de Cine de Mar del Plata 2022 - Buenos Aires Rojo Sangre 2022 - Servest FilmFest 2022 - CinemaDiva 2023",
    link: "https://www.youtube.com/watch?v=DgV2BySW-pU",
  },
]

export function FilmsSection() {
  return (
    <section id="proyectos" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Textured background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/Textura gral.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 z-0 bg-black/60" />
      
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section title */}
        <div className="mb-16 flex flex-col items-center">
          <h2 className="font-serif text-2xl font-light tracking-[0.3em] text-amber-100/90 sm:text-3xl uppercase">
            PROYECTOS
          </h2>
        </div>

        {/* Film grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{
          films.map((film) => (
            <article
              key={film.title}
              className="film-card group cursor-pointer"
            >
              {/* Image container with vintage texture */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-amber-900/30 shadow-2xl">
                {/* Card texture background */}
                <div 
                  className="absolute inset-0 z-0 opacity-20"
                  style={{
                    backgroundImage: "url('/images/Imag Pared.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                
                <Image
                  src={film.image}
                  alt={`Poster de ${film.title}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 sepia"
                  style={{
                    filter: "sepia(0.6) contrast(1.1) brightness(0.8)",
                  }}
                />
                
                {/* Vintage overlay with texture */}
                <div className="absolute inset-0 bg-gradient-to-b from-amber-950/40 via-transparent to-black/60 transition-opacity duration-500 group-hover:from-amber-950/20" />
                
                {/* Vignette effect */}
                <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.8)]" />
              </div>

              {/* Film info */}
              <div className="mt-5 px-1">
                <h3 className="font-serif text-xl font-semibold tracking-wide text-amber-100/90">
                  {film.title}
                </h3>
                <p className="mt-1 text-[10px] font-medium tracking-[0.3em] text-amber-600/80 uppercase">
                  {film.status}
                </p>
                <p className="mt-3 font-serif text-sm font-light leading-relaxed text-amber-200/70">
                  {film.description}
                </p>
                {film.recorrido && (
                  <p className="mt-3 text-[11px] font-light leading-relaxed text-amber-300/60">
                    <span className="font-medium tracking-wider">Recorrido:</span> {film.recorrido}
                  </p>
                )}
                {film.link && (
                  <a 
                    href={film.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-[11px] font-medium tracking-wider text-amber-500/90 underline hover:text-amber-400/90 transition-colors"
                  >
                    Ver Proyecto →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
