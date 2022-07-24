import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
type Video = {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export const videoApi = createApi({
  reducerPath: 'videoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getVideos: builder.query<Video[], void>({
      query() {
        return '/photos'
      },
    }),
  }),
})

export const { useGetVideosQuery } = videoApi
