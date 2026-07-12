# Background Animations

> Version: 1.0
> Owner: Aakash Siddhpura
> Project: Portfolio v2
> Last Updated: July 2026

---

# Overview

The background animation system creates atmosphere rather than decoration.

Its purpose is to add depth, motion, and visual harmony without competing with the portfolio content.

Visitors should almost never consciously notice the background animations.

Instead, they should simply feel that the website is calm, premium, and continuously alive.

---

# Objective

The background should:

• Create visual depth

• Increase perceived quality

• Support storytelling

• Reinforce the premium aesthetic

• Never distract from content

---

# Design Philosophy

The background should behave like ambient lighting.

Not like an animation.

Everything should move slowly.

Everything should feel intentional.

Everything should remain secondary to the content.

---

# Layer Architecture

The background consists of multiple independent layers.

Each layer moves at a different speed.

Each layer has a different purpose.

---------------------------------------------------

Layer 01

Base Gradient

↓

Layer 02

Noise Texture

↓

Layer 03

Grid Pattern

↓

Layer 04

Gradient Mesh

↓

Layer 05

Ambient Glow

↓

Layer 06

Floating Light Particles

↓

Layer 07

Section Highlights

---------------------------------------------------

The combination creates depth.

No single layer should dominate.

---

###############################################################################

# Layer 01

Base Gradient

###############################################################################

Purpose

Provide overall mood.

Animation

Very slow color interpolation.

Duration

45–60 seconds

Loop

Infinite

Movement

Barely noticeable.

Suggested Palette

Background

#06070B

↓

#0A0E17

↓

#0B1020

↓

Back

Never use bright gradients.

---

###############################################################################

# Layer 02

Noise Texture

###############################################################################

Purpose

Prevent flat colors.

Opacity

3–5%

Animation

None

Optional

Very subtle opacity shift every 20 seconds.

Noise should remain static.

---

###############################################################################

# Layer 03

Grid Pattern

###############################################################################

Purpose

Suggest engineering and structure.

Opacity

2–4%

Grid Size

48px

Animation

Very subtle parallax.

Maximum movement

12px

Only responds slightly to scroll.

Never animate continuously.

---

###############################################################################

# Layer 04

Gradient Mesh

###############################################################################

Purpose

Provide organic movement.

Animation

Control points move slowly.

Duration

30–40 seconds

Loop

Infinite

Movement

Large

Smooth

No sharp direction changes.

Colors

Brand Primary

Brand Accent

Neutral Blue

Very low opacity.

---

###############################################################################

# Layer 05

Ambient Glow

###############################################################################

Purpose

Create cinematic depth.

Elements

3–5 large blurred circles.

Size

400–800px

Blur

150–250px

Opacity

8–15%

Movement

Random paths.

Very slow.

Duration

18–30 seconds.

Glow should resemble soft studio lighting.

---

###############################################################################

# Layer 06

Floating Particles

###############################################################################

Purpose

Tiny feeling of movement.

Particle Count

Desktop

12–18

Mobile

0–4

Size

2–6px

Opacity

5–12%

Movement

Very slow upward drift.

Random horizontal variation.

Fade in.

↓

Float.

↓

Fade out.

↓

Respawn.

Duration

12–20 seconds.

Never resemble snowfall.

Never become visually obvious.

---

###############################################################################

# Layer 07

Section Highlight

###############################################################################

Purpose

Guide attention.

When entering a new section.

Background glow beneath that section increases slightly.

Opacity

+6%

↓

Returns gradually.

This subtly helps users recognize movement through the page.

---

###############################################################################

# Hero Background

###############################################################################

The Hero receives additional emphasis.

Include

• Strongest gradient

• Largest glow

• Most visible mesh

• Device lighting

As the user scrolls.

Intensity gradually decreases.

---

###############################################################################

# Mouse Parallax

###############################################################################

Desktop Only

Responsive Elements

• Glow

• Gradient Mesh

• Decorative Shapes

Maximum Movement

16px

Interpolation

Smooth.

Delayed.

Content should never move.

---

###############################################################################

# Decorative Shapes

###############################################################################

Optional

Large blurred geometric forms.

Examples

Circle

Soft Blob

Rounded Diamond

Opacity

Below 6%

Very slow movement.

Avoid obvious floating.

---

###############################################################################

# Lighting Behaviour

###############################################################################

Think of the page as a room.

Lighting changes naturally.

Never abruptly.

Transitions between sections should feel like moving through different spaces.

---

###############################################################################

# Color Behaviour

###############################################################################

Brand colors should never dominate.

Accent colors should appear only:

• Hero

• CTA

• Interactive states

Background remains neutral.

Dark-first.

---

###############################################################################

# Section Separation

###############################################################################

Avoid hard dividers.

Instead use:

• Gradient transitions

• Lighting

• Soft spacing

• Blur

The page should feel continuous.

---

###############################################################################

# Scroll Behaviour

###############################################################################

Background reacts subtly.

Allowed

Glow

Gradient

Parallax

Not Allowed

Fast movement

Rotation

Zoom

Content movement

---

###############################################################################

# Idle Behaviour

###############################################################################

When the user stops scrolling.

Background continues breathing.

Very slowly.

The page should never appear frozen.

---

###############################################################################

# Mobile Behaviour

###############################################################################

Reduce:

Glow count

Particles

Mesh complexity

Disable:

Mouse parallax

Large blur effects

Keep:

Gradient

Ambient lighting

Noise

Maintain battery efficiency.

---

###############################################################################

# Accessibility

###############################################################################

Respect

prefers-reduced-motion

Disable

Particles

Mesh movement

Parallax

Keep only:

Static gradient

Noise

Minimal glow

Maintain readability.

---

###############################################################################

# Performance

###############################################################################

Target

60 FPS

Use

CSS transforms

Opacity

Canvas (optional)

GPU acceleration

Avoid

SVG filters

Large blur animations

Heavy repainting

Continuously generating particles

Optimize for laptops.

---

###############################################################################

# Technical Recommendation

###############################################################################

Preferred Stack

CSS Variables

Framer Motion

Canvas (optional)

React Three Fiber

(Not required)

For this portfolio:

Avoid WebGL unless absolutely necessary.

The goal is elegance—not complexity.

---

###############################################################################

# Future Enhancement

###############################################################################

Optional Future Mode

Time-aware lighting.

Morning

Cool light.

Evening

Warmer tones.

Night

Darker ambience.

This should never affect readability.

---

###############################################################################

# Success Criteria

###############################################################################

Visitors should feel:

✓ Calm

✓ Premium

✓ Modern

✓ Immersed

✓ Focused

Without consciously noticing why.

The background should support the content—not compete with it.

---

# Final Principle

The background is the silent stage on which the entire portfolio is presented.

A great stage never steals attention from the performance.

Its purpose is to elevate every section through atmosphere, depth, and subtle motion.

When implemented correctly, visitors won't remember the background.

They'll remember how the entire portfolio made them feel.

---

End of Document