"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Container, Section } from "./ui/container"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Mail, FileText } from "lucide-react"
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

export function Contact() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, send data to backend here.
    setIsSubmitted(true)
  }

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
    <Section ref={ref} id="contact" className="relative z-10 py-32 bg-background border-t border-border-subtle">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-text-muted uppercase mb-4 block">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Let&apos;s build something meaningful together.
            </h2>
            <div className="text-lg text-text-secondary leading-relaxed max-w-2xl space-y-4">
              <p>
                Whether you&apos;re building a startup, improving an existing product, or looking for an engineer who enjoys solving challenging problems, I&apos;d love to hear about it.
              </p>
              <p>
                I&apos;m always interested in meaningful conversations, ambitious ideas, and opportunities to build products that make a difference.
              </p>
            </div>
          </motion.div>

          {/* Grid Layout */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left Column: Info */}
            <motion.div variants={itemVariants} className="lg:col-span-5 space-y-10">
              
              {/* Availability */}
              <div className="p-8 rounded-[24px] glass border-border-subtle">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border-glass">
                  <span className="w-3 h-3 rounded-full bg-success animate-pulse" />
                  <span className="font-heading font-bold text-foreground text-lg">Available for</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="text-text-secondary">• Remote Opportunities</li>
                  <li className="text-text-secondary">• Startup Teams</li>
                  <li className="text-text-secondary">• Freelance Projects</li>
                  <li className="text-text-secondary">• Product Consulting</li>
                </ul>
                <div className="space-y-4 text-sm text-text-muted font-mono">
                  <div className="flex items-center gap-2">
                    <span>📍</span> <span>Surat, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🕒</span> <span>IST (UTC +5:30)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>💼</span> <span>Preferred: Remote, Hybrid</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4">Connect</h3>
                <div className="flex flex-col gap-3">
                  <Link href="mailto:aakash@example.com" className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors group">
                    <Mail className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
                    <span>Email</span>
                  </Link>
                  <Link href="https://linkedin.com" target="_blank" className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors group">
                    <LinkedinIcon className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
                    <span>LinkedIn</span>
                  </Link>
                  <Link href="https://github.com" target="_blank" className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors group">
                    <GithubIcon className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
                    <span>GitHub</span>
                  </Link>
                  <Link href="/resume.pdf" target="_blank" className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors group">
                    <FileText className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
                    <span>Resume</span>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div variants={itemVariants} className="lg:col-span-7">
              {isSubmitted ? (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center p-8 rounded-[24px] glass border-success/30 text-center">
                  <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center text-success mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-foreground mb-4">Thank you!</h3>
                  <p className="text-text-secondary text-lg">
                    I&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 rounded-[24px] glass border-border-subtle space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-text-primary">Name</label>
                      <Input id="name" required placeholder="John Doe" className="bg-surface-elevated/50 border-border-glass focus:border-primary/50" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-text-primary">Email</label>
                      <Input id="email" type="email" required placeholder="john@company.com" className="bg-surface-elevated/50 border-border-glass focus:border-primary/50" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="project" className="text-sm font-medium text-text-primary">Project / Company</label>
                    <Input id="project" placeholder="What are you building?" className="bg-surface-elevated/50 border-border-glass focus:border-primary/50" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-text-primary">Message</label>
                    <Textarea id="message" required placeholder="Tell me about your project..." className="min-h-[150px] bg-surface-elevated/50 border-border-glass focus:border-primary/50 resize-y" />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-medium text-lg">
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
