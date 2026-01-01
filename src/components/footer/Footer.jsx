import React from 'react'
import './footer.css'
import { BsGithub, BsLinkedin, BsMedium } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <div className="container footer_container">
        <a href="#home" className='footer_logo'>
          <span className="text-primary">&lt;</span>
          Serkan Berk
          <span className="text-primary"> /&gt;</span>
        </a>
        
        <nav className='footer_nav'>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className='footer_socials'>
          <a href="https://github.com/sbilgic19" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <BsGithub />
          </a>
          <a href="https://www.linkedin.com/in/serkanberkb" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <BsLinkedin />
          </a>
          <a href="https://medium.com/@sbilgic19" target="_blank" rel="noopener noreferrer" aria-label="Medium">
            <BsMedium />
          </a>
        </div>

        <div className="footer_copyright">
          <small>
            <span className="mono text-muted">{'// '}</span>
            © {new Date().getFullYear()} Serkan Berk Bilgiç. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  )
}

export default Footer
