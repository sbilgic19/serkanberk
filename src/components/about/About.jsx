import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about_container">
      <div className="about_me">
        <div className="about_me-image">
          <img src={ME} alt="about-me"/>
        </div>
      </div>
      <div className="about_content">
        <div className="about_cards">
          <article className='about_card'>
            <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>Lifetime Learner</small>
          </article>
          <article className='about_card'>
            <VscFolderLibrary className='about_icon'/>
            <h5>Projects</h5>
            <small>3+ Completed Projects</small>
          </article>
        </div>
        <p>
          I'm Senior student at Koç University. I am currently pursuing my Bachelor's Degree in Computer Engineering and Economics.
          I'm also minoring in Business Administration. I'm interested in web and mobile technologies.  
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About