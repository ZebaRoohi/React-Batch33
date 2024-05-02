import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'

// npm install react-router-dom
const Main = () => {
  return (
    <BrowserRouter>
    <nav className='nav-bar'>
        <ul className='nav-item'>
            <li className='nav-list'>
                <Link to="/" className='link-list' >Home</Link> </li>
                <li>
                <Link to="/about"  className='link-list'>About</Link>
                </li>
        </ul>
    </nav>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about'element={<About />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Main
