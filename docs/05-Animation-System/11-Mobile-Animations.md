# Mobile Animations

> Version: 1.0
> Owner: Aakash Siddhpura
> Project: Portfolio v2
> Last Updated: July 2026

---

# Overview

The mobile experience should feel native, lightweight, and effortless.

Animations should reinforce quality while respecting battery life, performance, and touch interactions.

Unlike desktop, mobile users expect immediate responses.

Motion should feel integrated into the operating system rather than layered on top of it.

---

# Objective

The mobile animation system should:

• Feel native

• Maintain 60 FPS

• Prioritize responsiveness

• Reduce animation complexity

• Preserve battery life

• Support one-handed usage

---

# Mobile Philosophy

Desktop is designed for exploration.

Mobile is designed for speed.

Every animation should answer:

"Does this make the experience better on a phone?"

If not, remove it.

---

# Motion Personality

The mobile experience should feel:

✓ Fast

✓ Fluid

✓ Calm

✓ Responsive

✓ Native

Never:

✗ Heavy

✗ Delayed

✗ Over-animated

✗ Resource intensive

---

###############################################################################

# Performance First

###############################################################################

Target FPS

60 FPS

Animation Budget

Less than 16ms per frame

Avoid:

Heavy blur animations

Large particle systems

Complex SVG morphing

Large box-shadow animations

Continuous JavaScript loops

---

###############################################################################

# Page Load

###############################################################################

Desktop

~1600ms

↓

Mobile

~1000–1200ms

Prioritize immediate interaction.

Show content earlier.

Reduce decorative animation.

---

###############################################################################

# Hero Animation

###############################################################################

Sequence

Background

↓

Headline

↓

Supporting Text

↓

CTA

↓

Device Mockup

↓

Trust Indicators

Duration

20% faster than desktop.

Reduce blur.

Reduce translate distance.

Keep the Hero feeling premium but efficient.

---

###############################################################################

# Scroll Animations

###############################################################################

Reveal Distance

Desktop

24px

↓

Mobile

16px

Duration

500–650ms

Use:

Opacity

TranslateY

Avoid:

Large scaling

Complex stagger timing

---

###############################################################################

# Cards

###############################################################################

Cards reveal with:

Fade

↓

TranslateY

↓

Settle

No bouncing.

No elastic easing.

Maintain consistent timing.

---

###############################################################################

# Touch Feedback

###############################################################################

Instead of hover.

Tap

↓

Scale

100%

↓

97%

↓

100%

Duration

120ms

Purpose

Confirm interaction immediately.

---

###############################################################################

# Buttons

###############################################################################

Tap

↓

Compress

↓

Release

↓

Action

Buttons should feel tactile.

Primary CTA

Slight glow increase.

Secondary CTA

Border brightens.

---

###############################################################################

# Navigation

###############################################################################

Navigation Menu

Slide

↓

Fade

↓

Blur Background

Duration

250ms

Menu should open instantly.

Avoid full-screen dramatic transitions.

---

###############################################################################

# Bottom Sheet (Optional)

###############################################################################

Future Components

Contact

Project Filters

Blog Categories

Animation

Slide Up

↓

Fade

↓

Interactive

Feels like native iOS / Android.

---

###############################################################################

# Device Mockup

###############################################################################

Desktop Floating

↓

Disabled

Instead

Very subtle idle movement.

Maximum

2px

Purpose

Reduce GPU workload.

---

###############################################################################

# Cursor Effects

###############################################################################

Disabled.

Replace with:

Touch feedback

Ripple (minimal)

Scale

Native gestures

---

###############################################################################

# Background

###############################################################################

Reduce

Glow Count

Mesh Complexity

Particle Count

Disable

Mouse Parallax

Large Blur Motion

Complex Gradient Movement

Maintain

Gradient

Noise

Ambient Lighting

---

###############################################################################

# Images

###############################################################################

Progressive Loading

↓

Blur Placeholder

↓

Sharp Image

↓

Fade

Prevent layout shifts.

---

###############################################################################

# Project Cards

###############################################################################

Tap

↓

Card compresses slightly

↓

Transition begins

↓

Project opens

No hover-only interactions.

All important actions must be visible.

---

###############################################################################

# Forms

###############################################################################

Focus

↓

Border Highlight

↓

Keyboard Opens

↓

Viewport adjusts smoothly

Avoid content jumping.

Maintain field visibility.

---

###############################################################################

# Keyboard Behaviour

###############################################################################

When keyboard appears

Content scrolls smoothly.

Focused input remains visible.

Submit button remains accessible.

No layout breaking.

---

###############################################################################

# Toast Messages

###############################################################################

Position

Bottom Center

Animation

Fade

↓

Slide Up

↓

Pause

↓

Fade

Avoid covering navigation.

---

###############################################################################

# Loading

###############################################################################

Skeletons instead of spinners.

Shimmer

↓

Content

↓

Fade

Keep placeholders lightweight.

---

###############################################################################

# Gestures

###############################################################################

Future Ready

Swipe Back

Swipe Between Projects

Horizontal Gallery

Pull to Refresh

Gestures should feel native.

---

###############################################################################

# Accessibility

###############################################################################

Touch Target

Minimum

44 × 44px

Respect

Reduced Motion

Dynamic Text

VoiceOver

TalkBack

High Contrast

Visible Focus

---

###############################################################################

# Responsive Motion

###############################################################################

Large Phones

Normal animations.

Small Phones

Reduce motion distance.

Reduce stagger.

Reduce glow.

Foldables

Maintain layout continuity.

Tablets

Behave closer to desktop.

---

###############################################################################

# Battery Optimization

###############################################################################

Pause continuous animations when:

Browser tab inactive

Screen hidden

Battery saver enabled (where detectable)

Reduce animation workload automatically.

---

###############################################################################

# Technical Recommendation

###############################################################################

Use

Framer Motion

CSS Transforms

Intersection Observer

Native browser scrolling

Avoid:

Heavy JavaScript animation loops

Large Canvas effects

Unnecessary requestAnimationFrame usage

---

###############################################################################

# Success Criteria

###############################################################################

Visitors should feel:

✓ Fast

✓ Smooth

✓ Native

✓ Comfortable

✓ Premium

They should never feel:

"This website is struggling on my phone."

Instead they should think:

"This feels like a beautifully built mobile application."

---

# Final Principle

The mobile experience should never feel like a responsive version of the desktop website.

It should feel like the portfolio was designed for mobile from the very beginning.

Every animation should respect the constraints of mobile devices while delivering the same level of craftsmanship, quality, and attention to detail found throughout the entire portfolio.

---

End of Document