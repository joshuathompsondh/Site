'use client'

import { useState } from 'react'
import { SlidersHorizontal, Clock, MoreHorizontal, Play, ChevronDown } from 'lucide-react'
import { useAppStore } from '@/lib/store'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { tracks, sessions, recentlyPlayed } from '@/lib/mock-data'
import { cn } from '@/lib/utils'
import type { Track } from '@/lib/types'

const SESSION_ICONS: Record<string, React.ReactNode> = {
  wave: (
    <svg viewBox="0 0 16 16" fill="none" width={13} height={13} className="text-parchment-500">
      <polyline points="1,8 4,4 7,10 10,6 13,8 15,8" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  circle: (
    <svg viewBox="0 0 16 16" fill="none" width={13} height={13} className="text-parchment-500">
      <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  triangle: (
    <svg viewBox="0 0 16 16" fill="none" width={13} height={13} className="text-parchment-500">
      <polygon points="8,2 14,13 2,13" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  lines: (
    <svg viewBox="0 0 16 16" fill="none" width={13} height={13} className="text-parchment-500">
      <line x1="2" y1="5" x2="14" y2="5" stroke="currentColor" strokeWidth="1.2" />
      <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1.2" />
      <line x1="2" y1="11" x2="14" y2="11" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  hex: (
    <svg viewBox="0 0 16 16" fill="none" width={13} height={13} className="text-parchment-500">
      <polygon points="8,1 14,4.5 14,11.5 8,15 2,11.5 2,4.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
}

function FilterDropdown({ label }: { label: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 border border-parchment-500/30 hover:border-parchment-500/60 bg-ink-800 px-3 py-1.5 transition-colors duration-100"
      >
        <span className="font-mono text-[10px] tracking-wider text-bone-200">{label}</span>
        <ChevronDown size={10} strokeWidth={1.5} className="text-bone-400" />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 z-20 border border-parchment-500/40 bg-ink-800 min-w-[120px]">
          {['All', 'Option A', 'Option B'].map((opt) => (
            <button
              key={opt}
              onClick={() => setOpen(false)}
              className="block w-full px-3 py-1.5 text-left font-mono text-[10px] text-bone-200 hover:bg-parchment-500/10 hover:text-parchment-300 transition-colors"
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export function AudioView() {
  const { selectedTrackId, setTrack } = useAppStore()
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const handleTrackClick = (track: Track) => {
    setTrack(track)
  }

  return (
    <div className="flex flex-col gap-0 h-full overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-parchment-500/15">
        <h2 className="font-mono text-sm tracking-[0.2em] uppercase text-bone-100">
          Audio Archive
        </h2>
        <div className="flex items-center gap-2">
          <FilterDropdown label="Sort: Date Added" />
          <FilterDropdown label="Type: All" />
          <FilterDropdown label="Genre: All" />
          <FilterDropdown label="Year: All" />
          <button className="border border-parchment-500/30 hover:border-parchment-500/60 bg-ink-800 p-1.5 transition-colors duration-100">
            <SlidersHorizontal size={13} strokeWidth={1.5} className="text-parchment-500" />
          </button>
        </div>
      </div>

      {/* Recently Played + Sessions row */}
      <div className="flex border-b border-parchment-500/15">
        {/* Recently Played */}
        <div className="flex-1 px-6 py-4 border-r border-parchment-500/15">
          <div className="flex items-center justify-between mb-3">
            <SectionLabel>Recently Played</SectionLabel>
            <button className="font-mono text-[10px] tracking-wider uppercase text-bone-400 hover:text-parchment-400 transition-colors">
              View all
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-1">
            {recentlyPlayed.map((item, idx) => (
              <div key={item.id} className="shrink-0 group cursor-pointer" style={{ width: '110px' }}>
                <div
                  className="w-full border border-parchment-500/25 group-hover:border-parchment-500/60 transition-colors relative"
                  style={{
                    height: '110px',
                    background: `linear-gradient(135deg, #1a0f05 0%, #1c1812 50%, #0f0d0a 100%)`,
                  }}
                >
                  {idx === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-ink-900/40">
                      <div className="w-7 h-7 border border-parchment-500/60 flex items-center justify-center">
                        <Play size={11} strokeWidth={1.5} className="text-parchment-500 ml-0.5" />
                      </div>
                    </div>
                  )}
                </div>
                <p className="font-mono text-[10px] text-bone-200 mt-1.5 leading-tight truncate">
                  {item.title}
                </p>
                <p className="font-mono text-[10px] text-bone-400 truncate">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sessions & Playlists */}
        <div className="px-5 py-4 shrink-0" style={{ width: '220px' }}>
          <div className="flex items-center justify-between mb-3">
            <SectionLabel>Sessions</SectionLabel>
            <button className="font-mono text-[10px] tracking-wider uppercase text-bone-400 hover:text-parchment-400 transition-colors">
              View all
            </button>
          </div>
          <div className="flex flex-col gap-1.5">
            {sessions.map((session) => (
              <div
                key={session.id}
                className="flex items-center gap-2.5 group cursor-default hover:text-parchment-300 transition-colors"
              >
                <span className="shrink-0">{SESSION_ICONS[session.iconType] ?? SESSION_ICONS.lines}</span>
                <span className="font-mono text-[11px] text-bone-200 flex-1 truncate group-hover:text-bone-100 transition-colors">
                  {session.name}
                </span>
                <span className="font-mono text-[10px] text-bone-400 shrink-0">
                  {session.tracks} tracks
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tracks table */}
      <div className="px-6 pb-6">
        <div className="mb-3 pt-4">
          <SectionLabel>Tracks</SectionLabel>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-parchment-500/20">
              <th className="font-mono text-[10px] tracking-widest uppercase text-bone-400 text-left pb-2 pr-4 w-8">#</th>
              <th className="font-mono text-[10px] tracking-widest uppercase text-bone-400 text-left pb-2 pr-4">Title</th>
              <th className="font-mono text-[10px] tracking-widest uppercase text-bone-400 text-left pb-2 pr-4">Album / Session</th>
              <th className="font-mono text-[10px] tracking-widest uppercase text-bone-400 text-left pb-2 pr-4">Type</th>
              <th className="font-mono text-[10px] tracking-widest uppercase text-bone-400 text-left pb-2 pr-4">
                Date Added
                <span className="ml-1 text-parchment-500">↓</span>
              </th>
              <th className="pb-2 pr-4 text-bone-400 w-12">
                <Clock size={12} strokeWidth={1.5} className="mx-auto" />
              </th>
              <th className="pb-2 w-6" />
            </tr>
          </thead>
          <tbody>
            {tracks.map((track) => {
              const isSelected = selectedTrackId === track.id
              const isHovered = hoveredId === track.id
              return (
                <tr
                  key={track.id}
                  onClick={() => handleTrackClick(track)}
                  onMouseEnter={() => setHoveredId(track.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={cn(
                    'group cursor-pointer transition-all duration-100 border-l-2',
                    isSelected
                      ? 'border-l-parchment-500 bg-parchment-500/5'
                      : 'border-l-transparent hover:border-l-parchment-500/40 hover:bg-parchment-500/[0.03]'
                  )}
                >
                  <td className="py-2.5 pr-4 w-8">
                    {isHovered || isSelected ? (
                      <Play
                        size={12}
                        strokeWidth={1.5}
                        className="text-parchment-500 ml-0.5"
                      />
                    ) : (
                      <span className={cn(
                        'font-mono text-[11px]',
                        isSelected ? 'text-parchment-500' : 'text-bone-400'
                      )}>
                        {String(track.num).padStart(2, '0')}
                      </span>
                    )}
                  </td>
                  <td className="py-2.5 pr-4">
                    <span className={cn(
                      'font-mono text-[11px] transition-colors',
                      isSelected ? 'text-parchment-300' : 'text-bone-100 group-hover:text-bone-100'
                    )}>
                      {track.title}
                    </span>
                  </td>
                  <td className="py-2.5 pr-4">
                    <span className="font-mono text-[11px] text-bone-300">{track.album}</span>
                  </td>
                  <td className="py-2.5 pr-4">
                    <span className="font-mono text-[10px] text-bone-400 border border-parchment-500/20 px-1.5 py-0.5">
                      {track.type}
                    </span>
                  </td>
                  <td className="py-2.5 pr-4">
                    <span className="font-mono text-[11px] text-bone-400">{track.dateAdded}</span>
                  </td>
                  <td className="py-2.5 pr-4">
                    <span className="font-mono text-[11px] text-bone-400">{track.duration}</span>
                  </td>
                  <td className="py-2.5">
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity text-bone-400 hover:text-parchment-400">
                      <MoreHorizontal size={14} strokeWidth={1.5} />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
