import TextField, { type TextFieldProps } from '@mui/material/TextField';
import { useFormContext, Controller } from 'react-hook-form';

const Input = function ({
  label,
  name,
  type = 'text',
  required = false,
  variant = 'outlined',
  ...other
}: TextFieldProps) {
  const { control } = useFormContext();
  const rules = {
    pattern:
      type === 'email'
        ? { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email is not valid' }
        : undefined,
  };
  return (
    <Controller
      name={name!}
      control={control}
      rules={{
        required: {
          value: required,
          message: 'Required',
        },
        ...rules,
      }}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label={label}
          variant={variant}
          type={type}
          fullWidth
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          {...other}
        />
      )}
    />
  );
};

export default Input;
