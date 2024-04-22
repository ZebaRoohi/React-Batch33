import React, { useState } from 'react'

const ArrayNumber = () => {
    const[numbers,setNumbers]=useState([1,2,3,4,5,6])
    const handleFilter=()=>{
        setNumbers(numbers.filter((number)=>number%2===0))
    }
  return (
    <div>
      <h3>Arrays with Numbers</h3>
      {numbers.map((number,index)=>(
        <div key={index}>{number}</div>
      ))}

      <button onClick={handleFilter}>Filter Numbers</button>
    </div>
  )
}

export default ArrayNumber
