import React, { useState, useEffect } from 'react'
import { IProps } from './Blog.type'
import type { RootState } from '../../../redux/store'
import { useGetVideosQuery } from '../../../redux/api/videoApi'
import { useAppSelector } from '../../../hook/reduxHooks'
import styles from './Blog.module.scss'

export default function Blog(props: React.PropsWithChildren<IProps>) {
  const selectedVideoBlog = useAppSelector((state: RootState) => state.videoSlice)
  const { data: videos, isLoading, isSuccess, isError, error } = useGetVideosQuery()
  useEffect(() => {
    if (selectedVideoBlog) {
      console.log('article', selectedVideoBlog)
    }
  }, [selectedVideoBlog])
  return (
    <div style={{ color: 'black' }}>
      This is KRAVE – an Entertainment website to share news in Korean and forums for users to
      communicate about Korean entertainment news. The menu must have EXPLORE, QUIZ, VIDEO, CELEB,
      STYLE, TV/FILM, MUSIC, FEATURES. When the user clicks the Video on the menu bar, they will see
      a board of news including the featured image and the news below. The News part must include
      the image, title, and latest updated time. Clicking on the title or image will lead to the
      blog The layout should
    </div>
  )
}
