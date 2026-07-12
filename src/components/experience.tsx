"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Container, Section } from "./ui/container"
import { cn } from "@/lib/utils"

type ExperienceItem = {
  company: string
  role: string
  duration: string
  overview: string
  growth?: string[]
  contributions?: string[]
  challenge?: string
  impact?: string[] | string
  takeaway: string
  technologies?: string[]
}

const experiences: ExperienceItem[] = [
  {
    company: "SULOK INC.",
    role: "Senior Flutter Engineer",
    duration: "2024 – Present",
    overview: "At SULOK, I focus on architecting scalable mobile applications that support real-world users. My responsibilities extend beyond feature development into designing application architecture, optimizing performance, building real-time communication systems, and delivering premium user experiences.",
    contributions: [
      "Designed scalable application architecture.",
      "Built production-grade feed system.",
      "Engineered intelligent caching strategy.",
      "Developed high-performance real-time messaging.",
      "Integrated payment infrastructure.",
      "Improved media loading experience.",
      "Optimized scrolling performance."
    ],
    challenge: "One of the most challenging implementations involved designing a social feed capable of synchronizing cached and live API data without UI blinking or scroll position changes. The solution required intelligent merge algorithms, optimized caching, and smooth rendering strategies to create a premium user experience.",
    impact: [
      "Improved application responsiveness.",
      "Reduced waiting time for media loading.",
      "Enhanced scrolling performance.",
      "Delivered production-quality social interactions.",
      "Supported product scalability."
    ],
    technologies: ["Flutter", "Dart", "BLoC", "REST APIs", "Clean Architecture", "Sockets"],
    takeaway: "Great user experiences are built through countless engineering decisions users never notice."
  },
  {
    company: "Freelance",
    role: "Mobile Product Engineer",
    duration: "2023",
    overview: "Working directly with founders and businesses gave me a completely different perspective on software development. Beyond writing code, I became responsible for understanding product requirements, making architectural decisions, communicating directly with clients, and delivering complete production-ready solutions.",
    growth: [
      "Product Ownership",
      "Client Communication",
      "Startup Thinking",
      "Payment Integration",
      "Firebase",
      "Product Planning",
      "Delivery Management"
    ],
    technologies: ["Flutter", "Firebase", "Stripe", "Next.js"],
    takeaway: "Understanding business problems is just as important as solving technical ones."
  },
  {
    company: "Weapplinse Technology",
    role: "Flutter Developer",
    duration: "2022",
    overview: "This role marked the transition from implementing features to building production-ready applications. I worked on multiple products while improving application performance, collaborating closely with backend teams, and contributing to scalable application architecture.",
    growth: [
      "Performance Optimization",
      "Architecture",
      "State Management",
      "API Integration",
      "Team Collaboration",
      "Mentoring"
    ],
    impact: "Built production applications used by thousands of users while improving development quality and reducing technical complexity.",
    technologies: ["Flutter", "Provider", "GetX", "REST APIs"],
    takeaway: "Scalable architecture creates long-term development speed."
  },
  {
    company: "SAT Technolab",
    role: "Junior Flutter Developer",
    duration: "2021",
    overview: "My professional journey began by learning how production software is built. During this period, I focused on understanding Flutter fundamentals, responsive UI development, debugging, collaboration, and engineering best practices. This experience built the foundation for everything that followed.",
    growth: [
      "Responsive UI Development",
      "Debugging",
      "Code Reviews",
      "Flutter Best Practices",
      "Team Collaboration"
    ],
    technologies: ["Flutter", "Dart", "Git"],
    takeaway: "Strong foundations create better engineers."
  }
]

export function Experience() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <Section ref={ref} id="experience" className="relative z-10 py-24 bg-background">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-xs font-mono font-bold tracking-widest text-text-muted uppercase mb-4 block">
              Experience
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Building products, solving problems, and growing with every challenge.
            </h2>
            <div className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto space-y-4">
              <p>
                My journey has never been about collecting job titles. It has been about taking greater ownership, solving more complex problems, and building products that create real value for users and businesses.
              </p>
              <p>
                Each role has expanded not only my technical expertise but also my understanding of architecture, collaboration, and product thinking.
              </p>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <motion.div 
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-border-glass -translate-x-1/2"
            />

            <div className="space-y-16">
              {experiences.map((exp, idx) => {
                const isEven = idx % 2 === 0
                return (
                  <div key={idx} className="relative flex flex-col md:flex-row items-center md:justify-between w-full">
                    
                    {/* Timeline Node */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-2 border-primary bg-background -translate-x-1/2 z-10 mt-8 md:mt-0 shadow-[0_0_10px_rgba(124,92,255,0.4)]" />

                    {/* Content Card */}
                    <motion.div 
                      initial={{ opacity: 0, y: 24, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, y: 0, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      whileHover={{ y: -4 }}
                      className={cn(
                        "w-full md:w-[45%] pl-12 md:pl-0 pt-6 md:pt-0 group",
                        !isEven && "md:ml-auto"
                      )}
                    >
                      <div className="p-6 md:p-8 rounded-[24px] glass border-border-subtle hover:border-primary/40 transition-colors duration-300">
                        <div className="flex flex-col gap-1 mb-4">
                          <span className="text-sm font-mono text-primary font-medium">{exp.duration}</span>
                          <h3 className="text-2xl font-heading font-bold text-foreground">{exp.role}</h3>
                          <span className="text-lg text-text-secondary">{exp.company}</span>
                        </div>
                        
                        <p className="text-text-secondary leading-relaxed mb-6">
                          {exp.overview}
                        </p>

                        {(exp.contributions || exp.growth) && (
                          <div className="mb-6">
                            <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">
                              {exp.contributions ? "Key Contributions" : "Engineering Growth"}
                            </h4>
                            <ul className="space-y-2">
                              {(exp.contributions || exp.growth)?.map((item, i) => (
                                <li key={i} className="text-sm text-text-secondary flex gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {exp.challenge && (
                          <div className="mb-6 p-4 rounded-xl bg-surface-elevated/30 border border-border-subtle">
                            <h4 className="text-sm font-bold text-foreground mb-2">Engineering Challenge</h4>
                            <p className="text-sm text-text-muted leading-relaxed">{exp.challenge}</p>
                          </div>
                        )}

                        {exp.impact && (
                          <div className="mb-6">
                            <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">Business Impact</h4>
                            {Array.isArray(exp.impact) ? (
                              <ul className="space-y-2">
                                {exp.impact.map((item, i) => (
                                  <li key={i} className="text-sm text-text-secondary flex gap-2">
                                    <span className="text-success mt-1">✓</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-sm text-text-secondary">{exp.impact}</p>
                            )}
                          </div>
                        )}

                        {exp.technologies && (
                          <div className="mb-6 flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-surface-elevated text-text-primary border border-border-glass">
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="pt-4 border-t border-border-glass mt-auto">
                          <p className="text-sm font-medium text-primary italic">
                            &quot;{exp.takeaway}&quot;
                          </p>
                        </div>
                      </div>
                    </motion.div>

                  </div>
                )
              })}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-20 pt-10 border-t border-border-glass"
          >
            <p className="text-xl font-heading text-text-secondary max-w-2xl mx-auto">
              Looking back, every role has contributed to the engineer I am today. My goal remains the same: <span className="text-foreground font-medium">Build products that users love, businesses trust, and engineering teams enjoy maintaining.</span>
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
