"use client";

import { TextInput, TextInputFieldProps } from "@devjobs/ui/text-input";
import { useId } from "react";

import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface ControlledTextInputProps<T extends FieldValues>
  extends TextInputFieldProps {
  name: Path<T>;
  control: Control<T>;
  icon?: React.ReactNode;
  placeholder?: string;
  description?: string;
  required?: boolean;
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
    ...fieldProps
  } = props;

  const id = useId();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextInput.Wrapper>
          <TextInput.Root>
            {icon && <TextInput.Icon>{icon}</TextInput.Icon>}
            <TextInput.Field
              id={id}
              name={field.name}
              value={field.value || ""}
              onChange={field.onChange}
              placeholder={placeholder}
              aria-describedby={description ? `${id}-desc` : undefined}
              aria-required={required || undefined}
              {...fieldProps}
            />
          </TextInput.Root>
        </TextInput.Wrapper>
      )}
    />
  );
}
