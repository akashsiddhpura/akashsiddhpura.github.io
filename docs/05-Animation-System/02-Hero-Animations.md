# Hero Animations

> Version: 1.0
> Owner: Aakash Siddhpura
> Project: Portfolio v2
> Last Updated: July 2026

---

# Overview

The Hero is the visual centerpiece of the portfolio.

Its animations should establish the personality of the website while directing attention naturally toward the content.

The Hero should communicate precision, confidence, and craftsmanship.

Motion should support storytelling rather than become the story itself.

---

# Objective

The Hero animation system should:

• Build a premium first impression

• Guide visual hierarchy

• Reward interaction

• Feel calm and sophisticated

• Encourage scrolling

---

# Motion Personality

The Hero should feel:

✓ Elegant

✓ Fluid

✓ Intentional

✓ Calm

✓ Responsive

✓ Modern

Never feel:

✗ Busy

✗ Loud

✗ Distracting

✗ Random

✗ Over-animated

---

# Hero Animation Timeline

Page Load Complete

↓

Background Environment Starts

↓

Navbar Ready

↓

Headline Reveal

↓

Supporting Text

↓

CTA Buttons

↓

Trust Indicators

↓

Device Showcase

↓

Ambient Motion

↓

Scroll Indicator

↓

Interactive State

---

# Background Animation

Purpose

Create depth without distraction.

Elements

• Animated gradient mesh

• Soft glow orbs

• Very subtle grid

• Noise texture

• Floating light particles

Animation

Gradient shifts slowly.

Glow moves gently.

Particles float randomly.

Duration

20–30 seconds

Loop

Infinite

Movement should remain almost unnoticeable.

---

# Hero Heading

Animation

Each line reveals independently.

Properties

Opacity

0 → 100%

Translate Y

24px → 0px

Blur

8px → 0px

Duration

700ms

Delay

120ms between lines

No typing animation.

No word-by-word reveal.

---

# Supporting Text

Starts after heading.

Animation

Fade + Slide Up

Opacity

0 → 100%

Translate Y

16px → 0px

Duration

500ms

---

# CTA Buttons

Primary Button

Appears first.

↓

Secondary Button

Appears second.

Animation

Fade

Translate Y

Scale

Opacity

0 → 100%

Scale

98% → 100%

Duration

350ms

Buttons should feel clickable.

---

# Availability Badge

Small fade animation.

Very subtle pulse every 6 seconds.

Pulse

Scale

100%

↓

102%

↓

100%

Do not animate continuously.

---

# Trust Indicators

Cards reveal one after another.

Animation

Fade

Translate Y

16px

↓

0px

Counter animation begins only after the card is visible.

Counters should animate only once.

---

# Device Showcase

Purpose

Demonstrate product quality.

Animation

Fade

Scale

Rotation

Translate Y

Properties

Opacity

0 → 100%

Scale

94% → 100%

Rotation

2°

↓

0°

Duration

900ms

---

# Device Floating Motion

Continuous

Very slow.

Movement

Y

-8px

↓

+8px

Rotation

-1°

↓

+1°

Duration

8 seconds

Loop

Infinite

Ease

ease-in-out

Motion should resemble an object gently floating.

---

# Device Project Rotation

Cycle through featured projects.

Order

Sulok

↓

Alpha Tribe

↓

Vignanam

↓

Quoodo

Transition

Crossfade

Slide

Duration

600ms

Pause

5–6 seconds

Transition should never interrupt user interaction.

---

# Background Glow

Large blurred lights.

Movement

Very slow.

Random paths.

Opacity

30%

↓

45%

↓

30%

Duration

15 seconds

Infinite

---

# Grid Pattern

Opacity

3–5%

No animation except tiny parallax.

Purpose

Add subtle technical texture.

---

# Mouse Parallax

Desktop only.

Elements responding

• Device

• Glow

• Gradient

Maximum movement

15px

Movement should lag slightly behind the cursor.

No exaggerated motion.

---

# CTA Hover

Primary Button

Lift

4px

Glow increases

Gradient shifts slightly

Duration

200ms

---

Secondary Button

Glass becomes brighter.

Border glow.

Very subtle elevation.

---

# Social Icons

Hover

Scale

100%

↓

108%

Rotate

2°

↓

0°

Duration

180ms

---

# Scroll Indicator

Animation

Arrow moves

0px

↓

8px

↓

0px

Opacity

100%

↓

50%

↓

100%

Duration

2 seconds

Infinite

---

# Hero Exit

As the user scrolls.

Heading

Moves upward slowly.

Opacity decreases slightly.

Device

Scales down slightly.

Background

Parallax.

Everything should transition naturally into the About section.

---

# Performance Rules

Maximum active animations

6

Use

transform

opacity

filter (minimal)

Avoid

layout changes

width

height

left

top

box-shadow animation

---

# Mobile Behavior

Reduce floating effects.

Disable mouse parallax.

Reduce particle count.

Reduce glow intensity.

Maintain fast rendering.

---

# Accessibility

Respect

prefers-reduced-motion

Disable:

Floating

Parallax

Background movement

Show content immediately.

---

# Technical Recommendation

Preferred Libraries

• GSAP (complex timeline animations)

• Framer Motion (React component animations)

• Lenis (smooth scrolling)

Use CSS animations only for lightweight, infinite effects such as subtle floating or pulsing.

---

# Success Criteria

Visitors should feel:

✓ This website is premium.

✓ Everything feels polished.

✓ Motion guides attention.

✓ Content remains the focus.

✓ The Hero feels alive without becoming distracting.

---

# Final Principle

The Hero should create an emotional response before the visitor reads a single sentence.

Every movement should quietly communicate the same qualities expected from the engineer behind the portfolio:

Precision.

Craftsmanship.

Attention to detail.

Confidence.

---

End of Document