import { createSlice } from '@reduxjs/toolkit';

export interface AppState {
  settings: object | null;
}

const initialState: AppState = {
  settings: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

export default appSlice;
