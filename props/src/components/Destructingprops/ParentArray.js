import React from 'react'
import ArrayChild from './ArrayChild'


const ParentArray = () => {
    const color=['red','blue','orange','green']
  return (
    <div>
      <ArrayChild details={color} />
    </div>
  )
}

export default ParentArray
