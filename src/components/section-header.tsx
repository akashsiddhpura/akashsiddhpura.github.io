import { cn } from "@/lib/utils"

type SectionHeaderProps = {
  label: string
  title: string
  description?: string | string[]
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  const descriptions = Array.isArray(description)
    ? description
    : description
      ? [description]
      : []

  return (
    <div
      className={cn(
        "mb-14 md:mb-20 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <span className="mb-4 block font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-text-muted">
        {label}
      </span>
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
        {title}
      </h2>
      {descriptions.length > 0 && (
        <div
          className={cn(
            "mt-5 space-y-4 text-base leading-relaxed text-text-secondary md:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {descriptions.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  )
}
