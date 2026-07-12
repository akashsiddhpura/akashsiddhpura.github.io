# Hover Interactions

> Version: 1.0
> Owner: Aakash Siddhpura
> Project: Portfolio v2
> Last Updated: July 2026

---

# Overview

Hover interactions provide immediate visual feedback and reinforce the premium quality of the portfolio.

Every hover should communicate that the interface is responsive, carefully crafted, and intentionally designed.

Hover effects should never distract from the content.

Their purpose is to reward interaction while maintaining a calm and elegant experience.

---

# Objective

Hover interactions should:

• Confirm interactivity

• Improve usability

• Reinforce hierarchy

• Increase perceived quality

• Create delightful micro moments

---

# Interaction Philosophy

Hover should feel:

✓ Responsive

✓ Premium

✓ Predictable

✓ Elegant

✓ Lightweight

Never feel:

✗ Flashy

✗ Unexpected

✗ Distracting

✗ Slow

✗ Excessive

---

# Motion Rules

Duration

150–220ms

Easing

ease-out

Preferred Properties

• Transform

• Opacity

• Border Color

• Background Color

• Glow Intensity

Avoid

• Width

• Height

• Layout changes

• Heavy shadow animations

---

###############################################################################

# Navigation

###############################################################################

Hover Behaviour

• Text color transitions to Primary Brand Color

• Small underline grows from center

• Background remains transparent

• Cursor changes smoothly

Animation

Duration

180ms

No scaling.

Navigation should remain stable.

---

###############################################################################

# Primary Button

###############################################################################

Hover Behaviour

• Lift upward by 4px

• Gradient shifts slightly

• Glow becomes stronger

• Shadow softens

• Arrow icon moves 4px to the right

Animation

Transform

translateY(-4px)

Glow

+20%

Duration

180ms

Buttons should feel tactile.

---

###############################################################################

# Secondary Button

###############################################################################

Hover Behaviour

• Glass surface becomes brighter

• Border opacity increases

• Slight elevation

• Text color brightens

Transform

translateY(-2px)

Very subtle.

---

###############################################################################

# Icon Buttons

###############################################################################

Examples

GitHub

LinkedIn

Resume

Email

Hover Behaviour

• Scale

100%

↓

108%

• Rotate

0°

↓

2°

↓

0°

• Background glow appears

Icons should remain readable.

---

###############################################################################

# Project Cards

###############################################################################

Hover Behaviour

Entire Card

• Lift 8px

• Border glows softly

• Glass becomes brighter

• Shadow deepens slightly

Preview Image

• Scale

100%

↓

103%

Technology Tags

• Slight upward movement

CTA

• Arrow slides right

Hover should encourage clicking.

---

###############################################################################

# Experience Cards

###############################################################################

Hover Behaviour

• Card lifts slightly

• Timeline node glows

• Year becomes primary color

• Border highlights

Purpose

Draw attention without overwhelming.

---

###############################################################################

# Philosophy Cards

###############################################################################

Hover Behaviour

• Icon rotates 4°

• Card elevation increases

• Accent glow appears

• Title changes to brand color

Interaction should communicate quality.

---

###############################################################################

# Skill Cards

###############################################################################

Hover Behaviour

• Card rises slightly

• Icon scales

• Border brightens

• Background glow increases

Technology chips remain static.

Avoid unnecessary movement.

---

###############################################################################

# Achievement Cards

###############################################################################

Hover Behaviour

• Number scales

100%

↓

103%

• Card elevation increases

• Border glow

• Metric icon animates slightly

Counters should never restart.

---

###############################################################################

# Contact Cards

###############################################################################

Hover Behaviour

• Lift

• Icon glow

• Border highlight

• Background brightness increases

Email card

Hover reveals

"Click to copy"

LinkedIn

Hover reveals

"Connect"

GitHub

Hover reveals

"Explore"

---

###############################################################################

# Form Fields

###############################################################################

Hover

Border

↓

Primary Color

Background

↓

Slightly brighter

Cursor

↓

Text

Focus

Handled separately.

Hover should remain subtle.

---

###############################################################################

# Social Links

###############################################################################

Hover Behaviour

• Scale

100%

↓

110%

• Icon becomes brand color

• Soft glow appears

No spinning.

No bouncing.

---

###############################################################################

# Technology Chips

###############################################################################

Hover Behaviour

• Background becomes brighter

• Border highlights

• Slight upward movement

Transform

translateY(-2px)

Purpose

Improve responsiveness.

---

###############################################################################

# Images

###############################################################################

Hover Behaviour

• Scale

100%

↓

102%

• Slight brightness increase

• Soft glow

No aggressive zoom.

---

###############################################################################

# Device Mockups

###############################################################################

Hover Behaviour

• Gentle tilt

Maximum

3°

• Lift

6px

• Screen brightness increases

• Reflection shifts slightly

Desktop only.

Disabled on touch devices.

---

###############################################################################

# Links

###############################################################################

Hover Behaviour

• Text changes to Primary Color

• Underline animates

Left

↓

Right

Duration

180ms

Simple and elegant.

---

###############################################################################

# Cursor Response

Every hoverable element should:

• Change cursor immediately

• Respond within 100ms

• Never feel delayed

Immediate feedback improves perceived performance.

---

# Shared Hover Tokens

Button Lift

4px

Card Lift

8px

Image Scale

1.02

Icon Scale

1.08

Glow Increase

20%

Border Brightness

15%

Rotation

Maximum 4°

---

# Mobile Behaviour

Hover interactions do not exist on touch devices.

Replace hover with:

• Touch feedback

• Ripple (minimal)

• Scale

100%

↓

98%

↓

100%

Duration

120ms

---

# Accessibility

Hover should never be the only way to access information.

Every hover effect must have an equivalent focus state.

Support keyboard navigation.

Maintain sufficient color contrast.

---

# Performance

Animate only:

✓ Transform

✓ Opacity

✓ Background Color

✓ Border Color

Avoid:

✗ Width

✗ Height

✗ Box Shadow Blur Radius

✗ Layout changes

GPU acceleration required.

---

# Technical Recommendation

Recommended

Framer Motion

CSS Transitions

GSAP (Complex Cards)

Keep hover logic component-based for consistency.

---

# Success Criteria

Every interactive element should feel:

✓ Responsive

✓ Premium

✓ Consistent

✓ Natural

✓ Predictable

Visitors should instinctively understand what can be interacted with.

---

# Final Principle

Hover interactions should feel like a quiet conversation between the user and the interface.

Every response should reinforce craftsmanship, attention to detail, and confidence—without ever demanding attention.

---

End of Document