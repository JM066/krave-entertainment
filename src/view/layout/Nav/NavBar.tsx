import React from 'react'
import { Link } from 'react-router-dom'
import { MENU } from './NavData'

import styles from './NavBar.module.scss'

function NavBar(props: React.PropsWithChildren) {
  return (
    <div className={styles.NavBar}>
      {MENU.map((item, i) => (
        <Link key={i} to={item.path} className={styles.NavItem}>
          {item.name}
        </Link>
      ))}
    </div>
  )
}
export default NavBar
