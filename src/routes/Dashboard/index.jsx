import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import LoadingImg from '../../assets/images/loading.png'
import {Tweets, TweetsReplies, Media, Likes} from '../../pages/Dashboard/ProfileItems'

const Home = lazy(() => new Promise(resolve => {
  return setTimeout(() => resolve(import("../../pages/Dashboard/Home")),1500)
}))

const Profile = lazy(() => new Promise(resolve => {
  return setTimeout(() => resolve(import("../../pages/Dashboard/Profile")),1500)
}))

function DashboardPage() {
  return (
    <div className='w-[1250px] mx-auto flex justify-between relative'>
    <Navbar/>
    <Routes>
        <Route path='/' element={
          <Suspense fallback={
            <div className=' absolute left-[500px] top-[100px]'>
              <img src={LoadingImg} alt="Loading Page" width={600} height={600}/>
            </div>
          }>
            <Home />
          </Suspense>
            }/>
        <Route path='/profile' element={
          <Suspense fallback={
            <div className=' absolute left-[500px] top-[100px]'>
              <img src={LoadingImg} alt="Loading Page" width={600} height={600}/>
            </div>
          }>
            <Profile />
          </Suspense>
          }>
            <Route path='' index element={<Tweets/>} />
            <Route path='tweets-replies' element={<TweetsReplies/>} />
            <Route path='media' element={<Media/>} />
            <Route path='likes' element={<Likes/>} />
          </Route>
    </Routes>
    </div>
  )
}

export default DashboardPage
