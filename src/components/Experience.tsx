import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { SectionHeading } from './ui/SectionHeading'
import { experience, type Experience as Exp } from '../data/content'

function Row({ exp, defaultOpen }: { exp: Exp; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(Boolean(defaultOpen))
  const current = exp.date.includes('Present')

  return (
    <div className="relative pb-8 pl-10 last:pb-0">
      {/* node */}
      <span className="absolute left-0 top-1.5 flex h-3 w-3 -translate-x-1/2 items-center justify-center">
        {current ? (
          <>
            <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
          </>
        ) : (
          <span className="h-3 w-3 rounded-full border-2 border-line bg-bg" />
        )}
      </span>

      <button
        onClick={() => setOpen((v) => !v)}
        className="group flex w-full items-start justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <div>
          <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="mono text-xs text-ink-faint">{exp.date}</span>
            {exp.freelance && (
              <span className="mono rounded-full border border-line px-2 py-0.5 text-[10px] text-cyan">freelance</span>
            )}
            {current && (
              <span className="mono rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[10px] text-accent">
                current
              </span>
            )}
          </div>
          <h3 className="text-lg font-bold text-ink transition-colors group-hover:text-accent">{exp.role}</h3>
          <p className="font-semibold text-accent">{exp.company}</p>
        </div>
        <ChevronDown
          className={`mt-1 h-5 w-5 flex-shrink-0 text-ink-faint transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <ul className="mt-3 space-y-2">
              {exp.bullets.map((b) => (
                <li key={b} className="flex gap-2.5 leading-relaxed text-ink-soft">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/70" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.tags.map((t) => (
                <span key={t} className="mono rounded-md bg-surface-2 px-2 py-0.5 text-xs text-ink-soft">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading index="04" title="Experience" subtitle="6+ years across fintech, real estate, AI and enterprise." />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* connecting line */}
          <div className="absolute bottom-2 left-0 top-2 w-px bg-line" />
          {experience.map((exp, i) => (
            <Row key={exp.company + exp.date} exp={exp} defaultOpen={i === 0} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
