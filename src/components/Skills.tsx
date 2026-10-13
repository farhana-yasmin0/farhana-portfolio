import { motion } from 'framer-motion'
import { useState } from 'react'
import SectionTitle from './SectionTitle'
import { skills } from '../data/skills'

export default function Skills() {
  const [cat, setCat] = useState<'all' | 'teaching' | 'marketing' | 'soft' | 'tools'>('all')
  const filtered = cat === 'all' ? skills : skills.filter(s => s.category === cat)

  return (
    <section id="skills" className="py-24 bg-[--bg-soft]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle eyebrow="My Skills" title="Tech Stack" subtitle="The tools and technologies I work with every day." />
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {(['all', 'teaching', 'marketing', 'soft', 'tools'] as const).map(c => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${cat === c ? 'bg-gradient-to-r from-[--accent] to-[--accent-2] text-white' : 'bg-[--bg-soft] text-[--muted] hover:text-[--text]'}`}
            >
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="card rounded-2xl p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{s.icon}</span>
                  <span className="font-semibold">{s.name}</span>
                </div>
                <span className="text-sm text-[--muted]">{s.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-[--bg-soft] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: s.level + '%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full rounded-full bg-gradient-to-r from-[--accent] to-[--accent-2]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}