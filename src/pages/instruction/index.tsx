import GameLayout from '@/components/templates/game-layout';
import Button from '@/components/atoms/button';
import { Link, useParams } from 'react-router';
import { useAppSelector } from '@/hooks/useAppSelector';
import { Typography } from '@mui/material';

export default function InstructionPage() {
  const game = useAppSelector((state) => state.game.data);
  const { gameId } = useParams();
  return (
    <GameLayout className="text-center">
      <Typography variant="h2" className="!mb-12">
        {game?.how_to_play_title}
      </Typography>
      <Typography className="text-base tracking-widest text-orange-300 mb-12">
        {game?.how_to_play_messageISsmallplaintextbox}
      </Typography>
      <Link to={`/game/${gameId}/clues`} className="mt-auto">
        <Button>Play</Button>
      </Link>
    </GameLayout>
  );
}
