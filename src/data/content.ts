// Portfolio content for Ian Managuelod — sourced from CV.

export const profile = {
  name: 'Ian Managuelod',
  role: 'Full Stack Developer',
  roles: ['Full Stack Developer', 'AI Automation Engineer', 'Cloud-Native Builder'],
  tagline: 'Building scalable web apps, mobile apps & AI agents.',
  intro:
    'I design and ship full-stack products and AI automation — scalable web apps, cross-platform mobile, and intelligent voice agents that actually make it to production.',
  summary:
    'Full Stack Developer with 6+ years building scalable web applications, mobile apps, and REST APIs with Python, JavaScript/TypeScript, Node.js, and PHP. Specialized in AI automation and conversational AI — integrating Retell AI, OpenAI GPT, and Claude into intelligent voice agents and AI-powered products.',
  location: 'Philippines',
  email: 'managuelodian@gmail.com',
  phone: '0915 779 6065',
  github: 'https://github.com/manian0430',
  githubUser: 'manian0430',
}

export const stats = [
  { value: 6, suffix: '+', label: 'Years Experience' },
  { value: 20, suffix: '+', label: 'Projects Delivered' },
  { value: 10, suffix: '+', label: 'Clients & Teams' },
  { value: 3, suffix: '', label: 'Cloud Platforms' },
]

export interface SkillGroup {
  title: string
  icon: IconName
  items: string[]
}

export type IconName =
  | 'code'
  | 'server'
  | 'layout'
  | 'database'
  | 'cloud'
  | 'brain'
  | 'workflow'
  | 'gitbranch'
  | 'wrench'
  | 'shield'
  | 'activity'
  | 'plug'
  | 'rocket'

export const skillGroups: SkillGroup[] = [
  { title: 'Languages', icon: 'code', items: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'C# .NET', 'HTML', 'CSS'] },
  { title: 'Backend', icon: 'server', items: ['FastAPI', 'Flask', 'Django', 'Node.js', 'Laravel', 'Odoo'] },
  { title: 'Frontend', icon: 'layout', items: ['React', 'React Native', 'Next.js', 'Bootstrap', 'jQuery'] },
  { title: 'AI & ML', icon: 'brain', items: ['OpenAI GPT', 'Claude', 'Claude Code', 'Deep Review (skill)', 'Retell AI', 'RAG systems', 'Pinecone', 'MCP'] },
  { title: 'Databases', icon: 'database', items: ['PostgreSQL', 'MongoDB', 'Supabase', 'Cosmos DB', 'Azure DB'] },
  { title: 'Cloud', icon: 'cloud', items: ['AWS (Lambda, IAM, Cognito)', 'Azure (DevOps, App Services)', 'GCP (Cloud Run, Build)'] },
  { title: 'Hosting & Deploy', icon: 'rocket', items: ['Vercel', 'Railway', 'Render', 'Replit', 'GitHub Pages'] },
  { title: 'Automation', icon: 'workflow', items: ['n8n', 'Zapier', 'Make.com'] },
  { title: 'DevOps & CI/CD', icon: 'gitbranch', items: ['Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD pipelines', 'Azure DevOps', 'AWS CodePipeline', 'CodeRabbit', 'Git'] },
  { title: 'Security & Auth', icon: 'shield', items: ['JWT', 'OAuth 2.0', 'RBAC', 'AWS IAM', 'Cognito'] },
  { title: 'Monitoring & Analytics', icon: 'activity', items: ['Sentry', 'PostHog', 'Google Analytics', 'Lighthouse', 'Prometheus', 'Grafana', 'CloudWatch', 'Power BI'] },
  { title: 'Integrations', icon: 'plug', items: ['Dynamics 365', 'Discourse', 'Dialpad', 'Remine', 'Crexi', 'Stripe'] },
  { title: 'Dev Tools', icon: 'wrench', items: ['Cursor', 'Windsurf', 'v0', 'Notion'] },
]

export interface Project {
  name: string
  tagline: string
  description: string
  tech: string[]
  link?: string
  image?: string
  metric?: string
  featured?: boolean
  year: string
}

