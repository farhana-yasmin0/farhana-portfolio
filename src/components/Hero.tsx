import { motion } from 'framer-motion'
import { FiDownload, FiArrowRight } from 'react-icons/fi'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[--accent] rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[--accent-2] rounded-full blur-3xl opacity-20 animate-pulse" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center w-full">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-[--accent] font-semibold mb-3">👋 Hello, I'm</p>
          <h1 className="text-4xl sm:text-6xl font-display font-bold leading-tight">
            Farhana <span className="gradient-text">Yasmin</span>
          </h1>
          <div className="mt-4 text-xl sm:text-2xl text-[--muted] font-medium h-8">
            <TypeAnimation
              sequence={['Educator & Mentor', 2000, 'Digital Marketing Enthusiast', 2000, 'Communication & Team Player', 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="mt-6 text-[--muted] max-w-xl leading-relaxed">
            I'm a passionate educator and digital marketing professional dedicated to empowering learners
            and helping businesses grow through clear communication and organized execution.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }} className="px-6 py-3 rounded-full bg-gradient-to-r from-[--accent] to-[--accent-2] text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
              View Projects <FiArrowRight />
            </a>
            <a href="/resume.pdf" className="px-6 py-3 rounded-full border border-white/10 hover:bg-[--bg-soft] font-semibold flex items-center gap-2 transition-colors">
              <FiDownload /> Resume
            </a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[--accent] to-[--accent-2] rounded-full blur-2xl opacity-40" />
            <img src="/avatar.jpg" alt="Farhana Yasmin" className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-white/10 shadow-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}