import React, { useState } from 'react'
import { useGetVideosQuery } from '../../../redux/api/videoApi'

export default function Video() {
  const { data: videos, isLoading, isSuccess, isError, error } = useGetVideosQuery()

  return <div></div>
}
