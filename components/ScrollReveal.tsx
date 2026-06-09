'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: number // delay in seconds for framer-motion
  direction?: 'up' | 'left' | 'right' | 'fade' | 'none'
  threshold?: number
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.15,
}: Props) {
  const initTransform =
    direction === 'up' ? { y: 40, opacity: 0 } :
    direction === 'left' ? { x: -40, opacity: 0 } :
    direction === 'right' ? { x: 40, opacity: 0 } :
    direction === 'fade' ? { opacity: 0 } : 
    { opacity: 1, x: 0, y: 0 }

  const finalTransform = 
    direction === 'none' ? { opacity: 1, x: 0, y: 0 } : { opacity: 1, x: 0, y: 0 }

  return (
    <motion.div
      className={className}
      initial={initTransform}
      whileInView={finalTransform}
      viewport={{ once: true, amount: threshold }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // Custom sleek ease out
      }}
    >
      {children}
    </motion.div>
  )
}
