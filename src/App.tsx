import { Routes, Route } from 'react-router';

import links from '@/config/links';
import GamePage from '@/pages/game';
import NotFoundPage from '@/pages/not-found';

function App() {
  return (
    <Routes>
      <Route path={links.game.path} element={<GamePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
