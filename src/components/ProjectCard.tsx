import { motion } from 'framer-motion'
import { Code2, ExternalLink, Github } from 'lucide-react'
import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.12 }}
      className="card group flex flex-col overflow-hidden"
    >
      <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)]">
        <span className="font-display text-6xl font-bold text-white/25">0{index + 1}</span>
        <span className="absolute left-5 top-5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {project.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 flex items-center gap-2 font-display text-xl font-bold tracking-tight">
          <Code2 className="text-[var(--accent)]" size={18} aria-hidden="true" />
          {project.title}
        </h3>
        <p className="mb-5 text-sm leading-relaxed text-[var(--muted)]">{project.description}</p>

        {project.tech.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-2">
            {project.tech.map((tag) => (
              <span key={tag} className="badge">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-[var(--border)] pt-4">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] transition hover:underline"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          ) : (
            <span className="text-sm font-medium text-[var(--muted)]">Live Demo: Coming Soon</span>
          )}

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--text)]"
            >
              <Github size={16} /> Source Code
            </a>
          ) : (
            <span className="text-sm font-medium text-[var(--muted)]">Repository: Coming Soon</span>
          )}
        </div>
      </div>
    </motion.article>
  )
}
