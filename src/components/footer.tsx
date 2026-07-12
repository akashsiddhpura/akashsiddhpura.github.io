"use client"

import { Container } from "./ui/container"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-20 border-t border-border-subtle bg-background">
      <Container>
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-24">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium text-text-primary max-w-3xl mx-auto leading-tight italic">
              &quot;Great software isn&apos;t remembered for its complexity. <br className="hidden md:block" />
              It&apos;s remembered for how it makes people feel.&quot;
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-20 text-center md:text-left">
            
            {/* Branding */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-heading font-bold text-xl">
                A
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground">
                Aakash Siddhpura
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
                Building thoughtful digital products with performance, architecture, and user experience in mind.
              </p>
            </div>

            {/* Navigation */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2">Navigation</h4>
              <nav className="flex flex-col gap-3">
                <Link href="#about" className="text-text-secondary hover:text-primary transition-colors text-sm">About</Link>
                <Link href="#projects" className="text-text-secondary hover:text-primary transition-colors text-sm">Projects</Link>
                <Link href="#experience" className="text-text-secondary hover:text-primary transition-colors text-sm">Experience</Link>
                <Link href="#contact" className="text-text-secondary hover:text-primary transition-colors text-sm">Contact</Link>
              </nav>
            </div>

            {/* Socials & Resume */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2">Connect</h4>
              <nav className="flex flex-col gap-3 mb-4">
                <Link href="https://github.com" target="_blank" className="text-text-secondary hover:text-primary transition-colors text-sm">GitHub</Link>
                <Link href="https://linkedin.com" target="_blank" className="text-text-secondary hover:text-primary transition-colors text-sm">LinkedIn</Link>
                <Link href="mailto:hello@example.com" className="text-text-secondary hover:text-primary transition-colors text-sm">Email</Link>
              </nav>
              <Link 
                href="/resume.pdf" 
                target="_blank" 
                className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-border-subtle text-text-primary hover:border-primary hover:text-primary transition-colors text-sm font-medium"
              >
                Download Resume
              </Link>
            </div>

          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border-glass text-sm text-text-muted">
            <p>
              &copy; {new Date().getFullYear()} Aakash Siddhpura. Crafted with care in Surat, India.
            </p>
            <p className="font-mono">
              Version 2.0
            </p>
          </div>

        </div>
      </Container>
    </footer>
  )
}
