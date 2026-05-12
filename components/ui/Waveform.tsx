'use client'

import { cn } from '@/lib/utils'

// Deterministic bar heights — seeded to look organic
const BARS = Array.from({ length: 80 }, (_, i) => {
  const v =
    4 +
    Math.abs(
      Math.sin(i * 0.71) * 12 +
        Math.sin(i * 0.17 + 1.3) * 8 +
        Math.sin(i * 0.037 + 0.7) * 6
    )
  return Math.max(3, Math.min(28, v))
})

interface WaveformProps {
  progress?: number
  className?: string
  height?: number
  compact?: boolean
}

export function Waveform({ progress = 0, className, height = 36, compact = false }: WaveformProps) {
  const barCount = compact ? 60 : 80
  const bars = BARS.slice(0, barCount)
  const barW = 2
  const gap = 1
  const totalW = barCount * (barW + gap) - gap
  const maxH = height

  return (
    <svg
      width={totalW}
      height={maxH}
      viewBox={`0 0 ${totalW} ${maxH}`}
      className={cn('shrink-0', className)}
      aria-hidden="true"
    >
      {bars.map((h, i) => {
        const played = i / barCount < progress
        const isCurrent = Math.abs(i / barCount - progress) < 1 / barCount
        const barH = Math.round(h)
        const y = (maxH - barH) / 2
        const x = i * (barW + gap)

        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={barW}
            height={barH}
            fill="#c9a96a"
            opacity={isCurrent ? 1 : played ? 0.75 : 0.18}
          />
        )
      })}
    </svg>
  )
}
