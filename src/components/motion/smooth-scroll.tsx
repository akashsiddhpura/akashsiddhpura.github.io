"use client"

import { ReactLenis } from "lenis/react"
import { useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

export function SmoothScroll({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <>{children}</>
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.1,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}
