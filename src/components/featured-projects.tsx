"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { projects, type ProjectData } from "@/data/projects"
import { Container, Section } from "./ui/container"
import { SectionHeader } from "./section-header"
import { Reveal } from "./motion/reveal"
import { cn } from "@/lib/utils"

export function FeaturedProjects() {
  return (
    <Section id="projects">
      <Container>
        <Reveal>
          <SectionHeader
            label="Featured Projects"
            title="Products I've helped bring to life."
            description="From community platforms and financial products to content-driven apps and commerce marketplaces—each one challenged me to think beyond implementation and focus on architecture, performance, and user experience."
          />
        </Reveal>

        <div className="flex flex-col gap-20 md:gap-28">
          {projects.map((project, index) => (
            <ProjectRow key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

function ProjectRow({ project, index }: { project: ProjectData; index: number }) {
  const reverse = index % 2 === 1

  return (
    <Reveal>
      <article
        className={cn(
          "grid items-center gap-8 lg:grid-cols-2 lg:gap-14",
          reverse && "lg:[&>*:first-child]:order-2"
        )}
      >
        <Link
          href={`/projects/${project.slug}`}
          className="group relative block overflow-hidden rounded-[24px] border border-border-subtle bg-surface"
        >
          <div className="relative aspect-[16/11] w-full overflow-hidden">
            <Image
              src={project.heroImage}
              alt={`${project.name} preview`}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10151c]/25 via-transparent to-transparent" />
          </div>
        </Link>

        <div>
          <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.14em] text-text-muted">
            <span>{project.industry}</span>
            <span className="text-border-glass">·</span>
            <span>{project.status}</span>
            <span className="text-border-glass">·</span>
            <span>{project.duration}</span>
          </div>

          <h3 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {project.name}
          </h3>
          <p className="mt-2 text-sm text-text-secondary">{project.role}</p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
            {project.shortDescription}
          </p>

          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-2 text-sm text-text-secondary">
                <span className="h-1 w-1 rounded-full bg-primary" />
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border-subtle px-3 py-1 text-xs text-text-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            View case study
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </article>
    </Reveal>
  )
}
