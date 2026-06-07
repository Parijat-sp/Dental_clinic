'use client'
import { useEffect, useRef } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number       // extra delay in ms
  direction?: 'up' | 'left' | 'right' | 'fade'
  threshold?: number
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.15,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1'
            el.style.transform = 'none'
          }, delay)
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, threshold])

  const initTransform =
    direction === 'up'    ? 'translateY(40px)' :
    direction === 'left'  ? 'translateX(-40px)' :
    direction === 'right' ? 'translateX(40px)' : 'none'

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: initTransform,
        transition: `opacity 0.65s cubic-bezier(.4,0,.2,1), transform 0.65s cubic-bezier(.4,0,.2,1)`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}
