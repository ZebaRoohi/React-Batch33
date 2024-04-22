import React, { useState } from 'react'

const StringInput = () => {
    const[inputValue,setInputValue]=useState('')
    const handleChange=(e)=>{
        setInputValue(e.target.value)
    }
    const handleClick=()=>{
      setInputValue(inputValue.split('').reverse().join(''))
    }
  return (
    <div>
      <input type='text' value={inputValue} onChange={handleChange} />
      <p>Enter Text:{inputValue}</p>
      <p>Entered Text Length:{inputValue.length}</p>
      <button onClick={handleClick}>Reverse String</button>
    </div>
  )
}

export default StringInput
