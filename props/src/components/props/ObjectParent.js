import React from 'react'
import ObjectChild from './ObjectChild'

const ObjectParent = () => {
    let person={name:'Harry',age:23,address:'Tel',isStudent:true}
  return (
    <div>
      <h3>Props with object</h3>
      <ObjectChild personInfo={person} />
    </div>
  )
}

export default ObjectParent
