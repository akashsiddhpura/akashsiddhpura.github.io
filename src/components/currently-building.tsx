"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Container, Section } from "./ui/container"
import { Rocket, Brain, Layers } from "lucide-react"

const buildingItems = [
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Next.js & Modern Web",
    description: "Expanding beyond mobile development by building fast, scalable web applications using React, Next.js, and modern frontend architecture.",
    status: "Currently Building"
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI-Powered Products",
    description: "Exploring how AI can enhance real-world products through intelligent workflows, automation, and better user experiences.",
    status: "Research & Prototyping"
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "System Design & Architecture",
    description: "Strengthening my understanding of scalable system design, software architecture, and engineering decisions that support long-term product growth.",
    status: "Continuous Learning"
  }
]

export function CurrentlyBuilding() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <Section ref={ref} id="currently-building" className="relative z-10 py-24 bg-background border-t border-border-subtle">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-text-muted uppercase mb-4 block">
              Currently Building
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Always learning. Always building.
            </h2>
            <div className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto space-y-4">
              <p>
                Technology evolves quickly, and so do I. Outside of production work, I continuously explore new technologies, product ideas, and engineering practices that challenge me and prepare me for the next generation of software.
              </p>
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildingItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group p-8 rounded-[24px] glass border-border-subtle hover:border-primary/50 hover:shadow-[0_0_30px_rgba(124,92,255,0.08)] transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-surface-elevated flex items-center justify-center text-text-secondary group-hover:text-primary group-hover:bg-primary/10 transition-colors duration-300 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>
                
                {/* Status Badge */}
                <div className="mt-auto inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-medium text-text-primary">
                    {item.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
