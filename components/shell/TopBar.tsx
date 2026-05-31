'use client'

import { Lock } from 'lucide-react'
import { SeedOfLife } from '@/components/decorations/SeedOfLife'

export function TopBar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 border-b border-parchment-500/20 bg-ink-900"
      style={{ height: '70px' }}
    >
      {/* Left: monogram + title */}
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-9 h-9 border border-parchment-500/60 bg-ink-800 shrink-0">
          <SeedOfLife size={22} strokeWidth={1} />
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="font-mono text-xs tracking-[0.18em] uppercase text-parchment-500 leading-none">
            Gnostic Album Project
          </span>
          <span className="font-mono text-[10px] tracking-widest text-bone-300 uppercase leading-none">
            Exegesis on the World
          </span>
        </div>
      </div>

      {/* Right: mode indicator */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-bone-300">
          <Lock size={12} strokeWidth={1.5} className="text-bone-400" />
          <span className="font-mono text-[10px] tracking-[0.15em] uppercase">
            Private / Local Archive
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full bg-parchment-500 animate-pulse"
            style={{ animationDuration: '2.5s' }}
          />
          <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-parchment-500">
            Local Mode
          </span>
        </div>
      </div>
    </header>
  )
}
