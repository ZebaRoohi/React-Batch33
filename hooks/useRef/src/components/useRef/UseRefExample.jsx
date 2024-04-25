import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const UseRefExample = () => {
    const[name,setName]=useState('')
    const refEle=useRef('')
    console.log(refEle)
    const handleChange=(e)=>{
        setName(e.target.value)
        refEle.current.style.backgroundColor='blue'
        refEle.current.style.color='white'
    }
    const Reset=()=>{
        setName('')
        refEle.current.style.backgroundColor='white'
        
    }
  return (
    <div>
      <input type='text' value={name} onChange={handleChange} ref={refEle} />
      <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default UseRefExample
