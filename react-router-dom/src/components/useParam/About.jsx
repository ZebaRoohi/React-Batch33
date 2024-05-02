import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
    const {topic}=useParams()
  return (
    <div>
      Welcome to About Page
      <p>In the about the page you can see the topic of {topic}</p>
    </div>
  )
}

export default About
