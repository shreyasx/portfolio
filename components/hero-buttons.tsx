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
        top: element.offsetTop - 64, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:gap-6">
      <Button
        asChild
        size="lg"
        className="hover-lift w-full rounded-md px-6 font-medium sm:w-auto sm:px-8"
      >
        <Link href="#projects" onClick={(e) => handleScrollTo(e, "#projects")}>
          View My Work
        </Link>
      </Button>
      <Button
        asChild
        variant="outline"
        size="lg"
        className="hover-lift w-full rounded-md border-primary/30 px-6 font-medium hover:border-primary/50 hover:bg-primary/10 sm:w-auto sm:px-8"
      >
        <Link href="#contact" onClick={(e) => handleScrollTo(e, "#contact")}>
          Get in Touch
        </Link>
      </Button>
    </div>
  );
}
