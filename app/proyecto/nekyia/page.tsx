import { Navbar } from "@/components/navbar"
import Image from "next/image"
import Link from "next/link"

export default function NekyiaPage() {
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
              NEKYIA
            </h1>
            <div className="mt-4 flex items-center gap-4">
              <span className="text-[10px] font-medium tracking-[0.3em] text-white/60 uppercase">
                EN DESARROLLO
              </span>
              <span className="h-px w-8 bg-white/50" />
              <span className="text-[10px] tracking-[0.3em] text-white/60">
                2025
              </span>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-white/10 shadow-2xl">
              <Image
                src="/images/film-1.jpg"
                alt="Poster de NEKYIA"
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
                  Jeremías, un joven de 27 años consumido por la culpa de una infancia violenta, se arroja al vacío desde un noveno piso en busca del descanso eterno. Pero la Muerte, una criatura cubierta de pelaje oscuro y grandes cuernos, le niega el olvido y lo conduce a un territorio donde sus recuerdos toman forma: su padre como hombre zorro, su hermana como niña conejo y un niño gato que encarna lo que fue. Para no quedar atrapado en este infierno, Jeremías deberá enfrentar aquello que aún no pudo perdonar.
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-serif text-xl font-semibold tracking-wide text-white">
                  Recorrido
                </h2>
                <p className="font-serif text-sm font-light leading-relaxed text-white/70">
                  MarplaLab 2023 - BioBio 2023 Mesa de negocio - BioBio 2025 Laboratorio de guion - VentanaSur 2025 FantasticLab!
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-serif text-xl font-semibold tracking-wide text-white">
                  MoodReel
                </h2>
                <a 
                  href="https://youtu.be/2PDljuN3eQk?si=kXzgVZ46r7ZjuNLh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium tracking-wider text-white/70 underline transition-colors hover:text-white"
                >
                  Ver MoodReel en YouTube →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
