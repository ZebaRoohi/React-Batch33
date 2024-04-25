import React, { useContext } from 'react'
import StateContext from '../context/state/StateContext'

export default function StateComponent() {
    const{text,value,setText,setValue}=useContext(StateContext)
  return (
    <div>
      <h3>Context Api with useState</h3>
      <p>{text}</p>
      <p>Value:{value}</p>
      <button onClick={()=>setText('Hello from Context Api')}>Click me</button>
      <button onClick={() => setValue('Updated Value')}>Update Value</button>
    </div>
  )
}


