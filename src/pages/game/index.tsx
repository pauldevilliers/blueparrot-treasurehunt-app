import { useNavigate, useParams } from 'react-router';

import GameLayout from '@/components/templates/game-layout';
import GameForm from '@/components/organisms/game-form';
import { useAppSelector } from '@/hooks/useAppSelector';
import { Typography } from '@mui/material';
import { startGame } from '@/store/api/game';
import { getStoredGameById, storeGame } from '@/utils/localstorage';
import { useEffect } from 'react';

export default function GamePage() {
  const game = useAppSelector((state) => state.game.data);
  const { gameId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const storedSession = getStoredGameById(gameId);
    if (storedSession) {
      navigate(`/game/${gameId}/clues`, { replace: true });
    }
  }, [gameId]);

  const handleSubmit = (values: { [key: string]: string }) => {
    return startGame(gameId!, values).then((game) => {
      storeGame(game);
      navigate(`/game/${gameId}/instruction`);
    });
  };

  return (
    <GameLayout className="text-center">
      <Typography variant="h2" className="!mb-12">
        {game?.welcome_title}
      </Typography>
      <Typography variant="h4" className="!mb-12">
        {game?.welcome_messageISsmallplaintextbox}
      </Typography>
      <GameForm onSubmit={handleSubmit} game={game} />
    </GameLayout>
  );
}
