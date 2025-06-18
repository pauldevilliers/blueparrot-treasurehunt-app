import { Link, useNavigate, useParams } from 'react-router';
import { useState } from 'react';

import GameLayout from '@/components/templates/game-layout';
import Button from '@/components/atoms/button';
import ScanModal from '@/components/organisms/scan-modal';
import { useAppSelector } from '@/hooks/useAppSelector';
import { Typography } from '@mui/material';
import { progressGame } from '@/store/api/game';
import { generateImageObject } from '@/utils/camera';
import { getStoredGameById, storeGame } from '@/utils/localstorage';
import Alert from '@/components/atoms/alert';

export default function ClueDetailsPage() {
  const [showScanModal, setShowScanModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorAlert, setErrorAlert] = useState(false);
  const { gameId, clueId } = useParams();
  const navigate = useNavigate();
  const game = useAppSelector((state) => state.game.data);

  const handleScan = async (screenshot: string) => {
    try {
      const storedGame = getStoredGameById(gameId);
      const res = await progressGame(gameId!, {
        user_id: storedGame?.user_id,
        clue_number: clueId,
        imageISfile: generateImageObject(screenshot, clueId),
      });
      setSuccessMessage(res.message);
      storeGame({
        ...storedGame,
        stage_completed: storedGame.stage_completed + 1,
      });
    } catch (error) {
      console.log(error);
      setErrorAlert(true);
    }
  };

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
        onScan={handleScan}
      />
      <Alert
        isOpen={!!successMessage}
        message={successMessage!}
        onClose={() => navigate(`/game/${gameId}/clues`)}
      />
      <Alert
        isOpen={errorAlert}
        message="Sorry, it's not the right object."
        onClose={() => setErrorAlert(false)}
      />
    </GameLayout>
  );
}
