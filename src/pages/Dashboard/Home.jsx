import React, { useState } from 'react'
import { ModeBtn, SaveImg, Stats, Gif, Smile, Schedule } from '../../assets/images/Icons'
import Avatar from '../../assets/images/avatar.svg'
import Button from '../../components/Button'
import User1 from '../../assets/images/user1.svg'
import User2 from '../../assets/images/user2.svg'
import User3 from '../../assets/images/user3.svg'
import Kebab from '../../assets/images/kebab.png'
import PostItem from '../../components/PostItem'

function Home() {
  const [postValue,setPostValue] = useState("")
  const [postList, setPostList] = useState([
    {
      id:1,
      name:"Designsta",
      imgUrl:User1,
      email:"@inner · 25m",
      description:"Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
      commentCount:"10",
      replyCount:"1",
      likeCount:"8",
      uploadCount:null,
      statisticCount:null,
      postImg:null
    },
    {
      id:2,
      name:"cloutexhibition",
      imgUrl:User2,
      email:"@RajLahoti · 22m",
      description:"YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.",
      commentCount:null,
      replyCount:"5",
      likeCount:"9",
      uploadCount:null,
      statisticCount:null,
      postImg:null
    },
    {
      id:3,
      name:"CreativePhoto",
      imgUrl:User3,
      email:"@cloutexhibition · 1h",
      description:"Обетда.....  Кечиринглар",
      commentCount:"10",
      replyCount:"1",
      likeCount:"8",
      uploadCount:null,
      statisticCount:null,
      postImg:Kebab
    }
  ])
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
      <input onChange={(e) => setPostValue(e.target.value)} type="text" placeholder='What’s happening' name='postValue' className='mt-[11px] font-semibold text-[22px] outline-none'/>
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
      <Button title={'Tweet'} type={'submit'} extraStyle={`w-[108px] py-[13px] absolute bottom-[5px] right-[18px] ${postValue ? "" : "opacity-[40%]"}`}/>
      </form>
      <ul>
        {postList.length > 0 && postList.map(item => <PostItem key={item.id} item={item}/>)}
      </ul>
      </div>
    <div className='w-[30%]'></div>
    </div>
    </>
  )
}

export default Home
