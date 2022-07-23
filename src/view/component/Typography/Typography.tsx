import React from 'react'
import classNames from 'classnames'
import { IProps } from './Typography.type'
import styles from './Typegraphy.module.scss'

export default function Typography(props: React.PropsWithChildren<IProps>) {
  return (
    <div
      className={classNames(
        styles.Typography,
        styles[props.alignment],
        { [styles.bold]: props.bolded },
        props.className,
      )}
    >
      {props.children}
    </div>
  )
}
