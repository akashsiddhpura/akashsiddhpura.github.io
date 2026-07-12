# Scroll Animations

> Version: 1.0
> Owner: Aakash Siddhpura
> Project: Portfolio v2
> Last Updated: July 2026

---

# Overview

Scrolling is the primary storytelling mechanism of the portfolio.

Every section should feel connected to the next through smooth transitions and purposeful motion.

Animations should guide attention naturally without interrupting the browsing experience.

Visitors should feel as though the website is unfolding chapter by chapter.

---

# Objective

The scrolling experience should:

• Guide visual attention

• Reveal information progressively

• Maintain a smooth reading rhythm

• Reinforce storytelling

• Feel premium and effortless

---

# Experience Philosophy

Scrolling should feel like reading a beautifully designed product story.

Not a presentation.

Not a slideshow.

Not a collection of animations.

Every movement should have a purpose.

---

# Scroll Behavior

Scrolling should be:

✓ Smooth

✓ Responsive

✓ Predictable

✓ Lightweight

✓ Consistent

Never:

✗ Jerky

✗ Delayed

✗ Over-smoothed

✗ Difficult to control

---

# Smooth Scrolling

Use smooth scrolling to improve the reading experience.

Requirements

• Native feeling

• Responsive to user input

• Immediate stop on user interaction

• Preserve browser accessibility

Suggested Library

Lenis

Configuration

Duration

1.0–1.2

Touch devices

Native scrolling

Desktop

Smooth scrolling enabled

---

# Section Entry

Every section follows the same entrance pattern.

Viewport Visibility

20–30%

↓

Section Animation Starts

↓

Animation Completes

↓

Section Becomes Interactive

Never animate before the section is visible.

---

# Section Entrance Animation

Properties

Opacity

0 → 100%

Translate Y

32px → 0px

Blur

8px → 0px

Duration

700ms

Ease

ease-out

Every section should share the same motion language.

---

# Section Exit

As the user scrolls away

Opacity

100% → 90%

Translate Y

0 → -12px

Avoid dramatic exit animations.

The focus should always remain on the incoming section.

---

# Scroll Rhythm

Each section should reveal in this order:

Section Label

↓

Heading

↓

Supporting Text

↓

Main Content

↓

Interactive Elements

↓

Decorative Elements

This ensures visitors always know where to look first.

---

# Stagger Animation

Cards

Timeline Items

Statistics

Badges

Project Cards

Animate sequentially.

Delay

80–120ms

Maximum stagger

600ms

Avoid long waiting times.

---

# Timeline Animation

Experience Timeline

The vertical timeline line should grow downward as it enters the viewport.

Timeline cards should appear one after another.

Animation

Fade

↓

Slide Up

↓

Scale 98% → 100%

Timeline should reinforce progression.

---

# Project Section

Featured projects reveal one at a time.

Animation

Opacity

0 → 100%

Translate Y

40px → 0px

Scale

98% → 100%

Project image should animate slightly after the text.

Purpose

Guide attention from story to visuals.

---

# Counter Animation

Statistics should animate only once.

Start when

80% of the section is visible.

Duration

1200ms

Easing

ease-out

Do not restart on every scroll.

---

# Horizontal Movement

Avoid horizontal entrance animations except where intentionally designed.

Default movement should always be vertical.

This creates a calmer reading experience.

---

# Parallax

Use sparingly.

Allowed Elements

• Background glow

• Decorative gradients

• Floating illustrations

Not Allowed

• Main headings

• Paragraphs

• Buttons

• Forms

Content should never move independently of readability.

---

# Sticky Elements

Allowed

Navigation

Section Progress Indicator

Optional

Project Navigation

Never overuse sticky positioning.

---

# Scroll Progress Indicator

Optional thin progress bar at the top of the page.

Purpose

Show reading progress.

Height

2px

Animation

Scale X

0 → 100%

Color

Primary Brand Gradient

---

# Active Navigation

As the visitor scrolls

Navigation updates automatically.

Current section highlighted.

Transition

250ms

No flashing.

---

# Reading Focus

When a section becomes active:

Previous section reduces emphasis slightly.

Current section gains visual focus.

This creates a natural reading flow.

---

# Background Movement

Background animations should move independently of scrolling.

Very slow.

Barely noticeable.

Scrolling should never affect readability.

---

# Hero Transition

Leaving Hero

Headline moves upward slightly.

Device mockup scales down subtly.

Background glow reduces.

About section begins fading in.

Transition should feel seamless.

---

# Section Overlap

Avoid harsh section boundaries.

Use:

• Soft gradients

• Spacing

• Lighting

• Motion

Sections should blend naturally into one another.

---

# Mobile Scroll

Disable:

Heavy parallax

Complex transforms

Reduce stagger timing.

Maintain 60 FPS.

Scrolling should always feel responsive.

---

# Accessibility

Respect prefers-reduced-motion.

When enabled:

• Disable entrance animations

• Disable parallax

• Disable progress animations

• Keep opacity transitions minimal

Content should remain immediately accessible.

---

# Performance Rules

Animate only:

✓ Transform

✓ Opacity

✓ Filter (minimal)

Avoid:

✗ Width

✗ Height

✗ Margin

✗ Padding

✗ Position changes

Use Intersection Observer to trigger animations.

Avoid continuous scroll event listeners whenever possible.

---

# Technical Recommendation

Recommended Libraries

• GSAP ScrollTrigger

• Framer Motion

• Lenis

Use Intersection Observer for lightweight section detection.

Keep animations GPU accelerated.

---

# Success Criteria

Scrolling should feel:

✓ Fluid

✓ Calm

✓ Story-driven

✓ Predictable

✓ Professional

Visitors should naturally continue scrolling without feeling overwhelmed.

---

# Final Principle

Scrolling should never feel like triggering animations.

It should feel like discovering the next part of a thoughtfully crafted story.

Every section should invite the visitor forward, making the journey through the portfolio as memorable as the destination.

---

End of Document