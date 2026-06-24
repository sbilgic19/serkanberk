import React from 'react'
import './projects.css'
import { FaExternalLinkAlt, FaGithub, FaAppStoreIos } from 'react-icons/fa'
import { ScrollReveal } from '../animations'

const projects = [
  {
    title: 'HairTry',
    subtitle: 'AI Hair Visualizer · iOS App',
    role: 'Solo · Self-shipped',
    description: 'AI hair try-on app — upload a selfie, pick a style, and get a photorealistic image of yourself with the new hair. Built and shipped solo, end-to-end: app, backend, billing, and App Store launch.',
    features: [
      'Dual AI image pipeline (Gemini + GPT Image) with provider fallback',
      'Two-stage serverless backend: Firestore trigger → Pub/Sub worker',
      '11 languages with RTL support; subscriptions via RevenueCat',
    ],
    tech: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'Cloud Functions', 'Gemini', 'GPT Image', 'RevenueCat'],
    links: {
      appStore: 'https://apps.apple.com/us/app/hairtry-ai-hair-visualizer/id6760612687',
    },
    featured: true,
  },
  {
    title: 'Calquate',
    subtitle: 'AI Calorie Counter · iOS App',
    role: 'Solo · Self-shipped',
    description: 'AI-powered calorie & meal tracker — snap a photo of a meal and get an instant nutrition breakdown. Designed, built, and shipped solo to the App Store.',
    features: [
      'AI food-photo analysis for instant calories & macros',
      'Anonymous auth + Firestore sync — zero signup friction',
      'Manual meal logging with daily nutrition goals',
    ],
    tech: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'OpenAI', 'RevenueCat'],
    links: {
      appStore: 'https://apps.apple.com/us/app/calquate-ai-calorie-counter/id6779976948',
    },
    featured: true,
  },
  {
    title: 'Narwhal',
    subtitle: 'AI-Native Operations Platform',
    role: 'Contributor @ Datapad',
    description: 'AI operations platform that makes B2B teams AI-native in weeks. Human and AI agents work from one shared customer graph across email, CRM, Slack, WhatsApp, and voice — running real operations end-to-end with approvals, runs, and ROI tracking.',
    features: [
      'Durable workflow runtime over a unified business graph',
      'Multi-channel agents (Slack, email, voice, WhatsApp) with 3,000+ connectors',
      'Per-workspace agent sandboxes; multi-model routing (Anthropic, OpenAI, Google, xAI)',
    ],
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'AI SDK', 'Drizzle', 'Neon', 'Redis', 'Fly.io'],
    links: {
      live: 'https://getnarwhal.ai',
    },
    featured: true,
  },
  {
    title: 'Datapad',
    subtitle: 'AI-Powered Analytics Platform',
    role: 'Contributor @ Datapad',
    description: 'Full-stack analytics platform with AI chatbot for data Q&A. Built text-to-SQL and text-to-Mongo capabilities, multi-agent workflows, and dashboard/report generation.',
    features: [
      'AI agents (data analyst, web researcher, report generator)',
      'Slack integration for in-channel data queries',
      'Workflow automation & scheduling',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Python', 'FastAPI', 'LangGraph', 'MongoDB', 'PostgreSQL', 'Redis'],
    links: {
      live: 'https://datapad.io',
    },
    featured: true,
  },
  {
    title: 'Echo',
    subtitle: 'E-commerce AI Agent',
    role: 'Contributor @ Datapad',
    description: 'AI shopping assistant for e-commerce — product recommendations, visual search, and support via an embeddable widget. Built agent workflows on an Agent SDK with tool-calling and prompt-layer guardrails to run customer workflows reliably end-to-end.',
    features: [
      'Agent workflows on an Agent SDK with custom tools',
      'Tenant knowledge retrieval with vector embeddings (RAG)',
      'Multi-tenant ingestion via Inngest with retries & idempotency',
    ],
    tech: ['Next.js 15', 'React 19', 'AI SDK', 'Agent SDK', 'Neon', 'Drizzle', 'Inngest', 'Redis'],
    links: {
      live: 'https://get-echo.ai',
    },
    featured: true,
  },
  {
    title: 'Stock AI',
    subtitle: 'iOS App - Trends & Analysis',
    role: 'Contributor @ Datapad',
    description: 'iOS mobile app that analyzes stock charts and provides AI-assisted technical analysis explanations and scenarios.',
    features: [
      'AI-powered chart analysis',
      'Technical indicator explanations',
      'Interactive Q&A about market trends',
    ],
    tech: ['React Native', 'Expo', 'AI/ML'],
    links: {
      appStore: 'https://apps.apple.com/us/app/stock-ai-trends-analysis/id6754451423',
    },
    featured: false,
  },
  {
    title: 'Backsmith.ai',
    subtitle: 'AI Content Automation',
    role: 'Contributor @ Datapad',
    description: 'AI-driven SEO and content automation platform with keyword research, competitor tracking, and automated article creation.',
    features: [
      'AI-powered keyword research',
      'Competitor tracking & analysis',
      'Automated article generation',
    ],
    tech: ['Web Platform', 'AI/ML'],
    links: {
      live: 'https://www.backsmith.ai',
    },
    featured: false,
  },
]

const Projects = () => {
  return (
    <section id="projects">
      <ScrollReveal animation="fadeUp">
        <div className="section-header">
          <h5>What I've Built</h5>
          <h2>Projects</h2>
        </div>
      </ScrollReveal>

      <div className="container projects_container">
        {projects.map((project, index) => (
          <ScrollReveal 
            key={index}
            animation="scale"
            delay={index * 0.1}
          >
            <article 
              className={`project_card terminal-card ${project.featured ? 'featured' : ''}`}
            >
              <div className="terminal-card__header">
                <div className="terminal-card__dots">
                  <span className="terminal-card__dot terminal-card__dot--red"></span>
                  <span className="terminal-card__dot terminal-card__dot--yellow"></span>
                  <span className="terminal-card__dot terminal-card__dot--green"></span>
                </div>
                <span className="terminal-card__title">
                  {project.title.toLowerCase().replace(/\s+/g, '-')}.project
                </span>
              </div>
              
              <div className="terminal-card__body">
                <div className="project_header">
                  <div>
                    <h3 className="project_title">{project.title}</h3>
                    <p className="project_subtitle">{project.subtitle}</p>
                  </div>
                  <span className="project_role">{project.role}</span>
                </div>
                
                <p className="project_description">{project.description}</p>
                
                <div className="project_features">
                  <span className="features_label">{'// Key Features'}</span>
                  <ul>
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project_tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project_links">
                  {project.links.live && (
                    <a 
                      href={project.links.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project_link"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                  {project.links.github && (
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project_link"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                  {project.links.appStore && (
                    <a 
                      href={project.links.appStore} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project_link"
                    >
                      <FaAppStoreIos /> App Store
                    </a>
                  )}
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

export default Projects
