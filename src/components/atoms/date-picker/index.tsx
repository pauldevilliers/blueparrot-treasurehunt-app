import {
  DatePicker as MuiDatePicker,
  type DatePickerProps,
} from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { Controller, useFormContext } from 'react-hook-form';

interface Props extends DatePickerProps {
  name: string;
  required?: boolean;
}

export default function DatePicker({
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
        <MuiDatePicker
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
          onChange={(date) => {
            const formatted = date ? date.format('D MMM YYYY') : '';
            field.onChange(formatted);
          }}
          value={field.value ? dayjs(field.value, 'D MMM YYYY') : null}
          {...props}
        />
      )}
    />
  );
}
