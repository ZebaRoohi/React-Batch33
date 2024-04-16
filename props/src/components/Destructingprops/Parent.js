import React from 'react'
import Child from './Child'

const Parent = () => {
    const message='Hello from parent component'
  return (
    <div>
      <Child msg={message} />
    </div>
  )
}

export default Parent
