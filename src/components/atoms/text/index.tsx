import { useAppSelector } from '@/hooks/useAppSelector';

type TextProps = {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  className?: string;
  children: React.ReactNode;
};

export default function Text({
  children,
  className,
  variant = 'p',
}: TextProps) {
  const game = useAppSelector((state) => state.game.data);
  const Tag = variant;
  return (
    <Tag
      className={className}
      style={{ color: game?.overall_text_color || '' }}
    >
      {children}
    </Tag>
  );
}
