import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ScrollReveal = ({ 
  children, 
  className = '',
  animation = 'fadeUp', // fadeUp, fadeIn, slideLeft, slideRight, scale
  delay = 0,
  duration = 0.8,
  stagger = 0,
  threshold = 0.2,
}) => {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Define animation presets
    const animations = {
      fadeUp: {
        from: { opacity: 0, y: 60 },
        to: { opacity: 1, y: 0 },
      },
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      slideLeft: {
        from: { opacity: 0, x: -80 },
        to: { opacity: 1, x: 0 },
      },
      slideRight: {
        from: { opacity: 0, x: 80 },
        to: { opacity: 1, x: 0 },
      },
      scale: {
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 },
      },
    }

    const anim = animations[animation] || animations.fadeUp

    // Set initial state
    gsap.set(element, anim.from)

    // Create scroll trigger animation
    const tl = gsap.to(element, {
      ...anim.to,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: `top ${100 - threshold * 100}%`,
        toggleActions: 'play none none none',
      },
    })

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === element) {
          trigger.kill()
        }
      })
    }
  }, [animation, delay, duration, threshold])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

export default ScrollReveal

