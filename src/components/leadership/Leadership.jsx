import React from 'react'
import './leadership.css'
import { FaUsers, FaAward, FaHandsHelping, FaMicrochip } from 'react-icons/fa'
import { ScrollReveal } from '../animations'

const leadershipData = [
  {
    organization: 'Co-Oders',
    role: 'Project Director',
    period: 'Jan 2023 – Jan 2024',
    description: 'Led a coding-focused social responsibility project mentoring students affected by earthquakes. Coordinated mentors and organized sessions to teach programming skills.',
    icon: FaUsers,
  },
  {
    organization: 'LEAD21',
    role: 'Fellow',
    period: 'Dec 2022 – Jan 2024',
    description: 'Yenibirlider Derneği fellowship program for emerging leaders in Turkey.',
    icon: FaAward,
  },
  {
    organization: 'Koç University',
    role: 'Newcoming Student Mentor',
    period: 'Sep 2021 – Feb 2024',
    description: 'Guided new students through their transition to university life, providing academic and social support.',
    icon: FaHandsHelping,
  },
  {
    organization: 'IEEE Student Branch',
    role: 'Organization Team Leader',
    period: 'May 2021 – Jun 2022',
    description: 'Led the organization team for technical events and workshops at Koç University IEEE Student Branch.',
    icon: FaMicrochip,
  },
]

const Leadership = () => {
  return (
    <section id="leadership">
      <ScrollReveal animation="fadeUp">
        <div className="section-header">
          <h5>Beyond Code</h5>
          <h2>Leadership</h2>
        </div>
      </ScrollReveal>

      <div className="container leadership_container">
        {leadershipData.map((item, index) => (
          <ScrollReveal 
            key={index}
            animation="fadeUp"
            delay={index * 0.1}
          >
            <article className="leadership_card">
              <div className="leadership_icon">
                <item.icon />
              </div>
              
              <div className="leadership_content">
                <div className="leadership_header">
                  <h3 className="leadership_org">{item.organization}</h3>
                  <span className="leadership_period">{item.period}</span>
                </div>
                
                <h4 className="leadership_role">{item.role}</h4>
                <p className="leadership_description">{item.description}</p>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

export default Leadership
