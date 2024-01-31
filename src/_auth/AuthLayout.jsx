import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBanner from '../../public/assests/new_file.svg'

const AuthLayout = () => {
  return (
    <div className=' w-full h-screen flex'>
    <Outlet/>
    <img src={SideBanner} alt="" className=' w-2/4 h-full object-cover md:block max-md:hidden' />
    </div>
  )
}

export default AuthLayout