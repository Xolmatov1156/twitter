import React from 'react'

function PostItem({item}) {
  return (
    <li>
        <img src={item.imgUrl} alt="Avatar" width={60} height={60}/>
        <div>
            <div className='flex space-x-[5px]'>
                <strong>{item.name}</strong>
                <span>{item.email}</span>
            </div>
            <p>{item.description}</p>
        </div>
    </li>
  )
}

export default PostItem
