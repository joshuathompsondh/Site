'use client'

import { usePathname } from 'next/navigation'
import { FileText, Activity, BookOpen, Search, Upload, Hexagon, Pin, ChevronRight, Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react'
import { useAppStore } from '@/lib/store'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Waveform } from '@/components/ui/Waveform'
import { recentActivity, pinnedItems, quickLinks, tracks } from '@/lib/mock-data'
import { formatTime } from '@/lib/utils'
import { cn } from '@/lib/utils'
import type { ActivityItem, PinnedItem, QuickLink } from '@/lib/types'

function activityIcon(icon: string) {
  const cls = 'text-parchment-500 shrink-0'
  switch (icon) {
    case 'file': return <FileText size={13} strokeWidth={1.5} className={cls} />
    case 'audio': return <Activity size={13} strokeWidth={1.5} className={cls} />
    case 'book': return <BookOpen size={13} strokeWidth={1.5} className={cls} />
    case 'mail': return <FileText size={13} strokeWidth={1.5} className={cls} />
    case 'hex': return <Hexagon size={13} strokeWidth={1.5} className={cls} />
    default: return <FileText size={13} strokeWidth={1.5} className={cls} />
  }
}

function quickLinkIcon(icon: string) {
  const cls = 'text-parchment-500 shrink-0'
  switch (icon) {
    case 'file': return <FileText size={12} strokeWidth={1.5} className={cls} />
    case 'search': return <Search size={12} strokeWidth={1.5} className={cls} />
    case 'audio': return <Activity size={12} strokeWidth={1.5} className={cls} />
    case 'book': return <BookOpen size={12} strokeWidth={1.5} className={cls} />
    case 'upload': return <Upload size={12} strokeWidth={1.5} className={cls} />
    case 'hex': return <Hexagon size={12} strokeWidth={1.5} className={cls} />
    default: return <FileText size={12} strokeWidth={1.5} className={cls} />
  }
}

function pinnedIcon(icon: string) {
  const cls = 'text-parchment-600 shrink-0'
  switch (icon) {
    case 'file': return <FileText size={13} strokeWidth={1.5} className={cls} />
    case 'audio': return <Activity size={13} strokeWidth={1.5} className={cls} />
    case 'book': return <BookOpen size={13} strokeWidth={1.5} className={cls} />
    default: return <FileText size={13} strokeWidth={1.5} className={cls} />
  }
}

