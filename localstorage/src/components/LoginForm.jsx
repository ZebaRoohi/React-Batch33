import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = ({setLogIn}) => {
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[error,setError]=useState('')
    const navigate=useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault();
      if (localStorage.getItem(username) === password) {
        setLogIn(true);
        navigate('/welcome');
      } else {
        setError('Invalid username or password');
      }
    };
  
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

export default LoginForm
