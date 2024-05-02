import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ResponsiveAppBar from './Responsivebar'
import Home from './Home'
import About from './About'
import Contact from './Contact'


const MainNavbar = () => {
  return (
   <BrowserRouter>
   <ResponsiveAppBar />
   <Routes>
    <Route path='/home' element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/contact' element={<Contact />}/>
   </Routes>
   </BrowserRouter>
  )
}

export default MainNavbar
