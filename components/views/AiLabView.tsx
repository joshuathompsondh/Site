'use client'

import { ChevronDown } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { aiLabEntries } from '@/lib/mock-data'
import { cn } from '@/lib/utils'

function FilterDropdown({ label }: { label: string }) {
  return (
    <button className="flex items-center gap-1 border border-parchment-500/25 hover:border-parchment-500/50 bg-ink-800 px-2.5 py-1 transition-colors duration-100">
      <span className="font-mono text-[10px] tracking-wider text-bone-300">{label}</span>
      <ChevronDown size={9} strokeWidth={1.5} className="text-bone-400" />
    </button>
  )
}

const statusColors: Record<string, string> = {
  complete: 'text-parchment-500 border-parchment-500/40',
  running: 'text-bone-100 border-bone-200/40',
  archived: 'text-bone-400 border-bone-400/30',
}

export function AiLabView() {
  return (
    <div className="flex flex-col gap-0 h-full overflow-y-auto">
      <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-parchment-500/15">
        <h2 className="font-mono text-sm tracking-[0.2em] uppercase text-bone-100">AI Lab</h2>
        <div className="flex items-center gap-2">
          <FilterDropdown label="Sort: Date" />
          <FilterDropdown label="Type: All" />
          <FilterDropdown label="Status: All" />
        </div>
      </div>

      <div className="px-6 py-6 flex flex-col gap-4">
        <SectionLabel>Synthesis Sessions</SectionLabel>

        <div className="border border-parchment-500/20">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-parchment-500/20 bg-ink-700">
                {['Title', 'Model', 'Type', 'Date', 'Status'].map((h) => (
                  <th key={h} className="font-mono text-[10px] tracking-widest uppercase text-bone-400 text-left px-4 py-2.5">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {aiLabEntries.map((entry) => (
                <tr
                  key={entry.id}
                  className="border-b border-parchment-500/10 last:border-b-0 hover:bg-parchment-500/[0.03] transition-colors cursor-default group"
                >
                  <td className="px-4 py-3">
                    <span className="font-serif text-[13px] text-bone-100 group-hover:text-parchment-300 transition-colors">
                      {entry.title}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-mono text-[10px] text-bone-300">{entry.model}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-mono text-[10px] text-bone-400 border border-parchment-500/20 px-1.5 py-0.5">
                      {entry.type}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-mono text-[10px] text-bone-400">{entry.date}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={cn(
                      'font-mono text-[10px] border px-1.5 py-0.5',
                      statusColors[entry.status] ?? statusColors.archived
                    )}>
                      {entry.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Placeholder synthesis workspace */}
        <div className="border border-parchment-500/20 bg-ink-800 p-5 mt-2">
          <SectionLabel className="mb-3">Workspace</SectionLabel>
          <div className="border border-parchment-500/15 bg-ink-900 p-4 min-h-[100px] flex items-center justify-center">
            <span className="font-mono text-[11px] text-bone-400 tracking-widest">
              // synthesis workspace — no active session
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
