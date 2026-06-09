'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time (or wait for actual assets to load)
    const timer = setTimeout(() => {
      setIsLoading(false)
      // Allow scrolling again after preloader fades out
      document.body.style.overflow = 'auto'
    }, 1500)

    // Lock scroll while preloading
    document.body.style.overflow = 'hidden'

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: '#0D0D2B', // Dark navy from our theme
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            style={{ color: '#fff', textAlign: 'center' }}
          >
            <svg viewBox="0 0 40 40" width="80" height="80" style={{ marginBottom: '1rem' }}>
              <circle cx="20" cy="20" r="19" fill="transparent" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="120" strokeDashoffset="0">
                <animate attributeName="stroke-dashoffset" values="120;0" dur="1s" fill="freeze" />
              </circle>
              <path d="M13 18c0-4 3.5-7 7-7s7 3 7 7c0 6-3 10-7 10s-7-4-7-10z" fill="#0ea5e9">
                <animate attributeName="opacity" values="0;1" dur="1s" begin="0.5s" fill="freeze" />
              </path>
              <path d="M17 14c0 0 1 3 3 3s3-3 3-3" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round">
                <animate attributeName="stroke-dasharray" values="0 10; 10 10" dur="0.5s" begin="1s" fill="freeze" />
              </path>
            </svg>
            <motion.h2 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem', margin: 0, fontWeight: 600 }}
            >
              Dental<span style={{ color: '#0ea5e9' }}>Clinic</span>
            </motion.h2>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
