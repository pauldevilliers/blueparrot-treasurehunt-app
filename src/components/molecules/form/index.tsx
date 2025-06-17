import Button from '@/components/atoms/button';
import { useForm, FormProvider } from 'react-hook-form';

type Props = {
  children: React.ReactNode;
  onSubmit: (values: { [key: string]: string }) => void;
  className?: string;
  submitLabel: string;
};

export default function Form({
  onSubmit,
  className,
  children,
  submitLabel,
}: Props) {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={className}
        noValidate
      >
        {children}
        <Button
          type="submit"
          className="mx-auto mt-auto"
          loading={methods.formState.isSubmitting}
        >
          {submitLabel || 'Submit'}
        </Button>
      </form>
    </FormProvider>
  );
}
