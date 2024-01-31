import React, { useEffect, useState } from 'react'
import fetchDetails from '../api'
import { Box, Grid } from '@mui/material'

const BookList = ({input}) => {
  const [books,setBooks] = useState([])
    useEffect(() =>{
      const fetchData = async() =>{
        try{
          const booksData = await fetchDetails()
          setBooks(booksData)
        }
        catch(error){
          console.error(error)
        }
      }
      fetchData()
    },[])
  return (
    <div className=' grid grid-cols-6 max-md:grid-cols-4 max-sm:grid-cols-1 gap-y-3 max-sm:justify-center max-sm:w-screen'>
      {books.filter((book) => book.title.toUpperCase().includes(input)).map(book =>(
      <div  key={book.id} className=' px-3 h-72 flex flex-col max-sm:w-[80%]' >
          <img src={book.imageLinks.thumbnail} alt="" className=' object-center  bg-black max-sm:w-[100%] w-[90%] h-[90%] border-2 rounded-lg shadow-lg' />
        <p className=' text-[14px]   font-semibold text-slate-700'>{book.title}</p>
      </div>
      ))}
    </div>
  )
}

export default BookList