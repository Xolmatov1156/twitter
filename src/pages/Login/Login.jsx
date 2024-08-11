import React, { useContext } from 'react'
import { TwitterIcon } from '../../assets/images/Icons'
import { Link } from 'react-router-dom'
import  Input  from '../../components/Input'
import Button from '../../components/Button'
import { Context } from '../../context/Context'

function Login() {
  const {setToken} = useContext(Context)
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      login:e.target.login.value.trim().toLowerCase(),
      password:e.target.password.value.trim().toLowerCase()
    }
    if (data.login == "bobur" && data.password == "123") {
      setToken(data)
      e.target.reset()
    }
    else {
      alert("Failed")
    }
    
  }
  return (
    <>
    <form onSubmit={handleSubmit} autoComplete='off' className='w-[450px] mx-auto mt-[60px]'>
      <Link to={'/'} className='mb-[36px] inline-block'><TwitterIcon/></Link>
      <h1 className='font-bold text-[#1DA1F2] text-[42px] mb-[36px]'>Log in to Twitter</h1>
      <Input isRequired={true} placeholder={'Phone number, email address'} type={'text'} name={'login'} extraStyle={'mb-[25px]'}/>
      <Input isRequired={true} placeholder={'Password'} type={'password'} name={'password'} extraStyle={'mb-[25px]'}/>
      <Button title={'Log In'} type={'submit'}/>
      <div className='flex justify-between text-[#1DA1F2] mt-[40px]'>
        <Link to={'/register'}>Forgot password?</Link>
        <Link to={'/register'}>Sign up to Twitter</Link>
      </div>
    </form>
    </>
  )
}

export default Login
