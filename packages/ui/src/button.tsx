import { cn } from "@devjobs/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const buttonVariants = cva("inline-flex items-center justify-center rounded-5 hover:cursor-pointer text-heading-4", {
  variants: {
    variant: {
      default: "bg-button-default-bg hover:bg-button-default-hover-bg text-button-default-text hover:text-button-default-hover-text",
      ghost: "bg-transparent hover:bg-button-ghost-hover-bg/10 text-button-ghost-text hover:text-button-ghost-hover-text",
    },
    size: {
      default: "min-w-12 min-h-12 px-button-default-p py-button-default-p",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, variant, size, children, ...rest } = props;

  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
