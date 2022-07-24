import React, { useState } from 'react'
import { formatDistance } from 'date-fns'
import { useGetVideosQuery } from '../../../redux/api/videoApi'
import Card from '../../component/Card/Card'
import MainImg from '../../../resource/img/kpop.png'
import styles from './Video.module.scss'

export default function Video() {
  const [visible, setVisible] = useState(15)
  const { data: videos, isLoading, isSuccess, isError, error } = useGetVideosQuery()

  return (
    <div className={styles.Video}>
      <div className={styles.MainImgContainer}>
        <img className={styles.MainImg} src={MainImg} alt='boyband' />
      </div>
      <div className={styles.Wrapper}>
        {videos?.slice(0, visible).map((article, i) => {
          return (
            <Card key={i}>
              <img src={article.thumbnailUrl} alt={article.title} />
              <span>{formatDistance(article.createdAt, new Date())} ago</span>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
