import React, { useEffect, useState } from 'react'

const Counter = () => {
    const[count,setCounter]=useState(0) //1
    useEffect(()=>{
        console.log('Component is Mounting') //2
        return()=>{
            console.log('Componnet is Unmounting') //4
        }
    },[])//dependency array

    useEffect(()=>{
        console.log('Component is updating',count) //3
    },[count])
    const IncrementCounter=()=>{
        setCounter(count+1)   
    }
  return (
    <div>
      <h3>Life Cycle method with UseEffect hook</h3>
      <p>Counter:{count}</p>
      <button onClick={IncrementCounter}>Increment</button>
    </div>
  )
}

export default Counter
