'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speedY: number
  speedX: number
  delay: number
  isEmber: boolean
  glowIntensity?: number
}

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Normalizar posición del mouse a valores entre -1 y 1
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      setMouseX(x)
      setMouseY(y)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Generar partículas
  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = []
      const particleCount = 40
      
      for (let i = 0; i < particleCount; i++) {
        const isEmber = Math.random() < 0.15 // 15% son brasas encendidas
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: isEmber ? Math.random() * 2 + 1 : Math.random() * 4 + 1,
          speedY: Math.random() * 15 + 10,
          speedX: (Math.random() - 0.5) * 5,
          delay: Math.random() * 20,
          isEmber,
          glowIntensity: isEmber ? Math.random() * 0.5 + 0.5 : undefined,
        })
      }
      setParticles(newParticles)
    }

    generateParticles()
  }, [])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Parallax Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Layer 1: Fondo más lejano (Casa sin casa) - se mueve más lento con scroll y mouse */}
        <div 
          className="absolute inset-0 will-change-transform"
          style={{
            transform: `translateY(${scrollY * 0.5}px) translateX(${mouseX * 20}px) translateY(${mouseY * 20}px)`,
          }}
        >
          <Image
            src="/images/Casa sin casa.png"
            alt=""
            fill
            className="object-cover object-center scale-110"
            priority
            quality={100}
          />
        </div>

        {/* Layer 2: Bosque - velocidad media con scroll y mouse */}
        <div 
          className="absolute inset-0 will-change-transform"
          style={{
            transform: `translateY(${scrollY * 0.3}px) translateX(${mouseX * 15}px) translateY(${mouseY * 15}px)`,
          }}
        >
          <Image
            src="/images/Imag Bosque.png"
            alt=""
            fill
            className="object-cover object-center scale-110"
            priority
            quality={100}
          />
        </div>

        {/* Layer 3: Casa principal - se mueve muy lento con scroll y mouse para mantenerla centrada */}
        <div 
          className="absolute inset-0 will-change-transform"
          style={{
            transform: `translateY(${scrollY * 0.15}px) translateX(${mouseX * 8}px) translateY(${mouseY * 8}px)`,
          }}
        >
          <Image
            src="/images/Imag Casa.png"
            alt=""
            fill
            className="object-cover object-center scale-105"
            priority
            quality={100}
          />
        </div>

        {/* Partículas de ceniza flotante */}
        <div className="absolute inset-0 pointer-events-none z-30">
          {particles.map((particle) => {
            const drift = Math.sin(particle.id * 0.5) * 30
            return (
              <div
                key={particle.id}
                className="absolute rounded-full"
                style={{
                  left: `${particle.x}%`,
                  top: '-10%',
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  backgroundColor: particle.isEmber 
                    ? `rgba(255, ${60 + (particle.glowIntensity! - 0.5) * 80}, 0, 1)` 
                    : 'rgba(160, 160, 160, 0.7)',
                  filter: 'blur(0.5px)',
                  boxShadow: particle.isEmber
                    ? `0 0 ${particle.size * 5}px rgba(255, 50, 0, ${particle.glowIntensity}), 
                       0 0 ${particle.size * 10}px rgba(255, 20, 0, ${particle.glowIntensity! * 0.6})`
                    : '0 0 3px rgba(180, 180, 180, 0.5)',
                  animation: particle.isEmber
                    ? `ashfall ${particle.speedY}s ease-in-out ${particle.delay}s infinite, ember-pulse ${Math.random() * 1.5 + 0.5}s ease-in-out infinite`
                    : `ashfall ${particle.speedY}s ease-in-out ${particle.delay}s infinite`,
                  ['--drift' as string]: `${drift}px`,
                  zIndex: 30,
                }}
              />
            )
          })}
        </div>

        {/* Overlay tenebroso - viñeta */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/80" />
        
        {/* Neblina inferior */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/60 to-transparent" />
        
        {/* Oscurecimiento superior */}
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/90 via-black/40 to-transparent" />
        
        {/* Overlay de textura para efecto granulado */}
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <h1 
          className="font-serif text-5xl font-light tracking-[0.15em] text-primary sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-2xl"
          style={{
            transform: `translateY(${scrollY * -0.2}px) translateX(${mouseX * 5}px) translateY(${mouseY * 5}px)`,
            opacity: Math.max(0, 1 - scrollY / 400),
          }}
        >
          CASA VACIA
        </h1>
        <div 
          className="mt-2 flex items-center gap-4"
          style={{
            transform: `translateY(${scrollY * -0.2}px) translateX(${mouseX * 5}px) translateY(${mouseY * 5}px)`,
            opacity: Math.max(0, 1 - scrollY / 400),
          }}
        >
          <span className="h-px w-8 bg-primary/50 sm:w-12" />
          <span className="font-serif text-sm tracking-[0.4em] text-primary/80 sm:text-base">
            ESTUDIO
          </span>
          <span className="h-px w-8 bg-primary/50 sm:w-12" />
        </div>
        <p 
          className="mt-8 max-w-md font-serif text-base font-light leading-relaxed tracking-wide text-muted-foreground sm:text-lg drop-shadow-lg"
          style={{
            transform: `translateY(${scrollY * -0.15}px) translateX(${mouseX * 3}px) translateY(${mouseY * 3}px)`,
            opacity: Math.max(0, 1 - scrollY / 450),
          }}
        >
          Más que producir imágenes, buscamos crear mundos.
        </p>

        {/* Scroll indicator */}
        <div 
          className="mt-16 flex flex-col items-center gap-2 opacity-60"
          style={{
            opacity: Math.max(0, 0.6 - scrollY / 300),
          }}
        >
          <span className="text-[10px] tracking-[0.3em] text-muted-foreground">
            SCROLL
          </span>
          <div className="h-8 w-px animate-pulse bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  )
}
