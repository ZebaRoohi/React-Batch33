import React, { useState } from 'react'

const Null = () => {
    const[value,setValue]=useState(null)
    const handleClick=()=>{
        setTimeout(()=>{
            setValue('Updated Null Value')
        },2000)
        
    }
  return (
    <div>
      <h3>Null value</h3>
      <p>Current value:{value===null?'Null':value}</p>
      <button onClick={handleClick}>Update Null</button>
    </div>
  )
}

export default Null
