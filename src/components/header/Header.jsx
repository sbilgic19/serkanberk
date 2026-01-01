import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me-new.png'
import HeaderSocials from './HeaderSocials'
import { Spotlight, MagneticButton } from '../animations'

const Header = () => {
  const headerRef = useRef(null)
  const terminalRef = useRef(null)
  const greetingRef = useRef(null)
  const nameRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const ctaRef = useRef(null)
  const imageRef = useRef(null)
  const socialsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create master timeline
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      })

      // Initial states
      gsap.set([
        terminalRef.current,
        greetingRef.current,
        nameRef.current,
        titleRef.current,
        descRef.current,
        ctaRef.current,
      ], { 
        opacity: 0, 
        y: 40 
      })

      gsap.set(imageRef.current, { 
        opacity: 0, 
        scale: 0.9,
        y: 20 
      })

      gsap.set(socialsRef.current, { 
        opacity: 0, 
        y: 20 
      })

      // Animate in sequence
      tl.to(imageRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
      })
      .to(terminalRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      }, '-=0.5')
      .to(greetingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      }, '-=0.3')
      .to(nameRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }, '-=0.3')
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      }, '-=0.4')
      .to(descRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      }, '-=0.3')
      .to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      }, '-=0.2')
      .to(socialsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      }, '-=0.4')

    }, headerRef)

    return () => ctx.revert()
  }, [])

  return (
    <Spotlight>
      <header id="home" ref={headerRef}>
        <div className="container header_container">
          <div className="header_content">
            <div className="header_terminal" ref={terminalRef}>
              <span className="terminal_prompt">$</span>
              <span className="terminal_command"> whoami</span>
            </div>
            
            <h5 className="header_greeting" ref={greetingRef}>Hello, I'm</h5>
            
            <h1 className="header_name" ref={nameRef}>
              <span className="text-primary">Serkan</span> Berk Bilgiç
            </h1>
            
            <div className="header_title" ref={titleRef}>
              <TypeWriter text="Full-Stack Developer & AI Engineer" />
            </div>
            
            <p className="header_description" ref={descRef}>
              Building web & mobile products with modern tech stacks.
              <br />
              <span className="text-muted">Currently @ Datapad</span>
            </p>
            
            <div ref={ctaRef}>
              <CTA />
            </div>
          </div>
          
          <div className="header_image-container">
            <div className="header_image-wrapper" ref={imageRef}>
              <div className="header_image-glow"></div>
              <div className="header_image">
                <img src={ME} alt="Serkan Berk Bilgiç" />
              </div>
            </div>
            <div ref={socialsRef}>
              <HeaderSocials />
            </div>
          </div>
          
          <MagneticButton className="scroll_down_wrapper">
            <a href="#about" className='scroll_down'>
              <span className="scroll_text">scroll</span>
              <span className="scroll_arrow">↓</span>
            </a>
          </MagneticButton>
        </div>
      </header>
    </Spotlight>
  )
}

// Typing animation component
const TypeWriter = ({ text }) => {
  const textRef = useRef(null)
  const cursorRef = useRef(null)

  useEffect(() => {
    const textElement = textRef.current
    const cursorElement = cursorRef.current
    
    if (!textElement) return

    textElement.textContent = ''
    let index = 0

    const typeInterval = setInterval(() => {
      if (index < text.length) {
        textElement.textContent = text.slice(0, index + 1)
        index++
      } else {
        clearInterval(typeInterval)
      }
    }, 50)

    // Cursor blink
    const cursorBlink = gsap.to(cursorElement, {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    })

    return () => {
      clearInterval(typeInterval)
      cursorBlink.kill()
    }
  }, [text])

  return (
    <>
      <span className="header_title-text" ref={textRef}></span>
      <span className="header_cursor" ref={cursorRef}>|</span>
    </>
  )
}

export default Header
