import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

const ParentCountry = () => {
  return (
    <div>
      <Child1 country="India" />
      <Child2 capital="Delhi" />
    </div>
  )
}

export default ParentCountry

