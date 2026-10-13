import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { education, certs } from '../data/education'
import { FiAward, FiBookOpen } from 'react-icons/fi'

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[--bg-soft]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle eyebrow="Background" title="Education & Certifications" subtitle="My academic journey and continuous learning." />
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-bold mb-5"><FiBookOpen className="text-[--accent]" /> Education</h3>
            <div className="space-y-4">
              {education.map((e, i) => (
                <motion.div
                  key={e.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="card rounded-2xl p-5"
                >
                  <p className="text-xs text-[--accent] font-semibold mb-1">{e.period}</p>
                  <h4 className="font-bold">{e.degree}</h4>
                  <p className="text-sm text-[--muted]">{e.school}</p>
                  <p className="text-sm text-[--muted] mt-2">{e.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-lg font-bold mb-5"><FiAward className="text-[--accent]" /> Certifications</h3>
            <div className="space-y-4">
              {certs.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="card rounded-2xl p-5 flex items-start justify-between gap-4"
                >
                  <div>
                    <h4 className="font-bold">{c.name}</h4>
                    <p className="text-sm text-[--muted]">{c.issuer}</p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-[--bg-soft] text-[--muted] shrink-0">{c.year}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}