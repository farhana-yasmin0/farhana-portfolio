import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import { social } from '../data/social'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display font-bold text-lg gradient-text">Farhana Yasmin</p>
          <p className="text-sm text-[--muted] mt-1">Empowering learners & supporting businesses.</p>
        </div>
        <div className="flex items-center gap-4">
          <a href={social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-full hover:bg-[--bg-soft] transition-colors"><FiGithub /></a>
          <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-[--bg-soft] transition-colors"><FiLinkedin /></a>
          <a href={social.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="p-2 rounded-full hover:bg-[--bg-soft] transition-colors"><FiTwitter /></a>
          <a href={social.email} aria-label="Email" className="p-2 rounded-full hover:bg-[--bg-soft] transition-colors"><FiMail /></a>
        </div>
        <p className="text-xs text-[--muted]">© {new Date().getFullYear()} Farhana Yasmin. All rights reserved.</p>
      </div>
    </footer>
  )
}