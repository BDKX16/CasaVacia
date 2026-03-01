export function TeamSection() {
  return (
    <section
      id="equipo"
      className="relative border-t border-border bg-secondary py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section title */}
        <div className="mb-16 flex flex-col items-center">
          <div className="ornament-divider mb-6 w-full max-w-xs">
            <span className="sr-only">Divider</span>
          </div>
          <h2 className="font-serif text-2xl font-light tracking-[0.3em] text-primary sm:text-3xl">
            ESTUDIO
          </h2>
          <div className="ornament-divider mt-6 w-full max-w-xs">
            <span className="sr-only">Divider</span>
          </div>
        </div>

        {/* About text */}
        <div className="mx-auto max-w-2xl text-left">
          <p className="font-serif text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
            Casa Vacía es un estudio creativo dedicado al desarrollo de cine de autor y género.
            Acompañamos proyectos desde su gestación, explorando su universo narrativo y estético con profundidad.
          </p>
          <p className="mt-6 font-serif text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
            Creemos en procesos que respetan el tiempo de las historias y en una mirada que pone en el centro la atmósfera, la memoria y el espacio.
            Nuestro trabajo combina desarrollo conceptual, construcción de identidad visual y acompañamiento creativo.
          </p>
          <p className="mt-6 font-serif text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
            Más que producir imágenes, buscamos crear mundos.
          </p>
        </div>
      </div>
    </section>
  )
}
