import { useForm, FormProvider } from 'react-hook-form';

type Props = {
  children: React.ReactNode;
  onSubmit: (values: { [key: string]: string }) => void;
  className?: string;
};

export default function Form({ onSubmit, className, children }: Props) {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={className}
        noValidate
      >
        {children}
      </form>
    </FormProvider>
  );
}
