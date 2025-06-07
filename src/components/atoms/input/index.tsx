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
};

const Input = function ({
  label,
  name,
  type = 'text',
  placeholder,
  className,
  inputClassName,
  required = false,
}: InputProps) {
  return (
    <Form.Item
      name={name}
      label={label}
      required={required}
      className={classNames('rounded-md', className)}
    >
      <AntInput
        placeholder={placeholder}
        type={type}
        className={classNames(inputClassName, 'px-3')}
      />
    </Form.Item>
  );
};

export default Input;
