import { forwardRef } from "react";
import { SVGComponentProps } from "./__types__/svg-type";

interface SemiTriangleIconProps extends SVGComponentProps {}

const SemiTriangleIcon = forwardRef<SVGSVGElement, SemiTriangleIconProps>(
  (props, ref) => {
    return (
      <svg
        width="121"
        height="96"
        viewBox="0 0 121 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        {...props}
      >
        <path
          opacity="0.0813802"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.539125 -321.259C-2.57848 -353.051 30.2504 -376.038 59.0593 -362.235L403.22 -197.337C431.511 -183.781 434.718 -144.77 409.02 -126.776L102.104 88.1286C76.4064 106.122 40.8448 89.766 37.7832 58.5447L0.539125 -321.259Z"
          fill="white"
        />
      </svg>
    );
  }
);

SemiTriangleIcon.displayName = "SemiTriangleIcon";

export { SemiTriangleIcon };
