import React, { useState } from 'react'
import CounterContext from './CounterContex'
import IncrementDecrement from '../../components/IncrementDecrement'
import CounterDisplay from '../../components/CounterDisplay'

const CounterProvider = () => {
    const[count,setCount]=useState(0)
    const Increment=()=>{
        setCount(count+1)
    }
    const Decrement=()=>{
        setCount(count-1)
    }
  return (
    <CounterContext.Provider value={{count,Increment,Decrement}}>
        <IncrementDecrement />
        <CounterDisplay />
    </CounterContext.Provider>
  )
}

export default CounterProvider
