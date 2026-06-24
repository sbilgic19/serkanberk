import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download="Serkan_Berk_Bilgic_CV.pdf" className='btn'>
        <span className="mono">↓</span> Download CV
      </a>
      <a href="#contact" className='btn btn-primary'>
        Let's Talk <span className="mono">→</span>
      </a>
    </div>
  )
}

export default CTA
