import { createContext, useState } from "react";
import User1 from '../assets/images/user1.svg'
import User2 from '../assets/images/user2.svg'
import User3 from '../assets/images/user3.svg'
import Kebab from '../assets/images/kebab.png'

const Context = createContext()


const TokenContext = ({children}) => {
    const [token, setToken] = useState(JSON.parse(window.localStorage.getItem("token")) || false)
    const [postList, setPostList] = useState(JSON.parse(window.localStorage.getItem("postList")) || [
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
    window.localStorage.setItem("token", JSON.stringify(token))
    window.localStorage.setItem("postList", JSON.stringify(postList))
    return(
        <Context.Provider value={{token, setToken, postList, setPostList}}>{children}</Context.Provider>
    )
}

export {Context, TokenContext}