import { Navbar } from "@/components/navbar"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LUJURIA | Película Finalizada',
  description: 'Una mujer recién llegada al infierno se despierta en una mansión para conocer los castigos de los pecadores carnales de la lujuria. Festival Internacional de Mar del Plata 2022.',
  keywords: ['Lujuria', 'cortometraje', 'terror', 'Mar del Plata 2022', 'Rojo Sangre', 'Casa Vacía', 'cine de horror'],
  openGraph: {
    title: 'LUJURIA | Película Finalizada - Casa Vacía Estudio',
    description: 'Cortometraje de terror sobre los castigos de los pecadores de la lujuria. Selección oficial Mar del Plata 2022.',
    images: ['/images/Lujuria.png'],
    type: 'video.movie',
  },
}

export default function LujuriaPage() {
  return (
    <main className="relative min-h-screen bg-black">
      <Navbar />
      
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/Casa sin casa.png"
          alt=""
          fill
          className="object-cover object-center opacity-30"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 pb-24 pt-32">
        <div className="mx-auto max-w-4xl">
          {/* Back button */}
          <Link 
            href="/#proyectos"
            className="inline-flex items-center gap-2 font-serif text-sm text-white/70 transition-colors hover:text-white"
          >
            <span>←</span> Volver a proyectos
          </Link>

          {/* Title */}
          <div className="mt-12 mb-8">
            <h1 className="font-serif text-5xl font-light tracking-[0.15em] text-white sm:text-6xl">
              LUJURIA
            </h1>
            <div className="mt-4 flex items-center gap-4">
              <span className="text-[10px] font-medium tracking-[0.3em] text-white/60 uppercase">
                FINALIZADO
              </span>
              <span className="h-px w-8 bg-white/50" />
              <span className="text-[10px] tracking-[0.3em] text-white/60">
                2022
              </span>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-white/10 shadow-2xl">
              <Image
                src="/images/Lujuria.png"
                alt="Poster de LUJURIA"
                fill
                className="object-cover"
                style={{
                  filter: "sepia(0.5) contrast(1.1) brightness(0.75)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-4 font-serif text-xl font-semibold tracking-wide text-white">
                  Sinopsis
                </h2>
                <p className="font-serif text-base font-light leading-relaxed text-white/80">
                  Una mujer recién llegada al infierno se despierta en una mansión para conocer los castigos de los pecadores carnales de la lujuria.
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-serif text-xl font-semibold tracking-wide text-white">
                  Recorrido
                </h2>
                <p className="font-serif text-sm font-light leading-relaxed text-white/70">
                  Festival Internacional de Cine de Mar del Plata 2022 - Buenos Aires Rojo Sangre 2022 - Servest FilmFest 2022 - CinemaDiva 2023
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-serif text-xl font-semibold tracking-wide text-white">
                  Ver película
                </h2>
                <a 
                  href="https://www.youtube.com/watch?v=DgV2BySW-pU" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium tracking-wider text-white/70 underline transition-colors hover:text-white"
                >
                  Ver en YouTube →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
