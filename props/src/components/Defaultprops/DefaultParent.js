import React from 'react'
import DefaultChild from './DefaultChild'

const DefaultParent = () => {
    const person={
        name:'John'
    }
  return (
    <div>
      <DefaultChild {...person} />
    </div>
  )
}

export default DefaultParent
