import {
  DateTimePicker as MuiDateTimePicker,
  type DateTimePickerProps,
} from '@mui/x-date-pickers/DateTimePicker';
import { Controller, useFormContext } from 'react-hook-form';

interface Props extends DateTimePickerProps {
  name: string;
  required?: boolean;
}

export default function DateTimePicker({
  name,
  required = false,
  ...props
}: Props) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: {
          value: required,
          message: 'Required',
        },
      }}
      render={({ fieldState, field }) => (
        <MuiDateTimePicker
          slotProps={{
            textField: {
              variant: 'outlined',
              sx: {
                backgroundColor: '#333',
              },
              error: !!fieldState.error,
              helperText: fieldState.error?.message,
            },
          }}
          onChange={field.onChange}
          {...props}
        />
      )}
    />
  );
}
