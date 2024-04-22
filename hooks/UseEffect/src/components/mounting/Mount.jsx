import React, { useEffect, useState } from 'react'

const Mount = () => {
    const[number,setNumber]=useState(0)
    const[text,setText]=useState('')
    const[userInfo,setUserInfo]=useState({name:'',age:0})
    const[isActive,setIsActive]=useState(true)
    useEffect(()=>{
        setNumber(34)
        setText('String Mounting')
        setUserInfo({name:'John',age:23})
        setIsActive(false)
    },[])
  return (
    <div>
      <h3>Mounting Stage</h3>
      <p>Mounting Number:{number}</p>
      <p>Mounting String:{text}</p>
      <p>Mounting Object:Name:{userInfo.name}-Age:{userInfo.age}</p>
      <p>Mouting Boolean:{isActive?'Yes':'No'}</p>
    </div>
  )
}

export default Mount
