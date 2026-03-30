import { useEffect, useMemo, useState } from 'react'
import { cn } from '../lib/cn'

type Theme = 'dark' | 'light'

function getInitialTheme(): Theme {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark' || saved === 'light') return saved
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme())

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const label = useMemo(() => (theme === 'dark' ? 'Switch to light' : 'Switch to dark'), [theme])

  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      className={cn(
        'group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-ink-1 shadow-sm backdrop-blur transition hover:bg-white/10 dark:border-white/10 dark:bg-white/5',
        className,
      )}
    >
      <span className="relative inline-flex h-5 w-9 items-center rounded-full bg-white/10 p-0.5 transition">
        <span
          className={cn(
            'h-4 w-4 rounded-full bg-white/80 transition',
            theme === 'dark' ? 'translate-x-4 bg-white/80' : 'translate-x-0 bg-white/70',
          )}
        />
      </span>
      <span className="hidden sm:block">{theme === 'dark' ? 'Dark' : 'Light'}</span>
    </button>
  )
}

