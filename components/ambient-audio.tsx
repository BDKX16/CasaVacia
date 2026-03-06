"use client"

import { useState, useRef, useCallback, useEffect } from "react"

function SoundOnIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  )
}

function SoundOffIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  )
}

function EqualizerBars({ playing }: { playing: boolean }) {
  return (
    <div className="flex items-end gap-[2px] h-3">
      {[1, 2, 3, 4].map((bar) => (
        <span
          key={bar}
          className="w-[2px] bg-primary/70 rounded-full origin-bottom"
          style={{
            height: playing ? undefined : "2px",
            animation: playing
              ? `eqBar 1.${bar}s ease-in-out ${bar * 0.15}s infinite alternate`
              : "none",
            transition: "height 0.4s ease",
          }}
        />
      ))}
    </div>
  )
}

export function AmbientAudio() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [fadeVisible, setFadeVisible] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [audioFile] = useState(() => {
    // Seleccionar aleatoriamente uno de los dos archivos de audio
    const random = Math.random()
    return random < 0.5 ? '/sounds/Viento 1.mp3' : '/sounds/Viento 2.mp3'
  })

  // Inicializar el audio
  useEffect(() => {
    const audio = new Audio(audioFile)
    audio.loop = true
    audio.volume = 0
    audioRef.current = audio

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [audioFile])

  const toggleAudio = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return

    if (!hasInteracted) {
      setHasInteracted(true)
    }

    if (isPlaying) {
      // Fade out
      const fadeOut = setInterval(() => {
        if (audio.volume > 0.05) {
          audio.volume = Math.max(0, audio.volume - 0.05)
        } else {
          audio.volume = 0
          audio.pause()
          clearInterval(fadeOut)
        }
      }, 50)
      setIsPlaying(false)
    } else {
      // Fade in
      audio.volume = 0
      audio.play().catch(console.error)
      const fadeIn = setInterval(() => {
        if (audio.volume < 0.45) {
          audio.volume = Math.min(0.5, audio.volume + 0.05)
        } else {
          audio.volume = 0.5
          clearInterval(fadeIn)
        }
      }, 50)
      setIsPlaying(true)
    }
  }, [hasInteracted, isPlaying])

  // Hide the initial prompt after a delay
  useEffect(() => {
    if (!hasInteracted) {
      const timer = setTimeout(() => setFadeVisible(false), 8000)
      return () => clearTimeout(timer)
    }
  }, [hasInteracted])

  return (
    <>
      {/* Equalizer bar animation keyframes */}
      <style jsx global>{`
        @keyframes eqBar {
          0% {
            height: 2px;
          }
          100% {
            height: 12px;
          }
        }
      `}</style>

      {/* Floating audio toggle - bottom left, minimal */}
      <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
        <button
          onClick={toggleAudio}
          aria-label={isPlaying ? "Silenciar musica ambiental" : "Reproducir musica ambiental"}
          className="group flex items-center gap-2.5 rounded-full border border-border/50 bg-background/80 px-3.5 py-2 backdrop-blur-md transition-all duration-500 hover:border-primary/40 hover:bg-card/90"
        >
          <EqualizerBars playing={isPlaying} />

          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 group-hover:text-primary">
            {isPlaying ? "Sonido" : "Silencio"}
          </span>

          {isPlaying ? (
            <SoundOnIcon className="h-3.5 w-3.5 text-primary/70 transition-colors duration-300 group-hover:text-primary" />
          ) : (
            <SoundOffIcon className="h-3.5 w-3.5 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
          )}
        </button>

        {/* Initial hint - only before first interaction */}
        {!hasInteracted && (
          <span
            className={`text-[10px] tracking-wider text-muted-foreground/60 transition-opacity duration-1000 ${
              fadeVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {"Haz clic para activar el ambiente sonoro"}
          </span>
        )}
      </div>
    </>
  )
}
