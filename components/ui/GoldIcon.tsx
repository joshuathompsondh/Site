import { type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface GoldIconProps {
  icon: LucideIcon
  size?: number
  className?: string
  dim?: boolean
}

export function GoldIcon({ icon: Icon, size = 14, className, dim }: GoldIconProps) {
  return (
    <Icon
      size={size}
      strokeWidth={1.5}
      className={cn(dim ? 'text-bone-400' : 'text-parchment-500', className)}
    />
  )
}
