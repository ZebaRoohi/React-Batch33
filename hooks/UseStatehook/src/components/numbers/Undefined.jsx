import React, { useState } from 'react'

const Undefined = () => {
    const[value,setValue]=useState(undefined)
    const handleClick=()=>{
        setValue('Updated to New Value')
    }
  return (
    <div>
        <p>Current Value:{value===undefined?'Undefined':value}</p>
      <button onClick={handleClick}>Update Value</button>
    </div>
  )
}

export default Undefined
