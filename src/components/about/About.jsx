import React from 'react'
import './about.css'
import ME from '../../assets/me-about-new.jpeg'
import { FaBriefcase, FaGraduationCap, FaRocket } from 'react-icons/fa'
import { ScrollReveal } from '../animations'

const About = () => {
  return (
    <section id="about">
      <ScrollReveal animation="fadeUp">
        <div className="section-header">
          <h5>Get To Know</h5>
          <h2>About Me</h2>
        </div>
      </ScrollReveal>
      
      <div className="container about_container">
        <ScrollReveal animation="slideRight" delay={0.2}>
          <div className="about_image-section">
            <div className="terminal-card">
              <div className="terminal-card__header">
                <div className="terminal-card__dots">
                  <span className="terminal-card__dot terminal-card__dot--red"></span>
                  <span className="terminal-card__dot terminal-card__dot--yellow"></span>
                  <span className="terminal-card__dot terminal-card__dot--green"></span>
                </div>
                <span className="terminal-card__title">about.jpg</span>
              </div>
              <div className="about_image-wrapper">
                <img src={ME} alt="Serkan Berk Bilgiç" />
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        <div className="about_content">
          <div className="about_cards">
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <article className='about_card'>
                <FaBriefcase className='about_icon'/>
                <h5>Experience</h5>
                <small>2+ Years Professional</small>
              </article>
            </ScrollReveal>
            
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <article className='about_card'>
                <FaRocket className='about_icon'/>
                <h5>Projects</h5>
                <small>5+ Completed</small>
              </article>
            </ScrollReveal>
            
            <ScrollReveal animation="fadeUp" delay={0.3}>
              <article className='about_card'>
                <FaGraduationCap className='about_icon'/>
                <h5>Education</h5>
                <small>Koç University '24</small>
              </article>
            </ScrollReveal>
          </div>
          
          <ScrollReveal animation="fadeUp" delay={0.4}>
            <div className="about_text">
              <p>
                Full-stack developer with experience building web and mobile products 
                in lean teams. Hands-on with <span className="highlight">Node.js/TypeScript</span>, 
                <span className="highlight"> Python/FastAPI</span>, and modern React frameworks.
              </p>
              <p>
                I specialize in building AI-powered applications, from text-to-SQL agents 
                to e-commerce chatbots. Currently working at <span className="highlight">Datapad</span>, 
                where I own full-stack development and AI services.
              </p>
              <p className="about_traits">
                <span className="trait">{'// Curious'}</span>
                <span className="trait">{'// Quick learner'}</span>
                <span className="trait">{'// End-to-end ownership'}</span>
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="fadeUp" delay={0.5}>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default About
