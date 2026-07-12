# Page Load

> Version: 1.0
> Owner: Aakash Siddhpura
> Project: Portfolio v2
> Last Updated: July 2026

---

# Overview

The page load sequence is the visitor's very first interaction with the portfolio.

Its purpose is to create a polished first impression while preparing the user for the experience ahead.

The loading experience should never feel artificial or unnecessarily long.

Visitors should immediately feel that they are entering a carefully crafted digital product rather than a traditional portfolio website.

---

# Objective

The page load should communicate:

• Premium craftsmanship

• Performance

• Attention to detail

• Confidence

The animation should feel smooth, fast, and intentional.

---

# Duration

Target Duration

1200–1800ms

Never exceed

2500ms

If assets finish loading earlier, continue immediately.

Do not artificially delay the experience.

---

# Experience Timeline

Browser Opens

↓

Background Fade

↓

Brand Reveal

↓

Ambient Lighting Appears

↓

Content Framework Appears

↓

Hero Animates

↓

Background Motion Starts

↓

User Can Interact

---

# Step 01

Background Initialization

Duration

250ms

Background starts from:

Pure Dark

↓

Primary Background Gradient

Soft ambient glow begins appearing.

No sudden flashes.

---

# Step 02

Brand Reveal

Duration

500ms

Display

AS Monogram

or

Aakash Siddhpura

Centered.

Fade + Scale

95%

↓

100%

Opacity

0

↓

100%

The logo should feel elegant.

No bouncing.

---

# Step 03

Ambient Environment

Duration

400ms

Background elements begin appearing.

Examples

• Soft mesh gradient

• Blur lights

• Noise texture

• Grid texture

Everything should fade naturally.

---

# Step 04

Navigation

Duration

350ms

Navbar slides from:

Y = -20px

↓

0

Opacity

0

↓

100%

Delay

After brand reveal.

---

# Step 05

Hero Heading

Duration

700ms

Reveal line by line.

Line 1

↓

Pause

↓

Line 2

↓

Pause

↓

Supporting Text

Use fade + translateY.

Distance

20px

Avoid typing animations.

---

# Step 06

CTA Buttons

Duration

350ms

Buttons fade upward.

Primary button first.

Secondary button follows.

Delay

100ms

---

# Step 07

Trust Indicators

Duration

350ms

Statistics appear sequentially.

5+

↓

10+

↓

500K+

↓

4+

Counter animation begins only after cards are visible.

---

# Step 08

Hero Device

Duration

800ms

Phone mockup enters.

Animation

Scale

95%

↓

100%

Opacity

0

↓

100%

Rotation

2°

↓

0°

Very subtle.

---

# Step 09

Background Motion

Duration

Continuous

Ambient glow begins moving.

Particles begin floating.

Gradient slowly shifts.

Motion should be barely noticeable.

---

# Step 10

Scroll Indicator

Duration

300ms

Fade in.

Begin gentle floating animation.

Purpose

Invite scrolling.

---

# Animation Order

1

Background

↓

2

Brand

↓

3

Navbar

↓

4

Headline

↓

5

Description

↓

6

Buttons

↓

7

Trust Indicators

↓

8

Hero Device

↓

9

Background Motion

↓

10

Scroll Indicator

---

# Motion Values

Fade

Opacity

Translate

20px

Scale

95% → 100%

Rotation

Maximum 2°

Blur

8px → 0px

Avoid excessive transforms.

---

# Visual Style

Everything should feel:

Elegant

Minimal

Confident

Professional

Avoid

Flashing

Explosions

Large zooms

Bouncy motion

Fast rotations

---

# Loading Behavior

If resources are ready

↓

Continue immediately.

If loading takes longer

↓

Display subtle progress indicator.

Never freeze the screen.

---

# Performance Rules

Use GPU accelerated transforms.

Animate only:

Transform

Opacity

Filter (minimal)

Avoid

Layout shifts

Width animation

Height animation

Large shadow animation

---

# Accessibility

Respect

prefers-reduced-motion

When enabled

Skip non-essential animations.

Show content immediately.

Navigation should always remain accessible.

---

# Mobile Behavior

Reduce animation duration by 20%.

Disable heavy background effects.

Reduce particle count.

Prioritize fast interaction.

---

# User Emotion

Visitor should think:

"This feels like a premium software product."

Not

"This is a portfolio."

---

# Success Criteria

The page load should:

✓ Feel smooth

✓ Feel fast

✓ Avoid unnecessary waiting

✓ Build anticipation

✓ Transition naturally into the Hero

✓ Never block interaction longer than necessary

---

# Final Principle

The loading sequence should quietly communicate one message before a single word is read:

"This engineer pays attention to every detail."

Every animation should reinforce craftsmanship, not showmanship.

---

End of Document