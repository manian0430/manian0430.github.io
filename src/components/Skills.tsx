import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { SectionHeading } from './ui/SectionHeading'
import { Icon } from './ui/icons'
import { OrbitingSkills } from './OrbitingSkills'
import { skillGroups } from '../data/content'

const CORE = 6 // groups shown before "Show all"

function Group({ g }: { g: (typeof skillGroups)[number] }) {
  return (
    <div>
      <h3 className="mono mb-2 flex items-center gap-2 text-sm text-accent">
        <Icon name={g.icon} className="h-4 w-4" />
        {g.title}
      </h3>
      <div className="flex flex-wrap gap-1.5">
        {g.items.map((item) => (
          <span
            key={item}
            className="rounded-md border border-line bg-surface px-2 py-0.5 text-xs text-ink-soft transition-colors hover:border-accent/40 hover:text-ink"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  const [expanded, setExpanded] = useState(false)
  const core = skillGroups.slice(0, CORE)
  const rest = skillGroups.slice(CORE)

  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="02" title="Skills" subtitle="The stack I build, ship and scale with." />

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Interactive orbit, sticky on desktop */}
          <div className="lg:sticky lg:top-24">
            <OrbitingSkills />
          </div>

          {/* Skill groups, 2 columns, collapsible */}
          <div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {core.map((g) => (
                <Group key={g.title} g={g} />
              ))}
            </div>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 pt-6 sm:grid-cols-2">
                    {rest.map((g) => (
                      <Group key={g.title} g={g} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setExpanded((v) => !v)}
              className="mono mt-7 inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm text-ink-soft transition-colors hover:border-accent hover:text-accent"
            >
              {expanded ? 'Show less' : `Show all skills (+${rest.length})`}
              <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
