import React from 'react'

const ObjectChild = (props) => {
  return (
    <div>
      <p>{props.personInfo.name}</p>
      <p>{props.personInfo.age}</p>
      <p>{props.personInfo.address}</p>
      <p>{props.personInfo.isStudent?'Yes':'No'}</p>
    </div>
  )
}

export default ObjectChild
