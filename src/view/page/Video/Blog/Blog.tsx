import React, { useState } from 'react'
import { IProps } from './Blog.type'
import type { RootState } from '../../../../redux/store'
import { useSelector } from 'react-redux'
import styles from './Blog.module.scss'

export default function Blog(props: React.PropsWithChildren<IProps>) {
  const { id, title, url } = useSelector((store: RootState) => store.videoReducer)
  console.log('vidoe ', id, title, url)
  console.log('ggggggg')
  return (
    <div>
      This is KRAVE – an Entertainment website to share news in Korean and forums for users to
      communicate about Korean entertainment news. The menu must have EXPLORE, QUIZ, VIDEO, CELEB,
      STYLE, TV/FILM, MUSIC, FEATURES. When the user clicks the Video on the menu bar, they will see
      a board of news including the featured image and the news below. The News part must include
      the image, title, and latest updated time. Clicking on the title or image will lead to the
      blog The layout should
    </div>
  )
}
