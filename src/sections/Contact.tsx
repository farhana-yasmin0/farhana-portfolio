import { Mail, Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Let's Connect"
          title="Let's Connect"
          subtitle="Have a project idea or want to connect? I'd love to hear from you."
        />

        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-base leading-relaxed text-[var(--muted)]">
              I’m always open to discussing creative ideas, AI experiments, new projects, or opportunities to
              learn together. Feel free to reach out using the form or through any of the channels below.
            </p>

            <div className="space-y-4">
              <a
                href={profile.emailHref}
                className="card flex items-center gap-4 p-4 transition hover:-translate-y-0.5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg-soft)] text-[var(--accent)]">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Email</p>
                  <p className="font-medium">{profile.email}</p>
                </div>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="card flex items-center gap-4 p-4 transition hover:-translate-y-0.5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg-soft)] text-[var(--accent)]">
                  <Github size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">GitHub</p>
                  <p className="font-medium">{profile.githubLabel}</p>
                </div>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="card flex items-center gap-4 p-4 transition hover:-translate-y-0.5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg-soft)] text-[var(--accent)]">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">LinkedIn</p>
                  <p className="font-medium">{profile.linkedinLabel}</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}