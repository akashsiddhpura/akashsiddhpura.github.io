import Link from "next/link"
import { Container } from "./ui/container"
import { navLinks, site } from "@/lib/site"

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-background py-16 md:py-20">
      <Container>
        <div className="mb-16 max-w-3xl">
          <p className="font-heading text-2xl font-medium leading-snug text-text-secondary md:text-3xl">
            &quot;Great software isn&apos;t remembered for its complexity.
            It&apos;s remembered for how it makes people feel.&quot;
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="font-heading text-xl font-semibold text-foreground">
              {site.name}
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-secondary">
              Building thoughtful digital products with performance, architecture,
              and user experience in mind.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-text-secondary transition-colors hover:text-foreground"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
              Connect
            </h4>
            <nav className="mb-5 flex flex-col gap-2.5">
              <Link
                href={site.github}
                target="_blank"
                className="text-sm text-text-secondary transition-colors hover:text-foreground"
              >
                GitHub
              </Link>
              <Link
                href={site.linkedin}
                target="_blank"
                className="text-sm text-text-secondary transition-colors hover:text-foreground"
              >
                LinkedIn
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-text-secondary transition-colors hover:text-foreground"
              >
                Email
              </a>
            </nav>
            <Link
              href={site.resume}
              className="inline-flex rounded-xl border border-border-subtle px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-border-glass"
            >
              Download Resume
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-border-subtle pt-8 text-sm text-text-muted md:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. Crafted in {site.location}.
          </p>
          <p className="font-mono text-xs">Portfolio v2</p>
        </div>
      </Container>
    </footer>
  )
}
