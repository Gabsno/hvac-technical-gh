"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "inline-grid h-10 w-10 place-items-center rounded-md border border-line text-ink-soft transition-colors hover:border-navy hover:text-navy",
        className,
      )}
    >
      {mounted ? (
        isDark ? <Sun size={16} aria-hidden /> : <Moon size={16} aria-hidden />
      ) : (
        <span className="block h-4 w-4" />
      )}
    </button>
  );
}
