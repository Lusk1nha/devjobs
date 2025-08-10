import { cn } from "@devjobs/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import React, { forwardRef } from "react";

import { CheckIcon } from "@devjobs/icons/check-icon";

const checkboxInputVariants = cva(
  "relative inline-flex items-center justify-center cursor-pointer",
  {
    variants: {
      variant: {
        default: "rounded-3",
      },
      checked: {
        true: "bg-checkbox-active",
        false: "bg-checkbox-inactive/10 hover:bg-checkbox-inactive-hover/25",
      },
      size: {
        default: "w-checkbox-w h-checkbox-h",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface CheckboxInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof checkboxInputVariants> {
  name: string;
  checked: boolean;
  children?: string;
}

const CheckboxInput = forwardRef<HTMLInputElement, CheckboxInputProps>(
  (props, ref) => {
    const { size, variant, checked, children, className, ...rest } = props;

    return (
      <div className="flex items-center gap-x-4">
        <label
          className={cn(
            "group",
            checkboxInputVariants({ variant, size, checked, className })
          )}
          data-component="checkbox"
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

          {checked && (
            <div className="absolute inset-0 flex items-center justify-center">
              <CheckIcon className="text-checkbox-check-text" />
            </div>
          )}
        </label>

        {children && (
          <span className="text-checkbox-label-text text-heading-4">
            {children}
          </span>
        )}
      </div>
    );
  }
);

CheckboxInput.displayName = "CheckboxInput";

export { CheckboxInput, checkboxInputVariants };
