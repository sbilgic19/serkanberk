import React, { useState, useEffect } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiCode, BiBriefcase, BiMessageSquareDetail } from 'react-icons/bi'
import { FaProjectDiagram, FaGraduationCap, FaUsers } from 'react-icons/fa'

const navItems = [
  { id: '#home', icon: AiOutlineHome, label: 'Home' },
  { id: '#about', icon: AiOutlineUser, label: 'About' },
  { id: '#skills', icon: BiCode, label: 'Skills' },
  { id: '#experience', icon: BiBriefcase, label: 'Experience' },
  { id: '#projects', icon: FaProjectDiagram, label: 'Projects' },
  { id: '#education', icon: FaGraduationCap, label: 'Education' },
  { id: '#leadership', icon: FaUsers, label: 'Leadership' },
  { id: '#contact', icon: BiMessageSquareDetail, label: 'Contact' },
]

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id.substring(1))
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveNav(`#${sections[i]}`)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="floating-nav">
      {navItems.map((item) => (
        <a 
          key={item.id}
          href={item.id} 
          onClick={() => setActiveNav(item.id)} 
          className={activeNav === item.id ? 'active' : ''}
          title={item.label}
        >
          <item.icon />
          <span className="nav-label">{item.label}</span>
        </a>
      ))}
    </nav>
  )
}

export default Nav
