import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail, Github, Phone, Copy, CheckCircle2, ArrowUpRight } from 'lucide-react'
import { Reveal } from './ui/Reveal'
import { ContactTerminal } from './ContactTerminal'
import { profile } from '../data/content'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2500)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden pb-40 pt-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
          <p className="mono mb-3 text-sm text-accent">// 05 — contact</p>
          <h2 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Let's build something <span className="text-glow text-accent">great</span>.
          </h2>
          <p className="mt-3 max-w-xl text-lg text-ink-soft">
            I'm open to full-stack, AI automation and freelance work. Have a project or role in mind? Let's talk.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-start gap-3">
            <a href={`mailto:${profile.email}`} data-cursor-invert className="btn-accent">
              <Mail className="h-4 w-4" /> {profile.email}
            </a>
            <button onClick={copyEmail} className="btn-outline" aria-label="Copy email">
              {copied ? <CheckCircle2 className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-start gap-6 text-ink-soft">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 transition-colors hover:text-accent">
              <Github className="h-5 w-5" /> {profile.githubUser}
              <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 transition-colors hover:text-accent">
              <Phone className="h-5 w-5" /> {profile.phone}
            </a>
          </div>
          </Reveal>

          <Reveal>
            <ContactTerminal />
          </Reveal>
        </div>
      </div>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            className="fixed right-5 top-5 z-[100] flex items-center gap-2 rounded-xl bg-accent px-5 py-3 font-medium text-[#06210f] shadow-xl"
          >
            <CheckCircle2 className="h-5 w-5" /> Email copied to clipboard
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
