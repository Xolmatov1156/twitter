import React, { useContext, useState } from 'react'
import { ModeBtn, SaveImg, Stats, Gif, Smile, Schedule } from '../../assets/images/Icons'
import Avatar from '../../assets/images/avatar.svg'
import Button from '../../components/Button'
import PostItem from '../../components/PostItem'
import { Context } from '../../context/Context'

function Home() {
  const {postList, setPostList} = useContext(Context)
  const [postImg, setPostImg] = useState("")
  const token = JSON.parse(localStorage.getItem("token"))
  const [postValue,setPostValue] = useState("")
 

  function handleSubmitPost(e){
    e.preventDefault()
    const data =  
    {
      id: postList.length ? postList[postList.length - 1].id + 1 : 1,
      name:token?.login,
      imgUrl:Avatar,
      email:"@inner · 25m",
      description:e.target.postValue.value,
      commentCount:null,
      replyCount:null,
      likeCount:null,
      uploadCount:null,
      statisticCount:null,
      postImg:postImg
      }
      setPostList([data, ...postList])
      e.target.reset()
  }
  return (
    <>
    <div className='w-[80%]'>
    <div className='w-[70%] h-[100vh] border-r-[1px] border-slate-400 overflow-y-auto'>
      <div className='p-[20px] border-b-[1px] border-slate-400 flex justify-between'>
        <h2 className='text-[24px] font-bold'>Home</h2>
        <button><ModeBtn/></button>
      </div>
      <form onSubmit={handleSubmitPost} className='pb-[46px] border-b-[1px] border-slate-400 relative pl-[22px] flex items-start gap-[15px]'>
      <img src={Avatar} alt="Avatar" width={60} height={60}/>
      <div className='flex flex-col gap-[51px]'>
      <input onChange={(e) => setPostValue(e.target.value)} type="text" placeholder='What’s happening' name='postValue' className='mt-[11px] font-semibold text-[22px] outline-none'/>
      <div className='flex space-x-[20px]'>
        <label>
          <input required onChange={(e) => setPostImg(URL.createObjectURL(e.target.files[0]))} type="file" className='hidden'/>
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
      <Button title={'Tweet'} type={'submit'} width={108} extraStyle={` py-[13px] absolute bottom-[5px] right-[18px] ${postValue ? "" : "opacity-[40%]"}`}/>
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
