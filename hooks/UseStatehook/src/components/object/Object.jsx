import React, { useState } from 'react'

const Object = () => {
    const[person,setPerson]=useState({name:'John',age:24})
    const handleClick=()=>{
        setPerson({...person,age:person.age+1,name:'harry'})
    }
  return (
    <div>
      <h3>Object</h3>
      <p>{person.name}</p>
      <p>{person.age}</p>
      <button onClick={handleClick}>Increment Age</button>
    </div>
  )
}

export default Object
