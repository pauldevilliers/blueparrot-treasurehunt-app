import { useNavigate } from 'react-router';

import GameLayout from '@/components/templates/game-layout';
import Text from '@/components/atoms/text';
import GameForm from '@/components/organisms/game-form';

export default function GamePage() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/game/1/instruction');
  };
  return (
    <GameLayout className="text-center">
      <Text
        variant="h2"
        className="text-3xl text-orange-400 font-semibold uppercase tracking-wide mb-12"
      >
        Scavenger hunt
      </Text>
      <Text className="text-base tracking-widest font-semibold text-orange-300 mb-12">
        Enter your details to play
      </Text>
      <GameForm onSubmit={handleSubmit} />
    </GameLayout>
  );
}
