import { useNavigate, useParams } from 'react-router';

import GameLayout from '@/components/templates/game-layout';
import GameForm from '@/components/organisms/game-form';
import { useAppSelector } from '@/hooks/useAppSelector';
import { Typography } from '@mui/material';

export default function GamePage() {
  const game = useAppSelector((state) => state.game.data);
  const { gameId } = useParams();
  const navigate = useNavigate();
  const handleSubmit = (values: { [key: string]: string }) => {
    console.log(values);
    navigate(`/game/${gameId}/instruction`);
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
