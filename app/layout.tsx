import "@/styles/globals.css";

import { Metadata, Viewport } from "next";

import { fontSans, fontDisplay, fontMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import { Toaster } from "@/components/ui/toaster";

import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f3" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0e0d" },
  ],
};

export const metadata: Metadata = {
  title: "Shreyas Jamkhandi — Full-Stack Engineer",
  description:
    "Full-stack engineer building products at startups. Remote-first, result-oriented, shipping fast.",
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
      <html
        lang="en"
        suppressHydrationWarning
        className={`${fontSans.variable} ${fontDisplay.variable} ${fontMono.variable}`}
      >
        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  try {
                    const theme = localStorage.getItem('theme');
                    if (!theme || theme === 'dark') {
                      document.documentElement.classList.add('dark');
                      document.documentElement.style.colorScheme = 'dark';
                    }
                  } catch (e) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.colorScheme = 'dark';
                  }
                })();
              `,
            }}
          />
        </head>
        <body
          className={cn(
            "noise-bg theme-transition min-h-screen bg-background antialiased",
            fontSans.variable,
            fontDisplay.variable,
            fontMono.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
          >
            <div className="relative z-10 flex min-h-screen flex-col">
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
