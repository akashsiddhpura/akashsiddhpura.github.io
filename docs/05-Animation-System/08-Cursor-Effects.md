# Cursor Effects

> Version: 1.0
> Owner: Aakash Siddhpura
> Project: Portfolio v2
> Last Updated: July 2026

---

# Overview

The cursor system extends the interaction language of the portfolio.

Rather than replacing the native cursor with a flashy animation, the custom cursor should provide subtle feedback, reinforce interactivity, and create a premium browsing experience.

The cursor should feel like part of the operating system—not a decorative effect.

---

# Objective

The cursor should:

• Improve interaction clarity

• Reinforce clickable elements

• Create subtle delight

• Feel responsive

• Never distract from content

---

# Philosophy

The cursor should disappear into the experience.

Users should never think:

"Wow, cool cursor."

Instead they should think:

"Everything feels incredibly responsive."

---

# Cursor Principles

The cursor must always be:

✓ Lightweight

✓ Responsive

✓ Precise

✓ Context Aware

✓ Smooth

Never:

✗ Oversized

✗ Slow

✗ Distracting

✗ Elastic

✗ Cartoon-like

---

# Cursor Design

Primary Cursor

Small filled circle.

Size

8px

Color

Primary Brand Color

Opacity

90%

---

Cursor Ring

Outer Ring

Size

32px

Border

1px

Opacity

25%

Background

Transparent

Follows cursor with slight interpolation.

---

# Motion

Inner Dot

Immediate.

No lag.

Outer Ring

Smooth interpolation.

Lag

60–80ms

The cursor should always feel responsive.

---

###############################################################################

# Default State

###############################################################################

Appearance

• Small Dot

• Outer Ring

• No Text

Purpose

Neutral browsing.

---

###############################################################################

# Link Hover

###############################################################################

When hovering links

Cursor Ring

↓

Expands

32px

↓

42px

Border becomes brighter.

Dot remains centered.

Underline animation begins simultaneously.

---

###############################################################################

# Button Hover

###############################################################################

Cursor

↓

Scales

↓

Primary Color Brightens

↓

Ring Expands

↓

Button Responds

Ring Size

48px

Duration

180ms

Purpose

Increase confidence before clicking.

---

###############################################################################

# Card Hover

###############################################################################

Projects

Experience

Philosophy

Achievements

Cursor Ring

↓

60px

Opacity

↓

35%

Card lifts simultaneously.

No cursor text.

---

###############################################################################

# Project Cards

###############################################################################

Cursor changes to:

VIEW

Displayed inside cursor ring.

Ring Size

72px

Background

Glass

Text

Small

Bold

Uppercase

Fade in.

Fade out on exit.

---

###############################################################################

# Contact Button

###############################################################################

Cursor Text

LET'S TALK

Ring

72px

Glow

Slight increase

Purpose

Encourage interaction.

---

###############################################################################

# Resume Button

###############################################################################

Cursor Text

DOWNLOAD

No additional animation.

Keep interaction clean.

---

###############################################################################

# Social Icons

###############################################################################

Ring

40px

Icon Brightens

Cursor scales slightly.

No text.

---

###############################################################################

# Image Hover

###############################################################################

Portrait

Project Images

Ring

60px

Cursor Text

EXPLORE

Optional.

---

###############################################################################

# Device Mockup

###############################################################################

Cursor

↓

Tilt Indicator

↓

Ring expands

↓

Reflection shifts

Cursor Text

DRAG

(Only if interactive.)

---

###############################################################################

# Drag Interaction

###############################################################################

Future

Carousel

Device Gallery

Cursor

↓

GRAB

↓

GRABBING

Cursor Ring

Compresses slightly.

---

###############################################################################

# Loading State

###############################################################################

Cursor

↓

Spinner Ring

↓

Progress

↓

Normal

Avoid blocking pointer.

---

###############################################################################

# Text Selection

###############################################################################

Use native text cursor.

Never replace I-beam cursor.

Maintain expected operating system behavior.

---

###############################################################################

# Disabled Elements

###############################################################################

Cursor

↓

Reduced Opacity

↓

Not Allowed Icon

Only where appropriate.

---

###############################################################################

# Cursor Trail

###############################################################################

Very subtle.

Maximum

4 particles.

Fade within

300ms

Desktop only.

Disable on low-performance devices.

Purpose

Add softness.

Never become visually obvious.

---

###############################################################################

# Click Feedback

###############################################################################

Mouse Down

Ring

↓

Compress

90%

Mouse Up

↓

Expand

↓

Return

Duration

120ms

No ripple.

---

###############################################################################

# Cursor Magnetic Effect

###############################################################################

Buttons only.

Maximum Pull

6px

Never stronger.

Cursor should feel attracted—not snapped.

---

###############################################################################

# Edge Behaviour

###############################################################################

Cursor should remain fully visible near viewport edges.

No clipping.

No scaling.

---

###############################################################################

# Mobile Behaviour

###############################################################################

No custom cursor.

Touch devices use:

Native interactions

Touch feedback

Micro animations

Cursor system disabled.

---

###############################################################################

# Accessibility

###############################################################################

Support:

Keyboard Navigation

Screen Readers

Reduced Motion

High Contrast

Users should never rely on cursor effects to understand functionality.

All interactions must remain discoverable without the custom cursor.

---

###############################################################################

# Performance

###############################################################################

Target

60 FPS

Use

requestAnimationFrame

transform

opacity

GPU acceleration

Avoid

Layout recalculation

Heavy blur

Large shadows

Cursor updates should remain below 1ms per frame.

---

###############################################################################

# Technical Recommendation

###############################################################################

Preferred Stack

Framer Motion

requestAnimationFrame

Motion Values

GSAP (optional)

Use pointer events instead of mouse events.

Support both mouse and stylus.

---

###############################################################################

# Browser Behaviour

###############################################################################

Hide custom cursor automatically for:

Touch devices

Keyboard navigation

Reduced motion users

Low-power devices (optional)

Gracefully fall back to the native cursor.

---

###############################################################################

# Success Criteria

###############################################################################

Visitors should feel:

✓ Responsive

✓ Premium

✓ Precise

✓ Interactive

✓ Modern

The cursor should quietly reinforce quality without ever becoming the center of attention.

---

# Final Principle

The cursor is one of the smallest elements on the screen, yet it is involved in almost every interaction.

When designed well, it becomes invisible.

Users won't remember the cursor.

They'll remember how effortlessly the entire website responded to them.

That is the true purpose of this system.

---

End of Document