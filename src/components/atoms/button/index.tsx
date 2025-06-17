import { CircularProgress } from '@mui/material';
import MuiButton, { type ButtonProps } from '@mui/material/Button';

interface Props extends ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
  loading?: boolean;
}

export default function Button({
  type = 'button',
  className,
  children,
  onClick,
  loading,
  ...other
}: Props) {
  return (
    <MuiButton
      onClick={onClick}
      type={type}
      variant="contained"
      className={className}
      disabled={loading}
      startIcon={
        loading ? <CircularProgress size={20} color="inherit" /> : null
      }
      {...other}
    >
      {children}
    </MuiButton>
  );
}
