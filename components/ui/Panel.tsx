import { cn } from '@/lib/utils'

interface PanelProps {
  title?: string
  titleRight?: React.ReactNode
  children: React.ReactNode
  className?: string
  noPadding?: boolean
}

export function Panel({ title, titleRight, children, className, noPadding }: PanelProps) {
  return (
    <div
      className={cn(
        'border border-parchment-500/30 bg-ink-800 transition-colors duration-150 hover:border-parchment-500/50',
        className
      )}
    >
      {title && (
        <div className="flex items-center justify-between border-b border-parchment-500/20 px-4 py-2">
          <span className="font-mono text-xs tracking-widest uppercase text-parchment-300">
            {title}
          </span>
          {titleRight && (
            <span className="font-mono text-xs text-bone-400">{titleRight}</span>
          )}
        </div>
      )}
      <div className={cn(!noPadding && 'p-4')}>{children}</div>
    </div>
  )
}
