import { motion } from 'framer-motion'

export default function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <p className="text-sm font-semibold tracking-widest uppercase text-[--accent] mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-5xl font-bold font-display">{title}</h2>
      {subtitle && <p className="mt-4 text-[--muted] max-w-2xl mx-auto">{subtitle}</p>}
      <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[--accent] to-[--accent-2]" />
    </motion.div>
  )
}