export const projects: Project[] = [
  {
    name: 'Reeve',
    tagline: 'AI brand & ad content, from a URL',
    description:
      'Drop a URL and Reeve deep-dives your brand DNA, competitors and ad strategy — then generates custom social content and ads tailored to the brand. Built under MindFortress.',
    tech: ['Next.js', 'React', 'Python', 'OpenAI', 'Supabase'],
    link: 'https://meetreeve.com',
    image: '/shots/reeve.webp',
    metric: 'Brand DNA → ready-to-run ads',
    featured: true,
    year: '2025',
  },
  {
    name: 'Freya',
    tagline: 'The writing partner who never forgets',
    description:
      'An AI writing partner for storytellers — keeps a live Story Bible of characters, locations and lore, and flags continuity errors as you write. React/Next.js front end on a Python LLM backend.',
    tech: ['Next.js', 'React', 'Python', 'OpenAI', 'Claude'],
    link: 'https://meetfreya.com',
    image: '/shots/freya.webp',
    metric: 'Live Story Bible + continuity AI',
    featured: true,
    year: '2025',
  },
  {
    name: 'Callivate.ai',
    tagline: 'AI workforce for automotive dealerships',
    description:
      'AI-powered platform with 8 specialized voice agents handling sales, service, parts, finance and reception 24/7. Built automation across SMS, payments and CRM, with end-to-end encrypted Supabase storage, VIN lookup and real-time sync.',
    tech: ['Retell AI', 'n8n', 'Supabase', 'React', 'Python', 'Stripe'],
    link: 'https://callivate.ai',
    image: '/shots/callivate.webp',
    metric: '8 AI agents · 24/7',
    featured: true,
    year: '2025',
  },
  {
    name: 'SENW Realty — senw.io',
    tagline: 'Real-estate platform + AI lead assistant',
    description:
      'Laravel 8 site with an AI live-chat assistant (OpenAI GPT) for real-time property leads, a Next.js CRM on Vercel + Supabase, and an n8n pipeline that captures, enriches and routes leads. RAG with Pinecone deployed on Cloud Run.',
    tech: ['Laravel', 'Next.js', 'FastAPI', 'Pinecone', 'n8n', 'Supabase'],
    link: 'https://senw.io',
    image: '/shots/senw.webp',
    year: '2025',
  },
  {
    name: 'Mindfortress',
    tagline: 'Company site & product hub',
    description: 'Full-stack marketing and product website built with a 3-person team.',
    tech: ['Next.js', 'React', 'Tailwind'],
    link: 'https://mindfortress.com',
    image: '/shots/mindfortress.webp',
    year: '2025',
  },
  {
    name: 'Textlands',
    tagline: 'Full-stack web product',
    description: 'One of four production sites shipped with the Mindfortress team.',
    tech: ['Next.js', 'React', 'Supabase'],
    link: 'https://textlands.com',
    image: '/shots/textlands.webp',
    year: '2025',
  },
  {
    name: 'Agentpik',
    tagline: 'AI agent platform',
    description: 'Full-stack product site for AI agent tooling.',
    tech: ['Next.js', 'React', 'Node.js'],
    link: 'https://agentpik.com',
    image: '/shots/agentpik.webp',
    year: '2025',
  },
  {
    name: 'ParentGlue',
    tagline: 'Family-focused web app',
    description: 'Full-stack web product shipped with the Mindfortress team.',
    tech: ['Next.js', 'React', 'Supabase'],
    link: 'https://parentglue.com',
    image: '/shots/parentglue.webp',
    year: '2025',
  },
  {
    name: 'Nules (Mobile)',
    tagline: 'Cross-platform app for the NL market',
    description:
      'React Native mobile application built for the Netherlands market with native performance and a Node.js/Python backend.',
    tech: ['React Native', 'Node.js', 'Python'],
    year: '2025',
  },
  {
    name: 'MCP Inspector',
    tagline: 'Testing tool for MCP servers',
    description:
      'Containerized FastAPI tool for real-time testing and validation of Model Context Protocol servers, with AI-driven Supabase schema generation.',
    tech: ['Python', 'FastAPI', 'Docker', 'MCP'],
    year: '2024',
  },
]

export interface Experience {
  role: string
  company: string
  date: string
  freelance?: boolean
  bullets: string[]
  tags: string[]
}

