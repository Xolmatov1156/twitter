import {useState} from 'react'
import Avatar from '../../../assets/images/avatar.svg'
import PostedItem from '../../../components/PostedItem'

function Tweets() {
  const [postedList, setPostedList] = useState([
    {
      id:1,
      name:"Bobur",
      imgUrl:Avatar,
      email:"@bobur_mavlonov · Apr 1",
      description:"4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim",
      commentCount:"10",
      replyCount:"1",
      likeCount:"8",
      uploadCount:null,
      statisticCount:null,
      postImg:null
    },
    {
      id:2,
      name:"Bobur",
      imgUrl:Avatar,
      email:"@bobur_mavlonov · Apr 1",
      description:"Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida.",
      commentCount:null,
      replyCount:"5",
      likeCount:"9",
      uploadCount:null,
      statisticCount:null,
      postImg:null
    },
    {
      id:3,
      name:"Bobur",
      imgUrl:Avatar,
      email:"@bobur_mavlonov · Apr 1",
      description:"A bo'pti maskamasman",
      commentCount:"10",
      replyCount:"1",
      likeCount:"8",
      uploadCount:null,
      statisticCount:null,
      postImg:null
    }
  ])
  return (
    <div className='px-[25px]'>
      twets
    </div>
  )
}

export default Tweets
