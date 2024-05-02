import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const About = () => {
    const navigate=useNavigate()
    const GotoHome=()=>{
        navigate(-1)
    }
  return (
    <div>
      <h3>Welcome to About page</h3>
      <Link to='/'>Go to Home page</Link>
      <button onClick={GotoHome}>Go to Home</button>
    </div>
  )
}

export default About
