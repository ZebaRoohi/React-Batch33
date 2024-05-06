import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RegistrationForm = ({setRegistration}) => {
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[error,setError]=useState('')
    const navigate=useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault()
        if (localStorage.getItem(username)) {
          setError('Username already exists');
        } else {
          localStorage.setItem(username, password);
          setRegistration(true);
          navigate('/login');
        }
      }
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>UserName:</label>
        <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} />
        <label>Password:</label>
        <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button type='submit'>Submit</button>
        {error &&<p>{error}</p>}
             </form>
    </div>
  )
}

export default RegistrationForm
