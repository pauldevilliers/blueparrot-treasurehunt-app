import { configureStore } from '@reduxjs/toolkit';

import { settingsApi } from './slices/settings';

const store = configureStore({
  reducer: {
    [settingsApi.reducerPath]: settingsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(settingsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
