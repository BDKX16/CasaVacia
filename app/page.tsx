import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FestivalsSection } from "@/components/festivals-section"
import { FilmsSection } from "@/components/films-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { AmbientAudio } from "@/components/ambient-audio"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FestivalsSection />
      <FilmsSection />
      <TeamSection />
      <ContactSection />
      <AmbientAudio />
    </main>
  )
}
