import React from 'react'
import Child from './Child'

const Parent = () => {
    const message='Hello from parent component'
  return (
    <div>
      <h2>Props Destucturing</h2>
      <Child msg={message} />
    </div>
  )
}

export default Parent
