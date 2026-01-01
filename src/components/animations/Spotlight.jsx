import { useEffect, useRef, useState } from 'react'
import './spotlight.css'

const Spotlight = ({ children, className = '' }) => {
  const containerRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    const handleMouseEnter = () => {
      setIsHovered(true)
      setOpacity(1)
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
      setOpacity(0)
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      container.addEventListener('mouseenter', handleMouseEnter)
      container.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove)
        container.removeEventListener('mouseenter', handleMouseEnter)
        container.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className={`spotlight-container ${className}`}
    >
      <div
        className="spotlight-effect"
        style={{
          opacity,
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(0, 255, 159, 0.06), transparent 40%)`,
        }}
      />
      <div
        className="spotlight-glow"
        style={{
          opacity: opacity * 0.5,
          left: position.x,
          top: position.y,
        }}
      />
      {children}
    </div>
  )
}

export default Spotlight

