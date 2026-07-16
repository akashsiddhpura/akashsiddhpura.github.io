"use client"

import { Container, Section } from "./ui/container"
import { SectionHeader } from "./section-header"
import { Reveal, Stagger, StaggerItem } from "./motion/reveal"

const buildingItems = [
  {
    title: "Next.js & Modern Web",
    description:
      "Expanding beyond mobile by building fast, scalable web applications with React, Next.js, and modern frontend architecture.",
    status: "Currently Building",
  },
  {
    title: "AI-Powered Products",
    description:
      "Exploring how AI can enhance real-world products through intelligent workflows, automation, and better user experiences.",
    status: "Research & Prototyping",
  },
  {
    title: "System Design & Architecture",
    description:
      "Strengthening scalable system design, software architecture, and engineering decisions that support long-term product growth.",
    status: "Continuous Learning",
  },
]

export function CurrentlyBuilding() {
  return (
    <Section id="currently-building" className="!py-16 md:!py-24">
      <Container>
        <Reveal>
          <SectionHeader
            label="Currently Building"
            title="Always learning. Always building."
            description="Outside of production work, I continuously explore new technologies, product ideas, and engineering practices that challenge me."
            className="mb-10 md:mb-12"
          />
        </Reveal>

        <Stagger className="grid gap-4 md:grid-cols-3">
          {buildingItems.map((item) => (
            <StaggerItem
              key={item.title}
              className="rounded-2xl border border-border-subtle px-5 py-6 transition-colors hover:border-border-glass"
            >
              <span className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
                {item.status}
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {item.description}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  )
}
