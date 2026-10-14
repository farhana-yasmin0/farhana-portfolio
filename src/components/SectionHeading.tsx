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
      transition={{ duration: 0.5 }}
      className={`mb-14 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <span className="eyebrow-tag">{eyebrow}</span>
      <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-[var(--muted)] ${align === 'center' ? 'mx-auto max-w-2xl' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
