import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'

const MainParam = () => {
  return (
  <BrowserRouter>
  <nav>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about/react">About React</Link>
        </li>
        <li>
            <Link to="/about/javascript">About JavaScript</Link>
        </li>
        <li>
            <Link to="/about/nodejs">About Nodejs</Link>
        </li>
    </ul>
  </nav>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about/:topic" element={<About />} />
  </Routes>
  </BrowserRouter>
  )
}

export default MainParam
