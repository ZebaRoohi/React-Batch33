import React, { useMemo, useState } from 'react'

const SquareNumber = () => {
    const[num,setNum]=useState()
    const square=useMemo(()=>{
        return num*num
    },[num])
  return (
    <div>
      <input type='text' value={num} onChange={(e)=>parseInt(setNum(e.target.value))} />
      <p>Square:{square}</p>
    </div>
  )
}

export default SquareNumber
