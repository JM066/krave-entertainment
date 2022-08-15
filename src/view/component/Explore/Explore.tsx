import React, { useState, useEffect, useContext, Fragment } from 'react'
import { IProps } from './Explore.type'
import Card from '../Card/Card'
import { Menu1, Menu2, Menu3, Menu4 } from './ExploreData'
import styles from './Explore.module.scss'

function Explore(props: React.PropsWithChildren<IProps>) {
  return (
    <Fragment>
      <Card className={styles.Explore} shadow={true}>
        <div>
          {Menu1.map((item, i) => (
            <div key={i}>{item.name}</div>
          ))}
        </div>
        <hr />
        <div>
          {Menu2.map((item, i) => (
            <div key={i}>{item.name}</div>
          ))}
        </div>
        <div>
          {Menu3.map((item, i) => (
            <div key={i}>{item.name}</div>
          ))}
        </div>
        <hr />
        <div>
          {Menu4.map((item, i) => (
            <div key={i}>{item.name}</div>
          ))}
        </div>
      </Card>
    </Fragment>
  )
}
export default Explore
