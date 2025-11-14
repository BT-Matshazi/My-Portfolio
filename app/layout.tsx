import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bekithembamatshazi.com"),
  title: {
    default: "Bekithemba Matshazi | Full-Stack Developer & Software Engineer",
    template: "%s | Bekithemba Matshazi",
  },
  description:
    "Experienced Full-Stack Developer specializing in TypeScript, React, Next.js, Go, and Express.js. Building exceptional and accessible digital experiences for the web.",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "Web Developer",
    "TypeScript",
    "React",
    "Next.js",
    "Go",
    "Express.js",
    "Node.js",
    "Frontend Developer",
    "Backend Developer",
    "Bekithemba Matshazi",
  ],
  authors: [{ name: "Bekithemba Matshazi", url: "https://bekithembamatshazi.com" }],
  creator: "Bekithemba Matshazi",
  publisher: "Bekithemba Matshazi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bekithembamatshazi.com",
    title: "Bekithemba Matshazi | Full-Stack Developer & Software Engineer",
    description:
      "Experienced Full-Stack Developer specializing in TypeScript, React, Next.js, Go, and Express.js. Building exceptional and accessible digital experiences for the web.",
    siteName: "Bekithemba Matshazi Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bekithemba Matshazi - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bekithemba Matshazi | Full-Stack Developer & Software Engineer",
    description:
      "Experienced Full-Stack Developer specializing in TypeScript, React, Next.js, Go, and Express.js.",
    images: ["/og-image.png"],
    creator: "@BTMatshazi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://bekithembamatshazi.com",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bekithemba Matshazi",
    jobTitle: "Full-Stack Developer",
    url: "https://bekithembamatshazi.com",
    sameAs: [
      "https://github.com/BT-Matshazi",
      "https://www.linkedin.com/in/bekithemba-matshazi-419386153/",
    ],
    knowsAbout: [
      "TypeScript",
      "React",
      "Next.js",
      "Go",
      "Express.js",
      "Node.js",
      "Full-Stack Development",
      "Web Development",
      "Software Engineering",
    ],
    description:
      "Experienced Full-Stack Developer specializing in TypeScript, React, Next.js, Go, and Express.js. Building exceptional and accessible digital experiences for the web.",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex mx-auto min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
