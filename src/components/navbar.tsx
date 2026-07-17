"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Container } from "./ui/container"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { navLinks, site } from "@/lib/site"

export function Navbar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.replace("/#", ""))
      let current = ""

      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue
        const rect = element.getBoundingClientRect()
        if (rect.top <= 160 && rect.bottom >= 160) {
          current = section
        }
      }
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40)
  })

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="pt-4 md:pt-5">
        <nav
          className={cn(
            "relative z-50 flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 md:px-6",
            isScrolled || mobileMenuOpen
              ? "glass shadow-[0_8px_28px_rgba(0,0,0,0.4)]"
              : "border border-transparent bg-transparent"
          )}
        >
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="group flex items-baseline gap-2"
          >
            <span className="font-heading text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
              {site.name.split(" ")[0]}
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted sm:inline">
              {site.monogram}
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("/#", "")
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-text-secondary hover:text-foreground"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-x-0 -bottom-0.5 h-px bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-border-subtle px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-border-glass hover:text-foreground"
            >
              Resume
            </a>
            <Link
              href="/#contact"
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Let&apos;s Talk
            </Link>
          </div>

          <button
            className="p-2 text-foreground md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-x-5 top-full mt-3 flex flex-col gap-1 rounded-2xl border border-border-glass bg-surface/95 p-3 shadow-2xl backdrop-blur-xl md:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-text-secondary transition-colors hover:bg-surface-elevated hover:text-foreground"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-text-secondary transition-colors hover:bg-surface-elevated hover:text-foreground"
              >
                Resume
              </a>
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-1 rounded-xl bg-primary px-4 py-3 text-center text-base font-semibold text-primary-foreground"
              >
                Let&apos;s Talk
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  )
}
