'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { emails } from '@/lib/mock-data'
import { cn } from '@/lib/utils'

function FilterDropdown({ label }: { label: string }) {
  return (
    <button className="flex items-center gap-1 border border-parchment-500/25 hover:border-parchment-500/50 bg-ink-800 px-2.5 py-1 transition-colors duration-100">
      <span className="font-mono text-[10px] tracking-wider text-bone-300">{label}</span>
      <ChevronDown size={9} strokeWidth={1.5} className="text-bone-400" />
    </button>
  )
}

export function EmailsView() {
  const [selectedId, setSelectedId] = useState(emails[0].id)
  const selectedEmail = emails.find((e) => e.id === selectedId) ?? emails[0]

  return (
    <div className="flex h-full overflow-hidden">
      {/* Left: list */}
      <div className="border-r border-parchment-500/20 flex flex-col overflow-hidden shrink-0" style={{ width: '320px' }}>
        <div className="px-5 pt-5 pb-3 border-b border-parchment-500/15">
          <SectionLabel className="mb-3">Emails</SectionLabel>
          <div className="flex gap-1.5 flex-wrap">
            <FilterDropdown label="Sort: Newest" />
            <FilterDropdown label="Status: All" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {emails.map((email) => (
            <div
              key={email.id}
              onClick={() => setSelectedId(email.id)}
              className={cn(
                'px-5 py-3.5 border-l-2 border-b border-b-parchment-500/10 cursor-pointer transition-all duration-100',
                selectedId === email.id
                  ? 'border-l-parchment-500 bg-parchment-500/5'
                  : 'border-l-transparent hover:border-l-parchment-500/40 hover:bg-parchment-500/[0.03]'
              )}
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <p className="font-mono text-[11px] text-bone-200 flex-1 truncate">
                  {email.from}
                </p>
                {!email.read && (
                  <span className="w-1.5 h-1.5 rounded-full bg-parchment-500 shrink-0 mt-1" />
                )}
              </div>
              <p className="font-serif text-[13px] text-bone-100 leading-snug mb-1 truncate">
                {email.subject}
              </p>
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] text-bone-400 truncate flex-1">{email.preview.slice(0, 55)}…</p>
              </div>
              <p className="font-mono text-[10px] text-bone-400 mt-1">{email.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right: content */}
      <div className="flex-1 overflow-y-auto px-8 py-7">
        <div className="max-w-2xl">
          <div className="mb-5 pb-4 border-b border-parchment-500/15">
            <h2 className="font-serif text-2xl text-bone-100 mb-2">{selectedEmail.subject}</h2>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] text-bone-300">{selectedEmail.from}</span>
              <span className="font-mono text-[10px] text-bone-400">{selectedEmail.date}</span>
              {!selectedEmail.read && (
                <span className="font-mono text-[10px] border border-parchment-500/40 px-2 py-0.5 text-parchment-500">
                  unread
                </span>
              )}
            </div>
          </div>
          <p className="font-serif text-bone-200 leading-relaxed" style={{ fontSize: '15px' }}>
            {selectedEmail.preview}
          </p>
          <div className="mt-6 pt-4 border-t border-parchment-500/15">
            <p className="font-serif text-bone-300 leading-relaxed italic" style={{ fontSize: '14px' }}>
              [Message body truncated — full content not yet indexed in archive]
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
