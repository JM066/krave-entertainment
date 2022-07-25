import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../hook/reduxHooks'
import { selectVideoBlog } from '../../../redux/reducer/videoSlice'
import { formatDistance } from 'date-fns'
import { useGetVideosQuery } from '../../../redux/api/videoApi'
import Card from '../../component/Card/Card'
import Typography from '../../component/Typography/Typography'
import Button from '../../component/Button/Button'
import MainImg from '../../../resource/img/kpop.png'
import { VideoBlog } from './Video.type'
import styles from './Video.module.scss'

export default function Video() {
  const [visible, setVisible] = useState(15)
  const { data: videos, isLoading, isSuccess, isError, error } = useGetVideosQuery()

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleBlog = (article: VideoBlog) => {
    const blog = {
      id: article.id,
      title: article.title,
      url: article.url,
    }
    dispatch(selectVideoBlog(blog))
    navigate(`/video/${article.id}`)
  }
  return (
    <div className={styles.Video}>
      <div className={styles.MainImgContainer}>
        <img className={styles.MainImg} src={MainImg} alt='boyband' />
      </div>
      <div className={styles.Wrapper}>
        {videos?.slice(0, visible).map((article: VideoBlog, i) => {
          return (
            <Card key={i} className={styles.Card} onclick={() => handleBlog(article)}>
              <img className={styles.CardImg} src={article.thumbnailUrl} alt={article.title} />
              <div className={styles.Text}>
                <Typography size='medium' alignment='left' className={styles.Title}>
                  {article.title.charAt(0).toUpperCase() + article.title.slice(1)}
                </Typography>
                <Typography size='small' alignment='right' className={styles.Time}>
                  {formatDistance(new Date(article.createdAt), new Date())} ago
                </Typography>
              </div>
            </Card>
          )
        })}
      </div>
      <Button variant='primary' onclick={() => setVisible((prev) => prev + 15)}>
        <Typography alignment='center' size='large'>
          Load More
        </Typography>
      </Button>
    </div>
  )
}
