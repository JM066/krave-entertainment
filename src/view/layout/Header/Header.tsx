import React, { useState, useEffect, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import NavBar from '../Nav/NavBar'
import { IProps } from './Header.type'
import Button from '../../component/Button/Button'
import { ReactComponent as Logo } from '../../../resource/icons/logo.svg'
import { ReactComponent as Search } from '../../../resource/icons/search.svg'
import { ReactComponent as Dark } from '../../../resource/icons/dark.svg'
import { FaUserAlt } from 'react-icons/fa'

import styles from './Header.module.scss'

function Header(props: React.PropsWithChildren<IProps>) {
  const navigate = useNavigate()
  return (
    <div className={styles.Header}>
      <div className={styles.HeaderLeft}>
        <Button className={styles.Logo} onclick={() => navigate('/')} variant='ghost'>
          <Logo />
        </Button>
        <NavBar />
      </div>
      <div className={styles.HeaderIcons}>
        <Button className={styles.Button} onclick={() => console.log()} variant='ghost'>
          <Search />
        </Button>
        <Button className={styles.Button} onclick={() => console.log()} variant='ghost'>
          <Dark />
        </Button>
        <Button className={styles.Button} onclick={() => console.log()} variant='ghost'>
          <FaUserAlt size={18} />
        </Button>
      </div>
    </div>
  )
}
export default Header
