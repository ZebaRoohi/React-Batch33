import React, { useCallback, useState } from 'react'

const UseCallbackEx2 = () => {
    const[count,setCount]=useState(0)
    const handleClick=useCallback(()=>{
        if(count%2===0){
            console.log('Even number')
        }
        else{
            console.log('Odd number')
        }
    },[count])
  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default UseCallbackEx2
