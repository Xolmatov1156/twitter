import React from 'react'
import { Link } from 'react-router-dom'
import {HomeTwitterIcon, HomeIcon, Dots, ExploreIcon, Notifications, Messages, Bookmarks, Lists, Profile, More} from '../assets/images/Icons'
import NavbarItem from '../components/NavbarItem'
import Button from './Button'
import Avatar from '../assets/images/avatar.svg'
function Navbar() {
  const navbarList = [
    {
      id:1,
      title:"Home",
      path:"/",
      icon:<HomeIcon/>
    },
    {
      id:2,
      title:"Explore",
      path:"/explore",
      icon:<ExploreIcon/>
    },
    {
      id:3,
      title:"Notifications",
      path:"/notifications",
      icon:<Notifications/>
    },
    {
      id:4,
      title:"Messages",
      path:"/messages",
      icon:<Messages/>
    },
    {
      id:5,
      title:"Bookmarks",
      path:"/bookmarks",
      icon:<Bookmarks/>
    },
    {
      id:6,
      title:"Lists",
      path:"/lists",
      icon:<Lists/>
    },
    {
      id:7,
      title:"Profile",
      path:"/profile",
      icon:<Profile/>
    },
    {
      id:8,
      title:"More",
      path:"/more",
      icon:<More/>
    },
  ]
  return (
    <div className='w-[20%] pt-[31px] pr-[53px] h-[100vh] border-r-[1px] border-slate-400 overflow-y-auto'>
      <Link to={'/'} ><HomeTwitterIcon/></Link>
      <ul className='mt-[49px] space-y-[30px] mb-[30px]'>
        {navbarList.map(item => (
          <NavbarItem key={item.id} item={item} />
        ))}
      </ul>
      <Button title={'Tweet'} type={'button'} extraStyle={'w-[230px] py-[15px]'}/>
      <div className='flex mt-[100px]'>
        <img src={Avatar} alt="Avatar" width={50} height={50}/>
        <div className='flex flex-col pl-[10px]'>
          <strong>Bobour</strong>
          <a href="mailto:">@bobur_mavlonov</a>
        </div>
        <button className='ml-[30px]'><Dots/></button>
      </div>
    </div>

  )
}

export default Navbar
