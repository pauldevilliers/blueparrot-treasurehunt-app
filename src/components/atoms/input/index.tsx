import classNames from 'classnames';
import { Form, Input as AntInput } from 'antd-mobile';

export type InputProps = {
  name: string;
  type?: string;
  label?: string;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  required?: boolean;
  error?: string;
  rules?: Array<{
    validator?: () => Promise<Error | undefined>;
    type: string;
    message: string;
  }>;
};

const Input = function ({
  label,
  name,
  type = 'text',
  placeholder,
  className,
  inputClassName,
  required = false,
  rules = [],
  ...other
}: InputProps) {
  const allRules = [{ required, message: 'This field is required' }, ...rules];
  return (
    <Form.Item
      name={name}
      label={label}
      required={required}
      className={classNames('rounded-md', className)}
      style={
        {
          '--adm-color-background': '#ccc',
          '--border-inner': 'transparent',
          textAlign: 'left',
        } as React.CSSProperties
      }
      rules={allRules}
    >
      <AntInput
        placeholder={placeholder}
        type={type}
        className={classNames(inputClassName)}
        {...other}
      />
    </Form.Item>
  );
};

export default Input;
