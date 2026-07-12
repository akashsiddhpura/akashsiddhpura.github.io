# Responsive System

> Version: 1.0
> Owner: Aakash Siddhpura
> Project: Portfolio v2
> Last Updated: July 2026

---

# Overview

The Responsive System defines how every layout, component, spacing rule, and interaction adapts across different screen sizes.

Responsiveness is not about making things smaller.

It is about providing the best possible experience for every device.

---

# Philosophy

Every breakpoint deserves intentional design.

Desktop is not the source of truth.

The experience should feel native regardless of device.

---

# Breakpoints

Mobile

320–639px

Tablet

640–1023px

Laptop

1024–1439px

Desktop

1440px+

Ultra Wide

1920px+

---

# Container Width

Mobile

100%

Tablet

100%

Laptop

1200px

Desktop

1280px

Ultra Wide

1440px

---

# Grid

Desktop

12 Columns

Tablet

8 Columns

Mobile

4 Columns

---

# Typography Scale

Desktop

H1 72px

↓

Tablet

56px

↓

Mobile

40px

Maintain consistent hierarchy.

---

# Section Spacing

Desktop

160px

Tablet

120px

Mobile

80–96px

---

# Cards

Desktop

3–4 Columns

Tablet

2 Columns

Mobile

1 Column

---

# Images

Always responsive.

Use Next.js Image.

Generate multiple image sizes.

Avoid loading desktop assets on mobile.

---

# Navigation

Desktop

Full Navigation

↓

Tablet

Compact

↓

Mobile

Overlay Menu

---

# Hero

Desktop

Split Layout

↓

Tablet

Stack

↓

Mobile

Single Column

---

# Animations

Desktop

Full Motion

Tablet

Reduced Motion

Mobile

Minimal Motion

Animations should never impact performance.

---

# Performance Rules

Lazy loading

Code splitting

Dynamic imports

Image optimization

Server Components

Streaming

Minimize Client Components

---

# Accessibility

Readable typography

Keyboard support

Focus states

Reduced motion

Screen readers

Color contrast

---

# Browser Support

Latest Chrome

Safari

Firefox

Edge

Responsive behavior should remain consistent.

---

# Testing Checklist

Desktop

Laptop

Tablet

Large Mobile

Small Mobile

Landscape

Portrait

Dark Mode

Reduced Motion

Keyboard Navigation

---

# Design Decisions

## Decision 01

Never simply scale desktop layouts.

Redesign layouts where necessary.

## Decision 02

Performance is more important than animation.

## Decision 03

Every breakpoint should feel intentionally crafted.

---

# Things to Avoid

- Horizontal scrolling
- Tiny text
- Overflowing cards
- Layout shifts
- Pixel-perfect desktop copies
- Overly complex responsive logic

---

# Success Checklist

- [ ] Every breakpoint tested
- [ ] Typography scales correctly
- [ ] Components resize naturally
- [ ] Images remain sharp
- [ ] Animations remain smooth
- [ ] Lighthouse remains above target
- [ ] Accessibility maintained

---

# Final Principle

Responsiveness is not a feature.

It is a quality standard.

Visitors should never feel like they are using a "mobile version" of the portfolio.

They should feel like they are using a product that was designed specifically for their device.

---

End of Document