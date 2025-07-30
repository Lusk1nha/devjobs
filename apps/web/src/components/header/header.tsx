"use client";

import { ChangeThemeAction } from "../actions/change-theme/change-theme-action";

export function Header() {
  return (
    <header>
      <ChangeThemeAction />
    </header>
  );
}
