import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-heading-1",
        "text-heading-2",
        "text-heading-3",
        "text-heading-4",
        "text-heading-5",
        "text-paragraph-1",
      ],
      "font-weight": [
        "text-heading-1--font-weight",
        "text-heading-2--font-weight",
        "text-heading-3--font-weight",
        "text-heading-4--font-weight",
        "text-heading-5--font-weight",
        "text-paragraph-1--font-weight",
      ],
      leading: [
        "text-heading-1--line-height",
        "text-heading-2--line-height",
        "text-heading-3--line-height",
        "text-heading-4--line-height",
        "text-heading-5--line-height",
        "text-paragraph-1--line-height",
      ],
      tracking: [
        "text-heading-1--letter-spacing",
        "text-heading-2--letter-spacing",
        "text-heading-3--letter-spacing",
        "text-heading-4--letter-spacing",
        "text-heading-5--letter-spacing",
        "text-paragraph-1--letter-spacing",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
