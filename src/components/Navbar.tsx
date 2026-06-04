import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Github, Download } from 'lucide-react'
import { navLinks, profile } from '../data/content'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => Boolean(el))
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive('#' + e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'glass' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="mono text-[15px] font-bold tracking-tight text-ink">
          <span className="text-accent">~/</span>ian
          <span className="text-accent">.dev</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className={`mono text-[13px] transition-colors ${
                active === l.href ? 'text-accent' : 'text-ink-soft hover:text-ink'
              }`}
            >
              <span className="text-ink-faint">0{i + 1}.</span> {l.label}
            </a>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-soft transition-colors hover:text-accent"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={`${import.meta.env.BASE_URL}IanManaguelodCV.pdf`}
            download
            className="mono inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-[12px] text-ink-soft transition-colors hover:border-accent hover:text-accent"
          >
            <Download className="h-3.5 w-3.5" /> CV
          </a>
        </div>

        <button className="text-ink md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((v) => !v)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line bg-surface/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col px-6 py-1">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="mono border-b border-line/60 py-3.5 text-[14px] text-ink-soft last:border-0 hover:text-accent"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={`${import.meta.env.BASE_URL}IanManaguelodCV.pdf`}
                download
                onClick={() => setOpen(false)}
                className="mono inline-flex items-center gap-2 py-3.5 text-[14px] text-accent"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
