import Image from "next/image"

const teamMembers = [
  {
    name: "Andres Morales",
    role: "Director",
    image: "/images/team-1.jpg",
  },
  {
    name: "Lucia Ferrer",
    role: "Directora de Fotografia",
    image: "/images/team-2.jpg",
  },
  {
    name: "Daniel Rios",
    role: "Guionista",
    image: "/images/team-3.jpg",
  },
]

const services = [
  {
    title: "Desarrollo",
    description:
      "Creamos narrativas desde la raiz. Guion, concepto y direccion artistica para proyectos cinematograficos.",
  },
  {
    title: "Produccion",
    description:
      "Gestion integral de producciones independientes. Desde el casting hasta la postproduccion.",
  },
  {
    title: "Postproduccion",
    description:
      "Edicion, color grading y diseno sonoro. Cada detalle importa para construir la atmosfera.",
  },
  {
    title: "Distribucion",
    description:
      "Estrategias de distribucion en festivales internacionales y plataformas digitales.",
  },
]

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
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <p className="font-serif text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
            Casa Vacia nacio en una casa vacia. Un lugar simple y deshabitado.
            Un espacio donde los ecos resuenan y las historias olvidadas vuelven a
            despertar, buscando ser contadas.
          </p>
          <p className="mt-6 font-serif text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
            Aqui desarrollamos historias en silencio y dejamos que los espacios hablen.
            Porque hay memorias que solo pueden emerger entre las paredes vacias.
          </p>
        </div>

        {/* Team grid */}
        <div className="mb-24 grid gap-8 sm:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="group flex flex-col items-center">
              <div className="relative mb-5 h-48 w-48 overflow-hidden rounded-sm border border-border sm:h-56 sm:w-56">
                <Image
                  src={member.image}
                  alt={`Retrato de ${member.name}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/20 transition-opacity duration-500 group-hover:bg-transparent" />
              </div>
              <h3 className="font-serif text-lg font-semibold tracking-wide text-foreground">
                {member.name}
              </h3>
              <p className="mt-1 text-[10px] tracking-[0.3em] text-muted-foreground">
                {member.role.toUpperCase()}
              </p>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="mb-4 flex flex-col items-center">
          <h3 className="font-serif text-xl font-light tracking-[0.25em] text-primary sm:text-2xl">
            SERVICIOS
          </h3>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-border bg-background/50 p-6 transition-colors duration-300 hover:border-primary/30 sm:p-8"
            >
              <h4 className="font-serif text-lg font-semibold tracking-wide text-foreground">
                {service.title}
              </h4>
              <p className="mt-3 font-serif text-sm font-light leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
