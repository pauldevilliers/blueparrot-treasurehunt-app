import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const settingsApi = createApi({
  reducerPath: 'settings',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://blueparrot-dev.phpbucket.net/api/v1/app',
  }),
  endpoints: (builder) => ({
    getSettings: builder.query<string, void>({
      query: () => `/settings`,
    }),
  }),
});

export const { useGetSettingsQuery } = settingsApi;
