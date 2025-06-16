import { useNavigate, useParams } from 'react-router';

import GameLayout from '@/components/templates/game-layout';
import Text from '@/components/atoms/text';
import GameForm from '@/components/organisms/game-form';
import { useAppSelector } from '@/hooks/useAppSelector';

export default function GamePage() {
  const game = useAppSelector((state) => state.game.data);
  const { gameId } = useParams();
  const navigate = useNavigate();
  const handleSubmit = (values: { [key: string]: string }) => {
    console.log(values);
    // navigate(`/game/${gameId}/instruction`);
  };
  return (
    <GameLayout className="text-center">
      <Text
        variant="h2"
        className="text-3xl text-orange-400 font-semibold uppercase tracking-wide mb-12"
      >
        {game?.welcome_title}
      </Text>
      <Text className="text-base tracking-widest font-semibold text-orange-300 mb-12">
        {game?.welcome_messageISsmallplaintextbox}
      </Text>
      <GameForm onSubmit={handleSubmit} game={game} />
    </GameLayout>
  );
}
