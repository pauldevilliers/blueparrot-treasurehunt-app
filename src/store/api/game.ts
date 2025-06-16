import { get } from '@/utils/request';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGame = createAsyncThunk(
  'game/fetchData',
  async (gameId: string) => get(`/app/games/treasurehunt/${gameId}`)
);
