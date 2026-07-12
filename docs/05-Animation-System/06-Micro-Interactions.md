# Micro Interactions

> Version: 1.0
> Owner: Aakash Siddhpura
> Project: Portfolio v2
> Last Updated: July 2026

---

# Overview

Micro interactions are the smallest moments of feedback between the user and the interface.

Individually they seem insignificant.

Collectively they define the overall quality of the experience.

Every click, hover, focus, success message, loading indicator, and state transition should feel deliberate and polished.

The objective is to make the website feel alive without becoming distracting.

---

# Philosophy

Micro interactions should answer one question:

"Did the interface understand what the user just did?"

Every action deserves feedback.

Every feedback should feel elegant.

---

# Core Principles

✓ Immediate feedback

✓ Smooth transitions

✓ Never interrupt workflow

✓ Consistent behavior

✓ Purpose over decoration

✓ Delight through subtlety

---

# Timing

Instant Feedback

50–100ms

Hover

150–200ms

Click

100–180ms

State Changes

250–350ms

Success

400–600ms

Never delay user interaction.

---

###############################################################################

# Navigation

###############################################################################

## Active Navigation

Current section smoothly transitions to the active state.

Indicator slides naturally.

No flashing.

No abrupt movement.

---

## Navigation Click

User clicks menu item

↓

Button depresses slightly

↓

Smooth scroll begins

↓

Navigation updates automatically

---

###############################################################################

# Buttons

###############################################################################

Primary Button

Interaction

Hover

↓

Lift

↓

Click

↓

Press Down

↓

Release

↓

Glow returns

Click Animation

Scale

100%

↓

97%

↓

100%

Duration

120ms

---

Loading Button

User submits form

↓

Button width remains fixed

↓

Spinner appears

↓

Text changes to

Sending...

↓

Success state

Never resize the button.

---

Success State

Spinner

↓

Checkmark

↓

Success Text

↓

Return to normal

Duration

600ms

---

###############################################################################

# Links

###############################################################################

Text Links

Underline grows smoothly.

Arrow icon shifts 4px.

Color changes.

Nothing else.

---

External Links

Hover

↓

Small arrow animation

↓

Click

↓

Immediate feedback

---

###############################################################################

# Contact Form

###############################################################################

Field Focus

Border transitions to brand color.

Glow increases slightly.

Placeholder fades.

Cursor blinks immediately.

---

Validation

Error

↓

Border becomes red

↓

Small shake

↓

Error message fades in

Shake should happen once only.

---

Successful Input

Border

↓

Success Color

↓

Checkmark appears

↓

Returns to neutral

---

Form Submission

Submit

↓

Loading

↓

Success

↓

Confirmation

↓

Auto reset (optional)

Everything should happen naturally.

---

###############################################################################

# Copy to Clipboard

###############################################################################

Examples

Email

Phone

Discord

Interaction

Click

↓

Copy

↓

Toast appears

↓

Icon changes

↓

Returns after 2 seconds

Toast

Copied to clipboard

Simple.

Professional.

---

###############################################################################

# Resume Download

###############################################################################

Click

↓

Button compresses

↓

Download begins

↓

Toast

Resume Download Started

↓

Analytics Event

Never redirect users unnecessarily.

---

###############################################################################

# Project Cards

###############################################################################

Hover

↓

Image lifts

↓

CTA becomes visible

↓

Technology chips brighten

↓

Cursor changes

Click

↓

Ripple

↓

Page transition

---

###############################################################################

# Technology Chips

###############################################################################

Hover

↓

Background brightens

↓

Border appears

↓

Tiny elevation

No bouncing.

---

###############################################################################

# Social Icons

###############################################################################

Hover

↓

Glow

↓

Scale

↓

Brand color

Click

↓

Press animation

↓

Open link

↓

Return

---

###############################################################################

# Device Showcase

###############################################################################

User hovers

↓

Device tilts

↓

Screen reflection shifts

↓

Glow increases

User leaves

↓

Everything returns smoothly

Maximum rotation

3°

---

###############################################################################

# Statistics

###############################################################################

When entering viewport

↓

Count Up

↓

Glow

↓

Settle

Never replay.

---

###############################################################################

# Theme Elements

###############################################################################

Gradient

Moves continuously.

Very slowly.

Particles

Float naturally.

Glow

Breathes gently.

Grid

Static.

Only depth changes.

---

###############################################################################

# Cursor States

###############################################################################

Default

↓

Pointer

↓

Clickable

↓

Dragging

↓

Loading

Transitions should be smooth.

Never instantaneous.

---

###############################################################################

# Toast Notifications

###############################################################################

Style

Glass Card

Rounded

Blur

Shadow

Animation

Fade

↓

Slide Up

↓

Pause

↓

Fade Out

Position

Bottom Right

Desktop

Bottom Center

Mobile

---

###############################################################################

# Loading States

###############################################################################

Skeletons preferred.

Avoid spinners whenever possible.

Use shimmer.

Duration

Until data arrives.

---

###############################################################################

# Scroll Progress

###############################################################################

Top Progress Bar

Updates continuously.

Smooth interpolation.

Never jump.

---

###############################################################################

# Image Loading

###############################################################################

Blur Placeholder

↓

High Resolution

↓

Fade

↓

Sharp Image

Avoid sudden appearance.

---

###############################################################################

# Error States

###############################################################################

Errors should feel helpful.

Never alarming.

Example

Couldn't load this project.

Retry

Button appears.

Friendly language.

---

###############################################################################

# Empty States

###############################################################################

Future Blog

No articles yet.

I'm currently writing about engineering, architecture, and product development.

Instead of

"No Data"

---

###############################################################################

# Success Messages

###############################################################################

Friendly.

Short.

Professional.

Examples

Message Sent Successfully

Resume Download Started

Copied to Clipboard

Thanks for Connecting

Never use intrusive modals.

---

###############################################################################

# Sound

###############################################################################

No sound effects.

Ever.

The portfolio should remain silent.

---

###############################################################################

# Haptic Feedback

###############################################################################

Not applicable for desktop.

Mobile

Very light vibration

Only for

Successful form submission

(Optional)

---

###############################################################################

# Performance

###############################################################################

Micro interactions should never reduce FPS.

Target

60 FPS

Use

Opacity

Transform

GPU acceleration

Avoid expensive animations.

---

###############################################################################

# Accessibility

###############################################################################

Every interaction must support:

Keyboard

Screen Reader

Reduced Motion

High Contrast

Visible Focus

No interaction should rely solely on animation.

---

###############################################################################

# Technical Recommendation

###############################################################################

Use

Framer Motion

CSS Transitions

GSAP (only where necessary)

React Aria

React Hot Toast

Intersection Observer

Animations should remain component-based and reusable.

---

###############################################################################

# Success Criteria

###############################################################################

The interface should feel:

✓ Responsive

✓ Thoughtful

✓ Premium

✓ Predictable

✓ Delightful

Users should never consciously notice the micro interactions.

They should simply feel that everything responds exactly as expected.

---

# Final Principle

Micro interactions are the invisible craftsmanship behind a premium experience.

When designed well, they don't attract attention to themselves.

They quietly communicate that every detail has been considered.

The user should leave with one lasting impression:

"This product feels exceptionally well made."

---

End of Document