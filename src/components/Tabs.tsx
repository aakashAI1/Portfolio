import { cn } from '../lib/cn'

export function Tabs<T extends string>({
  value,
  onChange,
  options,
  className,
}: {
  value: T
  onChange: (v: T) => void
  options: Array<{ value: T; label: string }>
  className?: string
}) {
  return (
    <div
      className={cn(
        'inline-flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1',
        className,
      )}
    >
      {options.map((o) => {
        const active = o.value === value
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium transition',
              active ? 'bg-white/10 text-ink-1' : 'text-ink-3 hover:text-ink-1',
            )}
          >
            {o.label}
          </button>
        )
      })}
    </div>
  )
}

