import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'
import { GraduationCap } from 'lucide-react'
import { education } from '../data/content'

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="01" title="About" />

        <div className="grid items-start gap-10 md:grid-cols-2">
          <Reveal direction="right">
            <div className="space-y-4 text-lg leading-relaxed text-ink-soft">
              <p>
                I turn ideas into production software — architecting REST APIs, wiring data layers and building polished
                interfaces across <span className="text-ink">Python</span>, <span className="text-ink">JavaScript</span>{' '}
                and <span className="text-ink">PHP</span> ecosystems, with a bias for clean architecture, CI/CD and code
                that scales.
              </p>
              <p>
                Lately I've gone deep on <span className="text-accent">AI automation</span> and conversational AI —
                wiring <span className="text-ink">Retell AI</span>, <span className="text-ink">OpenAI GPT</span> and{' '}
                <span className="text-ink">Claude</span> into voice agents, RAG systems and workflow automation with
                n8n, Zapier and Make.com — all shipped on AWS, Azure and GCP.
              </p>

              <div className="pt-4">
                <h3 className="mono mb-3 flex items-center gap-2 text-sm text-accent">
                  <GraduationCap className="h-4 w-4" /> education
                </h3>
                <div className="space-y-3">
                  {education.map((e) => (
                    <div key={e.school} className="flex items-baseline justify-between gap-4 border-b border-line/60 pb-3">
                      <div>
                        <p className="font-semibold text-ink">{e.school}</p>
                        <p className="text-sm text-ink-soft">{e.detail}</p>
                      </div>
                      <span className="mono whitespace-nowrap text-xs text-ink-faint">{e.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Terminal card */}
          <Reveal direction="left">
            <div className="card overflow-hidden">
              <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                <span className="mono ml-3 text-xs text-ink-faint">ian.profile.ts</span>
              </div>
              <pre className="mono overflow-x-auto p-5 text-[13px] leading-relaxed text-ink-soft">
                <code>
                  <span className="text-violet">const</span> <span className="text-cyan">ian</span> = {'{'}
                  {'\n'} role: <span className="text-accent">"Full Stack Developer"</span>,
                  {'\n'} focus: [<span className="text-accent">"AI automation"</span>,{' '}
                  <span className="text-accent">"web"</span>, <span className="text-accent">"mobile"</span>],
                  {'\n'} stack: [<span className="text-accent">"Python"</span>,{' '}
                  <span className="text-accent">"React"</span>, <span className="text-accent">"Node.js"</span>],
                  {'\n'} clouds: [<span className="text-accent">"AWS"</span>,{' '}
                  <span className="text-accent">"Azure"</span>, <span className="text-accent">"GCP"</span>],
                  {'\n'} ai: [<span className="text-accent">"GPT"</span>, <span className="text-accent">"Claude"</span>,{' '}
                  <span className="text-accent">"Retell"</span>, <span className="text-accent">"MCP"</span>],
                  {'\n'} available: <span className="text-cyan">true</span>,
                  {'\n'}
                  {'}'}
                </code>
              </pre>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
