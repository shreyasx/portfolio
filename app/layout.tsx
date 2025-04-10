import "@/styles/globals.css";

import { Metadata } from "next";
import { Inter } from "next/font/google";

import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import { Toaster } from "@/components/ui/toaster";

import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shreyas Jamkhandi - Full-Stack Developer & Technical Consultant",
  description:
    "Experienced Full-Stack Developer specializing in modern web development, remote work advocate, and technical consultant.",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className={inter.variable}>
        <head />
        <body
          className={cn(
            "theme-transition min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
          >
            <div className="relative flex min-h-screen flex-col">
              {children}
            </div>
            <Toaster />
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
