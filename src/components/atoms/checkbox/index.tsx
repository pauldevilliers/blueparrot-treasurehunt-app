import FormControlLabel from '@mui/material/FormControlLabel';
import { Checkbox as MuiCheckbox } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import classNames from 'classnames';

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
  ...other
}: CheckboxProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field, fieldState }) => (
        <FormControlLabel
          {...field}
          label={label}
          error={!!fieldState.error}
          className={classNames(
            className,
            'flex flex-row-reverse !items-start !mr-0'
          )}
          control={<MuiCheckbox name={name} />}
          {...other}
        />
      )}
    />
  );
};

export default Checkbox;
