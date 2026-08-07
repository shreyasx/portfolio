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

const SITE_URL = "https://shreyasx.netlify.app";
const TITLE = "Shreyas Jamkhandi — Senior Full-Stack Engineer";
const DESCRIPTION =
  "Senior full-stack engineer in Bangalore. Production LLM and agent systems at Tracxn; sole engineer of a live B2B compliance platform before that. Co-founder of TeachPad (2,000+ users) and builder of StoreScope.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  // Only favicon.ico exists in /public — do not reference icons that 404.
  icons: { icon: "/favicon.ico" },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Shreyas Jamkhandi",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/shreyas.jpg",
        width: 639,
        height: 640,
        alt: "Shreyas Jamkhandi",
      },
    ],
  },
  twitter: {
    // The only image on the site is a square portrait, so a summary card renders
    // it correctly; summary_large_image would crop it into a letterbox.
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@shreyxs",
    images: ["/shreyas.jpg"],
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
