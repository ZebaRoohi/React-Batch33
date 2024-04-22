import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(0)
    const HandleDecrement=()=>{
      if(count>0){
        setCount(count-1)
      }
    }
  return (
    <div>
      <h3>Counter Application</h3>
      <p>Conter:{count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      {/* <button onClick={()=>setCount(count-1)}>Decrement</button> */}
      <button onClick={HandleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter
