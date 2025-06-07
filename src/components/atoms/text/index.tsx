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
  const Tag = variant;
  return <Tag className={className}>{children}</Tag>;
}
