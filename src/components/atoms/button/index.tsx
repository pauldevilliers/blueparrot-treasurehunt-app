import classNames from 'classnames';
import { Button as AntButton } from 'antd-mobile';
import { useAppSelector } from '@/hooks/useAppSelector';

type Props = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
};

export default function Button({
  type = 'button',
  className,
  children,
  onClick,
  ...other
}: Props) {
  const game = useAppSelector((state) => state.game.data);

  return (
    <div className={classNames(className, 'w-full')}>
      <AntButton
        onClick={onClick}
        type={type}
        className={classNames(
          'min-w-[150px] max-w-[100%] bg-white uppercase text-orange-500 font-bold'
        )}
        style={
          {
            '--adm-button-background-color':
              game?.overall_button_color || 'white',
            '--text-color':
              game?.overall_button_text_color || 'var(--color-orange-500)',
            border: 'none',
          } as React.CSSProperties
        }
        {...other}
      >
        {children}
      </AntButton>
    </div>
  );
}
