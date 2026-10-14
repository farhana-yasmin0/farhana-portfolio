import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPhraseIndex((current) => (current + 1) % profile.heroPhrases.length)
    }, 2600)
    return () => window.clearInterval(timer)
  }, [])

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const socialClass =
    'flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--muted)] shadow-[var(--shadow-sm)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]'

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[var(--accent)]/20 blur-3xl" />
        <div className="absolute right-[-8rem] top-1/3 h-[26rem] w-[26rem] rounded-full bg-[var(--accent-2)]/18 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[var(--accent-3)]/12 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-14 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow-tag">{profile.intro}</span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {profile.heroTitle}
          </h1>
          <p className="mt-3 text-lg font-medium text-[var(--muted)] sm:text-xl">{profile.heroSubtitle}</p>

          <div className="mt-5 flex h-9 items-center text-xl font-semibold text-[var(--accent)] sm:text-2xl">
            <AnimatePresence mode="wait">
              <motion.span
                key={profile.heroPhrases[phraseIndex]}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35 }}
                className="font-display"
              >
                {profile.heroPhrases[phraseIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            {profile.heroBio}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button type="button" onClick={() => scrollTo('#projects')} className="btn-primary">
              View My Projects <ArrowRight size={18} />
            </button>
            <button type="button" onClick={() => scrollTo('#contact')} className="btn-secondary">
              Contact Me
            </button>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className={socialClass}>
              <Github size={19} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className={socialClass}
            >
              <Linkedin size={19} />
            </a>
            <a href={profile.emailHref} aria-label="Send an email" className={socialClass}>
              <Mail size={19} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rounded-full bg-gradient-to-tr from-[var(--accent)] to-[var(--accent-2)] p-1.5 shadow-[var(--shadow-md)]"
            >
              <div className="overflow-hidden rounded-full border-4 border-[var(--card)]">
                <img
                  src={profile.avatarSrc}
                  alt={profile.avatarAlt}
                  width={320}
                  height={320}
                  className="h-64 w-64 object-cover sm:h-80 sm:w-80"
                />
              </div>
            </motion.div>

            <motion.span
              animate={{ y: [0, -12, 0], x: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-2 top-10 h-4 w-4 rounded-full bg-[var(--accent)] shadow-[var(--shadow-sm)]"
            />
            <motion.span
              animate={{ y: [0, 10, 0], x: [0, -6, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-12 right-0 h-3 w-3 rounded-full bg-[var(--accent-2)]"
            />
          </div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollTo('#about')}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-[var(--muted)] md:flex"
        aria-label="Scroll to About section"
      >
        Scroll
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.span>
      </motion.button>
    </section>
  )
}
