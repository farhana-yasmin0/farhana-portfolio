import { useState } from 'react'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { profile } from '../data/profile'

export default function Footer() {
  const [year] = useState(() => new Date().getFullYear())

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-[var(--border)] py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6 md:flex-row md:items-start md:justify-between md:text-left">
        <div>
          <p className="font-display text-lg font-bold tracking-wide gradient-text">{profile.name.toUpperCase()}</p>
          <p className="mt-1 text-sm font-medium text-[var(--accent)]">Creative Developer</p>
          <p className="mt-2 max-w-sm text-sm text-[var(--muted)]">{profile.footerTagline}</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-[var(--border)] bg-[var(--glass)] p-3 text-[var(--muted)] transition hover:text-[var(--text)]"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-[var(--border)] bg-[var(--glass)] p-3 text-[var(--muted)] transition hover:text-[var(--text)]"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profile.emailHref}
            aria-label="Email"
            className="rounded-full border border-[var(--border)] bg-[var(--glass)] p-3 text-[var(--muted)] transition hover:text-[var(--text)]"
          >
            <Mail size={18} />
          </a>
        </div>

        <div className="flex flex-col items-center gap-3 md:items-end">
          <button
            type="button"
            onClick={backToTop}
            className="btn-secondary px-4 py-2 text-sm"
            aria-label="Back to top"
          >
            <ArrowUp size={16} /> Top
          </button>
          <p className="text-xs text-[var(--muted)]">© {year} Farhana Yasmin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}