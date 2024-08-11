import React from 'react'

function Button({title, type, extraStyle, width}) {
  return (
    <button style={{width:`${width}px`}} type={type} className={`w-full py-[18px] bg-[#1DA1F2] text-[18px] font-bold text-white rounded-[35px] ${extraStyle}`}>{title}</button>
  )
}

export default Button
