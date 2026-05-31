'use client'

import { useEffect } from 'react'
import {
  Shuffle,
  SkipBack,
  Play,
  Pause,
  SkipForward,
  Repeat,
  Volume2,
} from 'lucide-react'
import { useAppStore } from '@/lib/store'
import { Waveform } from '@/components/ui/Waveform'
import { formatTime } from '@/lib/utils'

export function BottomPlayer() {
  const { currentTrack, isPlaying, currentTime, volume, togglePlay, incrementTime, setVolume } =
    useAppStore()

  // Fake progress timer
  useEffect(() => {
    if (!isPlaying) return
    const id = setInterval(() => {
      incrementTime()
    }, 1000)
    return () => clearInterval(id)
  }, [isPlaying, incrementTime])

  const duration = currentTrack?.durationSeconds ?? 1
  const progress = Math.min(1, currentTime / duration)

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center gap-4 px-5 border-t border-parchment-500/20 bg-ink-900"
      style={{ height: '90px' }}
    >
      {/* Left: art + track info */}
      <div className="flex items-center gap-3 w-[260px] shrink-0">
        {/* Album art placeholder */}
        <div
          className="w-11 h-11 shrink-0 border border-parchment-500/30"
          style={{
            background: 'linear-gradient(135deg, #15110c 0%, #1c1812 50%, #0f0d0a 100%)',
          }}
        />
        <div className="min-w-0">
          {currentTrack ? (
            <>
              <p className="font-mono text-[11px] text-bone-100 truncate leading-tight">
                {String(currentTrack.num).padStart(2, '0')}. {currentTrack.title}
              </p>
              <p className="font-mono text-[10px] text-bone-400 truncate leading-tight mt-0.5">
                {currentTrack.album}
              </p>
            </>
          ) : (
            <p className="font-mono text-[10px] text-bone-400">no track selected</p>
          )}
        </div>
      </div>

      {/* Center: transport + waveform */}
      <div className="flex-1 flex flex-col items-center gap-2 min-w-0">
        {/* Transport controls */}
        <div className="flex items-center gap-5">
          <button className="text-bone-400 hover:text-parchment-400 transition-colors duration-100" aria-label="Shuffle">
            <Shuffle size={13} strokeWidth={1.5} />
          </button>
          <button className="text-bone-300 hover:text-parchment-400 transition-colors duration-100" aria-label="Previous">
            <SkipBack size={16} strokeWidth={1.5} />
          </button>
          <button
            onClick={togglePlay}
            className="flex items-center justify-center w-8 h-8 border border-parchment-500/50 text-parchment-500 hover:text-parchment-300 hover:border-parchment-500 transition-colors duration-100"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause size={14} strokeWidth={1.5} /> : <Play size={14} strokeWidth={1.5} />}
          </button>
          <button className="text-bone-300 hover:text-parchment-400 transition-colors duration-100" aria-label="Next">
            <SkipForward size={16} strokeWidth={1.5} />
          </button>
          <button className="text-bone-400 hover:text-parchment-400 transition-colors duration-100" aria-label="Repeat">
            <Repeat size={13} strokeWidth={1.5} />
          </button>
        </div>

        {/* Waveform progress */}
        <div className="flex items-center gap-3 w-full max-w-[540px]">
          <span className="font-mono text-[10px] text-bone-400 w-10 text-right shrink-0">
            {formatTime(currentTime)}
          </span>
          <div className="flex-1 overflow-hidden">
            <Waveform progress={progress} height={28} compact />
          </div>
          <span className="font-mono text-[10px] text-bone-400 w-10 shrink-0">
            {formatTime(duration)}
          </span>
        </div>
      </div>

      {/* Right: volume + mode */}
      <div className="flex items-center gap-3 w-[200px] justify-end shrink-0">
        <Volume2 size={13} strokeWidth={1.5} className="text-bone-400 shrink-0" />
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-20"
          aria-label="Volume"
        />
        <div className="flex items-center gap-1.5 ml-2">
          <span
            className="w-1.5 h-1.5 rounded-full bg-parchment-500 animate-pulse shrink-0"
            style={{ animationDuration: '2.5s' }}
          />
          <span className="font-mono text-[10px] tracking-widest uppercase text-bone-300">
            Local Mode
          </span>
        </div>
      </div>
    </div>
  )
}
