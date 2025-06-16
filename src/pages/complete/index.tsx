import { Link, useParams } from 'react-router';

import GameLayout from '@/components/templates/game-layout';
import Text from '@/components/atoms/text';
import Button from '@/components/atoms/button';
import { useEffect } from 'react';
import { congratulationsConfetti } from '@/utils/confetti';
import { useAppSelector } from '@/hooks/useAppSelector';

export default function CompletePage() {
  const game = useAppSelector((state) => state.game.data);
  const { gameId } = useParams();
  useEffect(() => {
    const interval = congratulationsConfetti();
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);
  return (
    <GameLayout className="text-center">
      <Text
        variant="h2"
        className="text-3xl text-orange-400 font-semibold uppercase tracking-wide mb-12"
      >
        {game?.final_congratulations_title}
      </Text>
      <Text className="text-base tracking-widest text-orange-300 mb-12">
        {game?.final_congratulations_messageISsmallplaintextbox}
      </Text>
      <Link to={`/game/${gameId}`} className="mt-auto">
        <Button>Home</Button>
      </Link>
    </GameLayout>
  );
}
