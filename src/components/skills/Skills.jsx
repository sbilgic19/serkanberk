import React from 'react'
import './skills.css'
import { 
  FaNodeJs, FaPython, FaReact, FaDocker, FaGitAlt, FaSlack 
} from 'react-icons/fa'
import { 
  SiTypescript, SiFastapi, SiNextdotjs, SiMongodb, 
  SiPostgresql, SiRedis, SiStripe, SiVercel, SiGooglecloud
} from 'react-icons/si'
import { ScrollReveal } from '../animations'

const skillCategories = [
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Python', icon: FaPython },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'REST APIs', icon: null },
      { name: 'OAuth/JWT', icon: null },
    ]
  },
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'React', icon: FaReact },
      { name: 'React Native', icon: FaReact },
      { name: 'HTML/CSS', icon: null },
      { name: 'Tailwind', icon: null },
    ]
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Redis', icon: SiRedis },
    ]
  },
  {
    title: 'AI/ML',
    icon: '🤖',
    skills: [
      { name: 'LangChain', icon: null },
      { name: 'LangGraph', icon: null },
      { name: 'AI SDK', icon: null },
      { name: 'OpenAI', icon: null },
    ]
  },
  {
    title: 'Integrations',
    icon: '🔌',
    skills: [
      { name: 'Stripe', icon: SiStripe },
      { name: 'Slack APIs', icon: FaSlack },
      { name: 'Webhooks', icon: null },
    ]
  },
  {
    title: 'Cloud/Infra',
    icon: '☁️',
    skills: [
      { name: 'Google Cloud', icon: SiGooglecloud },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Railway', icon: null },
      { name: 'Docker', icon: FaDocker },
      { name: 'Git', icon: FaGitAlt },
    ]
  },
]

const Skills = () => {
  return (
    <section id="skills">
      <ScrollReveal animation="fadeUp">
        <div className="section-header">
          <h5>Technical Expertise</h5>
          <h2>Skills</h2>
        </div>
      </ScrollReveal>
      
      <div className="container skills_container">
        {skillCategories.map((category, index) => (
          <ScrollReveal 
            key={index} 
            animation="fadeUp" 
            delay={index * 0.1}
          >
            <div className="terminal-card skill_category">
              <div className="terminal-card__header">
                <div className="terminal-card__dots">
                  <span className="terminal-card__dot terminal-card__dot--red"></span>
                  <span className="terminal-card__dot terminal-card__dot--yellow"></span>
                  <span className="terminal-card__dot terminal-card__dot--green"></span>
                </div>
                <span className="terminal-card__title">
                  {category.icon} {category.title.toLowerCase()}.skills
                </span>
              </div>
              <div className="terminal-card__body">
                <div className="skill_list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill_item">
                      {skill.icon && <skill.icon className="skill_icon" />}
                      <span className="skill_name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

export default Skills
