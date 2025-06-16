import MuiButton, { type ButtonProps } from '@mui/material/Button';

interface Props extends ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
}

export default function Button({
  type = 'button',
  className,
  children,
  onClick,
  ...other
}: Props) {
  return (
    <MuiButton
      onClick={onClick}
      type={type}
      variant="contained"
      className={className}
      {...other}
    >
      {children}
    </MuiButton>
  );
}
