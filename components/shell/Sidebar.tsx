'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Layers,
  FileText,
  BookOpen,
  Activity,
  Mail,
  Hexagon,
  Hand,
  FolderOpen,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'Core', icon: Layers },
  { href: '/notes', label: 'Notes', icon: FileText },
  { href: '/canonical', label: 'Canonical', icon: BookOpen },
  { href: '/audio', label: 'Audio', icon: Activity },
  { href: '/emails', label: 'Emails', icon: Mail },
  { href: '/ai-lab', label: 'AI Lab', icon: Hexagon },
  { href: '/handoff', label: 'Handoff', icon: Hand },
]

export function Sidebar() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <aside
      className="fixed left-0 z-40 flex flex-col border-r border-parchment-500/20 bg-ink-900"
      style={{ top: '70px', bottom: '90px', width: '220px' }}
    >
      {/* Section label */}
      <div className="px-5 pt-5 pb-3">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-bone-400">
          Archive
        </span>
      </div>

      {/* Nav items */}
      <nav className="flex flex-col flex-1 px-2">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = isActive(href)
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'group flex items-center gap-3 px-3 py-2.5 border-l-2 transition-all duration-100 relative',
                active
                  ? 'border-l-parchment-500 bg-parchment-500/5 text-parchment-400'
                  : 'border-l-transparent text-bone-300 hover:text-parchment-300 hover:bg-parchment-500/5 hover:border-l-parchment-500/30'
              )}
            >
              <Icon
                size={14}
                strokeWidth={1.5}
                className={cn(
                  'shrink-0 transition-colors duration-100',
                  active ? 'text-parchment-500' : 'text-bone-400 group-hover:text-parchment-500'
                )}
              />
              <span className="font-mono text-[11px] tracking-wider uppercase">{label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Divider + All Files */}
      <div className="mx-4 border-t border-parchment-500/15 my-2" />
      <div className="px-2 pb-4">
        <Link
          href="/all-files"
          className={cn(
            'group flex items-center gap-3 px-3 py-2.5 border-l-2 transition-all duration-100',
            isActive('/all-files')
              ? 'border-l-parchment-500 bg-parchment-500/5 text-parchment-400'
              : 'border-l-transparent text-bone-300 hover:text-parchment-300 hover:bg-parchment-500/5 hover:border-l-parchment-500/30'
          )}
        >
          <FolderOpen
            size={14}
            strokeWidth={1.5}
            className={cn(
              'shrink-0 transition-colors duration-100',
              isActive('/all-files')
                ? 'text-parchment-500'
                : 'text-bone-400 group-hover:text-parchment-500'
            )}
          />
          <span className="font-mono text-[11px] tracking-wider uppercase">All Files</span>
        </Link>
      </div>
    </aside>
  )
}
