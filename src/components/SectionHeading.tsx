import { motion } from 'framer-motion'

type Props = {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
}

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">{title}</h2>
      {subtitle && (
        <p className={`mt-4 text-[var(--muted)] ${align === 'center' ? 'mx-auto max-w-2xl' : ''}`}>{subtitle}</p>
      )}
      <div
        className={`mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </motion.div>
  )
}