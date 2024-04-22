import React, { useEffect, useState } from 'react'

const DidUpdate = () => {
    const[count,setCounter]=useState(0)
    const[text,setText]=useState('Intial String')
    const[message,setMessage]=useState('')
    const[isActive,setIsActive]=useState('Active')
    const[userInfo,setUserInfo]=useState({name:'John',age:23})

    useEffect(()=>{
        setMessage(`Counter:${count} Text:${text} UseStatus:${isActive} UserInfo: Name:${userInfo.name} Age:${userInfo.age}`)
    },[count,text,isActive,userInfo])
    const IncrementCounter=()=>{
        setCounter(count+1)
    }
    const updateText=()=>{
        setText('New Text is updated')
    }
    const Toggle=()=>{
        setIsActive(isActive==='Active'?'InActive':'Active') 
    }
    const updateObject=()=>{
        setUserInfo({name:'Harry',age:21})
    }
  return (
    <div>
      <h3>Component Did Mount with DOM Useeffect</h3>
      <p>{message}</p>
      <button onClick={IncrementCounter}>Increment</button>
      <button onClick={updateText}>Update Text</button>
      <button onClick={Toggle}>Toggle</button>
      <button onClick={updateObject}>Update Object</button>
    </div>
  )
}

export default DidUpdate
