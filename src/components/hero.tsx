"use client"

import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { Container } from "./ui/container"
import { DeviceShowcase } from "./device-showcase"
import { site } from "@/lib/site"

const ease = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.12 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
}

const lineReveal = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.7, ease },
  },
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const firstName = site.name.split(" ")[0]
  const lastName = site.name.split(" ")[1]

  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28 md:pb-20 md:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-[12%] top-[18%] h-[42%] w-[42%] rounded-full bg-primary/[0.14] blur-[110px]" />
        <div className="absolute right-[8%] top-[28%] h-[36%] w-[36%] rounded-full bg-primary/[0.08] blur-[100px]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <Container className="relative z-10 grid w-full items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <motion.div
          className="flex flex-col items-start lg:col-span-7"
          variants={prefersReducedMotion ? undefined : container}
          initial={prefersReducedMotion ? undefined : "hidden"}
          animate="visible"
        >
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-text-muted">
              Available for opportunities
            </span>
          </motion.div>

          <div className="mb-5">
            <div className="overflow-hidden pb-1">
              <motion.h1
                variants={lineReveal}
                className="font-heading text-[clamp(2.85rem,7.5vw,5.5rem)] font-extrabold leading-[0.94] tracking-[-0.045em] text-foreground"
              >
                {firstName}
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.p
                variants={lineReveal}
                className="font-heading text-[clamp(2.85rem,7.5vw,5.5rem)] font-extrabold leading-[0.94] tracking-[-0.045em] text-foreground/75"
              >
                {lastName}
              </motion.p>
            </div>
          </div>

          <motion.p
            variants={fadeUp}
            className="mb-5 max-w-[28ch] font-heading text-[clamp(1.25rem,2.6vw,1.85rem)] font-medium leading-[1.25] tracking-[-0.02em] text-text-secondary"
          >
            Building products that scale, perform, and feel{" "}
            <span className="text-primary">effortless</span>.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mb-8 max-w-md text-base leading-relaxed text-text-muted md:text-[1.05rem]"
          >
            Product engineer focused on mobile architecture, performance systems,
            and experiences that feel native from the first interaction.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            <Link
              href="#projects"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors duration-200 hover:bg-primary-hover"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border-subtle bg-transparent px-6 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-border-glass hover:bg-surface/40"
            >
              Resume
            </a>
            <Link
              href="#contact"
              className="inline-flex h-12 items-center px-2 text-sm font-medium text-text-muted transition-colors duration-200 hover:text-foreground"
            >
              Let&apos;s talk
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-11 grid w-full max-w-md grid-cols-3 gap-4 border-t border-border-subtle pt-7"
          >
            {[
              { value: "5+", label: "Years" },
              { value: "10+", label: "Apps" },
              { value: "500K+", label: "Downloads" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-xl font-bold tracking-tight text-foreground md:text-2xl">
                  {stat.value}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
          <DeviceShowcase />
        </div>
      </Container>

      <motion.a
        href="#trust"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.15, duration: 0.5 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-text-muted transition-colors hover:text-foreground md:flex"
        aria-label="Scroll to next section"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={prefersReducedMotion ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-3.5 w-3.5" />
        </motion.span>
      </motion.a>
    </section>
  )
}
