import Loader from '@/components/atoms/loader';
import { useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

export default function GeneralLayout({ children }: Props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return <div className="max-w-md mx-auto px-5">{children}</div>;
}
