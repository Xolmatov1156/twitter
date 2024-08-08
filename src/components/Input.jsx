import React from 'react'
import './input.css' 

function Input({type, placeholder, name, extraStyle, isRequired}) {
  return (
    <input className={`${extraStyle} w-full input py-[23px] pl-[20px] outline-none text-[18px] rounded-[6px]`} type={type} required={isRequired} placeholder={placeholder} name={name} />
  )
}

export default Input
