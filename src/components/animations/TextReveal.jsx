import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TextReveal = ({ 
  children, 
  className = '',
  as: Component = 'div',
  delay = 0,
  duration = 0.6,
  splitBy = 'words', // 'words' or 'chars'
}) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const text = container.innerText
    container.innerHTML = ''

    // Split text
    const elements = splitBy === 'chars' 
      ? text.split('') 
      : text.split(' ')

    elements.forEach((item, index) => {
      const span = document.createElement('span')
      span.className = 'text-reveal-item'
      span.style.display = 'inline-block'
      span.style.overflow = 'hidden'
      
      const inner = document.createElement('span')
      inner.className = 'text-reveal-inner'
      inner.style.display = 'inline-block'
      inner.textContent = splitBy === 'chars' ? item : item + ' '
      
      span.appendChild(inner)
      container.appendChild(span)
    })

    const innerElements = container.querySelectorAll('.text-reveal-inner')

    gsap.set(innerElements, { y: '100%', opacity: 0 })

    gsap.to(innerElements, {
      y: '0%',
      opacity: 1,
      duration,
      delay,
      stagger: 0.03,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === container) {
          trigger.kill()
        }
      })
    }
  }, [children, delay, duration, splitBy])

  return (
    <Component ref={containerRef} className={className}>
      {children}
    </Component>
  )
}

export default TextReveal

