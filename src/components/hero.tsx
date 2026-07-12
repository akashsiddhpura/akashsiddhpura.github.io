"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Container } from "./ui/container"
import { Button } from "./ui/button"
import { DeviceShowcase } from "./device-showcase"
import { ArrowDown, Mail, FileText } from "lucide-react"
import Link from "next/link"

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
    <path d="M10 20.5c-3 .9-4.5-1-5-2" />
  </svg>
)

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Production Apps" },
  { value: 500, suffix: "K+", label: "Downloads" },
]

export function Hero() {
  const [isMounted, setIsMounted] = useState(false)
  
  // Parallax setup
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 150 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)
  
  const parallaxX = useTransform(smoothX, [-0.5, 0.5], [-15, 15])
  const parallaxY = useTransform(smoothY, [-0.5, 0.5], [-15, 15])
  const parallaxBgX = useTransform(smoothX, [-0.5, 0.5], [-30, 30])
  const parallaxBgY = useTransform(smoothY, [-0.5, 0.5], [-30, 30])

  useEffect(() => {
    setIsMounted(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const x = e.clientX / innerWidth - 0.5
      const y = e.clientY / innerHeight - 0.5
      mouseX.set(x)
      mouseY.set(y)
    }
    
    // Only add listener on desktop
    if (window.matchMedia("(min-width: 768px)").matches) {
      window.addEventListener("mousemove", handleMouseMove)
    }
    
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const headingLines = [
    "Building software that scales,",
    "performs, and feels",
    "effortless to use."
  ]

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background with parallax */}
      <motion.div 
        style={{ x: parallaxBgX, y: parallaxBgY }}
        className="absolute inset-0 -z-20 hidden md:block"
      >
        <div className="absolute top-1/4 -left-1/4 w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-1/4 -right-1/4 w-[50%] h-[50%] bg-accent/20 blur-[120px] rounded-full mix-blend-screen" />
        {/* Very subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </motion.div>
      
      {/* Mobile background (no parallax) */}
      <div className="absolute inset-0 -z-20 md:hidden">
        <div className="absolute top-1/4 -left-1/4 w-[70%] h-[70%] bg-primary/10 blur-[80px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-1/4 -right-1/4 w-[70%] h-[70%] bg-accent/10 blur-[80px] rounded-full mix-blend-screen" />
      </div>

      <Container className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-12 pb-24">
        
        {/* Left Column: Text & CTA */}
        <motion.div 
          style={{ x: parallaxX, y: parallaxY }}
          className="flex flex-col items-start"
        >
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-glass bg-surface-glass mb-8"
          >
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
              className="w-2 h-2 rounded-full bg-success"
            />
            <span className="text-xs font-medium text-text-secondary">
              Available for exciting opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-[1.1] tracking-tight mb-6">
            {headingLines.map((line, index) => (
              <span key={index} className="block overflow-hidden pb-1">
                <motion.span
                  initial={{ y: 24, opacity: 0, filter: "blur(8px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.7, delay: 0.3 + index * 0.12 }}
                  className="block"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-lg md:text-xl text-text-secondary max-w-[480px] mb-8 leading-relaxed"
          >
            Software Engineer specializing in mobile product engineering, scalable architecture, and exceptional user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.9 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <Button size="lg" className="bg-gradient-to-r from-primary to-[#6d4aff] hover:to-primary hover:shadow-[0_0_20px_rgba(124,92,255,0.4)] transition-all duration-300">
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="glass hover:bg-surface-glass/80 transition-all duration-300">
              Download Resume
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-6 md:gap-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 + i * 0.1 }}
                className="flex flex-col"
              >
                <div className="font-heading font-bold text-2xl md:text-3xl text-foreground">
                  {/* Simplistic counter presentation for now, could be animated fully later */}
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-xs md:text-sm text-text-muted mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>

        {/* Right Column: Device Showcase */}
        <div className="mt-12 lg:mt-0 flex justify-center lg:justify-end">
          <DeviceShowcase />
        </div>

      </Container>

      {/* Social Links (Absolute Left/Bottom depending on design) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-4 md:left-8 flex flex-col gap-4 hidden md:flex"
      >
        <Link href="https://github.com/akashsiddhpura" target="_blank" className="p-2 text-text-muted hover:text-foreground hover:scale-110 hover:-rotate-2 transition-all">
          <GithubIcon className="w-5 h-5" />
        </Link>
        <Link href="https://linkedin.com" target="_blank" className="p-2 text-text-muted hover:text-foreground hover:scale-110 hover:-rotate-2 transition-all">
          <LinkedinIcon className="w-5 h-5" />
        </Link>
        <Link href="mailto:contact@example.com" className="p-2 text-text-muted hover:text-foreground hover:scale-110 hover:-rotate-2 transition-all">
          <Mail className="w-5 h-5" />
        </Link>
        <Link href="/resume.pdf" target="_blank" className="p-2 text-text-muted hover:text-foreground hover:scale-110 hover:-rotate-2 transition-all">
          <FileText className="w-5 h-5" />
        </Link>
        {/* Subtle vertical line */}
        <div className="w-[1px] h-12 bg-border-glass mx-auto mt-2" />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-text-muted" />
        </motion.div>
      </motion.div>

    </section>
  )
}
