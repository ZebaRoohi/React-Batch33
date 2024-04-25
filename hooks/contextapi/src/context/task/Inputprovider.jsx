import React, { useState } from 'react'
import InputContext from './InputContext'
import InputComponent from '../../components/InputComponent'
import LabelComponent from '../../components/LabelComponent'

const Inputprovider = () => {
    const[text,setText]=useState('')
  return (
    <InputContext.Provider value={{text,setText}}>
        <InputComponent />
        <LabelComponent />
    </InputContext.Provider>
  )
}

export default Inputprovider
