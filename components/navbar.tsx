"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { MenuIcon, X } from "lucide-react";

import { ThemeToggle } from "./theme-toggle";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();

      if (href === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);

      if (element) {
        window.scrollTo({
          top: element.offsetTop - 72,
          behavior: "smooth",
        });
      }

      setIsMenuOpen(false);
    },
    []
  );

  return (
    <header className="theme-transition sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-[4.5rem] items-center justify-between">
        <Link
          href="/"
          onClick={(e) => handleScrollTo(e, "/")}
          className="font-display text-lg font-bold tracking-tight transition-colors hover:text-primary"
        >
          <span className="hidden sm:inline">Shreyas Jamkhandi</span>
          <span className="sm:hidden">SJ</span>
        </Link>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            className="flex size-10 items-center justify-center text-foreground/70"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={(e) => handleScrollTo(e, href)}
              className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {label}
            </Link>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute inset-x-0 top-[4.5rem] z-50 border-b border-border/60 bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="container flex flex-col gap-1 py-4">
            {NAV_ITEMS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={(e) => handleScrollTo(e, href)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
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
