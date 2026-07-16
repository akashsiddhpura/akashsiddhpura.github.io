"use client"

import { Container, Section } from "./ui/container"
import { SectionHeader } from "./section-header"
import { Reveal, Stagger, StaggerItem } from "./motion/reveal"

const philosophies = [
  {
    title: "Solve Problems First",
    description:
      "I start by understanding the business problem before choosing technologies or writing code. Technology should support the solution—not define it.",
  },
  {
    title: "Build for Scale",
    description:
      "I design features with future growth in mind. Clear architecture and reusable components make products easier to maintain and expand.",
  },
  {
    title: "Performance Matters",
    description:
      "Users should never feel the technology behind the product. Fast interactions, smooth scrolling, and responsive interfaces are essential.",
  },
  {
    title: "User Experience is Engineering",
    description:
      "Animations, loading states, navigation, and responsiveness are engineering responsibilities—not finishing touches.",
  },
  {
    title: "Every Challenge Has a Solution",
    description:
      "Complex problems motivate me. I enjoy researching, experimenting, and refining ideas until the solution is reliable and elegant.",
  },
  {
    title: "Never Stop Improving",
    description:
      "Every project teaches something new. I continuously refine code, architecture, and process with every release.",
  },
]

export function EngineeringPhilosophy() {
  return (
    <Section id="philosophy" className="border-y border-border-subtle/60 bg-surface/20">
      <Container>
        <Reveal>
          <SectionHeader
            label="Engineering Philosophy"
            title="The principles behind every product I build."
            description={[
              "Every project presents a different challenge, but my approach remains consistent: understand the business problem, design scalable solutions, and deliver experiences that feel fast and reliable.",
              "Great engineering is measured by the experience users have—not by the complexity hidden behind the code.",
            ]}
          />
        </Reveal>

        <Stagger className="grid gap-0 md:grid-cols-2">
          {philosophies.map((philosophy, index) => (
            <StaggerItem
              key={philosophy.title}
              className="group border-t border-border-subtle py-8 pr-0 transition-colors md:odd:pr-10 md:even:pl-10 md:even:border-l"
            >
              <div className="mb-3 flex items-baseline gap-4">
                <span className="font-mono text-xs text-primary/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                  {philosophy.title}
                </h3>
              </div>
              <p className="pl-10 text-base leading-relaxed text-text-secondary">
                {philosophy.description}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  )
}
