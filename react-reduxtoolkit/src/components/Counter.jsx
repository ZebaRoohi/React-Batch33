import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './counterSlice'

const Counter = () => {
    const count=useSelector((state)=>state.counter)
    const dispatch=useDispatch()
  return (
    <div>
      <h3>Counter Application with React Redux</h3>
      <p>Counter:{count}</p>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter
