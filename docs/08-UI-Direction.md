# UI Direction

> Version: 1.0
> Owner: Aakash Siddhpura
> Project: Portfolio v2
> Last Updated: July 2026

---

# Overview

This document defines the visual direction of Portfolio v2.

It serves as the bridge between product strategy and implementation.

Every UI decision should align with this document before any component is designed or implemented.

This is not a collection of random UI rules.

It is a complete visual system that ensures consistency, craftsmanship, accessibility, and engineering quality throughout the portfolio.

---

# Objective

The objective is simple.

Build a portfolio that feels like a premium software product.

Not a developer template.

Not a resume website.

Not a landing page copied from another designer.

Every section should communicate professionalism, engineering maturity, product thinking, and attention to detail.

---

# UI Philosophy

The interface should disappear.

Visitors should notice the experience, not the interface itself.

The design should quietly communicate quality through:

• Typography

• Layout

• Whitespace

• Motion

• Hierarchy

• Consistency

The UI should never compete with the content.

Instead, it should elevate it.

---

# Design Personality

The portfolio should feel:

• Premium

• Calm

• Confident

• Modern

• Editorial

• Technical

• Product-focused

• Elegant

• Intentional

Every design decision should reinforce these qualities.

---

# What The Website Should Feel Like

Imagine entering the office of a world-class product company.

Everything feels:

Clean.

Organized.

Purposeful.

Minimal.

Nothing exists without a reason.

That is the feeling this portfolio should create.

---

# Brand Keywords

Craftsmanship

Engineering

Trust

Clarity

Quality

Precision

Curiosity

Ownership

Innovation

Product Thinking

These words should guide every visual decision.

---

# Emotional Journey

Visitors should experience:

Curiosity

↓

Trust

↓

Connection

↓

Credibility

↓

Confidence

↓

Conversation

Every section should move visitors naturally to the next emotional stage.

---

# Design Inspiration

Take inspiration from products rather than portfolios.

Study:

Apple

Linear

Vercel

Framer

Stripe

Raycast

Notion

Arc Browser

Read.cv

Focus on understanding:

• Typography

• Rhythm

• Hierarchy

• Simplicity

• Motion

• Product presentation

Never copy layouts directly.

---

# What Makes Those Products Feel Premium

Large typography.

Generous whitespace.

Restrained color usage.

Excellent spacing.

Thoughtful interactions.

Consistent component language.

Subtle animations.

Clear hierarchy.

Minimal distractions.

The portfolio should adopt these principles rather than their appearance.

---

# Visual Language

The interface should feel:

Soft.

Modern.

Lightweight.

Intentional.

Content-first.

Avoid decorative elements unless they strengthen communication.

---

# Color Philosophy

Color exists to communicate hierarchy.

Not decoration.

The interface should rely primarily on:

Typography

Spacing

Contrast

Rather than vibrant colors.

---

# Color Palette

Primary Background

Dark Neutral

Secondary Surface

Slightly lighter neutral

Primary Text

Near White

Secondary Text

Muted Gray

Borders

Very subtle

Accent

Single brand accent color

Success

Green

Warning

Amber

Error

Red

Do not introduce unnecessary colors.

---

# Accent Color

Use only one accent color.

Its purpose is to highlight:

Links

Buttons

Interactive elements

Active navigation

Selection states

Never use the accent color as decoration.

---

# Background Philosophy

The background should never become the focus.

Preferred background:

Dark neutral gradient

↓

Noise texture

↓

Ambient lighting

↓

Very soft radial glow

The background should feel alive without attracting attention.

---

# Surface Design

Every elevated surface should feel like part of the same system.

Cards

Navigation

Floating panels

Contact section

Timeline

All share the same visual language.

---

# Border System

Use borders instead of heavy shadows.

Border Width

1px

Border Color

Very subtle neutral

Hover

Slightly brighter

Borders should define structure rather than decoration.

---

# Border Radius

Small Components

12px

Cards

24px

Buttons

14px

Inputs

14px

Large Containers

32px

Maintain consistency.

Avoid random radius values.

---

# Shadows

Shadows should communicate elevation.

Never decoration.

Levels

None

Small

Medium

Large

Use the smallest shadow that communicates depth.

Avoid heavy floating effects.

---

# Transparency

Transparency should be used carefully.

Allowed:

Navigation blur

Floating cards

Overlay menus

Avoid glassmorphism across the entire interface.

Glass is an accent.

Not a design language.

---

# Typography Philosophy

Typography is the primary design element.

Instead of relying on graphics,

communicate through excellent typography.

Every heading should feel deliberate.

Every paragraph should be comfortable to read.

---

# Font Selection

Primary

Modern geometric sans-serif.

Examples:

Geist

Inter

Satoshi

SF Pro (if available)

Avoid decorative fonts.

Avoid mixing font families.

---

# Typography Hierarchy

Hero

72px

Section Heading

56px

Sub Heading

36px

Card Heading

22px

Body

18px

Caption

15px

Micro

13px

Maintain this hierarchy throughout the project.

---

# Reading Width

Maximum paragraph width:

700–760px

Avoid extremely wide paragraphs.

Readable content creates a premium experience.

---

# Line Height

Headings

1.1

Body

1.7

Cards

1.6

Improve readability through spacing.

---

# Letter Spacing

Headings

Slightly tighter

Labels

Slightly wider

Body

Default

Avoid excessive tracking.

---

# Section Labels

Every major section begins with:

Uppercase

14px

Medium

Muted

Large letter spacing

Example

FEATURED PROJECTS

ABOUT

ENGINEERING PHILOSOPHY

This creates consistency.

---

# Spacing Philosophy

Whitespace is a design element.

Never fill empty space because it exists.

Visitors should feel relaxed while reading.

---

# Spacing Scale

4

8

12

16

24

32

48

64

96

120

160

Use only these spacing values.

Avoid arbitrary numbers.

---

# Section Padding

Desktop

160px

Tablet

120px

Mobile

80px

Maintain rhythm between sections.

---

# Content Width

Standard

1280px

Reading Width

760px

Forms

600px

Case Studies

900px

Never stretch content across the viewport.

---

# Grid System

Desktop

12 Columns

Tablet

8 Columns

Mobile

4 Columns

Every layout should align with the grid.

---

# Alignment

Default

Left aligned.

Centered layouts should be used only when:

Hero

Contact

Empty States

Everything else should prioritize readability.

---

# Design Decisions

## Decision 01

Typography is the primary visual language.

## Decision 02

Whitespace is never wasted space.

## Decision 03

Use restraint rather than decoration.

## Decision 04

Every color should communicate meaning.

## Decision 05

Premium interfaces feel calm, not busy.

---

# Things To Avoid

Do NOT use:

❌ Bright gradients

❌ Rainbow color palettes

❌ Neon colors

❌ Multiple accent colors

❌ Heavy shadows

❌ Excessive blur

❌ Overlapping cards

❌ Decorative backgrounds

❌ Random illustrations

❌ Visual clutter

---

# Success Checklist

- [ ] Calm visual appearance
- [ ] Premium typography
- [ ] Consistent spacing
- [ ] Strong hierarchy
- [ ] Excellent readability
- [ ] Unified color palette
- [ ] Modern visual language
- [ ] Minimal distractions

---

# Part 2 — Component Library

---

# Overview

This section defines every reusable UI component used throughout the portfolio.

Every component should feel like it belongs to the same design language.

Consistency is more important than variety.

Whenever possible, reuse an existing component instead of creating a new one.

Every component should be:

• Reusable

• Responsive

• Accessible

• Performant

• Beautiful

---

# Component Philosophy

A component should solve one problem well.

Avoid creating multiple versions of the same component without reason.

Every component should have:

Purpose

↓

Variants

↓

States

↓

Interactions

↓

Accessibility

↓

Responsive Behaviour

---

# Section Container

Purpose

Provide consistent spacing throughout the website.

Maximum Width

1280px

Reading Width

760px

Horizontal Padding

Desktop

64px

Tablet

40px

Mobile

24px

Vertical Padding

160px

Never manually add page spacing outside this system.

---

# Section Header

Every major section begins with:

Section Label

↓

Heading

↓

Description

Example

FEATURED PROJECTS

Products I've Helped Build

A selection of products where I focused on architecture, performance, and user experience.

Spacing

Label → Heading

12px

Heading → Description

24px

Description → Content

64px

---

# Buttons

Buttons should feel premium.

Never oversized.

Never flashy.

Buttons communicate confidence.

---

## Primary Button

Purpose

Main CTA

Examples

View Projects

Let's Talk

Download Resume

Height

48px

Padding

24px

Radius

14px

Font

16px

SemiBold

Hover

Lift 2px

↓

Soft Shadow

↓

Background Brightness +5%

Duration

180ms

---

## Secondary Button

Transparent

Border

1px

Muted Border

Hover

Border Brightens

↓

Background Surface

---

## Ghost Button

No Border

No Background

Hover

Underline

↓

Color Change

---

## Icon Button

Square

44px

Centered Icon

Used for:

GitHub

LinkedIn

Theme Toggle

Menu

---

# Cards

Cards communicate structure.

Not decoration.

Every card follows the same design language.

---

## Standard Card

Radius

24px

Padding

32px

Border

1px

Background

Surface

Shadow

Small

Hover

TranslateY(-4px)

↓

Border Brightens

↓

Shadow Medium

---

# Project Card

This is the most important component.

Structure

Image

↓

Title

↓

Description

↓

Highlights

↓

CTA

Image Ratio

16:10

Corner Radius

20px

Description

Maximum

3 Lines

Highlights

Maximum

4

CTA

View Case Study

Hover

Image Slight Zoom

↓

Card Lift

↓

CTA Highlight

---

# Engineering Card

Used for:

Philosophy

Expertise

Achievements

Current Learning

Structure

Icon

↓

Title

↓

Description

Simple.

No extra decoration.

---

# Timeline Card

Used inside Experience.

Structure

Timeline Dot

↓

Company

↓

Role

↓

Duration

↓

Highlights

↓

Tech Stack

↓

Project Link

Timeline

1px Line

Soft Color

---

# Contact Card

Used in Contact section.

Examples

Email

LinkedIn

GitHub

Resume

Structure

Icon

↓

Title

↓

Description

↓

Arrow

Hover

Border

↓

Lift

↓

Arrow Slides

---

# Badge

Small.

Minimal.

Rounded.

Examples

Flutter

BLoC

AWS

Production

Remote

Current

Height

28px

Padding

12px

Radius

999px

Never use bright colors.

---

# Tag

Used for:

Technology

Platform

Category

Smaller than badges.

Should never dominate.

---

# Navigation

Desktop

Logo

↓

Links

↓

CTA

Transparent until scroll.

Blur after scroll.

Height

72px

Sticky

Hover

Underline Animation

Active

Subtle Indicator

---

# Mobile Navigation

Menu Button

↓

Overlay

↓

Links

↓

CTA

↓

Social

Large touch targets.

No nested menus.

---

# Footer

Minimal.

Three Columns

Brand

Navigation

Social

Large spacing.

Quiet ending.

---

# Device Mockups

Never use low-quality mockups.

Preferred

iPhone

Pixel

MacBook

Use realistic shadows.

Keep perspective minimal.

Device should showcase the product.

Not the device.

---

# Screenshots

Only use:

High-resolution

Real screenshots

Consistent status bars

Consistent spacing

Avoid screenshots with different themes.

---

# Gallery

Grid

2 Columns

Hover

Slight Zoom

↓

Caption Appears

Avoid masonry layouts.

---

# Icons

Use

Lucide React

Style

Outline

Size

20px

24px

32px

Never mix icon packs.

---

# Dividers

Very subtle.

1px

Muted Border

Large vertical spacing.

Avoid decorative dividers.

---

# Lists

Spacing

12px

Simple bullets.

Never use decorative icons for every list.

---

# Quote Block

Used sparingly.

Large typography.

Muted accent line.

Maximum

2–3 lines.

---

# Statistics

Avoid:

Animated Counters

Huge Numbers

Instead use:

5+

Years

↓

4

Products

↓

Architecture

Performance

UX

Quality over vanity metrics.

---

# Empty State

Simple Illustration

↓

Title

↓

Description

↓

CTA

Never leave empty white space.

---

# Loading

Skeleton UI.

No spinner unless absolutely necessary.

Loading should communicate structure.

---

# Cursor

Small Dot

↓

Outer Ring

↓

Context Label

Examples

View

Open

Drag

Avoid oversized custom cursors.

---

# Theme Toggle

Small.

Minimal.

Smooth.

No dramatic transition.

---

# Search (Future)

Simple.

Command Palette style.

Inspired by Raycast.

Not required in v1.

---

# Component Naming

Use consistent naming.

Example

Button

ButtonPrimary

ButtonSecondary

ProjectCard

ContactCard

SectionHeading

TimelineItem

Avoid vague names.

---

# Component Folder Structure

components/

ui/

layout/

sections/

animations/

shared/

Keep reusable components separate from page-specific components.

---

# Design Decisions

## Decision 01

Every component should solve one problem.

## Decision 02

Reuse before creating.

## Decision 03

Component consistency is more important than uniqueness.

## Decision 04

Cards should communicate hierarchy, not decoration.

## Decision 05

Typography remains the primary design element.

---

# Things To Avoid

❌ Multiple button styles

❌ Different card radii

❌ Random hover effects

❌ Mixed icon packs

❌ Decorative shadows

❌ Complex component variants

❌ Inconsistent spacing

❌ Different border styles

---

# Component Checklist

Every component must be:

- [ ] Reusable
- [ ] Accessible
- [ ] Responsive
- [ ] Typed
- [ ] Documented
- [ ] Animation Ready
- [ ] Performance Optimized
- [ ] Theme Compatible
- [ ] Easy to Maintain

---

# 08-UI-Direction.md

# Part 3 — Motion, Responsive, Accessibility & Performance

---

# Overview

A beautiful interface is only half of the experience.

Motion, responsiveness, accessibility, and performance are what transform a website into a product.

Every interaction should feel intentional.

Every animation should communicate something.

Every page should remain fast regardless of device.

Visitors should remember how effortless the experience felt.

---

# Motion Philosophy

Motion should communicate.

Never decorate.

Every animation should answer one question:

"What information is this animation helping communicate?"

If there is no answer,

remove the animation.

---

# Motion Personality

Animations should feel:

• Calm

• Smooth

• Elegant

• Premium

• Confident

Never:

• Fast

• Bouncy

• Chaotic

• Playful

• Overly dramatic

---

# Animation Timing

Micro Interaction

150–180ms

Hover

180–220ms

Section Reveal

500–700ms

Page Transition

600–800ms

Navigation

250ms

Modal

250ms

Keep timing consistent throughout the application.

---

# Animation Curves

Preferred

ease-out

ease-in-out

Custom cubic bezier

Avoid:

Bounce

Elastic

Spring with excessive movement

Animations should stop precisely.

---

# Animation Hierarchy

Primary

Hero

Page Transition

Project Showcase

Secondary

Section Reveal

Cards

Timeline

Micro

Buttons

Links

Tags

Cursor

The importance of the animation should match the importance of the content.

---

# Page Load

The first impression matters.

Animation Order

Background

↓

Navigation

↓

Hero Label

↓

Heading

↓

Description

↓

Buttons

↓

Trust Indicators

↓

Visual

↓

Scroll Indicator

Visitors should never wait for the interface to become usable.

---

# Scroll Behaviour

Scrolling should feel:

Smooth

Natural

Responsive

Use Lenis.

Avoid excessive momentum.

Maintain native expectations.

---

# Section Reveal

Every section enters once.

Pattern

Fade

↓

Move Up

↓

Fade Complete

Duration

600ms

Delay

80ms

Do not replay when scrolling upward.

---

# Card Animation

Cards reveal sequentially.

Hover

↓

Lift

↓

Border Brightens

↓

Shadow Deepens

↓

Return Smoothly

Never rotate cards.

---

# Project Showcase

Image

↓

Title

↓

Description

↓

Highlights

↓

CTA

Each element reveals progressively.

The user should naturally read downward.

---

# Device Mockups

Float slightly.

Movement should be almost unnoticeable.

Never spin.

Never bounce.

Never rotate continuously.

---

# Navigation Motion

Transparent

↓

Blur

↓

Border

↓

Shadow

Smooth transition.

No sudden appearance.

---

# Cursor Behaviour

Small Dot

↓

Outer Ring

↓

Context Label

Context labels

View

Open

Scroll

Contact

Keep transitions subtle.

---

# Background Motion

Very slow.

Ambient.

Almost invisible.

Purpose

Create depth.

Never distract.

---

# Hover Philosophy

Hover should confirm interaction.

Not entertain.

Examples

Button

↓

Brightness

↓

Lift

↓

Shadow

Card

↓

Border

↓

Lift

↓

Shadow

Link

↓

Underline

↓

Color

---

# Responsive Philosophy

Responsive means redesign.

Not resize.

Each breakpoint deserves attention.

---

# Breakpoints

Mobile

320–639

Tablet

640–1023

Laptop

1024–1439

Desktop

1440+

Ultra Wide

1920+

---

# Layout Adaptation

Desktop

Information Rich

Tablet

Simplified

Mobile

Focused

Every breakpoint should have purpose.

---

# Hero

Desktop

Split Layout

Tablet

Vertical

Mobile

Single Column

CTA remains above the fold.

---

# Typography Scaling

Desktop

72px

Laptop

64px

Tablet

52px

Mobile

40px

Never reduce hierarchy.

---

# Images

Responsive

Optimized

Lazy Loaded

Proper aspect ratio

Avoid downloading desktop assets on mobile.

---

# Mobile Experience

Large touch targets

Large typography

Reduced animation

Simple layouts

Fast loading

Every interaction should feel native.

---

# Accessibility Philosophy

Accessibility is part of good engineering.

Not a checklist.

The website should be usable by everyone.

---

# Keyboard Support

Every interactive element

Tab accessible

Visible focus

Logical order

Escape closes overlays

Enter activates buttons

---

# Screen Readers

Use:

Semantic HTML

Proper headings

Alt text

Labels

ARIA only when required.

---

# Color Contrast

Minimum WCAG AA

Text should remain readable in all themes.

Never sacrifice readability for aesthetics.

---

# Reduced Motion

Respect operating system preferences.

Disable:

Parallax

Continuous animation

Large transitions

Replace with:

Opacity

Instant transitions

---

# Performance Philosophy

Performance is a feature.

Visitors should never think:

"This portfolio is beautiful but slow."

Instead:

"It feels effortless."

---

# Performance Budget

Initial JS

Keep minimal.

Images

Modern formats.

Fonts

Self-hosted.

Animations

GPU accelerated.

Avoid layout thrashing.

---

# Image Strategy

Next.js Image

AVIF

WebP

Responsive Sizes

Lazy Loading

Preload Hero

Compress screenshots

---

# Font Strategy

Self-host

Subset

Display swap

Avoid multiple font families.

---

# JavaScript Strategy

Server Components

↓

Dynamic Import

↓

Client Components only when necessary

↓

Code Splitting

↓

Tree Shaking

Minimize hydration.

---

# Lighthouse Targets

Performance

95+

Accessibility

100

SEO

100

Best Practices

100

These are quality requirements.

Not optional goals.

---

# AI Implementation Rules

Antigravity should:

Prefer CSS over JavaScript where possible.

Reuse components.

Avoid unnecessary dependencies.

Keep bundle size small.

Follow the design system.

Never invent new spacing values.

Never invent colors.

Never invent typography.

Never redesign components.

Always follow documentation first.

---

# Design Decisions

## Decision 01

Motion should support storytelling.

## Decision 02

Performance is more important than visual effects.

## Decision 03

Accessibility is mandatory.

## Decision 04

Every breakpoint deserves intentional design.

## Decision 05

Animations should feel invisible.

---

# Things To Avoid

❌ Scroll hijacking

❌ Heavy parallax

❌ Infinite animations

❌ Large blur filters

❌ Particle systems

❌ Cursor trails

❌ Autoplay videos

❌ Long loading screens

❌ Huge Lottie files

❌ Over-engineered interactions

---

# Quality Checklist

Before implementation is complete:

- [ ] 60 FPS animations
- [ ] Responsive layouts
- [ ] Accessible keyboard navigation
- [ ] Reduced motion support
- [ ] Proper alt text
- [ ] Lazy loaded images
- [ ] Optimized fonts
- [ ] Lighthouse targets achieved
- [ ] Smooth scrolling
- [ ] No layout shift
- [ ] No unnecessary JavaScript

---
# 08-UI-Direction.md

# Part 4 — AI Rules, Review Checklist & Definition of Done

---

# AI Implementation Philosophy

This project is not measured by how quickly it is completed.

It is measured by the quality of the final experience.

Every implementation decision should prioritize craftsmanship over speed.

When uncertain:

Choose the simpler solution.

When choosing between beautiful and fast:

Choose both.

When choosing between flashy and meaningful:

Choose meaningful.

---

# Source of Truth

Before implementing anything:

Read the documentation.

Priority order:

1. Project Overview

↓

2. Brand Identity

↓

3. Information Architecture

↓

4. Content Strategy

↓

5. Motion Design

↓

6. Experience Blueprint

↓

7. UI Direction

Never invent new patterns that contradict documentation.

---

# Component Philosophy

Every UI element should become a reusable component.

Never duplicate layouts.

Never duplicate styling.

Never duplicate animations.

If two components look similar,

they should probably be the same component.

---

# Component Inventory

Foundation

• Container

• Grid

• Stack

• Divider

• Section

• Surface

Typography

• SectionLabel

• Heading

• SubHeading

• Body

• Caption

• Quote

Navigation

• Navbar

• MobileMenu

• Footer

Buttons

• PrimaryButton

• SecondaryButton

• GhostButton

• IconButton

Cards

• ProjectCard

• TimelineCard

• ContactCard

• PhilosophyCard

• AchievementCard

• ExpertiseCard

Inputs

• Input

• TextArea

• Badge

• Tag

Media

• DeviceMockup

• ScreenshotGallery

• ImageReveal

Feedback

• LoadingSkeleton

• Toast

• EmptyState

Misc

• Cursor

• ThemeToggle

• SocialLinks

• ScrollIndicator

---

# Folder Structure

Use feature-first architecture.

Example

app/

components/

ui/

layout/

sections/

hooks/

lib/

types/

constants/

styles/

public/

docs/

Keep components small.

Keep logic separated.

---

# Code Philosophy

Every file should be easy to understand.

Every function should have one responsibility.

Every component should solve one problem.

Prefer composition over complexity.

---

# Naming Convention

Use clear names.

Good

ProjectCard

ExperienceTimeline

HeroSection

SectionHeading

Avoid

Card2

SectionFinal

MainComponent

TempWidget

---

# State Management

Prefer local state.

Lift state only when necessary.

Avoid unnecessary global state.

Server Components by default.

Client Components only when interaction requires them.

---

# Styling Rules

Tailwind only.

No inline styles unless unavoidable.

No duplicated utility combinations.

Extract reusable variants.

---

# Animation Rules

Every animation must answer:

Why does this exist?

If the answer is unclear,

remove it.

---

# Review Before Building

Before implementing a section ask:

Does it match the documentation?

Does it improve the story?

Does it build trust?

Is it responsive?

Is it accessible?

Can it be simpler?

---

# Review After Building

Review:

Layout

↓

Typography

↓

Spacing

↓

Accessibility

↓

Responsive

↓

Animations

↓

Performance

↓

Code

↓

Documentation

Only then continue.

---

# Self Review Checklist

Every completed section should satisfy:

✓ Premium appearance

✓ Strong hierarchy

✓ Consistent spacing

✓ Responsive

✓ Accessible

✓ Fast

✓ Clean code

✓ Matches documentation

✓ Uses reusable components

✓ Excellent UX

---

# Things AI Must Never Do

Never:

❌ Redesign sections without approval

❌ Ignore documentation

❌ Add unnecessary libraries

❌ Create duplicate components

❌ Invent new spacing systems

❌ Invent new typography

❌ Invent colors

❌ Add placeholder content

❌ Use Lorem Ipsum

❌ Add fake statistics

❌ Add fake testimonials

❌ Add fake awards

❌ Create generic portfolio sections

❌ Introduce unnecessary complexity

---

# Things AI Should Always Do

Always:

✅ Follow documentation

✅ Build reusable components

✅ Optimize images

✅ Respect accessibility

✅ Respect reduced motion

✅ Think mobile first

✅ Improve readability

✅ Optimize performance

✅ Keep code clean

✅ Review before continuing

---

# Performance Checklist

Images

✓ Optimized

Fonts

✓ Self-hosted

Animations

✓ GPU Accelerated

Bundle

✓ Minimized

Hydration

✓ Reduced

Lighthouse

✓ 95+

---

# Accessibility Checklist

✓ Keyboard Navigation

✓ Visible Focus

✓ Semantic HTML

✓ Alt Text

✓ Labels

✓ WCAG AA

✓ Reduced Motion

✓ Proper Heading Order

✓ Large Touch Targets

---

# Responsive Checklist

Desktop

✓

Laptop

✓

Tablet

✓

Mobile

✓

Landscape

✓

Portrait

✓

Ultra Wide

✓

No horizontal scrolling.

No layout shifts.

---

# SEO Checklist

✓ Metadata

✓ Open Graph

✓ Twitter Cards

✓ Structured Data

✓ Canonical URL

✓ Sitemap

✓ robots.txt

✓ Semantic Headings

✓ Optimized Images

---

# Motion Checklist

Animations should:

Guide

Support

Explain

Never distract.

Never reduce readability.

Never reduce performance.

---

# Content Checklist

No spelling mistakes.

No grammar mistakes.

Consistent tone.

Consistent formatting.

Short paragraphs.

Readable typography.

---

# Final Review

Before deployment ask:

Would Apple ship this?

Would Linear keep this?

Would Vercel approve this?

Would I proudly show this during an interview?

If not,

continue improving.

---

# Definition of Done

A section is complete only when:

✓ Matches documentation

✓ Looks premium

✓ Feels premium

✓ Fully responsive

✓ Accessible

✓ Fast

✓ Beautiful

✓ Production ready

Not simply because it "works."

---

# Final Principle

This portfolio is not a showcase of technologies.

It is a demonstration of engineering craftsmanship.

Every line of code, every interaction, every animation, every spacing decision, and every design choice should communicate the same message:

> Great software is not defined by the tools used to build it.

> It is defined by the experience it creates.

If someone leaves this portfolio remembering only one thing, let it be this:

**"This is an engineer I would trust to build our product."**

---

End of Document
