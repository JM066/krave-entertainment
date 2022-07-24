import React from 'react'
import ReactDOM from 'react-dom/client'
import MainRouter from './view/router/MainRouter'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { videoApi } from './redux/api/videoApi'
import '../src/view/styles/globals.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ApiProvider api={videoApi}>
      <MainRouter />
    </ApiProvider>
  </React.StrictMode>,
)
