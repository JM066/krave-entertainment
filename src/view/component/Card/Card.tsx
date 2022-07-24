import classNames from 'classnames'
import React from 'react'
import { IProps } from './Card.type'
import styles from './Card.module.scss'

function Card(props: React.PropsWithChildren<IProps>) {
  return (
    <div
      onClick={props.onclick}
      className={classNames(styles.Card, props.className, {
        [styles.border]: props.border,
        [styles.shadow]: props.shadow,
      })}
    >
      {props.children}
    </div>
  )
}

export default Card
