const techs = [
  'Python',
  'TypeScript',
  'React',
  'Next.js',
  'React Native',
  'Node.js',
  'FastAPI',
  'Laravel',
  'PostgreSQL',
  'Supabase',
  'MongoDB',
  'Docker',
  'AWS',
  'Azure',
  'GCP',
  'OpenAI GPT',
  'Claude',
  'Retell AI',
  'n8n',
  'Pinecone',
  'MCP',
]

export function Marquee() {
  return (
    <div className="marquee-mask border-y border-line/60 bg-surface/40 py-4">
      <div className="marquee-track gap-8">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center gap-8 pr-8" aria-hidden={dup === 1}>
            {techs.map((t) => (
              <span key={t} className="mono flex items-center gap-8 text-sm text-ink-soft">
                {t}
                <span className="text-accent">/</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
