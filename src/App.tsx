import { Routes, Route } from 'react-router';

import GeneralLayout from '@/components/templates/general-layout';
import links from '@/config/links';
import GamePage from '@/pages/game';
import InstructionPage from '@/pages/instruction';
import CluesPage from '@/pages/clues';
import ClueDetailsPage from '@/pages/clue-details';
import NotFoundPage from '@/pages/not-found';
import CompletePage from '@/pages/complete';

function App() {
  return (
    <GeneralLayout>
      <Routes>
        <Route path={links.game.path} element={<GamePage />} />
        <Route path={links.instruction.path} element={<InstructionPage />} />
        <Route path={links.clues.path} element={<CluesPage />} />
        <Route path={links.clueDetails.path} element={<ClueDetailsPage />} />
        <Route path={links.complete.path} element={<CompletePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </GeneralLayout>
  );
}

export default App;
