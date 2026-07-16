import { projects } from "@/data/projects"
import { notFound } from "next/navigation"
import { CaseStudyLayout } from "@/components/case-study-layout"
import { site } from "@/lib/site"

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params
  const project = projects.find((p) => p.slug === resolvedParams.slug)

  if (!project) {
    return { title: "Project Not Found" }
  }

  return {
    title: `${project.name} | Case Study | ${site.name}`,
    description: project.shortDescription,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params
  const project = projects.find((p) => p.slug === resolvedParams.slug)

  if (!project) {
    notFound()
  }

  return <CaseStudyLayout project={project} />
}
