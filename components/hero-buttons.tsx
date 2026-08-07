"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

export function HeroButtons() {
  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      window.scrollTo({
        top: element.offsetTop - 72,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
      <Button
        asChild
        size="lg"
        className="rounded-md bg-primary px-7 font-medium text-primary-foreground transition-all hover:bg-primary/85"
      >
        <Link href="#projects" onClick={(e) => handleScrollTo(e, "#projects")}>
          View My Work
        </Link>
      </Button>
      <Button
        asChild
        variant="outline"
        size="lg"
        className="rounded-md border-border px-7 font-medium text-foreground transition-all hover:border-primary/50 hover:text-primary"
      >
        <Link href="#contact" onClick={(e) => handleScrollTo(e, "#contact")}>
          Get in Touch
        </Link>
      </Button>
      <Button
        asChild
        variant="ghost"
        size="lg"
        // The ghost variant paints the hover background with --accent (brown), so the
        // label has to flip to white — its default hover colour sits on the same hue.
        className="rounded-md px-7 font-medium text-muted-foreground transition-all hover:bg-accent hover:text-white"
      >
        <a
          href="/shreyas-jamkhandi-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Résumé
        </a>
      </Button>
    </div>
  );
}
