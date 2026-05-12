'use client'

import { ChevronDown } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { canonicalTexts } from '@/lib/mock-data'

function FilterDropdown({ label }: { label: string }) {
  return (
    <button className="flex items-center gap-1 border border-parchment-500/25 hover:border-parchment-500/50 bg-ink-800 px-2.5 py-1 transition-colors duration-100">
      <span className="font-mono text-[10px] tracking-wider text-bone-300">{label}</span>
      <ChevronDown size={9} strokeWidth={1.5} className="text-bone-400" />
    </button>
  )
}

const actSections = ['Confusion', 'Suspicion', 'Revelation', 'Understanding', 'Liberation']

export function CanonicalView() {
  return (
    <div className="flex flex-col gap-0 h-full overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-parchment-500/15">
        <h2 className="font-mono text-sm tracking-[0.2em] uppercase text-bone-100">
          Canonical Texts
        </h2>
        <div className="flex items-center gap-2">
          <FilterDropdown label="Sort: Relevance" />
          <FilterDropdown label="Category: All" />
          <FilterDropdown label="Era: All" />
        </div>
      </div>

      <div className="px-6 py-6 flex flex-col gap-6">
        {/* Act structure reference */}
        <div className="border border-parchment-500/20 bg-ink-800 p-4">
          <SectionLabel className="mb-3">Album Act Structure</SectionLabel>
          <div className="flex gap-0">
            {actSections.map((act, i) => (
              <div
                key={act}
                className="flex-1 border-r border-parchment-500/15 last:border-r-0 px-3 py-2 text-center"
              >
                <div className="font-mono text-[10px] text-bone-400 mb-1">ACT {i + 1}</div>
                <div className="font-mono text-[11px] text-parchment-500 uppercase tracking-wider">
                  {act}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Texts table */}
        <div>
          <SectionLabel className="mb-3">Primary Sources</SectionLabel>
          <div className="border border-parchment-500/20">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-parchment-500/20 bg-ink-700">
                  <th className="font-mono text-[10px] tracking-widest uppercase text-bone-400 text-left px-4 py-2.5">
                    Title
                  </th>
                  <th className="font-mono text-[10px] tracking-widest uppercase text-bone-400 text-left px-4 py-2.5">
                    Category
                  </th>
                  <th className="font-mono text-[10px] tracking-widest uppercase text-bone-400 text-left px-4 py-2.5">
                    Date
                  </th>
                  <th className="font-mono text-[10px] tracking-widest uppercase text-bone-400 text-left px-4 py-2.5">
                    Tags
                  </th>
                </tr>
              </thead>
              <tbody>
                {canonicalTexts.map((text, i) => (
                  <tr
                    key={text.id}
                    className="border-b border-parchment-500/10 last:border-b-0 hover:bg-parchment-500/[0.03] transition-colors cursor-default group"
                  >
                    <td className="px-4 py-3">
                      <span className="font-serif text-[13px] text-bone-100 group-hover:text-parchment-300 transition-colors">
                        {text.title}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-mono text-[10px] text-bone-300">{text.category}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-mono text-[10px] text-bone-400">{text.date}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-1">
                        {text.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[10px] text-bone-400 border border-parchment-500/20 px-1.5 py-0.5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Excerpt panel */}
        <div className="border border-parchment-500/20 bg-ink-800 p-5">
          <SectionLabel className="mb-3">Selected Excerpt</SectionLabel>
          <p className="font-serif text-bone-200 leading-relaxed italic" style={{ fontSize: '15px' }}>
            &ldquo;If you bring forth what is within you, what you bring forth will save you. If you
            do not bring forth what is within you, what you do not bring forth will destroy you.&rdquo;
          </p>
          <p className="font-mono text-[10px] text-bone-400 mt-3">
            — Gospel of Thomas, Logion 70
          </p>
        </div>
      </div>
    </div>
  )
}
