import GameLayout from '@/components/templates/game-layout';
import Text from '@/components/atoms/text';
import Button from '@/components/atoms/button';
import { Link, useParams } from 'react-router';
import { useAppSelector } from '@/hooks/useAppSelector';

export default function InstructionPage() {
  const game = useAppSelector((state) => state.game.data);
  const { gameId } = useParams();
  return (
    <GameLayout className="text-center">
      <Text
        variant="h2"
        className="text-3xl text-orange-400 font-semibold uppercase tracking-wide mb-12"
      >
        {game?.how_to_play_title}
      </Text>
      <Text className="text-base tracking-widest text-orange-300 mb-12">
        {game?.how_to_play_messageISsmallplaintextbox}
      </Text>
      <Link to={`/game/${gameId}/clues`} className="mt-auto">
        <Button>Play</Button>
      </Link>
    </GameLayout>
  );
}
