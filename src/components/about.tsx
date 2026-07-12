"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Container, Section } from "./ui/container"
import Image from "next/image"
import { Briefcase, Code2, Cpu, Zap } from "lucide-react"

const principles = [
  {
    icon: <Briefcase className="w-5 h-5" />,
    title: "Business Before Code",
    description: "I start by understanding the problem before choosing the technology."
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "Architecture Matters",
    description: "Scalable foundations make products easier to grow and maintain."
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Performance Is a Feature",
    description: "Fast, responsive software creates trust and better user experiences."
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Never Stop Learning",
    description: "Every challenging project is an opportunity to become a better engineer."
  }
]

const quickFacts = [
  { label: "Current Focus", value: "Building scalable mobile products." },
  { label: "Favourite Part of Development", value: "Architecture & Product Engineering." },
  { label: "Dream Projects", value: "AI, IoT, and Security-driven applications." },
  { label: "Current Mission", value: "Helping startups transform ambitious ideas into production-ready software." }
]

export function About() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  return (
    <Section ref={ref} id="about" className="relative z-10 py-24 bg-background">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Sticky Portrait */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className="sticky top-32 lg:h-[calc(100vh-16rem)] min-h-[400px] lg:max-h-[700px] w-full rounded-[32px] overflow-hidden glass p-4"
            >
              <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-surface">
                <Image
                  src="/images/my-avatar.png"
                  alt="Aakash Siddhpura - Software Engineer"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 flex flex-col pt-8 lg:pt-0">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.div variants={fadeUpVariants} className="mb-4">
                <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">About</span>
              </motion.div>

              <motion.h2 variants={fadeUpVariants} className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight tracking-tight mb-8">
                More than writing code, I enjoy building products that make a difference.
              </motion.h2>

              {/* Main Story */}
              <motion.div variants={fadeUpVariants} className="space-y-6 text-lg text-text-secondary leading-relaxed mb-16">
                <p>
                  My journey into software engineering started with curiosity. As a child, I was always fascinated by technology and wanted to understand how applications worked behind the scenes. That curiosity eventually became a passion for building software instead of simply using it.
                </p>
                <p>
                  Today, I focus on building digital products that solve meaningful problems through thoughtful engineering, scalable architecture, and exceptional user experiences.
                </p>
                <p>
                  Whether I&apos;m architecting a real-time messaging system, optimizing application performance, or refining micro-interactions, my goal remains the same: <span className="text-foreground font-medium">Build software that feels effortless for users and reliable for businesses.</span>
                </p>
              </motion.div>

              {/* Core Principles */}
              <motion.div variants={fadeUpVariants} className="mb-16">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-8">Core Principles</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {principles.map((principle, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ y: -4 }}
                      className="p-6 rounded-2xl glass bg-surface-elevated/20 border-border-subtle flex flex-col gap-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {principle.icon}
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-foreground mb-2">{principle.title}</h4>
                        <p className="text-sm text-text-muted leading-relaxed">{principle.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Facts (Bento-ish) */}
              <motion.div variants={fadeUpVariants} className="mb-16">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-8">Quick Facts</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {quickFacts.map((fact, idx) => (
                    <div 
                      key={idx}
                      className="p-5 rounded-xl border border-border-subtle bg-surface/50 flex flex-col justify-center"
                    >
                      <span className="text-xs font-mono text-text-muted uppercase tracking-wider mb-2">{fact.label}</span>
                      <span className="text-sm font-medium text-foreground">{fact.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Closing Statement */}
              <motion.div variants={fadeUpVariants} className="pt-8 border-t border-border-subtle">
                <div className="text-xl md:text-2xl font-heading font-medium text-foreground leading-snug space-y-4">
                  <p>I don&apos;t measure success by the number of features I build.</p>
                  <p className="text-text-secondary">I measure success by the quality of the experience users have with the products I help create.</p>
                  <p className="text-primary">For me, great software isn&apos;t just functional. It&apos;s intuitive, scalable, and built to last.</p>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
