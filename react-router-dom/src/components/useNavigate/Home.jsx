import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate()
    const GotoAbout=()=>{
        navigate('/about')
    }
  return (
    <div>
      <h3>Welcome to Home page</h3>
      <Link to='/about'>Go to About Page</Link>
      <button onClick={GotoAbout}>Go to Aboute(useNavigate)</button>
    </div>
  )
}

export default Home
