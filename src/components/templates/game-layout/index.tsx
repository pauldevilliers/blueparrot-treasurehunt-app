import { Typography } from '@mui/material';
import FadeIn from '@/components/atoms/fade-in';
import classNames from 'classnames';
import { useEffect } from 'react';
import { fetchGame } from '@/store/api/game';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import Loader from '@/components/atoms/loader';
import { useParams } from 'react-router';
import NotFoundPage from '@/pages/not-found';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function GameLayout({ children, className }: Props) {
  const { loading, data, id } = useAppSelector((state) => state.game);
  const { gameId } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!data || id !== gameId) {
      dispatch(fetchGame(gameId!));
    }
  }, [gameId]);

  // useEffect(() => {
  //   if (data?.overall_backgroundISfile) {
  //     document.body.style.backgroundImage = `url(${data?.overall_backgroundISfile})`;
  //     document.body.style.backgroundSize = 'cover';
  //     document.body.style.backgroundPosition = 'center';
  //     document.body.style.backgroundRepeat = 'no-repeat';
  //   }

  //   return () => {
  //     // Cleanup to avoid side effects when component unmounts or image changes
  //     document.body.style.backgroundImage = '';
  //   };
  // }, [data?.overall_backgroundISfile]);

  if (loading) {
    return <Loader />;
  }
  if (!data) {
    return <NotFoundPage />;
  }
  return (
    <div className="w-full py-[10vh] min-h-[80vh] flex flex-col">
      <div className="flex justify-center">
        <Typography variant="h1" className="!mb-12 text-center">
          {data.name}
        </Typography>
      </div>
      <FadeIn className={classNames('flex-grow flex flex-col', className)}>
        {children}
      </FadeIn>
    </div>
  );
}
