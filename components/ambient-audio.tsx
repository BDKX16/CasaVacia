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
  const audioContextRef = useRef<AudioContext | null>(null)
  const gainNodeRef = useRef<GainNode | null>(null)
  const oscillatorsRef = useRef<OscillatorNode[]>([])
  const noiseSourceRef = useRef<AudioBufferSourceNode | null>(null)

  const createAmbientDrone = useCallback(() => {
    const ctx = new AudioContext()
    audioContextRef.current = ctx

    const masterGain = ctx.createGain()
    masterGain.gain.setValueAtTime(0, ctx.currentTime)
    masterGain.connect(ctx.destination)
    gainNodeRef.current = masterGain

    // Deep bass drone
    const osc1 = ctx.createOscillator()
    osc1.type = "sine"
    osc1.frequency.setValueAtTime(55, ctx.currentTime) // A1
    const gain1 = ctx.createGain()
    gain1.gain.setValueAtTime(0.12, ctx.currentTime)
    osc1.connect(gain1)
    gain1.connect(masterGain)
    osc1.start()

    // Sub harmonic
    const osc2 = ctx.createOscillator()
    osc2.type = "sine"
    osc2.frequency.setValueAtTime(82.4, ctx.currentTime) // E2
    const gain2 = ctx.createGain()
    gain2.gain.setValueAtTime(0.06, ctx.currentTime)
    osc2.connect(gain2)
    gain2.connect(masterGain)
    osc2.start()

    // Slow LFO modulation on bass
    const lfo = ctx.createOscillator()
    lfo.type = "sine"
    lfo.frequency.setValueAtTime(0.08, ctx.currentTime)
    const lfoGain = ctx.createGain()
    lfoGain.gain.setValueAtTime(3, ctx.currentTime)
    lfo.connect(lfoGain)
    lfoGain.connect(osc1.frequency)
    lfo.start()

    // Eerie high partial
    const osc3 = ctx.createOscillator()
    osc3.type = "triangle"
    osc3.frequency.setValueAtTime(220, ctx.currentTime) // A3
    const gain3 = ctx.createGain()
    gain3.gain.setValueAtTime(0.015, ctx.currentTime)
    // Slow tremolo on the high partial
    const lfo2 = ctx.createOscillator()
    lfo2.type = "sine"
    lfo2.frequency.setValueAtTime(0.15, ctx.currentTime)
    const lfo2Gain = ctx.createGain()
    lfo2Gain.gain.setValueAtTime(0.01, ctx.currentTime)
    lfo2.connect(lfo2Gain)
    lfo2Gain.connect(gain3.gain)
    lfo2.start()
    osc3.connect(gain3)
    gain3.connect(masterGain)
    osc3.start()

    // Filtered noise for texture (wind-like)
    const bufferSize = ctx.sampleRate * 4
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
    const output = noiseBuffer.getChannelData(0)
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1
    }
    const noiseSource = ctx.createBufferSource()
    noiseSource.buffer = noiseBuffer
    noiseSource.loop = true
    const noiseFilter = ctx.createBiquadFilter()
    noiseFilter.type = "lowpass"
    noiseFilter.frequency.setValueAtTime(200, ctx.currentTime)
    noiseFilter.Q.setValueAtTime(1, ctx.currentTime)
    const noiseGain = ctx.createGain()
    noiseGain.gain.setValueAtTime(0.04, ctx.currentTime)
    noiseSource.connect(noiseFilter)
    noiseFilter.connect(noiseGain)
    noiseGain.connect(masterGain)
    noiseSource.start()

    oscillatorsRef.current = [osc1, osc2, osc3, lfo, lfo2]
    noiseSourceRef.current = noiseSource

    // Fade in
    masterGain.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 3)
  }, [])

  const toggleAudio = useCallback(() => {
    if (!hasInteracted) {
      setHasInteracted(true)
      createAmbientDrone()
      setIsPlaying(true)
      return
    }

    const ctx = audioContextRef.current
    const gain = gainNodeRef.current
    if (!ctx || !gain) return

    if (isPlaying) {
      // Fade out
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.5)
      setIsPlaying(false)
    } else {
      if (ctx.state === "suspended") {
        ctx.resume()
      }
      // Fade in
      gain.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 2)
      setIsPlaying(true)
    }
  }, [hasInteracted, isPlaying, createAmbientDrone])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      oscillatorsRef.current.forEach((osc) => {
        try {
          osc.stop()
        } catch {}
      })
      try {
        noiseSourceRef.current?.stop()
      } catch {}
      audioContextRef.current?.close()
    }
  }, [])

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
