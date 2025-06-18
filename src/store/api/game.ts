import { get, patch, post } from '@/utils/request';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGame = createAsyncThunk(
  'game/fetchData',
  async (gameId: string) => get(`/app/games/treasurehunt/${gameId}`)
);

export const startGame = (
  gameId: string,
  values: { [key: string]: string | Blob }
) => {
  return post(`/app/games/treasurehunt/${gameId}`, { form_data: values });
};

export const progressGame = (gameId: string, values: GamePatchObject) => {
  return patch(`/app/games/treasurehunt/${gameId}`, values);
};
