import React from 'react'
import { ModeBtn, SaveImg, Stats, Gif, Smile, Schedule } from '../../assets/images/Icons'
import Avatar from '../../assets/images/avatar.svg'
import Button from '../../components/Button'

function Home() {
  return (
    <>
    <div className='w-[80%]'>
    <div className='w-[70%] h-[100vh] border-r-[1px] border-slate-400 overflow-y-auto'>
      <div className='p-[20px] border-b-[1px] border-slate-400 flex justify-between'>
        <h2 className='text-[24px] font-bold'>Home</h2>
        <button><ModeBtn/></button>
      </div>
      <form className='pb-[46px] border-b-[1px] border-slate-400 relative pl-[22px] flex items-start gap-[15px]'>
      <img src={Avatar} alt="Avatar" width={60} height={60}/>
      <div className='flex flex-col gap-[51px]'>
      <input type="text" placeholder='What’s happening' name='postValue' className='mt-[11px] font-semibold text-[22px] outline-none'/>
      <div className='flex space-x-[20px]'>
        <label>
          <input type="file" className='hidden'/>
          <SaveImg/>
        </label>
        <label>
          <input type="file" className='hidden'/>
          <Gif/>
        </label>
        <label>
          <input type="file" className='hidden'/>
          <Stats/>
        </label>
        <label>
          <input type="file" className='hidden'/>
          <Smile/>
        </label>
        <label>
          <input type="file" className='hidden'/>
          <Schedule/>
        </label>
      </div>
      </div>
      <Button title={'Tweet'} type={'submit'} extraStyle={'w-[108px] opacity-[40%] py-[13px] absolute bottom-[5px] right-[18px]'}/>
      </form>
      </div>
    <div className='w-[30%]'></div>
    </div>
    </>
  )
}

export default Home
