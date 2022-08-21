import React from 'react'
import './footer.css'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="/#" className='footer_logo'>SERKAN BERK</a>
      {/* <img src="../../assets/Berk-unscreen.gif" alt="Not Found"/> */}
      <ul className='permalinks'>
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>


      <div className='footer_socials'>
        <a href="https://github.com/sbilgic19" target="_blank"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/serkanberkb" target="_blank"><FaLinkedinIn/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Serkan Berk Bilgiç 2022. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer