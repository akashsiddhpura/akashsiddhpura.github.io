"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { site } from "@/lib/site"

export function LoadingExperience() {
  const [isLoading, setIsLoading] = useState(true)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    // Prefer reduced motion: skip loader immediately
    if (prefersReducedMotion === true) {
      return
    }

    // While motion preference is still unknown (null), wait briefly then dismiss.
    // Never leave the overlay stuck on top of the page.
    document.body.style.overflow = "hidden"

    const duration = prefersReducedMotion === null ? 400 : 1400
    const timer = window.setTimeout(() => {
      setIsLoading(false)
      document.body.style.overflow = ""
    }, duration)

    return () => {
      window.clearTimeout(timer)
      document.body.style.overflow = ""
    }
  }, [prefersReducedMotion])

  // Hard fallback — guarantee dismiss even if the effect above is interrupted
  useEffect(() => {
    const failsafe = window.setTimeout(() => {
      setIsLoading(false)
      document.body.style.overflow = ""
    }, 2500)
    return () => window.clearTimeout(failsafe)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && prefersReducedMotion !== true && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <div
            className="absolute inset-0 opacity-80"
            style={{
              background:
                "radial-gradient(ellipse at center, color-mix(in oklab, var(--primary) 12%, transparent), transparent 65%)",
            }}
          />
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-10 font-heading text-4xl font-extrabold tracking-[-0.04em] text-foreground md:text-5xl"
            >
              {site.monogram}
            </motion.div>
            <div className="relative h-px w-40 overflow-hidden bg-border-subtle">
              <motion.div
                className="absolute inset-y-0 left-0 bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
