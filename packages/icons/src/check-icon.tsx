import { forwardRef } from "react";
import { SVGComponentProps } from "./__types__/svg-type";

interface CheckIconProps extends SVGComponentProps {}

const CheckIcon = forwardRef<SVGSVGElement, CheckIconProps>((props, ref) => {
  return (
    <svg
      width="15"
      height="12"
      viewBox="0 0 15 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M1 6.56948L4.57248 10.142L13.7144 1"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
});

CheckIcon.displayName = "CheckIcon";

export { CheckIcon };
