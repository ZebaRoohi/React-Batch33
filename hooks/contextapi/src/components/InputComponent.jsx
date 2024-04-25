import React, { useContext } from 'react'
import InputContext from '../context/task/InputContext'

const InputComponent = () => {
    const{setText}=useContext(InputContext)
    const handleChange=(e)=>{
        setText(e.target.value)
    }
  return (
    <div>
      <input type='text' onChange={handleChange} />
    </div>
  )
}

export default InputComponent
