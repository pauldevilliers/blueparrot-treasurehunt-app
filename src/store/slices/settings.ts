import { createSlice } from '@reduxjs/toolkit';
import { fetchSettings } from '../api/settings';

interface SettingsState {
  data: object | null;
  loading: boolean;
}

const initialState: SettingsState = {
  data: null,
  loading: true,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    // setSettings: (state, action: PayloadAction<SettingsState>) => {
    //   state.data = action.payload.data;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSettings.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSettings.rejected, (state) => {
        state.loading = false;
      });
  },
});

// export const { setSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
