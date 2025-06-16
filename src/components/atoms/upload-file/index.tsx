import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@/components/atoms/button';
import classNames from 'classnames';
import { useFormContext, Controller } from 'react-hook-form';

type Props = {
  className?: string;
  label?: string;
  name: string;
  required?: boolean;
};

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function UploadFile({
  className,
  label,
  name,
  required = false,
}: Props) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name!}
      control={control}
      defaultValue=""
      rules={{ required }}
      render={() => (
        <Button
          component="label"
          role={undefined}
          variant="outlined"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          className={classNames(
            className,
            '!w-full h-[56px] !bg-gray-700 !border-none'
          )}
        >
          {label || 'Upload files'}
          <VisuallyHiddenInput
            type="file"
            onChange={(event) => console.log(event.target.files)}
            multiple
          />
        </Button>
      )}
    />
  );
}
