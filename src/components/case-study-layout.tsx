"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { ProjectData, projects } from "@/data/projects"
import { Container } from "./ui/container"
import { Navbar } from "./navbar"
import { Footer } from "./footer"
import { SiteAtmosphere } from "./site-atmosphere"
import { Reveal, Stagger, StaggerItem } from "./motion/reveal"

interface CaseStudyLayoutProps {
  project: ProjectData
}

export function CaseStudyLayout({ project }: CaseStudyLayoutProps) {
  const currentIndex = projects.findIndex((p) => p.slug === project.slug)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <>
      <SiteAtmosphere />
      <div className="relative z-10">
      <Navbar />
      <main className="min-h-screen pt-28 pb-24">
        <Container>
          <div className="mx-auto max-w-[900px]">
            <Reveal>
              <Link
                href="/#projects"
                className="mb-10 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to projects
              </Link>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
                Case Study
              </p>
              <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                {project.name}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
                {project.shortDescription}
              </p>
            </Reveal>

            <Reveal
              delay={0.1}
              className="my-12 grid grid-cols-2 gap-6 border-y border-border-subtle py-8 md:grid-cols-4"
            >
              {[
                { label: "Industry", value: project.industry },
                { label: "Role", value: project.role },
                { label: "Platform", value: project.platform },
                { label: "Status", value: `${project.duration} · ${project.status}` },
              ].map((item) => (
                <div key={item.label}>
                  <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-foreground">{item.value}</p>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.15} className="mb-20 overflow-hidden rounded-[24px] border border-border-subtle">
              <div className="relative aspect-[16/9] w-full bg-surface">
                <Image
                  src={project.heroImage}
                  alt={`${project.name} hero`}
                  fill
                  className="object-cover"
                  sizes="900px"
                  priority
                />
              </div>
            </Reveal>

            {project.links?.length ? (
              <Reveal delay={0.2} className="mb-20 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border-subtle px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-border-glass hover:text-foreground"
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                ))}
              </Reveal>
            ) : null}

            <div className="space-y-20">
              <CaseBlock title="Project Overview">
                <p className="whitespace-pre-wrap text-lg leading-relaxed text-text-secondary">
                  {project.overview}
                </p>
              </CaseBlock>

              <CaseBlock title="Product Vision">
                <p className="whitespace-pre-wrap text-lg leading-relaxed text-text-secondary">
                  {project.vision}
                </p>
              </CaseBlock>

              <CaseBlock title="Responsibilities">
                <ul className="space-y-3">
                  {project.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3 text-text-secondary">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CaseBlock>

              <CaseBlock title="Key Features">
                <Stagger className="grid gap-4 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <StaggerItem
                      key={feature.title}
                      className="rounded-2xl border border-border-subtle bg-surface/40 p-5"
                    >
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                        {feature.description}
                      </p>
                    </StaggerItem>
                  ))}
                </Stagger>
              </CaseBlock>

              <CaseBlock title={project.architecture.title}>
                <ul className="space-y-3">
                  {project.architecture.points.map((point) => (
                    <li key={point} className="flex gap-3 text-text-secondary">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CaseBlock>

              <CaseBlock title="Engineering Challenges">
                <div className="space-y-6">
                  {project.challenges.map((challenge) => (
                    <div
                      key={challenge.title}
                      className="rounded-2xl border border-border-subtle bg-surface/30 p-6"
                    >
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        {challenge.title}
                      </h3>
                      <p className="mt-3 leading-relaxed text-text-secondary">
                        {challenge.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CaseBlock>

              <CaseBlock title="Optimizations">
                <div className="flex flex-wrap gap-2">
                  {project.optimizations.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border-subtle px-3 py-1.5 text-sm text-text-secondary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CaseBlock>

              <CaseBlock title="UX Focus">
                <ul className="space-y-3">
                  {project.ux.map((item) => (
                    <li key={item} className="flex gap-3 text-text-secondary">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CaseBlock>

              <CaseBlock title="Tech Stack">
                <div className="space-y-5">
                  {Object.entries(project.techStack).map(([category, items]) => (
                    <div key={category}>
                      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted">
                        {category}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-border-subtle bg-surface/50 px-3 py-1.5 text-sm text-text-secondary"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CaseBlock>

              <CaseBlock title="Business Impact">
                <ul className="space-y-3">
                  {project.businessImpact.map((item) => (
                    <li key={item} className="flex gap-3 text-text-secondary">
                      <span className="mt-0.5 text-success">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CaseBlock>

              <CaseBlock title="Lessons Learned">
                <ul className="space-y-3">
                  {project.lessonsLearned.map((item) => (
                    <li key={item} className="flex gap-3 text-text-secondary">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CaseBlock>

              <CaseBlock title="Key Takeaway">
                <p className="font-heading text-xl font-medium leading-snug text-foreground md:text-2xl">
                  {project.keyTakeaways}
                </p>
              </CaseBlock>
            </div>

            <div className="mt-24 grid gap-4 border-t border-border-subtle pt-10 sm:grid-cols-2">
              {prevProject ? (
                <Link
                  href={`/projects/${prevProject.slug}`}
                  className="group rounded-2xl border border-border-subtle p-5 transition-colors hover:border-border-glass"
                >
                  <span className="mb-2 inline-flex items-center gap-2 text-xs text-text-muted">
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Previous
                  </span>
                  <p className="font-heading text-lg font-semibold text-foreground group-hover:text-primary">
                    {prevProject.name}
                  </p>
                </Link>
              ) : (
                <div />
              )}
              {nextProject && (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="group rounded-2xl border border-border-subtle p-5 text-right transition-colors hover:border-border-glass"
                >
                  <span className="mb-2 inline-flex items-center gap-2 text-xs text-text-muted">
                    Next
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                  <p className="font-heading text-lg font-semibold text-foreground group-hover:text-primary">
                    {nextProject.name}
                  </p>
                </Link>
              )}
            </div>

            <Reveal className="mt-10">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Interested in working together?
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </Container>
      </main>
      <Footer />
      </div>
    </>
  )
}

function CaseBlock({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <Reveal>
      <h2 className="mb-6 font-heading text-2xl font-semibold text-foreground">{title}</h2>
      {children}
    </Reveal>
  )
}
