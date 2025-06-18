import classNames from 'classnames';
import { Typography } from '@mui/material';

type Props = {
  final?: boolean;
  label?: string | number;
  disabled?: boolean;
  className?: string;
};

export default function ClueItem({
  final = false,
  label,
  disabled = false,
  className,
}: Props) {
  return (
    <div
      className={classNames(
        'h-[100px] mx-3 my-5 rounded-md flex justify-center items-center',
        {
          'w-[100px]': !final,
          'w-[200px]': final,
          'bg-gray-500': disabled,
          'bg-gray-200': !disabled,
        },
        className
      )}
    >
      {label && (
        <Typography variant="h4" className="!text-5xl">
          {label}
        </Typography>
      )}
    </div>
  );
}
