import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight,
  BatteryCharging,
  HeartPulse,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react'
import WatchScene from './components/WatchScene'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { label: 'Battery', value: '72h', icon: BatteryCharging },
  { label: 'Health', value: 'Live +', icon: HeartPulse },
  { label: 'Display', value: '2.1K', icon: Sparkles },
  { label: 'Durability', value: '100m', icon: ShieldCheck },
] as const

const features = [
  {
    title: 'Precision health insights',
    copy: 'Track heart rate, sleep, recovery and workouts with clinical-grade detail that keeps up with your pace.',
    icon: HeartPulse,
  },
  {
    title: 'Ultra-bright always-on display',
    copy: 'A sapphire-inspired OLED panel brings richer contrast and instant readability in every environment.',
    icon: Sparkles,
  },
  {
    title: 'Power that keeps pace',
    copy: 'Extended battery life and quick wireless charging give you more time in motion and less time at the dock.',
    icon: BatteryCharging,
  },
  {
    title: 'Built for every environment',
    copy: 'A titanium finish, water resistance and premium ceramic glass ensure protection without added bulk.',
    icon: ShieldCheck,
  },
] as const

const finishes = [
  { name: 'Silver', hex: '#dfeaf8' },
  { name: 'Obsidian', hex: '#a7afbc' },
  { name: 'Aqua', hex: '#7dd3fc' },
  { name: 'Rose', hex: '#f7c8d3' },
] as const

const specs = [
  { name: 'Display', value: '2.1K LTPO OLED' },
  { name: 'Processor', value: 'S9 SiP' },
  { name: 'Battery', value: 'Up to 72 hours' },
  { name: 'Connectivity', value: 'Wi‑Fi 6E • Bluetooth 5.4' },
  { name: 'Water resistance', value: '100m with WR' },
  { name: 'Sensors', value: 'ECG • GPS • SpO₂' },
] as const

export default function App() {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const [activeFinish, setActiveFinish] = useState<(typeof finishes)[number]>(finishes[0])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-copy > *',
        { y: 36, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.12, delay: 0.08 },
      )

      gsap.fromTo(
        '.stat-pill',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.08, delay: 0.2 },
      )

      gsap.utils.toArray<HTMLElement>('.reveal-panel').forEach((panel) => {
        gsap.fromTo(
          panel,
          { y: 44, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: panel,
              start: 'top 84%',
              once: true,
            },
          },
        )
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={rootRef} className="app-shell">
      <header className="site-header">
        <div className="brand-wrap">
          <div className="brand-mark">W</div>
          <div className="brand-copy">
            <span className="brand-name">Watch Pro X</span>
            <span className="brand-sub">By Nova Labs</span>
          </div>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#overview">Overview</a>
          <a href="#design">Design</a>
          <a href="#health">Health</a>
          <a href="#specs">Specs</a>
        </nav>

        <button type="button" className="header-cta">
          Buy now
        </button>
      </header>

      <main>
        <section className="hero-section" id="overview">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow-tag">Ultra intelligence. Zero compromise.</p>
              <h1>Meet the future of wearable design.</h1>
              <p className="lead-copy">
                Crafted for movement, built for recovery and designed to feel effortless from morning run to late-night focus.
              </p>

              <div className="cta-row">
                <button type="button" className="primary-button">
                  Shop now
                  <ArrowRight size={16} />
                </button>
                <button type="button" className="secondary-button">
                  <Play size={16} />
                  Watch demo
                </button>
              </div>

              <div className="stat-grid">
                {stats.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="stat-pill">
                    <span className="stat-icon">
                      <Icon size={15} />
                    </span>
                    <div>
                      <strong>{value}</strong>
                      <span>{label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="watch-stage reveal-panel">
              <div className="glow-orb orb-one" />
              <div className="glow-orb orb-two" />
              <WatchScene accent={activeFinish.hex} />
            </div>
          </div>
        </section>

        <section className="feature-band reveal-panel">
          {features.map(({ title, copy, icon: Icon }) => (
            <article key={title} className="feature-card">
              <span className="feature-icon">
                <Icon size={18} />
              </span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </section>

        <section className="story-section reveal-panel" id="design">
          <div className="section-copy">
            <p className="eyebrow-tag">Engineering that disappears</p>
            <h2>Built to feel light. Designed to stay visible.</h2>
            <p>
              The Watch Pro X balances premium craftsmanship with practical intelligence, combining titanium form, an edge-to-edge OLED display and a seamless strap silhouette for all-day comfort.
            </p>
          </div>

          <div className="story-grid">
            <div className="detail-panel wide-panel">
              <span className="mini-label">Case</span>
              <h3>Liquid-metal finish</h3>
              <p>Machined from aerospace-grade alloy with satin edges and featherlight polish.</p>
            </div>
            <div className="detail-panel">
              <span className="mini-label">Display</span>
              <h3>Always-on clarity</h3>
              <p>Up to 2,000 nits with adaptive brightness for easy reading in motion.</p>
            </div>
            <div className="detail-panel">
              <span className="mini-label">Sensors</span>
              <h3>Daily biometrics</h3>
              <p>Continuous health analysis with zero interruption to your routine.</p>
            </div>
          </div>
        </section>

        <section className="exploded-section reveal-panel" id="health">
          <div className="section-copy left-copy">
            <p className="eyebrow-tag">Exploded view</p>
            <h2>Every layer engineered for precision.</h2>
            <p>
              From the sapphire glass to the health sensor stack, each component is carefully tuned for durability, accuracy and style.
            </p>
          </div>

          <div className="exploded-stage">
            <WatchScene exploded accent={activeFinish.hex} />
          </div>
        </section>

        <section className="specs-section reveal-panel" id="specs">
          <div className="section-headline">
            <p className="eyebrow-tag">Specifications</p>
            <h2>Performance that meets the pace of your day.</h2>
          </div>

          <div className="spec-grid">
            {specs.map(({ name, value }) => (
              <div key={name} className="spec-card">
                <span>{name}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="finish-section reveal-panel">
          <div className="section-copy">
            <p className="eyebrow-tag">Choose your finish</p>
            <h2>Minimal luxury, tailored to you.</h2>
          </div>

          <div className="finish-row">
            {finishes.map((finish) => (
              <button
                key={finish.name}
                type="button"
                className={`finish-swatch ${activeFinish.name === finish.name ? 'active' : ''}`}
                aria-label={`Select ${finish.name} finish`}
                onClick={() => setActiveFinish(finish)}
              >
                <span style={{ background: finish.hex }} />
                {finish.name}
              </button>
            ))}
          </div>
        </section>

        <section className="cta-panel reveal-panel">
          <div>
            <p className="eyebrow-tag">Ready to upgrade?</p>
            <h2>Own the future of wearable performance.</h2>
          </div>
          <button type="button" className="primary-button">
            Reserve yours
            <ArrowRight size={16} />
          </button>
        </section>
      </main>

      <footer className="site-footer">
        <div className="brand-wrap">
          <div className="brand-mark">W</div>
          <div className="brand-copy">
            <span className="brand-name">Watch Pro X</span>
            <span className="brand-sub">Precision is personal</span>
          </div>
        </div>

        <div className="footer-meta">
          <span>© 2026 Nova Labs</span>
          <span className="footer-divider" />
          <span>Privacy</span>
          <span>Support</span>
        </div>
      </footer>
    </div>
  )
}
