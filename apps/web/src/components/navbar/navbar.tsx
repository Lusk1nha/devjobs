import { LogoIcon } from "@devjobs/icons/logo-icon";
import { ChangeThemeAction } from "../actions/change-theme-action";

import { Banner } from "../banner/banner";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="bg-dashboard-navbar-background w-full h-h-navbar md:h-h-navbar-md flex md:rounded-bl-[100px] overflow-hidden">
      <Banner className="w-full px-6 lg:px-16 pt-8 flex md:justify-center">
        <div className="md:max-w-w-content-md lg:max-w-w-content-lg w-full flex items-start justify-between gap-x-3">
          <Link href="/">
            <LogoIcon className="text-logo-primary" />
          </Link>

          <ChangeThemeAction />
        </div>
      </Banner>
    </div>
  );
}
