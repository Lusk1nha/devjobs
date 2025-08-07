import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "@devjobs/utils/cn";

function AlertDialog(
  props: Readonly<React.ComponentProps<typeof AlertDialogPrimitive.Root>>
) {
  return <AlertDialogPrimitive.Root data-slot="dialog" {...props} />;
}

function AlertDialogTrigger(
  props: Readonly<React.ComponentProps<typeof AlertDialogPrimitive.Trigger>>
) {
  return <AlertDialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function AlertDialogPortal(
  props: Readonly<React.ComponentProps<typeof AlertDialogPrimitive.Portal>>
) {
  return <AlertDialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function AlertDialogOverlay(
  props: Readonly<React.ComponentProps<typeof AlertDialogPrimitive.Overlay>>
) {
  const { className, ...rest } = props;

  return (
    <AlertDialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/48",
        className
      )}
      {...rest}
    />
  );
}

interface DialogContentProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Content> {
  showCloseButton?: boolean;
}

function AlertDialogContent(props: Readonly<DialogContentProps>) {
  const { className, children, showCloseButton = true, ...rest } = props;

  return (
    <AlertDialogPortal data-slot="dialog-portal">
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn(
          "bg-dialog-content-bg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props}
        {...rest}
      />
    </AlertDialogPortal>
  );
}

function AlertDialogHeader(props: Readonly<React.ComponentProps<"div">>) {
  const { className, ...rest } = props;

  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...rest}
    />
  );
}

function AlertDialogFooter(props: Readonly<React.ComponentProps<"div">>) {
  const { className, ...rest } = props;

  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...rest}
    />
  );
}

function AlertDialogTitle(
  props: Readonly<React.ComponentProps<typeof AlertDialogPrimitive.Title>>
) {
  const { className, ...rest } = props;
  return (
    <AlertDialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...rest}
    />
  );
}

function AlertDialogDescription(
  props: Readonly<React.ComponentProps<typeof AlertDialogPrimitive.Description>>
) {
  const { className, ...rest } = props;
  return (
    <AlertDialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...rest}
    />
  );
}

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
};
