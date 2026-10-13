import { GraduationCap, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { certifications, education } from '../data/education'

function EmptyState({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="card flex min-h-[16rem] flex-col items-center justify-center p-8 text-center"
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--bg-soft)] text-[var(--accent)]">
        {icon}
      </div>
      <h4 className="font-display text-lg font-bold">{title}</h4>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-[var(--muted)]">{text}</p>
    </motion.div>
  )
}

export default function Education() {
  const hasEducation = education.length > 0
  const hasCertifications = certifications.length > 0

  return (
    <section id="education" className="bg-[var(--bg-soft)]/45 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Education & Certifications"
          title="Education & Certifications"
          subtitle="Learning, credentials, and professional growth — updated as verified."
        />

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-bold">
              <GraduationCap className="text-[var(--accent)]" size={20} /> Education
            </h3>
            {hasEducation ? (
              <div className="space-y-4">
                {education.map((entry) => (
                  <motion.article key={entry.degree} className="card p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                      {entry.period}
                    </p>
                    <h4 className="mt-1 font-display text-lg font-bold">{entry.degree}</h4>
                    <p className="text-sm text-[var(--muted)]">{entry.institution}</p>
                    {entry.detail && <p className="mt-2 text-sm text-[var(--muted)]">{entry.detail}</p>}
                  </motion.article>
                ))}
              </div>
            ) : (
              <EmptyState
                icon={<GraduationCap size={26} />}
                title="Education details coming soon"
                text="Education and certification details will be updated soon, once verified information is available."
              />
            )}
          </div>

          <div>
            <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-bold">
              <Award className="text-[var(--accent)]" size={20} /> Certifications
            </h3>
            {hasCertifications ? (
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <motion.article key={cert.name} className="card flex items-start justify-between gap-4 p-5">
                    <div>
                      <h4 className="font-display text-base font-bold">{cert.name}</h4>
                      <p className="text-sm text-[var(--muted)]">{cert.issuer}</p>
                    </div>
                    <span className="badge shrink-0">{cert.year}</span>
                  </motion.article>
                ))}
              </div>
            ) : (
              <EmptyState
                icon={<Award size={26} />}
                title="Certifications coming soon"
                text="Certificates will be listed here after they are verified. No credentials are invented."
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}