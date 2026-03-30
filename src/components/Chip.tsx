import { cn } from '../lib/cn'

export function Chip({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-ink-2',
        className,
      )}
    >
      {children}
    </span>
  )
}

