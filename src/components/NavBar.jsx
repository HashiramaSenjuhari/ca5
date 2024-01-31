import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import BookList from './BookList';

const NavBar = () => {
  const [input,setInput] = useState('')
  useEffect(() =>{
    localStorage.getItem('username')
  },[])
  return (
    <>
        <div className=' p-5 w-full flex justify-between border-b relative max-sm:flex-col max-sm:gap-y-7'>
      <div className='flex items-center font-semibold gap-x-3 tracking-tighter'>
        <img src="https://kalvium.community/images/sidebar-3d-logo.svg" alt="" />
        Kalvium Books
      </div>
      <div className=' flex gap-x-5'>
        <div className=' flex items-center bg-white gap-x-2 pl-2 rounded-lg border'>
        <SearchIcon/>
        <input type="text" className=' py-2 w-72 outline-none rounded-lg text-[12px]' placeholder='Search'value={input} onChange={(e) =>{setInput(e.target.value.toUpperCase())}}/>
        </div>
        <Button variant='contained' sx={{bgcolor:'black',textTransform:'none',':hover':{bgcolor:'black'}}}><Link to={'/sign-up'}>
        Register
        </Link></Button>
      </div>
    </div>
    <BookList input={input}/>
    </>
    
  )
}     

export default NavBar