import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    const handleClick=()=>{
        alert('Button is click from parent component')
    }
  return (
    <div>
      <ChildComponent btnclick={handleClick} />
    </div>
  )
}

export default ParentComponent
