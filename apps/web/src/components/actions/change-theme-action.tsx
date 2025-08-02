"use client";

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
    <div className="flex items-center">
      <SwitchInput
        name="theme-switch"
        checked={isDarkMode}
        onChange={handleThemeChange}
      />
    </div>
  );
}
