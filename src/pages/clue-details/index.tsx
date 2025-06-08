import { Link } from 'react-router';
import { useState } from 'react';

import GameLayout from '@/components/templates/game-layout';
import Text from '@/components/atoms/text';
import Button from '@/components/atoms/button';
import ScanModal from '@/components/organisms/scan-modal';

export default function ClueDetailsPage() {
  const [showScanModal, setShowScanModal] = useState(false);
  return (
    <GameLayout className="text-center flex flex-col">
      <Text
        variant="h3"
        className="text-base text-orange-400 font-semibold uppercase tracking-wide mb-12"
      >
        Clue 1
      </Text>
      <Text className="text-base tracking-widest text-orange-300 mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
      <div className="mb-8 mt-auto">
        <Button onClick={() => setShowScanModal(true)}>Play</Button>
      </div>
      <Link to="/game/1/clues">
        <Button>Back</Button>
      </Link>
      <ScanModal
        isOpen={showScanModal}
        onClose={() => setShowScanModal(false)}
      />
    </GameLayout>
  );
}
