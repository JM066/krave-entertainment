import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { getRandomDate } from '../../util/index'
type VideoType = {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
  createdAt: string
}

export const videoApi = createApi({
  reducerPath: 'videoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getVideos: builder.query<VideoType[], void>({
      query() {
        return '/photos'
      },
      transformResponse: (response: VideoType[]) => {
        response.map(
          (item) => (item.createdAt = getRandomDate(new Date(2017, 0, 1), new Date()).toString()),
        )
        return response
      },
    }),
  }),
})

export const { useGetVideosQuery } = videoApi
