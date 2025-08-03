import * as React from "react";
import { cn } from "@devjobs/utils/cn";

interface TextInputContextValue {
  hasError: boolean;
}
const TextInputContext = React.createContext<TextInputContextValue | null>(
  null
);

interface InputWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
  hasError?: boolean;
}

const Wrapper = React.forwardRef<HTMLDivElement, InputWrapperProps>(
  ({ children, className, hasError = false, ...props }, ref) => {
    const contextValue = React.useMemo(() => ({ hasError }), [hasError]);

    return (
      <TextInputContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn("w-full h-full flex flex-col gap-2", className)}
          {...props}
        >
          {children}
        </div>
      </TextInputContext.Provider>
    );
  }
);

interface InputRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Root = React.forwardRef<HTMLDivElement, InputRootProps>(
  ({ children, className, ...props }, ref) => {
    const context = React.useContext(TextInputContext);

    if (!context) {
      console.error("Input.Root must be used within Input.Wrapper");
      return null;
    }

    return (
      <div
        ref={ref}
        data-slot="input-root"
        className={cn(
          `bg-text-input-bg w-text-input-w h-text-input-h flex items-center gap-4 rounded-6 py-4 text-paragraph-1`,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Root.displayName = "Input.Root";

interface InputIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}
const Icon = React.forwardRef<HTMLSpanElement, InputIconProps>(
  ({ children, className, ...props }, ref) => (
    <span
      data-slot="input-icon"
      ref={ref}
      className={cn(
        "hidden md:!flex h-5 w-5 items-center justify-center text-text-input-icon",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
);
Icon.displayName = "Input.Icon";

export interface TextInputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Field = React.forwardRef<HTMLInputElement, TextInputFieldProps>(
  ({ className, ...props }, ref) => {
    const context = React.useContext(TextInputContext);

    if (!context) {
      console.error("Input.Field must be used within Input.Root");
      return null;
    }

    return (
      <input
        ref={ref}
        data-slot="input-field"
        className={cn(
          "w-full flex-1 bg-transparent outline-none text-input-text placeholder:text-input-placeholder/50",
          className
        )}
        {...props}
      />
    );
  }
);
Field.displayName = "Input.Field";

interface InputErrorProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}
const InputError = React.forwardRef<HTMLSpanElement, InputErrorProps>(
  ({ children, className, ...props }, ref) => {
    const context = React.useContext(TextInputContext);

    if (!context) {
      console.error("Input.Error must be used within Input.Root");
      return null;
    }

    if (!context.hasError) return null;

    return (
      <span
        ref={ref}
        data-slot="input-error"
        className={cn(
          `flex items-center justify-center text-input-error-text text-preset-4`,
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);
InputError.displayName = "Input.Error";

interface InputDescriptionProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}

const Description = React.forwardRef<HTMLSpanElement, InputDescriptionProps>(
  ({ children, className, ...props }, ref) => {
    if (!children) return null;

    return (
      <span
        ref={ref}
        data-slot="input-description"
        className={cn(
          `flex items-center text-input-description-text text-preset-4`,
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);
Description.displayName = "Input.Description";

export const TextInput = {
  Wrapper,
  Root,
  Icon,
  Field,
  InputError,
  Description,
};
