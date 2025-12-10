import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const imdbApi = createApi({
  reducerPath: 'imdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.imdbapi.dev/' }),
  endpoints: (builder) => ({
    getAllTitles: builder.query({
      query: () => `/titles`,
    }),
  }),
})


export const { useGetAllTitlesQuery } = imdbApi