import { get } from '@/utils/request';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSettings = createAsyncThunk('settings/fetchData', async () =>
  get(`/app/settings`)
);
