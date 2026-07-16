import * as React from "react"

import { cn } from "@/lib/utils"

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10",
      className
    )}
    {...props}
  />
))
Container.displayName = "Container"

const Section = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn(
      "relative z-10 py-20 md:py-28 lg:py-40",
      className
    )}
    {...props}
  />
))
Section.displayName = "Section"

export { Container, Section }
