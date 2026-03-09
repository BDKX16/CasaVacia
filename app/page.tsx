import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FestivalsSection } from "@/components/festivals-section"
import { FilmsSection } from "@/components/films-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { AmbientAudio } from "@/components/ambient-audio"

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Casa Vacía Estudio',
    description: 'Estudio creativo dedicado al desarrollo de cine de autor y género',
    url: 'https://vaciaestudios.com',
    logo: 'https://vaciaestudios.com/logo.png',
    email: 'casavaciaestudio@gmail.com',
    sameAs: [
      'https://www.instagram.com/casavacia.estudio',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AR',
    },
    founder: {
      '@type': 'Organization',
      name: 'Casa Vacía Estudio',
    },
    knowsAbout: [
      'Producción cinematográfica',
      'Cine de autor',
      'Cine de género',
      'Desarrollo de proyectos audiovisuales',
      'Postproducción',
      'Distribución de películas',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="relative min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <FestivalsSection />
        <FilmsSection />
        <TeamSection />
        <ContactSection />
        <AmbientAudio />
      </main>
    </>
  )
}
