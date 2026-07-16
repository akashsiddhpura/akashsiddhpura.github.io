"use client"

import Image from "next/image"
import { Container, Section } from "./ui/container"
import { SectionHeader } from "./section-header"
import { Reveal, Stagger, StaggerItem } from "./motion/reveal"

const principles = [
  {
    title: "Business Before Code",
    description: "I start by understanding the problem before choosing the technology.",
  },
  {
    title: "Architecture Matters",
    description: "Scalable foundations make products easier to grow and maintain.",
  },
  {
    title: "Performance Is a Feature",
    description: "Fast, responsive software creates trust and better user experiences.",
  },
  {
    title: "Never Stop Learning",
    description: "Every challenging project is an opportunity to become a better engineer.",
  },
]

const quickFacts = [
  { label: "Current Focus", value: "Building scalable mobile products." },
  { label: "Favourite Part", value: "Architecture & product engineering." },
  { label: "Dream Projects", value: "AI, IoT, and security-driven apps." },
  { label: "Current Mission", value: "Turning ambitious ideas into production software." },
]

export function About() {
  return (
    <Section id="about">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="sticky top-28 overflow-hidden rounded-[28px] border border-border-subtle bg-surface">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/my-avatar.png"
                  alt="Aakash Siddhpura - Software Engineer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10151c]/80 via-[#10151c]/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-heading text-xl font-semibold text-white">
                    Aakash Siddhpura
                  </p>
                  <p className="mt-1 text-sm text-white/75">
                    Software Engineer · Surat, India
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeader
                label="About"
                title="More than writing code, I enjoy building products that make a difference."
                className="mb-10 md:mb-12"
              />
            </Reveal>

            <Reveal delay={0.08} className="space-y-5 text-lg leading-relaxed text-text-secondary">
              <p>
                My journey into software engineering started with curiosity. As a child,
                I was always fascinated by technology and wanted to understand how
                applications worked behind the scenes. That curiosity eventually became
                a passion for building software instead of simply using it.
              </p>
              <p>
                Today, I focus on building digital products that solve meaningful problems
                through thoughtful engineering, scalable architecture, and exceptional
                user experiences.
              </p>
              <p>
                Whether I&apos;m architecting a real-time messaging system, optimizing
                application performance, or refining micro-interactions, my goal remains
                the same:{" "}
                <span className="font-medium text-foreground">
                  build software that feels effortless for users and reliable for businesses.
                </span>
              </p>
            </Reveal>

            <Stagger className="mt-14 grid gap-4 sm:grid-cols-2">
              {principles.map((principle) => (
                <StaggerItem
                  key={principle.title}
                  className="rounded-2xl border border-border-subtle bg-surface/40 p-5 transition-colors hover:border-border-glass"
                >
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {principle.description}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.1} className="mt-10 grid gap-3 sm:grid-cols-2">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-xl border border-border-subtle/80 px-4 py-4"
                >
                  <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted">
                    {fact.label}
                  </span>
                  <span className="text-sm font-medium text-foreground">{fact.value}</span>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.12} className="mt-12 border-t border-border-subtle pt-8">
              <p className="font-heading text-xl font-medium leading-snug text-foreground md:text-2xl">
                I don&apos;t just ship features.
                <br />
                I help shape products that last.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  )
}
