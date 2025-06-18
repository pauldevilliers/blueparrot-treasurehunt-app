import { Routes, Route } from 'react-router';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import GeneralLayout from '@/components/templates/general-layout';
import Private from '@/components/templates/private';
import links from '@/config/links';
import GamePage from '@/pages/game';
import InstructionPage from '@/pages/instruction';
import CluesPage from '@/pages/clues';
import ClueDetailsPage from '@/pages/clue-details';
import NotFoundPage from '@/pages/not-found';
import CompletePage from '@/pages/complete';
import { useAppSelector } from './hooks/useAppSelector';
import { useMemo } from 'react';
import { createTheme } from '@/utils/theme';

function App() {
  const game = useAppSelector((state) => state.game.data);
  const theme = useMemo(() => createTheme(game), [game]);
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <GeneralLayout>
          <Routes>
            <Route path={links.game.path} element={<GamePage />} />
            <Route path={links.game.path} element={<Private />}>
              <Route
                path={links.instruction.path}
                element={<InstructionPage />}
              />
              <Route path={links.clues.path} element={<CluesPage />} />
              <Route
                path={links.clueDetails.path}
                element={<ClueDetailsPage />}
              />
              <Route path={links.complete.path} element={<CompletePage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </GeneralLayout>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
