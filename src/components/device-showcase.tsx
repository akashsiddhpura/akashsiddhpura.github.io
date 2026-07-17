"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { projects } from "@/data/projects"
import { cn } from "@/lib/utils"

const showcase = projects.map((project) => ({
  name: project.name,
  image: project.heroImage,
  industry: project.industry.split("/")[0].trim(),
}))

const ease = [0.22, 1, 0.36, 1] as const

export function DeviceShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const current = showcase[currentIndex]

  useEffect(() => {
    if (prefersReducedMotion || paused) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % showcase.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [prefersReducedMotion, paused])

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.35, ease }}
      className="relative mx-auto w-full max-w-[280px] sm:max-w-[300px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute left-1/2 top-[45%] -z-10 h-[85%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--primary)_22%,transparent),transparent_68%)] blur-2xl" />

      <div className="mb-6 flex items-baseline justify-between gap-4">
        <div className="min-w-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={current.name}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.35, ease }}
              className="truncate font-heading text-xl font-semibold tracking-tight text-foreground"
            >
              {current.name}
            </motion.p>
          </AnimatePresence>
        </div>
        <span className="shrink-0 font-mono text-[10px] tabular-nums tracking-wide text-text-muted">
          {String(currentIndex + 1).padStart(2, "0")}
          <span className="text-foreground/25"> / </span>
          {String(showcase.length).padStart(2, "0")}
        </span>
      </div>

      <div className="relative">
        <div className="relative aspect-[9/19] overflow-hidden rounded-[2.35rem] border border-border-glass bg-background shadow-[0_24px_60px_rgba(16,21,28,0.14)]">
          <div className="absolute inset-[5px] overflow-hidden rounded-[2rem] bg-surface">
            <div className="absolute inset-x-0 top-0 z-20 flex h-7 justify-center">
              <div className="mt-2 h-[18px] w-[30%] rounded-full bg-black/90 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0"
              >
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  className="object-cover"
                  sizes="300px"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {showcase.map((item, index) => (
          <button
            key={item.name}
            type="button"
            aria-label={`Show ${item.name}`}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-200",
              index === currentIndex
                ? "w-6 bg-primary"
                : "w-1.5 bg-foreground/20 hover:bg-foreground/35"
            )}
          />
        ))}
      </div>
    </motion.div>
  )
}
