import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Location from './Location'
import Home from './Home'
import About from './About'
import Dashboard from '../useLocation/Dashboard'
const MainLocation = () => {
  return (
   <BrowserRouter>
   <nav>
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/location?searchParam=value#hashValue'>Location</Link></li>

    </ul>
   </nav>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/about' element={<About />}/>
    <Route path='/dashboard' element={<Dashboard />}/>
    <Route path='/location' element={<Location />}/>
   </Routes>
   </BrowserRouter>
  )
}

export default MainLocation
