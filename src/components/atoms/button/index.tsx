import classNames from 'classnames';
import { Button as AntButton } from 'antd-mobile';

type Props = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

export default function Button({
  type = 'button',
  className,
  children,
  ...other
}: Props) {
  return (
    <AntButton
      type={type}
      className={classNames(
        className,
        'w-full max-w-[150px] bg-white uppercase text-orange-500 font-bold'
      )}
      style={
        {
          '--adm-button-background-color': 'white',
          '--text-color': 'var(--color-orange-500)',
        } as React.CSSProperties
      }
      {...other}
    >
      {children}
    </AntButton>
  );
}
