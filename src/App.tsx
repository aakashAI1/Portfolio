// src/App.tsx
import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { content, FeaturedProject, ProjectTag } from './content'
import { ProjectCard } from './components/ProjectCard'
import { Chip } from './components/Chip'
import { Section } from './components/Section'
import { Tabs } from './components/Tabs'
import { ThemeToggle } from './components/ThemeToggle'
import profile from './assets/profile.png'

type ProjectFilter = 'All' | ProjectTag
// aakash loves adith
function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function App() {
  const [filter, setFilter] = useState<ProjectFilter>('All')

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return content.featuredProjects
    return content.featuredProjects.filter((p) =>
      p.tags.includes(filter as ProjectTag)
    )
  }, [filter])

  return (
    <div className="min-h-dvh bg-[radial-gradient(1000px_600px_at_15%_0%,rgba(124,92,255,0.18),transparent_60%),radial-gradient(900px_500px_at_85%_10%,rgba(0,212,255,0.10),transparent_55%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_30%)] text-ink-2">
      
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-1/0 backdrop-blur supports-[backdrop-filter]:bg-black/20">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
          
          {/* Logo / Name */}
          <button
            type="button"
            onClick={() => scrollToId('top')}
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-ink-1"
          >
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-brand-1 to-brand-2" />
            {content.name}
          </button>

          {/* Navigation */}
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

          {/* Actions */}
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

      <main id="top" className="mx-auto max-w-6xl px-5 py-10 sm:px-6">
        
        {/* About Section */}
        <Section id="about" eyebrow="About" title={content.about.title}>
          <div className="flex flex-col-reverse items-start gap-6 md:flex-row md:items-center">
            <div className="space-y-3 flex-1">
              {content.about.body.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
              <div className="mt-4 flex flex-wrap gap-2">
                {content.about.focus.map((item, idx) => (
                  <Chip key={idx}>{item}</Chip>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
              <img
                src={profile}
                alt={content.name}
                className="h-36 w-36 rounded-full border-4 border-white/10 object-cover shadow-lg"
              />
            </div>
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" eyebrow="Projects" title="Work that ships and holds up under scrutiny">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <p className="max-w-2xl text-sm text-ink-3">
              Each project is framed as <span className="text-ink-1">Problem → Solution → Impact</span>, with stack and validation signals.
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
            {filteredProjects.map((p: FeaturedProject) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" eyebrow="Skills" title="Things I’m good at">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {content.skills.map((skill, idx) => (
              <div key={idx}>
                <h4 className="text-sm font-semibold text-ink-1">{skill.label}</h4>
                <div className="mt-1 flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <Chip key={i}>{item}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience" eyebrow="Experience" title="Where I’ve worked">
          <div className="space-y-6">
            {content.experience.map((exp, idx) => (
              <div key={idx}>
                <h4 className="font-semibold text-ink-1">{exp.role}</h4>
                <p className="text-sm text-ink-3">{exp.company} | {exp.period}</p>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-ink-2">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" eyebrow="Contact" title="Get in touch">
          <p className="text-sm text-ink-3 mb-4">
            Feel free to email me at <a className="text-ink-1 underline" href={`mailto:${content.links.email}`}>{content.links.email}</a> or connect on LinkedIn.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={content.links.linkedin} target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
            <a href={content.links.github} target="_blank" rel="noreferrer" className="underline">GitHub</a>
            <a href={content.links.instagram} target="_blank" rel="noreferrer" className="underline">Instagram</a>
          </div>
        </Section>

      </main>
    </div>
  )
}