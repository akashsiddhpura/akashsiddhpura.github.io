"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { CheckCircle2, Mail, MapPin, Clock } from "lucide-react"
import { Container, Section } from "./ui/container"
import { SectionHeader } from "./section-header"
import { Reveal, Stagger, StaggerItem } from "./motion/reveal"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

type FormState = {
  name: string
  email: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!values.name.trim()) errors.name = "Name is required"
  if (!values.email.trim()) {
    errors.email = "Email is required"
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email"
  }
  if (!values.message.trim()) {
    errors.message = "Message is required"
  } else if (values.message.trim().length < 20) {
    errors.message = "Add a bit more detail (20+ characters)"
  }
  return errors
}

export function Contact() {
  const [values, setValues] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus("submitting")
    await new Promise((resolve) => setTimeout(resolve, 700))
    setStatus("done")
  }

  return (
    <Section id="contact" className="border-t border-border-subtle">
      <Container>
        <Reveal>
          <SectionHeader
            label="Contact"
            title="Let's build something meaningful together."
            description={[
              "Whether you're building a startup, improving an existing product, or looking for an engineer who enjoys solving hard problems—I'd love to hear about it.",
              "I'm always interested in meaningful conversations, ambitious ideas, and opportunities to build products that make a difference.",
            ]}
          />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Stagger className="space-y-6 lg:col-span-5">
            <StaggerItem className="rounded-2xl border border-border-subtle bg-surface/40 p-6 md:p-8">
              <div className="mb-5 flex items-center gap-3 border-b border-border-subtle pb-5">
                <span className="h-2.5 w-2.5 rounded-full bg-success" />
                <span className="font-heading text-lg font-semibold text-foreground">
                  Available for
                </span>
              </div>
              <ul className="space-y-2.5 text-text-secondary">
                <li>Remote opportunities</li>
                <li>Startup teams</li>
                <li>Freelance projects</li>
                <li>Product consulting</li>
              </ul>
              <div className="mt-6 space-y-3 text-sm text-text-muted">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {site.location}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {site.timezone}
                </div>
              </div>
            </StaggerItem>

            <StaggerItem className="space-y-3">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 rounded-xl border border-border-subtle px-4 py-3 text-sm text-text-secondary transition-colors hover:border-border-glass hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-primary" />
                {site.email}
              </a>
              <Link
                href={site.linkedin}
                target="_blank"
                className="flex items-center gap-3 rounded-xl border border-border-subtle px-4 py-3 text-sm text-text-secondary transition-colors hover:border-border-glass hover:text-foreground"
              >
                LinkedIn
              </Link>
              <Link
                href={site.github}
                target="_blank"
                className="flex items-center gap-3 rounded-xl border border-border-subtle px-4 py-3 text-sm text-text-secondary transition-colors hover:border-border-glass hover:text-foreground"
              >
                GitHub
              </Link>
              <Link
                href={site.resume}
                className="flex items-center gap-3 rounded-xl border border-border-subtle px-4 py-3 text-sm text-text-secondary transition-colors hover:border-border-glass hover:text-foreground"
              >
                Download resume
              </Link>
            </StaggerItem>
          </Stagger>

          <Reveal delay={0.08} className="lg:col-span-7">
            {status === "done" ? (
              <div className="flex h-full min-h-[360px] flex-col items-start justify-center rounded-2xl border border-border-subtle bg-surface/30 p-8 md:p-10">
                <CheckCircle2 className="mb-4 h-10 w-10 text-success" />
                <h3 className="font-heading text-2xl font-semibold text-foreground">
                  Thanks — your message is ready.
                </h3>
                <p className="mt-3 max-w-md text-text-secondary">
                  This form is UI-only for now. The fastest way to reach me is{" "}
                  <a
                    href={`mailto:${site.email}?subject=Portfolio inquiry from ${encodeURIComponent(values.name)}&body=${encodeURIComponent(values.message)}`}
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    email
                  </a>{" "}
                  or LinkedIn.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-8"
                  onClick={() => {
                    setStatus("idle")
                    setValues({ name: "", email: "", message: "" })
                  }}
                >
                  Send another
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-2xl border border-border-subtle bg-surface/30 p-6 md:p-8"
                noValidate
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Name"
                    error={errors.name}
                    htmlFor="name"
                  >
                    <Input
                      id="name"
                      value={values.name}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, name: e.target.value }))
                      }
                      placeholder="Your name"
                      className={cn(
                        "h-11 rounded-xl border-border-subtle bg-background/50",
                        errors.name && "border-error"
                      )}
                    />
                  </Field>
                  <Field label="Email" error={errors.email} htmlFor="email">
                    <Input
                      id="email"
                      type="email"
                      value={values.email}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, email: e.target.value }))
                      }
                      placeholder="you@company.com"
                      className={cn(
                        "h-11 rounded-xl border-border-subtle bg-background/50",
                        errors.email && "border-error"
                      )}
                    />
                  </Field>
                </div>

                <Field label="Message" error={errors.message} htmlFor="message">
                  <Textarea
                    id="message"
                    value={values.message}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, message: e.target.value }))
                    }
                    placeholder="Tell me about the product, role, or problem you're working on..."
                    rows={6}
                    className={cn(
                      "rounded-xl border-border-subtle bg-background/50",
                      errors.message && "border-error"
                    )}
                  />
                </Field>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-text-muted">
                    Form UI preview — no backend send yet.
                  </p>
                  <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className="h-11 rounded-xl bg-primary px-6 font-semibold hover:bg-primary-hover"
                  >
                    {status === "submitting" ? "Preparing..." : "Send message"}
                  </Button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string
  htmlFor: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      {error && <p className="text-xs text-error">{error}</p>}
    </div>
  )
}
