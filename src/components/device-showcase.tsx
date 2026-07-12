"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

const projects = [
  { name: "Alpha Tribe", image: "/images/blog-1.jpg" }, // using placeholder since actual app screens may vary in aspect ratio, but we have alpha-tribe/1.png
  { name: "Vignanam", image: "/img/portfolio/vignanam/1.jpg" },
  { name: "Quoodo", image: "/img/portfolio/quoodo/1.png" },
]

export function DeviceShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 20, rotate: 2 }}
      animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.9, delay: 1.2 }}
      className="relative w-full max-w-[300px] mx-auto perspective-1000"
    >
      {/* Floating animation wrapper */}
      <motion.div
        animate={{
          y: [-8, 8, -8],
          rotate: [-1, 1, -1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10"
      >
        {/* Device frame (minimal glass look) */}
        <div className="relative rounded-[40px] border-[8px] border-surface-elevated bg-background shadow-2xl overflow-hidden aspect-[1/2.16]">
          {/* Top notch placeholder */}
          <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
            <div className="w-1/3 h-full bg-surface-elevated rounded-b-xl" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={projects[currentIndex].image}
                alt={projects[currentIndex].name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Device Reflection / Glow */}
        <div className="absolute -inset-4 -z-10 bg-primary/20 blur-3xl rounded-full opacity-50" />
      </motion.div>
    </motion.div>
  )
}