export const experience: Experience[] = [
  {
    role: 'Full Stack Developer & AI Automation',
    company: 'Mindfortress',
    date: 'Oct 2025 – Present',
    freelance: true,
    bullets: [
      'Shipped 4 full-stack websites with a team of 3 (mindfortress.com, textlands.com, agentpik.com, parentglue.com).',
      'Built Callivate.ai — an AI workforce for automotive dealerships with 8 specialized agents across sales, service, parts, finance and reception, running 24/7.',
      'Engineered automation with n8n, Zapier and Make.com to wire Retell AI voice agents to SMS, payments and CRM; secured data in Supabase with E2E encryption and real-time sync.',
      'Delivered a React Native app (nules) for the Netherlands market and scalable Node.js/Python REST microservices.',
    ],
    tags: ['Retell AI', 'n8n', 'Supabase', 'React Native', 'Node.js'],
  },
  {
    role: 'Full Stack Developer',
    company: 'SENW Realty',
    date: 'Feb 2025 – Sept 2025',
    freelance: true,
    bullets: [
      'Built senw.io (Laravel 8) with an AI live-chat assistant (Python + OpenAI GPT) for real-time property lead assistance.',
      'Created a Discourse forum and a Next.js CRM on Vercel + Supabase, integrating Dialpad, Remine, Crexi and Stripe.',
      'Automated lead management with n8n — capture, enrichment, territory routing, follow-ups and lead-to-deal sync.',
      'Implemented a RAG pipeline with Pinecone, deployed via GitHub Actions + Docker on Google Cloud Run.',
    ],
    tags: ['Laravel', 'Next.js', 'Pinecone', 'n8n', 'GCP'],
  },
  {
    role: 'Full Stack Developer, AI & Multi-Platform',
    company: 'FIDE',
    date: 'Dec 2024 – Feb 2025',
    freelance: true,
    bullets: [
      'Led an AI project building an intelligent support system with Model Context Protocol (MCP) servers in Python, enabling AI-driven Supabase schema generation.',
      'Built a containerized MCP Inspector (FastAPI) for real-time testing and validation, improving debugging efficiency.',
      'Orchestrated n8n and Make.com workflows to connect MCP servers with databases, notifications and third-party services.',
      'Shipped a RAG pipeline with Pinecone for automatic ticket categorization, deployed to Cloud Run with CI/CD.',
    ],
    tags: ['MCP', 'FastAPI', 'Pinecone', 'Make.com', 'Docker'],
  },
  {
    role: 'MS365 Consultant & Python Developer',
    company: 'Clinical Solutions',
    date: 'Aug 2024 – Nov 2024',
    freelance: true,
    bullets: [
      'Built Python automation for Microsoft Dynamics 365 with secure FastAPI REST APIs integrated with AWS Lambda.',
      'Implemented CI/CD with AWS CodePipeline for automated, versioned releases.',
      'Secured access with AWS IAM and Cognito; applied SOLID principles with CloudWatch observability.',
    ],
    tags: ['Dynamics 365', 'FastAPI', 'AWS Lambda', 'Cognito'],
  },
  {
    role: 'Assistant Manager, Digital Systems Development Officer',
    company: 'EastWest Bank',
    date: 'Mar 2022 – Sept 2023',
    bullets: [
      'Led Python-based AI development including facial recognition for credit-card applications and an AI-powered CSR system using AWS Rekognition and Polly.',
      'Designed scalable FastAPI + PostgreSQL REST APIs with JWT/OAuth 2.0 auth and SOLID principles.',
      'Automated CI/CD with AWS CodePipeline and Lambda, improving release efficiency by 20% with CloudWatch/Prometheus observability.',
    ],
    tags: ['Python', 'AWS AI', 'FastAPI', 'PostgreSQL'],
  },
  {
    role: 'Python Developer',
    company: 'David James Development Company',
    date: '2020 – 2021',
    bullets: [
      'Developed customized Odoo applications for international clients with FastAPI + PostgreSQL, improving performance by 25%.',
      'Implemented CI/CD with Azure DevOps and ARM templates for Odoo and Python projects.',
      'Led Agile pair programming with SOLID principles and JWT auth, improving delivery efficiency by 25%.',
    ],
    tags: ['Odoo', 'FastAPI', 'Azure DevOps'],
  },
  {
    role: 'Technical Lead (promoted from Software Engineer)',
    company: 'RBT Consulting Corporation',
    date: '2019 – 2020',
    bullets: [
      'Led enterprise app development with Odoo and Python, integrating REST APIs with PostgreSQL for HRIS/Payroll serving 30+ clients.',
      'Designed scalable REST APIs with SOLID principles and JWT auth — cut maintenance costs 15% and release cycles 20%.',
      'Provisioned Azure infrastructure with ARM templates and CI/CD; observability with Prometheus and Grafana.',
    ],
    tags: ['Odoo', 'Azure', 'Prometheus', 'Grafana'],
  },
]

export interface Education {
  school: string
  detail: string
  date: string
}

export const education: Education[] = [
  { school: 'STI College Recto', detail: "Bachelor's in Information Technology", date: '2014 – 2018' },
  { school: 'Espiritu Santo Parochial School', detail: 'High School', date: '2009 – 2013' },
]

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]
