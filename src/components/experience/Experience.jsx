import React from 'react'
import './experience.css'
import { FaBriefcase } from 'react-icons/fa'
import { ScrollReveal } from '../animations'

const experiences = [
  {
    company: 'Datapad',
    role: 'Software Developer (Full Stack / AI)',
    period: 'Feb 2025 – Present',
    type: 'Full-time',
    description: [
      'Owned full-stack development in a 3-person startup, building analytics features with Next.js + Node.js and AI services with Python/FastAPI',
      'Built text-to-SQL and text-to-Mongo capabilities for data Q&A chatbot using LangChain and LangGraph',
      'Designed Slack integration (Events API + OAuth) for in-channel data queries, end-to-end',
      'Integrated Stripe Checkout + Subscriptions with coupon support for self-serve billing',
      'Improved performance using Redis caching for expensive data fetches and agent queries',
    ],
    tags: ['Next.js', 'Python', 'FastAPI', 'LangGraph', 'Redis', 'Stripe'],
  },
  {
    company: 'Tor.app',
    role: 'Growth, Data & Product Specialist',
    period: 'Mar 2024 – Jan 2025',
    type: 'Full-time',
    description: [
      'Owned STT/TTS product decisions across web and mobile (Transkriptor & Speaktor)',
      'Benchmarked vendor APIs per locale and drove model-switch decisions',
      'Negotiated vendor pricing and defined pricing strategy; improved conversion rate up to 40%',
      'Automated campaign planning, creatives, localization, and performance analysis to scale output',
    ],
    tags: ['Product', 'STT/TTS', 'A/B Testing', 'Analytics'],
  },
  {
    company: 'Siemens',
    role: 'Part-Time Working Student (Software)',
    period: 'Mar 2023 – Aug 2023',
    type: 'Part-time',
    description: [
      'Fixed bugs and shipped features for a Network Planning tool',
      'Added tests in an agile team environment',
    ],
    tags: ['Java', 'Spring Boot', 'Docker', 'Azure DevOps'],
  },
  {
    company: 'Amazon Turkey',
    role: 'General Marketing Specialist Intern',
    period: 'Aug 2022 – Feb 2023',
    type: 'Internship',
    description: [
      'Ran A/B tests for marketing nudges',
      'Increased click-through rate by ~40% across tested campaigns',
    ],
    tags: ['A/B Testing', 'Marketing', 'Analytics'],
  },
  {
    company: 'Amadeus',
    role: 'Software Development Engineer Intern',
    period: 'Jun 2022 – Aug 2022',
    type: 'Internship',
    description: [
      'Built an admin bug control panel to help support agents track and resolve issues faster',
    ],
    tags: ['Full Stack', 'Support Tools'],
  },
]

const Experience = () => {
  return (
    <section id="experience">
      <ScrollReveal animation="fadeUp">
        <div className="section-header">
          <h5>My Journey</h5>
          <h2>Experience</h2>
        </div>
      </ScrollReveal>

      <div className='container experience_container'>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <ScrollReveal 
              key={index}
              animation={index % 2 === 0 ? 'slideRight' : 'slideLeft'}
              delay={index * 0.15}
            >
              <div className={`timeline_item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline_marker">
                  <FaBriefcase />
                </div>
                <div className="timeline_content terminal-card">
                  <div className="terminal-card__header">
                    <div className="terminal-card__dots">
                      <span className="terminal-card__dot terminal-card__dot--red"></span>
                      <span className="terminal-card__dot terminal-card__dot--yellow"></span>
                      <span className="terminal-card__dot terminal-card__dot--green"></span>
                    </div>
                    <span className="terminal-card__title">{exp.company.toLowerCase().replace(/\s+/g, '_')}.exp</span>
                  </div>
                  <div className="terminal-card__body">
                    <div className="exp_header">
                      <h3 className="exp_company">{exp.company}</h3>
                      <span className="exp_type">{exp.type}</span>
                    </div>
                    <h4 className="exp_role">{exp.role}</h4>
                    <p className="exp_period">{exp.period}</p>
                    
                    <ul className="exp_description">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    
                    <div className="exp_tags">
                      {exp.tags.map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
