import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './_auth/AuthLayout'
import SignIn from './_auth/forms/SignIn'
import RootLayout from './_root/RootLayout'
import Home from './_root/pages/Home'
import SignUp from './_auth/forms/SignUp'

const App = () => {
  return (
    <Routes>
      <Route element={<AuthLayout/>}>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='sign-up' element={<SignUp/>}/>
      </Route>
      <Route element={<RootLayout/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  )
}

export default App