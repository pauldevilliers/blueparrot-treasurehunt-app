import {
  Checkbox as MuiCheckbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

type CheckboxProps = {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  required?: boolean;
  error?: string;
};

const Checkbox = function ({
  name,
  label,
  className,
  required,
}: CheckboxProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ fieldState }) => (
        <FormControl error={!!fieldState.error} className={className}>
          <Controller
            name="terms"
            control={control}
            rules={{ required: 'Please accept our Terms and Conditions' }}
            render={({ field }) => (
              <FormControlLabel
                className={'flex flex-row-reverse !items-start !mr-0'}
                control={<MuiCheckbox {...field} checked={field.value} />}
                label={label}
              />
            )}
          />
          {fieldState.error && (
            <FormHelperText>{fieldState.error?.message}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
};

export default Checkbox;
