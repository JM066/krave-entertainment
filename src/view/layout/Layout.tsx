import React, { Fragment } from 'react'
import Header from './Header/Header'
import styles from './Layout.module.scss'
export default function Layout(props: React.PropsWithChildren) {
  return (
    <Fragment>
      <Header />
      {props.children}
    </Fragment>
  )
}
