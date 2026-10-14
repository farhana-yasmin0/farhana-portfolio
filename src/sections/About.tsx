import { motion } from 'framer-motion'
import { Globe, Lightbulb, Sparkles } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'

const highlightIcons = [Sparkles, Globe, Lightbulb]

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About Me"
          title="About Me"
          subtitle="A little about who I am and what I create."
        />

        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {profile.about.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                {paragraph}
              </p>
            ))}

            <div className="card p-6">
              <span className="eyebrow-tag">Currently Exploring</span>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {profile.currentlyExploring.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--text)]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-1">
            {profile.highlights.map((highlight, index) => {
              const Icon = highlightIcons[index % highlightIcons.length]
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="card p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-bold tracking-tight">{highlight.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{highlight.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
