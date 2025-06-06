import { configureStore } from '@reduxjs/toolkit';

import { appSlice } from './slices/app';

const store = configureStore({
  reducer: {
    [appSlice.reducerPath]: appSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
