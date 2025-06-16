import {
  DatePicker as MuiDatePicker,
  type DatePickerProps,
} from '@mui/x-date-pickers/DatePicker';
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
      rules={{ required }}
      render={() => (
        <MuiDatePicker
          slotProps={{
            textField: {
              variant: 'outlined',
              sx: {
                backgroundColor: '#333',
              },
            },
          }}
          {...props}
        />
      )}
    />
  );
}
