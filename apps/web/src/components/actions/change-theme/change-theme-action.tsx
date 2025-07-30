"use client";

import { useTheme } from "next-themes";
import { useCallback } from "react";

export function ChangeThemeAction() {
  const { setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    console.log("Toggling theme");
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, [setTheme]);

  return <button onClick={toggleTheme}>Toggle Theme</button>;
}
