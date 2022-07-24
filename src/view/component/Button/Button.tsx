import React from 'react'
import classNames from 'classnames'
import Typography from '../Typography/Typography'
import { IProps } from './Button.type'

import SmallSpinner from '../SmallSpinner/SmallSpinner'
import styles from './Button.module.scss'

export default function Button(props: React.PropsWithChildren<IProps>) {
  const handleIcon = () => {
    return props.icon !== undefined ? <div>{props.icon}</div> : <span className={styles.hidden} />
  }

  const handleClick = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (props.disable !== true) {
      props.onclick(ev)
    }
  }
  return (
    <button
      className={classNames(
        styles.Button,
        styles[props.variant],
        { [styles.round]: props.round },
        { [styles.disabled]: props.disable },
        props.className,
      )}
      onClick={(ev) => handleClick(ev)}
    >
      {props.loading ? <SmallSpinner /> : props.children}
      {handleIcon()}
    </button>
  )
}
