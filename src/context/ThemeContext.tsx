import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light' | 'brutalist'
interface Ctx { theme: Theme; toggle: () => void }
const ThemeCtx = createContext<Ctx>({ theme: 'dark', toggle: () => {} })
const cycle: Theme[] = ['dark', 'light', 'brutalist']

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const fromUrl = new URLSearchParams(window.location.search).get('theme') as Theme
      if (cycle.includes(fromUrl)) return fromUrl
      const stored = localStorage.getItem('theme') as Theme
      return cycle.includes(stored) ? stored : 'dark'
    }
    return 'dark'
  })
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark', 'brutalist')
    document.documentElement.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])
  return (
    <ThemeCtx.Provider value={{ theme, toggle: () => setTheme(t => cycle[(cycle.indexOf(t) + 1) % cycle.length]) }}>
      {children}
    </ThemeCtx.Provider>
  )
}
export const useTheme = () => useContext(ThemeCtx)