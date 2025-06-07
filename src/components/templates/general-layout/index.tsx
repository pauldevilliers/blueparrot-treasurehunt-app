type Props = {
  children: React.ReactNode;
};

export default function GeneralLayout({ children }: Props) {
  return <div className="max-w-md mx-auto px-5">{children}</div>;
}
