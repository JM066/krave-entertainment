import React from 'react'
import Header from '../Header/Header'

export default function MainLayout(props: React.PropsWithChildren) {
  return (
    <div>
      <Header></Header>
      {props.children}
    </div>
  )
}
