"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Container, Section } from "./ui/container"
import { Button } from "./ui/button"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

const projects = [
  {
    name: "Sulok",
    slug: "sulok",
    industry: "Community Platform",
    role: "Senior Mobile Developer",
    duration: "2 Years",
    status: "Production",
    description: "SULOK is a modern social community platform designed to connect users through discussions, communities, events, messaging, and rich media sharing.",
    highlights: [
      "Feed Architecture",
      "Performance Optimization",
      "Membership & Payments",
      "Media Caching"
    ],
    tech: ["Flutter", "BLoC", "REST API", "AWS S3", "WebSocket", "Caching", "Firebase"],
    image: "/images/blog-2.jpg" // Using placeholder since sulok directory doesn't exist
  },
  {
    name: "Alpha Tribe",
    slug: "alpha-tribe",
    industry: "FinTech / Stock Market Platform",
    role: "Flutter Developer",
    duration: "1 Year",
    status: "Production",
    description: "Alpha Tribe is a real-time stock market platform providing live market updates, company insights, and financial data.",
    highlights: [
      "Real-time Data Sync",
      "WebSocket Integration",
      "Optimized State Management",
      "Low-Latency UI"
    ],
    tech: ["Flutter", "WebSocket", "BLoC", "REST API", "Firebase"],
    image: "/img/portfolio/alpha-tribe/1.png"
  },
  {
    name: "Vignanam",
    slug: "vignanam",
    industry: "Digital Spiritual Platform",
    role: "Mobile Engineer",
    duration: "Production",
    status: "Live",
    description: "A multilingual digital platform delivering scriptures, devotional content, and spiritual resources to users across India. Supporting millions of content interactions.",
    highlights: [
      "Offline Architecture",
      "Large Datasets",
      "Multilingual Support",
      "Storage Optimization"
    ],
    tech: ["Flutter", "SQLite", "Firebase", "REST API", "Caching"],
    image: "/img/portfolio/vignanam/1.jpg"
  },
  {
    name: "Quoodo",
    slug: "quoodo",
    industry: "Marketplace Platform",
    role: "Mobile Architect",
    duration: "Production",
    status: "Live",
    description: "A B2B and B2C marketplace connecting suppliers and buyers through a scalable procurement platform with complex product catalogues.",
    highlights: [
      "Complex Catalogues",
      "Search Performance",
      "Payment Flow",
      "Supplier Management"
    ],
    tech: ["Flutter", "REST API", "State Management", "Firebase"],
    image: "/img/portfolio/quoodo/1.png"
  }
]

export function FeaturedProjects() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <Section ref={ref} id="projects" className="relative z-10 py-24 bg-background">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-text-muted uppercase mb-4 block">
            Featured Projects
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 max-w-2xl">
            Products I&apos;ve Helped Bring to Life.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
            From community platforms and financial products to content-driven applications and business tools, each one challenged me to think beyond implementation and focus on architecture, performance, and user experience.
          </p>
        </motion.div>

        <div className="flex flex-col gap-32">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0

            return (
              <ProjectCard key={idx} project={project} isEven={isEven} index={idx} />
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

function ProjectCard({ project, isEven, index }: { project: any, isEven: boolean, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isCardInView = useInView(cardRef, { once: true, margin: "-20%" })

  const contentOrder = isEven ? "lg:order-1" : "lg:order-2"
  const visualOrder = isEven ? "lg:order-2" : "lg:order-1"

  return (
    <div ref={cardRef} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[70vh]">
      
      {/* Content Section */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        animate={isCardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -40 : 40 }}
        transition={{ duration: 0.8 }}
        className={cn("flex flex-col", contentOrder)}
      >
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-text-muted uppercase tracking-wider mb-6">
          <span className="text-primary font-bold">{project.industry}</span>
          <span>•</span>
          <span>{project.role}</span>
        </div>

        <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
          {project.name}
        </h3>

        <p className="text-lg text-text-secondary leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
          {project.highlights.map((highlight: string, i: number) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-success mt-1">✓</span>
              <span className="text-text-primary font-medium">{highlight}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.tech.map((t: string, i: number) => (
            <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-surface-elevated text-text-secondary border border-border-glass">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto">
          <Link href={`/projects/${project.slug}`} className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-foreground text-background hover:bg-foreground/90 transition-all font-medium">
            View Case Study
          </Link>
        </div>
      </motion.div>

      {/* Visual Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
        animate={isCardInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : { opacity: 0, scale: 0.95, filter: "blur(10px)" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={cn("relative w-full aspect-[4/3] lg:aspect-square rounded-[32px] overflow-hidden glass group", visualOrder)}
      >
        {/* Very subtle glow effect that appears on hover */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 z-10 mix-blend-overlay pointer-events-none" />
        
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full relative"
        >
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </motion.div>

    </div>
  )
}
