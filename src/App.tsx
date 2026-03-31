import { motion, useReducedMotion } from 'framer-motion'
import { useMemo, useState } from 'react'
import profile from './assets/profile.png'
import { content } from './content'
import { Chip } from './components/Chip'
import { ProjectCard } from './components/ProjectCard'
import { Section } from './components/Section'
import { Tabs } from './components/Tabs'
import { ThemeToggle } from './components/ThemeToggle'
import { cn } from './lib/cn'

type ProjectFilter = 'All' | 'AI/ML' | 'Data' | 'Delivery'

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function App() {
  const reduceMotion = useReducedMotion()
  const [filter, setFilter] = useState<ProjectFilter>('All')

  const filteredProjects = useMemo(() => {
  if (filter === 'All') return content.featuredProjects

  return content.featuredProjects.filter((p) =>
    p.tags.includes(filter)
  )
}, [filter])

  return (
    <div className="min-h-dvh bg-[radial-gradient(1000px_600px_at_15%_0%,rgba(124,92,255,0.18),transparent_60%),radial-gradient(900px_500px_at_85%_10%,rgba(0,212,255,0.10),transparent_55%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_30%)]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-1/0 backdrop-blur supports-[backdrop-filter]:bg-black/20">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
          <button
            type="button"
            onClick={() => scrollToId('top')}
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-ink-1"
          >
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-brand-1 to-brand-2" />
            {content.name}
          </button>

          <nav className="hidden items-center gap-6 text-sm text-ink-3 md:flex">
            {[
              ['About', 'about'],
              ['Projects', 'projects'],
              ['Skills', 'skills'],
              ['Experience', 'experience'],
              ['Contact', 'contact'],
            ].map(([label, id]) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToId(id)}
                className="transition hover:text-ink-1"
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-ink-1 transition hover:bg-white/10 sm:inline-flex"
              href={`mailto:${content.links.email}`}
            >
              Email
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="top" className="text-ink-2">
        <section className="relative overflow-hidden py-16 sm:py-22">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
            <div className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <motion.h1
                  initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-balance text-4xl font-semibold tracking-tight text-ink-1 sm:text-5xl"
                >
                  {content.headline}
                </motion.h1>
                <motion.p
                  initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.05 }}
                  className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-ink-2 sm:text-lg"
                >
                  {content.intro}
                </motion.p>

                <motion.div
                  initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.1 }}
                  className="mt-8 flex flex-wrap items-center gap-3"
                >
                  <button
                    type="button"
                    onClick={() => scrollToId('projects')}
                    className="rounded-full bg-gradient-to-r from-brand-1 to-brand-2 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
                  >
                    View Projects
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToId('contact')}
                    className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-ink-1 transition hover:bg-white/10"
                  >
                    Contact
                  </button>
                  <div className="ml-0 flex flex-wrap gap-2 sm:ml-2">
                    <Chip>{content.location}</Chip>
                    <Chip>AI/ML · Data</Chip>
                    <Chip>Human-in-the-loop</Chip>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
                animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="relative mx-auto w-full max-w-sm"
              >
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-glow">
                  <div className="pointer-events-none absolute inset-0 opacity-60">
                    <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-brand-1/20 blur-3xl" />
                    <div className="absolute -right-24 bottom-6 h-64 w-64 rounded-full bg-brand-2/20 blur-3xl" />
                  </div>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={profile}
                      alt={`${content.name} headshot`}
                      className="aspect-[4/5] w-full object-cover"
                      loading="eager"
                    />
                  </div>
                  <div className="relative mt-4 grid gap-2">
                    <div className="text-sm font-semibold text-ink-1">{content.name}</div>
                    <div className="text-sm text-ink-3">AI/ML · Data products · Evaluation</div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <a
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-ink-1 transition hover:bg-white/10"
                        href={`mailto:${content.links.email}`}
                      >
                        {content.links.email}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Section id="about" eyebrow="About" title={content.about.title}>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              {content.about.body.map((p) => (
                <p key={p} className="text-pretty leading-relaxed text-ink-2">
                  {p}
                </p>
              ))}
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="text-sm font-semibold text-ink-1">Current focus</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {content.about.focus.map((x) => (
                  <Chip key={x} className="bg-white/[0.03]">
                    {x}
                  </Chip>
                ))}
              </div>
              <div className="mt-6 text-sm text-ink-3">
                I optimize for clarity: defined metrics, reproducible evaluation, and outcomes you can explain to a
                stakeholder in 60 seconds.
              </div>
            </div>
          </div>
        </Section>

        <Section id="projects" eyebrow="Projects" title="Work that ships and holds up under scrutiny">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <p className="max-w-2xl text-sm text-ink-3">
              Each project is framed as <span className="text-ink-1">Problem → Solution → Impact</span>, with stack and
              validation signals.
            </p>
            <Tabs<ProjectFilter>
              value={filter}
              onChange={setFilter}
              options={[
                { value: 'All', label: 'All' },
                { value: 'AI/ML', label: 'AI/ML' },
                { value: 'Data', label: 'Data' },
                { value: 'Delivery', label: 'Delivery' },
              ]}
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {filteredProjects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Section>

        <Section id="skills" eyebrow="Skills" title="Technical depth, organized for fast scanning">
          <div className="grid gap-5 md:grid-cols-2">
            {content.skills.map((g) => (
              <div key={g.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-sm font-semibold text-ink-1">{g.label}</div>
                  <div className="h-1.5 w-20 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-brand-1 to-brand-2" />
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((x) => (
                    <Chip key={x} className="bg-white/[0.03]">
                      {x}
                    </Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="Experience" title="Impact-first execution">
          <div className="grid gap-5">
            {content.experience.map((e) => (
              <div key={`${e.company}-${e.role}`} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="text-base font-semibold text-ink-1">
                    {e.role} · <span className="text-ink-2">{e.company}</span>
                  </div>
                  <div className="text-sm text-ink-3">{e.period}</div>
                </div>
                <ul className="mt-4 grid gap-2 text-sm leading-relaxed text-ink-2">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white/20" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-sm font-semibold text-ink-1">Highlights</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {content.achievements.map((a) => (
                <Chip key={a} className="bg-white/[0.03]">
                  {a}
                </Chip>
              ))}
            </div>
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let’s build something high-leverage">
          <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="text-sm font-semibold text-ink-1">Reach me</div>
              <div className="mt-4 grid gap-3 text-sm">
                <a className="text-ink-2 transition hover:text-ink-1" href={`mailto:${content.links.email}`}>
                  {content.links.email}
                </a>
                <a className="text-ink-2 transition hover:text-ink-1" href={`tel:${content.links.phone}`}>
                  {content.links.phone}
                </a>
                <a
                  className={cn(
                    'text-ink-2 transition hover:text-ink-1',
                    content.links.linkedin.endsWith('/') ? 'opacity-60' : '',
                  )}
                  href={content.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className={cn(
                    'text-ink-2 transition hover:text-ink-1',
                    content.links.github.endsWith('/') ? 'opacity-60' : '',
                  )}
                  href={content.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="text-ink-2 transition hover:text-ink-1"
                  href={content.links.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </div>
              <div className="mt-5 text-sm text-ink-3">
                Prefer a quick email with context (role, team, problem). I reply fast and with a clear next step.
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="text-sm font-semibold text-ink-1">Message</div>
              <form
                className="mt-4 grid gap-3"
                onSubmit={(e) => {
                  e.preventDefault()
                  const fd = new FormData(e.currentTarget)
                  const name = String(fd.get('name') || '')
                  const email = String(fd.get('email') || '')
                  const message = String(fd.get('message') || '')
                  const subject = encodeURIComponent(`Portfolio — ${name || 'Hello'}`)
                  const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)
                  window.location.href = `mailto:${content.links.email}?subject=${subject}&body=${body}`
                }}
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    name="name"
                    placeholder="Name"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-ink-1 outline-none ring-0 transition placeholder:text-ink-3 focus:border-white/20"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-ink-1 outline-none ring-0 transition placeholder:text-ink-3 focus:border-white/20"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="What are you building?"
                  rows={5}
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-ink-1 outline-none ring-0 transition placeholder:text-ink-3 focus:border-white/20"
                />
                <button
                  type="submit"
                  className="inline-flex w-fit items-center justify-center rounded-full bg-gradient-to-r from-brand-1 to-brand-2 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
                >
                  Send via email
                </button>
                <div className="text-xs text-ink-3">
                  This form opens your email client (no backend needed). Add an API later if you want.
                </div>
              </form>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto w-full max-w-6xl px-5 text-sm text-ink-3 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              © {new Date().getFullYear()} {content.name}
            </div>
            <div className="flex flex-wrap gap-4">
              <button type="button" className="transition hover:text-ink-1" onClick={() => scrollToId('projects')}>
                Projects
              </button>
              <button type="button" className="transition hover:text-ink-1" onClick={() => scrollToId('contact')}>
                Contact
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

