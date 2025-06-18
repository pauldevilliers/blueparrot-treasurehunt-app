import { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router';
import { getStoredGameById } from '@/utils/localstorage';

export default function Private() {
  const { gameId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const storedSession = getStoredGameById(gameId);
    if (!storedSession) {
      navigate(`/game/${gameId}`, { replace: true });
    }
  }, [gameId]);

  return <Outlet />;
}
