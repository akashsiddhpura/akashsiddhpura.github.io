"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Container, Section } from "./ui/container"
import { Target, Layers, Zap, Users, Code, Lightbulb } from "lucide-react"

const achievements = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Led Major Product Modules",
    description: "Designed and delivered complex production features including community feeds, memberships, payments, and media-heavy experiences."
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Improved Existing Architecture",
    description: "Refactored and expanded existing application architecture to improve scalability, maintainability, and long-term product growth."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Built Performance-Focused Experiences",
    description: "Implemented media caching, optimized rendering, reduced unnecessary rebuilds, and created smoother user experiences across multiple production applications."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Mentored Developers",
    description: "Supported junior developers through code reviews, architectural guidance, and collaborative problem-solving while helping maintain engineering quality."
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Expanded Beyond Mobile",
    description: "Began contributing to web development using Next.js while continuing to strengthen product engineering skills beyond Flutter."
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Product Thinking",
    description: "Shifted focus from feature implementation to understanding business goals, user behavior, and long-term product quality."
  }
]

export function Achievements() {
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
    <Section ref={ref} id="achievements" className="relative z-10 py-24 bg-background">
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
              Achievements
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Growth measured through products, not titles.
            </h2>
            <div className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto space-y-4">
              <p>
                Every project has taught me something different. Some improved my technical skills. Others changed how I think about products, architecture, collaboration, and user experience.
              </p>
              <p>
                These milestones represent the moments that have had the greatest impact on my growth as an engineer.
              </p>
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group p-8 rounded-[24px] glass border-border-subtle hover:border-primary/50 hover:shadow-[0_0_30px_rgba(124,92,255,0.08)] transition-all duration-300 flex items-start gap-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-surface-elevated flex-shrink-0 flex items-center justify-center text-text-secondary group-hover:text-primary group-hover:bg-primary/10 transition-colors duration-300">
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-base">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </Container>
    </Section>
  )
}
