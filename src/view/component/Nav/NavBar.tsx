import React from 'react'
import { Link } from 'react-router-dom'
import { MENU } from './NavData'
import { BiDownArrow } from 'react-icons/bi'
import { IProps } from './NavBar.type'

import styles from './NavBar.module.scss'

function NavBar(props: React.PropsWithChildren<IProps>) {
  return (
    <div className={styles.NavBar}>
      <div className={styles.ExploreButton} onClick={props.handleExplore}>
        <div>EXPLORE</div>
        <div className={styles.Arrow}>
          <BiDownArrow size={18} />
        </div>
      </div>
      <div className={styles.NavItems}>
        {MENU.map((item, i) => (
          <Link key={i} to={item.path} className={styles.NavItem}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
export default NavBar
