import React from 'react'

const ArrayChild = ({details}) => {
  return (
    <div>
      <ul>
        {details?.map((col,index)=>(
            <li key={index}>{col}</li>
        ))}
      </ul>
    
    </div>
  )
}

export default ArrayChild
