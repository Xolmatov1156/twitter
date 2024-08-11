import React, { useContext } from 'react'
import { Dots, CommentIcon, RetweetIcon, LikeIcon, Share, StatisticIcon } from '../assets/images/Icons'
import { Context } from '../context/Context'

function PostedItem({item}) {
  const {postedList, setPostedList} = useContext(Context) 
  function handleCommentClick(value){
    value.isCommented = !value.isCommented
    value.commentCount = value.isCommented ? ++value.commentCount : --value.commentCount
    if (value.commentCount == 0) value.commentCount = null
    setPostList([...postedList])
  }
  function handleRetweetClick(value){
    value.isRepleyed = !value.isRepleyed
    value.replyCount = value.isRepleyed ? ++value.replyCount : --value.replyCount
    if (value.replyCount == 0) value.replyCount = null
    setPostList([...postedList])
  }
  function handleLikeClick(value){
    value.isLiked = !value.isLiked
    value.likeCount = value.isLiked ? ++value.likeCount : --value.likeCount
    if (value.likeCount == 0) value.likeCount = null
    setPostList([...postedList])
  }
  function handleShareClick(value){
    value.isShared = !value.isShared
    value.uploadCount = value.isShared ? ++value.uploadCount : --value.uploadCount
    if (value.uploadCount == 0) value.uploadCount = null
    setPostList([...postedList])
  }
  function handleStatisticClick(value){
    value.isStatisted = !value.isStatisted
    value.statisticCount = value.isStatisted ? ++value.statisticCount : --value.statisticCount
    if (value.statisticCount == 0) value.statisticCount = null
    setPostList([...postedList])
  }
  return (
    <li className='flex relative space-x-[15px] items-start pt-[10px] pb-[21px] px-[25px] border-b-[1px] border-slate-400'>
        <img src={item.imgUrl} alt="Avatar" width={60} height={60}/>
        <div>
            <div className='flex space-x-[5px]'>
                <strong>{item.name}</strong>
                <span>{item.email}</span>
            </div>
            <p>{item.description}</p>
            { item.postImg ?
            <img src={item.postImg} alt="postImg" className='mt-[15px]'/>
            : ""
          }
          <div className='mt-[22px] flex justify-between items-center w-[500px]'>
            <button onClick={() => handleCommentClick(item)} className={`${item.isCommented} flex space-x-[10px]`}>
              <CommentIcon/>
              <span>{item.commentCount}</span>
            </button>
            <button onClick={() => handleRetweetClick(item)} className={`${item.isRepleyed} flex space-x-[10px]`}>
              <RetweetIcon/>
              <span>{item.replyCount}</span>
            </button>
            <button onClick={() => handleLikeClick(item)} className={`${item.isLiked} flex space-x-[10px]`}>
              <LikeIcon/>
              <span>{item.likeCount}</span>
            </button>
            <button onClick={() => handleShareClick(item)} className={`${item.isShared} flex space-x-[10px]`}>
              <Share/>
              <span>{item.uploadCount}</span>
            </button>
            <button onClick={() => handleStatisticClick(item)} className={`${item.isStatisted} flex space-x-[10px]`}>
              <StatisticIcon/>
              <span>{item.statisticCount}</span>
            </button>
          </div>
        </div>
        <button className='absolute top-[21px] right-[25px]'>
          <Dots/>
        </button>
    </li>
  )
}

export default PostedItem
