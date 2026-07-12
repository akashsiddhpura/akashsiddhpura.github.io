# Loading Experience

> Version: 1.0
> Owner: Aakash Siddhpura
> Project: Portfolio v2
> Last Updated: July 2026

---

# Overview

Loading is not waiting.

Loading is communication.

Every loading state should reassure visitors that the application is working correctly while maintaining the premium feel of the portfolio.

Rather than showing generic spinners, loading experiences should preserve layout stability, communicate progress naturally, and transition smoothly into the final content.

The website should always feel responsive.

---

# Objective

Loading experiences should:

• Remove uncertainty

• Preserve layout

• Reduce perceived waiting time

• Maintain visual consistency

• Feel premium

---

# Philosophy

Users don't dislike waiting.

They dislike uncertainty.

Every loading state should answer:

✓ Something is happening.

✓ Your action was received.

✓ Content is on the way.

---

# Loading Principles

Always

✓ Preserve layout

✓ Show progress

✓ Keep interaction responsive

✓ Minimize visual shifts

Never

✗ Blank screens

✗ Endless spinners

✗ Layout jumping

✗ Frozen interface

---

###############################################################################

# Loading Hierarchy

###############################################################################

Application Load

↓

Page Load

↓

Section Load

↓

Component Load

↓

Image Load

↓

Form Submission

↓

Success State

Every level follows the same visual language.

---

###############################################################################

# Skeleton Screens

###############################################################################

Primary loading method.

Instead of showing:

Spinner

Show:

Skeleton Layout

The final layout should already be visible.

Only content is loading.

---

###############################################################################

# Skeleton Style

###############################################################################

Background

Dark Neutral

↓

Light Gradient

↓

Dark Neutral

Animation

Shimmer

Duration

1.5 seconds

Loop

Infinite

Opacity

20–40%

Rounded Corners

Same as final component.

---

###############################################################################

# Hero Loading

###############################################################################

Before Hero appears

Display

Background

↓

Logo

↓

Hero Skeleton

↓

Device Placeholder

↓

Navbar Placeholder

Transition naturally into real content.

Avoid flashing.

---

###############################################################################

# Project Cards

###############################################################################

Loading

Project Image Placeholder

↓

Title Placeholder

↓

Description Placeholder

↓

Technology Chips

↓

CTA Placeholder

Card height remains fixed.

No layout shift.

---

###############################################################################

# Experience Timeline

###############################################################################

Timeline line

↓

Company Cards

↓

Metrics

↓

Content

All represented with skeleton placeholders.

---

###############################################################################

# Images

###############################################################################

Display

Blur Placeholder

↓

Low Resolution

↓

High Resolution

↓

Fade

Never show empty image containers.

Support progressive loading.

---

###############################################################################

# Device Mockups

###############################################################################

Placeholder

Glass Device Outline

↓

Soft Screen Glow

↓

Application Screenshot

↓

Fade

Avoid sudden image appearance.

---

###############################################################################

# Statistics

###############################################################################

Before data

Display

Placeholder Numbers

Example

---

---

---

---

After loading

Animate counters.

Only once.

---

###############################################################################

# Contact Form

###############################################################################

Submitting

Button

↓

Loading State

↓

Spinner

↓

Sending...

Inputs become disabled.

Layout remains unchanged.

---

###############################################################################

# Success Transition

###############################################################################

Submit

↓

Spinner

↓

Checkmark

↓

Success Message

↓

Normal State

Duration

600ms

No page refresh.

---

###############################################################################

# Resume Download

###############################################################################

Click

↓

Button Loading

↓

Download Starts

↓

Toast

Resume download started.

Do not navigate away.

---

###############################################################################

# Copy to Clipboard

###############################################################################

Click

↓

Immediate Copy

↓

Toast

Copied Successfully

↓

Auto Dismiss

No loading required.

---

###############################################################################

# Lazy Loaded Sections

###############################################################################

Sections below the fold

Load only when approaching viewport.

Placeholder

↓

Content

↓

Animation

Avoid loading the entire website immediately.

---

###############################################################################

# Background Assets

###############################################################################

Large background assets

Load progressively.

Background animation begins only after:

Gradient

↓

Glow

↓

Noise

↓

Particles

Never block content rendering.

---

###############################################################################

# Fonts

###############################################################################

Use

font-display: swap

Avoid invisible text.

Fallback fonts should closely match the primary font.

Prevent layout shifts.

---

###############################################################################

# Route Changes

###############################################################################

If navigation exceeds

300ms

Show

Thin top progress bar.

Not a full-screen loader.

Transition should remain subtle.

---

###############################################################################

# Empty States

###############################################################################

Future Sections

Blog

Labs

Open Source

Display

Minimal Illustration

↓

Helpful Message

↓

Call To Action

Avoid generic:

"No Data"

---

###############################################################################

# Error States

###############################################################################

Friendly.

Calm.

Helpful.

Example

Something didn't load correctly.

Retry

↓

Report Issue (Optional)

Avoid technical jargon.

---

###############################################################################

# Offline State

###############################################################################

Detect offline.

Display

You're currently offline.

Some content may not be available.

Retry automatically when connection returns.

---

###############################################################################

# Slow Network

###############################################################################

If loading exceeds

2 seconds

Display

Still loading...

Optimizing the experience for your connection.

Avoid progress percentages.

---

###############################################################################

# Scroll Restoration

###############################################################################

After loading finishes

Restore previous scroll position.

Maintain context.

Never jump unexpectedly.

---

###############################################################################

# Animation Rules

###############################################################################

Loading

↓

Fade

↓

Content Reveal

Never

Loading

↓

Disappear

↓

Instant Content

Every transition should be smooth.

---

###############################################################################

# Mobile Behaviour

###############################################################################

Reduce shimmer intensity.

Disable unnecessary placeholders.

Prioritize immediate content rendering.

Reduce image resolution initially.

Optimize for slower networks.

---

###############################################################################

# Accessibility

###############################################################################

Support screen readers.

Announce:

Loading

Loaded

Success

Error

Respect

prefers-reduced-motion

Reduce shimmer.

Maintain visible focus.

---

###############################################################################

# Performance

###############################################################################

Target

First Contentful Paint

< 1.5s

Largest Contentful Paint

< 2.5s

CLS

< 0.1

Interaction to Next Paint

Excellent

Never sacrifice responsiveness for animation.

---

###############################################################################

# Technical Recommendation

###############################################################################

Use

Next.js Suspense

React Skeleton

Framer Motion

Image placeholders

Streaming SSR

Intersection Observer

Avoid full-screen blocking loaders after the initial visit.

---

###############################################################################

# Success Criteria

###############################################################################

Visitors should never wonder:

"Is the website broken?"

Instead they should always feel:

✓ Everything is loading.

✓ Everything is responsive.

✓ Everything feels polished.

✓ Everything feels intentional.

---

# Final Principle

A great loading experience doesn't make users notice that content is loading.

It makes waiting feel almost effortless.

Every loading state should quietly reinforce the same message communicated throughout the portfolio:

This product is thoughtfully engineered, carefully crafted, and built with attention to every detail.

---

End of Document