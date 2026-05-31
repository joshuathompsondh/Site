'use client'

import Link from 'next/link'
import { FileText, BookOpen, Activity, Mail, FlaskConical } from 'lucide-react'
import { SeedOfLife } from '@/components/decorations/SeedOfLife'
import { GeometricSigil } from '@/components/decorations/GeometricSigil'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { statusTiles } from '@/lib/mock-data'

const quickNavItems = [
  { label: 'Notes', href: '/notes', icon: FileText },
  { label: 'Canonical', href: '/canonical', icon: BookOpen },
  { label: 'Audio', href: '/audio', icon: Activity },
  { label: 'Emails', href: '/emails', icon: Mail },
  { label: 'Experiments', href: '/ai-lab', icon: FlaskConical },
]

const sigilVariants = ['rings', 'diamond', 'hexagon', 'triangle', 'sliders'] as const

export function CoreView() {
  return (
    <div className="flex flex-col gap-5 p-6">
      {/* Welcome panel */}
      <div className="border border-parchment-500/30 bg-ink-800 hover:border-parchment-500/50 transition-colors duration-150">
        {/* Top: art + text */}
        <div className="flex gap-0">
          {/* Left: sacred geometry */}
          <div className="flex items-center justify-center w-[200px] shrink-0 border-r border-parchment-500/20 py-8 px-6">
            <SeedOfLife size={140} strokeWidth={0.9} />
          </div>

          {/* Right: text content */}
          <div className="flex-1 p-7 flex flex-col justify-center">
            <h1 className="font-serif text-3xl text-bone-100 mb-3 leading-tight">welcome</h1>
            <p className="font-serif text-bone-200 leading-relaxed text-base mb-5" style={{ fontStyle: 'italic' }}>
              This archive is a living exegesis—notes, observations, and works in progress toward
              understanding the world and the path beyond it. Every document is a fragment. Every
              fragment is a door.
            </p>

            {/* Quick-nav tiles */}
            <div className="flex gap-2">
              {quickNavItems.map(({ label, href, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex flex-col items-center gap-1.5 px-4 py-3 border border-parchment-500/25 hover:border-parchment-500/60 bg-ink-900 hover:bg-parchment-500/5 transition-all duration-100 group"
                >
                  <Icon
                    size={14}
                    strokeWidth={1.5}
                    className="text-parchment-500 group-hover:text-parchment-300 transition-colors"
                  />
                  <span className="font-mono text-[10px] tracking-widest uppercase text-bone-300 group-hover:text-parchment-300 transition-colors whitespace-nowrap">
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project Status */}
      <div>
        <SectionLabel className="mb-3">Project Status</SectionLabel>
        <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
          {statusTiles.map((tile, i) => (
            <div
              key={tile.id}
              className="border border-parchment-500/25 bg-ink-800 hover:border-parchment-500/50 transition-colors duration-150 flex flex-col items-center justify-center gap-3 py-5 px-3"
            >
              <GeometricSigil
                size={40}
                variant={sigilVariants[i % sigilVariants.length]}
                strokeWidth={0.8}
              />
              <div className="text-center">
                <div className="font-mono text-[22px] text-bone-100 leading-none mb-1">
                  {tile.value}%
                </div>
                <div className="font-mono text-[9px] tracking-widest uppercase text-bone-400 text-center leading-tight">
                  {tile.label}
                </div>
              </div>
              {/* Progress bar */}
              <div className="w-full h-[2px] bg-parchment-500/15">
                <div
                  className="h-full bg-parchment-500/70"
                  style={{ width: `${tile.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Status tiles row (4 empty) */}
      <div>
        <SectionLabel className="mb-3">Archive Index</SectionLabel>
        <div className="grid grid-cols-4 gap-3">
          {(['Tracks', 'Notes', 'References', 'Sessions'] as const).map((label, i) => (
            <div
              key={label}
              className="border border-parchment-500/20 bg-ink-800 p-4 flex flex-col items-center justify-center gap-2 h-24"
            >
              <span className="font-mono text-xl text-bone-100">
                {[10, 9, 6, 5][i]}
              </span>
              <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-bone-400">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Empty workspace panel */}
      <div className="border border-parchment-500/20 bg-ink-800 h-24 flex items-center justify-center">
        <span className="font-mono text-[11px] text-bone-400 tracking-widest">
          // workspace — no active document
        </span>
      </div>
    </div>
  )
}
