# Quoodo

> **Industry:** E-Commerce / Grocery Marketplace (B2B & B2C)
> **Role:** Senior Mobile App Developer
> **Platform:** Android & iOS
> **Status:** Production
> **Website:** https://www.quoodo.com/
> **Play Store:** https://play.google.com/store/apps/details?id=com.quoodob2b.android
> **App Store:** https://apps.apple.com/ar/app/quoodo-com/id1608142875?l=en-GB

---

# Overview

Quoodo is an online grocery and FMCG marketplace serving Dubai and the Northern Emirates. It supports both wholesale (B2B) buyers—retailers, restaurants, and businesses sourcing in bulk—and retail (B2C) customers shopping for home delivery.

The platform connects buyers with a wide catalog of groceries, beverages, household essentials, and lifestyle products from manufacturers, brands, and merchants. Shoppers can browse by category or brand, place scheduled or express orders, and complete secure digital payments with order tracking and in-app support.

As a Senior Mobile App Developer, I contributed to building commerce-focused Flutter modules, improving application architecture, optimizing catalog and checkout performance, and delivering a reliable buying experience for both home and shop customers.

---

# Product Vision

The vision behind Quoodo was to make grocery and FMCG procurement as simple for businesses as everyday shopping is for consumers.

Instead of juggling suppliers, phone orders, and fragmented catalogs, buyers get one mobile experience for product discovery, bulk purchasing, flexible delivery, and reliable order management across the UAE.

The application focuses on catalog clarity, purchasing confidence, and delivery reliability.

---

# My Role

My responsibilities included:

- Implementing core buyer flows for home and shop purchasing modes
- Building product catalog, search, and filter experiences
- Developing bulk-order and checkout workflows
- Integrating REST APIs and secure payment gateways
- Improving application architecture with BLoC and Clean Architecture
- Optimizing catalog browsing and network performance
- Building reusable UI components for commerce modules
- Collaborating with backend and product teams on order and delivery flows
- Delivering stable production releases for Android and iOS

---

# Key Features

### Dual Buyer Modes

Users choose whether they are shopping for home (B2C) or for a shop (B2B), unlocking the right catalog, pricing, and ordering experience for retail or wholesale needs.

---

### Product Catalog & Discovery

Browse thousands of grocery and FMCG products across categories such as food staples, beverages, dairy, household, personal care, and more—with search by brand, price, and quantity.

---

### Bulk Ordering & Checkout

Businesses can place wholesale orders with business-friendly purchasing flows, while retail customers enjoy a streamlined cart and secure checkout with card or cash-on-delivery options.

---

### Scheduled & Express Delivery

Customers pick delivery date and time for free on-time delivery across Dubai, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain, with express options via support channels.

---

### Real-time Support & Tracking

In-app chat and WhatsApp support help buyers confirm products and follow order status, payments, and refunds without leaving the shopping flow.

---

# Technical Architecture

The application follows a modular commerce architecture designed to support catalog growth and dual buyer workflows.

### Architecture

- Clean Architecture
- Repository Pattern
- BLoC State Management
- Dependency Injection
- REST APIs & payment gateway integration
- Local caching for catalogs and browsing resilience
- Modular feature structure for catalog, cart, orders, and support

This architecture simplified feature development while improving maintainability and scalability.

---

# Engineering Challenges

## Large Product Catalog Performance

Rendering and browsing thousands of SKUs with images, pricing, and filters required careful optimization.

I focused on efficient pagination, lazy loading, and caching so catalog screens stayed responsive on mid-range devices.

---

## B2B and B2C Workflow Separation

Home and shop buyers share one app but need different purchasing contexts.

Structured mode-aware flows and reusable commerce modules kept both experiences clear without duplicating the entire codebase.

---

## Search, Filters & Order Reliability

Fast product discovery and dependable checkout were essential for wholesale and retail trust.

The implementation prioritized responsive search/filter UX, resilient API handling, and clear order-state feedback throughout the purchase journey.

---

## Reusable Commerce Architecture

Catalog, cart, checkout, and order modules shared common patterns.

Instead of duplicating code, I developed reusable widgets, shared commerce components, and standardized patterns that improved development speed and reduced maintenance effort.

---

# Performance Optimizations

Key optimizations included:

- Catalog pagination and lazy loading
- API response and image caching
- Optimized widget rebuilding on listing screens
- Efficient state management for cart and orders
- Faster category and search navigation
- Reduced rendering overhead on large product lists
- Reusable commerce UI components
- Improved loading and empty states
- Better memory management during browsing

These improvements helped provide a responsive shopping experience even with large product catalogs.

---

# User Experience

Grocery and wholesale buyers need speed, clarity, and confidence while ordering.

The interface was designed with a focus on:

- Clear home vs shop shopping modes
- Fast catalog browsing and product discovery
- Simple cart and checkout flows
- Visible delivery scheduling choices
- Accessible in-app support during ordering
- Consistent commerce UI patterns
- Responsive feedback for payments and order status

Every design decision aimed to reduce friction between finding a product and completing a delivery-ready order.

---

# Tech Stack

### Mobile

- Flutter
- Dart

### State Management

- BLoC

### Architecture

- Clean Architecture
- Repository Pattern

### Networking

- REST APIs
- Payment Gateways

### Dependency Injection

- GetIt
- Injectable

### Local Storage

- Shared Preferences
- Secure Storage
- Catalog Caching

---

# Business Impact

Quoodo helped businesses and households across the UAE source groceries and FMCG products through a single mobile marketplace.

My contributions improved:

- Smoother wholesale and retail purchasing flows
- Faster product discovery across large catalogs
- More reliable checkout and order tracking
- Better scalability for marketplace features
- Improved mobile performance under catalog load
- Stronger maintainability for commerce modules

The modular architecture also enabled faster development of future marketplace features.

---

# Lessons Learned

Working on Quoodo expanded my understanding of commerce applications where catalog scale, buyer type, and delivery reliability are critical.

Key learnings included:

- Marketplace apps need architecture that scales with catalog size and buyer type
- B2B and B2C can share one product when mode-aware UX is designed carefully
- Search and listing performance directly affect conversion in commerce apps
- Caching and pagination are foundational for grocery-scale catalogs
- Clear order and delivery feedback builds trust in delivery-led products
- Collaborating closely with product and backend teams leads to more reliable purchase flows

---

# Gallery

The project page includes:

- Home / shop mode selection
- Product catalog browsing
- Search and category filters
- Cart and checkout
- Delivery scheduling
- Order tracking
- In-app support flows
- Performance highlights

---

# Key Takeaways

Quoodo strengthened my experience shipping a production grocery marketplace where catalog performance, dual buyer workflows, and reliable checkout matter as much as clean architecture.

The project reinforced the importance of writing scalable commerce code, designing reusable modules, and creating user experiences that help buyers discover products and complete orders with confidence.

Building Quoodo further developed my ability to transform complex marketplace requirements into clean, intuitive, and production-ready mobile solutions.
