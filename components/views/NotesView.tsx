'use client'

import { ChevronDown } from 'lucide-react'
import { useAppStore } from '@/lib/store'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { notes } from '@/lib/mock-data'
import { cn } from '@/lib/utils'

function Stars({ count, total = 5 }: { count: number; total?: number }) {
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={cn(
            'font-mono text-[11px]',
            i < count ? 'text-parchment-500' : 'text-bone-400'
          )}
        >
          ★
        </span>
      ))}
    </span>
  )
}

function FilterDropdown({ label }: { label: string }) {
  return (
    <button className="flex items-center gap-1 border border-parchment-500/25 hover:border-parchment-500/50 bg-ink-800 px-2.5 py-1 transition-colors duration-100">
      <span className="font-mono text-[10px] tracking-wider text-bone-300">{label}</span>
      <ChevronDown size={9} strokeWidth={1.5} className="text-bone-400" />
    </button>
  )
}

export function NotesView() {
  const { selectedNoteId, setSelectedNote } = useAppStore()
  const selectedNote = notes.find((n) => n.id === selectedNoteId) ?? notes[0]

  return (
    <div className="flex h-full overflow-hidden">
      {/* Left: list */}
      <div
        className="border-r border-parchment-500/20 flex flex-col overflow-hidden shrink-0"
        style={{ width: '300px' }}
      >
        {/* Header */}
        <div className="px-5 pt-5 pb-3 border-b border-parchment-500/15">
          <SectionLabel className="mb-3">Notes</SectionLabel>
          <div className="flex gap-1.5 flex-wrap">
            <FilterDropdown label="Sort: Date (Newest)" />
            <FilterDropdown label="Year: All" />
            <FilterDropdown label="Stars: All" />
          </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto">
          {notes.map((note) => {
            const isActive = note.id === (selectedNoteId ?? notes[0].id)
            return (
              <div
                key={note.id}
                onClick={() => setSelectedNote(note.id)}
                className={cn(
                  'px-5 py-3.5 border-l-2 border-b border-b-parchment-500/10 cursor-pointer transition-all duration-100',
                  isActive
                    ? 'border-l-parchment-500 bg-parchment-500/5'
                    : 'border-l-transparent hover:border-l-parchment-500/40 hover:bg-parchment-500/[0.03]'
                )}
              >
                <div className="flex items-start justify-between gap-2 mb-0.5">
                  <p className={cn(
                    'font-serif text-[13px] leading-snug flex-1',
                    isActive ? 'text-bone-100' : 'text-bone-200'
                  )}>
                    {note.title}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-bone-400">{note.date}</span>
                  <Stars count={note.stars} />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Right: content */}
      <div className="flex-1 overflow-y-auto">
        {selectedNote ? (
          <div className="px-8 py-7 max-w-2xl">
            {/* Note meta */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] tracking-widest uppercase text-bone-400">
                  {selectedNote.date}
                </span>
                <Stars count={selectedNote.stars} />
              </div>
              <span className="font-mono text-[10px] text-bone-400 border border-parchment-500/20 px-2 py-0.5">
                # {selectedNote.noteId}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl text-bone-100 leading-tight mb-6">
              {selectedNote.title}
            </h2>

            {/* Body paragraphs */}
            <div className="flex flex-col gap-5">
              {selectedNote.content.map((para, i) => (
                <p
                  key={i}
                  className="font-serif text-bone-200 leading-relaxed"
                  style={{ fontSize: '15px' }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-8 pt-5 border-t border-parchment-500/15">
              <span className="font-mono text-[10px] text-bone-400">
                Created: {selectedNote.created} · Last edited: {selectedNote.edited}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <span className="font-mono text-[11px] text-bone-400 tracking-widest">
              // select a note
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
