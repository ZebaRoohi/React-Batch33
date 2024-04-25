import React, { useEffect, useRef, useState } from 'react'

const UseRefExample2 = () => {
    const[name,setName]=useState('')
    const[value,setValue]=useState(0)
    const refEle=useRef()
    console.log(refEle)
    const handleChange=(e)=>{
        setName(e.target.value)
        refEle.current.focus()
    }
    const handleSubmit=()=>{
        refEle.current.select()
    }
    const Increment=()=>{
        setValue(value+1)
    }
    useEffect(()=>{
        refEle.current=value
    },[value])
  return (
    <div>
      <input type='text' value={name} onChange={handleChange} ref={refEle}/>
      <button onClick={handleSubmit}>Submit</button>
      <p>Current Value={value}</p>
      <p>Previous Value={refEle.current}</p>
      <button onClick={Increment}>Increment</button>
    </div>
  )
}

export default UseRefExample2
