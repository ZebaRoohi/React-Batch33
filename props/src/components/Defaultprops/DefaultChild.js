import React from 'react'

const DefaultChild = ({name='Peter',age=21}) => {
  return (
    <div>
        <h3>Default Destructing</h3>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  )
}

export default DefaultChild
