import React from 'react'
import {ModeBtn, Back, Location, Link, Ballon, Date} from '../../assets/images/Icons'
import ProfileBg from '../../assets/images/profile_bg.png'
import Avatar from '../../assets/images/avatar.svg'
import Button from '../../components/Button'
const token = JSON.parse(localStorage.getItem("token"))
function Profile() {
  return (
    <div className='w-[80%]'>
    <div className='w-[75%] h-[100vh] border-r-[1px] border-slate-400 overflow-y-auto'>
      <div className='px-[20px] py-[10px] border-b-[1px] border-slate-400 flex justify-between'>
        <div className='flex space-x-[25px] items-center'>
          <Back/>
          <div className='flex flex-col'>
            <strong className='capitalize'>{token.login}</strong>
            <span className='text-slate-400 text-[14px]'>1,070 Tweets</span>
          </div>
        </div>
        <button><ModeBtn/></button>
      </div>
        <div className='h-[200px] relative'>
            <img src={ProfileBg} alt="Profile Bg"  height={280}/>
            <div className='flex justify-between -translate-y-[80px] px-[25px] items-end'>
            <img src={Avatar} alt="Avatar" width={150} height={150}/>
            <Button extraStyle={"w-[120px] h-[44px] py-[10px] bg-white text-black border-[1px] border-slate-400"} title={'Edit profile'}/>
            </div>
          </div>
          <div className='mt-[100px] px-[25px] flex flex-col'>
            <h3 className='capitalize font-bold text-[24px]'>{token.login}</h3>
            <p className='text-slate-500'>@bobur_mavlonov</p>
            <p className='mt-[15px] text-[18px]'>UX&UI designer at <span className='text-[#1DA1F2]'>@abutechuz</span></p>
            <ul className='mt-[15px] flex justify-between'>
              <li className='flex space-x-[5px]'>
                <Location/>
                <span className='text-[15px]'>Mashag’daman</span>
              </li>
              <li className='flex space-x-[5px]'>
                <Link/>
                <span className='text-[15px] text-[#1DA1F2]'>t.me/boburjon_mavlonov</span>
              </li>
              <li className='flex space-x-[5px]'>
                <Ballon/>
                <span className='text-[14px]'>Born November 24, 2000</span>
              </li>
              <li className='flex space-x-[5px]'>
                <Date/>
                <span className='text-[14px]'>Joined May 2020</span>
              </li>
            </ul>
            <div className='mt-[15px] space-x-[30px] flex'>
              <p className='text-slate-500'><span className='font-bold text-black'>67</span> Following</p>
              <p className='text-slate-500'><span className='font-bold text-black'>47</span> Followers</p>
            </div>
          </div>
      </div>
    <div className='w-[25%]'></div>
    </div>
  )
}

export default Profile
