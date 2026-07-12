import { LoadingExperience } from "@/components/loading-experience"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustIndicators } from "@/components/trust-indicators"
import { About } from "@/components/about"
import { EngineeringPhilosophy } from "@/components/engineering-philosophy"
import { Experience } from "@/components/experience"
import { FeaturedProjects } from "@/components/featured-projects"
import { TechnicalExpertise } from "@/components/technical-expertise"
import { Achievements } from "@/components/achievements"
import { CurrentlyBuilding } from "@/components/currently-building"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <LoadingExperience />
      <Navbar />
      <main className="relative min-h-screen bg-background">
        <Hero />
        <TrustIndicators />
        <About />
        <EngineeringPhilosophy />
        <Experience />
        <FeaturedProjects />
        <TechnicalExpertise />
        <Achievements />
        <CurrentlyBuilding />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
