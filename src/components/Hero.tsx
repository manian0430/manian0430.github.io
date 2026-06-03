import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Github, Mail, ChevronDown } from 'lucide-react'
import { profile, stats } from '../data/content'
import { Counter } from './ui/Counter'
import profileImg from '../assets/profile.png'

const ease = [0.22, 1, 0.36, 1] as const
const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }

function RoleRotator() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % profile.roles.length), 2600)
    return () => clearInterval(id)
  }, [])
  return (
    <span className="relative inline-block align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.4, ease }}
          className="inline-block bg-gradient-to-r from-accent to-cyan bg-clip-text text-transparent"
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* Backdrop */}
      <div className="bg-grid pointer-events-none absolute inset-0 -z-20 opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(50% 50% at 75% 25%, rgba(34,197,94,0.16), transparent 70%), radial-gradient(45% 45% at 15% 80%, rgba(56,189,248,0.14), transparent 70%)',
        }}
        aria-hidden
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="mono mb-5 flex items-center gap-2 text-sm text-accent">
            <span className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(34,197,94,0.7)]" />
            $ whoami
          </motion.p>

          <motion.h1 variants={item} className="text-5xl font-extrabold tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {profile.name}
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl"
          >
            <RoleRotator />
            <span className="ml-1 inline-block h-7 w-[3px] translate-y-1 animate-pulse bg-accent align-middle sm:h-8" />
          </motion.div>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {profile.summary}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-accent">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-outline">
              <Mail className="h-4 w-4" /> Get in touch
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={item} className="mt-12 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-ink">
                  <span className="text-accent">
                    <Counter value={s.value} suffix={s.suffix} />
                  </span>
                </div>
                <div className="mono mt-1 text-xs text-ink-faint">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          className="relative hidden justify-center md:flex"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
        >
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-accent/20 blur-[80px]" aria-hidden />
            <div className="absolute -inset-x-6 bottom-6 -z-10 h-40 rounded-full bg-cyan/20 blur-[70px]" aria-hidden />
            <motion.img
              src={profileImg}
              alt={`Portrait of ${profile.name}`}
              className="relative max-h-[26rem] w-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="glass absolute right-0 top-6 rounded-xl px-3 py-2">
              <p className="mono flex items-center gap-2 text-xs text-ink">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Available for work
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-ink-faint"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.a>
    </section>
  )
}
