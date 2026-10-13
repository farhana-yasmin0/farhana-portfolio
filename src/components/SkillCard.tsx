import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

type SkillCardProps = {
  icon: LucideIcon
  name: string
  level?: string
  delay?: number
}

export default function SkillCard({ icon: Icon, name, level, delay = 0 }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -4 }}
      className="card flex items-center gap-4 p-5 transition-shadow hover:shadow-xl"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--bg-soft)] text-[var(--accent)]">
        <Icon size={24} aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <p className="font-semibold leading-tight">{name}</p>
        {level && <p className="mt-1 text-sm text-[var(--muted)]">{level}</p>}
      </div>
    </motion.div>
  )
}