"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Container, Section } from "./ui/container"
import { Puzzle, Layers, Zap, Sparkles, Book, Rocket } from "lucide-react"

const philosophies = [
  {
    icon: <Puzzle className="w-6 h-6" />,
    title: "Solve Problems First",
    description: "I start by understanding the business problem before choosing technologies or writing code. Technology should support the solution—not define it."
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Build for Scale",
    description: "I design features with future growth in mind. Clear architecture and reusable components make products easier to maintain and expand."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Performance Matters",
    description: "Users should never feel the technology behind the product. Fast interactions, smooth scrolling, and responsive interfaces are essential parts of the experience."
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "User Experience is Engineering",
    description: "Animations, loading states, navigation, and responsiveness are engineering responsibilities—not finishing touches. A great product feels effortless because of thoughtful implementation."
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Every Challenge Has a Solution",
    description: "Complex problems motivate me. I enjoy researching, experimenting, and refining ideas until I find solutions that are reliable, maintainable, and elegant."
  },
  {
    icon: <Book className="w-6 h-6" />,
    title: "Never Stop Improving",
    description: "Every project teaches something new. I continuously refine my code, architecture, and development process to build better products with every release."
  }
]

export function EngineeringPhilosophy() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    }
  }

  return (
    <Section ref={ref} id="philosophy" className="relative z-10 py-24">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-text-muted uppercase mb-4 block">
              Engineering Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              The principles behind every product I build.
            </h2>
            <div className="text-lg text-text-secondary leading-relaxed space-y-4">
              <p>
                Every project presents a different challenge, but my approach remains consistent. I focus on understanding the business problem, designing scalable solutions, and delivering experiences that feel fast, intuitive, and reliable.
              </p>
              <p>
                For me, great engineering is measured by the experience users have—not by the complexity hidden behind the code.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {philosophies.map((philosophy, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group p-8 rounded-[24px] glass border-border-subtle hover:border-primary/50 hover:shadow-[0_0_30px_rgba(124,92,255,0.1)] transition-all duration-300 flex flex-col gap-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-surface-elevated flex items-center justify-center text-text-secondary group-hover:text-primary group-hover:bg-primary/10 transition-colors duration-300">
                  {philosophy.icon}
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    {philosophy.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {philosophy.description}
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
