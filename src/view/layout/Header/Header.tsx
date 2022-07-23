import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { MENU } from './HeaderData'
import { IProps } from './Header.type'
import styles from './Header.module.scss'

function Header(props: React.PropsWithChildren<IProps>) {
  return (
    <div className={styles.Header}>
      {MENU.map((item, i) => (
        <Link key={i} to={item.path} className={styles.HeaderItem}>
          {item.name}
        </Link>
      ))}
      {props.children}
    </div>
  )
}
export default Header
