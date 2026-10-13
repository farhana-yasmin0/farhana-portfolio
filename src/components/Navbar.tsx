import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[--bg]/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('#home') }} className="font-display font-bold text-xl gradient-text">FY.</a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => { e.preventDefault(); scrollTo(l.href) }} className="text-sm text-[--muted] hover:text-[--text] transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <button onClick={toggle} aria-label="Toggle theme" className="px-3 py-2 rounded-full hover:bg-[--bg-soft] transition-colors text-xs font-semibold">
            {theme === 'dark' ? '🌙 Dark' : theme === 'light' ? '☀️ Light' : '⬛ Brutal'}
          </button>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact') }} className="hidden md:inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[--accent] to-[--accent-2] text-white text-sm font-semibold hover:opacity-90 transition-opacity">Hire Me</a>
          <button className="md:hidden p-2" onClick={() => setOpen(o => !o)} aria-label="Menu">
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-[--bg]/95 backdrop-blur-lg"
          >
            <ul className="flex flex-col px-4 pb-4 gap-1">
              {links.map(l => (
                <li key={l.href}>
                  <a href={l.href} onClick={(e) => { e.preventDefault(); scrollTo(l.href) }} className="block py-2 text-[--muted] hover:text-[--text]">{l.label}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}