"use client";

import { useId } from "react";

import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { TextInputMounted, TextInputMountedProps } from "../text-input-mounted";

interface ControlledTextInputProps<T extends FieldValues>
  extends TextInputMountedProps {
  name: Path<T>;
  control: Control<T>;
}

export function ControlledTextInput<T extends FieldValues>(
  props: Readonly<ControlledTextInputProps<T>>
) {
  const {
    name,
    control,
    icon,
    placeholder = "",
    description = "",
    required = false,
    className,
    ...fieldProps
  } = props;

  const id = useId();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextInputMounted
          id={id}
          name={field.name}
          value={field.value || ""}
          onChange={field.onChange}
          placeholder={placeholder}
          className={className}
          icon={icon}
          {...fieldProps}
        />
      )}
    />
  );
}
