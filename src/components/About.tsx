import { motion } from 'framer-motion'
import { FiCode, FiLayout, FiServer, FiZap } from 'react-icons/fi'

const highlights = [
  { icon: FiCode, title: 'Clean Code', desc: 'Readable, maintainable and well-tested code.' },
  { icon: FiLayout, title: 'Pixel Perfect', desc: 'Designs translated into crisp UI with attention to detail.' },
  { icon: FiServer, title: 'Scalable Backends', desc: 'Robust APIs and databases for growing products.' },
  { icon: FiZap, title: 'Performance', desc: 'Fast load times and smooth interactions everywhere.' },
]

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="text-sm font-semibold tracking-widest uppercase text-[--accent] mb-3">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Empowering learners and growing businesses through clear communication.</h2>
            <p className="text-[--muted] leading-relaxed mb-4">
              I'm a passionate educator and digital marketing enthusiast with experience in teaching, classroom management,
              and customer-facing roles. I love helping people learn and helping businesses reach their audience.
            </p>
            <p className="text-[--muted] leading-relaxed mb-6">
              My strengths include organized execution, teamwork and time management. I hold a B.A. from
              National University and technical certifications in Building Maintenance.
            </p>
            <div className="flex gap-6 text-center">
              <div><p className="text-3xl font-bold gradient-text">8+</p><p className="text-xs text-[--muted]">Years Exp.</p></div>
              <div><p className="text-3xl font-bold gradient-text">4</p><p className="text-xs text-[--muted]">Key Projects</p></div>
              <div><p className="text-3xl font-bold gradient-text">100+</p><p className="text-xs text-[--muted]">Students</p></div>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card rounded-2xl p-5 hover:-translate-y-1 transition-transform"
              >
                <h.icon className="text-2xl text-[--accent] mb-3" />
                <h3 className="font-semibold mb-1">{h.title}</h3>
                <p className="text-sm text-[--muted]">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}