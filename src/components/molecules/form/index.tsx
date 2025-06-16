// import { useForm, FormProvider } from 'react-hook-form';
import { Form as AntForm } from 'antd-mobile';

type Props = {
  children: React.ReactNode;
  onSubmit: () => void;
  className?: string;
};

export default function Form({ onSubmit, className, children }: Props) {
  // const methods = useForm();

  return (
    // <FormProvider {...methods}>
    <AntForm
      onFinish={onSubmit}
      className={className}
      style={
        {
          '--adm-color-background': 'transparent',
          '--border-top': 'transparent',
          '--border-bottom': 'transparent',
        } as React.CSSProperties
      }
      validateTrigger="onBlur"
    >
      {children}
    </AntForm>
    // </FormProvider>
  );
}
