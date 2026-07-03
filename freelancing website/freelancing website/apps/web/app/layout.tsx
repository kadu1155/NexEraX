import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingActions } from "@/components/floating-actions";
import { CursorGlow } from "@/components/cursor-glow";
import { LanguageProvider } from "@/lib/i18n/language-context";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://nexera.com"),
  title: {
    default: "NexEraX | Websites That Grow Businesses",
    template: "%s | NexEraX"
  },
  description:
    "Fast, SEO optimized, AI powered business websites for startups, local businesses and brands.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "NexEraX",
    description: "Production-ready full-stack digital agency website.",
    url: "/",
    siteName: "NexEraX"
  },
  twitter: {
    card: "summary_large_image",
    title: "NexEraX",
    description: "Crafting Websites That Grow Businesses."
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E2F76"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LanguageProvider>
            <CursorGlow />
            {children}
            <FloatingActions />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
