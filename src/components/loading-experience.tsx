"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function LoadingExperience() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Lock body scroll while loading
    document.body.style.overflow = "hidden"
    
    // Simulate loading progress
    const duration = 2000 // 2 seconds
    const interval = 20 // 20ms updates
    const steps = duration / interval
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      setProgress(Math.min(Math.round((currentStep / steps) * 100), 100))
      
      if (currentStep >= steps) {
        clearInterval(timer)
        setTimeout(() => {
          setIsLoading(false)
          document.body.style.overflow = ""
        }, 400) // slight pause at 100% before fade out
      }
    }, interval)

    return () => {
      clearInterval(timer)
      document.body.style.overflow = ""
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 via-background to-background opacity-60 blur-[100px]" />
          
          <div className="relative flex flex-col items-center justify-center z-10">
            {/* AS Monogram */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 tracking-tight"
            >
              AS
            </motion.div>
            
            {/* Progress line */}
            <div className="w-48 md:w-64 h-[2px] bg-white/[0.05] relative overflow-hidden rounded-full">
              <motion.div 
                className="absolute top-0 left-0 bottom-0 bg-primary rounded-full shadow-[0_0_10px_rgba(124,92,255,0.5)]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.05 }}
              />
            </div>
            
            {/* Percentage */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-[10px] uppercase tracking-widest font-mono text-text-muted flex items-center gap-4"
            >
              <span>Loading Experience</span>
              <span className="text-primary/80">{progress.toString().padStart(3, '0')}%</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
