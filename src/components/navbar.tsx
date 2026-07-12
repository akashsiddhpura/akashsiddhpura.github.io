"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Container } from "./ui/container"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#expertise" },
]

export function Navbar() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1))
      let current = ""
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Check if section is currently occupying the upper half of the viewport
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section
          }
        }
      }
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150 && !mobileMenuOpen) {
      setHidden(true)
    } else {
      setHidden(false)
    }
    
    if (latest > 50) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  })

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        isScrolled ? "py-4" : "py-6",
        mobileMenuOpen && "py-4 bg-background/80 backdrop-blur-md h-screen md:h-auto"
      )}
    >
      <Container>
        <div className="relative">
          <nav className={cn(
            "flex items-center justify-between rounded-2xl px-6 py-4 transition-all duration-300 relative z-50",
            isScrolled || mobileMenuOpen ? "glass border border-border-glass" : "bg-transparent border border-transparent"
          )}>
            {/* Logo */}
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="font-heading font-bold text-xl tracking-tight text-foreground hover:text-primary transition-colors"
            >
              AS
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1)
                
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-all relative py-2",
                      isActive ? "text-foreground" : "text-text-secondary hover:text-foreground"
                    )}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Contact Button */}
            <Link
              href="#contact"
              className="hidden md:inline-flex items-center justify-center rounded-lg bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
            >
              Contact
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-foreground p-2 -mr-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 mt-4 p-4 glass rounded-2xl border border-border-glass md:hidden flex flex-col gap-2 shadow-2xl z-40"
              >
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1)
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "text-lg font-medium p-4 rounded-xl transition-colors",
                        isActive 
                          ? "bg-primary/10 text-primary font-semibold" 
                          : "text-text-secondary hover:text-foreground hover:bg-surface-elevated"
                      )}
                    >
                      {link.name}
                    </Link>
                  )
                })}
                <div className="h-px w-full bg-border-glass my-2" />
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 flex items-center justify-center rounded-xl bg-foreground px-4 py-4 text-lg font-medium text-background transition-colors"
                >
                  Let&apos;s Talk
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </motion.header>
  )
}
