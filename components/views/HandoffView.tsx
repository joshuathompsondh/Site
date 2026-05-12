'use client'

import { ChevronDown } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { handoffEntries } from '@/lib/mock-data'
import { cn } from '@/lib/utils'

const statusStyle: Record<string, string> = {
  pending: 'text-bone-300 border-bone-300/30',
  delivered: 'text-parchment-500 border-parchment-500/40',
  acknowledged: 'text-bone-100 border-bone-200/40',
}

export function HandoffView() {
  return (
    <div className="flex flex-col gap-0 h-full overflow-y-auto">
      <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-parchment-500/15">
        <h2 className="font-mono text-sm tracking-[0.2em] uppercase text-bone-100">Handoff</h2>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 border border-parchment-500/25 hover:border-parchment-500/50 bg-ink-800 px-2.5 py-1 transition-colors duration-100">
            <span className="font-mono text-[10px] tracking-wider text-bone-300">Sort: Date</span>
            <ChevronDown size={9} strokeWidth={1.5} className="text-bone-400" />
          </button>
          <button className="flex items-center gap-1 border border-parchment-500/25 hover:border-parchment-500/50 bg-ink-800 px-2.5 py-1 transition-colors duration-100">
            <span className="font-mono text-[10px] tracking-wider text-bone-300">Status: All</span>
            <ChevronDown size={9} strokeWidth={1.5} className="text-bone-400" />
          </button>
        </div>
      </div>

      <div className="px-6 py-6 flex flex-col gap-4">
        <SectionLabel count={handoffEntries.length}>Handoff Documents</SectionLabel>

        <div className="flex flex-col gap-2">
          {handoffEntries.map((entry) => (
            <div
              key={entry.id}
              className="border border-parchment-500/20 bg-ink-800 hover:border-parchment-500/40 transition-colors duration-100 p-4"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-[14px] text-bone-100 leading-snug mb-1">
                    {entry.title}
                  </h3>
                  <span className="font-mono text-[10px] text-bone-400">
                    → {entry.recipient}
                  </span>
                </div>
                <div className="flex flex-col items-end gap-1.5 shrink-0">
                  <span className={cn(
                    'font-mono text-[10px] border px-2 py-0.5',
                    statusStyle[entry.status] ?? statusStyle.pending
                  )}>
                    {entry.status}
                  </span>
                  <span className="font-mono text-[10px] text-bone-400">{entry.date}</span>
                </div>
              </div>
              {entry.notes && (
                <p className="font-serif text-[12px] text-bone-300 italic leading-snug border-t border-parchment-500/10 pt-2 mt-2">
                  {entry.notes}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
