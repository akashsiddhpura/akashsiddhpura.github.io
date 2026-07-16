"use client"

import { Container, Section } from "./ui/container"
import { SectionHeader } from "./section-header"
import { Reveal, Stagger, StaggerItem } from "./motion/reveal"

const achievements = [
  {
    title: "Led major product modules",
    description:
      "Designed and delivered complex production features including community feeds, memberships, payments, and media-heavy experiences.",
  },
  {
    title: "Improved existing architecture",
    description:
      "Refactored and expanded application architecture to improve scalability, maintainability, and long-term product growth.",
  },
  {
    title: "Built performance-focused experiences",
    description:
      "Implemented media caching, optimized rendering, reduced unnecessary rebuilds, and created smoother experiences across production apps.",
  },
  {
    title: "Mentored developers",
    description:
      "Supported junior developers through code reviews, architectural guidance, and collaborative problem-solving.",
  },
  {
    title: "Expanded beyond mobile",
    description:
      "Began contributing to web development using Next.js while continuing to strengthen product engineering skills beyond Flutter.",
  },
  {
    title: "Product thinking",
    description:
      "Shifted focus from feature implementation to understanding business goals, user behavior, and long-term product quality.",
  },
]

export function Achievements() {
  return (
    <Section id="achievements">
      <Container>
        <Reveal>
          <SectionHeader
            label="Achievements"
            title="Growth measured through products, not titles."
            description={[
              "Every project has taught me something different. Some improved my technical skills. Others changed how I think about products, architecture, collaboration, and user experience.",
              "These milestones represent the moments that have had the greatest impact on my growth as an engineer.",
            ]}
          />
        </Reveal>

        <Stagger className="grid gap-6 md:grid-cols-2">
          {achievements.map((item, index) => (
            <StaggerItem
              key={item.title}
              className="rounded-2xl border border-border-subtle bg-surface/30 p-6 transition-colors hover:border-border-glass md:p-8"
            >
              <span className="font-mono text-xs text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-heading text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
                {item.description}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  )
}
