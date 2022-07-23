import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../page/Home/Home'
import FallBack from '../component/FallBack/FallBack'
import MainLayout from '../layout/MainLayout/MainLayout'
const Explore = lazy(() => import('../page/Explore/Explore'))

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<FallBack />}>
        <MainLayout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/explore' element={<Explore />} />
          </Routes>
        </MainLayout>
      </Suspense>
    </BrowserRouter>
  )
}
