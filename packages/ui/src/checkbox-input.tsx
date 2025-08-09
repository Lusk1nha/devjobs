import { cn } from "@devjobs/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import React, { forwardRef, ReactNode, useId } from "react";
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
  checked?: boolean;
  defaultChecked?: boolean;
  children?: ReactNode;
  checkIcon?: React.ComponentType<{ className?: string }>;
}

const CheckboxInput = forwardRef<HTMLInputElement, CheckboxInputProps>(
  (
    {
      size,
      variant,
      checked,
      defaultChecked,
      children,
      className,
      checkIcon: Icon = CheckIcon,
      ...rest
    },
    ref
  ) => {
    const generatedId = useId();
    const id = rest.id || generatedId;

    return (
      <div className="flex items-center gap-x-4">
        <label
          htmlFor={id}
          className="group inline-flex items-center cursor-pointer"
          data-component="checkbox"
          data-variant={variant}
        >
          <span
            className={cn(
              checkboxInputVariants({ variant, size, checked }),
              "peer-focus:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2",
              className
            )}
          >
            <input
              id={id}
              type="checkbox"
              checked={checked}
              value={checked ? "true" : "false"}
              defaultChecked={defaultChecked}
              className="sr-only peer"
              data-value={checked ? "true" : "false"}
              ref={ref}
              {...rest}
            />

            {(checked ?? defaultChecked) && (
              <span className="absolute inset-0 flex items-center justify-center">
                <Icon className="text-checkbox-check-text" />
              </span>
            )}
          </span>
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
