# Section Reveals

> Version: 1.0
> Owner: Aakash Siddhpura
> Project: Portfolio v2
> Last Updated: July 2026

---

# Overview

Each section should have its own reveal sequence while maintaining a consistent animation language across the portfolio.

The purpose of section reveals is not to entertain users but to improve readability, guide attention, and create a smooth storytelling experience.

Every reveal should feel intentional, subtle, and premium.

---

# Objective

Each section reveal should:

• Introduce new content naturally

• Direct visual attention

• Improve reading flow

• Reinforce hierarchy

• Reward scrolling

---

# General Rules

Every section begins its animation when:

20–30% of the section enters the viewport.

Every reveal should complete within:

700–900ms

Maximum stagger delay:

600ms

Every animation should use:

Opacity

Translate

Minimal Blur

Never use:

Bounce

Elastic effects

Large rotations

Fast zooms

---

###############################################################################

# Hero

###############################################################################

Purpose

Create anticipation.

Sequence

Background

↓

Headline

↓

Description

↓

Buttons

↓

Trust Indicators

↓

Device

↓

Scroll Indicator

Animation Style

Elegant introduction.

The Hero should feel like opening a premium application.

---

###############################################################################

# Trust Indicators

###############################################################################

Purpose

Quickly establish credibility.

Sequence

Section Label

↓

Heading

↓

Metric Cards

↓

Engineering Badges

↓

Supporting Statement

Animation

Metric cards reveal one by one.

Counters animate after each card appears.

Hover adds subtle depth.

---

###############################################################################

# About

###############################################################################

Purpose

Tell the personal story.

Sequence

Portrait

↓

Heading

↓

Story

↓

Principles

↓

Quick Facts

Animation

Portrait fades and scales gently.

Story reveals paragraph by paragraph.

Principle cards appear with stagger.

Quick Facts animate last.

---

###############################################################################

# Engineering Philosophy

###############################################################################

Purpose

Reveal engineering mindset.

Sequence

Heading

↓

Introduction

↓

Philosophy Cards

↓

Workflow Diagram

↓

Closing Statement

Animation

Cards appear one after another.

Workflow draws progressively.

Icons fade independently.

---

###############################################################################

# Experience

###############################################################################

Purpose

Show career progression.

Sequence

Heading

↓

Timeline

↓

Company Cards

↓

Career Summary

Animation

Timeline line grows downward.

Experience cards alternate left and right on desktop.

Cards fade upward.

Each company appears independently.

---

###############################################################################

# Featured Projects

###############################################################################

Purpose

Present engineering capability.

Sequence

Heading

↓

Introduction

↓

Project Card

↓

Project Preview

↓

Business Impact

↓

Next Project

Animation

Project information appears first.

Device preview follows.

Metrics animate afterwards.

Scrolling naturally transitions to the next project.

---

###############################################################################

# Technical Expertise

###############################################################################

Purpose

Show engineering depth.

Sequence

Heading

↓

Expertise Categories

↓

Technology Ecosystem

↓

Engineering Principles

Animation

Capability cards reveal in rows.

Technology chips fade progressively.

Hover reveals additional emphasis.

---

###############################################################################

# Achievements

###############################################################################

Purpose

Build confidence.

Sequence

Heading

↓

Business Impact

↓

Engineering Excellence

↓

Metrics

↓

Closing Statement

Animation

Achievement cards stagger.

Counters animate once.

Business achievements appear before technical achievements.

---

###############################################################################

# Contact

###############################################################################

Purpose

Encourage conversation.

Sequence

Heading

↓

Introduction

↓

Contact Form

↓

Contact Cards

↓

Availability

↓

CTA

Animation

Form fades naturally.

Fields appear progressively.

Cards reveal with stagger.

Submit button receives subtle emphasis.

---

###############################################################################

# Footer

###############################################################################

Purpose

Create a memorable ending.

Sequence

Brand

↓

Navigation

↓

Social Links

↓

Availability

↓

Copyright

Animation

Everything fades upward.

Social icons animate individually.

Footer glow begins moving slowly.

---

# Shared Reveal Properties

Opacity

0 → 100%

Translate Y

24px → 0px

Blur

8px → 0px

Scale (Optional)

98% → 100%

Rotation

Maximum 2°

Only decorative elements.

---

# Stagger Timing

Heading

0ms

Subheading

100ms

Content

200ms

Cards

80ms between items

Buttons

150ms

Images

250ms

Never delay content unnecessarily.

---

# Scroll Trigger

Trigger Point

25%

Viewport

Animation

Play Once

Do not replay continuously.

If the user scrolls back:

Maintain final state.

---

# Decorative Elements

Allowed to animate

• Glow

• Mesh

• Floating Shapes

• Device Mockups

• Particles

Not allowed

• Paragraphs

• Forms

• Navigation

• Important content

Content always has priority.

---

# Mobile Behaviour

Reduce stagger delay.

Disable heavy transforms.

Reduce blur.

Prioritize performance.

Maintain readability.

---

# Accessibility

Respect

prefers-reduced-motion

When enabled

Disable:

Translate

Blur

Parallax

Scale

Replace with:

Instant opacity transition.

---

# Performance Guidelines

Use:

Intersection Observer

GPU transforms

Opacity

Transform

Avoid:

Layout shifts

Continuous scroll listeners

Heavy repaint effects

---

# Technical Recommendation

Primary

Framer Motion

Complex Sections

GSAP ScrollTrigger

Scroll Engine

Lenis

Use lazy animation initialization for below-the-fold sections.

---

# Success Criteria

Every section should feel:

✓ Connected

✓ Purposeful

✓ Easy to read

✓ Visually engaging

✓ Premium

Visitors should always know:

• Where they are

• What to read next

• What action to take

---

# Final Principle

Section reveals should quietly guide the visitor through the portfolio.

The animations should disappear into the experience, allowing the content and engineering story to remain the true focus.

---

End of Document