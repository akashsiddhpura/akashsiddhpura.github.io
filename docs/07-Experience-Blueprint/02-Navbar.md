# Navbar Experience Blueprint

> Version: 1.0
> Owner: Aakash Siddhpura
> Project: Portfolio v2
> Last Updated: July 2026

---

# Overview

The navigation bar is the first interactive component visitors encounter.

Its responsibility is not only to provide navigation but also to establish confidence, communicate professionalism, and reinforce the premium identity of the portfolio.

The navbar should remain visually lightweight while feeling technically polished.

Visitors should immediately feel that every detail has been carefully considered.

---

# Section Purpose

The navbar exists to:

- Orient visitors.
- Provide quick access to important sections.
- Reinforce branding.
- Remain available without becoming distracting.
- Encourage visitors to explore the portfolio naturally.

---

# User Goal

Visitors should immediately understand:

- Whose portfolio this is.
- What content is available.
- How to navigate.
- How to contact me.

Navigation should require zero learning.

---

# Business Goal

The navbar should:

- Build trust.
- Increase exploration.
- Improve usability.
- Encourage resume downloads.
- Increase contact conversions.

---

# Visitor Emotion

When seeing the navbar visitors should think:

"This feels like a premium software product."

Not:

"This looks like another portfolio template."

---

# Reading Time

3–5 seconds

Navigation should be understood almost instantly.

---

# Desktop Layout

```
──────────────────────────────────────────────

 Logo

                     About
                     Experience
                     Projects
                     Contact

             Resume

──────────────────────────────────────────────
```

---

# Structure

Left

Personal Logo / Monogram

Center

Primary Navigation

Right

Resume Button

---

# Navigation Items

Keep navigation minimal.

- About
- Experience
- Projects
- Contact

Avoid adding unnecessary links.

Everything else belongs inside the page.

---

# Resume CTA

Primary Action

Label

Download Resume

or simply

Resume

Style

Outlined Button

Small

Elegant

Icon

Download

Hover

Subtle glow

Very light elevation

---

# Logo

Simple.

Minimal.

Either:

AS

or

Aakash Siddhpura

No animated logos.

No gradients.

No oversized branding.

---

# Container

Maximum Width

1280px

Height

72px

Horizontal Padding

32px

Vertical Alignment

Center

---

# Position

Sticky

Top

0px

Always visible.

Never fixed with harsh shadows.

---

# Background Behaviour

Initial

Transparent

↓

After Scroll

Glass surface

↓

Blur

↓

Soft border

↓

Slight shadow

The transition should be gradual.

Never abrupt.

---

# Scroll Behaviour

At Top

Transparent

↓

After 40px Scroll

Blur appears

↓

Background opacity increases

↓

Border fades in

↓

Shadow appears

Duration

250ms

---

# Active Navigation

Current section

Primary color

↓

Small underline

↓

Smooth transition

Avoid large indicators.

---

# Hover Behaviour

Navigation Item

↓

Color transition

↓

Underline expands

↓

Small upward movement (2px)

Duration

180ms

Purpose

Communicate interactivity.

---

# Click Behaviour

Navigation

↓

Smooth scroll

↓

Section reveal

↓

Active state updates

No page reload.

---

# Typography

Navigation

16px

Medium

Resume Button

15px

SemiBold

Logo

18px

Bold

Maintain excellent readability.

---

# Spacing

Logo → Navigation

Auto

Navigation Gap

40px

Resume Gap

32px

Button Padding

16px × 10px

---

# Mobile Layout

```
────────────────────

 Logo

          Menu

────────────────────
```

Navigation becomes:

Hamburger Menu

↓

Full Screen Overlay

or

Slide-down Menu

---

# Mobile Menu

Contains:

About

Experience

Projects

Contact

Resume

Social Links

LinkedIn

GitHub

Email

---

# Mobile Menu Animation

Menu Button

↓

Morph

↓

Background Blur

↓

Menu Slides Down

↓

Navigation Items Fade

↓

CTA Appears

Duration

300ms

---

# Mobile Menu Behaviour

Opening

Disable page scroll.

Closing

Restore scroll position.

Touch targets

Minimum

44px

---

# Accessibility

Support:

Keyboard Navigation

Tab Order

Focus States

ARIA Labels

Escape to close menu

Screen Readers

Visible Focus Ring

---

# Performance

Avoid:

Heavy shadows

Large blur filters

Complex SVG animations

Expensive scroll listeners

Prefer:

CSS transforms

Intersection Observer

GPU acceleration

---

# Responsive Rules

Desktop

Full Navigation

Laptop

Full Navigation

Tablet

Compact Navigation

Mobile

Hamburger Menu

Maintain consistency across all breakpoints.

---

# Future Expansion

Support future pages without redesign.

Possible additions:

- Blog
- Labs
- Open Source
- Speaking
- Notes

Navigation should remain scalable.

---

# Implementation Notes

Preferred Stack

- Next.js App Router
- Framer Motion
- Tailwind CSS
- shadcn/ui
- Lenis
- Lucide Icons

Use Intersection Observer to detect scroll state.

Keep animation logic isolated from layout.

---

# Success Criteria

Visitors should experience:

✓ Instant orientation

✓ Smooth navigation

✓ Premium feel

✓ Clear hierarchy

✓ Fast interaction

The navbar should quietly reinforce trust without demanding attention.

---

# Final Principle

The best navigation is almost invisible.

Visitors should never stop to think about how to move through the portfolio.

Instead, navigation should feel effortless, allowing the content and engineering work to remain the focus.

Every interaction should communicate precision, confidence, and craftsmanship.

---

End of Document