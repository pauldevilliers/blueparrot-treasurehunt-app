import { Link, useParams } from 'react-router';
import { useState } from 'react';

import GameLayout from '@/components/templates/game-layout';
import Button from '@/components/atoms/button';
import ScanModal from '@/components/organisms/scan-modal';
import { useAppSelector } from '@/hooks/useAppSelector';
import { Typography } from '@mui/material';

export default function ClueDetailsPage() {
  const [showScanModal, setShowScanModal] = useState(false);
  const { gameId, clueId } = useParams();
  const game = useAppSelector((state) => state.game.data);

  const clueKey = clueId === 'final' ? 'final_clue' : (clueId as string);
  const clueItem = game?.clues[clueKey];

  return (
    <GameLayout className="text-center flex flex-col">
      <Typography variant="h3" className="!mb-12">
        {clueItem?.title}
      </Typography>
      <Typography className="!mb-12">
        {clueItem?.messageISsmallplaintextbox}
      </Typography>
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
