import { Link } from 'react-router';

import GameLayout from '@/components/templates/game-layout';
import Text from '@/components/atoms/text';
import Button from '@/components/atoms/button';
import { useEffect } from 'react';
import { congratulationsConfetti } from '@/utils/confetti';

export default function CompletePage() {
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
        Congratulations
      </Text>
      <Text className="text-base tracking-widest text-orange-300 mb-12">
        You found all the objects
      </Text>
      <Text className="text-base tracking-widest text-orange-300 mb-12">
        Please check your email to get your discount
      </Text>
      <Link to="/game/1">
        <Button>Home</Button>
      </Link>
    </GameLayout>
  );
}
