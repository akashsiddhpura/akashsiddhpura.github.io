export type ProjectData = {
  slug: string
  name: string
  industry: string
  role: string
  duration: string
  platform: string
  status: string
  heroImage: string
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
    industry: "Business Productivity / CRM",
    role: "Senior Mobile App Developer",
    duration: "Production",
    platform: "Android & iOS",
    status: "Production",
    heroImage: "/img/portfolio/quoodo/1.png",
    overview: "Quoodo is a business productivity platform designed to help organizations streamline their sales processes, customer interactions, and internal workflows through a modern mobile application.\n\nThe platform enables teams to manage leads, customers, activities, and business operations while providing a centralized experience that improves collaboration and productivity.",
    vision: "The vision behind Quoodo was to simplify business operations by providing teams with a unified platform for managing customers, sales activities, and daily operations. Instead of switching between multiple business tools, users can perform their essential tasks within a single mobile application.",
    responsibilities: [
      "Developing production-ready Flutter features",
      "Improving existing application architecture",
      "Building reusable UI components",
      "Integrating REST APIs",
      "Optimizing application performance",
      "Enhancing business workflows",
      "Maintaining scalable code structure",
      "Delivering stable production releases"
    ],
    features: [
      {
        title: "Customer Management",
        description: "Users can manage customer information, track interactions, and maintain organized customer records."
      },
      {
        title: "Lead Management",
        description: "The application allows sales teams to manage potential customers through different stages of the sales pipeline."
      },
      {
        title: "Activity Tracking",
        description: "Users can monitor daily activities, follow-ups, and business tasks to improve productivity."
      }
    ],
    architecture: {
      title: "Modular Architecture",
      points: [
        "Clean Architecture",
        "Repository Pattern",
        "BLoC State Management",
        "Dependency Injection",
        "Modular Feature Structure"
      ]
    },
    challenges: [
      {
        title: "Managing Complex Business Workflows",
        description: "Business applications often involve multiple user flows, permissions, and dependencies between modules. Focused on creating reusable components and well-structured business logic."
      },
      {
        title: "Large Form Management",
        description: "Several modules required users to complete detailed forms with validation and conditional fields. The implementation prioritized responsiveness while keeping the UX simple."
      },
      {
        title: "Data Synchronization",
        description: "The application efficiently synchronized local data with backend updates while minimizing unnecessary API requests and maintaining UI consistency."
      }
    ],
    optimizations: [
      "API response caching",
      "Optimized widget rebuilding",
      "Lazy loading",
      "Efficient state management",
      "Faster screen navigation",
      "Reduced rendering overhead",
      "Reusable UI components",
      "Improved loading states"
    ],
    ux: [
      "Simple navigation",
      "Fast task completion",
      "Consistent UI patterns",
      "Clear information hierarchy",
      "Responsive interactions",
      "Smooth transitions",
      "Reduced user effort"
    ],
    techStack: {
      "Mobile": ["Flutter", "Dart"],
      "State Management": ["BLoC"],
      "Architecture": ["Clean Architecture", "Repository Pattern"],
      "Networking": ["REST APIs"],
      "Local Storage": ["Shared Preferences", "Secure Storage"]
    },
    businessImpact: [
      "Application performance",
      "Code maintainability",
      "UI consistency",
      "Development scalability",
      "Overall product stability",
      "User experience"
    ],
    lessonsLearned: [
      "Designing scalable business workflows",
      "Building reusable application modules",
      "Managing complex forms and validation",
      "Improving application maintainability",
      "Delivering reliable production software"
    ],
    keyTakeaways: "Building Quoodo further developed my ability to transform complex business requirements into clean, intuitive, and production-ready mobile solutions where performance, maintainability, and user productivity are equally important."
  }
]
