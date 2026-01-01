import React from 'react'
import './education.css'
import { FaGraduationCap, FaPlane } from 'react-icons/fa'
import { ScrollReveal } from '../animations'

const educationData = [
  {
    institution: 'Koç University',
    location: 'Istanbul, Turkey',
    degree: 'B.Sc. Computer Engineering + Economics',
    type: 'Double Major',
    period: '2019 – Jun 2024',
    gpa: '3.8 / 4.0',
    highlights: [
      'Full Scholarship recipient',
      'iOS Development coursework (Swift)',
      'Undergraduate Research Assistant - Intelligent User Interfaces',
    ],
    icon: FaGraduationCap,
    primary: true,
  },
  {
    institution: 'University of Mannheim',
    location: 'Mannheim, Germany',
    degree: 'Erasmus Exchange - Economics',
    type: 'Exchange Program',
    period: 'Feb 2024 – Jun 2024',
    gpa: '3.62 / 4.0',
    highlights: [
      'International exchange experience',
      'Economics coursework',
    ],
    icon: FaPlane,
    primary: false,
  },
]

const Education = () => {
  return (
    <section id="education">
      <ScrollReveal animation="fadeUp">
        <div className="section-header">
          <h5>Academic Background</h5>
          <h2>Education</h2>
        </div>
      </ScrollReveal>

      <div className="container education_container">
        {educationData.map((edu, index) => (
          <ScrollReveal 
            key={index}
            animation={index === 0 ? 'slideRight' : 'slideLeft'}
            delay={index * 0.2}
          >
            <article className={`education_card terminal-card ${edu.primary ? 'primary' : ''}`}>
              <div className="terminal-card__header">
                <div className="terminal-card__dots">
                  <span className="terminal-card__dot terminal-card__dot--red"></span>
                  <span className="terminal-card__dot terminal-card__dot--yellow"></span>
                  <span className="terminal-card__dot terminal-card__dot--green"></span>
                </div>
                <span className="terminal-card__title">
                  {edu.institution.toLowerCase().replace(/\s+/g, '_')}.edu
                </span>
              </div>
              
              <div className="terminal-card__body">
                <div className="edu_icon">
                  <edu.icon />
                </div>
                
                <div className="edu_content">
                  <div className="edu_header">
                    <div>
                      <h3 className="edu_institution">{edu.institution}</h3>
                      <p className="edu_location">{edu.location}</p>
                    </div>
                    <span className="edu_type">{edu.type}</span>
                  </div>
                  
                  <h4 className="edu_degree">{edu.degree}</h4>
                  
                  <div className="edu_meta">
                    <span className="edu_period">{edu.period}</span>
                    <span className="edu_gpa">GPA: {edu.gpa}</span>
                  </div>
                  
                  <ul className="edu_highlights">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

export default Education
