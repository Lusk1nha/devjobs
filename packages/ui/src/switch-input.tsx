import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "../../utils/src/cn";

const switchInputVariants = cva(
  `relative inline-flex items-center cursor-pointer`,
  {
    variants: {
      variant: {
        default: "rounded-12",
      },
      checked: {
        true: "bg-switch-active",
        false: "bg-switch-inactive",
      },
      size: {
        default: "w-switch-w h-switch-h",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface SwitchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof switchInputVariants> {
  name: string;
  checked: boolean;
}
const SwitchInput = forwardRef<HTMLInputElement, SwitchInputProps>(
  (props, ref) => {
    const { size, variant, checked, className, ...rest } = props;

    return (
      <label
        className={cn(
          "group",
          switchInputVariants({ variant, size, checked, className })
        )}
        data-component="switch"
        data-variant={variant}
      >
        <input
          type="checkbox"
          checked={checked}
          className="sr-only peer"
          data-value={checked ? "true" : "false"}
          ref={ref}
          {...rest}
        />

        <div
          className={cn(
            "bg-switch-dot group-hover:bg-switch-dot-hover min-w-3.5 min-h-3.5 absolute top-1/2 transform -translate-y-1/2 rounded-full transition-transform duration-200 ease-in-out",
            checked ? "right-[5px] translate-x-0" : "left-[5px] translate-x-0"
          )}
        />
      </label>
    );
  }
);

SwitchInput.displayName = "SwitchInput";

export { SwitchInput, switchInputVariants };
