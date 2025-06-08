import GameLayout from '@/components/templates/game-layout';
import Text from '@/components/atoms/text';
import Button from '@/components/atoms/button';
import { Link } from 'react-router';

export default function InstructionPage() {
  return (
    <GameLayout className="text-center">
      <Text
        variant="h2"
        className="text-3xl text-orange-400 font-semibold uppercase tracking-wide mb-12"
      >
        How to play
      </Text>
      <Text className="text-base tracking-widest text-orange-300 mb-12">
        Collect all 6 objects to get your 15% discount via email.
      </Text>
      <Text className="text-base tracking-widest text-orange-300 mb-12">
        Use the clues to find each object hidden in the venue - you can find the
        first 5 in any order you want. Find all 5 to unlock the final clue.
      </Text>
      <Text className="text-base tracking-widest text-orange-300 mb-12">
        Good luck!
      </Text>
      <Link to="/game/1/clues" className="mt-auto">
        <Button>Play</Button>
      </Link>
    </GameLayout>
  );
}
