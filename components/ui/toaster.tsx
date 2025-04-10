"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

export function Toaster({ ...props }: ToasterProps) {
  const { theme, resolvedTheme } = useTheme();

  // Use resolvedTheme to correctly handle system preference
  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <Sonner
      theme={currentTheme as "light" | "dark" | "system"}
      className="toaster group"
      position="top-right"
      richColors
      {...props}
    />
  );
}
