import { Link, useParams } from 'react-router';
import { useState } from 'react';

import GameLayout from '@/components/templates/game-layout';
import Text from '@/components/atoms/text';
import Button from '@/components/atoms/button';
import ScanModal from '@/components/organisms/scan-modal';
import { useAppSelector } from '@/hooks/useAppSelector';

export default function ClueDetailsPage() {
  const [showScanModal, setShowScanModal] = useState(false);
  const { gameId, clueId } = useParams();
  const game = useAppSelector((state) => state.game.data);

  const clueKey = clueId === 'final' ? 'final_clue' : (clueId as string);
  const clueItem = game?.clues[clueKey];

  return (
    <GameLayout className="text-center flex flex-col">
      <Text
        variant="h3"
        className="text-base text-orange-400 font-semibold uppercase tracking-wide mb-12"
      >
        {clueItem?.title}
      </Text>
      <Text className="text-base tracking-widest text-orange-300 mb-12">
        {clueItem?.messageISsmallplaintextbox}
      </Text>
      <div className="mb-8 mt-auto">
        <Button onClick={() => setShowScanModal(true)}>Play</Button>
      </div>
      <Link to={`/game/${gameId}/clues`}>
        <Button>Back</Button>
      </Link>
      <ScanModal
        isOpen={showScanModal}
        onClose={() => setShowScanModal(false)}
      />
    </GameLayout>
  );
}
