import GameLayout from '@/components/templates/game-layout';
import { useNavigate, useParams } from 'react-router';
import ClueItem from '@/components/atoms/clue-item';
import { useAppSelector } from '@/hooks/useAppSelector';
import { getStoredGameById } from '@/utils/localstorage';
import classNames from 'classnames';

export default function InstructionPage() {
  const game = useAppSelector((state) => state.game.data);
  const { gameId } = useParams();
  const navigate = useNavigate();
  const clues = Object.entries(game?.clues || {})
    .map(([key, value]) => ({
      key,
      value,
    }))
    .filter(({ key }) => key !== 'final_clue');
  const session = getStoredGameById(gameId);

  const renderClue = (key: string, label: string, disabled: boolean) => (
    <ClueItem
      final={key === 'final'}
      label={label}
      disabled
      key={key}
      className={classNames({ 'mx-auto': key === 'final' })}
      onClick={() => !disabled && navigate(`/game/${gameId}/clues/${key}`)}
    />
  );

  return (
    <GameLayout className="flex flex-col">
      <div className="flex flex-wrap justify-center">
        {clues.map((clue, id) =>
          renderClue(clue.key, `${id + 1}`, session?.stage_completed !== id)
        )}
      </div>
      {renderClue('final', 'Final', session?.stage_completed < clues.length)}
    </GameLayout>
  );
}
