import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-xs font-semibold text-[var(--text)] shadow-[var(--shadow-sm)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      {theme === 'dark' ? <Moon size={14} /> : <Sun size={14} />}
      <span className="hidden sm:inline">{theme === 'dark' ? 'Dark' : 'Light'}</span>
    </button>
  )
}