function CoreRightRail() {
  return (
    <div className="flex flex-col gap-0 h-full overflow-y-auto">
      {/* Recent Activity */}
      <div className="px-5 pt-5 pb-4 border-b border-parchment-500/15">
        <div className="flex items-center justify-between mb-3">
          <SectionLabel>Recent Activity</SectionLabel>
          <button className="font-mono text-[10px] tracking-wider uppercase text-bone-400 hover:text-parchment-400 transition-colors">
            View all
          </button>
        </div>
        <div className="flex flex-col gap-2.5">
          {recentActivity.map((item: ActivityItem) => (
            <div key={item.id} className="flex items-start gap-2.5 group cursor-default">
              {activityIcon(item.icon)}
              <span className="font-mono text-[11px] text-bone-200 flex-1 leading-snug group-hover:text-bone-100 transition-colors">
                {item.label}
              </span>
              <span className="font-mono text-[10px] text-bone-400 shrink-0 whitespace-nowrap">
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="px-5 py-4 border-b border-parchment-500/15">
        <SectionLabel className="mb-3">Quick Links</SectionLabel>
        <div className="grid grid-cols-2 gap-1.5">
          {quickLinks.map((link: QuickLink) => (
            <button
              key={link.id}
              className="flex items-center gap-2 px-3 py-2 border border-parchment-500/25 hover:border-parchment-500/50 bg-ink-800 hover:bg-parchment-500/5 transition-all duration-100 text-left"
            >
              {quickLinkIcon(link.icon)}
              <span className="font-mono text-[10px] text-bone-200 truncate">{link.label}</span>
              <ChevronRight size={10} strokeWidth={1.5} className="text-bone-400 ml-auto shrink-0" />
            </button>
          ))}
        </div>
      </div>

      {/* Pinned Items */}
      <div className="px-5 py-4">
        <div className="flex items-center justify-between mb-3">
          <SectionLabel>Pinned Items</SectionLabel>
          <button className="font-mono text-[10px] tracking-wider uppercase text-bone-400 hover:text-parchment-400 transition-colors">
            Edit
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {pinnedItems.map((item: PinnedItem) => (
            <div
              key={item.id}
              className="flex items-center gap-2.5 group cursor-default hover:text-parchment-300 transition-colors"
            >
              {pinnedIcon(item.icon)}
              <span className="font-mono text-[11px] text-bone-200 group-hover:text-bone-100 transition-colors truncate">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function AudioNowPlaying() {
  const { currentTrack, isPlaying, currentTime, volume, togglePlay, setVolume, setTrack } =
    useAppStore()

  const duration = currentTrack?.durationSeconds ?? 1
  const progress = Math.min(1, currentTime / duration)

  // Up next: tracks after current
  const currentIdx = tracks.findIndex((t) => t.id === currentTrack?.id)
  const upNext = tracks.slice(currentIdx + 1, currentIdx + 6)

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {/* Now Playing header */}
      <div className="px-5 pt-5 pb-3 border-b border-parchment-500/15">
        <SectionLabel gold className="mb-4">Now Playing</SectionLabel>

        {/* Album art */}
        <div
          className="w-full aspect-square border border-parchment-500/30 mb-4"
          style={{
            maxHeight: '200px',
            background: 'linear-gradient(135deg, #1a0f05 0%, #2d1a0a 40%, #0a0907 100%)',
          }}
        />

        {/* Track info */}
        {currentTrack ? (
          <>
            <h3 className="font-serif text-bone-100 text-lg leading-tight mb-0.5">
              {currentTrack.title}
            </h3>
            <p className="font-mono text-[10px] text-bone-300 uppercase tracking-wider mb-1">
              {currentTrack.album}
            </p>
            <div className="inline-flex items-center border border-parchment-500/30 px-2 py-0.5 mb-4">
              <span className="font-mono text-[10px] text-bone-400 tracking-wider">
                ALAC · 24bit / 48kHz
              </span>
            </div>
          </>
        ) : (
          <p className="font-mono text-[11px] text-bone-400 mb-4">no track selected</p>
        )}

        {/* Waveform */}
        <div className="mb-3">
          <Waveform progress={progress} height={32} compact />
          <div className="flex justify-between mt-1">
            <span className="font-mono text-[10px] text-bone-400">{formatTime(currentTime)}</span>
            <span className="font-mono text-[10px] text-bone-400">{formatTime(duration)}</span>
          </div>
        </div>

        {/* Transport */}
        <div className="flex items-center justify-center gap-5 mb-3">
          <button
            className="text-bone-300 hover:text-parchment-400 transition-colors"
            onClick={() => {
              const idx = tracks.findIndex((t) => t.id === currentTrack?.id)
              if (idx > 0) setTrack(tracks[idx - 1])
            }}
          >
            <SkipBack size={16} strokeWidth={1.5} />
          </button>
          <button
            onClick={togglePlay}
            className="flex items-center justify-center w-9 h-9 border border-parchment-500/50 text-parchment-500 hover:text-parchment-300 hover:border-parchment-500 transition-colors"
          >
            {isPlaying ? <Pause size={15} strokeWidth={1.5} /> : <Play size={15} strokeWidth={1.5} />}
          </button>
          <button
            className="text-bone-300 hover:text-parchment-400 transition-colors"
            onClick={() => {
              const idx = tracks.findIndex((t) => t.id === currentTrack?.id)
              if (idx < tracks.length - 1) setTrack(tracks[idx + 1])
            }}
          >
            <SkipForward size={16} strokeWidth={1.5} />
          </button>
        </div>

        {/* Volume */}
        <div className="flex items-center gap-2">
          <Volume2 size={12} strokeWidth={1.5} className="text-bone-400 shrink-0" />
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="flex-1"
          />
        </div>
      </div>

      {/* Up Next */}
      <div className="px-5 py-4">
        <div className="flex items-center justify-between mb-3">
          <SectionLabel>Up Next</SectionLabel>
          <button className="font-mono text-[10px] tracking-wider uppercase text-bone-400 hover:text-parchment-400 transition-colors">
            Clear
          </button>
        </div>
        <div className="flex flex-col gap-1">
          {upNext.map((track) => (
            <div
              key={track.id}
              onClick={() => setTrack(track)}
              className="flex items-center gap-3 p-2 hover:bg-parchment-500/5 border border-transparent hover:border-parchment-500/25 transition-all duration-100 cursor-pointer group"
            >
              {/* Drag handle dots */}
              <div className="flex flex-col gap-[3px] shrink-0 opacity-30">
                <div className="flex gap-[3px]">
                  <div className="w-[3px] h-[3px] rounded-full bg-bone-400" />
                  <div className="w-[3px] h-[3px] rounded-full bg-bone-400" />
                </div>
                <div className="flex gap-[3px]">
                  <div className="w-[3px] h-[3px] rounded-full bg-bone-400" />
                  <div className="w-[3px] h-[3px] rounded-full bg-bone-400" />
                </div>
              </div>
              {/* Mini art */}
              <div
                className="w-8 h-8 shrink-0 border border-parchment-500/20"
                style={{ background: 'linear-gradient(135deg, #15110c, #0f0d0a)' }}
              />
              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="font-mono text-[10px] text-bone-200 truncate group-hover:text-bone-100 transition-colors">
                  {track.title}
                </p>
                <p className="font-mono text-[10px] text-bone-400 truncate">{track.album}</p>
              </div>
              <span className="font-mono text-[10px] text-bone-400 shrink-0">{track.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function RightRail() {
  const pathname = usePathname()
  const isAudio = pathname === '/audio'

  return (
    <aside
      className="fixed right-0 z-40 border-l border-parchment-500/20 bg-ink-900"
      style={{ top: '70px', bottom: '90px', width: '340px' }}
    >
      {isAudio ? <AudioNowPlaying /> : <CoreRightRail />}
    </aside>
  )
}
