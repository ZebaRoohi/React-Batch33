import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const[a,setA]=useState()
    const[b,setB]=useState()

    const add=useMemo(()=>{
        console.log('addition value is')
        return a+b;
    },[a,b])
    const sub=useMemo(()=>{
        console.log('substratction value is')
        return a-b
    },[a,b])
    const mul=useMemo(()=>{
        console.log('Multiplication value is')
        return a*b
    },[a,b])
    const div=useMemo(()=>{
        console.log('Division value is')
        return a/b
    },[a,b])
  return (
    <div>
      <h3>Example of UseMemo()</h3>
      <input type='text' value={a} onChange={(e)=>parseInt(setA(e.target.value))} />
      <input type='text' value={b} onChange={(e)=>parseInt(setB(e.target.value))} />

      <p>Addition:{add}</p>
      <p>Substraction:{sub}</p>
      <p>Multiplication:{mul}</p>
      <p>Division:{div}</p>
    </div>
  )
}

export default UseMemo
