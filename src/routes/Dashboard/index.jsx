import React from 'react'
import {Home, Profile} from '../../pages/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../../components/Navbar'

function DashboardPage() {
  return (
    <div className='w-[1250px] mx-auto flex justify-between'>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/profile' element={<Profile />}/>
    </Routes>
    </div>
  )
}

export default DashboardPage
