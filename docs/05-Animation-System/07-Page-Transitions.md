# Page Transitions

> Version: 1.0
> Owner: Aakash Siddhpura
> Project: Portfolio v2
> Last Updated: July 2026

---

# Overview

Page transitions create continuity between navigation events.

Rather than abruptly replacing one screen with another, transitions should guide visitors naturally through the portfolio while maintaining orientation and preserving context.

Every transition should feel fast, intentional, and nearly invisible.

The objective is to make navigation feel effortless.

---

# Objective

Page transitions should:

• Preserve continuity

• Reduce visual interruption

• Reinforce navigation

• Maintain premium quality

• Never delay interaction

---

# Philosophy

Visitors should never feel that one page disappears and another suddenly appears.

Instead, it should feel like the experience is continuously unfolding.

Transitions exist to reduce friction—not to show animation skills.

---

# Motion Personality

Transitions should feel:

✓ Elegant

✓ Smooth

✓ Calm

✓ Responsive

✓ Predictable

Never:

✗ Cinematic

✗ Overly dramatic

✗ Slow

✗ Distracting

---

# Transition Duration

Quick Navigation

250–350ms

Standard Page Change

450–600ms

Heavy Content

600–750ms

Absolute Maximum

900ms

Transitions should never block interaction longer than necessary.

---

###############################################################################

# Global Page Transition

###############################################################################

Sequence

Current Page

↓

Fade Slightly

↓

Move Up

↓

New Page

↓

Fade In

↓

Move Up Into Position

Properties

Outgoing

Opacity

100%

↓

0%

Translate Y

0px

↓

-16px

Incoming

Opacity

0%

↓

100%

Translate Y

20px

↓

0px

Scale

99%

↓

100%

---

###############################################################################

# Route Change

###############################################################################

Navigation Click

↓

Immediate Button Feedback

↓

Page Exit

↓

Scroll Reset

↓

Page Enter

↓

Interactive State

Navigation should feel instantaneous.

---

###############################################################################

# Project Detail Transition

###############################################################################

When opening a project

Project Card

↓

Expands

↓

Image grows

↓

Background fades

↓

Project page loads

↓

Content reveals

Visitors should feel the card naturally transforms into the detailed case study.

---

###############################################################################

# Back Navigation

###############################################################################

Project Detail

↓

Shrink slightly

↓

Fade

↓

Project Grid

↓

Restore previous scroll position

Never reset users to the top unnecessarily.

Maintain browsing context.

---

###############################################################################

# Section Navigation

###############################################################################

Navigation Menu

↓

Click

↓

Smooth Scroll

↓

Current Section Highlights

↓

Section Reveal

Transition should feel connected.

---

###############################################################################

# Resume Download

###############################################################################

Download starts immediately.

No page transition.

Button provides feedback.

Toast confirms action.

Remain on current page.

---

###############################################################################

# External Links

###############################################################################

GitHub

LinkedIn

Email

Open in new tab.

Provide immediate click feedback.

No transition animation required.

---

###############################################################################

# Contact Success

###############################################################################

Form Submitted

↓

Button Loading

↓

Success Message

↓

Optional Confetti (Very Minimal)

↓

Form Reset

Success should feel rewarding but professional.

---

###############################################################################

# Navigation State

###############################################################################

Navbar

Remains persistent.

Background blur adjusts while scrolling.

Current section updates smoothly.

Never flash.

Never disappear unexpectedly.

---

###############################################################################

# Scroll Position

###############################################################################

Rules

Home Page

Remember scroll position during navigation when appropriate.

Project Pages

Open at top.

Returning

Restore previous position.

This improves user orientation.

---

###############################################################################

# Background Transition

###############################################################################

Background elements transition independently.

Gradient

↓

Glow

↓

Noise

↓

Particles

No abrupt lighting changes.

Transitions should remain subtle.

---

###############################################################################

# Shared Motion Tokens

###############################################################################

Outgoing Translate

-16px

Incoming Translate

20px

Outgoing Opacity

100 → 0

Incoming Opacity

0 → 100

Scale

99% → 100%

Blur

0px → 4px → 0px (Optional)

---

###############################################################################

# Mobile Behaviour

###############################################################################

Reduce duration by approximately 20%.

Disable unnecessary scale effects.

Maintain instant responsiveness.

Respect native navigation expectations.

---

###############################################################################

# Accessibility

###############################################################################

Support prefers-reduced-motion.

When enabled:

Skip movement.

Use simple fade.

Maintain immediate navigation.

Focus should automatically move to the page heading after navigation.

---

###############################################################################

# Performance

###############################################################################

Animate only:

✓ Opacity

✓ Transform

Avoid:

✗ Width

✗ Height

✗ Margin

✗ Padding

✗ Layout calculations

Keep animations GPU accelerated.

Target 60 FPS.

---

###############################################################################

# Technical Recommendation

###############################################################################

Preferred Stack

• Next.js App Router

• Framer Motion (AnimatePresence)

• GSAP (Only for advanced transitions)

• Lenis (Scroll Management)

Use shared transition variants across all pages to maintain consistency.

---

###############################################################################

# Future Ready

###############################################################################

The transition system should support future pages without redesign.

Examples

• Blog

• Labs

• Open Source

• Case Studies

• Speaking

• Notes

Every new page should inherit the same transition language.

---

###############################################################################

# Success Criteria

###############################################################################

Visitors should experience:

✓ Seamless navigation

✓ Consistent motion

✓ Preserved context

✓ Fast interaction

✓ Premium polish

The website should feel like a cohesive application rather than disconnected pages.

---

# Final Principle

Page transitions should disappear into the experience.

The visitor should never think:

"Nice transition."

Instead, they should simply feel that moving through the portfolio is effortless, refined, and thoughtfully designed.

Every transition should reinforce confidence without drawing attention to itself.

---

End of Document