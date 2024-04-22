import React, { useState } from 'react'

const String = () => {
    const[str,setStr]=useState('Intial Value')
    const updateStr=()=>{
        setStr('New String is Updated')
    }
  return (
    <div>
        <p>Current String:{str}</p>
      <button onClick={updateStr}>Updated String</button>
    </div>
  )
}

export default String
