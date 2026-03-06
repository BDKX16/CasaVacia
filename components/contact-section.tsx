export function ContactSection() {
  return (
    <section
      id="contacto"
      className="relative border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section title */}
        <div className="mb-12 flex flex-col items-center">
          <div className="ornament-divider mb-6 w-full max-w-xs">
            <span className="sr-only">Divider</span>
          </div>
          <h2 className="font-serif text-2xl font-light tracking-[0.3em] text-primary sm:text-3xl">
            CONTACTO
          </h2>
          <div className="ornament-divider mt-6 w-full max-w-xs">
            <span className="sr-only">Divider</span>
          </div>
        </div>

        <div className="mx-auto max-w-lg text-center">
          <p className="font-serif text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
            Si quieres hablar con nosotros sobre un proyecto o desarrollo,
            podemos crear historias.
          </p>

          <a
            href="mailto:casavaciaestudio@gmail.com"
            className="mt-8 inline-block font-serif text-lg font-semibold tracking-wide text-primary underline decoration-primary/30 underline-offset-4 transition-all duration-300 hover:decoration-primary sm:text-xl"
          >
            casavaciaestudio@gmail.com
          </a>

          {/* Social links */}
          <div className="mt-12 flex items-center justify-center gap-8">
            <a
              href="https://www.instagram.com/casavacia.estudio?igsh=MWtqeWYweDc0NTJwYw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-[0.3em] text-muted-foreground transition-colors duration-300 hover:text-primary"
              aria-label="Instagram"
            >
              INSTAGRAM
            </a>
            <span className="h-3 w-px bg-border" />
            <a
              href="mailto:casavaciaestudio@gmail.com"
              className="text-[10px] tracking-[0.3em] text-muted-foreground transition-colors duration-300 hover:text-primary"
              aria-label="Correo electronico"
            >
              EMAIL
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 border-t border-border pt-8 text-center">
        <p className="text-[10px] tracking-[0.2em] text-muted-foreground/60">
          {"CASA VACIA ESTUDIO \u00A9 2026. TODOS LOS DERECHOS RESERVADOS."}
        </p>
      </div>
    </section>
  )
}
