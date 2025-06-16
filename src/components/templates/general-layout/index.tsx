import { useEffect } from 'react';
import Loader from '@/components/atoms/loader';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { fetchSettings } from '@/store/api/settings';

type Props = {
  children: React.ReactNode;
};

export default function GeneralLayout({ children }: Props) {
  const { loading } = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSettings());
  }, []);

  if (loading) {
    return <Loader />;
  }
  return <div className="max-w-md mx-auto px-5">{children}</div>;
}
