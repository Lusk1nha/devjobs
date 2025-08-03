import { forwardRef } from "react";
import { SVGComponentProps } from "./__types__/svg-type";

interface VerticalTriangleIconProps extends SVGComponentProps {}

const VerticalTriangleIcon = forwardRef<
  SVGSVGElement,
  VerticalTriangleIconProps
>((props, ref) => {
  return (
    <svg
      width="449"
      height="160"
      viewBox="0 0 449 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        opacity="0.0813802"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M262.888 -205.424C284.013 -229.387 323.214 -221.054 332.767 -190.571L446.885 173.592C456.265 203.528 429.922 232.479 399.236 225.956L32.7482 148.057C2.06267 141.535 -10.2281 104.372 10.5178 80.8396L262.888 -205.424Z"
        fill="currentColor"
      />
    </svg>
  );
});

VerticalTriangleIcon.displayName = "VerticalTriangleIcon";

export { VerticalTriangleIcon };
