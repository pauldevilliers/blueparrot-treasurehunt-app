import { createSlice } from '@reduxjs/toolkit';
import { fetchGame } from '../api/game';

interface GameState {
  id: string | null;
  data: Game | null;
  loading: boolean;
}

const initialState: GameState = {
  id: null,
  data: null,
  loading: true,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    // setSettings: (state, action: PayloadAction<SettingsState>) => {
    //   state.data = action.payload.data;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGame.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGame.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.id = action.payload.game_id;
      })
      .addCase(fetchGame.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default gameSlice.reducer;
