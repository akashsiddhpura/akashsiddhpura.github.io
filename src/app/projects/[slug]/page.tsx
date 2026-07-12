import { projects } from "@/data/projects"
import { notFound } from "next/navigation"
import { CaseStudyLayout } from "@/components/case-study-layout"
import { Footer } from "@/components/footer"

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const project = projects.find((p) => p.slug === resolvedParams.slug)

  if (!project) {
    return { title: 'Project Not Found' }
  }

  return {
    title: `${project.name} | Case Study | Aakash Siddhpura`,
    description: project.overview.substring(0, 150) + "...",
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const project = projects.find((p) => p.slug === resolvedParams.slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <CaseStudyLayout project={project} />
      <Footer />
    </>
  )
}
