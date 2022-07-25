import React, { useState, useEffect } from 'react'
import { IProps } from './Blog.type'
import { format } from 'date-fns'
import type { RootState } from '../../../redux/store'
import { useAppSelector } from '../../../hook/reduxHooks'
import ArticleContainer from '../../layout/ArticleContainer/ArticleContainer'
import Card from '../../component/Card/Card'
import styles from './Blog.module.scss'
import Typography from '../../component/Typography/Typography'

export default function Blog(props: React.PropsWithChildren<IProps>) {
  const { selectedVideoBlog } = useAppSelector((state: RootState) => state.videoSlice)

  return (
    <ArticleContainer>
      <Card className={styles.Card}>
        <img src={selectedVideoBlog?.url} alt={selectedVideoBlog?.url} />
        <div className={styles.Text}>
          <Typography size='x-large' alignment='left' bolded={true}>
            {selectedVideoBlog?.title.toUpperCase()}
          </Typography>
          <Typography size='medium' alignment='right' className={styles.Caption}>
            {selectedVideoBlog && format(new Date(selectedVideoBlog.createdAt), 'dd MMM yyyy')}
          </Typography>
          <Typography size='large' alignment='left'>
            NewJeans is back with another music video for their ambitious debut! On July 22,
            ADOR—HYBE’s sub-label headed by Min Hee Jin—surprised everyone by releasing their new
            girl group NewJeans’ debut music video for “Attention” without advance warning. NewJeans
            went on to introduce each of the group’s five members through the interactive music
            video for their second title track “Hype Boy,” which dropped on July 23. As the group
            gears up for the release of their first EP in August, they have now unveiled a third
            music video: this time for their B-side “Hurt.” NewJeans will release the music video
            for their third title track “Cookie” on August 1, and their self-titled debut EP will
            drop that same day. The physical version of the EP will be released a week later, on
            August 8. Check out NewJeans’ music video for “Hurt” below!
          </Typography>
        </div>
      </Card>
    </ArticleContainer>
  )
}
