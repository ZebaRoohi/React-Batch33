import React, { useState } from 'react'

const RandomNumbers = () => {
    const[random,setRandom]=useState(0)
    const generateRandom=()=>{
        setRandom(Math.floor(Math.random()*100)+1)
    }
  return (
    <div>
      <h3>Random Numbers Generator</h3>
      <p>{random}</p>
      {/* <button onClick={()=>setRandom(Math.floor(Math.random()*100)+1)}>Random Numbers</button> */}
      <button onClick={generateRandom}>Random Numbers</button>
    </div>
  )
}

export default RandomNumbers
