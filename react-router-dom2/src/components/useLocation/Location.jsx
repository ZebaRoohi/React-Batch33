import React from 'react'
import { useLocation } from 'react-router-dom'

const Location = () => {
    const location=useLocation()
  return (
    <div>
      <h3>Welcome to Location page</h3>
      <p>Current Path:{location.pathname}</p>
      <p>Current Search:{location.search}</p>
      <p>Currrent Hash:{location.hash}</p>
    </div>
  )
}

export default Location
