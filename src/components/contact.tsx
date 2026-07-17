"use client"

import { useState, type FormEvent } from "react"
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Code2,
  FileText,
  Mail,
  MapPin,
  Send,
  Users,
} from "lucide-react"
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

const availability = [
  "Remote opportunities",
  "Startup teams",
  "Freelance projects",
  "Product consulting",
]

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: site.linkedin,
    icon: Users,
    external: true,
  },
  {
    label: "GitHub",
    value: "View repositories",
    href: site.github,
    icon: Code2,
    external: true,
  },
  {
    label: "Resume",
    value: "Preview PDF",
    href: site.resume,
    icon: FileText,
    external: true,
  },
] as const

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
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">(
    "idle"
  )
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus("submitting")
    setSubmitError(null)

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${site.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: values.name.trim(),
            email: values.email.trim(),
            message: values.message.trim(),
            _subject: `Portfolio inquiry from ${values.name.trim()}`,
            _replyto: values.email.trim(),
            _template: "table",
          }),
        }
      )

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setStatus("done")
    } catch {
      setStatus("error")
      setSubmitError(
        "Couldn't send right now. Please email me directly or try again."
      )
    }
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
            ]}
          />
        </Reveal>

        <div className="mt-2 grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:sticky lg:top-28 lg:col-span-5">
            <div className="overflow-hidden rounded-[28px] border border-border-subtle bg-surface/50">
              <div className="border-b border-border-subtle bg-gradient-to-br from-primary/[0.08] to-transparent p-6 md:p-7">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-40" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
                  </span>
                  <p className="text-sm font-medium text-success">
                    Open to opportunities
                  </p>
                </div>
                <h3 className="mt-3 font-heading text-xl font-semibold text-foreground">
                  Available for
                </h3>
                <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {availability.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-border-subtle bg-background/40 px-3.5 py-2.5 text-sm text-text-secondary"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {site.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {site.timezone}
                  </span>
                </div>
              </div>

              <Stagger className="divide-y divide-border-subtle">
                {channels.map((channel) => {
                  const Icon = channel.icon
                  return (
                    <StaggerItem key={channel.label}>
                      <a
                        href={channel.href}
                        target={channel.external ? "_blank" : undefined}
                        rel={
                          channel.external ? "noopener noreferrer" : undefined
                        }
                        className="group flex items-center gap-3.5 px-5 py-4 transition-colors hover:bg-surface-elevated/60 md:px-6"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border-subtle bg-background/50 text-primary transition-colors group-hover:border-border-glass group-hover:text-primary-hover">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-xs font-medium uppercase tracking-wider text-text-muted">
                            {channel.label}
                          </span>
                          <span className="mt-0.5 block truncate text-sm text-foreground">
                            {channel.value}
                          </span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                      </a>
                    </StaggerItem>
                  )
                })}
              </Stagger>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            {status === "done" ? (
              <div className="flex h-full min-h-[420px] flex-col items-start justify-center rounded-[28px] border border-border-subtle bg-surface/40 p-8 md:p-10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-success/30 bg-success/10">
                  <CheckCircle2 className="h-6 w-6 text-success" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground">
                  Thanks — message sent.
                </h3>
                <p className="mt-3 max-w-md text-text-secondary">
                  I&apos;ll get back to you soon. You can also reach me on{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    email
                  </a>{" "}
                  or{" "}
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    LinkedIn
                  </a>
                  .
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-8 rounded-xl"
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
                className="rounded-[28px] border border-border-subtle bg-surface/40 p-6 md:p-8"
                noValidate
              >
                <div className="mb-8 flex flex-col gap-1 border-b border-border-subtle pb-6 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
                  <div>
                    <h3 className="font-heading text-xl font-semibold leading-tight text-foreground">
                      Send a message
                    </h3>
                    <p className="mt-1.5 text-sm leading-snug text-text-secondary">
                      Tell me about the role, product, or problem.
                    </p>
                  </div>
                  <p className="shrink-0 text-xs leading-snug text-text-muted sm:pb-0.5">
                    Typical reply within 24–48 hours
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="grid gap-6 sm:grid-cols-2 sm:items-start">
                    <Field label="Name" error={errors.name} htmlFor="name">
                      <Input
                        id="name"
                        value={values.name}
                        onChange={(e) =>
                          setValues((v) => ({ ...v, name: e.target.value }))
                        }
                        placeholder="Your name"
                        className={cn(
                          "h-11 rounded-[12px] border-border-subtle bg-background/60 px-3.5 placeholder:text-text-muted/80",
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
                          "h-11 rounded-[12px] border-border-subtle bg-background/60 px-3.5 placeholder:text-text-muted/80",
                          errors.email && "border-error"
                        )}
                      />
                    </Field>
                  </div>

                  <Field
                    label="Message"
                    error={errors.message}
                    htmlFor="message"
                  >
                    <Textarea
                      id="message"
                      value={values.message}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, message: e.target.value }))
                      }
                      placeholder="What are you building, and how can I help?"
                      rows={6}
                      className={cn(
                        "min-h-[148px] resize-y rounded-[12px] border-border-subtle bg-background/60 px-3.5 py-3 leading-relaxed placeholder:text-text-muted/80",
                        errors.message && "border-error"
                      )}
                    />
                  </Field>

                  {submitError && (
                    <p className="rounded-[12px] border border-error/30 bg-error/10 px-4 py-3 text-sm text-error">
                      {submitError}{" "}
                      <a
                        href={`mailto:${site.email}?subject=${encodeURIComponent(`Portfolio inquiry from ${values.name}`)}&body=${encodeURIComponent(values.message)}`}
                        className="font-medium underline underline-offset-4"
                      >
                        Email me instead
                      </a>
                      .
                    </p>
                  )}

                  <div className="flex flex-col gap-4 border-t border-border-subtle pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm leading-snug text-text-secondary">
                      Goes to{" "}
                      <a
                        href={`mailto:${site.email}`}
                        className="text-foreground underline-offset-4 hover:underline"
                      >
                        {site.email}
                      </a>
                    </p>
                    <Button
                      type="submit"
                      disabled={status === "submitting"}
                      className="h-11 gap-2 rounded-[12px] bg-primary px-6 font-semibold hover:bg-primary-hover sm:min-w-[160px]"
                    >
                      {status === "submitting" ? (
                        "Sending..."
                      ) : (
                        <>
                          Send message
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
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
    <div className="flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="text-[13px] font-medium leading-none text-text-secondary"
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="text-xs leading-snug text-error">{error}</p>
      )}
    </div>
  )
}
