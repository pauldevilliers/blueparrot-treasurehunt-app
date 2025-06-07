import { Checkbox as AntCheckbox } from 'antd-mobile';

export type CheckboxProps = {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  required?: boolean;
  error?: string;
};

const Checkbox = function ({ label, className }: CheckboxProps) {
  return (
    <AntCheckbox
      style={{
        alignItems: 'start',
        flexDirection: 'row-reverse',
        textAlign: 'left',
      }}
      className={className}
    >
      {label}
    </AntCheckbox>
  );
};

export default Checkbox;
