import React from 'react'
import NavBar from '../components/NavBar'
import BookList from '../components/BookList'

const RootLayout = () => {
  return (
    <div className=' flex flex-col gap-y-12'>
      <NavBar/>
    </div>
  )
}

export default RootLayout