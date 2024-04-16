import React from 'react'

const ArrayChild = (props) => {
  return (
    <div>
      <h3>Array List with props</h3>
      <ul>
        {props.colorList.map((color,index)=>(
            <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  )
}

export default ArrayChild
