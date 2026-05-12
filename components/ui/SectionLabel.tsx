import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  gold?: boolean
  count?: number | string
}

export function SectionLabel({ children, className, gold, count }: SectionLabelProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between font-mono text-xs tracking-widest uppercase',
        gold ? 'text-parchment-500' : 'text-bone-300',
        className
      )}
    >
      <span>{children}</span>
      {count !== undefined && (
        <span className="text-bone-400">{count}</span>
      )}
    </div>
  )
}
