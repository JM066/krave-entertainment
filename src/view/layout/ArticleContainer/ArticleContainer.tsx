import React, { Fragment } from 'react'
import { useGetVideosQuery } from '../../../redux/api/videoApi'
import Card from '../../component/Card/Card'
import Typography from '../../component/Typography/Typography'
import styles from './ArticleContainer.module.scss'

export default function ArticleContainer(props: React.PropsWithChildren) {
  const { data: videos, isLoading, isSuccess, isError, error } = useGetVideosQuery()

  if (isLoading) return <div>Loading..</div>
  return (
    <div className={styles.ArticleContainer}>
      <div className={styles.Article}>{props.children}</div>
      <div className={styles.List}>
        {videos?.slice(0, 5).map((article, i) => (
          <Card key={i} className={styles.Card}>
            <img src={article.thumbnailUrl} alt={article.title} />
            <div className={styles.Text}>
              <div>
                <div>MV/TEASER</div>
                <Typography size='small' alignment='right'>
                  {article.createdAt}
                </Typography>
              </div>
              <Typography size='small' alignment='left'>
                {article.title}
              </Typography>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
