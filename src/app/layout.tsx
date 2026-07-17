import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { site } from "@/lib/site";
import "./globals.css";

const fontHeading = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const fontSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akashsiddhpura.github.io"),
  title: `${site.name} | ${site.title}`,
  description:
    "Software Engineer specializing in scalable mobile applications, product architecture, high-performance Flutter development, and exceptional user experiences.",
  keywords: [
    "Software Engineer",
    "Flutter Developer",
    "Product Engineer",
    "Flutter Architecture",
    "Mobile Development",
    "Cross Platform",
    "Startup Engineer",
  ],
  openGraph: {
    title: `${site.name} | Software Engineer`,
    description: site.tagline,
    type: "website",
    url: "https://akashsiddhpura.github.io",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} | Software Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Software Engineer`,
    description: site.tagline,
    images: ["/og-image.jpg"],
  },
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
      <body className="relative flex min-h-full flex-col overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: site.name,
              url: "https://akashsiddhpura.github.io",
              jobTitle: "Software Engineer",
              sameAs: [site.linkedin, site.github],
            }),
          }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
