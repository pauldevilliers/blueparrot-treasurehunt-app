import GameLayout from '@/components/templates/game-layout';
import { Link, useParams } from 'react-router';
import ClueItem from '@/components/atoms/clue-item';
import { useAppSelector } from '@/hooks/useAppSelector';

export default function InstructionPage() {
  const game = useAppSelector((state) => state.game.data);
  const { gameId } = useParams();
  const clues = Object.entries(game?.clues || {})
    .map(([key, value]) => ({
      key,
      value,
    }))
    .filter(({ key }) => key !== 'final_clue');
  return (
    <GameLayout className="flex flex-col">
      <div className="flex flex-wrap justify-center">
        {clues.map((clue, id) => (
          <Link to={`/game/${gameId}/clues/${clue.key}`} key={clue.key}>
            <ClueItem label={id + 1} />
          </Link>
        ))}
      </div>
      <Link to={`/game/${gameId}/clues/final`} className="mx-auto">
        <ClueItem final />
      </Link>
    </GameLayout>
  );
}
