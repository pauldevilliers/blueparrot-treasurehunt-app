import { get, post } from '@/utils/request';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGame = createAsyncThunk(
  'game/fetchData',
  async (gameId: string) => get(`/app/games/treasurehunt/${gameId}`)
);

export const startGame = (
  gameId: string,
  values: { [key: string]: string | Blob }
) => {
  // const formData = new FormData();
  // Object.entries(values).forEach(([key, value]) => {
  //   formData.append(key, value);
  // });
  return post(`/app/games/treasurehunt/${gameId}`, { form_data: values });
};
