"use client";

import { useCallback, useState } from "react";

import Link from "next/link";

import { MenuIcon, X } from "lucide-react";

import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();

      if (href === "/") {
        // Scroll to top when clicking the logo
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return;
      }

      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);

      if (element) {
        window.scrollTo({
          top: element.offsetTop - 64, // Adjust for navbar height
          behavior: "smooth",
        });
      }

      // Close mobile menu after clicking a link
      setIsMenuOpen(false);
    },
    []
  );

  return (
    <header className="theme-transition sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link
            href="/"
            onClick={(e) => handleScrollTo(e, "/")}
            className="flex items-center space-x-2 transition-colors hover:text-primary"
          >
            <span className="hidden text-lg font-bold leading-none sm:inline-block md:text-xl">
              Shreyas Jamkhandi
            </span>
            <span className="text-lg font-bold leading-none sm:hidden">SJ</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <div className="flex size-9 items-center justify-center">
            <ThemeToggle />
          </div>
          <button
            className="ml-4 flex size-9 items-center justify-center text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden items-center justify-end space-x-6 text-base font-medium md:flex md:space-x-8">
          {[
            { href: "#about", label: "About" },
            { href: "#skills", label: "Skills" },
            { href: "#projects", label: "Projects" },
            { href: "#experience", label: "Experience" },
            { href: "#contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={(e) => handleScrollTo(e, href)}
              className="group relative flex h-16 items-center text-foreground/70 transition-colors duration-250 ease-in-out-soft hover:text-primary"
            >
              {label}
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-center scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
          <div className="ml-2 flex size-9 items-center justify-center">
            <ThemeToggle />
          </div>
        </nav>
      </div>

      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <div className="absolute inset-x-0 top-16 z-50 border-b border-border/40 bg-background/95 p-4 shadow-md backdrop-blur supports-[backdrop-filter]:bg-background/80 md:hidden">
          <nav className="flex flex-col space-y-4 py-2">
            {[
              { href: "#about", label: "About" },
              { href: "#skills", label: "Skills" },
              { href: "#projects", label: "Projects" },
              { href: "#experience", label: "Experience" },
              { href: "#contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={(e) => handleScrollTo(e, href)}
                className="block py-2 text-foreground/80 transition-colors hover:text-primary"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
