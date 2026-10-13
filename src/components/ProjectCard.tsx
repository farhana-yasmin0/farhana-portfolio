import { motion } from 'framer-motion'
import { Code2, ExternalLink, Github, Layers } from 'lucide-react'
import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
  index: number
}

const gradients = [
  'from-[#d4af37] via-[#8a6f1e] to-[#151518]',
  'from-[#f2d675] via-[#b8962e] to-[#151518]',
  'from-[#1f1f23] via-[#d4af37] to-[#0b0b0d]',
]

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const gradient = gradients[index % gradients.length]

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.12 }}
      className="card group flex flex-col overflow-hidden"
    >
      <div className={`relative flex h-48 items-end overflow-hidden bg-gradient-to-br ${gradient} p-6`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_45%)]" />
        <div className="relative flex items-center gap-3 text-white/90">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black/25 backdrop-blur-sm">
            <Layers size={22} aria-hidden="true" />
          </div>
          <span className="font-display text-lg font-bold tracking-wide">{project.title}</span>
        </div>
        <div className="absolute right-5 top-5">
          <span
            className={`badge ${
              project.status === 'Completed'
                ? 'border-emerald-400/40 text-emerald-300'
                : project.status === 'In Development'
                  ? 'status-in-progress'
                  : ''
            }`}
          >
            {project.status}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 flex items-center gap-2 font-display text-xl font-bold">
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