import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegistrationForm from './RegistrationForm'
import LoginForm from './LoginForm'
import Welcome from './Welcome'

const Main = () => {
    const[registration,setRegistration]=useState(false)
    const[logIn,setLogIn]=useState(false)
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<RegistrationForm  setRegistration={setRegistration}/>}/>
        <Route path='/login' element={<LoginForm  setLogIn={setLogIn}/>}/>
        <Route path='/welcome' element={<Welcome />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Main
