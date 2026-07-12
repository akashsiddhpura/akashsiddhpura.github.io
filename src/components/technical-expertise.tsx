"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Container, Section } from "./ui/container"
import { Smartphone, Layers, Server, Zap, Lightbulb, PenTool } from "lucide-react"

const expertiseDomains = [
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Engineering",
    description: "Building production-ready cross-platform applications with a focus on performance, maintainability, and user experience.",
    technologies: ["Flutter", "Dart", "Android", "iOS"]
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Architecture",
    description: "Designing scalable application structures that simplify development and future growth.",
    technologies: ["Clean Architecture", "BLoC", "Repository Pattern", "Dependency Injection", "SOLID Principles"]
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Backend Integration",
    description: "Building reliable communication between applications and backend services.",
    technologies: ["REST APIs", "WebSocket", "Authentication", "AWS S3", "Firebase"]
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Performance",
    description: "Creating smooth user experiences through optimization and efficient rendering.",
    technologies: ["Image Caching", "Video Caching", "State Optimization", "Pagination", "Lazy Loading", "Memory Management"]
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Product Development",
    description: "Turning product ideas into production software.",
    technologies: ["UX", "Problem Solving", "Feature Planning", "Product Thinking", "Scalable Components"]
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "Tooling",
    description: "Daily development workflow.",
    technologies: ["Git", "GitHub", "VS Code", "Android Studio", "Xcode", "Postman", "Figma"]
  }
]

const currentLearning = [
  "Next.js", "AI Engineering", "IoT", "Cloud Architecture", "System Design"
]

export function TechnicalExpertise() {
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
    <Section ref={ref} id="expertise" className="relative z-10 py-24 bg-background">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-text-muted uppercase mb-4 block">
              Technical Expertise
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Building reliable products through modern engineering.
            </h2>
            <div className="text-lg text-text-secondary leading-relaxed space-y-4">
              <p>
                Technology changes quickly, but engineering principles remain constant. Over the years I&apos;ve focused on building scalable, maintainable, and user-focused applications using modern tools and proven architectural patterns.
              </p>
              <p>
                Rather than chasing every new framework, I invest in understanding the technologies that help build better products.
              </p>
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {expertiseDomains.map((domain, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group p-8 rounded-[24px] glass border-border-subtle hover:border-primary/50 hover:shadow-[0_0_30px_rgba(124,92,255,0.08)] transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-surface-elevated flex items-center justify-center text-text-secondary group-hover:text-primary group-hover:bg-primary/10 transition-colors duration-300 mb-6">
                  {domain.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {domain.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6 flex-grow">
                  {domain.description}
                </p>
                
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {domain.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-surface-elevated text-text-primary border border-border-glass">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Current Learning */}
          <motion.div variants={itemVariants} className="text-center p-8 rounded-[24px] border border-border-subtle bg-surface-elevated/30">
            <h3 className="text-sm font-mono font-bold text-text-muted uppercase tracking-wider mb-6">
              Current Learning & Exploration
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {currentLearning.map((learning, i) => (
                <span key={i} className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                  {learning}
                </span>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </Container>
    </Section>
  )
}
