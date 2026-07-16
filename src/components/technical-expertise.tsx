"use client"

import { Container, Section } from "./ui/container"
import { SectionHeader } from "./section-header"
import { Reveal, Stagger, StaggerItem } from "./motion/reveal"

const expertiseDomains = [
  {
    title: "Mobile Engineering",
    description:
      "Production-ready cross-platform applications with a focus on performance, maintainability, and user experience.",
    technologies: ["Flutter", "Dart", "Android", "iOS"],
  },
  {
    title: "Architecture",
    description:
      "Scalable application structures that simplify development and future growth.",
    technologies: [
      "Clean Architecture",
      "BLoC",
      "Repository Pattern",
      "Dependency Injection",
      "SOLID",
    ],
  },
  {
    title: "Backend Integration",
    description: "Reliable communication between applications and backend services.",
    technologies: ["REST APIs", "WebSocket", "Authentication", "AWS S3", "Firebase"],
  },
  {
    title: "Performance",
    description: "Smooth experiences through optimization and efficient rendering.",
    technologies: [
      "Image Caching",
      "Video Caching",
      "State Optimization",
      "Pagination",
      "Lazy Loading",
    ],
  },
  {
    title: "Product Development",
    description: "Turning product ideas into production software.",
    technologies: ["UX", "Problem Solving", "Feature Planning", "Product Thinking"],
  },
  {
    title: "Tooling",
    description: "Daily development workflow.",
    technologies: ["Git", "GitHub", "VS Code", "Android Studio", "Postman", "Figma"],
  },
]

const currentLearning = ["Next.js", "AI Engineering", "IoT", "Cloud Architecture", "System Design"]

export function TechnicalExpertise() {
  return (
    <Section id="expertise" className="border-y border-border-subtle/60 bg-surface/15">
      <Container>
        <Reveal>
          <SectionHeader
            label="Technical Expertise"
            title="Depth across the stack that ships products."
            description="Skills shown as domains and tools—not progress bars. What matters is shipping reliable software under real constraints."
          />
        </Reveal>

        <Stagger className="divide-y divide-border-subtle border-y border-border-subtle">
          {expertiseDomains.map((domain) => (
            <StaggerItem
              key={domain.title}
              className="grid gap-4 py-8 md:grid-cols-12 md:items-start md:gap-8"
            >
              <div className="md:col-span-4">
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {domain.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted md:text-base">
                  {domain.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 md:col-span-8 md:justify-end md:pt-1">
                {domain.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border-subtle bg-background/40 px-3 py-1.5 text-sm text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-12">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
            Currently exploring
          </p>
          <div className="flex flex-wrap gap-2">
            {currentLearning.map((item) => (
              <span
                key={item}
                className="rounded-xl border border-primary/20 bg-primary/5 px-3.5 py-2 text-sm text-primary"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
