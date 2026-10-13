import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import SectionTitle from './SectionTitle'
import { projects } from '../data/projects'

export default function Projects() {
  const [all] = useState(projects)

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle eyebrow="Portfolio" title="Featured Projects" subtitle="A selection of real projects I've designed and built." />
        <div className="grid md:grid-cols-2 gap-8">
          {all.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.15 }}
              className={`card rounded-3xl overflow-hidden group ${p.featured ? 'md:col-span-2' : ''}`}
            >
              <div className="relative overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {p.featured && (
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-[--accent] to-[--accent-2] text-white">Featured</span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-display mb-2">{p.title}</h3>
                <p className="text-[--muted] text-sm leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map(t => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-[--bg-soft] text-[--muted]">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a href={p.live} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-semibold text-[--accent] hover:underline">
                    <FiExternalLink /> Live Demo
                  </a>
                  <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-semibold text-[--muted] hover:text-[--text]">
                    <FiGithub /> Source Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}