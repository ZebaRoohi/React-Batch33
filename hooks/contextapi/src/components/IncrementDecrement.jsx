import React, { useContext } from 'react'
import CounterContext from '../context/counter/CounterContex'

function IncrementDecrement() {
    const{Increment,Decrement}=useContext(CounterContext)
  return (
    <div>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default IncrementDecrement
