import React from 'react'
import { BsLinkedin, BsGithub, BsMedium } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/serkanberkb" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <BsLinkedin />
      </a>
      <a href="https://github.com/sbilgic19" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <BsGithub />
      </a>
      <a href="https://medium.com/@sbilgic19" target="_blank" rel="noopener noreferrer" aria-label="Medium">
        <BsMedium />
      </a>
    </div>
  )
}

export default HeaderSocials
