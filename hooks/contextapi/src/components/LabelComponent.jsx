import React, { useContext } from 'react'
import InputContext from '../context/task/InputContext'

const LabelComponent = () => {
    const{text}=useContext(InputContext)
  return (
    <div>
      <p>{text.split('').reverse().join('')}</p>
    </div>
  )
}

export default LabelComponent
