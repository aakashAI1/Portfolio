import { cn } from '../lib/cn'

export function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id?: string
  eyebrow?: string
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn('scroll-mt-24 py-14 sm:py-18', className)}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="mb-8">
          {eyebrow ? (
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-ink-3">
              {eyebrow}
            </div>
          ) : null}
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-ink-1 sm:text-3xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  )
}

