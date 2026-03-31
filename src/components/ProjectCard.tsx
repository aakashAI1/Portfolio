// src/components/ProjectCard.tsx
import { motion } from 'framer-motion'
import type { FeaturedProject, ProjectTag } from '../content'
import { Chip } from './Chip'

interface ProjectCardProps {
  project: FeaturedProject
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-sm backdrop-blur"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-32 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl" />
      </div>

      <div className="relative">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-ink-1">{project.title}</h3>
            <p className="mt-1 text-sm text-ink-3">{project.subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t: ProjectTag) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-3 text-sm leading-relaxed text-ink-2">
          <p>
            <span className="font-semibold text-ink-1">Problem:</span> {project.problem}
          </p>
          <p>
            <span className="font-semibold text-ink-1">Solution:</span> {project.solution}
          </p>
          <p>
            <span className="font-semibold text-ink-1">Impact:</span> {project.impact}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((s: string) => (
            <Chip key={s} className="bg-white/[0.03]">
              {s}
            </Chip>
          ))}
        </div>

        {(project.links.repo || project.links.demo) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.repo && (
              <a
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-ink-1 transition hover:bg-white/10"
                href={project.links.repo}
                target="_blank"
                rel="noreferrer"
              >
                Repository
              </a>
            )}
            {project.links.demo && (
              <a
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-1 to-brand-2 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
              >
                Live demo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  )
}