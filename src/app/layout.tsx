import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fontHeading = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aakash Siddhpura | Software Engineer & Product Builder",
  description: "Software Engineer specializing in scalable mobile applications, product architecture, high-performance Flutter development, and exceptional user experiences. Explore projects, engineering philosophy, and experience.",
  keywords: [
    "Software Engineer",
    "Flutter Developer",
    "Product Engineer",
    "Flutter Architecture",
    "Flutter Performance",
    "Mobile Development",
    "Cross Platform",
    "Startup Engineer",
    "Freelance Flutter Developer"
  ],
  openGraph: {
    title: "Aakash Siddhpura | Software Engineer",
    description: "Building scalable software through thoughtful engineering, clean architecture, and exceptional user experiences.",
    type: "website",
    url: "https://your-domain.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aakash Siddhpura | Software Engineer",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Aakash Siddhpura | Software Engineer",
    description: "Building products that scale, perform, and create exceptional user experiences.",
    images: ["/og-image.jpg"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontHeading.variable} ${fontMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col selection:bg-primary/30 selection:text-primary-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Aakash Siddhpura",
              "url": "https://your-domain.com",
              "jobTitle": "Software Engineer",
              "sameAs": [
                "https://linkedin.com",
                "https://github.com/akashsiddhpura"
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
