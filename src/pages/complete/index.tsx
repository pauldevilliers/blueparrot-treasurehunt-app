import { useNavigate, useParams } from 'react-router';

import GameLayout from '@/components/templates/game-layout';
import Button from '@/components/atoms/button';
import { useEffect } from 'react';
import { congratulationsConfetti } from '@/utils/confetti';
import { useAppSelector } from '@/hooks/useAppSelector';
import { Typography } from '@mui/material';
import { clearStoredGames } from '@/utils/localstorage';

export default function CompletePage() {
  const game = useAppSelector((state) => state.game.data);
  const { gameId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const interval = congratulationsConfetti();
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);
  const handleComplete = () => {
    clearStoredGames();
    navigate(`/game/${gameId}`);
  };
  return (
    <GameLayout className="text-center">
      <Typography variant="h2" className="!mb-12">
        {game?.final_congratulations_title}
      </Typography>
      <Typography className="!mb-12">
        {game?.final_congratulations_messageISsmallplaintextbox}
      </Typography>
      <Button onClick={handleComplete} className="mt-auto">
        Home
      </Button>
    </GameLayout>
  );
}
