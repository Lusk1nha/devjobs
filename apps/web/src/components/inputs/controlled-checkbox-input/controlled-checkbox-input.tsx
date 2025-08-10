import { CheckboxInput, CheckboxInputProps } from "@devjobs/ui/checkbox-input";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface ControlledTextInputProps<T extends FieldValues>
  extends Omit<CheckboxInputProps, "checked"> {
  name: Path<T>;
  control: Control<T>;
  icon?: React.ReactNode;
  placeholder?: string;
  description?: string;
  required?: boolean;
}

export function ControlledCheckboxInput<T extends FieldValues>(
  props: Readonly<ControlledTextInputProps<T>>
) {
  const {
    name,
    control,
    icon,
    placeholder,
    description,
    required,
    ...fieldProps
  } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <CheckboxInput
          name={field.name}
          checked={field.value || false}
          onChange={field.onChange}
          placeholder={placeholder}
          aria-describedby={description ? `${field.name}-desc` : undefined}
          aria-required={required || undefined}
          {...fieldProps}
        />
      )}
    />
  );
}
