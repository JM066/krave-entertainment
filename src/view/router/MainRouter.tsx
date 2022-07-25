import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../page/Home/Home'
import FallBack from '../component/FallBack/FallBack'
import MainLayout from '../layout/Layout'
const Quiz = lazy(() => import('../page/Quiz/Quiz'))
const Video = lazy(() => import('../page/Video/Video'))
const Blog = lazy(() => import('../page/Blog/Blog'))

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<FallBack />}>
        <MainLayout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/video' element={<Video />} />
            <Route path='/video/:id' element={<Blog />} />
          </Routes>
        </MainLayout>
      </Suspense>
    </BrowserRouter>
  )
}
