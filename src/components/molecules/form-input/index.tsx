import { useFormContext } from 'react-hook-form';

import Input, { type InputProps } from '@/components/atoms/input';

export default function FormInput({ name, ...other }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name];
  return (
    <Input error={error?.message as string} {...register(name)} {...other} />
  );
}
