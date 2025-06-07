import GameLayout from '@/components/templates/game-layout';
import { Link } from 'react-router';
import ClueItem from '@/components/atoms/clue-item';

export default function InstructionPage() {
  const clues = new Array(5).fill(null);
  return (
    <GameLayout className="flex flex-col">
      <div className="flex flex-wrap justify-center">
        {clues.map((_, id) => (
          <Link to="/game/1/clues/1" key={id}>
            <ClueItem />
          </Link>
        ))}
      </div>
      <Link to="/game/1/complete" className="mx-auto">
        <ClueItem final />
      </Link>
    </GameLayout>
  );
}
