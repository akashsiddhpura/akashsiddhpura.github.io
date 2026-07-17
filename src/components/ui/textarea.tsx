import * as React from "react"
import { cn } from "@/lib/utils"

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-[12px] border border-border-glass bg-background px-3.5 py-3 text-sm leading-relaxed text-text-primary ring-offset-background placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
