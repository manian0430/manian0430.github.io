import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { profile, stats } from '../data/content'
import { Counter } from './ui/Counter'
import { Marquee } from './Marquee'
import profileImg from '../assets/profile.webp'

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
          className="inline-block bg-gradient-to-r from-accent-soft to-cyan bg-clip-text text-transparent"
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

function StatusPill() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      <span className="mono text-xs font-medium text-accent">Available for work</span>
    </span>
  )
}

export function Hero() {
  // Interactive 3D tilt driven by cursor position over the hero
  const reduced = useRef(false)
  useEffect(() => {
    reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 140, damping: 18, mass: 0.5 })
  const sy = useSpring(my, { stiffness: 140, damping: 18, mass: 0.5 })
  const rotateY = useTransform(sx, [-0.5, 0.5], [-18, 18])
  const rotateX = useTransform(sy, [-0.5, 0.5], [14, -14])
  const imgX = useTransform(sx, [-0.5, 0.5], [-16, 16])
  const imgY = useTransform(sy, [-0.5, 0.5], [-10, 10])
  const glowX = useTransform(sx, [-0.5, 0.5], [34, -34])

  const onMove = (e: React.MouseEvent) => {
    if (reduced.current) return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const reset = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <section
      id="home"
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="relative flex min-h-screen flex-col overflow-hidden pt-24"
    >
      {/* Backdrop (global particle network shows through; keep color glows here) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(50% 50% at 75% 25%, rgba(34,197,94,0.16), transparent 70%), radial-gradient(45% 45% at 15% 80%, rgba(56,189,248,0.14), transparent 70%)',
        }}
        aria-hidden
      />

      <div className="flex flex-1 items-center">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.15fr_0.85fr]">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item} className="mb-5 flex flex-wrap items-center gap-3">
              <StatusPill />
              <span className="mono text-sm text-ink-faint">$ whoami</span>
            </motion.div>

            <motion.h1 variants={item} className="text-5xl font-extrabold tracking-tight text-ink sm:text-6xl lg:text-7xl">
              {profile.name}
            </motion.h1>

            <motion.div variants={item} className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              <RoleRotator />
              <span className="ml-1 inline-block h-7 w-[3px] translate-y-1 animate-pulse bg-accent align-middle sm:h-8" />
            </motion.div>

            <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              {profile.intro}
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" data-cursor-invert className="btn-accent">
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a href={`${import.meta.env.BASE_URL}IanManaguelodCV.pdf`} download className="btn-outline">
                <Download className="h-4 w-4" /> Download CV
              </a>
              <a href="#contact" className="btn-outline">
                <Mail className="h-4 w-4" /> Get in touch
              </a>
            </motion.div>

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

          {/* Portrait — interactive 3D tilt + parallax depth */}
          <motion.div
            className="relative hidden justify-center md:flex"
            style={{ perspective: 1200 }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
          >
            <motion.div
              className="relative"
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.div
                style={{ x: glowX, z: -70 }}
                className="absolute inset-0 rounded-full bg-accent/25 blur-[80px]"
                aria-hidden
              />
              <motion.div
                style={{ x: glowX, z: -45 }}
                className="absolute -inset-x-6 bottom-6 h-40 rounded-full bg-cyan/20 blur-[70px]"
                aria-hidden
              />
              <motion.img
                src={profileImg}
                alt={`Portrait of ${profile.name}`}
                draggable={false}
                style={{ x: imgX, y: imgY, z: 60 }}
                className="relative max-h-[26rem] w-auto drop-shadow-[0_40px_70px_rgba(0,0,0,0.65)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Tech marquee pinned to the bottom of the first viewport */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative z-10 mt-8"
      >
        <Marquee />
      </motion.div>
    </section>
  )
}
