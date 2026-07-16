export type ProjectData = {
  slug: string
  name: string
  industry: string
  role: string
  duration: string
  platform: string
  status: string
  heroImage: string
  shortDescription: string
  highlights: string[]
  tech: string[]
  overview: string
  vision: string
  responsibilities: string[]
  features: { title: string; description: string }[]
  architecture: { title: string; points: string[] }
  challenges: { title: string; description: string }[]
  optimizations: string[]
  ux: string[]
  techStack: Record<string, string[]>
  businessImpact: string[]
  lessonsLearned: string[]
  keyTakeaways: string
  links?: { label: string; href: string }[]
}

export const projects: ProjectData[] = [
  {
    slug: "sulok",
    name: "Sulok",
    industry: "Community Platform / Social Network",
    role: "Senior Mobile App Developer",
    duration: "2 Years",
    platform: "Android, iOS (Flutter), Web (Next.js - In Progress)",
    status: "Production",
    heroImage: "/images/blog-2.jpg",
    shortDescription:
      "A community platform combining social feeds, memberships, events, and payments into one production-ready mobile product.",
    highlights: [
      "Feed Architecture",
      "Performance Optimization",
      "Membership & Payments",
      "Media Caching",
    ],
    tech: ["Flutter", "BLoC", "REST API", "AWS S3", "WebSocket", "Drift"],
    overview: "Sulok is a community-driven social platform designed to help individuals, organizations, and communities build meaningful digital spaces. The platform enables communities (Lok) to share updates, manage memberships, organize events, communicate with members, and receive financial contributions—all within a single application.\n\nUnlike traditional social platforms that primarily focus on content sharing, Sulok combines social networking with community management, making it easier for organizations to engage and grow their audience.",
    vision: "The goal of Sulok is to provide communities with a single platform where they can:\n\n- Publish updates through rich social posts\n- Build exclusive communities using memberships\n- Organize and manage events\n- Accept contributions and payments\n- Connect members through community circles\n- Deliver a modern and engaging social experience",
    responsibilities: [
      "Improving the existing Flutter architecture",
      "Designing scalable application modules",
      "Leading development of major features",
      "Mentoring junior Flutter developers",
      "Optimizing application performance",
      "Researching better UX patterns",
      "Building reusable UI components",
      "Improving maintainability of the codebase",
      "Collaborating with backend and product teams",
      "Currently leading development of the Next.js web application"
    ],
    features: [
      {
        title: "Community Feed",
        description: "Users and communities can publish text, image, and video posts. The feed is optimized for smooth scrolling and high performance."
      },
      {
        title: "Lok (Community)",
        description: "Communities can build public or private spaces, publish updates, manage members, and create exclusive circles."
      },
      {
        title: "Membership System",
        description: "Communities can create paid membership plans allowing members to unlock exclusive content, circles, and events."
      },
      {
        title: "Payments",
        description: "Integrated payment flow allows communities to sell memberships, accept contributions, and manage premium access."
      }
    ],
    architecture: {
      title: "Clean Architecture",
      points: [
        "Clean Architecture & Repository Pattern",
        "BLoC State Management",
        "Dependency Injection using GetIt & Injectable",
        "REST API & WebSocket communication",
        "Drift Database",
        "Shared Preferences & Secure Storage"
      ]
    },
    challenges: [
      {
        title: "High Performance Feed",
        description: "Building a production-ready feed capable of handling large amounts of media content without affecting scrolling performance. Solved using intelligent pagination, image/video pre-caching, local feed caching, and efficient widget rebuilding."
      },
      {
        title: "Feed Cache Synchronization",
        description: "Updating cached posts with newly fetched API data while preserving the user's current scroll position. Solved by intelligently merging cached and fresh data instead of replacing the entire list, preventing UI flickering and scroll jumps."
      },
      {
        title: "Bottom Navigation Performance",
        description: "Instead of rebuilding every screen when switching tabs, important data was cached after the first load. This significantly reduced loading delays and gave users an almost native application experience."
      }
    ],
    optimizations: [
      "Feed media pre-caching",
      "Intelligent image and video caching",
      "Local database caching",
      "Cached bottom navigation screens",
      "Reduced unnecessary widget rebuilds",
      "Cleaner BLoC event handling",
      "Smooth scrolling experience",
      "Reusable UI components"
    ],
    ux: [
      "Carefully designed onboarding animations",
      "Smooth page transitions",
      "Consistent interaction feedback",
      "Responsive loading states",
      "Premium scrolling experience",
      "Fast navigation between modules"
    ],
    techStack: {
      "Mobile": ["Flutter", "Dart"],
      "State Management": ["BLoC"],
      "Architecture": ["Clean Architecture", "Repository Pattern"],
      "Backend": ["REST API", "WebSocket"],
      "Database": ["Drift", "Shared Preferences", "Secure Storage"],
      "Cloud": ["AWS S3"],
      "Dependency Injection": ["GetIt", "Injectable"]
    },
    businessImpact: [
      "Application performance",
      "Code maintainability",
      "Feature scalability",
      "User experience",
      "Development workflow",
      "Architecture quality"
    ],
    lessonsLearned: [
      "Performance should be considered from the beginning.",
      "Great user experience often comes from small technical decisions.",
      "Clean architecture becomes increasingly valuable as products grow.",
      "Collaboration between engineering and product teams leads to better solutions.",
      "Continuous refactoring is essential for long-term maintainability.",
      "Research and experimentation are important parts of delivering premium products."
    ],
    keyTakeaways: "Great software is not defined by the number of features it offers, but by how thoughtfully those features are engineered and how effortlessly they serve the people using them."
  },
  {
    slug: "alpha-tribe",
    name: "Alpha Tribe",
    industry: "FinTech / Stock Market",
    role: "Senior Mobile App Developer",
    duration: "1 Year",
    platform: "Android & iOS",
    status: "Production",
    heroImage: "/img/portfolio/alpha-tribe/1.png",
    shortDescription:
      "A FinTech intelligence app delivering real-time corporate announcements, watchlists, and AI-assisted market insights.",
    highlights: [
      "Real-time Data Sync",
      "WebSocket Integration",
      "Optimized State Management",
      "Low-Latency UI",
    ],
    tech: ["Flutter", "WebSocket", "BLoC", "REST API", "Firebase"],
    overview: "Alpha Tribe is a stock market intelligence platform designed to help investors stay informed through real-time corporate announcements, market updates, and AI-powered insights.\n\nThe application aggregates information from multiple sources and presents it in a structured and easy-to-consume format, allowing users to follow companies, monitor announcements, and receive timely updates without switching between different platforms.",
    vision: "The vision behind Alpha Tribe was to simplify how investors consume financial information. Instead of manually browsing multiple exchanges, company filings, and financial websites, users receive everything in a single application.",
    responsibilities: [
      "Developing production-ready Flutter modules",
      "Improving application architecture",
      "Building reusable UI components",
      "Optimizing data rendering",
      "Integrating multiple REST APIs",
      "Managing state using BLoC",
      "Improving performance across complex screens",
      "Ensuring scalability for future features"
    ],
    features: [
      {
        title: "Corporate Announcements",
        description: "Users can browse and search corporate announcements from listed companies with rich filtering and categorization."
      },
      {
        title: "Company Watchlist",
        description: "Users can follow companies and receive updates whenever new announcements are published."
      },
      {
        title: "AI Market Insights",
        description: "The platform provides AI-assisted summaries and insights, helping users understand large amounts of financial information more efficiently."
      }
    ],
    architecture: {
      title: "Modular Clean Architecture",
      points: [
        "Clean Architecture & Repository Pattern",
        "BLoC State Management",
        "Dependency Injection",
        "Modular Feature Structure"
      ]
    },
    challenges: [
      {
        title: "Large Data Rendering",
        description: "The application frequently displays large lists of corporate announcements. Optimized list rendering, reduced unnecessary widget rebuilds, and implemented efficient pagination to maintain smooth scrolling."
      },
      {
        title: "API Synchronization",
        description: "Market data changes frequently. The solution focused on minimizing unnecessary updates while ensuring users always received the latest information without negatively affecting the current user experience."
      },
      {
        title: "Complex Filtering",
        description: "The filtering system was designed to remain responsive even when handling large datasets and multiple criteria."
      }
    ],
    optimizations: [
      "Efficient API pagination",
      "Optimized widget rebuilding",
      "Lazy loading",
      "Local caching",
      "Reusable UI components",
      "Faster navigation",
      "Reduced rendering overhead"
    ],
    ux: [
      "Clear information hierarchy",
      "Responsive filtering",
      "Smooth animations",
      "Fast navigation",
      "Consistent visual components",
      "Easy-to-read financial data",
      "Professional interface suitable for daily usage"
    ],
    techStack: {
      "Mobile": ["Flutter", "Dart"],
      "State Management": ["BLoC"],
      "Architecture": ["Clean Architecture", "Repository Pattern"],
      "Networking": ["REST APIs"],
      "Dependency Injection": ["GetIt", "Injectable"]
    },
    businessImpact: [
      "Application performance",
      "Scalability",
      "Code quality",
      "User experience",
      "Feature maintainability",
      "Overall product stability"
    ],
    lessonsLearned: [
      "Designing interfaces for information-heavy products",
      "Managing large datasets efficiently",
      "Building scalable application architecture",
      "Optimizing rendering performance",
      "Creating reusable UI systems",
      "Balancing technical complexity with user experience"
    ],
    keyTakeaways: "Building a financial platform required careful attention to performance, architecture, and information design. Every engineering decision had to support fast access to constantly changing market data while maintaining a smooth and intuitive user experience."
  },
  {
    slug: "vignanam",
    name: "Vignanam",
    industry: "Spiritual & Educational Platform",
    role: "Senior Mobile App Developer",
    duration: "Production",
    platform: "Android & iOS",
    status: "Production",
    heroImage: "/img/portfolio/vignanam/1.jpg",
    shortDescription:
      "A multilingual spiritual and educational platform built for large content libraries, offline access, and smooth media experiences.",
    highlights: [
      "Offline Architecture",
      "Large Datasets",
      "Multilingual Support",
      "Storage Optimization",
    ],
    tech: ["Flutter", "SQLite", "Firebase", "REST API", "Caching"],
    overview: "Vignanam is a digital platform designed to make spiritual knowledge, scriptures, devotional content, and educational resources easily accessible to users through a modern mobile experience.\n\nThe application serves as a centralized platform where users can explore religious content, read articles, watch videos, listen to audio, and stay connected with daily spiritual updates.",
    vision: "The goal of Vignanam was to bridge traditional spiritual knowledge with modern technology. Instead of relying on multiple websites, books, and media platforms, users can access a complete collection of devotional and educational content from a single application.",
    responsibilities: [
      "Developing scalable Flutter modules",
      "Improving the existing application architecture",
      "Integrating REST APIs",
      "Building reusable UI components",
      "Optimizing media loading",
      "Improving application performance",
      "Enhancing reading experience",
      "Maintaining code quality"
    ],
    features: [
      {
        title: "Digital Library",
        description: "Users can browse a large collection of spiritual articles, scriptures, and educational resources organized into categories."
      },
      {
        title: "Audio & Video Content",
        description: "The application supports multimedia content, allowing users to watch videos and listen to devotional audio directly inside the app."
      },
      {
        title: "Offline Bookmarks",
        description: "Users can save their favorite articles and revisit them later for continued reading."
      }
    ],
    architecture: {
      title: "Content-Driven Architecture",
      points: [
        "Clean Architecture",
        "Repository Pattern",
        "BLoC State Management",
        "Dependency Injection",
        "Reusable UI Components"
      ]
    },
    challenges: [
      {
        title: "Large Content Rendering",
        description: "Displaying long-form articles while maintaining smooth scrolling required careful optimization focused on efficient widget composition and reducing unnecessary rebuilds."
      },
      {
        title: "Media Integration",
        description: "Combining text, images, audio, and video consistently while maintaining performance required reusable media components and optimized loading strategies."
      },
      {
        title: "Offline Experience",
        description: "Frequently accessed content and user preferences were cached locally to improve loading speed and reduce repeated network requests."
      }
    ],
    optimizations: [
      "Image caching",
      "Optimized content rendering",
      "Lazy loading",
      "Local caching",
      "Reduced widget rebuilds",
      "Faster navigation",
      "Reusable UI components",
      "Improved loading states"
    ],
    ux: [
      "Comfortable typography",
      "Clear content hierarchy",
      "Smooth page transitions",
      "Responsive layouts",
      "Fast navigation",
      "Consistent design language",
      "Media playback integrated naturally"
    ],
    techStack: {
      "Mobile": ["Flutter", "Dart"],
      "State Management": ["BLoC"],
      "Architecture": ["Clean Architecture", "Repository Pattern"],
      "Networking": ["REST APIs"],
      "Local Storage": ["Shared Preferences", "Local Caching"]
    },
    businessImpact: [
      "Application performance",
      "Code maintainability",
      "User experience",
      "Content accessibility",
      "Development scalability",
      "Overall application stability"
    ],
    lessonsLearned: [
      "Designing for long-form content consumption",
      "Building reusable content-driven UI components",
      "Optimizing media-heavy applications",
      "Creating scalable architectures for growing content libraries",
      "Balancing simplicity with functionality"
    ],
    keyTakeaways: "Great applications are not always measured by complexity—they are measured by how naturally they help users achieve their goals. The project reinforced the value of thoughtful architecture and user-centered design."
  },
  {
    slug: "quoodo",
    name: "Quoodo",
    industry: "E-Commerce / Grocery Marketplace (B2B & B2C)",
    role: "Senior Mobile App Developer",
    duration: "Production",
    platform: "Android & iOS",
    status: "Production",
    heroImage: "/img/portfolio/quoodo/1.png",
    shortDescription:
      "A UAE grocery and FMCG marketplace for wholesale buyers and retail shoppers—covering catalog discovery, bulk ordering, scheduled delivery, and secure checkout.",
    highlights: [
      "B2B & B2C Commerce",
      "Product Catalog",
      "Bulk Ordering",
      "Search & Filters",
    ],
    tech: ["Flutter", "REST API", "BLoC", "Payment Gateway", "Caching"],
    overview: "Quoodo is an online grocery and FMCG marketplace serving Dubai and the Northern Emirates. It supports both wholesale (B2B) buyers—retailers, restaurants, and businesses sourcing in bulk—and retail (B2C) customers shopping for home delivery.\n\nThe platform connects buyers with a wide catalog of groceries, beverages, household essentials, and lifestyle products from manufacturers, brands, and merchants. Shoppers can browse by category or brand, place scheduled or express orders, and complete secure digital payments with order tracking and in-app support.",
    vision: "The vision behind Quoodo was to make grocery and FMCG procurement as simple for businesses as everyday shopping is for consumers. Instead of juggling suppliers, phone orders, and fragmented catalogs, buyers get one mobile experience for product discovery, bulk purchasing, flexible delivery, and reliable order management across the UAE.",
    responsibilities: [
      "Implementing core buyer flows for home and shop purchasing modes",
      "Building product catalog, search, and filter experiences",
      "Developing bulk-order and checkout workflows",
      "Integrating REST APIs and secure payment gateways",
      "Improving application architecture with BLoC and Clean Architecture",
      "Optimizing catalog browsing and network performance",
      "Building reusable UI components for commerce modules",
      "Collaborating with backend and product teams on order and delivery flows",
      "Delivering stable production releases for Android and iOS"
    ],
    features: [
      {
        title: "Dual Buyer Modes",
        description: "Users choose whether they are shopping for home (B2C) or for a shop (B2B), unlocking the right catalog, pricing, and ordering experience for retail or wholesale needs."
      },
      {
        title: "Product Catalog & Discovery",
        description: "Browse thousands of grocery and FMCG products across categories such as food staples, beverages, dairy, household, personal care, and more—with search by brand, price, and quantity."
      },
      {
        title: "Bulk Ordering & Checkout",
        description: "Businesses can place wholesale orders with business-friendly purchasing flows, while retail customers enjoy a streamlined cart and secure checkout with card or cash-on-delivery options."
      },
      {
        title: "Scheduled & Express Delivery",
        description: "Customers pick delivery date and time for free on-time delivery across Dubai, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain, with express options via support channels."
      },
      {
        title: "Real-time Support & Tracking",
        description: "In-app chat and WhatsApp support help buyers confirm products and follow order status, payments, and refunds without leaving the shopping flow."
      }
    ],
    architecture: {
      title: "Commerce-Ready Modular Architecture",
      points: [
        "Clean Architecture & Repository Pattern",
        "BLoC State Management",
        "Dependency Injection",
        "REST APIs & payment gateway integration",
        "Local caching for catalogs and browsing resilience",
        "Modular feature structure for catalog, cart, orders, and support"
      ]
    },
    challenges: [
      {
        title: "Large Product Catalog Performance",
        description: "Rendering and browsing thousands of SKUs with images, pricing, and filters required efficient pagination, lazy loading, and caching so catalog screens stayed responsive on mid-range devices."
      },
      {
        title: "B2B and B2C Workflow Separation",
        description: "Home and shop buyers share one app but need different purchasing contexts. Structured mode-aware flows and reusable commerce modules kept both experiences clear without duplicating the entire codebase."
      },
      {
        title: "Search, Filters & Order Reliability",
        description: "Fast product discovery and dependable checkout were essential for wholesale and retail trust. Focused on responsive search/filter UX, resilient API handling, and clear order-state feedback throughout the purchase journey."
      }
    ],
    optimizations: [
      "Catalog pagination and lazy loading",
      "API response and image caching",
      "Optimized widget rebuilding on listing screens",
      "Efficient state management for cart and orders",
      "Faster category and search navigation",
      "Reduced rendering overhead on large product lists",
      "Reusable commerce UI components",
      "Improved loading and empty states"
    ],
    ux: [
      "Clear home vs shop shopping modes",
      "Fast catalog browsing and product discovery",
      "Simple cart and checkout flows",
      "Visible delivery scheduling choices",
      "Accessible in-app support during ordering",
      "Consistent commerce UI patterns",
      "Responsive feedback for payments and order status"
    ],
    techStack: {
      "Mobile": ["Flutter", "Dart"],
      "State Management": ["BLoC"],
      "Architecture": ["Clean Architecture", "Repository Pattern"],
      "Networking": ["REST APIs", "Payment Gateways"],
      "Local Storage": ["Shared Preferences", "Secure Storage", "Catalog Caching"],
      "Dependency Injection": ["GetIt", "Injectable"]
    },
    businessImpact: [
      "Smoother wholesale and retail purchasing flows",
      "Faster product discovery across large catalogs",
      "More reliable checkout and order tracking",
      "Better scalability for marketplace features",
      "Improved mobile performance under catalog load",
      "Stronger maintainability for commerce modules"
    ],
    lessonsLearned: [
      "Marketplace apps need architecture that scales with catalog size and buyer type.",
      "B2B and B2C can share one product when mode-aware UX is designed carefully.",
      "Search and listing performance directly affect conversion in commerce apps.",
      "Caching and pagination are foundational for grocery-scale catalogs.",
      "Clear order and delivery feedback builds trust in delivery-led products."
    ],
    keyTakeaways: "Building Quoodo strengthened my experience shipping a production grocery marketplace where catalog performance, dual buyer workflows, and reliable checkout matter as much as clean architecture. The project reinforced how commerce products succeed when technical decisions directly support discovery, purchasing confidence, and delivery clarity.",
    links: [
      { label: "Website", href: "https://www.quoodo.com/" },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.quoodob2b.android&hl=en_IN",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/ar/app/quoodo-com/id1608142875?l=en-GB",
      },
    ]
  }
]
