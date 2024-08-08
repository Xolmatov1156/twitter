import React from 'react'
import { ModeBtn } from '../../assets/images/Icons'

function Home() {
  return (
    <>
    <div className='w-[80%]'>
    <div className='w-[70%] h-[100vh] border-r-[1px] border-slate-400 overflow-y-auto'>
      <div className='p-[20px] border-b-[1px] border-slate-400 flex justify-between'>
        <h2 className='text-[24px] font-bold'>Home</h2>
        <button><ModeBtn/></button>
      </div>
      </div>
    <div className='w-[30%]'></div>
    </div>
    </>
  )
}

export default Home
