"use client";

import * as React from "react";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="aspect-square size-9 min-h-9 min-w-9 rounded-full border-primary/20 bg-secondary/50 p-0 transition-all duration-250 ease-in-out-soft hover:bg-secondary"
    >
      <Sun className="size-[1.3rem] rotate-0 scale-100 text-amber-500 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-[1.3rem] rotate-90 scale-0 text-blue-300 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
