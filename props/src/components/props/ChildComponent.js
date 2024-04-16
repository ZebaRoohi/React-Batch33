import React from 'react'

const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={props.btnclick}>Click Me </button>
    </div>
  )
}

export default ChildComponent
