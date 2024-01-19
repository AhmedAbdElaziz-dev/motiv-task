/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://mocki.io/',
  credentials: 'include',
});

export const Api = createApi({
  reducerPath: 'API',
  tagTypes: ['Cars'],

  baseQuery,

  endpoints: builder => ({}),
});
