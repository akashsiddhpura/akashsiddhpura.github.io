"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView, useSpring, useTransform } from "framer-motion"
import { Container, Section } from "./ui/container"
import { Check } from "lucide-react"

const stats = [
  { value: 5, suffix: "+", label: "Years Building Products" },
  { value: 10, suffix: "+", label: "Production Applications" },
  { value: 500, suffix: "K+", label: "Combined Downloads" },
  { value: 4, suffix: "+", label: "Industries Served" },
]

const highlights = [
  "Real-Time Messaging",
  "Clean Architecture",
  "High-Performance UI",
  "Intelligent Caching",
  "Product Architecture",
  "Cross Platform",
  "Flutter Web",
  "Payment Integration",
  "AI-Assisted Development",
  "Performance Optimization",
]

function AnimatedCounter({ value, suffix }: { value: number, suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  
  const springValue = useSpring(0, { duration: 2000, bounce: 0 })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      springValue.set(value)
    }
  }, [isInView, value, springValue])

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest))
    })
  }, [springValue])

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}{suffix}
    </span>
  )
}

export function TrustIndicators() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <Section ref={ref} id="trust" className="relative z-10 py-12 md:py-24">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-16"
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="flex flex-col p-6 rounded-2xl glass hover:bg-surface-glass/80 transition-colors"
              >
                <div className="text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/70 mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm md:text-base text-text-secondary font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Highlights */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass border-border-subtle bg-surface-elevated/30 hover:bg-surface-elevated/60 transition-colors cursor-default"
              >
                <Check className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-text-primary">{highlight}</span>
              </div>
            ))}
          </motion.div>

          {/* Supporting Statement */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-text-muted leading-relaxed">
              Every number represents production experience, real users, and engineering decisions made to solve real business problems.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
