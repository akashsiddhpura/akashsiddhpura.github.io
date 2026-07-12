"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Container, Section } from "./ui/container"
import { ProjectData, projects } from "@/data/projects"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"

interface CaseStudyLayoutProps {
  project: ProjectData
}

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function CaseStudyLayout({ project }: CaseStudyLayoutProps) {
  // Find next/prev projects
  const currentIndex = projects.findIndex(p => p.slug === project.slug)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <div className="bg-background min-h-screen pt-24 pb-32">
      <Container>
        <div className="max-w-4xl mx-auto">
          
          {/* Back Navigation */}
          <FadeIn>
            <Link href="/" className="inline-flex items-center gap-2 text-text-muted hover:text-foreground transition-colors mb-12">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Portfolio</span>
            </Link>
          </FadeIn>

          {/* Hero Header */}
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              {project.name}
            </h1>
          </FadeIn>

          {/* Meta Grid */}
          <FadeIn delay={0.2} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 py-8 border-y border-border-subtle">
            <div>
              <p className="text-xs font-mono text-text-muted uppercase mb-1">Industry</p>
              <p className="text-sm font-medium text-text-primary">{project.industry}</p>
            </div>
            <div>
              <p className="text-xs font-mono text-text-muted uppercase mb-1">Role</p>
              <p className="text-sm font-medium text-text-primary">{project.role}</p>
            </div>
            <div>
              <p className="text-xs font-mono text-text-muted uppercase mb-1">Platform</p>
              <p className="text-sm font-medium text-text-primary">{project.platform}</p>
            </div>
            <div>
              <p className="text-xs font-mono text-text-muted uppercase mb-1">Duration / Status</p>
              <p className="text-sm font-medium text-text-primary">{project.duration} • {project.status}</p>
            </div>
          </FadeIn>

          {/* Hero Image (Placeholder logic) */}
          <FadeIn delay={0.3} className="aspect-[16/9] w-full rounded-[24px] bg-surface-elevated border border-border-glass mb-24 overflow-hidden relative group">
            {/* Using a placeholder gradient since real images might not exist, but adding next/image just in case */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
            <div className="absolute inset-0 flex items-center justify-center text-text-muted font-heading font-medium text-xl opacity-50 group-hover:opacity-100 transition-opacity">
              [ {project.name} Hero Mockup ]
            </div>
          </FadeIn>

          {/* Content Sections */}
          <div className="space-y-24">
            
            {/* Overview */}
            <FadeIn>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Project Overview</h2>
              <div className="text-lg text-text-secondary leading-relaxed space-y-4 whitespace-pre-wrap">
                {project.overview}
              </div>
            </FadeIn>

            {/* Vision */}
            <FadeIn>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Product Vision</h2>
              <div className="text-lg text-text-secondary leading-relaxed space-y-4 whitespace-pre-wrap">
                {project.vision}
              </div>
            </FadeIn>

            {/* Responsibilities & Impact Grid */}
            <div className="grid md:grid-cols-2 gap-12">
              <FadeIn>
                <h3 className="text-xl font-heading font-bold text-foreground mb-6">My Responsibilities</h3>
                <ul className="space-y-3">
                  {project.responsibilities.map((item, i) => (
                    <li key={i} className="flex gap-3 text-text-secondary">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
              
              <FadeIn>
                <h3 className="text-xl font-heading font-bold text-foreground mb-6">Business Impact</h3>
                <ul className="space-y-3">
                  {project.businessImpact.map((item, i) => (
                    <li key={i} className="flex gap-3 text-text-secondary">
                      <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            {/* Engineering Challenges */}
            <FadeIn>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-8">Engineering Challenges</h2>
              <div className="space-y-8">
                {project.challenges.map((challenge, i) => (
                  <div key={i} className="p-8 rounded-[24px] glass border-border-subtle">
                    <h4 className="text-lg font-bold text-foreground mb-3">{challenge.title}</h4>
                    <p className="text-text-secondary leading-relaxed">{challenge.description}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Optimizations & UX Grid */}
            <div className="grid md:grid-cols-2 gap-12">
              <FadeIn>
                <h3 className="text-xl font-heading font-bold text-foreground mb-6">Performance Optimizations</h3>
                <ul className="space-y-3 list-disc pl-5 text-text-secondary">
                  {project.optimizations.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </FadeIn>
              
              <FadeIn>
                <h3 className="text-xl font-heading font-bold text-foreground mb-6">UX Improvements</h3>
                <ul className="space-y-3 list-disc pl-5 text-text-secondary">
                  {project.ux.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            {/* Tech Stack */}
            <FadeIn>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-8">Tech Stack</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {Object.entries(project.techStack).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">{category}</h4>
                    <ul className="space-y-2">
                      {items.map((item, i) => (
                        <li key={i} className="text-text-secondary text-sm">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Key Takeaways */}
            <FadeIn>
              <div className="p-10 rounded-[32px] bg-primary/5 border border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full mix-blend-screen translate-x-1/2 -translate-y-1/2" />
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6 relative z-10">Key Takeaway</h2>
                <p className="text-xl text-text-primary leading-relaxed font-medium relative z-10 italic">
                  "{project.keyTakeaways}"
                </p>
              </div>
            </FadeIn>

          </div>

          {/* Footer Navigation */}
          <div className="mt-32 pt-12 border-t border-border-glass flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="w-full md:w-auto text-left">
              {prevProject ? (
                <Link href={`/projects/${prevProject.slug}`} className="group flex flex-col gap-1">
                  <span className="text-xs font-mono uppercase text-text-muted">Previous</span>
                  <span className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> {prevProject.name}
                  </span>
                </Link>
              ) : (
                <div className="text-text-muted text-sm italic">First Project</div>
              )}
            </div>
            
            <Link href="/" className="px-6 py-2 rounded-full border border-border-subtle hover:border-foreground text-sm font-medium transition-colors">
              All Projects
            </Link>

            <div className="w-full md:w-auto text-right">
              {nextProject ? (
                <Link href={`/projects/${nextProject.slug}`} className="group flex flex-col gap-1 items-end">
                  <span className="text-xs font-mono uppercase text-text-muted">Next</span>
                  <span className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors flex items-center gap-2">
                    {nextProject.name} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ) : (
                <div className="text-text-muted text-sm italic">Last Project</div>
              )}
            </div>
          </div>

        </div>
      </Container>
    </div>
  )
}
