"use client";

import { MoonIcon } from "@devjobs/icons/moon-icon";
import { SunIcon } from "@devjobs/icons/sun-icon";
import { SwitchInput } from "@devjobs/ui/switch-input";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useMemo, useState } from "react";

export function ChangeThemeAction() {
  const { theme, systemTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDarkMode = useMemo(() => {
    if (!mounted) return false;

    return theme === "dark" || (theme === "system" && systemTheme === "dark");
  }, [mounted, theme, systemTheme]);

  const handleThemeChange = useCallback(() => {
    const isCurrentlyDark =
      theme === "dark" || (theme === "system" && systemTheme === "dark");

    setTheme(isCurrentlyDark ? "light" : "dark");
  }, [mounted, setTheme, theme, systemTheme]);

  if (!mounted) return null;

  return (
    <span className="flex items-center text-switch-theme-icon gap-x-4">
      <SunIcon className="w-5 h-5" />
      <SwitchInput
        name="theme-switch"
        title="Toggle theme"
        aria-description="Toggle between light and dark mode"
        aria-label="Toggle theme"
        alt="Toggle theme"
        checked={isDarkMode}
        onChange={handleThemeChange}
      />
      <MoonIcon className="w-4 h-4" />
    </span>
  );
}
