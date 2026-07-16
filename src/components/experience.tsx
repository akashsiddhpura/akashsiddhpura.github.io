"use client"

import { Container, Section } from "./ui/container"
import { SectionHeader } from "./section-header"
import { Reveal, Stagger, StaggerItem } from "./motion/reveal"

type ExperienceItem = {
  company: string
  role: string
  duration: string
  overview: string
  growth?: string[]
  contributions?: string[]
  challenge?: string
  impact?: string[] | string
  takeaway: string
  technologies?: string[]
}

const experiences: ExperienceItem[] = [
  {
    company: "SULOK INC.",
    role: "Senior Flutter Engineer",
    duration: "2024 – Present",
    overview:
      "At SULOK, I focus on architecting scalable mobile applications that support real-world users. My responsibilities extend beyond feature development into designing application architecture, optimizing performance, building real-time communication systems, and delivering premium user experiences.",
    contributions: [
      "Designed scalable application architecture.",
      "Built production-grade feed system.",
      "Engineered intelligent caching strategy.",
      "Developed high-performance real-time messaging.",
      "Integrated payment infrastructure.",
      "Improved media loading experience.",
      "Optimized scrolling performance.",
    ],
    challenge:
      "One of the most challenging implementations involved designing a social feed capable of synchronizing cached and live API data without UI blinking or scroll position changes.",
    impact: [
      "Improved application responsiveness.",
      "Reduced waiting time for media loading.",
      "Enhanced scrolling performance.",
      "Supported product scalability.",
    ],
    technologies: ["Flutter", "Dart", "BLoC", "REST APIs", "Clean Architecture", "Sockets"],
    takeaway: "Great user experiences are built through countless engineering decisions users never notice.",
  },
  {
    company: "Freelance",
    role: "Mobile Product Engineer",
    duration: "2023",
    overview:
      "Working directly with founders and businesses gave me a completely different perspective on software development. Beyond writing code, I became responsible for understanding product requirements, making architectural decisions, communicating directly with clients, and delivering complete production-ready solutions.",
    growth: [
      "Product Ownership",
      "Client Communication",
      "Startup Thinking",
      "Payment Integration",
      "Firebase",
      "Delivery Management",
    ],
    technologies: ["Flutter", "Firebase", "Stripe", "Next.js"],
    takeaway: "Understanding business problems is just as important as solving technical ones.",
  },
  {
    company: "Weapplinse Technology",
    role: "Flutter Developer",
    duration: "2022",
    overview:
      "This role marked the transition from implementing features to building production-ready applications. I worked on multiple products while improving application performance, collaborating closely with backend teams, and contributing to scalable application architecture.",
    growth: [
      "Performance Optimization",
      "Architecture",
      "State Management",
      "API Integration",
      "Team Collaboration",
      "Mentoring",
    ],
    impact:
      "Built production applications used by thousands of users while improving development quality and reducing technical complexity.",
    technologies: ["Flutter", "Provider", "GetX", "REST APIs"],
    takeaway: "Scalable architecture creates long-term development speed.",
  },
  {
    company: "SAT Technolab",
    role: "Junior Flutter Developer",
    duration: "2021",
    overview:
      "My professional journey began by learning how production software is built. During this period, I focused on understanding Flutter fundamentals, responsive UI development, debugging, collaboration, and engineering best practices.",
    growth: [
      "Responsive UI Development",
      "Debugging",
      "Code Reviews",
      "Flutter Best Practices",
      "Team Collaboration",
    ],
    technologies: ["Flutter", "Dart", "Git"],
    takeaway: "Strong foundations create better engineers.",
  },
]

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <Reveal>
          <SectionHeader
            label="Experience"
            title="Building products, solving problems, and growing with every challenge."
            description={[
              "My journey has never been about collecting job titles. It has been about taking greater ownership, solving more complex problems, and building products that create real value.",
              "Each role has expanded not only my technical expertise but also my understanding of architecture, collaboration, and product thinking.",
            ]}
          />
        </Reveal>

        <div className="relative max-w-3xl">
          <div className="absolute bottom-0 left-[7px] top-2 w-px bg-border-subtle md:left-[9px]" />

          <Stagger className="space-y-12">
            {experiences.map((exp) => (
              <StaggerItem key={exp.company} className="relative pl-10 md:pl-12">
                <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-primary bg-background" />

                <div className="mb-4">
                  <span className="font-mono text-xs text-primary">{exp.duration}</span>
                  <h3 className="mt-1 font-heading text-2xl font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-text-secondary">{exp.company}</p>
                </div>

                <p className="mb-6 leading-relaxed text-text-secondary">{exp.overview}</p>

                {(exp.contributions || exp.growth) && (
                  <div className="mb-6">
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                      {exp.contributions ? "Key Contributions" : "Engineering Growth"}
                    </h4>
                    <ul className="space-y-2">
                      {(exp.contributions || exp.growth)?.map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-text-secondary">
                          <span className="mt-1 text-primary">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {exp.challenge && (
                  <div className="mb-6 rounded-2xl border border-border-subtle bg-surface/50 p-5">
                    <h4 className="mb-2 text-sm font-semibold text-foreground">
                      Engineering Challenge
                    </h4>
                    <p className="text-sm leading-relaxed text-text-muted">{exp.challenge}</p>
                  </div>
                )}

                {exp.impact && (
                  <div className="mb-6">
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                      Business Impact
                    </h4>
                    {Array.isArray(exp.impact) ? (
                      <ul className="space-y-2">
                        {exp.impact.map((item) => (
                          <li key={item} className="flex gap-2 text-sm text-text-secondary">
                            <span className="mt-0.5 text-success">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-text-secondary">{exp.impact}</p>
                    )}
                  </div>
                )}

                {exp.technologies && (
                  <div className="mb-6 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border-subtle bg-surface/60 px-3 py-1 text-xs text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <p className="border-t border-border-subtle pt-4 text-sm italic text-text-muted">
                  &quot;{exp.takeaway}&quot;
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal className="mt-16 max-w-2xl border-t border-border-subtle pt-10">
          <p className="font-heading text-xl leading-snug text-text-secondary">
            Looking back, every role has contributed to the engineer I am today. My goal
            remains the same:{" "}
            <span className="font-medium text-foreground">
              build products that users love, businesses trust, and engineering teams enjoy
              maintaining.
            </span>
          </p>
        </Reveal>
      </Container>
    </Section>
  )
}
