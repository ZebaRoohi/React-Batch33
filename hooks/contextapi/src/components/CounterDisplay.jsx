import React, { useContext } from 'react'
import CounterContext from '../context/counter/CounterContex'

function CounterDisplay() {
    const{count}=useContext(CounterContext)
  return (
    <div>
      <p>Counter:{count}</p>
    </div>
  )
}

export default CounterDisplay
