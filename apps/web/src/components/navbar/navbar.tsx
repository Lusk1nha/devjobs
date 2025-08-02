import { Logo } from "@devjobs/ui/logo";
import { ChangeThemeAction } from "../actions/change-theme-action";

export function Navbar() {
  return (
    <div className="bg-dashboard-navbar-background w-full h-h-navbar md:h-h-navbar-md flex px-6 pt-8">
      <div className="flex items-start justify-between w-full px-4">
        <Logo className="text-logo-primary" />
        <ChangeThemeAction />
      </div>
    </div>
  );
}
