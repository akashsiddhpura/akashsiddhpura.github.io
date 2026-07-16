"use client"

import { Container, Section } from "./ui/container"
import { Stagger, StaggerItem } from "./motion/reveal"

const stats = [
  { value: "5+", label: "Years building products" },
  { value: "10+", label: "Production applications" },
  { value: "500K+", label: "Combined downloads" },
  { value: "4+", label: "Industries shipped in" },
]

const highlights = [
  "Real-Time Messaging",
  "Clean Architecture",
  "High-Performance UI",
  "Intelligent Caching",
  "Product Architecture",
  "Cross Platform",
  "Payment Integration",
  "Performance Optimization",
]

export function TrustIndicators() {
  return (
    <Section id="trust" className="!py-16 md:!py-20">
      <Container>
        <Stagger className="flex flex-col gap-12">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {stats.map((stat) => (
              <StaggerItem
                key={stat.label}
                className="rounded-2xl border border-border-subtle bg-surface/50 px-5 py-6"
              >
                <div className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-text-secondary">{stat.label}</div>
              </StaggerItem>
            ))}
          </div>

          <StaggerItem className="flex flex-wrap gap-2 md:gap-3">
            {highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full border border-border-subtle bg-surface/40 px-3.5 py-1.5 text-sm text-text-secondary"
              >
                {highlight}
              </span>
            ))}
          </StaggerItem>

          <StaggerItem>
            <p className="max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
              Every number represents production experience, real users, and
              engineering decisions made to solve real business problems.
            </p>
          </StaggerItem>
        </Stagger>
      </Container>
    </Section>
  )
}
