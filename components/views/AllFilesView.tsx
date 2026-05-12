'use client'

import { ChevronDown, FileText, Music, Archive, FileJson, File } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { fileEntries } from '@/lib/mock-data'
import { cn } from '@/lib/utils'

const typeIcons: Record<string, React.ReactNode> = {
  audio: <Music size={13} strokeWidth={1.5} className="text-parchment-500" />,
  document: <FileText size={13} strokeWidth={1.5} className="text-bone-300" />,
  pdf: <FileText size={13} strokeWidth={1.5} className="text-bone-300" />,
  archive: <Archive size={13} strokeWidth={1.5} className="text-bone-400" />,
  data: <FileJson size={13} strokeWidth={1.5} className="text-bone-300" />,
}

function FilterDropdown({ label }: { label: string }) {
  return (
    <button className="flex items-center gap-1 border border-parchment-500/25 hover:border-parchment-500/50 bg-ink-800 px-2.5 py-1 transition-colors duration-100">
      <span className="font-mono text-[10px] tracking-wider text-bone-300">{label}</span>
      <ChevronDown size={9} strokeWidth={1.5} className="text-bone-400" />
    </button>
  )
}

export function AllFilesView() {
  return (
    <div className="flex flex-col gap-0 h-full overflow-y-auto">
      <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-parchment-500/15">
        <h2 className="font-mono text-sm tracking-[0.2em] uppercase text-bone-100">All Files</h2>
        <div className="flex items-center gap-2">
          <FilterDropdown label="Sort: Date" />
          <FilterDropdown label="Type: All" />
          <FilterDropdown label="Section: All" />
        </div>
      </div>

      <div className="px-6 py-6">
        <SectionLabel count={fileEntries.length} className="mb-4">
          Archive Contents
        </SectionLabel>

        <div className="border border-parchment-500/20">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-parchment-500/20 bg-ink-700">
                {['', 'Name', 'Type', 'Size', 'Date Modified', 'Section'].map((h, i) => (
                  <th
                    key={i}
                    className="font-mono text-[10px] tracking-widest uppercase text-bone-400 text-left px-4 py-2.5"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {fileEntries.map((file) => (
                <tr
                  key={file.id}
                  className="border-b border-parchment-500/10 last:border-b-0 hover:bg-parchment-500/[0.03] transition-colors cursor-default group"
                >
                  <td className="pl-4 py-3 w-10">
                    {typeIcons[file.type] ?? <File size={13} strokeWidth={1.5} className="text-bone-400" />}
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-mono text-[11px] text-bone-100 group-hover:text-parchment-300 transition-colors">
                      {file.name}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-mono text-[10px] text-bone-400 border border-parchment-500/20 px-1.5 py-0.5">
                      {file.type}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-mono text-[11px] text-bone-400">{file.size}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-mono text-[11px] text-bone-400">{file.date}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-mono text-[10px] text-bone-400 border border-parchment-500/15 px-1.5 py-0.5">
                      {file.section}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="border border-parchment-500/15 bg-ink-800 mt-4 p-3 text-center">
          <span className="font-mono text-[10px] text-bone-400 tracking-widest">
            {fileEntries.length} files indexed · storage: local
          </span>
        </div>
      </div>
    </div>
  )
}
