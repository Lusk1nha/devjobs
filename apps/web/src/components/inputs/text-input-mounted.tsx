"use client";

import { TextInput, TextInputFieldProps } from "@devjobs/ui/text-input";

export interface TextInputMountedProps extends TextInputFieldProps {
  icon?: React.ReactNode;
  placeholder?: string;
  description?: string;
  required?: boolean;
  disableMobile?: boolean;
}

export function TextInputMounted(props: Readonly<TextInputMountedProps>) {
  const {
    id,
    className,
    icon,
    name,
    value,
    placeholder,
    description,
    required,
    onChange,
    disableMobile,
    ...fieldProps
  } = props;

  return (
    <TextInput.Wrapper>
      <TextInput.Root className={className}>
        {icon && (
          <TextInput.Icon disableMobile={disableMobile}>{icon}</TextInput.Icon>
        )}
        <TextInput.Field
          id={id}
          name={name}
          value={value || ""}
          onChange={onChange}
          placeholder={placeholder}
          aria-describedby={description ? `${id}-desc` : undefined}
          aria-required={required || undefined}
          {...fieldProps}
        />
      </TextInput.Root>
    </TextInput.Wrapper>
  );
}
